// PF1e Damage Roll Handler
// Handles normal and critical damage with multiplier
const traits = data.roll?.metadata?.traits || [];
const damageType = data.roll?.metadata?.damageType || "untyped";
const isCritical = data.roll?.metadata?.critical === true;
const critMultiplier = parseInt(data.roll?.metadata?.critMultiplier || "2", 10);

const tags = [
  {
    name: isCritical ? "Critical Damage" : "Damage",
    tooltip: isCritical ? "Critical Damage Roll" : "Damage Roll",
  },
];

traits.forEach((trait) => {
  if (getIsTraitRarity(trait)) return;
  tags.push({
    name: trait,
    tooltip: getTraitToolTip(trait),
  });
});

let roll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  types: [...(data?.roll?.types || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

// PF1e Critical Damage:
// Weapon damage dice are multiplied by the crit multiplier.
// Bonus damage (sneak attack, energy damage from enchantments, etc.) is NOT multiplied.
// The roll already contains the base weapon damage — we multiply the total from
// the base roll and add non-multiplied bonus damage from modifiers.
let criticalDamageInfo = "";

if (isCritical && critMultiplier > 1) {
  // Calculate base weapon damage (from the roll types) and bonus damage (from modifiers)
  // The roll.types array contains the base weapon dice results
  let baseWeaponDamage = 0;
  let bonusDamage = 0;

  if (roll.types) {
    roll.types.forEach((rollType) => {
      baseWeaponDamage += rollType.value || 0;
    });
  }

  // Multiply base weapon damage
  const multipliedDamage = baseWeaponDamage * critMultiplier;
  const totalCritDamage = multipliedDamage + bonusDamage;

  criticalDamageInfo = `
**Critical Hit (x${critMultiplier}):** ${multipliedDamage} :${damageType}:
_Base ${baseWeaponDamage} × ${critMultiplier} = ${multipliedDamage}_
`;
}

// Apply Damage macro
const damageMacro = `
\`\`\`Apply_Damage
applyDamage(null, ${JSON.stringify(data.roll)}, false);
\`\`\`
`;

// Always show half damage option
const halfDamageMacro = `
\`\`\`Apply_Half_Damage
applyDamage(null, ${JSON.stringify(data.roll)}, true);
\`\`\`
`;

const message = `
${criticalDamageInfo}
${damageMacro}
${halfDamageMacro}
`;

api.sendMessage(message, roll, [], tags);
