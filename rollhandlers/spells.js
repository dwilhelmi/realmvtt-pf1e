function updateSpellcastingEntry(
  record,
  spellcastingEntry,
  spellcastingEntryDataPath
) {
  // Reclaculate the DC and Modifier based on the new values
  const tradition = spellcastingEntry.data?.tradition || "Arcane";
  const type = spellcastingEntry.data?.type || "prepared";

  const proficiency = spellcastingEntry.data?.proficiency || "spell";
  const attribute = spellcastingEntry.data?.attribute || "int";
  const training = parseInt(spellcastingEntry.data?.training || "0", 10);

  const name = `${tradition} ${capitalize(type)} Spells`;
  const isFocus = type === "focus";

  // Get current spellcasting training level
  const currentTraining =
    proficiency === "spell"
      ? `${record.data?.spellcasting || "0"}`
      : `${record.data?.classDCProficiency || "0"}`;
  const newTraining = Math.max(parseInt(currentTraining, 10), training);

  const proficiencyBonus = calculateProficiencyBonus(record, newTraining);
  const attributeScore = record.data?.[`${attribute}`] || 0;

  // Set the DC and Modifier based on the proficiency
  const mod = attributeScore + proficiencyBonus;
  const dc = 10 + mod;

  const valuesToSet = {
    [`${spellcastingEntryDataPath}.name`]: name,
    [`${spellcastingEntryDataPath}.data.dc`]: dc,
    [`${spellcastingEntryDataPath}.data.mod`]: mod,
    [`${spellcastingEntryDataPath}.data.training`]: newTraining,
    // If not in shownSpells, hide them
    [`${spellcastingEntryDataPath}.fields.cantripsBox.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells1Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells2Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells3Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells4Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells5Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells6Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells7Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells8Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells9Box.hidden`]: true,
    [`${spellcastingEntryDataPath}.fields.spells10Box.hidden`]: true,
    // For focus spells
    [`${spellcastingEntryDataPath}.fields.focusPoolLabel.hidden`]: !isFocus,
    [`${spellcastingEntryDataPath}.fields.focusPool.hidden`]: !isFocus,
    [`${spellcastingEntryDataPath}.fields.focusPoolMax.hidden`]: !isFocus,
  };

  // IF TYPE is not spontaneous or focus
  // Go through all the number of spells in each category and add spell slots until we have enough
  // Do not remove spells that are set (data.type !== "slot")
  let fields = [];
  if (type !== "spontaneous" && type !== "focus") {
    fields = [
      { name: "cantrips", level: 0 },
      { name: "spells1", level: 1 },
      { name: "spells2", level: 2 },
      { name: "spells3", level: 3 },
      { name: "spells4", level: 4 },
      { name: "spells5", level: 5 },
      { name: "spells6", level: 6 },
      { name: "spells7", level: 7 },
      { name: "spells8", level: 8 },
      { name: "spells9", level: 9 },
      { name: "spells10", level: 10 },
    ];
  }

  for (const field of fields) {
    const fieldName = field.name;
    const rank = field.level;
    const isCantrip = rank === 0;
    const numSpells = parseInt(
      spellcastingEntry.data?.[`num${capitalize(fieldName)}`] || "0",
      10
    );
    const currentSpells = spellcastingEntry.data?.[fieldName] || [];

    // Keep all spells that are NOT empty slots (type !== "slot")
    const filledSpells = currentSpells.filter(
      (spell) => spell.data?.type !== "slot"
    );

    // Count how many slots we need to add
    const slotsNeeded = Math.max(0, numSpells - filledSpells.length);

    // Create new empty spell slots
    const newSlots = [];
    for (let i = 0; i < slotsNeeded; i++) {
      newSlots.push({
        _id: generateUuid(),
        name: isCantrip ? "Cantrip Slot" : `Rank ${rank} Spell Slot`,
        recordType: "spells",
        unidentifiedName: isCantrip
          ? "Cantrip Slot"
          : `Rank ${rank} Spell Slot`,
        data: {
          type: "slot",
          description: "",
          level: rank,
          slotOrder: filledSpells.length + i,
        },
        fields: {
          spellDetails: { hidden: true },
          innateBox: { hidden: true },
          spellSlot: { hidden: false },
          used: { hidden: isCantrip },
        },
      });
    }

    // Combine filled spells with new empty slots
    valuesToSet[`${spellcastingEntryDataPath}.data.${fieldName}`] = [
      ...filledSpells,
      ...newSlots,
    ];
  }

  // Get which ones are shown, if none are set, we always show cantrips and spells1
  const shownSpells =
    spellcastingEntry.data?.shownSpells === undefined
      ? ["cantrips", "spells1"]
      : spellcastingEntry.data?.shownSpells;
  for (const spell of shownSpells) {
    valuesToSet[
      `${spellcastingEntryDataPath}.fields.${spell}Box.hidden`
    ] = false;
  }

  api.setValues(valuesToSet);
}

