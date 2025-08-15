// Generates a random UUID for adding Subskills manually to Skills during character creation
function generateUuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // Generate a random number between 0 and 15 (0xF)
    const r = Math.floor(Math.random() * 16);
    // For 'x', use random digit
    // For 'y', use random digit with bits 0 and 1 set to 1 and 0 respectively (8, 9, A, or B)
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    // Convert to hexadecimal string
    return v.toString(16);
  });
}

function getEffectAppliedBy(record, effect) {
  const effectValue = record?.effectValues?.[effect?._id];
  if (effectValue && effectValue?.tokenId !== "null") {
    return effectValue?.tokenId;
  }
  return null;
}

const getNearestParentDataPath = (dataPath) => {
  const parts = dataPath.split(".data");
  return parts.length > 1 ? parts.slice(0, -1).join(".data") : "";
};

function capitalize(string) {
  if (!string || typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function normalToCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+(.)/g, (match, char) => char.toUpperCase());
}

function camelToNormal(skill) {
  return skill.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

function convertToDataPaths(data) {
  const result = {};

  function processObject(obj, currentPath = "") {
    // Exit early if obj is null or undefined
    if (obj === null || obj === undefined) return;

    // Handle arrays and objects differently
    if (Array.isArray(obj)) {
      // For arrays, we store the entire array at the current path
      result[currentPath] = obj;
    } else if (typeof obj === "object") {
      // For objects, recursively process each property
      Object.keys(obj).forEach((key) => {
        const newPath = currentPath ? `${currentPath}.${key}` : key;

        // If the value is a primitive or an array, add it directly to the result
        if (
          typeof obj[key] !== "object" ||
          Array.isArray(obj[key]) ||
          obj[key] === null
        ) {
          result[newPath] = obj[key];
        } else {
          // Otherwise, recursively process the nested object
          processObject(obj[key], newPath);
        }
      });
    } else {
      // Handle primitive values
      result[currentPath] = obj;
    }
  }

  processObject(data);
  return result;
}

function evaluateMath(stringValue) {
  // Return 0 if no value provided
  if (!stringValue) return 0;

  try {
    // Remove all whitespace and validate string only contains valid math characters
    const sanitizedString = stringValue.replace(/\s+/g, "");
    if (!/^[0-9+\-*/().]+$/.test(sanitizedString)) {
      return 0;
    }

    // Use Function constructor to safely evaluate the math expression
    // Math.floor to match D&D's rounding down convention
    return Math.floor(Function(`'use strict'; return (${sanitizedString})`)());
  } catch (e) {
    // Return 0 if evaluation fails
    return 0;
  }
}

function applyMath(value, math) {
  // Trim spaces and split the string into operator and number
  const trimmedMath = math.trim();
  const operator = trimmedMath.charAt(0);
  const number = parseInt(trimmedMath.slice(1).trim(), 10);

  if (isNaN(number)) {
    return value;
  }

  switch (operator) {
    case "+":
      return value + number;
    case "-":
      return value - number;
    case "*":
      return value * number;
    case "/":
      return Math.floor(value / number); // Always round down
    default:
      return value;
  }
}

function getDurationInSeconds(duration) {
  if (!duration) return 0;

  // Parse the string to get the number and unit
  const match = cleanDuration.match(/(\d+)\s+(round|minute|hour|day|week)s?/i);
  if (match) {
    const timeAmount = parseInt(match[1], 10);
    if (isNaN(timeAmount)) {
      return 0;
    }

    const timeUnit = match[2].toLowerCase();
    switch (timeUnit) {
      case "round":
        return timeAmount * 6; // 1 round = 6 seconds
      case "minute":
        return timeAmount * 60; // 1 minute = 60 seconds
      case "hour":
        return timeAmount * 3600; // 1 hour = 3600 seconds
      case "day":
        return timeAmount * 86400; // 1 day = 86400 seconds
      case "week":
        return timeAmount * 604800; // 1 week = 604800 seconds
      default:
        return 0;
    }
  }
  return 0;
}

function getDamageType(rollString) {
  const regex = /(?:\d*d\d+|\+\d+)?(?:\s*\+?-?\s*\d+)?(?:\s+([\w-_]+))?/;
  const match = rollString.match(regex);
  return match && match[1] ? match[1] : "untyped";
}

// Checks for replacements in a string modifier
function checkForReplacements(value, replacements = {}, recordOverride = null) {
  let thisRecord = recordOverride || record;
  // Case for 'Half Character Level' or 'Half <class> Level'
  const matchLevel = value.match(/[Hh]alf [Cc]haracter [Ll]evel/);
  const matchCharacterLevel = value.match(/[Cc]haracter [Ll]evel/);
  if (matchLevel) {
    value = Math.floor(parseInt(thisRecord?.data?.level || "1", 10) / 2);
  } else if (matchCharacterLevel) {
    value = Math.floor(parseInt(thisRecord?.data?.level || "1", 10));
  }

  // Case for Strength|Dexterity|Constitution|Wisdom|Intelligence|Charisma
  const matchModifier = value.match(
    /[Ss]trength|[Dd]exterity|[Cc]onstitution|[Ww]isdom|[Ii]ntelligence|[Cc]harisma/
  );
  if (matchModifier) {
    const attributeMod = parseInt(
      thisRecord?.data?.[
        `${matchModifier[0].toLowerCase().replace(" ", "")}`
      ] || "0",
      10
    );
    value = value.replaceAll(matchModifier[0], attributeMod);
  }
  // Check for replacements in the replacements object
  if (replacements && Object.keys(replacements).length > 0) {
    Object.keys(replacements).forEach((key) => {
      value = value.replaceAll(key, replacements[key]);
    });
  }
  return value;
}

function getTotalValueFromFields(
  recordContext,
  fieldsToAddToUses,
  fieldValueOverrides
) {
  let total = 0;
  let times5 = false;
  let plus1 = false;
  fieldsToAddToUses.forEach((field) => {
    let value = 0;
    if (field === "times5") {
      times5 = true;
    } else if (field === "plus1") {
      plus1 = true;
    } else if (isClassLevel(field)) {
      value = getClassLevel(recordContext, field, fieldValueOverrides);
    } else {
      value = parseInt(recordContext?.data?.[field] || "0", 10);
    }
    if (isNaN(value)) {
      value = 0;
    }
    if (fieldValueOverrides && fieldValueOverrides[`data.${field}`]) {
      value = parseInt(fieldValueOverrides[`data.${field}`], 10);
      if (isNaN(value)) {
        value = 0;
      }
    }
    total += value;
  });
  // Minimum of 1
  if (total < 1) {
    total = 1;
  }
  if (times5) {
    total *= 5;
  }
  if (plus1) {
    total += 1;
  }
  return total;
}

// In this call, we look for effects that are relevant to the caller and the target
function getAttackModifiersForTarget(target, distance) {
  if (!target) {
    return [];
  }

  let results = [];

  // Get effects that are relevant to the target
  const effectsToCheck = ["attackTargeting"];
  // If we're within 5 feet, add the attackTargetingFive effect
  if (distance !== undefined && distance !== null && distance <= 5) {
    effectsToCheck.push("attackTargetingFive");
  }
  // If we're greater than 5 feet, add the attackTargetingGreaterFive effect
  if (distance !== undefined && distance > 5) {
    effectsToCheck.push("attackTargetingGreaterFive");
  }
  const attackTargetingEffects = getEffectsAndModifiersForToken(
    target,
    effectsToCheck
  );
  attackTargetingEffects.forEach((r) => {
    results.push({
      ...r,
      name: r.isEffect ? `Target Has the ${r.name} Effect` : r.name,
    });
  });

  return results;
}

// Same as getEffectsAndModifiers but for a token that is passed
function getEffectsAndModifiersForToken(
  target,
  types = [],
  field = "",
  itemId = undefined,
  appliedById = undefined
) {
  if (!target) {
    return [];
  }
  let results = [];

  // Set of stack modifiers that we have seen so we don't duplicate them
  const stackModifiers = {};

  // First collect modifiers from effects
  const effects = target?.effects || [];
  effects.forEach((effect) => {
    const rules = effect.rules || [];
    rules.forEach((rule) => {
      const ruleType = rule?.type || "";
      const isPenalty = ruleType.toLowerCase().includes("penalty");
      let value = rule.value || "";
      if (rule.valueType === "number") {
        value = parseInt(rule.value, 10);
        if (isNaN(value)) {
          value = 0;
        }
        if (isPenalty && value > 0) {
          value = -value;
        }
      } else if (
        rule.valueType === "string" &&
        !value.trim().startsWith("-") &&
        isPenalty &&
        !value.includes("disadvantage")
      ) {
        value = "-" + value;
      }
      // Check for strings that require replacements
      if (rule.valueType === "string") {
        value = checkForReplacements(value, {}, target);
      }
      if (
        value !== 0 &&
        (rule.valueType === "number" || rule.valueType === "string")
      ) {
        let name = effect.name || "Effect";
        // If this is a stackable effect, add the effect per stack amount with a different name each time
        let times = 1;
        if (effect.stackable) {
          times = target?.effectIds?.filter((id) => id === effect?._id).length;
        }
        for (let i = 0; i < times; i++) {
          results.push({
            name: i > 0 ? `${name} (x${i + 1})` : name,
            value: value,
            active: true,
            modifierType: ruleType,
            field: rule?.field || "",
            valueType: rule.valueType,
            isPenalty: isPenalty,
            isEffect: true,
            appliedBy: getEffectAppliedBy(target, effect),
          });
        }
      } else if (rule.valueType === "api") {
        let value = parseInt(target?.effectValues?.[effect?._id] || "0", 10);
        if (isPenalty && value > 0) {
          value = -value;
        }
        if (value !== 0) {
          results.push({
            name: effect.name || "Effect",
            value: value,
            active: true,
            modifierType: ruleType,
            field: rule?.field || "",
            valueType: rule.valueType,
            isPenalty: isPenalty,
            isEffect: true,
            appliedBy: null,
          });
        }
      } else if (
        rule.valueType === "stack" &&
        !stackModifiers[`${effect?._id}-${JSON.stringify(rule)}`]
      ) {
        stackModifiers[`${effect?._id}-${JSON.stringify(rule)}`] = true;
        // The value is the number of times they have this effect
        let value = target?.effectIds?.filter(
          (id) => id === effect?._id
        ).length;
        if (isPenalty && value > 0) {
          value = -value;
        }
        // Check if there is addtional math to apply to it
        const math = rule?.value || "";
        if (math) {
          value = applyMath(value, math);
        }
        if (isPenalty && value > 0) {
          value = -value;
        }
        if (value !== 0) {
          results.push({
            name: effect.name || "Effect",
            value: value,
            active: true,
            modifierType: ruleType,
            field: rule?.field || "",
            valueType: rule.valueType,
            isPenalty: isPenalty,
            isEffect: true,
            appliedBy: getEffectAppliedBy(target, effect),
          });
        }
      }
    });
  });

  // Now collect all modifiers from Features and Items
  const features = target?.data?.features || [];
  // Ensure items is an array before filtering
  const items = Array.isArray(target?.data?.inventory)
    ? target?.data?.inventory
    : [];

  // Filter items that are not equipped or that require attunement and not attuned
  const equippedItems = items.filter(
    (item) =>
      item.data?.carried === "equipped" &&
      (!item.data?.attunement || item.data?.attuned === "true")
  );
  [...features, ...equippedItems].forEach((feature) => {
    const modifiers = feature.data?.modifiers || [];
    modifiers.forEach((modifier) => {
      const ruleType = modifier.data?.type || "";
      const isPenalty = ruleType.toLowerCase().includes("penalty");
      let value = modifier.data?.value || "";
      if (modifier.data?.valueType === "number") {
        value = parseInt(modifier.data?.value, 10);
        if (isNaN(value)) {
          value = 0;
        }
        if (isPenalty && value > 0) {
          value = -value;
        }
      } else if (modifier.data?.valueType === "field") {
        const fieldToUse = modifier.data?.value || "";
        if (fieldToUse) {
          value = target?.data?.[fieldToUse] || "";
        }
      } else if (
        modifier.data?.valueType === "string" &&
        !value.trim().startsWith("-") &&
        isPenalty
      ) {
        value = "-" + value;
      }

      // Check for strings that require replacements
      if (modifier.data?.valueType === "string") {
        value = checkForReplacements(value, {}, target);
      }

      // Only relevant if it has a value
      if (value !== 0) {
        // Check if this only applies to equipped item and mark it with ID if so
        const itemOnly = modifier.data?.itemOnly || false;
        results.push({
          name: feature?.name || "Feature",
          value: value,
          active: modifier.data?.active === true,
          modifierType: ruleType,
          field: modifier.data?.field || "",
          valueType: modifier.data?.valueType,
          itemId: itemOnly ? feature?._id : undefined,
          isPenalty: isPenalty,
          isEffect: false,
        });
      }
    });
  });

  // Special case for armor, if this is a stealth check
  if (field === "stealth") {
    const bestEquippedArmor = target?.data?.armor || undefined;
    if (bestEquippedArmor?.stealthPenalty) {
      results.push({
        name: "Disadvantage due to Armor",
        value: "disadvantage",
        active: true,
        modifierType: "skillPenalty",
        isPenalty: true,
        field: "stealth",
        isEffect: false,
      });
    }
  }

  if (types && types.length > 0) {
    results = results.filter((r) => types.includes(r.modifierType));
  }

  if (field && field !== "") {
    results = results.filter(
      (r) => r.field === field || r.field === "all" || !r.field
    );
  }

  // Filter by itemId if provided
  results = results.filter(
    (r) => r.itemId === itemId || r.itemId === undefined
  );

  // Filter by appliedById if provided
  if (appliedById) {
    results = results.filter((r) => r.appliedBy === appliedById);
  }

  return results;
}
