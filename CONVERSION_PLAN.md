# PF2e → PF1e Conversion Plan

## Overview

Converting the RealmVTT PF2e ruleset to standard Pathfinder 1st Edition. Spheres of Power/Might will be added later as a separate effort.

## Architecture Decision: Custom Modifier Engine

**Decision: Keep the custom modifier/effects engine, adapt for PF1e.**

The engine in `common.js` (`getEffectsAndModifiersForToken`, predicate evaluation, stacking logic) is game-system-agnostic in architecture. The platform's native effects (data/override rules) can only handle ~20% of our use cases — they lack stacking rules, predicate evaluation, and modifier-to-modifier adjustment. We adapt the types and rules rather than replacing the engine.

### Key Changes to the Engine
- **Bonus types**: PF2e has 3 (circumstance, item, status) → PF1e has ~12 (enhancement, morale, luck, sacred, profane, dodge, competence, insight, deflection, natural armor, resistance, untyped)
- **Stacking rules**: Most PF1e types follow "highest only" like PF2e, but **dodge and untyped bonuses stack** (all penalties stack)
- **Remove PF2e-only modifier types**: adjustDegreeOfSuccess, mapReduction, criticalSpecialization, armorSpecialization, cantripDamageBonus/Penalty
- **Add PF1e modifier types**: babBonus, cmbBonus, cmdBonus, concentrationBonus, spellResistanceBonus, naturalArmorBonus, deflectionBonus, etc.
- **Predicate traits**: Remove ancestry:/heritage:, add race:. Simplify trait collection for PF1e concepts.

---

## Phase 0: Foundation & Settings Reset

**Goal**: Replace PF2e constants, modifier types, and Settings tab configuration with PF1e equivalents. Everything downstream depends on this.

### common.js Changes
- [x] Replace `getPathfinderSkills()` with PF1e's ~35 skills (including subcategory skills: Knowledge (Arcana), Craft (Weapons), Perform (Sing), Profession (Herbalist), etc.)
- [x] Replace `getAllSkillOptions()` to match new skill list
- [x] Remove `calculateProficiencyBonus()` and `calculateProficiencyBonusForLevel()` — PF1e has no unified proficiency system
- [x] Add PF1e constants:
  - BAB progressions: full (=level), 3/4 (=floor(level*3/4)), 1/2 (=floor(level/2))
  - Save progressions: good (=2+floor(level/2)), poor (=floor(level/3))
  - Size modifier table (Fine through Colossal): AC/attack, CMB/CMD, fly, stealth
- [x] Update stacking rules in getEffectsAndModifiersForToken(): dodge and untyped bonuses stack, all others highest-only
- [x] Replace modifier types list (see Architecture Decision above)
- [x] Update `collectTraitsAndProperties()`: remove ancestry:/heritage: trait collection, add race: traits

### PF2e.js → PF1e.js
- [x] Replace all PF2e trait descriptions with PF1e conditions, weapon properties, and spell descriptors

### modifier-list.html
- [x] Update dropdown options for modifier types to reflect PF1e types
- [x] Update modifierType options: remove circumstance/item/status, add enhancement/morale/luck/sacred/profane/dodge/competence/insight/deflection/natural armor/resistance/untyped/size/armor/shield

### Settings Tab (configured in RealmVTT editor, not in files)
- [ ] Update roll handler type definitions for PF1e roll types
- [ ] Update effect rule types for PF1e bonus types
- [ ] Update combat tracker event handlers
- [ ] Update token health field mappings
- [ ] Update party sheet field definitions

---

## Phase 1: Ability Scores & Race

**Goal**: Characters have raw ability scores (10-18+ range) instead of boost-derived modifiers. "Ancestry" becomes "Race."

**Dependency**: Phase 0

### common.js
- [x] Replace `calculateAbilityBoosts()` with `calculateAbilityScores()`:
  - Read raw scores from `data.abilityScores.str` (etc.)
  - Compute modifier: `Math.floor((score - 10) / 2)`
  - Apply racial modifiers from race record
- [x] Update ability section in `onAddEditFeature()`: remove boost calculation block, read raw scores + racial mods

### characters-main.html
- [x] Replace boost dropdowns with 6 `<attribute>` components (using built-in modifierfield, showbutton, containervariant="fancy"):
  - Str, Dex, Con, Int, Wis, Cha
  - Raw score input + auto-calculated modifier badge + roll button
