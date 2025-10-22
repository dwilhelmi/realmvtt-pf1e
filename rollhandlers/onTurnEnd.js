const token = data?.token;

// Check for persistant damage effects like On Fire
const modifiers = getEffectsAndModifiersForToken(
  token,
  ["persistentDamage"],
  ""
);

// This gets rolled immediately
if (modifiers.length > 0) {
  const effects = token?.effects || [];
  const effectValues = token?.effectValues || {};
  const persistentDamageEffect = effects.find((effect) => {
    const rules = effect?.rules || [];
    return rules.some((rule) => rule.type === "persistentDamage");
  });
  const existingValue = persistentDamageEffect
    ? effectValues[persistentDamageEffect?._id]
    : undefined;

  // Get the value of the persistent damage effect
  const persistentDamageValue = existingValue ? existingValue.value : 0;

  // Split persistent damage into parts by '+' and roll each separately
  if (persistentDamageValue) {
    // Split by '+' but preserve spaces around it
    const damageParts = persistentDamageValue
      .split("+")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    // Roll each damage part separately
    damageParts.forEach((part, index) => {
      api.roll(
        part,
        { isPersistant: true, persistentPartIndex: index },
        "damage"
      );
    });
  }
}

// Check if the target's shield is up and is a character
const shieldUp = token?.data?.shieldRaised === "true";
const isCharacter = token?.recordType === "characters";
if (shieldUp && token?.recordId) {
  if (isCharacter) {
    api.getRecord("characters", token?.recordId, (record) => {
      if (record) {
        const valuesToSet = {
          "data.shieldRaised": "false",
        };
        api.setValuesOnRecord(record, valuesToSet, (updatedRecord) => {
          // If update was successful, then recalc AC and  bonuses
          onAddEditFeature(updatedRecord, undefined, true);
        });
      }
    });
  } else if (token?.recordType === "npcs" && token?.recordId) {
    api.setValuesOnTokenById(
      token?._id,
      token?.recordType,
      {
        "data.shieldRaised": "false",
      },
      (updatedToken) => {
        // If update was successful, then recalc AC and  bonuses
        onAddEditFeature(updatedToken, undefined, true);
      }
    );
  }
}