function moveUpSpellcastingEntry(dataPath) {
  const spellcastingEntryDataPath = getNearestParentDataPath(dataPath);
  const spellcastingEntry = api.getValue(spellcastingEntryDataPath);
  const allSpellcastingEntries = [...(record.data?.spells || [])];

  const index = parseInt(spellcastingEntryDataPath.split(".").pop(), 10);
  if (index > 0) {
    // Swap the current entry with the one above it
    allSpellcastingEntries[index] = allSpellcastingEntries[index - 1];
    allSpellcastingEntries[index - 1] = spellcastingEntry;

    // Update button visibility: entry at position 0 should have hidden up button
    allSpellcastingEntries[0].fields = allSpellcastingEntries[0].fields || {};
    allSpellcastingEntries[0].fields.moveUpBtn =
      allSpellcastingEntries[0].fields.moveUpBtn || {};
    allSpellcastingEntries[0].fields.moveUpBtn.hidden = true;

    // Entry that moved from position 0 should now show its up button
    if (allSpellcastingEntries.length > 1) {
      allSpellcastingEntries[1].fields = allSpellcastingEntries[1].fields || {};
      allSpellcastingEntries[1].fields.moveUpBtn =
        allSpellcastingEntries[1].fields.moveUpBtn || {};
      allSpellcastingEntries[1].fields.moveUpBtn.hidden = false;
    }

    api.setValues({
      "data.spells": allSpellcastingEntries,
    });
  }
}

// Function for Focus and Spontanteous entries to add a spell the the given list
// spellListDataPath should be like: data.spells.0.spells1 or data.spells.1.cantrips
function addSpell(spellListDataPath) {
  const spellList = api.getValue(spellListDataPath) || [];

  // Extract the spell list type from the path (e.g., "spells1", "cantrips")
  const pathParts = spellListDataPath.split(".");
  const spellListType = pathParts[pathParts.length - 1];

  let rank = 0;
  let isCantrip = false;

  if (spellListType === "cantrips") {
    rank = 0;
    isCantrip = true;
  } else {
    const rankMatch = spellListType.match(/spells(\d+)/);
    if (rankMatch) {
      rank = parseInt(rankMatch[1], 10);
    }
  }

  const newSpell = {
    _id: generateUuid(),
    name: isCantrip ? "New Cantrip" : `New Rank ${rank} Spell`,
    recordType: "spells",
    unidentifiedName: isCantrip ? "New Cantrip" : `New Rank ${rank} Spell`,
    data: {
      type: "slot",
      description: "",
      level: rank,
      slotOrder: spellList.length,
    },
    fields: {
      spellDetails: { hidden: true },
      innateBox: { hidden: true },
      spellSlot: { hidden: false },
      deleteBtn: { hidden: false },
      used: { hidden: true },
    },
  };

  api.addValue(spellListDataPath, newSpell);
}

// Function for Focus and Spontanteous entries to remove a spell "slot"
function removeSpell(record, dataPathToSpell) {
  // Extract the index (last part of the path)
  const pathParts = dataPathToSpell.split(".");
  const indexValue = parseInt(pathParts.pop(), 10);

  if (isNaN(indexValue) || indexValue < 0) {
    return;
  }

  // Join remaining parts to get the spell list path (keeps .data. intact)
  const spellListDataPath = pathParts.join(".");

  console.log("spellListDataPath", spellListDataPath, indexValue);
  api.removeValue(spellListDataPath, indexValue);
}

