// Here we need to determine if it was a hit or miss and display in the chat.
const rollName = data?.roll?.metadata?.rollName;
const traits = data?.roll?.metadata?.traits || [];
const damageCategories = data?.roll?.metadata?.damageCategories || [];
const propertyRunes = data?.roll?.metadata?.runes || [];
const attack = data?.roll?.metadata?.attack;
const targetName = data?.roll?.metadata?.targetName;
const tooltip = data?.roll?.metadata?.tooltip;
let damageModifiers = data?.roll?.metadata?.damageModifiers || [];
let splashDamage = data?.roll?.metadata?.splashDamage || 0;
let damageType = data?.roll?.metadata?.damageType || "untyped";
const damageIgnoresResistances =
  data?.roll?.metadata?.damageIgnoresResistances || "";
const damageIgnoresImmunities =
  data?.roll?.metadata?.damageIgnoresImmunities || "";
const damageIgnoresWeaknesses =
  data?.roll?.metadata?.damageIgnoresWeaknesses || "";
const hasDeathTrait = data?.roll?.metadata?.hasDeathTrait === true;
const icon = data?.roll?.metadata?.icon;

let damage = data?.roll?.metadata?.damage;
let fatalDamageString = data?.roll?.metadata?.fatalDamageString;
let autoCritical = data?.roll?.metadata?.autoCritical;

const animation = data?.roll?.metadata?.animation;
const tokenId = data?.roll?.metadata?.tokenId;
const targetId = data?.roll?.metadata?.targetId;
const isRanged = data?.roll?.metadata?.isRanged;
const minRoll = data?.roll?.metadata?.minRoll;
const wasOffGuard = data?.roll?.metadata?.isOffGuard;

const weaponGroup = data?.roll?.metadata?.weaponGroup || "";
const hasCriticalSpecialization =
  data?.roll?.metadata?.hasCriticalSpecialization;

// If it was a spell attack, we need to pass this along in damage metadata
const isSpell = data?.roll?.metadata?.isSpell === true;

// Find the unddropped d20, and if minroll is set
// alter the actual roll to be the minroll if it's lower
const modifiedRoll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

if (modifiedRoll.dice) {
  modifiedRoll.dice = modifiedRoll.dice.map((d) => {
    let value = parseInt(d.value, 10);
    if (d.type === 20 && d.reason !== "dropped") {
      if (minRoll && value < minRoll) {
        modifiedRoll.total += minRoll - value;
        value = minRoll;
      }
    }
    return {
      ...d,
      value: value,
    };
  });
}

let message = "";

let dc = parseInt(data?.roll?.metadata?.dc || "0", 10);
if (isNaN(dc)) {
  dc = 0;
}

let isCritical = false;

if (dc > 0) {
  const total = modifiedRoll.total || 0;

  // Find the natural d20 roll (not dropped)
  let naturalRoll = 0;
  if (modifiedRoll.dice) {
    const d20 = modifiedRoll.dice.find(
      (d) => d.type === 20 && d.reason !== "dropped"
    );
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  // Calculate the degree of success or failure
  // PF2e Critical Success/Failure rules:
  // - Critical Success: Beat DC by 10+ OR natural 20 (upgrades success to crit success)
  // - Success: Meet or beat DC
  // - Failure: Miss DC
  // - Critical Failure: Miss DC by 10+ OR natural 1 (downgrades failure to crit failure)

  let degreeOfSuccess = 0; // 0 = failure, 1 = success, 2 = critical success, -1 = critical failure

  // First, determine base degree of success
  if (total >= dc + 10) {
    degreeOfSuccess = 2; // Critical Success
  } else if (total >= dc) {
    degreeOfSuccess = 1; // Success
  } else if (total <= dc - 10) {
    degreeOfSuccess = -1; // Critical Failure
  } else {
    degreeOfSuccess = 0; // Failure
  }

  // Apply natural 20/1 adjustments
  if (naturalRoll === 20 && degreeOfSuccess < 2) {
    degreeOfSuccess += 1; // Natural 20 improves degree by one step (max critical success)
  } else if (naturalRoll === 1 && degreeOfSuccess > -1) {
    degreeOfSuccess -= 1; // Natural 1 worsens degree by one step (min critical failure)
  }

  // Calculate margin of success/failure
  const margin = total - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;
  // Generate appropriate message based on final degree of success
  switch (degreeOfSuccess) {
    case 2:
      isCritical = true;
      message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
        targetName ? ` :IconTargetArrow: ${targetName}` : ""
      }[/center]\n\n**[center][color=green]CRITICAL HIT[/color] [gm]vs AC ${dc} (${marginText})[/gm][/center]**`;
      break;
    case 1:
      message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
        targetName ? ` :IconTargetArrow: ${targetName}` : ""
      }[/center]\n\n**[center][color=lime]HIT[/color] [gm]vs AC ${dc} (${marginText})[/gm][/center]**`;
      break;
    case 0:
      message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
        targetName ? ` :IconTargetArrow: ${targetName}` : ""
      }[/center]\n\n**[center][color=pink]MISS[/color] [gm]vs AC ${dc} (${marginText})[/gm][/center]**`;
      break;
    case -1:
      message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
        targetName ? ` :IconTargetArrow: ${targetName}` : ""
      }[/center]\n\n**[center][color=red]CRITICAL MISS[/color] [gm]vs AC ${dc} (${marginText})[/gm][/center]**`;
      break;
  }
} else {
  message = `[center]${icon ? `:${icon}:` : ""} ${attack} ${
    targetName ? ` :IconTargetArrow: ${targetName}` : ""
  }[/center]`;
}

