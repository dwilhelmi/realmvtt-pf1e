// PF1e Attack Roll Handler
// Determines hit/miss, critical threat, and provides confirmation + damage buttons
const rollName = data?.roll?.metadata?.rollName;
const traits = data?.roll?.metadata?.traits || [];
const attack = data?.roll?.metadata?.attack;
const targetName = data?.roll?.metadata?.targetName;
const tooltip = data?.roll?.metadata?.tooltip;
const dcName = data?.roll?.metadata?.dcName || "AC";
const damageModifiers = data?.roll?.metadata?.damageModifiers || [];
const damageType = data?.roll?.metadata?.damageType || "untyped";
const icon = data?.roll?.metadata?.icon;
const damage = data?.roll?.metadata?.damage;
const animation = data?.roll?.metadata?.animation;
const tokenId = data?.roll?.metadata?.tokenId;
const tokenName = data?.roll?.metadata?.tokenName;
const targetId = data?.roll?.metadata?.targetId;
const isRanged = data?.roll?.metadata?.isRanged;

// PF1e critical properties
const critRange = parseInt(data?.roll?.metadata?.critRange || "20", 10);
const critMultiplier = parseInt(data?.roll?.metadata?.critMultiplier || "2", 10);

const roll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

let message = "";

let dc = parseInt(data?.roll?.metadata?.dc || "0", 10);
if (isNaN(dc)) {
  dc = 0;
}

let isCriticalThreat = false;
let isCriticalHit = false;

if (dc > 0) {
  const total = roll.total || 0;

  // Find the natural d20 roll
  let naturalRoll = 0;
  if (roll.dice) {
    const d20 = roll.dice.find((d) => d.type === 20 && d.reason !== "dropped");
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  // PF1e attack resolution
  const isNat20 = naturalRoll === 20;
  const isNat1 = naturalRoll === 1;
  const isHit = isNat20 || (!isNat1 && total >= dc);
  const isInCritRange = naturalRoll >= critRange;

  // Critical threat: hit AND natural roll is within crit range
  isCriticalThreat = isHit && isInCritRange;

  const margin = total - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;

  if (isNat1) {
    // Natural 1 = automatic miss
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=red]NATURAL 1 — MISS[/color] [gm]vs ${dcName} ${dc} (${marginText})[/gm][/center]**`;
  } else if (isCriticalThreat) {
    // Critical threat — needs confirmation
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=yellow]CRITICAL THREAT — HIT[/color] [gm]vs ${dcName} ${dc} (${marginText})[/gm][/center]**`;
  } else if (isHit) {
    // Normal hit
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=lime]HIT[/color] [gm]vs ${dcName} ${dc} (${marginText})[/gm][/center]**`;
  } else {
    // Miss
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=pink]MISS[/color] [gm]vs ${dcName} ${dc} (${marginText})[/gm][/center]**`;
  }
} else {
  message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
    targetName ? ` :IconTargetArrow: ${targetName}` : ""
  }[/center]`;
}

// Build tags
const hasAttackTrait = traits.some(
  (trait) => trait.toLowerCase().trim() === "attack"
);
const tags = hasAttackTrait
  ? []
  : [
      {
        name: rollName || "Attack",
        tooltip: tooltip || "Attack Roll",
      },
    ];

traits.forEach((trait) => {
  if (getIsTraitRarity(trait)) return;
  tags.push({
    name: trait,
    tooltip: getTraitToolTip(trait),
  });
});

// Build damage metadata for PF1e
const damageMetadata = {
  critical: false,
  critMultiplier: critMultiplier,
  traits,
  damageType: damageType,
};

// Confirmation roll button (only on critical threat)
let confirmButton = "";
if (isCriticalThreat) {
  // Build confirmation metadata — same attack modifiers, but result determines crit
  const confirmMetadata = {
    ...data?.roll?.metadata,
    isConfirmation: true,
    critMultiplier: critMultiplier,
  };

  // Get the original modifier list from metadata
  const attackModifiers = data?.roll?.metadata?.attackModifiers || [];

  confirmButton = `\`\`\`Confirm_Critical
api.promptRoll(\`${attack} — Confirm Critical\`, '1d20', ${JSON.stringify(attackModifiers)}, ${JSON.stringify(confirmMetadata)}, 'attack')
\`\`\``;
}

