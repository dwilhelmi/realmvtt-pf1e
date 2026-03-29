// Create a map of trait descriptions for Pathfinder 1st Edition
const traitDescriptions = {
  // ==================== Conditions ====================
  Blinded:
    "The creature cannot see. It takes a -2 penalty to Armor Class, loses its Dexterity bonus to AC (if any), and takes a -4 penalty on most Strength- and Dexterity-based skill checks and on opposed Perception skill checks. All checks and activities that rely on vision automatically fail. All opponents are considered to have total concealment (50% miss chance) against the blinded character.",
  Confused:
    "A confused creature is mentally befuddled and cannot act normally. A confused creature cannot tell the difference between ally and foe, treating all creatures as enemies. Allies wishing to cast a beneficial spell that requires a touch on a confused creature must succeed on a melee touch attack.",
  Cowering:
    "The character is frozen in fear and can take no actions. A cowering character takes a -2 penalty to Armor Class and loses its Dexterity bonus (if any).",
  Dazed:
    "The creature is unable to act normally. A dazed creature can take no actions, but has no penalty to AC. A dazed condition typically lasts 1 round.",
  Dazzled:
    "The creature is unable to see well because of overstimulation of the eyes. A dazzled creature takes a -1 penalty on attack rolls and sight-based Perception checks.",
  Deafened:
    "A deafened character cannot hear. It takes a -4 penalty on initiative checks, automatically fails Perception checks based on sound, takes a -4 penalty on opposed Perception checks, and has a 20% chance of spell failure when casting spells with verbal components.",
  Disabled:
    "A character with 0 hit points, or one who has negative hit points but has become stable and conscious, is disabled. A disabled character may take a single move action or standard action each round (but not both, nor can it take full-round actions). Moving or performing any standard action costs 1 hit point.",
  Dying:
    "A dying creature is unconscious and near death. Creatures with negative hit points and that have not stabilized are dying. A dying creature can take no actions. On the dying creature's next turn, after being reduced to negative hit points (but not dead), it must make a DC 10 Constitution check to become stable.",
  "Energy Drained":
    "The character gains one or more negative levels, which might become permanent. For each negative level, a creature takes a cumulative -1 penalty on ability checks, attack rolls, CMB, CMD, saving throws, and skill checks. Hit points are reduced by 5 per negative level. The creature is also treated as one level lower for level-dependent variables.",
  Entangled:
    "The character is ensnared. Being entangled impedes movement but does not entirely prevent it. An entangled creature moves at half speed, cannot run or charge, and takes a -2 penalty on all attack rolls and a -4 penalty to Dexterity. An entangled character who attempts to cast a spell must make a concentration check (DC 15 + spell level) or lose the spell.",
  Exhausted:
    "An exhausted character moves at half speed, cannot run or charge, and takes a -6 penalty to Strength and Dexterity. After 1 hour of complete rest, an exhausted character becomes fatigued.",
  Fascinated:
    "A fascinated creature is entranced by a supernatural or spell effect. The creature stands or sits quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. It takes a -4 penalty on skill checks made as reactions, such as Perception checks. Any potential threat allows the creature a new saving throw. Any obvious threat automatically breaks the effect.",
  Fatigued:
    "A fatigued character can neither run nor charge and takes a -2 penalty to Strength and Dexterity. Doing anything that would normally cause fatigue causes the fatigued character to become exhausted. After 8 hours of complete rest, fatigued characters are no longer fatigued.",
  "Flat-Footed":
    "A character who has not yet acted during a combat is flat-footed, unable to react normally to the situation. A flat-footed character loses its Dexterity bonus to AC and CMD (if any) and cannot make attacks of opportunity.",
  Frightened:
    "A frightened creature flees from the source of its fear as best it can. If unable to flee, it may fight. A frightened creature takes a -2 penalty on all attack rolls, saving throws, skill checks, and ability checks. A frightened creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.",
  Grappled:
    "A grappled creature is restrained by a creature, trap, or effect. Grappled creatures cannot move and take a -4 penalty to Dexterity. A grappled creature takes a -2 penalty on all attack rolls and combat maneuver checks, except those made to grapple or escape a grapple. A grappled creature cannot take any action that requires two hands. Casting a spell while grappled requires a concentration check (DC 10 + grappler's CMB + spell level).",
  Helpless:
    "A helpless character is paralyzed, held, bound, sleeping, unconscious, or otherwise completely at an opponent's mercy. A helpless target is treated as having a Dexterity of 0 (-5 modifier). Melee attacks against a helpless target get a +4 bonus. Ranged attacks get no special bonus. Rogues can sneak attack helpless targets. An enemy can use a coup de grace action against a helpless foe.",
  Incorporeal:
    "Having no physical body. Incorporeal creatures are immune to all nonmagical attack forms. Even when hit by spells or magic weapons, they take only half damage from a corporeal source (except for channel energy). Incorporeal creatures have no natural armor bonus but gain a deflection bonus equal to their Charisma bonus (minimum +1). Force effects and ghost touch weapons affect them normally.",
  Invisible:
    "Invisible creatures are visually undetectable. An invisible creature gains a +2 bonus on attack rolls against sighted opponents, and ignores its opponents' Dexterity bonuses to AC (if any). An invisible creature gains a +20 bonus on Stealth checks if moving, or +40 if stationary.",
  Nauseated:
    "Creatures with the nauseated condition experience stomach distress. Nauseated creatures are unable to attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action such a character can take is a single move action per turn.",
  Panicked:
    "A panicked creature must drop anything it holds and flee at top speed from the source of its fear, as well as any other dangers it encounters, along a random path. It can't take any other actions. In addition, the creature takes a -2 penalty on all saving throws, skill checks, and ability checks. If cornered, a panicked creature cowers and does not attack.",
  Paralyzed:
    "A paralyzed character is frozen in place and unable to move or act. A paralyzed character has effective Dexterity and Strength scores of 0 and is helpless, but can take purely mental actions. A winged creature flying in the air at the time that it becomes paralyzed cannot flap its wings and falls.",
  Petrified:
    "A petrified character has been turned to stone and is considered unconscious. If a petrified character cracks or breaks, but the broken pieces are joined with the body as he returns to flesh, he is unharmed. If the character's petrified body is incomplete when it returns to flesh, the body is similarly incomplete and there is some amount of permanent hit point loss and/or debilitation.",
  Pinned:
    "A pinned creature is tightly bound and can take few actions. A pinned creature can take verbal and mental actions, but cannot move or take any physical actions. A pinned creature takes an additional -4 penalty to AC and an additional -4 penalty on its CMD against further grapple attempts. A pinned creature is limited to casting spells that do not have somatic components.",
  Prone:
    "The character is lying on the ground. A prone attacker has a -4 penalty on melee attack rolls and cannot use a ranged weapon (except for a crossbow). A prone defender gains a +4 bonus to Armor Class against ranged attacks, but takes a -4 penalty to AC against melee attacks. Standing up is a move action that provokes an attack of opportunity.",
  Shaken:
    "A shaken character takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks. Shaken is a less severe state of fear than frightened or panicked.",
  Sickened:
    "The character takes a -2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.",
  Staggered:
    "A staggered creature may take a single move action or a single standard action each round (but not both, nor can it take full-round actions). A creature with nonlethal damage exactly equal to its current hit points gains the staggered condition.",
  Stunned:
    "A stunned creature drops everything held, can't take actions, takes a -2 penalty to AC, and loses its Dexterity bonus to AC (if any). Attackers receive a +4 bonus on attack rolls to perform combat maneuvers against a stunned opponent.",
  Unconscious:
    "Unconscious creatures are knocked out and helpless. Unconsciousness can result from having negative hit points (but not more than the creature's Constitution score), or from nonlethal damage in excess of current hit points.",

  // ==================== Weapon Properties ====================
  Brace:
    "If you use a readied action to set a brace weapon against a charge, you deal double damage on a successful hit against a charging character.",
  Disarm:
    "When you use a disarm weapon, you get a +2 bonus on combat maneuver checks to disarm an enemy.",
  Distracting:
    "You gain a +2 bonus on Bluff skill checks to feint in combat while wielding this weapon.",
  Double:
    "You can use a double weapon to fight as if fighting with two weapons, but if you do, you incur all the normal attack penalties associated with fighting with two weapons, just as if you were using a one-handed weapon and a light weapon.",
  Fragile:
    "Fragile weapons and armor cannot take the beating that sturdier weapons can. A fragile weapon gains the broken condition if the wielder rolls a natural 1 on an attack roll with the weapon. If already broken, the weapon is instead destroyed.",
  Grapple:
    "On a successful critical hit with a grapple weapon, you can attempt a combat maneuver check to grapple your opponent as a free action. This grapple attempt does not provoke an attack of opportunity.",
  Monk:
    "A monk weapon can be used by a monk to perform a flurry of blows.",
  Nonlethal:
    "These weapons deal nonlethal damage. You can use a weapon that deals nonlethal damage to deal lethal damage at a -4 penalty on your attack roll.",
  Performance:
    "When wielding this weapon, if an attack or combat maneuver made with this weapon prompts a combat performance check, you gain a +2 bonus on that check.",
  Reach:
    "You use a reach weapon to strike opponents 10 feet away, but you can't use it against an adjacent foe.",
  Trip:
    "You can use a trip weapon to make trip attacks. If you are tripped during your own trip attempt, you can drop the weapon to avoid being tripped.",
  Blocking:
    "When you use this weapon to fight defensively, you gain a +1 shield bonus to AC.",
  Deadly:
    "When this weapon delivers a coup de grace, it gains a +4 bonus on the damage roll from the critical hit (before being multiplied by the critical multiplier). This bonus does not apply to sneak attack or other precision-based damage.",

  // ==================== Damage Types ====================
  Bludgeoning:
    "Bludgeoning damage is dealt by blunt weapons and impacts. Skeletons and some other creatures are vulnerable to bludgeoning damage.",
  Piercing:
    "Piercing damage is dealt by pointed weapons and attacks that stab or puncture. Some damage reduction can be bypassed with piercing weapons.",
  Slashing:
    "Slashing damage is dealt by edged weapons and cutting attacks. Some damage reduction can be bypassed with slashing weapons.",
  Fire:
    "Fire damage is dealt by flames and intense heat. Creatures with fire resistance or immunity reduce or negate this damage. Creatures with the cold subtype are often vulnerable to fire.",
  Cold:
    "Cold damage is dealt by freezing effects and extreme cold. Creatures with cold resistance or immunity reduce or negate this damage. Creatures with the fire subtype are often vulnerable to cold.",
  Electricity:
    "Electricity damage is dealt by lightning and electrical discharges. Creatures with electricity resistance or immunity reduce or negate this damage.",
  Acid:
    "Acid damage is dealt by corrosive substances and effects. Creatures with acid resistance or immunity reduce or negate this damage.",
  Sonic:
    "Sonic damage is dealt by powerful sound and vibrations. Sonic effects can affect creatures that are immune to many other energy types. Sonic damage ignores an object's hardness.",
  Force:
    "Force damage is dealt by pure magical energy. Force effects can strike incorporeal creatures without the miss chance associated with incorporeality. Magic missile is the most common source of force damage.",
  Positive:
    "Positive energy heals living creatures and damages undead. Channeled positive energy can heal living creatures or damage undead in a burst.",
  Negative:
    "Negative energy damages living creatures and heals undead. Channeled negative energy can damage living creatures or heal undead in a burst.",

  // ==================== Spell Descriptors ====================
  Air:
    "Spells with the air descriptor create, manipulate, or conjure air, wind, mist, or gases.",
  Chaotic:
    "Spells with the chaotic descriptor are chaotically aligned. Such spells count as chaos-aligned for overcoming damage reduction. Casting a chaotic spell is an evil act only if it is also evil.",
  Curse:
    "Spells with the curse descriptor place long-lasting afflictions on creatures. Curses are usually difficult to remove without specific magic such as remove curse or break enchantment.",
  Darkness:
    "Spells with the darkness descriptor create darkness or reduce light. Darkness spells counter and are countered by light spells of equal or higher level.",
  Death:
    "Spells with the death descriptor directly attack a creature's life force, potentially killing it instantly. Death effects are necromantic in nature. Death effects always allow a saving throw, and creatures immune to death effects are specifically noted.",
  Disease:
    "Spells with the disease descriptor inflict one or more diseases. These effects are typically drawn from necromancy or conjuration magic.",
  Earth:
    "Spells with the earth descriptor manipulate earth, stone, or dirt in some way.",
  Evil:
    "Spells with the evil descriptor are evil-aligned. Casting an evil spell is an evil act, though creating an evil spell is not necessarily so. A creature that casts an evil spell does not become evil, but repeated castings may shift alignment.",
  Fear:
    "Spells with the fear descriptor create, enhance, or manipulate fear. Most fear spells are enchantments or necromancies. Fear effects can cause creatures to become shaken, frightened, or panicked.",
  Good:
    "Spells with the good descriptor are good-aligned. Such spells count as good-aligned for overcoming damage reduction.",
  "Language-Dependent":
    "A language-dependent spell uses intelligible language as a medium for communication. If the target cannot understand or hear the caster's language, the spell fails.",
  Lawful:
    "Spells with the lawful descriptor are lawfully aligned. Such spells count as law-aligned for overcoming damage reduction.",
  Light:
    "Spells with the light descriptor create significant amounts of light or attack darkness effects. Light spells counter and are countered by darkness spells of equal or higher level.",
  "Mind-Affecting":
    "Mind-affecting spells and effects work only against creatures with an Intelligence score of 1 or higher. Undead, oozes, and constructs are typically immune to mind-affecting effects unless noted otherwise.",
  Pain:
    "A pain effect causes unpleasant sensations but no permanent physical damage. Creatures immune to effects requiring a Fortitude save (except those also affecting objects) are immune to pain effects.",
  Poison:
    "Spells with the poison descriptor deal with toxic substances, creating or enhancing poisons. Creatures immune to poison are unaffected by poison spells.",
  Shadow:
    "Shadow spells manipulate matter or energy from the Shadow Plane or create effects with shadow substance. Shadow spells that mimic other spells are only partially real.",
  Water:
    "Spells with the water descriptor create, manipulate, or control water or moisture.",

  // ==================== Spell Schools ====================
  Abjuration:
    "Abjurations are protective spells. They create physical or magical barriers, negate magical or physical abilities, harm trespassers, or even banish the subject of the spell to another plane of existence.",
  Conjuration:
    "Conjuration spells bring creatures, objects, or energy to the caster. Conjuration includes five subschools: calling, creation, healing, summoning, and teleportation.",
  Divination:
    "Divination spells enable you to learn secrets long forgotten, predict the future, find hidden things, and foil deceptive spells. Many divination spells have cone-shaped areas.",
  Enchantment:
    "Enchantment spells affect the minds of others, influencing or controlling their behavior. Enchantment includes two subschools: charm and compulsion. All enchantments are mind-affecting spells.",
  Evocation:
    "Evocation spells manipulate magical energy or tap an unseen source of power to produce a desired end. Evocations can deal large amounts of damage or create effects of substantial power.",
  Illusion:
    "Illusion spells deceive the senses or minds of others. They cause people to see things that are not there, not see things that are there, hear phantom noises, or remember things that never happened. Illusion includes five subschools: figment, glamer, pattern, phantasm, and shadow.",
  Necromancy:
    "Necromancy spells manipulate the power of death, unlife, and the life force. Spells involving undead creatures make up a large part of this school. Necromancy spells can drain ability scores, drain energy, or even kill outright.",
  Transmutation:
    "Transmutation spells change the properties of some creature, thing, or condition. Transmutation includes two subschools: enhancement and polymorph.",
  Universal:
    "Universal spells are not part of any school. A small number of spells belong to this school, including permanency and prestidigitation.",

  // ==================== Creature Types ====================
  Aberration:
    "An aberration has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three. Aberrations have darkvision 60 ft. and proficiency with their natural weapons plus any weapons mentioned in their entry.",
  Animal:
    "An animal is a living, nonhuman creature, usually a vertebrate with no magical abilities and no innate capacity for language or culture. Animals have low-light vision and are proficient with their natural weapons only.",
  Construct:
    "A construct is an animated object or artificially created creature. Constructs have darkvision 60 ft., low-light vision, and are immune to all mind-affecting effects, bleed, death effects, disease, necromancy effects, paralysis, poison, sleep, stun, ability damage, ability drain, fatigue, exhaustion, energy drain, nonlethal damage, and death from massive damage.",
  Dragon:
    "A dragon is a reptile-like creature, usually winged, with magical or unusual abilities. Dragons have darkvision 60 ft. and low-light vision. They are immune to magical sleep effects and paralysis effects.",
  Fey:
    "A fey is a creature with supernatural abilities and connections to nature or to some other force or place. Fey have low-light vision and are proficient with all simple weapons and any weapons mentioned in their entry.",
  Humanoid:
    "A humanoid usually has two arms, two legs, and one head, or a human-like torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities. They are proficient with all simple weapons, or by character class.",
  "Magical Beast":
    "Magical beasts are similar to animals but can have Intelligence scores higher than 2. Magical beasts usually have supernatural or extraordinary abilities. They have darkvision 60 ft. and low-light vision.",
  "Monstrous Humanoid":
    "Monstrous humanoids are similar to humanoids, but with monstrous or animalistic features. They often have magical abilities as well. Monstrous humanoids have darkvision 60 ft.",
  Ooze:
    "An ooze is an amorphous or mutable creature, usually mindless. Oozes have darkvision 60 ft. and are immune to gaze attacks, visual effects, illusions, and other attack forms that rely on sight. They are also immune to poison, sleep, paralysis, polymorph, stun, critical hits, and flanking.",
  Outsider:
    "An outsider is at least partially composed of the essence (but not necessarily the material) of some plane other than the Material Plane. Outsiders have darkvision 60 ft. Unlike most other living creatures, an outsider does not have a dual nature: its soul and body form one unit.",
  Plant:
    "This type comprises vegetable creatures. They are immune to all mind-affecting effects, paralysis, poison, polymorph, sleep, and stun. Plants have low-light vision.",
  Undead:
    "Undead are once-living creatures animated by spiritual or supernatural forces. Undead have darkvision 60 ft. and are immune to all mind-affecting effects, bleed, death effects, disease, paralysis, poison, sleep, stun, ability drain, energy drain, nonlethal damage, exhaustion, fatigue, and any effect requiring a Fortitude save (unless it also works on objects).",
  Vermin:
    "This type includes insects, arachnids, other arthropods, worms, and similar invertebrates. Vermin have darkvision 60 ft. and are mindless (no Intelligence score). They are immune to all mind-affecting effects.",

  // ==================== Armor/Shield Properties ====================
  "Light Armor":
    "Light armor lets you add all or most of your Dexterity modifier to your Armor Class. Light armor does not reduce your speed. Proficiency is required to avoid the armor check penalty applying to attack rolls and all skill checks involving movement.",
  "Medium Armor":
    "Medium armor allows you to add part of your Dexterity modifier to your AC (typically up to +2 or more depending on the armor). Medium armor reduces your speed by 5 feet (for characters with 30 ft. base speed) unless you have the appropriate class feature.",
  "Heavy Armor":
    "Heavy armor typically limits your Dexterity bonus to AC to +0 or +1 and reduces your speed by 10 feet (for characters with 30 ft. base speed). Heavy armor has the highest armor bonus but also the highest armor check penalties.",
  Shield:
    "Shields are held in one hand and provide a shield bonus to AC. Using a shield imposes an armor check penalty on certain skills. A shield can be used to make a shield bash attack.",
  "Tower Shield":
    "A tower shield provides a +4 shield bonus to AC but imposes a -2 penalty on attack rolls. As a standard action, you can use a tower shield to grant total cover along one edge of your space.",

  // ==================== Ability Types ====================
  "Extraordinary (Ex)":
    "Extraordinary abilities are nonmagical. They are not subject to spell resistance, counterspells, or dispelling, and they function normally in an antimagic field. They cannot be suppressed by any means.",
  "Spell-Like (Sp)":
    "Spell-like abilities are magical and work just like spells (though they are not spells and have no verbal, somatic, material, or focus components). They are subject to spell resistance, dispel magic, and antimagic field, and do not function in areas where magic is suppressed.",
  "Supernatural (Su)":
    "Supernatural abilities are magical and go away in an antimagic field but are not subject to spell resistance, counterspells, or dispel magic. They cannot be dispelled.",
};

function getTraitToolTip(value) {
  if (!value) return "";
  const key = typeof value === "string" ? value : value.name || "";
  return traitDescriptions[key] || "";
}

function formatTraitName(name) {
  return name ? name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";
}