- [x] Remove all boost-related fields and UI: ancestryBoost1/2, backgroundBoost1/2, freeBoosts, freeBoostsLevel5/10/15/20, alternateAncestryBoosts
- [x] Remove Heritage drop handling and UI
- [x] Rename `onDropAncestry()` → `onDropRace()`: apply racial ability modifiers to base scores

### ancestry-main.html → Race
- [x] Rename/repurpose for Race entity
- [x] Replace fields: remove boosts/flaws/hp, add:
  - abilityModifiers (e.g., {str: 2, con: 2, int: -2} for Dwarf)
  - size, speed, languages, bonusLanguages
  - racialTraits (list of racial abilities)
  - type (Humanoid, etc.), subtypes

### Files to Remove/Stub
- [x] heritage-main.html — no PF1e equivalent (may repurpose for alternate racial traits later)
- [x] heritage-features.html — same

---

## Phase 2: Class, BAB, Saves, HP

**Goal**: Class record stores PF1e data. Character sheet derives BAB, saves, and HP correctly.

**Dependency**: Phase 1

### class-main.html / class-rules.html
- [x] Remove: keyAbility, proficiency rank dropdowns, ancestryFeatLevels, classFeatLevels, generalFeatLevels, skillFeatLevels, classDC
- [x] Add: hitDie (d6/d8/d10/d12), babProgression (full/3/4/half), fortSave (good/poor), refSave (good/poor), willSave (good/poor), skillRanksPerLevel (number), classSkills (multi-select), classFeatures list (level + name + description)

### common.js
- [x] Rewrite `updateProficiencies()` for PF1e:
  - Compute BAB from class progression + level
  - Compute base saves from progression type + level
  - Apply ability mods to saves: Fort+Con, Ref+Dex, Will+Wis
  - Compute iterative attacks: BAB/BAB-5/BAB-10/BAB-15 (when BAB >= 6/11/16)
  - Store: data.bab, data.fortitudeBase, data.reflexBase, data.willBase, data.fortitudeMod, data.reflexMod, data.willMod
- [x] Rewrite HP calculation:
  - HD per level (max at 1st, average after) + Con mod × level
  - Support favoredClassHp bonus
- [x] Compute CMB = BAB + Str mod + size mod
- [x] Compute CMD = 10 + BAB + Str mod + Dex mod + size mod
- [x] Rewrite AC calculation for PF1e: AC/Touch AC/Flat-Footed AC with armor, shield, Dex (capped), size, natural armor, deflection, dodge, misc
- [x] Compute armor check penalty from equipped armor/shield

### characters-main.html
- [x] Add BAB, CMB/CMD display fields
- [x] Add Touch AC and Flat-Footed AC display
- [x] Add AC component fields: natural armor, deflection, dodge, misc
- [x] Replace save proficiency rank dropdowns with misc save bonus numberfields
- [x] Remove: Class DC, Hero Points, dying/wounded counters, XP progress bar, shield raise/lower
- [x] Add: XP field, favoredClassHp field
- [x] Add Fine through Colossal size options
- [x] Add perception ranks field

### save.js
- [x] Remove degree-of-success (4 tiers) → PF1e saves are pass/fail (meet or beat DC)
- [x] Nat 20 always passes, nat 1 always fails

### rollSave() in common.js
- [x] Remove PF2e proficiency names display
- [x] Remove degree of success adjustments from metadata

---

## Phase 3: Skills

**Goal**: Replace 16-skill proficiency system with PF1e's ~35 skills with ranks.

**Dependency**: Phase 2 (needs class skills list, skill ranks per level)

### characters-skills.html — Full Rewrite
- [ ] ~35 skill rows, each showing:
  - Skill name, ability abbreviation
  - Class skill indicator (auto-detected from class or manual checkbox)
  - Ranks (numberfield, max = character level)
  - Ability modifier (auto)
  - Misc modifier (numberfield)
  - Armor check penalty (auto, for Str/Dex-based physical skills)
  - Total (auto-calculated)
- [ ] Total = ranks + ability mod + (3 if class skill AND ranks > 0) + misc - ACP (where applicable)
- [ ] Subcategory skill support: dynamic list for Craft (specific), Knowledge (specific), Perform (specific), Profession (specific)
- [ ] Total skill ranks available = (class ranks/level + Int mod) × level
- [ ] Display ranks used vs ranks available

