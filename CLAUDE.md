# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **Pathfinder 1st Edition** ruleset implementation for Realm VTT. The codebase consists of HTML files with embedded JavaScript that interact with the Realm VTT API.

**Important**: This ruleset uses the Realm VTT API (https://www.realmvtt.com/wiki/ruleset-editor-and-api). HTML and JavaScript must be written to conform to this API. Field values cannot be directly embedded into HTML - all data access must go through the API.

## PF1e Game System Reference

### Core Mechanics
- **Ability Scores**: Str, Dex, Con, Int, Wis, Cha — each has a score and a modifier = floor((score - 10) / 2)
- **BAB (Base Attack Bonus)**: Class-based, determines attack rolls and iterative attacks
- **CMB/CMD**: Combat Maneuver Bonus/Defense — BAB + Str + size mod / 10 + BAB + Str + Dex + size mod
- **Saves**: Fortitude (Con), Reflex (Dex), Will (Wis) — base save from class + ability mod
- **Skills**: Ranks (1/level, max = character level) + ability mod + class skill bonus (+3) + misc
- **AC**: 10 + armor + shield + Dex + size + natural + deflection + misc
- **Touch AC**: 10 + Dex + size + deflection (no armor/shield/natural)
- **Flat-Footed AC**: AC without Dex bonus

### Spellcasting (PF1e Vancian System)
- **Spell Levels**: 0-9 (no 10th level spells)
- **Prepared Casters** (Wizard, Cleric, Druid): Fill specific spell slots, each slot used once
- **Spontaneous Casters** (Sorcerer, Bard, Oracle): Spells known + slots per day per level
- **Spell DC**: 10 + spell level + casting ability modifier
- **Concentration**: Caster level + casting ability modifier
- **Spell Properties**: School/subschool, components (V/S/M/F/DF), spell resistance, casting time, saving throw with descriptor (half/negates/partial/see text)
- **Attack Spells**: Melee touch attack or ranged touch attack vs Touch AC

### Combat
- **Initiative**: 1d20 + Dex modifier + misc bonuses
- **Iterative Attacks**: Full attack at BAB/BAB-5/BAB-10/BAB-15
- **Action Economy**: Standard, Move, Full-Round, Swift, Free, Immediate actions (NOT PF2e 3-action system)
- **Death**: Die at negative HP equal to Constitution score. Stabilization = DC 10 Con check each round.

### Character Building
- **Races**: Use racial traits (not PF2e ancestry/heritage system)
- **Feats**: General, Combat, Metamagic, Item Creation, Critical, Teamwork, etc. at odd levels + class bonus feats
- **Features**: Class Feature, Racial Trait, Extraordinary (Ex), Supernatural (Su), Spell-Like (Sp)
- **Campaign Traits**: Replace PF2e backgrounds. Types: Campaign, Combat, Faith, Magic, Social, Regional, etc.

## Architecture

### File Structure

The ruleset is organized by game entity types and UI components:

- **Character sheets**: `characters-*.html` - Main character sheet and its tabs (skills, features, notes)
- **Entity definitions**: `ancestry-*.html` (races), `class-*.html`, `backgrounds-*.html` (campaign traits), `feats-*.html`, `features-*.html`, `items-*.html`
- **List components**: `*-list.html` files - Reusable list components for various data types
- **Rules**: `*-rules.html` files - Rule-specific UI and logic
- **NPC sheets**: `npcs-main.html`, `npc-*.html` - NPC/monster stat blocks
- **Roll handlers**: `rollhandlers/*.js` - Process dice rolls and game mechanics
  - `common.js` - Core game mechanics and utility functions
  - `spells.js` - Spell casting, damage calculation, touch attacks
  - `attack.js` / `damage.js` - Weapon attack and damage rolls
  - `recovery.js` - Stabilization checks (DC 10 Con check)
  - `flatCheck.js` - Miss chance rolls (concealment/blur/displacement)
  - `onTurnStart.js` / `onTurnEnd.js` - Turn-based effects

### Key API Patterns

The Realm VTT API provides these core functions used throughout:

#### Data Management

- `api.getValue(path)` - Get value at data path
- `api.setValues(object, callback)` - Set multiple values with optional callback
- `api.setHidden(field, boolean, callback)` - Show/hide UI elements
- `api.showPrompt()` - Display selection dialogs
- `api.showNotification()` - Display user notifications

#### Dice Rolling

**Important**: Always use `api.promptRoll()` for standard rolls to give players control over modifiers. Only use `api.roll()` for quick one-off rolls that don't need modifier prompts.

- `api.promptRoll(name, roll, modifiers, metadata, rollType)` - **Primary rolling method** - Opens modifier prompt for players

  ```javascript
  api.promptRoll(
    "Fire Sword",
    "1d6 piercing + 1 piercing",
    [
      {
        name: "Fire Enchantment",
        type: "fire",
        value: "1d4 fire",
        active: true,
      },
    ],
    { isAttack: true },
    "damage"
  );
  ```

- `api.roll(roll, metadata, rollType)` - Direct roll without prompting (use sparingly)

  ```javascript
  api.roll("2d20dl1 + 5", { rollName: "Attack Roll" }, "attack");
  ```

- `api.rollInstant(roll)` - Immediate roll returning result without animation

  ```javascript
  const result = api.rollInstant("1d20");
  console.log(`Rolled a ${result.total}`);
  ```

- `api.promptRollForToken(token, name, roll, modifiers, metadata, rollType)` - Roll prompt for specific token (mainly for combat tracking)
  ```javascript
  api.promptRollForToken(
    token,
    "Dexterity Save",
    "1d20",
    [{ name: "Dex Mod", type: "", value: tokenDexMod }],
    { saveDC: 15 },
    "save"
  );
  ```

**Roll Type Parameter**: Defaults to "chat" but should match Roll Types defined in Settings (e.g., "attack", "damage", "save", "skill", "initiative", "recovery", etc.)

**Metadata Note**: Keep metadata lightweight - pass IDs instead of entire records to avoid performance issues.

#### Token Management

- `api.getToken()` - Returns current contextual token (priority: data context → selected → player's token → record token)
- `api.getSelectedTokens()` - Returns all selected tokens
- `api.getSelectedOwnedTokens()` - Returns selected tokens owned by player (or default token if none)
- `api.getSelectedOrDroppedToken()` - Returns dropped token, selected tokens, player's character, or empty array (in priority order)
- `api.getTargets()` - Gets targeted tokens with distances
- `api.getOtherTokens()` - All tokens except the contextual one
- `api.getDistance(token1, token2)` - Calculate distance between tokens
- `api.isOwner(token)` - Check if current user owns token (GM always returns true)

### Data Path System

- `dataPath` - Current field's data path context
- `getNearestParentDataPath(dataPath)` - Navigate to parent object in data hierarchy
- `record` - The current record being edited
- Field paths use dot notation: `data.ancestries`, `fields.levelLabel.hidden`

### Common Functions

Located primarily in `rollhandlers/common.js`:

- `generateUuid()` - Create unique identifiers for list items
- `onAddEditFeature(record, callback)` - Recalculate character features and abilities
- `calculateAbilityScores(record)` - Handle ability score calculations
- `updateSkills(record, valuesToSet)` - Update skill totals (ranks + ability mod + class skill + misc)
- `updateSaves(record, valuesToSet)` - Update save totals (base + ability mod + misc)
- `rollSave(record, type)` - Roll a saving throw with proper modifiers
- `performInitiativeRoll(record)` - Roll Dex-based initiative with modifiers
- `updateSpellcastingEntries(record, valuesToSet)` - Calculate spell DCs, caster level, concentration

#### Modifier System - Critical for All Rolls

**Always check for relevant modifiers before making any roll** using `getEffectsAndModifiersForToken`:

```javascript
getEffectsAndModifiersForToken(record, modifierTypes, field, itemId, appliedById)
```

**Parameters**:
- `record` - The character/token record
- `modifierTypes` - Array of modifier types (e.g., `['saveBonus', 'savePenalty']`)
- `field` - **Third parameter (often required)** - The relevant field/context (e.g., 'fortitude', 'dex', 'perception')
- `itemId` - Fourth parameter - Only for attack rolls with specific items
- `appliedById` - Fifth parameter - Only when checking for effects from specific tokens

**Common Modifier Types**:
- Saves: `['saveBonus', 'savePenalty']`, `['allBonus', 'allPenalty']`
- Attacks: `['attackBonus', 'attackPenalty']`, `['spellAttackBonus', 'spellAttackPenalty']`
- Damage: `['damageBonus', 'damagePenalty']`, `['spellDamageBonus', 'spellDamagePenalty']`
- Skills: `['skillBonus', 'skillPenalty']`
- Initiative: `['initiativeBonus', 'initiativePenalty']`
- Spell DC: `['spellDCBonus', 'spellDCPenalty']`

**Implementation Pattern**:
1. Always make TWO modifier checks:
   - Specific modifiers for the roll type
   - General modifiers using `['allBonus', 'allPenalty']` with the relevant attribute

2. Example for saving throws:
```javascript
// Get save-specific modifiers (e.g., fortitude bonus)
const saveMods = getEffectsAndModifiersForToken(
  record,
  ['saveBonus', 'savePenalty'],
  saveType // 'fortitude', 'reflex', or 'will'
);

// Get attribute-based all modifiers
const allMods = getEffectsAndModifiersForToken(
  record,
  ['allBonus', 'allPenalty'],
  attribute // 'con' for fort, 'dex' for reflex, 'wis' for will
);
```

### Spellcasting Functions (rollhandlers/spells.js)

Key functions for the PF1e spell system:

- `getSpellLevel(spell, dataPathToSpell)` - Get spell level (0-9) from spell data or slot path
- `getCasterLevel(record, dataPathToSpell)` - Get caster level (character level or override)
- `calculateSpellDamage(record, spell, dataPathToSpell)` - Calculate base damage with attribute modifier
- `getSpellDamageMacro(record, spell, dataPathToSpell)` - Generate damage roll macro
- `getSpellAttackMacro(record, spell, spellCastingEntry, dataPathToSpell, animation)` - Generate touch attack macro (melee/ranged touch vs Touch AC)
- `getSpellSaveMacro(record, spell, spellCastingEntry, dataPathToSpell)` - Generate save macro (DC = 10 + spell level + ability mod)
- `castSpell(record, spell, dataPathToSpell)` - Cast a spell: mark as used, deduct slots, send chat message with macros

### Event Handlers

- `onDrop(type, recordLink)` - Handle drag-and-drop of game entities
- `showHideFields()` - Dynamic UI visibility based on data state
- Various `onDrop*` functions for specific entity types (race, class, etc.)

### UI Conventions

- Lists use `_id` field with `generateUuid()` for unique identifiers
- Trait objects structure: `{ _id, name, identified, data }`
- Hidden field control via `fields.[fieldname].hidden` properties
- Conditional visibility based on data values
- PF1e action types in dropdowns: Standard, Move, Full-Round, Swift, Free, Immediate, Passive

## Development Guidelines

### Working with HTML Files

1. All JavaScript must be within `<script>` tags in the HTML files
2. Functions can reference the global `record`, `dataPath`, and `api` objects
3. Use `api.setValues()` for all data modifications - never modify data directly
4. Always provide callbacks when chaining operations that depend on data updates

### Adding New Features

1. Check existing patterns in similar files (e.g., other `-main.html` or `-list.html` files)
2. Use `generateUuid()` when adding items to lists
3. Implement `showHideFields()` for dynamic UI elements
4. Handle drag-and-drop via `onDrop()` functions

### Modifying Game Mechanics

1. Core mechanics are in `rollhandlers/common.js`
2. Ability scores, skills, saves, and BAB calculations are centralized
3. Use `onAddEditFeature()` to trigger recalculations after data changes

### Data Structure

- Character data is nested under `record.data`
- UI state is under `record.fields`
- Lists (traits, features, etc.) typically have both array and object representations
- Always check for existing data before initializing defaults

## Common Tasks

### Adding a new character option (race, class, feat, etc.)

1. Create the appropriate `-main.html` file following existing patterns
2. Implement `showHideFields()` for conditional UI
3. Add drag-and-drop support if needed
4. Update character sheet handlers to accept the new type

### Modifying character calculations

1. Locate the calculation in `rollhandlers/common.js`
2. Update the relevant `calculate*` or `update*` function
3. Ensure `onAddEditFeature()` triggers the recalculation

### Adding UI components

1. Create as a `-list.html` file if reusable
2. Follow the pattern of checking `getNearestParentDataPath()` for context
3. Use `api.setValues()` for all data updates
4. Implement proper `onchange` handlers

## PF1e-Specific Notes

### Things That Do NOT Exist in PF1e (removed from PF2e)
- Heightening spells / spell heightening
- Spell overlays / alternate casting methods
- 3-action economy (1/2/3 actions, reaction icons)
- Multiple Attack Penalty (MAP) — PF1e uses iterative attacks instead
- Proficiency training levels (Untrained/Trained/Expert/Master/Legendary)
- Dying/Wounded counters — PF1e uses negative HP
- Shield raising as an action — shields are always active when equipped
- Focus pools / Focus spells
- Spell traditions (Arcane/Divine/Occult/Primal) — PF1e uses class-based casting
- 10th level spells
- Splash/Precision damage categories
- Vitality/Void damage types
