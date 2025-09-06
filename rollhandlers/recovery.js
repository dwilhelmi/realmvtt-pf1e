// Recovery Check handler for PF2e
// Recovery checks are flat checks with DC = 10 + current dying value
// Critical Success: dying value reduced by 2
// Success: dying value reduced by 1
// Failure: dying value increased by 1
// Critical Failure: dying value increased by 2

const recordId = record?._id;
const minRoll = data?.roll?.metadata?.minRoll;

// Find the unddropped d20, and if minroll is set
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

// Requery the record in case of multiple recovery checks
api.getRecord("characters", recordId, (record) => {
  const currentDying = parseInt(record?.data?.dying || "0", 10);

  // DC = 10 + current dying value
  const dc = 10 + currentDying;

  // Find the natural d20 roll (not dropped)
  let naturalRoll = 0;
  if (roll.dice) {
    const d20 = roll.dice.find((d) => d.type === 20 && d.reason !== "dropped");
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  // Recovery checks are FLAT CHECKS - no modifiers applied
  // Use only the raw die roll for comparison
  const flatCheckTotal = naturalRoll;

  // Calculate the degree of success using PF2e rules
  let degreeOfSuccess = 0; // 0 = failure, 1 = success, 2 = critical success, -1 = critical failure

  // First, determine base degree of success
  if (flatCheckTotal >= dc + 10) {
    degreeOfSuccess = 2; // Critical Success
  } else if (flatCheckTotal >= dc) {
    degreeOfSuccess = 1; // Success
  } else if (flatCheckTotal <= dc - 10) {
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

  // Calculate margin for GM display
  const margin = flatCheckTotal - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;

  const tags = [
    {
      name: "Recovery Check",
      tooltip: "Recovery Check Roll",
    },
  ];

  const valuesToSet = {};
  let newDying = currentDying;
  let message = "";

  // Apply the effects based on degree of success
  switch (degreeOfSuccess) {
    case 2: // Critical Success
      newDying = Math.max(0, currentDying - 2);
      valuesToSet["data.dying"] = newDying;

      if (newDying === 0) {
        // You lose the dying condition if it ever reaches dying 0.
        // When you losing the dying condition you become wounded 1 or increase it by 1
        const currentWounded = parseInt(record?.data?.wounded || "0", 10);
        valuesToSet["data.wounded"] = Math.min(currentWounded + 1, 3); // Wounded value becomes previous dying value
        message = `**[center][color=green]CRITICAL SUCCESS[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying reduced by 2. Wounded ${valuesToSet["data.wounded"]}.[/center]`;
      } else {
        message = `**[center][color=green]CRITICAL SUCCESS[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying reduced by 2 (${currentDying} → ${newDying}).[/center]`;
      }
      break;

    case 1: // Success
      newDying = Math.max(0, currentDying - 1);
      valuesToSet["data.dying"] = newDying;

      if (newDying === 0) {
        const currentWounded = parseInt(record?.data?.wounded || "0", 10);
        valuesToSet["data.wounded"] = Math.min(currentWounded + 1, 3);
        message = `**[center][color=lime]SUCCESS[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying reduced by 1. Wounded ${valuesToSet["data.wounded"]}.[/center]`;
      } else {
        message = `**[center][color=lime]SUCCESS[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying reduced by 1 (${currentDying} → ${newDying}).[/center]`;
      }
      break;

    case 0: // Failure
      newDying = Math.min(4, currentDying + 1);
      valuesToSet["data.dying"] = newDying;
      message = `**[center][color=pink]FAILURE[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying increased by 1 (${currentDying} → ${newDying}).[/center]`;
      break;

    case -1: // Critical Failure
      newDying = Math.min(4, currentDying + 2);
      valuesToSet["data.dying"] = newDying;
      message = `**[center][color=red]CRITICAL FAILURE[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Dying increased by 2 (${currentDying} → ${newDying}).[/center]`;
      break;
  }

  // Send the message
  api.sendMessage(message, roll, [], tags);

  // Apply the changes
  api.setValues(valuesToSet);

  // If dying reaches 4, the character dies
  if (newDying >= 4) {
    const tokenForRecord = api.getToken();
    if (tokenForRecord) {
      api.addEffect("Dead", tokenForRecord);
      api.floatText(tokenForRecord, "DEAD", "#ff0000");
    }
  }
});
