# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Pathfinder 2nd Edition ruleset implementation for Realm VTT. The codebase consists of HTML files with embedded JavaScript that interact with the Realm VTT API.

**Important**: This ruleset uses the Realm VTT API (https://www.realmvtt.com/wiki/ruleset-editor-and-api). HTML and JavaScript must be written to conform to this API. Field values cannot be directly embedded into HTML - all data access must go through the API.

## Architecture

### File Structure

The ruleset is organized by game entity types and UI components:

- **Character sheets**: `characters-*.html` - Main character sheet and its tabs (skills, features, notes)
- **Entity definitions**: `ancestry-*.html`, `class-*.html`, `heritage-*.html`, `backgrounds-*.html`, `feats-*.html`, `features-*.html`, `items-*.html`
- **List components**: `*-list.html` files - Reusable list components for various data types
- **Rules**: `*-rules.html` files - Rule-specific UI and logic
- **Shared logic**: `rollhandlers/common.js` - Core game mechanics and utility functions

### Key API Patterns

The Realm VTT API provides these core functions used throughout:

- `api.getValue(path)` - Get value at data path
- `api.setValues(object, callback)` - Set multiple values with optional callback
- `api.setHidden(field, boolean, callback)` - Show/hide UI elements
- `api.showPrompt()` - Display selection dialogs
- `api.showNotification()` - Display user notifications

### Data Path System

- `dataPath` - Current field's data path context
- `getNearestParentDataPath(dataPath)` - Navigate to parent object in data hierarchy
- `record` - The current record being edited
- Field paths use dot notation: `data.ancestries`, `fields.levelLabel.hidden`

### Common Functions

Located primarily in `rollhandlers/common.js`:

- `generateUuid()` - Create unique identifiers for list items
- `onAddEditFeature(record, callback)` - Recalculate character features and abilities
- `calculateAbilityBoosts(record)` - Handle ability score calculations
- `updateProficiencies(record, valuesToSet)` - Update skill/save proficiencies
- `calculateProficiencyBonus(record, training)` - Calculate proficiency bonuses

### Event Handlers

- `onDrop(type, recordLink)` - Handle drag-and-drop of game entities
- `showHideFields()` - Dynamic UI visibility based on data state
- Various `onDrop*` functions for specific entity types (ancestry, class, heritage, etc.)

### UI Conventions

- Lists use `_id` field with `generateUuid()` for unique identifiers
- Trait objects structure: `{ _id, name, identified, data }`
- Hidden field control via `fields.[fieldname].hidden` properties
- Conditional visibility based on data values

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
2. Proficiency calculations, ability scores, and modifiers are centralized
3. Use `onAddEditFeature()` to trigger recalculations after data changes

### Data Structure

- Character data is nested under `record.data`
- UI state is under `record.fields`
- Lists (traits, features, etc.) typically have both array and object representations
- Always check for existing data before initializing defaults

## Common Tasks

### Adding a new character option (ancestry, class, feat, etc.)

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
