const rollName = data?.roll?.metadata?.rollName;
const tooltip = data?.roll?.metadata?.tooltip;
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

  const margin = total - dc;
  const marginText = margin >= 0 ? `+${margin}` : `${margin}`;

  // PF1e saving throws: pass/fail with natural 20/1 overrides
  let passed = total >= dc;
  let label = "";
  let color = "";

  if (naturalRoll === 20) {
    passed = true;
    label = "PASS (Natural 20)";
    color = "green";
  } else if (naturalRoll === 1) {
    passed = false;
    label = "FAIL (Natural 1)";
    color = "red";
  } else if (passed) {
    label = "PASS";
    color = "lime";
  } else {
    label = "FAIL";
    color = "pink";
  }

  message = `**[center][color=${color}]${label}[/color] [gm]vs DC ${dc} (${marginText})[/gm][/center]**`;
}

api.sendMessage(
  message,
  roll,
  [],
  [
    {
      name: rollName || "Save",
      tooltip: tooltip || `${rollName || ""} Saving Throw`,
    },
  ]
);
