// Miss Chance handler for PF1e
// Used for concealment (20%), blur/displacement (20%/50%), etc.
// Roll d100 — if roll is at or below the miss chance percentage, the attack misses.

const rollName = data?.roll?.metadata?.rollName;
const tooltip = data?.roll?.metadata?.tooltip;

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

if (dc <= 0) {
  message = `**[center][color=green]NO MISS CHANCE[/color][/center]**`;
} else if (dc >= 100) {
  message = `**[center][color=red]AUTOMATIC MISS[/color] [gm](${dc}% miss chance)[/gm][/center]**`;
} else {
  const total = roll.total || 0;

  // Meet or beat the miss chance to hit
  const success = total > dc;

  if (success) {
    message = `**[center][color=lime]HIT[/color] [gm](rolled ${total} vs ${dc}% miss chance)[/gm][/center]**`;
  } else {
    message = `**[center][color=pink]MISS[/color] [gm](rolled ${total} vs ${dc}% miss chance)[/gm][/center]**`;
  }
}

api.sendMessage(
  message,
  roll,
  [],
  [
    {
      name: rollName || "Miss Chance",
      tooltip: tooltip || `${rollName || ""} Miss Chance`,
    },
  ]
);
