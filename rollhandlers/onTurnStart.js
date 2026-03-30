const token = data?.token;

// PF1e: On turn start, check if the character is at negative HP and needs a stabilization check
if (token?.recordType === "characters" && token?.recordId) {
  api.getRecord("characters", token?.recordId, (record) => {
    if (!record) return;

    const currentHP = parseInt(record?.data?.curhp || "0", 10);
    if (currentHP < 0) {
      const conScore = parseInt(record?.data?.conScore || "10", 10);
      const deathThreshold = -conScore;

      if (currentHP > deathThreshold) {
        api.showNotification(
          `${record.name} is at ${currentHP} HP and must make a DC 10 stabilization check (death at ${deathThreshold} HP).`,
          "yellow",
          "Stabilization Required"
        );
      }
    }
  });
}