const tags = [
  {
    name: rollName || "Attack",
    tooltip: tooltip || "Attack Roll",
  },
];

traits.forEach((trait) => {
  // Ignore rarity traits
  if (getIsTraitRarity(trait)) {
    return;
  }
  tags.push({
    name: trait,
    tooltip: getTraitToolTip(trait),
  });
});

// Add off-guard tag if target was off-guard
if (wasOffGuard) {
  tags.push({
    name: "Target Off-Guard",
    tooltip: getOffGuardTooltip(),
  });
}

// Add critical specialization tag if applicable
let critSpecDetails = {
  description: "",
  group: "",
  macros: [],
};
if (isCritical && hasCriticalSpecialization && weaponGroup) {
  critSpecDetails = getCriticalSpecializationDetails(weaponGroup);
  if (critSpecDetails.description) {
    tags.push({
      name: `${capitalize(critSpecDetails.group)} Critical Effect`,
      tooltip: critSpecDetails.description,
    });
  }
}

// Add property runes tags to the roll message
let propertyRuneDetails = [];
propertyRunes.forEach((rune) => {
  const runeDetails = getWeaponRuneDetails(rune);
  if (runeDetails.description && runeDetails.displayName) {
    propertyRuneDetails.push(runeDetails);
    tags.push({
      name: runeDetails.displayName,
      tooltip: runeDetails.description,
    });
  }
});

// Get deadly die information from metadata
const deadlyDie = data?.roll?.metadata?.deadlyDie;
const fatalDie = data?.roll?.metadata?.fatalDie;
// On critical hits, add deadly dice to damage modifiers
// The number of deadly dice depends on striking runes:
// - No rune: 1 deadly die
// - Striking (1): No bonus, 1 deadly die
// - Greater Striking (2): 2 deadly dice
// - Major Striking (3): 3 deadly dice
let criticalOnlyDice = [];

if (splashDamage && splashDamage !== "") {
  criticalOnlyDice.push({
    dieType: 0, // Flat damage, not a die
    damageType: damageType.toLowerCase(),
    flatDamage: splashDamage,
  });
}

