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

  // Find all persistent damage effects
  const persistentDamageEffects = effects.filter((effect) => {
    const rules = effect?.rules || [];
    return rules.some((rule) => rule.type === "persistentDamage");
  });

  // Process each persistent damage effect
  persistentDamageEffects.forEach((effect) => {
    const existingValue = effectValues[effect?._id];

    if (!existingValue) {
      return;
    }

    // Get the value of the persistent damage effect
    // Handle both object with .value property and direct values
    const persistentDamageValue =
      typeof existingValue === "object" && existingValue.value !== undefined
        ? existingValue.value
        : existingValue;

    if (!persistentDamageValue) {
      return;
    }

    // Handle string or array values
    if (typeof persistentDamageValue === "string") {
      // String: roll once with index 0
      api.roll(
        persistentDamageValue,
        { isPersistant: true, persistentPartIndex: 0 },
        "damage"
      );
    } else if (Array.isArray(persistentDamageValue)) {
      // Array: roll each value with index as partIndex
      // Each element is an object with a value property
      persistentDamageValue.forEach((item, index) => {
        const value = item?.value || item;
        if (value) {
          api.roll(
            value,
            { isPersistant: true, persistentPartIndex: index },
            "damage"
          );
        }
      });
    }
  });
}