function addSpellcastingEntry(record) {
  // Add a new spellcasting entry to the list
  // First requery to get selected values for the new entry
  api.getRecord(record.recordType, record._id, (updatedRecord) => {
    // Set name based on the first spellcasting entry
    const tradition = updatedRecord.data?.addTradition || "Arcane";
    const proficiency = updatedRecord.data?.addProficiency || "spell";
    const attribute = updatedRecord.data?.addAttribute || "int";
    const type = updatedRecord.data?.addType || "prepared";

    const name = `${tradition} ${capitalize(type)} Spells`;

    // Get current spellcasting training level
    const training =
      proficiency === "spell"
        ? `${updatedRecord.data?.spellcasting || "0"}`
        : `${updatedRecord.data?.classDCProficiency || "0"}`;
    const proficiencyBonus = calculateProficiencyBonus(record, training);
    const attributeScore = updatedRecord.data?.[`${attribute}`] || 0;
    // Set the DC and Modifier based on the proficiency
    const mod = attributeScore + proficiencyBonus;
    const dc = 10 + mod;

    const isFocus = type === "focus";
    const isSpontaneous = type === "spontaneous";
    const isInnate = type === "innate";
    const index = (updatedRecord.data?.spells || []).length || 0;

    api.addValue(
      "data.spells",
      {
        name: name,
        unidentifiedName: "Spellcasting Entry",
        identified: true,
        data: {
          type: type,
          proficiency: proficiency,
          tradition: tradition,
          attribute: attribute,
          training: training,
          dc: dc,
          mod: mod,
          shownSpells: ["cantrips", "spells1"],
          focusPoolMax: 1,
        },
        // By default, we show these
        fields: {
          cantripsBox: {
            hidden: false,
          },
          spells1Box: {
            hidden: false,
          },
          moveUpBtn: {
            hidden: index === 0,
          },
          // Show/hide buttons and fields for spontaneous / focus spells
          spontaneousBox: {
            hidden: !isSpontaneous,
          },
          addBtn: {
            hidden: !isSpontaneous && !isFocus && !isInnate,
          },
          focusPoolLabel: {
            hidden: !isFocus,
          },
          focusPool: {
            hidden: !isFocus,
          },
          focusPoolMax: {
            hidden: !isFocus,
          },
          numCantrips: {
            hidden: isSpontaneous || isFocus || isInnate,
          },
          numSpells1: {
            hidden: isInnate || isFocus,
          },
          numSpells2: {
            hidden: isInnate || isFocus,
          },
          numSpells3: {
            hidden: isInnate || isFocus,
          },
          numSpells4: {
            hidden: isInnate || isFocus,
          },
          numSpells5: {
            hidden: isInnate || isFocus,
          },
          numSpells6: {
            hidden: isInnate || isFocus,
          },
          numSpells7: {
            hidden: isInnate || isFocus,
          },
          numSpells8: {
            hidden: isInnate || isFocus,
          },
          numSpells9: {
            hidden: isInnate || isFocus,
          },
          numSpells10: {
            hidden: isInnate || isFocus,
          },
          numCantripSpontaneousLabel: {
            hidden: !isSpontaneous && !isInnate && !isFocus,
          },
        },
      },
      () => {
        // Reset the values
        api.setValues({
          "data.addTradition": "",
          "data.addProficiency": "",
          "data.addAttribute": "",
          "data.addType": "",
        });
      }
    );
  });
}

function getCastingRank(record, spell, dataPathToSpell) {
  const pathParts = dataPathToSpell.split(".");

  // Find which spell list this is in (cantrips, spells1, spells2, etc.)
  // Path structure is like: data.spells.1.spells4.4
  // We need the LAST occurrence of cantrips/spells# in the path
  let spellListType = "";
  for (let i = pathParts.length - 1; i >= 0; i--) {
    if (pathParts[i] === "cantrips" || pathParts[i].startsWith("spells")) {
      spellListType = pathParts[i];
      break;
    }
  }

  // Determine the rank we're casting at
  let castingRank = spell?.data?.level || 1;
  if (spellListType === "cantrips") {
    // Cantrips are automatically heightened to half character level (rounded up)
    castingRank = Math.max(1, Math.ceil((record.data?.level || 1) / 2));
  } else if (spellListType && spellListType.startsWith("spells")) {
    // Extract rank from spellListType (e.g., "spells1" -> 1, "spells10" -> 10)
    const rankMatch = spellListType.match(/spells(\d+)/);
    if (rankMatch) {
      castingRank = parseInt(rankMatch[1], 10);
    }
  }

  return castingRank;
}