if (isCritical && deadlyDie && damage) {
  // Determine number of deadly dice based on striking runes
  // We need to find the striking rune value from the damage modifiers
  let strikingRuneLevel = 0;
  const strikingMod = damageModifiers.find(
    (mod) =>
      mod.name &&
      (mod.name.includes("Striking") || mod.name.includes("striking"))
  );

  if (strikingMod) {
    if (strikingMod.name.includes("Major")) {
      strikingRuneLevel = 2;
    } else if (strikingMod.name.includes("Greater")) {
      strikingRuneLevel = 1;
    } else {
      strikingRuneLevel = 0;
    }
  }

  // Number of deadly dice = 1 + striking rune level
  const numDeadlyDice = 1 + strikingRuneLevel;

  // Add deadly dice modifier
  const deadlyMod = {
    name: `Deadly`,
    value: `${numDeadlyDice}${deadlyDie}`,
    active: true,
    type: damageType,
    valueType: "string",
  };

  damageModifiers.push(deadlyMod);

  // Track the deadly dice so we don't double them
  // Extract die size (e.g., "d8" -> 8)
  const dieSizeMatch = deadlyDie.match(/d(\d+)/);
  const dieSize = dieSizeMatch ? parseInt(dieSizeMatch[1], 10) : 0;

  if (dieSize > 0) {
    // Add one entry for each deadly die
    for (let i = 0; i < numDeadlyDice; i++) {
      criticalOnlyDice.push({
        dieType: dieSize,
        damageType: damageType.toLowerCase(),
      });
    }
  }
}
// On critical hits, add fatal dice to damage modifiers
if (isCritical && fatalDie) {
  damage = fatalDamageString;

  // Add modifier for the fatal die
  const fatalMod = {
    name: `Fatal`,
    value: `1${fatalDie}`,
    active: true,
    type: damageType,
    valueType: "string",
  };
  damageModifiers.push(fatalMod);

  const dieSizeMatch = fatalDie.match(/d(\d+)/);
  const dieSize = dieSizeMatch ? parseInt(dieSizeMatch[1], 10) : 0;

  // Add one entry for the fatal die
  criticalOnlyDice.push({
    dieType: dieSize,
    damageType: damageType.toLowerCase(),
  });
}

const damageMetadata = {
  // This is so that our damage handler script can tell if it was from a critical hit
  critical: isCritical,
  traits,
  damageCategories,
  splashDamage: splashDamage,
  // So we can tell the damage handler script if it was a spell-related damage
  isSpell: isSpell,
  damageIgnoresResistances: damageIgnoresResistances,
  damageIgnoresImmunities: damageIgnoresImmunities,
  damageIgnoresWeaknesses: damageIgnoresWeaknesses,
  hasDeathTrait: hasDeathTrait,
  criticalOnlyDice: criticalOnlyDice,
};

// Add damage button to message
const dmgRollName = isCritical ? "Roll_Critical_Damage" : "Roll_Damage";
const damageRollString = splashDamage
  ? `${damage} + ${splashDamage} ${damageType}`
  : damage;
const damageButton =
  damage && damage !== ""
    ? `\`\`\`${dmgRollName}
  api.promptRoll(\`${attack} Damage\`, '${damageRollString}', ${JSON.stringify(
        damageModifiers
      )}, ${JSON.stringify(damageMetadata)}, 'damage')
  \`\`\``
    : "";

// Get tags and macros, and effect macros for runes
const effects = [];
const allMacros = [];

if (critSpecDetails.macros && critSpecDetails.macros.length > 0) {
  critSpecDetails.macros.forEach((macro) => {
    allMacros.push(macro);
  });
}

if (propertyRuneDetails.length > 0) {
  propertyRuneDetails.forEach((rune) => {
    if (rune.macros && rune.macros.length > 0) {
      rune.macros.forEach((macro) => {
        allMacros.push(macro);
      });
    }
  });
}

const effectMacros = effects.filter((macro) => macro).join("\n");
const macros = allMacros.filter((macro) => macro).join("\n");

// Add critical specialization message if applicable
let critSpecMessage = "";
if (isCritical && hasCriticalSpecialization && weaponGroup) {
  critSpecMessage =
    "\n\n**[center]Critical Specialization Effect can be Applied[/center]**";
}

message = `
  ${message}
  ${critSpecMessage}

  ${damageButton}
  ${macros}
  ${effectMacros}
  `;

api.sendMessage(message, modifiedRoll, [], [...tags]);

if (animation && animation.animationName) {
  if (
    (animation.moveToDestination ||
      animation.stretchToDestination ||
      animation.destinationOnly) &&
    !targetId
  ) {
    // These require a target token to be set
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
      // Only play the animation for ranged attacks if we have a target token
      api.playAnimation(defaultAnimation, tokenId, targetId);
    } else if (!isRanged && tokenId) {
      api.playAnimation(defaultAnimation, tokenId, targetId);
    }
  }
}
