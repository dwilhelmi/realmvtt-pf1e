// Stabilization Check handler for PF1e
// When at negative HP: DC 10 Constitution check each round
// Success: stabilized (no longer losing HP)
// Failure: lose 1 HP
// Natural 1: automatic failure
// Natural 20: automatic success (regain consciousness at 1 HP if also stable)

const recordId = record?._id;
const minRoll = data?.roll?.metadata?.minRoll;

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
    return { ...d, value };
  });
}

api.getRecord("characters", recordId, (record) => {
  const currentHP = parseInt(record?.data?.hp || "0", 10);
  const conScore = parseInt(record?.data?.conScore || "10", 10);
  const deathThreshold = -conScore;
  const dc = 10;

  // Find the natural d20 roll
  let naturalRoll = 0;
  if (roll.dice) {
    const d20 = roll.dice.find((d) => d.type === 20 && d.reason !== "dropped");
    if (d20) {
      naturalRoll = parseInt(d20.value, 10);
    }
  }

  const total = roll.total || 0;
  const margin = total - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;

  const tags = [
    {
      name: "Stabilization Check",
      tooltip: "DC 10 Constitution Check",
    },
  ];

  const valuesToSet = {};
  let message = "";

  if (naturalRoll === 20) {
    // Natural 20: automatically stabilize
    message = `**[center][color=green]NATURAL 20 — STABILIZED![/color] [gm]vs DC ${dc}[/gm][/center]**`;
  } else if (naturalRoll === 1) {
    // Natural 1: automatic failure, lose 1 HP
    const newHP = currentHP - 1;
    valuesToSet["data.hp"] = newHP;

    if (newHP <= deathThreshold) {
      message = `**[center][color=red]NATURAL 1 — DEAD[/color] [gm]vs DC ${dc}[/gm][/center]**\n\n[center]HP drops to ${newHP} (death at ${deathThreshold}).[/center]`;
    } else {
      message = `**[center][color=red]NATURAL 1 — FAILURE[/color] [gm]vs DC ${dc}[/gm][/center]**\n\n[center]Loses 1 HP (${currentHP} → ${newHP}).[/center]`;
    }
  } else if (total >= dc) {
    // Success: stabilized
    message = `**[center][color=lime]STABILIZED[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**`;
  } else {
    // Failure: lose 1 HP
    const newHP = currentHP - 1;
    valuesToSet["data.hp"] = newHP;

    if (newHP <= deathThreshold) {
      message = `**[center][color=red]FAILURE — DEAD[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]HP drops to ${newHP} (death at ${deathThreshold}).[/center]`;
    } else {
      message = `**[center][color=pink]FAILURE[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**\n\n[center]Loses 1 HP (${currentHP} → ${newHP}).[/center]`;
    }
  }

  api.sendMessage(message, roll, [], tags);

  if (Object.keys(valuesToSet).length > 0) {
    api.setValues(valuesToSet);
  }

  // Check for death
  const finalHP = valuesToSet["data.hp"] !== undefined ? valuesToSet["data.hp"] : currentHP;
  if (finalHP <= deathThreshold) {
    const tokenForRecord = api.getToken();
    if (tokenForRecord) {
      api.addEffect("Dead", tokenForRecord);
      api.floatText(tokenForRecord, "DEAD", "#ff0000");
    }
  }
});