function getSpellHeighteningInfo(spell, castingRank) {
  const heightening = spell?.data?.heightening || [];
  const baseRank = spell?.data?.level || 1;

  // Return object with heightening changes
  const result = {
    damage: null, // Will be set if fixed heightening applies
    area: null,
    target: null,
    duration: null,
    range: null,
    intervalDamageIncrease: [], // For interval heightening
    intervalAreaIncrease: 0, // Total area increase from all interval heightenings
  };

  if (castingRank <= baseRank || heightening.length === 0) {
    return result;
  }

  // Process interval heightening (all stack)
  heightening.forEach((heightenEntry) => {
    const heightenData = heightenEntry?.data;
    if (!heightenData || heightenData.type !== "interval") return;

    const interval = heightenData.interval || 1;
    const ranksAboveBase = castingRank - baseRank;
    const numIntervals = Math.floor(ranksAboveBase / interval);

    if (numIntervals > 0) {
      // Add damage increase
      if (heightenData.damage) {
        result.intervalDamageIncrease.push({
          numIntervals,
          damage: heightenData.damage,
        });
      }

      // Add area increase (number that adds to base area value)
      if (heightenData.area && typeof heightenData.area === "number") {
        result.intervalAreaIncrease += heightenData.area * numIntervals;
      }
    }
  });

  // Find the single highest fixed heightening across all fixed entries
  let bestMatchingLevel = null;
  let highestMatchingRank = 0;

  heightening.forEach((heightenEntry) => {
    const heightenData = heightenEntry?.data;
    if (!heightenData || heightenData.type !== "fixed") return;

    const levels = heightenData.levels || [];
    levels.forEach((levelEntry) => {
      const levelRank = levelEntry?.data?.rank || 0;
      if (levelRank <= castingRank && levelRank > highestMatchingRank) {
        bestMatchingLevel = levelEntry;
        highestMatchingRank = levelRank;
      }
    });
  });

  // Apply the single best fixed heightening if found
  if (bestMatchingLevel) {
    const levelData = bestMatchingLevel.data;
    result.damage = levelData?.damage || null;
    result.area = levelData?.area || null;
    result.target = levelData?.target || null;
    result.duration = levelData?.duration || null;
    result.range = levelData?.range || null;
  }

  return result;
}

function calculateSpellDamage(record, spell, dataPathToSpell) {
  // Determine the spell rank we're casting at
  const castingRank = getCastingRank(record, spell, dataPathToSpell);

  // Get the spellcasting entry to determine attribute modifier
  // Navigate up from spell path (e.g., data.spells.0.cantrips.0) to get spellcasting entry
  const spellListPath = getNearestParentDataPath(dataPathToSpell); // e.g., data.spells.0.cantrips
  const spellcastingEntryPath = getNearestParentDataPath(spellListPath); // e.g., data.spells.0
  const spellcastingEntry = api.getValue(spellcastingEntryPath);

  let attributeMod = 0;
  if (spellcastingEntry) {
    const attribute = spellcastingEntry?.data?.attribute || "int";
    attributeMod = record.data?.[attribute] || 0;
  }

  const baseDamage = spell?.data?.damage || [];

  let damageString = "";
  let persistentDamage = "";
  const damageComponents = [];
  const persistentComponents = [];

  // Get heightening info
  const heighteningInfo = getSpellHeighteningInfo(spell, castingRank);

  // If fixed heightening applies, use its damage instead of base
  if (heighteningInfo.damage) {
    heighteningInfo.damage.forEach((dmgEntry) => {
      const formula = dmgEntry?.data?.formula || "";
      const type = dmgEntry?.data?.type || "untyped";
      const category = dmgEntry?.data?.category || "";
      const kinds = dmgEntry?.data?.kinds || [];
      const applyMod = dmgEntry?.data?.applyMod || false;

      // Skip if it doesn't have "damage" kind (i.e., only healing)
      if (!kinds.includes("damage")) {
        return;
      }

      if (category === "persistent") {
        if (formula) {
          persistentComponents.push(`${formula} ${type}`);
        }
      } else {
        if (formula) {
          // Apply attribute modifier if applyMod is true
          const damageFormula =
            applyMod && attributeMod > 0
              ? `${formula} + ${attributeMod} ${type}`
              : `${formula} ${type}`;
          damageComponents.push(damageFormula);
        }
      }
    });
  } else {
    // Use base damage
    baseDamage.forEach((dmgEntry) => {
      const formula = dmgEntry?.data?.formula || "";
      const type = dmgEntry?.data?.type || "untyped";
      const category = dmgEntry?.data?.category || "";
      const kinds = dmgEntry?.data?.kinds || [];
      const applyMod = dmgEntry?.data?.applyMod || false;

      // Skip if it doesn't have "damage" kind (i.e., only healing)
      if (!kinds.includes("damage")) {
        return;
      }

      if (category === "persistent") {
        if (formula) {
          persistentComponents.push(`${formula} ${type}`);
        }
      } else {
        if (formula) {
          // Apply attribute modifier if applyMod is true
          const damageFormula =
            applyMod && attributeMod > 0
              ? `${formula} + ${attributeMod} ${type}`
              : `${formula} ${type}`;
          damageComponents.push(damageFormula);
        }
      }
    });

    // Apply interval heightening (stacks with base damage)
    heighteningInfo.intervalDamageIncrease.forEach((intervalInfo) => {
      const { numIntervals, damage } = intervalInfo;
      damage.forEach((heightenDmg, index) => {
        const heightenFormula = heightenDmg?.data?.formula || "";
        const heightenType = heightenDmg?.data?.type || "untyped";

        if (heightenFormula) {
          // Parse the formula to multiply by intervals
          const match = heightenFormula.match(/^(\d+)(d\d+)$/);
          if (match) {
            const numDice = parseInt(match[1], 10);
            const dieType = match[2];
            const totalDice = numDice * numIntervals;
            damageComponents[index] = `${
              damageComponents[index] || ""
            } + ${totalDice}${dieType} ${heightenType}`.trim();
          } else {
            // If it's not dice notation, just add it multiple times
            for (let i = 0; i < numIntervals; i++) {
              damageComponents.push(`${heightenFormula} ${heightenType}`);
            }
          }
        }
      });
    });
  }

  // Build final damage strings
  damageString = damageComponents.join(" + ");
  persistentDamage = persistentComponents.join(" + ");

  return {
    damageString,
    persistentDamage,
    castingRank,
  };
}