// Normal damage button
const damageButton =
  damage && damage !== ""
    ? `\`\`\`Roll_Damage
api.promptRoll(\`${attack} Damage\`, '${damage}', ${JSON.stringify(damageModifiers)}, ${JSON.stringify(damageMetadata)}, 'damage')
\`\`\``
    : "";

// Critical damage button (shown on threat for convenience)
let critDamageButton = "";
if (isCriticalThreat && damage && damage !== "") {
  const critDamageMetadata = {
    ...damageMetadata,
    critical: true,
    critMultiplier: critMultiplier,
  };
  critDamageButton = `\`\`\`Roll_Critical_Damage
api.promptRoll(\`${attack} Critical Damage (x${critMultiplier})\`, '${damage}', ${JSON.stringify(damageModifiers)}, ${JSON.stringify(critDamageMetadata)}, 'damage')
\`\`\``;
}

// Handle confirmation rolls (second pass through attack handler)
const isConfirmation = data?.roll?.metadata?.isConfirmation === true;
if (isConfirmation) {
  const confirmTotal = roll.total || 0;
  const confirmed = confirmTotal >= dc;

  if (confirmed) {
    isCriticalHit = true;
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=green]CRITICAL HIT CONFIRMED![/color] [gm]vs ${dcName} ${dc}[/gm][/center]**`;
  } else {
    message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
      targetName ? ` :IconTargetArrow: ${targetName}` : ""
    }[/center]\n\n**[center][color=lime]CRITICAL NOT CONFIRMED — Normal Hit[/color] [gm]vs ${dcName} ${dc}[/gm][/center]**`;
  }

  // For confirmation rolls, show the appropriate damage button
  if (damage && damage !== "") {
    if (isCriticalHit) {
      const critDamageMetadata = {
        ...damageMetadata,
        critical: true,
        critMultiplier: critMultiplier,
      };
      const critBtn = `\`\`\`Roll_Critical_Damage
api.promptRoll(\`${attack} Critical Damage (x${critMultiplier})\`, '${damage}', ${JSON.stringify(damageModifiers)}, ${JSON.stringify(critDamageMetadata)}, 'damage')
\`\`\``;
      message = `${message}\n\n${critBtn}`;
    } else {
      const normalBtn = `\`\`\`Roll_Damage
api.promptRoll(\`${attack} Damage\`, '${damage}', ${JSON.stringify(damageModifiers)}, ${JSON.stringify(damageMetadata)}, 'damage')
\`\`\``;
      message = `${message}\n\n${normalBtn}`;
    }
  }
} else {
  // Normal attack roll — assemble message with buttons
  message = `
  ${message}

  ${damageButton}
  ${confirmButton}
  ${critDamageButton}
  `;
}

api.sendMessage(message, roll, [], [...tags]);

if (animation && animation.animationName) {
  if (
    (animation.moveToDestination ||
      animation.stretchToDestination ||
      animation.destinationOnly) &&
    !targetId
  ) {
    return;
  }
  api.playAnimation(animation, tokenId, targetId);
} else if (animation === undefined && damage) {
  const defaultAnimation = getAnimationFor({
    abilityName: attack,
    damage,
    isRanged,
  });
  if (defaultAnimation && defaultAnimation.animationName) {
    if (isRanged && targetId) {
      api.playAnimation(defaultAnimation, tokenId, targetId);
    } else if (!isRanged && tokenId) {
      api.playAnimation(defaultAnimation, tokenId, targetId);
    }
  }
}
