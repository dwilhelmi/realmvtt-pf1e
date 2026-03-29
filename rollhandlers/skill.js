const rollName = data?.roll?.metadata?.rollName;
const tooltip = data?.roll?.metadata?.tooltip;
const minRoll = data?.roll?.metadata?.minRoll;
const itemDataPath = data?.roll?.metadata?.itemDataPath;
const successMessage = data?.roll?.metadata?.successMessage;
const failureMessage = data?.roll?.metadata?.failureMessage;

// Find the undropped d20, and if minroll is set
// alter the actual roll to be the minroll if it's lower
const roll = {
  ...data.roll,
  dice: [...(data?.roll?.dice || [])],
  total: data?.roll?.total !== undefined ? data?.roll?.total : 0,
};

if (roll.dice) {
  roll.dice = roll.dice.map((d) => {
    let value = parseInt(d.value, 10);
    if (d.type === 20 && d.reason !== "dropped") {
      if (minRoll && value < minRoll) {
        roll.total += minRoll - value;
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

let dc = 0;
dc = parseInt(data?.roll?.metadata?.dc || "0", 10);
if (isNaN(dc)) {
  dc = 0;
}

if (dc > 0) {
  const total = roll.total || 0;

  // Find the natural d20 roll (not dropped)
  let naturalRoll = 0;
  if (roll.dice) {
    const d20 = roll.dice.find((d) => d.type === 20 && d.reason !== "dropped");
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  // PF1e: pass/fail — meet or beat DC to succeed
  // Nat 20 on ability/skill checks is not RAW auto-success, but we treat it as notable
  const passed = total >= dc;
  const margin = total - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;

  if (passed) {
    const color = naturalRoll === 20 ? "green" : "lime";
    const label = naturalRoll === 20 ? "NAT 20 — SUCCESS" : "SUCCESS";
    message = `**[center][color=${color}]${label}[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**`;
    if (successMessage) {
      message += `\n\n${successMessage}`;
    }
  } else {
    const color = naturalRoll === 1 ? "red" : "pink";
    const label = naturalRoll === 1 ? "NAT 1 — FAILURE" : "FAILURE";
    message = `**[center][color=${color}]${label}[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**`;
    if (failureMessage) {
      message += `\n\n${failureMessage}`;
    }
  }

  // Handle item crafting — copy to inventory on success
  if (itemDataPath && passed) {
    const craftedItem = api.getValueOnRecord(record, itemDataPath);
    const traits = craftedItem.data?.traits || [];
    const hasConsumableTrait = traits
      .map((trait) => trait.toLowerCase())
      .includes("consumable");
    const isConsumable =
      craftedItem.data?.type === "consumable" || hasConsumableTrait;
    const hasUseBtn = craftedItem.data?.hasUseBtn || false;
    if (craftedItem) {
      const inventory = record.data?.inventory || [];
      const newItem = {
        ...craftedItem,
        _id: generateUuid(),
        data: {
          ...craftedItem.data,
          ammo: craftedItem.data?.craftingQuantity || 1,
          count: craftedItem.data?.craftingQuantity || 1,
          carried: "carried",
        },
        fields: {
          ...craftedItem.fields,
          ...getItemFields(craftedItem),
        },
      };
      api.setValuesOnRecord(record, {
        "data.inventory": [...inventory, newItem],
      });
    }
  }
}

api.sendMessage(
  message,
  roll,
  [],
  [
    {
      name: rollName || "Skill",
      tooltip: tooltip || `${rollName || ""} Skill Check`,
    },
  ]
);