function getSpellDamageMacro(record, spell, dataPathToSpell) {
  const spellName = spell?.name || "Unknown Spell";
  const spellDamage = calculateSpellDamage(record, spell, dataPathToSpell);

  if (!spellDamage.damageString && !spellDamage.persistentDamage) {
    return null; // No damage to roll
  }

  const isCantrip = (spell?.data?.traits || []).some(
    (trait) => trait?.toLowerCase() === "cantrip"
  );

  // Determine primary damage type for the macro name
  const firstDamage = spell?.data?.damage?.[0];
  const primaryDamageType = firstDamage?.data?.type || "";
  const damageTypeName = primaryDamageType
    ? capitalize(primaryDamageType)
    : "Damage";

  // Get damage modifiers based on spell type
  const damageModifierTypes = isCantrip
    ? ["cantripDamageBonus", "cantripDamagePenalty"]
    : ["spellDamageBonus", "spellDamagePenalty"];

  return `\`\`\`Roll_${damageTypeName}_Damage
  const selectedTokens = api.getSelectedOrDroppedToken();
  if (!selectedTokens || selectedTokens.length === 0) {
    return;
  }
  const record = selectedTokens[0];
  
  // Get damage modifiers based on spell type
  const damageModifierTypes = ${JSON.stringify(damageModifierTypes)};
  const damageModifiers = getEffectsAndModifiersForToken(
    record,
    damageModifierTypes
  );
  
  const damage = "${spellDamage.damageString}";
  const persistentDamage = "${spellDamage.persistentDamage}";
  
  api.promptRoll(
    "${spellName}",
    damage,
    damageModifiers,
    {
      persistentDamage: persistentDamage,
      isSpell: true,
      rollName: "${spellName} Damage"
    },
    "damage"
  );
  \`\`\``;
}

function getSpellSaveMacro(record, spell, spellCastingEntry, dataPathToSpell) {
  const saveType = spell?.data?.defense?.save?.statistic;
  const saveDC = spellCastingEntry?.data?.dc || 0;
  const spellDCMods = getEffectsAndModifiersForToken(
    record,
    ["spellDCBonus", "spellDCPenalty"],
    saveType
  );
  spellDCMods.forEach((mod) => {
    saveDC += mod.value;
  });
  return getSaveMacro(saveType, saveDC, true, true);
}