### common.js
- [ ] Add skill total calculation: iterate all skills, compute totals
- [ ] Armor check penalty calculation from equipped armor/shield

### skill.js
- [ ] Remove degree-of-success — pass/fail only (total >= DC)
- [ ] Remove Treat Wounds special handling (PF2e-specific)
- [ ] Keep item crafting on success (works similarly in PF1e)

### lore-skill-list.html
- [ ] Repurpose for subcategory skills (Craft, Knowledge, Perform, Profession)

---

## Phase 4: Combat (Attacks, AC, Damage)

**Goal**: Attacks use BAB. AC uses PF1e multi-component formula. Crits use confirmation + multiplier.

**Dependency**: Phase 2 (BAB), Phase 0 (bonus types for AC components)

### common.js — AC Calculation
- [ ] Rewrite AC in `updateAttribute()`:
  - AC = 10 + armor + shield + Dex (capped by max Dex) + size + natural armor + deflection + dodge + misc
  - Touch AC = 10 + Dex + size + deflection + dodge + misc
  - Flat-Footed AC = AC - Dex bonus - dodge bonus (min 0 for each)
  - Store: data.ac, data.touchAC, data.flatFootedAC
- [ ] Attack roll preparation: BAB + Str mod (melee) or BAB + Dex mod (ranged) + size + enhancement + misc
- [ ] Iterative attacks at -5 per step

### attack.js — Major Rewrite
- [ ] Remove degree-of-success system entirely
- [ ] PF1e hit determination: total >= target AC = hit, else miss
- [ ] Nat 20 = auto-hit + critical threat
- [ ] Nat 1 = auto-miss
- [ ] Critical threat: if nat 20 OR total >= AC within crit range (e.g., 19-20)
- [ ] Crit confirmation: roll another attack vs AC. If confirms, apply crit multiplier.
- [ ] Remove: deadlyDie, fatalDie, strikingRune logic

### damage.js
- [ ] Critical damage: roll weapon dice × crit multiplier (x2/x3/x4). Bonus damage (sneak attack etc.) NOT multiplied.
- [ ] Remove: criticalOnlyDice, doubleDamageDice, persistent damage doubling, splash damage system
- [ ] Keep: resistance/weakness/immunity application (works similarly in PF1e via DR and energy resistance)

### items-main.html / items-rules.html
- [ ] Remove PF2e weapon traits (Agile, Fatal, Deadly, Forceful, etc.)
- [ ] Add PF1e weapon properties:
  - Critical range (20, 19-20, 18-20)
  - Critical multiplier (x2, x3, x4)
  - Weapon type (simple, martial, exotic)
  - Weapon category (light, one-handed, two-handed, ranged)
  - Enhancement bonus
  - Damage type (B/P/S)
  - Range increment (for ranged)

### characters-main.html
- [ ] Add Touch AC and Flat-Footed AC display fields
- [ ] Add AC component breakdown (armor, shield, Dex, size, natural, deflection, dodge, misc)
- [ ] Remove shield raise/lower toggle, shield HP/broken threshold

---

## Phase 5: Feats & Features

**Goal**: Replace PF2e feat slots with PF1e general feats at odd levels + class bonus feats.

**Dependency**: Phase 2 (class features)

### common.js
- [x] Replace `setFeatSlots()`: PF1e gets general feats at levels 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
- [ ] Support class bonus feats (fighter gets combat feats at even levels, etc.)

### feats-main.html / feats-rules.html
- [ ] Remove: PF2e traits array, action cost, PF2e prerequisites format
- [ ] Add: PF1e prerequisites (BAB requirement, ability score req, feat prerequisites), feat type (General, Combat, Metamagic, Item Creation, etc.), benefit/special text

### characters-features.html
- [ ] Remove ancestry feat / class feat / skill feat / general feat categorization
- [ ] Organize by: Class Features, Feats, Racial Traits

### backgrounds-main.html
- [ ] Remove or stub out — no direct PF1e equivalent
- [ ] Could repurpose for campaign traits later

---

## Phase 6: Spellcasting

**Goal**: Replace PF2e heightening/traditions with PF1e Vancian/spontaneous casting.

**Dependency**: Phase 4 (ranged touch attacks)

### spells-main.html
- [ ] Remove: heightening, traditions (arcane/divine/occult/primal), action cost (1/2/3 actions)
- [ ] Add: spell level (0-9), school, subschool, descriptor, casting time (standard/full-round/etc.), components (V/S/M/F/DF), spell resistance (yes/no), saving throw type
- [ ] Spell DC = 10 + spell level + casting ability modifier

