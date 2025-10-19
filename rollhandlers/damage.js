// Here we need to determine if it was a hit or miss and display in the chat.
const tags = [
  {
    name: "Damage",
    tooltip: "Damage Roll",
  },
];

// We'll always show half damage, even if the damage was a normal attack, in case the GM
// needs to apply half damage
const showHalf = true;

// Check if this is a critical hit and calculate the critical damage formula
const isCritical = data.roll?.metadata?.critical === true;
const criticalOnlyDiceIndices =
  data.roll?.metadata?.criticalOnlyDiceIndices || [];
let criticalDamageInfo = "";

if (isCritical && data.roll?.types) {
  // Calculate what the damage will be after critical doubling
  let totalNormalDamage = 0;
  let totalCritOnlyDamage = 0;
  const damageByType = {};

  data.roll.types.forEach((type, index) => {
    const damageType = type.type || "untyped";
    const isCritOnly = criticalOnlyDiceIndices.includes(index);

    if (isCritOnly) {
      totalCritOnlyDamage += type.value;
      damageByType[damageType] = damageByType[damageType] || {
        normal: 0,
        critOnly: 0,
      };
      damageByType[damageType].critOnly += type.value;
    } else {
      totalNormalDamage += type.value;
      damageByType[damageType] = damageByType[damageType] || {
        normal: 0,
        critOnly: 0,
      };
      damageByType[damageType].normal += type.value;
    }
  });

  const totalCriticalDamage = totalNormalDamage * 2 + totalCritOnlyDamage;

  // Build the formula string
  let formulaParts = [];
  Object.keys(damageByType).forEach((type) => {
    const { normal, critOnly } = damageByType[type];
    let part = "";

    if (normal > 0 && critOnly > 0) {
      part = `${normal * 2 + critOnly} ${type}`;
    } else if (normal > 0) {
      part = `${normal * 2} ${type}`;
    } else if (critOnly > 0) {
      part = `${critOnly} ${type}`;
    }

    if (part) {
      formulaParts.push(part);
    }
  });

  // Build the breakdown line
  let breakdown = `Doubled: ${totalNormalDamage * 2}`;
  if (totalCritOnlyDamage > 0) {
    breakdown += `, Additional Damage: ${totalCritOnlyDamage}`;
  }

  criticalDamageInfo = `
**Critical Hit Damage:** ${totalCriticalDamage} (${formulaParts.join(" + ")})
_${breakdown}_
`;
}

const damageMacro = `
\`\`\`Apply_Damage
applyDamage(null, ${JSON.stringify(data.roll)}, false);
\`\`\`
`;

const halfDamageMacro = showHalf
  ? `
\`\`\`Apply_Half_Damage
applyDamage(null, ${JSON.stringify(data.roll)}, true);
\`\`\`
`
  : "";

const message = `
${criticalDamageInfo}
${damageMacro}
${halfDamageMacro}
`;

api.sendMessage(message, data.roll, [], tags);