function getSpellAttackMacro(
  record,
  spell,
  spellCastingEntry,
  dataPathToSpell,
  animation
) {
  const defense = spell?.data?.defense || null;
  if (!defense || !defense.passive || !defense.passive.statistic) {
    return "";
  }

  const spellName = spell?.name || "Spell";
  const defenseStatistic = defense.passive.statistic; // ac, fortitude-dc, reflex-dc, or will-dc
  const spellAttackMod = spellCastingEntry?.data?.mod || 0;
  const range = (spell?.data?.range || "").toLowerCase().trim();

  // Determine if spell is melee
  const isMelee =
    !range ||
    range === "0" ||
    range === "0 feet" ||
    range === "0 ft" ||
    range === "touch";

  // Determine save type and description based on the defense statistic
  let saveType = "";
  let dcDescription = "";
  let isAC = false;

  if (defenseStatistic === "ac") {
    isAC = true;
    dcDescription = "AC";
  } else if (defenseStatistic === "fortitude-dc") {
    saveType = "fortitude";
    dcDescription = "Fortitude DC";
  } else if (defenseStatistic === "reflex-dc") {
    saveType = "reflex";
    dcDescription = "Reflex DC";
  } else if (defenseStatistic === "will-dc") {
    saveType = "will";
    dcDescription = "Will DC";
  }

  const spellDamage = calculateSpellDamage(record, spell, dataPathToSpell);
  const isCantrip = (spell?.data?.traits || []).some(
    (trait) => trait?.toLowerCase() === "cantrip"
  );

  // Determine primary damage type for physical damage check
  const firstDamage = spell?.data?.damage?.[0];
  const primaryDamageType = firstDamage?.data?.type || "untyped";
  const damageIsPhysical = ["bludgeoning", "piercing", "slashing"].includes(
    primaryDamageType.toLowerCase()
  );

  return `\`\`\`Roll_Attack
  const selectedTokens = api.getSelectedOrDroppedToken();
  if (!selectedTokens || selectedTokens.length === 0) {
    return;
  }
  const record = selectedTokens[0];
  const targets = api.getTargets();
  const ourToken = api.getToken();
  const recordId = record._id;
  const recordType = record.type;
  
  // Get spell attack modifiers for the caster
  const spellAttackMods = getEffectsAndModifiersForToken(
    record,
    ["spellAttackBonus", "spellAttackPenalty"]
  );
  
  // Get damage modifiers based on spell type
  const damageModifierTypes = ${isCantrip}
    ? ["cantripDamageBonus", "cantripDamagePenalty"]
    : ["spellDamageBonus", "spellDamagePenalty"];
  
  const damageModifiers = getEffectsAndModifiersForToken(
    record,
    damageModifierTypes
  );
  
  const modifiers = [
    {
      name: "Spell Attack",
      type: "",
      value: ${spellAttackMod},
      active: true
    },
    ...spellAttackMods
  ];
  
  if (targets.length === 0) {
    // No target - just roll without target-specific modifiers
    const metadata = {
      attack: "${spellName}",
      rollName: "Spell Attack",
      tooltip: "Spell Attack vs ${dcDescription}",
      isSpell: true,
      isMelee: ${isMelee},
      isRanged: ${!isMelee},
      damage: "${spellDamage.damageString}",
      damageType: "${primaryDamageType}",
      persistentDamage: "${spellDamage.persistentDamage}",
      damageModifiers: damageModifiers,
      animation: ${JSON.stringify(animation)},
    };
  
    api.promptRoll(
      "Spell Attack: ${spellName}",
      "1d20",
      modifiers,
      metadata,
      "attack"
    );
  } else {
    for (const target of targets) {
      const targetToken = target.token;
      const targetRecord = targetToken?.record;
      const targetDistance = target?.distance || 0;
  
      // Check if target has shield raised
      let targetShieldRaised = false;
      if (targetToken?.data?.shieldRaised === "true") {
        targetShieldRaised = true;
      }
  
      // Check if target is off-guard
      let targetIsOffGuard = isOffGuard(targetToken);
  
      // Check for flanking if melee
      let targetIsOffGuardDueToFlanking = false;
      if (${isMelee} && !targetIsOffGuard) {
        targetIsOffGuardDueToFlanking = isOffGuardDueToFlanking({
          sourceToken: ourToken,
          sourceReach: record.data?.reach || 5,
          otherTokens: api.getOtherTokens(),
          target: target
        });
        targetIsOffGuard = targetIsOffGuardDueToFlanking;
      }
  
      // Calculate target DC using proper functions
      let targetDC = 10;
      if (${isAC}) {
        targetDC = getArmorClassForToken(targetToken, targetIsOffGuardDueToFlanking);
      } else {
        targetDC = getSaveDCForToken(targetToken, "${saveType}");
      }
  
      // Get attack modifiers from effects on the target
      const targetEffects = getAttackModifiersForTarget(targetToken, targetDistance);
      const targetModifiers = [...modifiers, ...targetEffects];
  
      const targetName = targetToken?.identified === false ? targetRecord?.unidentifiedName : targetRecord?.name;
  
      const metadata = {
        attack: "${spellName}",
        rollName: "Spell Attack",
        tooltip: \`Spell Attack vs \${targetName}'s ${dcDescription}\`,
        isSpell: true,
        isMelee: ${isMelee},
        isRanged: ${!isMelee},
        dc: targetDC,
        dcName: "${dcDescription}",
        targetName: targetName,
        isOffGuard: targetIsOffGuard,
        tokenId: ourToken?._id,
        targetId: targetToken?._id,
        damage: "${spellDamage.damageString}",
        damageType: "${primaryDamageType}",
        persistentDamage: "${spellDamage.persistentDamage}",
        damageModifiers: damageModifiers,
        showShieldDamage: targetShieldRaised && ${damageIsPhysical},
        animation: ${JSON.stringify(animation)},
      };
  
      api.promptRoll(
        \`Spell Attack: ${spellName} vs \${targetName}\`,
        "1d20",
        targetModifiers,
        metadata,
        "attack"
      );
    }
  }
  \`\`\``;
}

