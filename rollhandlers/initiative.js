const initiativeSkill = data.roll?.metadata?.initiativeSkill || "Perception";
if (data.roll?.metadata?.group && data.roll?.metadata?.group.length > 0) {
  data.roll?.metadata?.group.forEach((tokenId) => {
    api.setValueOnTokenById(
      tokenId,
      "tokens",
      "data.initiative",
      data.roll.total
    );
  });
  api.sendMessage(
    "",
    data.roll,
    [],
    [
      {
        name: `Group Initiative (${initiativeSkill})`,
        tooltip: `Group Initiative Roll with ${initiativeSkill}`,
      },
    ]
  );
} else {
  api.setValue("data.initiative", data.roll.total);
  api.sendMessage(
    "",
    data.roll,
    [],
    [
      {
        name: `Initiative (${initiativeSkill})`,
        tooltip: `Initiative Roll with ${initiativeSkill}`,
      },
    ]
  );
}
