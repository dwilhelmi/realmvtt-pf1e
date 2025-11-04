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
  const persistentDamageValue = existingValue
    ? typeof existingValue === "object"
      ? existingValue.value
      : existingValue
    : 0;

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