function castSpell(record, spell, dataPathToSpell) {
  const isCantrip = (spell?.data?.traits || []).some(
    (trait) => trait?.toLowerCase() === "cantrip"
  );
  const spellName = spell?.name || "Unknown Spell";
  const actions = (spell?.data?.time || "").toLowerCase();
  let actionIcon = "";
  if (actions === "free") {
    actionIcon = ":free-action:";
  } else if (actions === "1") {
    actionIcon = ":one-action:";
  } else if (actions === "2") {
    actionIcon = ":two-actions:";
  } else if (actions === "3") {
    actionIcon = ":three-actions:";
  } else if (actions === "1 to 2") {
    actionIcon = ":1-to-2:";
  } else if (actions === "1 to 3") {
    actionIcon = ":1-to-3:";
  } else if (actions === "reaction") {
    actionIcon = ":reaction:";
  }

  const valuesToSet = {};

  const traits = spell?.data?.traits || [];
  const tags = [];

  // Get casting rank and heightening info to check for replacements
  const castingRank = getCastingRank(record, spell, dataPathToSpell);
  const heighteningInfo = getSpellHeighteningInfo(spell, castingRank);

  // Add other tags like range, duration, etc. (use heightened values if available)
  const range = heighteningInfo.range || spell?.data?.range || "";
  const duration = heighteningInfo.duration || spell?.data?.duration || null;
  const durationString =
    typeof duration === "string"
      ? duration
      : duration && duration.value
      ? `${duration.value} ${duration.sustained ? "Sustained" : ""}`
      : "";
  const targetString = heighteningInfo.target || spell?.data?.target || "";

  // Area can be replaced (fixed heightening) or increased (interval heightening)
  let area = heighteningInfo.area || spell?.data?.area || null;
  if (
    !heighteningInfo.area &&
    spell?.data?.area &&
    heighteningInfo.intervalAreaIncrease > 0
  ) {
    // Apply interval area increase to base area
    area = {
      type: spell.data.area.type,
      value:
        (spell.data.area.value || 0) + heighteningInfo.intervalAreaIncrease,
    };
  }

  const areaString =
    area && area.type && area.value
      ? `${capitalize(area.type)} ${area.value} ft`
      : "";
  if (range) {
    tags.push({
      name: range,
      tooltip: `Range: ${range}`,
    });
  }
  if (durationString) {
    tags.push({
      name: durationString.trim(),
      tooltip: `Duration: ${durationString.trim()}`,
    });
  }
  if (targetString) {
    tags.push({
      name: targetString,
      tooltip: `Targets: ${targetString}`,
    });
  }
  if (areaString) {
    tags.push({
      name: areaString,
      tooltip: `Area: ${areaString}`,
    });
  }

  // Get all traits as tags
  traits.forEach((trait) => {
    // Ignore rarity traits
    if (getIsTraitRarity(trait)) {
      return;
    }
    tags.push({
      name: trait,
      tooltip: getTraitToolTip(trait),
    });
  });

  // We'll need to mark the spell as cast unless it was a catrip / focus / innate / or spontaneus spell
  const dataPathToSpellCastingEntry = getNearestParentDataPath(dataPathToSpell);
  const spellCastingEntry = api.getValue(dataPathToSpellCastingEntry);
  const type = spellCastingEntry.data?.type;

  const isSpontaneous = type === "spontaneous";
  const isFocus = type === "focus";
  const isInnate = type === "innate";

  if (!isSpontaneous && !isFocus && !isInnate && !isCantrip) {
    valuesToSet[`${dataPathToSpell}.data.used`] = true;
    valuesToSet[`${dataPathToSpell}.fields.nameUsedBox.hidden`] = false;
    valuesToSet[`${dataPathToSpell}.fields.nameBox.hidden`] = true;
  }

  if (spellCastingEntry.data?.type === "focus" && !isCantrip) {
    const maxFocusPool = spellCastingEntry.data?.focusPoolMax || 1;
    const usedFocus = spellCastingEntry.data?.focusPool || 0;

    if (usedFocus >= maxFocusPool) {
      api.showNotification(
        `You are out of Focus points and must first Refocus to cast this spell.`,
        "red",
        "Out of Focus Points"
      );
      return;
    }

    const newUsedFocus = Math.min(usedFocus + 1, maxFocusPool);
    valuesToSet[`${dataPathToSpellCastingEntry}.data.focusPool`] = newUsedFocus;
  }

  if (isSpontaneous && !isCantrip) {
    // Spontaneous spells use the `useSpellsX` field to track
    const usedSpells =
      spellCastingEntry.data?.[`usedSpells${castingRank}`] || 0;
    if (usedSpells <= -0) {
      api.showNotification(
        `You are out of Spell Slots for Rank ${castingRank}`,
        "red",
        "Out of Spell Slots"
      );
      return;
    }
    const newUsedSpells = Math.max(usedSpells - 1, 0);
    valuesToSet[
      `${dataPathToSpellCastingEntry}.data.usedSpells${castingRank}`
    ] = newUsedSpells;
  }

  if (isInnate && !isCantrip) {
    const spellUses = spell?.data?.uses || 0;

    if (spellUses <= 0) {
      api.showNotification(
        `You are out of Spell Uses for ${spellName}`,
        "red",
        "Out of Spell Uses"
      );
      return;
    }

    const newSpellUses = Math.max(spellUses - 1, 0);
    valuesToSet[`${dataPathToSpell}.data.uses`] = newSpellUses;
  }

  const spellDescription = api.richTextToMarkdown(
    spell?.data?.description || ""
  );

  let portrait = spell?.portrait
    ? `![${spellName}](${assetUrl}${encodeURI(
        spell?.portrait
      )}?width=40&height=40) `
    : "";

  if (
    (portrait.includes("Action") || portrait.includes("Reaction")) &&
    actionIcon !== ""
  ) {
    // If the portrait is also an action icon, don't show it
    portrait = "";
  }

  // Play animation if needed
  const ourToken = api.getToken();
  const targets = api.getTargets();
  const tokenId = ourToken?._id;
  const targetId = targets.length > 0 ? targets[0]?.token?._id : null;
  // Use the first instance of damage to determine animation if needed
  const damage1 =
    spell?.data?.damage && spell?.data?.damage.length > 0
      ? spell?.data?.damage[0]
      : null;
  const damageString = damage1
    ? `${damage1?.data?.formula || ""} ${damage1?.data?.type || "untyped"}`
    : "";
  const isHealing =
    damage1 &&
    damage1.data?.kinds &&
    damage1.data?.kinds.length > 0 &&
    damage1.data?.kinds.includes("healing");
  const animation =
    spell?.data?.animation ||
    getAnimationFor({
      abilityName: spellName,
      abilityDescription: spellDescription,
      damage: damageString.toLowerCase(),
      healing: isHealing,
      isRanged:
        spell?.data?.range &&
        (spell?.data?.range !== "Self" || spell?.data?.range !== "Touch"),
      isSpell: true,
    });

  let hasAttackMacro = false;
  const macros = [];
  const defense = spell?.data?.defense || null;

  if (defense) {
    // If the spell has a passive stat defense, we show a "Roll Attack" macro
    if (defense.passive && defense.passive.statistic) {
      const macro = getSpellAttackMacro(
        record,
        spell,
        spellCastingEntry,
        dataPathToSpell,
        animation
      );
      macros.push(macro);
      hasAttackMacro = true;
    }
    // If saving throws, show saves
    if (defense.save && defense.save.statistic) {
      const saveMacro = getSpellSaveMacro(
        record,
        spell,
        spellCastingEntry,
        dataPathToSpell
      );
      macros.push(saveMacro);

      // Add damage macro for saving throw spells
      const damageMacro = getSpellDamageMacro(record, spell, dataPathToSpell);
      if (damageMacro) {
        macros.push(damageMacro);
      }
    }
  }

  const message = `
  #### ${portrait}${spellName}${actionIcon ? "&nbsp;" : ""}${actionIcon}
  
  ---
  ${spellDescription}
  ${macros && macros.length > 0 ? `${macros.join("\n")}\n` : ""}
  `;

  // Send the message
  api.sendMessage(message, undefined, [], tags);

  // Update values
  api.setValuesOnRecord(record, valuesToSet);

  // Play animation only if not using attack macro (macro handles animation)
  if (animation && tokenId && !hasAttackMacro) {
    api.playAnimation(animation, tokenId, targetId);
  }
}
