// PF1e spellcasting entry management
function updateSpellcastingEntry(
  record,
  spellcastingEntry,
  spellcastingEntryDataPath
) {
  const type = spellcastingEntry.data?.type || "prepared";
  const attribute = spellcastingEntry.data?.attribute || "int";

  const isNPC = record.recordType === "npcs" || record.recordType === "tokens";
  const isSpontaneous = type === "spontaneous";
  const isPrepared = !isSpontaneous;

  const valuesToSet = {
    // Hide all spell level boxes by default, then show selected ones
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
  };

  if (!isNPC) {
    // PF1e: DC = 10 + ability modifier (spell level added at cast time)
    const attributeScore = record.data?.[`${attribute}`] || 0;
    const characterLevel = parseInt(record.data?.level || "1", 10);
    const casterLevelOverride = parseInt(
      spellcastingEntry.data?.casterLevel || "0",
      10
    );
    const casterLevel = casterLevelOverride > 0 ? casterLevelOverride : characterLevel;
    const baseDC = 10 + attributeScore;
    const concentrationMod = casterLevel + attributeScore;

    valuesToSet[`${spellcastingEntryDataPath}.data.dc`] = baseDC;
    valuesToSet[`${spellcastingEntryDataPath}.data.casterLevelDisplay`] = casterLevel;
    valuesToSet[`${spellcastingEntryDataPath}.data.concentrationMod`] = concentrationMod;
  }

  // Set field visibility based on spellcasting type
  valuesToSet[`${spellcastingEntryDataPath}.fields.spontaneousBox.hidden`] =
    !isSpontaneous;
  valuesToSet[`${spellcastingEntryDataPath}.fields.preparedBox.hidden`] =
    !isPrepared;
  valuesToSet[`${spellcastingEntryDataPath}.fields.addBtn.hidden`] =
    !isSpontaneous;
  valuesToSet[`${spellcastingEntryDataPath}.fields.numCantrips.hidden`] =
    isSpontaneous;
  valuesToSet[
    `${spellcastingEntryDataPath}.fields.numCantripSpontaneousLabel.hidden`
  ] = !isSpontaneous;

  // PF1e spell levels 0-9
  const allSpellLists = [
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
  ];

  for (const field of allSpellLists) {
    const fieldName = field.name;
    const spellLevel = field.level;
    const isCantrip = spellLevel === 0;
    const currentSpells = spellcastingEntry.data?.[fieldName] || [];

    if (isPrepared) {
      // For prepared spellcasting: manage slots and keep spells
      const filledSpells = currentSpells.filter(
        (spell) => spell.data?.type !== "slot"
      );

      filledSpells.forEach((spell) => {
        if (spell.data?.type === "spell") {
          if (!spell.fields) spell.fields = {};
          if (!spell.data) spell.data = {};

          spell.data.used = false;
          spell.fields.innateBox = { hidden: true };
          spell.fields.used = { hidden: isCantrip };
          spell.fields.deleteBtn = { hidden: true };
        }
      });

      // Create new empty spell slots for prepared spellcasting
      const numSpells = parseInt(
        spellcastingEntry.data?.[`num${capitalize(fieldName)}`] || "0",
        10
      );
      const slotsNeeded = Math.max(0, numSpells - filledSpells.length);
      const newSlots = [];

      for (let i = 0; i < slotsNeeded; i++) {
        newSlots.push({
          _id: generateUuid(),
          name: isCantrip ? "Cantrip Slot" : `Level ${spellLevel} Spell Slot`,
          recordType: "spells",
          unidentifiedName: isCantrip
            ? "Cantrip Slot"
            : `Level ${spellLevel} Spell Slot`,
          data: {
            type: "slot",
            description: "",
            level: spellLevel,
            slotOrder: filledSpells.length + i,
          },
          fields: {
            spellDetails: { hidden: true },
            innateBox: { hidden: true },
            spellSlot: { hidden: false },
            used: { hidden: isCantrip },
            deleteBtn: { hidden: true },
          },
        });
      }

      // Combine filled spells with new empty slots
      valuesToSet[`${spellcastingEntryDataPath}.data.${fieldName}`] = [
        ...filledSpells,
        ...newSlots,
      ];
    } else {
      // For spontaneous spellcasting: just update field visibility on existing spells
      const updatedSpells = currentSpells.map((spell) => {
        if (spell.data?.type === "spell") {
          if (!spell.fields) spell.fields = {};
          if (!spell.data) spell.data = {};

          spell.data.used = false;
          spell.fields.innateBox = { hidden: true };
          spell.fields.used = { hidden: true };
          spell.fields.deleteBtn = { hidden: false };
          spell.fields.nameBox = { hidden: false };
          spell.fields.nameUsedBox = { hidden: true };
        } else {
          if (!spell.fields) spell.fields = {};
          spell.fields.deleteBtn = { hidden: false };
        }
        return spell;
      });

      if (currentSpells.length > 0) {
        valuesToSet[`${spellcastingEntryDataPath}.data.${fieldName}`] =
          updatedSpells;
      }
    }
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
    name: isCantrip ? "New Cantrip" : `New Level ${rank} Spell`,
    recordType: "spells",
    unidentifiedName: isCantrip ? "New Cantrip" : `New Level ${rank} Spell`,
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

  api.removeValue(spellListDataPath, indexValue);
}

function addSpellcastingEntry(record) {
  // Add a new spellcasting entry to the list
  api.getRecord(record.recordType, record._id, (updatedRecord) => {
    const attribute = updatedRecord.data?.addAttribute || "int";
    const type = updatedRecord.data?.addType || "prepared";

    const name = `${capitalize(type)} Spells`;

    let dc = 0;
    let casterLevel = 0;
    let concentrationMod = 0;

    if (record.recordType === "characters") {
      const attributeScore = updatedRecord.data?.[`${attribute}`] || 0;
      casterLevel = parseInt(updatedRecord.data?.level || "1", 10);
      dc = 10 + attributeScore;
      concentrationMod = casterLevel + attributeScore;
    }

    const isSpontaneous = type === "spontaneous";
    const isPrepared = !isSpontaneous;
    const index = (updatedRecord.data?.spells || []).length || 0;

    api.addValue(
      "data.spells",
      {
        name: name,
        unidentifiedName: "Spellcasting Entry",
        identified: true,
        data: {
          type: type,
          attribute: attribute,
          dc: dc,
          casterLevelDisplay: casterLevel,
          concentrationMod: concentrationMod,
          shownSpells: ["cantrips", "spells1"],
        },
        fields: {
          preparedBox: { hidden: !isPrepared },
          cantripsBox: { hidden: false },
          spells1Box: { hidden: false },
          moveUpBtn: { hidden: index === 0 },
          spontaneousBox: { hidden: !isSpontaneous },
          addBtn: { hidden: !isSpontaneous },
          numCantrips: { hidden: isSpontaneous },
          numCantripSpontaneousLabel: { hidden: !isSpontaneous },
        },
      },
      () => {
        api.setValues({
          "data.addAttribute": "",
          "data.addType": "",
        });
      }
    );
  });
}

// PF1e: Get the spell level from the spell list path
function getSpellLevel(spell, dataPathToSpell) {
  const pathParts = dataPathToSpell.split(".");

  let spellListType = "";
  for (let i = pathParts.length - 1; i >= 0; i--) {
    if (pathParts[i] === "cantrips" || pathParts[i].startsWith("spells")) {
      spellListType = pathParts[i];
      break;
    }
  }

  if (spellListType === "cantrips") {
    return 0;
  } else if (spellListType && spellListType.startsWith("spells")) {
    const levelMatch = spellListType.match(/spells(\d+)/);
    if (levelMatch) {
      return parseInt(levelMatch[1], 10);
    }
  }

  return spell?.data?.level || 0;
}

// PF1e: Get caster level from the spellcasting entry
function getCasterLevel(record, dataPathToSpell) {
  const spellCastingEntryDataPath = getNearestParentDataPath(dataPathToSpell);
  const spellCastingEntry = api.getValueOnRecord(record, spellCastingEntryDataPath);
  const casterLevelOverride = parseInt(spellCastingEntry?.data?.casterLevel || "0", 10);
  const characterLevel = parseInt(record.data?.level || "1", 10);
  return casterLevelOverride > 0 ? casterLevelOverride : characterLevel;
}

function calculateSpellDamage(record, spell, dataPathToSpell) {
  const spellLevel = getSpellLevel(spell, dataPathToSpell);

  // Get the spellcasting entry to determine attribute modifier
  const spellListPath = getNearestParentDataPath(dataPathToSpell);
  const spellcastingEntryPath = getNearestParentDataPath(spellListPath);
  const spellcastingEntry = api.getValue(spellcastingEntryPath);

  let attributeMod = 0;
  if (spellcastingEntry) {
    const attribute = spellcastingEntry?.data?.attribute || "int";
    attributeMod = record.data?.[attribute] || 0;
  }

  const baseDamage = spell?.data?.damage || [];

  let damageString = "";
  let healingString = "";
  let persistentDamage = "";
  const damageComponents = [];
  const healingComponents = [];
  const persistentComponents = [];

  let hasDamage = false;
  let hasHealing = false;

  baseDamage.forEach((dmgEntry) => {
    const formula = dmgEntry?.data?.formula || "";
    const type = dmgEntry?.data?.type || "untyped";
    const category = dmgEntry?.data?.category || "";
    const kinds = dmgEntry?.data?.kinds || [];
    const applyMod = dmgEntry?.data?.applyMod || false;

    const isDamage = kinds.length === 0 || kinds.includes("damage");
    const isHealing = kinds.includes("healing");

    if (isDamage) hasDamage = true;
    if (isHealing) hasHealing = true;

    if (category === "persistent") {
      if (formula && isDamage) {
        persistentComponents.push(`${formula} ${type}`);
      }
    } else {
      if (formula) {
        const typeString = isHealing && type === "untyped" ? "heal" : type;
        const effectFormula =
          applyMod && attributeMod > 0
            ? `${formula} + ${attributeMod} ${typeString}`.trim()
            : `${formula} ${typeString}`.trim();

        if (isDamage && !isHealing) {
          damageComponents.push(effectFormula);
        } else if (isHealing && !isDamage) {
          healingComponents.push(effectFormula);
        } else if (isDamage && isHealing) {
          damageComponents.push(effectFormula);
          healingComponents.push(effectFormula);
        }
      }
    }
  });

  damageString = damageComponents.join(" + ");
  healingString = healingComponents.join(" + ");
  persistentDamage = persistentComponents.join(" + ");

  return {
    damageString,
    healingString,
    persistentDamage,
    hasDamage,
    hasHealing,
    spellLevel,
  };
}

function getSpellDamageMacro(record, spell, dataPathToSpell) {
  const spellName = spell?.name || "Unknown Spell";
  const spellDamage = calculateSpellDamage(record, spell, dataPathToSpell);

  if (!spellDamage.hasDamage) {
    return null;
  }

  // Persistent-only damage: return a macro that applies it directly
  if (
    (!spellDamage.damageString || spellDamage.damageString.trim() === "") &&
    spellDamage.persistentDamage &&
    spellDamage.persistentDamage.trim() !== ""
  ) {
    const persistentMacroName = spellDamage.persistentDamage
      .split(" ")
      .map((word) => capitalize(word))
      .join("_");
    const token = api.getToken();
    const tokenId = token?._id;
    const tokenName =
      token?.identified === false
        ? token?.record?.unidentifiedName
        : token?.record?.name;
    return `\`\`\`${persistentMacroName}_Persistent_Damage
applyPersistentDamage("${spellDamage.persistentDamage}", "${tokenId}", "${tokenName}");
\`\`\``;
  }

  const firstDamage = spell?.data?.damage?.[0];
  const primaryDamageType = firstDamage?.data?.type || "";
  const damageTypeName = primaryDamageType
    ? capitalize(primaryDamageType)
    : "Damage";
  const macroName = `Roll_${damageTypeName}_Damage`;

  const damageModifierTypes = ["spellDamageBonus", "spellDamagePenalty"];

  return `\`\`\`${macroName}
api.getRecord('${record.recordType}', '${record._id}', (record) => {
  const spell = api.getValueOnRecord(record, '${dataPathToSpell}');

  const damageModifiers = getEffectsAndModifiersForToken(
    record,
    ${JSON.stringify(damageModifierTypes)},
    "",
    undefined,
    undefined,
    { spell }
  );

  api.promptRoll(
    "${spellName}",
    "${spellDamage.damageString}",
    damageModifiers,
    {
      persistentDamage: "${spellDamage.persistentDamage}",
      damageType: "${primaryDamageType}",
      isSpell: true,
      rollName: "${spellName} Damage",
    },
    "damage"
  );
});
\`\`\``;
}

function getSpellHealingMacro(record, spell, dataPathToSpell) {
  const spellName = spell?.name || "Unknown Spell";
  const spellEffect = calculateSpellDamage(record, spell, dataPathToSpell);

  if (!spellEffect.hasHealing) {
    return null; // No healing to roll
  }

  // Get healing modifiers based on spell type
  const healingModifierTypes = ["healingBonus", "healingPenalty"];

  return `\`\`\`Roll_Healing
// Lookup the record and then prompt the roll
api.getRecord('${record.recordType}', '${record._id}', (record) => {
  // Get the spell for context
  const spell = api.getValueOnRecord(record, '${dataPathToSpell}');

  // Get healing modifiers based on spell type
  const healingModifierTypes = ${JSON.stringify(healingModifierTypes)};
  const healingModifiers = getEffectsAndModifiersForToken(
    record,
    healingModifierTypes,
    "",
    undefined,
    undefined,
    { spell }
  );

  const healing = "${spellEffect.healingString}";

  api.promptRoll(
    "${spellName}",
    healing,
    healingModifiers,
    {
      isSpell: true,
      rollName: "${spellName} Healing"
    },
    "healing"
  );
});
\`\`\``;
}

function getSpellSaveMacro(record, spell, spellCastingEntry, dataPathToSpell) {
  const saveType = spell?.data?.save || "";
  const saveDescriptor = spell?.data?.saveDescriptor || "";
  if (!saveType) return null;

  // PF1e DC = 10 + spell level + ability modifier
  const spellLevel = getSpellLevel(spell, dataPathToSpell);
  const attribute = spellCastingEntry?.data?.attribute || "int";
  const attributeMod = record.data?.[attribute] || 0;
  let saveDC = 10 + spellLevel + attributeMod;

  const spellDCMods = getEffectsAndModifiersForToken(
    record,
    ["spellDCBonus", "spellDCPenalty"],
    saveType
  );
  spellDCMods.forEach((mod) => {
    saveDC += mod.value;
  });

  const descriptorLabel = saveDescriptor ? ` (${saveDescriptor})` : "";
  return getSaveMacro(saveType, saveDC, true, true);
}

function getSpellAttackMacro(
  record,
  spell,
  spellCastingEntry,
  dataPathToSpell,
  animation
) {
  const attackType = spell?.data?.attackType || "";
  if (!attackType) {
    return "";
  }

  const spellName = spell?.name || "Spell";
  const casterLevel = getCasterLevel(record, dataPathToSpell);
  const attribute = spellCastingEntry?.data?.attribute || "int";
  const attributeMod = record.data?.[attribute] || 0;
  const bab = record.data?.bab || 0;

  // PF1e: touch attack bonus = BAB + relevant mod (Dex for ranged, Str for melee) + size
  const isMelee = attackType === "melee-touch";
  const attackAbility = isMelee ? (record.data?.str || 0) : (record.data?.dex || 0);
  const sizeMod = record.data?.sizeMod || 0;
  const spellAttackMod = bab + attackAbility + sizeMod;

  const spellDamage = calculateSpellDamage(record, spell, dataPathToSpell);
  const firstDamage = spell?.data?.damage?.[0];
  const primaryDamageType = firstDamage?.data?.type || "untyped";

  const dcDescription = isMelee ? "Touch AC" : "Touch AC";

  return `\`\`\`Roll_Attack
api.getRecord('${record.recordType}', '${record._id}', (record) => {
  const spell = api.getValueOnRecord(record, '${dataPathToSpell}');

  const targets = api.getTargets();
  const ourToken = api.getToken();
  const tokenName = ourToken?.identified === false ? ourToken?.record?.unidentifiedName : ourToken?.record?.name;

  const spellAttackMods = getEffectsAndModifiersForToken(
    record,
    ["spellAttackBonus", "spellAttackPenalty"],
    "",
    undefined,
    undefined,
    { spell }
  );

  const damageModifiers = getEffectsAndModifiersForToken(
    record,
    ["spellDamageBonus", "spellDamagePenalty"],
    "",
    undefined,
    undefined,
    { spell }
  );

  const modifiers = [
    {
      name: "${isMelee ? "Melee Touch Attack" : "Ranged Touch Attack"}",
      type: "",
      value: ${spellAttackMod},
      active: true
    },
    ...spellAttackMods
  ];

  if (targets.length === 0) {
    api.promptRoll(
      "Spell Attack: ${spellName}",
      "1d20",
      modifiers,
      {
        attack: "${spellName}",
        rollName: "${isMelee ? "Melee Touch Attack" : "Ranged Touch Attack"}",
        tooltip: "Spell Attack vs ${dcDescription}",
        isSpell: true,
        isMelee: ${isMelee},
        isRanged: ${!isMelee},
        damage: "${spellDamage.damageString}",
        damageType: "${primaryDamageType}",
        persistentDamage: "${spellDamage.persistentDamage}",
        tokenId: ourToken?._id,
        tokenName: tokenName,
        damageModifiers: damageModifiers,
        animation: ${JSON.stringify(animation)},
      },
      "attack"
    );
  } else {
    for (const target of targets) {
      const targetToken = target.token;
      const targetRecord = targetToken?.record;
      const targetDistance = target?.distance || 0;

      // PF1e: touch attacks target touch AC
      const targetDC = targetToken?.data?.touchAC || 10;

      const targetEffects = getAttackModifiersForTarget(targetToken, targetDistance);
      const targetModifiers = [...modifiers, ...targetEffects];

      const targetName = targetToken?.identified === false ? targetRecord?.unidentifiedName : targetRecord?.name;

      api.promptRoll(
        \`Spell Attack: ${spellName} vs \${targetName}\`,
        "1d20",
        targetModifiers,
        {
          attack: "${spellName}",
          rollName: "${isMelee ? "Melee Touch Attack" : "Ranged Touch Attack"}",
          tooltip: \`Spell Attack vs \${targetName}'s ${dcDescription}\`,
          isSpell: true,
          isMelee: ${isMelee},
          isRanged: ${!isMelee},
          dc: targetDC,
          dcName: "${dcDescription}",
          targetName: targetName,
          tokenId: ourToken?._id,
          tokenName: tokenName,
          targetId: targetToken?._id,
          damage: "${spellDamage.damageString}",
          damageType: "${primaryDamageType}",
          persistentDamage: "${spellDamage.persistentDamage}",
          damageModifiers: damageModifiers,
          animation: ${JSON.stringify(animation)},
        },
        "attack"
      );
    }
  }
});
\`\`\``;
}

function castSpell(record, spell, dataPathToSpell) {
  const spellLevel = getSpellLevel(spell, dataPathToSpell);
  const isCantrip = spellLevel === 0;
  const spellName = spell?.name || "Unknown Spell";
  const castingTime = spell?.data?.time || "standard action";

  const valuesToSet = {};
  const tags = [];

  // Add spell info tags
  const range = spell?.data?.range || "";
  const duration = spell?.data?.duration || "";
  const durationString =
    typeof duration === "string"
      ? duration
      : duration && duration.value
      ? duration.value
      : "";
  const targetString = spell?.data?.target || "";
  const area = spell?.data?.area || null;
  const areaString =
    area && area.type && area.value
      ? `${capitalize(area.type)} ${area.value} ft`
      : "";
  const school = spell?.data?.school || "";
  const components = spell?.data?.components || [];
  const spellResistance = spell?.data?.spellResistance || "";

  if (castingTime) {
    tags.push({
      name: capitalize(castingTime),
      tooltip: `Casting Time: ${castingTime}`,
    });
  }
  if (components.length > 0) {
    tags.push({
      name: components.join(", "),
      tooltip: `Components: ${components.join(", ")}`,
    });
  }
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
  if (spellResistance) {
    tags.push({
      name: `SR: ${spellResistance}`,
      tooltip: `Spell Resistance: ${spellResistance}`,
    });
  }
  if (school) {
    tags.push({
      name: capitalize(school),
      tooltip: `School: ${capitalize(school)}`,
    });
  }

  // Get all traits as tags
  const traits = spell?.data?.traits || [];
  traits.forEach((trait) => {
    if (getIsTraitRarity(trait)) return;
    tags.push({
      name: trait,
      tooltip: getTraitToolTip(trait),
    });
  });

  // Navigate to spellcasting entry
  let dataPathToSpellCastingEntry = getNearestParentDataPath(dataPathToSpell);
  const spellCastingEntry = api.getValueOnRecord(
    record,
    dataPathToSpellCastingEntry
  );
  const type = spellCastingEntry.data?.type;
  const isSpontaneous = type === "spontaneous";

  // Mark spell as used (prepared spells only, not cantrips)
  if (!isSpontaneous && !isCantrip) {
    valuesToSet[`${dataPathToSpell}.data.used`] = true;
    valuesToSet[`${dataPathToSpell}.fields.nameUsedBox.hidden`] = false;
    valuesToSet[`${dataPathToSpell}.fields.nameBox.hidden`] = true;
  }

  // Spontaneous casters deduct a slot
  if (isSpontaneous && !isCantrip) {
    const usedSpells =
      spellCastingEntry.data?.[`usedSpells${spellLevel}`] || 0;
    if (usedSpells <= 0) {
      api.showNotification(
        `You are out of spell slots for Level ${spellLevel}`,
        "red",
        "Out of Spell Slots"
      );
      return;
    }
    const newUsedSpells = Math.max(usedSpells - 1, 0);
    valuesToSet[
      `${dataPathToSpellCastingEntry}.data.usedSpells${spellLevel}`
    ] = newUsedSpells;
  }

  const spellDescription = updateDamageMacros(
    api.richTextToMarkdown(spell?.data?.description || ""),
    { item: spell, level: spellLevel }
  );

  let portrait = spell?.portrait
    ? `![${spellName}](${assetUrl}${encodeURI(
        spell?.portrait
      )}?width=40&height=40) `
    : "";

  // Play animation if needed
  const ourToken = api.getToken();
  const targets = api.getTargets();
  const tokenId = ourToken?._id;
  const targetId = targets.length > 0 ? targets[0]?.token?._id : null;
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
        spell?.data?.range !== "Personal" &&
        spell?.data?.range !== "Touch",
      isSpell: true,
    });

  let hasAttackMacro = false;
  const macros = [];

  // Attack macro for touch attack spells
  const attackType = spell?.data?.attackType || "";
  if (attackType) {
    const macro = getSpellAttackMacro(
      record,
      spell,
      spellCastingEntry,
      dataPathToSpell,
      animation
    );
    if (macro) {
      macros.push(macro);
      hasAttackMacro = true;
    }
  }

  // Save macro
  const saveType = spell?.data?.save || "";
  if (saveType) {
    const saveMacro = getSpellSaveMacro(
      record,
      spell,
      spellCastingEntry,
      dataPathToSpell
    );
    if (saveMacro) {
      macros.push(saveMacro);
    }

    // Add damage macro for saving throw spells
    const damageMacro = getSpellDamageMacro(record, spell, dataPathToSpell);
    if (damageMacro) {
      macros.push(damageMacro);
    }
  }

  // Add damage/healing macros for spells with no attack or save
  if (!attackType && !saveType) {
    const damageMacro = getSpellDamageMacro(record, spell, dataPathToSpell);
    if (damageMacro) {
      macros.push(damageMacro);
    }
  }

  // Healing macro
  const healingMacro = getSpellHealingMacro(record, spell, dataPathToSpell);
  if (healingMacro) {
    macros.push(healingMacro);
  }

  const levelLabel = isCantrip ? "Cantrip" : `Level ${spellLevel}`;

  const message = `
  #### ${portrait}${spellName} *(${levelLabel})*

  ---
  ${spellDescription}
  ${macros && macros.length > 0 ? `${macros.join("\n")}\n` : ""}
  `;

  api.sendMessage(message, undefined, [], tags);
  api.setValuesOnRecord(record, valuesToSet);

  if (animation && tokenId && !hasAttackMacro) {
    api.playAnimation(animation, tokenId, targetId);
  }
}