### spellcasting-entry-list.html — Rewrite
- [ ] Prepared casters (Wizard, Cleric, Druid): slots per spell level, each slot filled with specific spell
- [ ] Spontaneous casters (Sorcerer, Bard, Oracle): spells known list + slots per day per level
- [ ] Add: caster level, spells per day table, bonus spells from ability score

### Files to Remove
- [ ] spell-heightening-list.html
- [ ] spell-heightening-damage-list.html
- [ ] spell-heightening-level-list.html
- [ ] spell-overlays-list.html

### common.js
- [ ] Replace spell DC calculation: DC = 10 + spell level + ability modifier (not proficiency-based)
- [ ] Remove spell attack modifier (PF1e uses ranged touch attacks via normal attack system)
- [ ] Add concentration check support: 1d20 + caster level + casting ability mod vs DC

### spells.js
- [ ] Adjust for PF1e: spell resistance checks, concentration checks
- [ ] Remove heightening logic
- [ ] Prepared caster slot tracking (fill/expend individual slots)
- [ ] Spontaneous caster slot tracking (expend from pool per level)

---

## Phase 7: Death, Conditions, Action Economy

**Goal**: Replace dying track with negative HP. Replace 3-action economy with standard/move/swift.

**Dependency**: Phase 4

### recovery.js — Full Rewrite
- [ ] PF1e death: die at negative HP equal to Con score
- [ ] At negative HP but alive: DC 10 Constitution check each round to stabilize
- [ ] Stable but unconscious: no further checks needed
- [ ] Healing to 0+ HP: conscious again

### characters-main.html
- [ ] Remove dying/wounded counters
- [ ] Allow HP to go negative (down to -Con score)
- [ ] Add stabilization check button when HP < 0

### onTurnStart.js / onTurnEnd.js
- [ ] Remove shield lowering on turn start
- [ ] Add stabilization check prompt on turn when HP < 0

### actions-main.html / actions-rules.html
- [ ] Remove PF2e action icons (oneAction, twoActions, threeActions, reaction)
- [ ] Replace with PF1e action types: Standard, Move, Full-Round, Swift, Free, Immediate

### characters-actions.html / character-action-list.html
- [ ] Redesign for PF1e action types

### flatCheck.js
- [ ] Remove — PF2e flat checks have no PF1e equivalent (or repurpose for percentile miss chance: concealment/blur/displacement)

---

## Phase 8: NPCs & Polish

**Goal**: NPCs work with PF1e stat blocks. Final cleanup and documentation.

**Dependency**: All above

### npcs-main.html — Redesign
- [ ] PF1e stat block format: CR, XP, alignment, type/subtype, Init, Senses
- [ ] AC/Touch/Flat-Footed display
- [ ] HP with HD breakdown
- [ ] Fort/Ref/Will saves
- [ ] Speed, Melee/Ranged attacks, Space/Reach
- [ ] Str/Dex/Con/Int/Wis/Cha
- [ ] BAB/CMB/CMD
- [ ] Feats, Skills, Special Qualities

### NPC Support Files
- [ ] npc-attack-list.html — PF1e attack format
- [ ] npc-skill-list.html / npc-skill-edit-list.html — PF1e skills
- [ ] npcs-spells.html / npc-spellcasting-entry-list.html — PF1e spell-like abilities and casting

### Documentation
- [ ] Update CLAUDE.md to reflect PF1e ruleset
- [ ] Document new modifier types and stacking rules
- [ ] Document PF1e-specific API patterns

---

## Files Requiring Minimal/No Changes

These are largely system-agnostic and should work with minor adjustments:

- `rollhandlers/onReroll.js` — generic reroll handling
- `rollhandlers/initiative.js` — initiative is 1d20 + modifier in both systems
- `rollhandlers/onRollInitiative.js` / `onRollInitiativeGroup.js` — minimal changes
- `rollhandlers/healing.js` / `rollhandlers/healingScript.js` — healing mechanics similar
- `rollhandlers/damageScript.js` — damage application similar in concept
- `inventory-list.html` / `inventory-backpack-list.html` / `inventory-container-list.html` — system-agnostic
- `characters-notes.html` — pure text, no mechanics
- `characters-inventory.html` — mostly system-agnostic
- `record-link-list.html` / `toggle-list.html` — generic UI components
