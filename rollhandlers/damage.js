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
const criticalOnlyDice = data.roll?.metadata?.criticalOnlyDice || [];
let criticalDamageInfo = "";

// Set up the roll so we can color deadly/fatal dice
let roll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  types: [...(data?.roll?.types || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

if (isCritical && roll?.types && roll?.dice) {
  // Calculate what the damage will be after critical doubling
  // We need to replicate the logic from applyDamage to show accurate numbers

  const damageByType = {};
  let totalNormalDamage = 0;
  let totalCritOnlyDamage = 0;

  // First, identify which dice values are critical-only by matching them from the end
  const critOnlyDiceIndices = new Set();

  if (criticalOnlyDice.length > 0) {
    const remainingCriticalDice = [...criticalOnlyDice];

    // Process dice from the end (deadly dice are added last)
    for (
      let i = roll.dice.length - 1;
      i >= 0 && remainingCriticalDice.length > 0;
      i--
    ) {
      const die = roll.dice[i];

      // Find a matching critical-only die
      const matchIndex = remainingCriticalDice.findIndex(
        (critDie) => critDie.dieType === die.type
      );

      if (matchIndex >= 0) {
        critOnlyDiceIndices.add(i);
        // Color this die orange to indicate it's not doubled
        roll.dice[i] = {
          ...roll.dice[i],
          customColor: "orange",
        };
        remainingCriticalDice.splice(matchIndex, 1);
      }
    }
  }

  // Calculate the total value of critical-only dice
  let critOnlyDiceTotal = 0;
  roll.dice.forEach((die, index) => {
    if (critOnlyDiceIndices.has(index)) {
      critOnlyDiceTotal += die.value;
    }
  });

  // Color the types array entries that correspond to deadly/fatal dice
  // We need to map dice to types based on their order
  let diceIndexInTypes = 0;
  roll.types = roll.types.map((type) => {
    // Check if this type entry corresponds to a critical-only die
    // Types array usually has one entry per die/modifier combination
    const isCritOnlyType =
      type.die && critOnlyDiceIndices.has(diceIndexInTypes);

    if (type.die) {
      diceIndexInTypes++;
    }

    if (isCritOnlyType) {
      return {
        ...type,
        customColor: "orange",
      };
    }
    return type;
  });

  // Calculate total damage from all types
  let totalDamageFromTypes = 0;
  roll.types.forEach((type) => {
    totalDamageFromTypes += type.value;
  });

  // Normal damage is everything except the critical-only dice
  const normalDamage = totalDamageFromTypes - critOnlyDiceTotal;

  // Now process damage by type
  roll.types.forEach((type) => {
    const damageType = type.type || "untyped";

    damageByType[damageType] = damageByType[damageType] || {
      doubled: 0,
      critOnly: 0,
    };

    // For simplicity, put all doubled damage under the first type
    // and all critical-only under the same type
    if (!totalNormalDamage) {
      damageByType[damageType].doubled = normalDamage * 2;
      damageByType[damageType].critOnly = critOnlyDiceTotal;
      totalNormalDamage = normalDamage;
      totalCritOnlyDamage = critOnlyDiceTotal;
    }
  });

  // Calculate total damage
  let totalCriticalDamage = 0;
  Object.keys(damageByType).forEach((type) => {
    totalCriticalDamage +=
      damageByType[type].doubled + damageByType[type].critOnly;
  });

  // Build the formula string
  let formulaParts = [];
  Object.keys(damageByType).forEach((type) => {
    const { doubled, critOnly } = damageByType[type];
    const total = doubled + critOnly;

    if (total > 0) {
      formulaParts.push(`${total} ${type}`);
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

// Use the modified roll with colored dice if we modified it, otherwise use original
const displayRoll = isCritical ? roll : data.roll;
api.sendMessage(message, displayRoll, [], tags);
