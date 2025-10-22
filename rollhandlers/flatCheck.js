const rollName = data?.roll?.metadata?.rollName;
const tooltip = data?.roll?.metadata?.tooltip;
const isPersistent = data?.roll?.metadata?.isPersistent === true;
const persistentPartIndex = data?.roll?.metadata?.persistentPartIndex;

const roll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

let message = "";

let dc = 0;
dc = parseInt(data?.roll?.metadata?.dc || "0", 10);
if (isNaN(dc)) {
  dc = 0;
}

// Flat checks auto-succeed on DC 1 or lower, auto-fail on DC 21 or higher
if (dc <= 1) {
  message = `**[center][color=green]AUTOMATIC SUCCESS[/color] [gm](DC ${dc})[/gm][/center]**`;
} else if (dc >= 21) {
  message = `**[center][color=red]AUTOMATIC FAILURE[/color] [gm](DC ${dc})[/gm][/center]**`;
} else if (dc > 0) {
  const total = roll.total || 0;

  // Find the d20 roll (flat checks are just d20, no modifiers)
  let naturalRoll = 0;
  if (roll.dice) {
    const d20 = roll.dice.find((d) => d.type === 20 && d.reason !== "dropped");
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  // Flat checks are simple: meet or beat the DC to succeed
  const success = total >= dc;

  if (success) {
    message = `**[center][color=lime]SUCCESS[/color] [gm]vs DC ${dc}[/gm][/center]**`;

    // Handle persistent damage recovery
    if (isPersistent && persistentPartIndex !== undefined) {
      const token = api.getToken();
      if (token) {
        const effects = token?.effects || [];
        const effectValues = token?.effectValues || {};
        const persistentDamageEffect = effects.find(
          (effect) => effect.name === "Persistent Damage"
        );

        if (persistentDamageEffect) {
          const existingValue = effectValues[persistentDamageEffect?._id];

          if (existingValue && existingValue.value) {
            // Split the persistent damage into parts
            const damageParts = existingValue.value
              .split("+")
              .map((part) => part.trim())
              .filter((part) => part.length > 0);

            // Remove the recovered part and save it for the message
            const recoveredPart = damageParts[persistentPartIndex];
            damageParts.splice(persistentPartIndex, 1);

            if (damageParts.length > 0) {
              // Still have persistent damage remaining, update the effect
              const newValue = damageParts.join(" + ");
              api.removeEffectById(persistentDamageEffect?._id, token, () => {
                api.addEffect("Persistent Damage", token, undefined, {
                  value: newValue,
                  _id: existingValue.tokenId,
                  name: existingValue.tokenName,
                });
              });
              message += `\n\n**Recovered from persistent damage!**\n*Removed: ${recoveredPart}*\n*Remaining: ${newValue}*`;
            } else {
              // No more persistent damage, remove the effect entirely
              api.removeEffectById(persistentDamageEffect?._id, token);
              message += `\n\n**Fully recovered from persistent damage!**`;
            }
          }
        }
      }
    }
  } else {
    message = `**[center][color=pink]FAILURE[/color] [gm]vs DC ${dc}[/gm][/center]**`;
  }
}

api.sendMessage(
  message,
  roll,
  [],
  [
    {
      name: rollName || "Flat Check",
      tooltip: tooltip || `${rollName || ""} Flat Check`,
    },
  ]
);
