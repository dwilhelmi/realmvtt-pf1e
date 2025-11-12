// Apply damage
// First deduct from Temp HP
let damage = value;
// Ignore negative damage as that is what healing is for
if (damage > 0) {
  const oldTempHp = parseInt(record.data?.tempHp || "0", 10);
  const newTempHp = Math.max(oldTempHp - damage, 0);
  damage = Math.max(damage - oldTempHp, 0);

  const valuesToSet = {};

  if (newTempHp !== oldTempHp) {
    valuesToSet["data.tempHp"] = newTempHp;
  }

  let curhp = parseInt(record?.data?.curhp || "0", 10);
  if (curhp === undefined || isNaN(curhp)) {
    curhp = 0;
  }
  curhp -= damage;
  if (curhp <= 0) {
    curhp = 0;
    if (record.recordType !== "npcs") {
      // Update dying state
      const currentDying = parseInt(record.data?.dying || "0", 10);
      let currentWounded = 0;
      if (currentDying === 0) {
        currentWounded = parseInt(record.data?.wounded || "0", 10);
      }
      // Only add wounded if dying was at 0 (gaining dying adds wounded)
      const newDying = currentDying + 1 + currentWounded;
      valuesToSet["data.dying"] = Math.min(newDying, 4);
    }
  }
  if (curhp > record.data?.hitpoints) {
    curhp = record.data?.hitpoints;
  }

  valuesToSet["data.curhp"] = curhp;

  api.setValuesOnRecord(record, valuesToSet);

  // If damage > 0, float text
  const token = api.getToken();
  if (value > 0 && token) {
    if (curhp <= 0) {
      if (token.recordType === "npcs") {
        api.addEffect("Dead", token);
      } else {
        api.addEffects(["Unconscious", "Prone"], token);
      }
    }
    api.floatText(token, `-${value}`, "#FF0000");
  }
}
