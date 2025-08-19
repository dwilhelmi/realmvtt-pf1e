// Create a map of trait descriptions
const traitDescriptions = {
  Aberration:
    "Aberrations are creatures from beyond the planes or corruptions of the natural order.",
  Acid: "Effects with this trait deal acid damage. Creatures with this trait have a magical connection to acid.",
  Additive:
    "Feats with the additive trait allow you to add special substances to alchemical consumables you create when you use Quick Alchemy to create a consumable (you can't use additives with quick vials). You can add only one additive to a single alchemical item, you can add an additive only once per round, and most additive abilities specify a subset of alchemical consumables you can add them to.",
  Adjusted:
    "The equipment comes with an adjustment described in its entry. This adjustment is built into the equipment permanently, meaning the equipment can't have another adjustment added, nor can it be swapped out for a different adjustment. If the adjustment alters the item's base statistics, such as adding the noisy trait, that's reflected in the equipment's table entry.",
  Adjustment:
    "Items with this trait are intended to alter existing pieces of equipment, typically armors, shields, and weapons. The given item will note which type of equipment it modifies. A piece of equipment can only be affected by a single adjustment at a time. Unless otherwise noted, adding or removing an adjustment requires using a 10-minute activity and a repair kit.",
  Aeon: "These monitors are the self-styled defenders of reality. Traditional aeons have dualistic natures and forms, hold a dichotomy of interests, and communicate via a strange telepathic hodgepodge of sensory sending called envisioning. Axiomites and their creations are aeons, but don't share all the characteristics of traditional aeons.",
  Aesir:
    "Aesir are often-bellicose monitors of the chaotic planes, honing their skill in battle and preparing for a final confrontation at the end of the multiverse.",
  Aftermath:
    "This trait describes feats that represent special abilities gained after exposure to the weird and deadly.",
  Agathion:
    "This family of animal-featured celestials is native to the plane of Nirvana. Most agathions are neutral good, have darkvision, and have a weakness to evil damage.",
  Agile:
    "The multiple attack penalty you take with this weapon on the second attack on your turn is -4 instead of -5, and -8 instead of -10 on the third and subsequent attacks in the turn.",
  Air: "Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a connection to magical air.",
  Aiuvarin:
    "A creature with this trait has the aiuvarin versatile heritage. Aiuvarins are of mixed ancestry, including elves or other aiuvarins. An ability with this trait can be used or selected only by aiuvarins.",
  Alchemical:
    "Alchemical items are powered by reactions of alchemical reagents. Unless otherwise noted, alchemical items aren't magical and don't radiate a magical aura. Alchemical creatures are partially powered by alchemical reactions.",
  Alchemist: "This indicates abilities from the alchemist class.",
  Amp: "An amp is a special thoughtform that modifies the properties of your psi cantrips. Psi cantrips each have their own amp, and feats with the amp trait provide different amps you can apply to psi cantrips in place of their normal amps.",
  Amphibious:
    "An amphibious creature can breathe in water and in air, even outside of its preferred environment, usually indefinitely but at least for hours. These creatures often have a swim Speed. Their bludgeoning and slashing unarmed Strikes don't take the usual –2 penalty for being underwater.",
  Anadi:
    "A reclusive people from Garund who resemble spiders and can assume human forms.",
  Analog:
    "This weapon eschews advanced electronics, computers systems, and electric power sources, but was manufactured and calibrated using advanced technology. This weapon is immune to abilities that target technology. Weapon runes don't function on this weapon unless this weapon also has the archaic trait.",
  Android:
    "A synthetic humanoid ancestry created by artificial means. Most common in Numeria.",
  Angel:
    "This family of celestials are messengers and warriors. Most angels are holy, have darkvision, and have a weakness to unholy.",
  Animal:
    "An animal is a creature with a relatively low intelligence. It typically doesn't have an Intelligence attribute modifier over –4, can't speak languages, and can't be trained in Intelligence-based skills.",
  Animist: "This indicates abilities from the animist class.",
  Apex: "<p>When you Invest an Item that has the apex trait, it improves one of your attributes, either increasing the attribute's modifier by 1 or to a total of +4, whichever would give you a higher value. This gives you all the benefits of the new attribute modifier until the investiture ends. For example, in addition to increasing rolls you make using the attribute, increasing your Intelligence lets you become trained in an additional skill and learn a new language, and increasing your Constitution gives you more Hit Points.</p><p>An apex item grants this benefit only the first time it's invested within a 24-hour period, and you can benefit from only one apex item at a time. If you attempt to invest an apex item when you already have one invested, you don't gain the attribute modifier increase, though you do gain any other effects of Investing the Item.</p>",
  Aphorite:
    "A type of planar scion descended from a being from Axis, the Plane of Law.",
  Apparition:
    "<p>Apparitions are spiritual entities who generally lack the power, cohesiveness, or attachments to enter or affect the physical world. Unlike a ghost or phantom, an apparition does not need to have ever been a living creature and could be the spiritual memory of a particularly meaningful location or event. Apparitions are reliant on animists to interact with other people and things, and generally can't be targeted or affected by spells and abilities other than those of the animist they are attuned to. Animist feats and abilities that affect spirits affect apparitions only if they specifically say so.</p><p> Animist abilities with the apparition trait involve one or more of your apparitions acting alongside you. You must be attuned to at least one apparition to use an apparition ability, and some abilities might state in their requirements more specifically which apparition you must be attuned to. Typically, you're assumed to always attune to your apparitions during your daily preparations, but in some rare circumstances or as a result of certain animist abilities, your apparitions might be dispersed or separated from you for a time; you aren't attuned to dispersed apparitions.</p>",
  Aquadynamic:
    "This armor is designed for use underwater, with streamlined design and buoyant materials used in strategic places. You don't apply the armor's check penalty to Acrobatics or Athletics checks in water or similar liquids.",
  Aquatic:
    "Aquatic creatures are at home underwater. Their bludgeoning and slashing unarmed Strikes don't take the usual –2 penalty for being underwater. Aquatic creatures can breathe water but not air.",
  Arcane:
    "This magic comes from the arcane tradition, which is built on logic and rationality. Anything with this trait is magical. A creature with this trait is primarily constituted of or has a strong connection to arcane magic.",
  Ardande:
    "Ardandes are planar scions descended from kizidhars and other beings of elemental wood.",
  Archon:
    "Members of this family of celestials are the protectors of Heaven and are typically holy. They have darkvision and a weakness to unholy.",
  Archetype: "This feat belongs to an archetype.",
  Artifact:
    "Items with this trait are artifacts. These magic items can't be crafted by normal means, and they can't be damaged by normal means. Artifacts are always rare or unique.",
  Astral:
    "Astral creatures are native to the Astral Plane. They can survive the basic environmental effects of the Astral Plane.",
  Asura:
    "These lawful fiends are physical manifestations of divine accidents. Asuras typically have darkvision, immunity to curses, and a weakness to good.",
  Athamaru: "Athamarus are fishlike aquatic humanoids.",
  Attached:
    "An attached weapon must be combined with another piece of gear to be used. The trait lists what type of item the weapon must be attached to. You must be wielding or wearing the item the weapon is attached to in order to attack with it. For example, shield spikes are attached to a shield, allowing you to attack with the spikes instead of a shield bash. An attached weapon is usually bolted onto or built into the item it's attached to, and typically an item can have only one weapon attached to it. An attached weapon can be affixed to an item with 10 minutes of work and a successful DC 10 Crafting check; this includes the time needed to remove the weapon from a previous item, if necessary. If an item is destroyed, its attached weapon can usually be salvaged.",
  Attack:
    "An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.",
  Auditory:
    "Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can't hear it (such as deaf targets) as long as the effect itself makes sound.",
  Aura: "An aura is an emanation that continually ebbs out from you, affecting creatures within a certain radius. Aura can also refer to the magical signature of an item.",
  Automaton:
    "A creature with this trait is a member of the automaton ancestry.",
  AwakenedAnimal:
    "Awakened animals were once normal creatures before they gained sapience.",
  Azarketi:
    "Amphibious humanoids who live among the seas of the Inner Sea region, said to have descended from the people of Azlant. Sometimes known as gillmen or Low Azlanti. Azarketi are an offshoot of humans adapted to live in aquatic communities. They have gills, webbed digits, and small fins, and they can survive in or out of water.",
  Azata:
    "This family of celestials is native to Elysium. They are typically holy and have darkvision and a weakness to cold iron and unholy.",
  Backstabber:
    "When you hit an off-guard creature, this weapon deals 1 precision damage in addition to its normal damage. The precision damage increases to 2 if the weapon is a +3 weapon.",
  Backswing:
    "You can use the momentum from a missed attack with this weapon to lead into your next attack. After missing with this weapon on your turn, you gain a +1 circumstance bonus to your next attack with this weapon before the end of your turn.",
  Barbarian: "This indicates abilities from the barbarian class.",
  Bard: "This indicates abilities from the bard class.",
  Barding:
    "You can purchase special armor for animals, called barding. All animals have a trained proficiency rank in light barding, and combat-trained animals are trained in heavy barding. Barding uses the same rules as armor except for the following. The Price and Bulk of barding depend on the animal's size. Unlike for a suit of armor, barding's Strength entry is listed as a modifier, not a score. Barding can't be etched with magic runes, though special magical barding might be available.",
  Beast:
    "A creature similar to an animal but with an Intelligence modifier of –3 or higher is usually a beast. Unlike an animal, a beast might be able to speak and reason.",
  Beastkin:
    "Humanoids that can partially or fully transform into animal forms.",
  Blight: "Blights are corruptions of nature's wrath.",
  Boggard: "Boggards are frog-like humanoids. They typically have darkvision.",
  Bomb: "An alchemical bomb combines volatile alchemical components that explode when the bomb hits a creature or object. Most alchemical bombs deal damage, though some produce other effects.",
  BottledBreath:
    "Bottles of breath are enchanted bottles of cloud and mist, first developed by the denizens of the Plane of Air. You can Activate an item with the bottled breath trait as you inhale it or cause another creature to inhale it.",
  Brace:
    "A brace weapon is effective at damaging moving opponents. When you Ready to Strike an opponent that moves within your reach, until the start of your next turn Strikes with the brace weapon deal an additional 2 precision damage for each weapon damage die it has.",
  Bravado:
    "Actions with this trait can grant panache, depending on the result of the check involved. If you succeed at the check on a bravado action, you gain panache, and if you fail (but not critically fail) the check, you gain panache but only until the end of your next turn. These effects can be applied even if the action had no other effect due to a failure or a creature's immunity.",
  Brutal:
    "A ranged attack with this trait uses its Strength modifier instead of Dexterity on the attack roll.",
  Bugbear:
    "A creature with this trait is a furry, stealthy goblinoid. Bugbears tend to have darkvision.",
  Bulwark:
    "The armor covers you so completely that it provides benefits against some damaging effects. On Reflex saves to avoid a damaging effect, such as a fireball, you add a +3 modifier instead of your Dexterity modifier.",
  Caligni:
    "These subterranean people have darkvision, and some have powers to create darkness.",
  Calling:
    "The calling trait identifies mechanical options a character gains when they first gain mythic power. Every calling option grants a way to use and regain Mythic Points.",
  Cantrip:
    "A spell you can cast at will that is automatically heightened to half your level rounded up.",
  Capacity:
    "Weapons that have the capacity trait typically have multiple barrels or chambers capable of containing a round of ammunition. Capacity is always accompanied by a number indicating the number of barrels or chambers. After a capacity weapon is fired, you can select the next loaded barrel or chamber as an Interact action that doesn't require a free hand. Each barrel or chamber can be reloaded after it's fired as a separate Interact action.",
  Catalyst:
    "Items that have the catalyst trait are consumable material spell components that alter or magnify specific spells. Activating a catalyst is part of Casting the Spell. The catalyst might increase the number of actions required to Cast the Spell, as indicated in the catalyst's Activate entry. Additionally, the spell gains the manipulate trait if it didn't already. Because the catalyst becomes part of the spell, you can draw the catalyst as part of Casting the Spell.",
  Catfolk:
    "A creature with this trait is a member of the catfolk ancestry. Catfolk are humanoids with feline features.",
  Celestial:
    "Creatures that hail from or have a strong connection to the holy planes are called celestials. Celestials can survive the basic environmental effects of planes in the Outer Sphere.",
  Censer:
    "Censers are decorative containers, often metal or ceramic, in which incense is burned. An item with the censer trait must be filled with incense to Activate it, which ignites the incense and causes the censer to exude a cloud of smoke.",
  Centaur: "Centaurs have humanoid upper bodies and equine lower bodies.",
  CertainKill:
    "The Lightkeeper can use a Certain Kill Art as long as they are within the Glass Lighthouse—these abilities, which have the certain kill trait, cause obvious distortions in the Lighthouse's fabric as the user calls upon their technique. However, as each technique requires one of the Lightkeepers to temporarily take command of the demiplane from the rest of their team, only one Certain Kill Art can be used by any of the Lightkeepers in a given round.",
  Champion: "This indicates abilities from the champion class.",
  Changeling:
    "A creature with this trait has the changeling versatile heritage. Changelings are the children of hags and members of other humanoid ancestries. An ability with this trait can be used or selected only by changelings.",
  CharauKa:
    "Mandrill-like humanoids that are brutal warriors. Many charau-ka live in Usaro.",
  Class:
    "Archetypes with the class trait fundamentally diverge from your class's specialties but still fit within the theme of your class. You can select a class archetype only if your class meets the criteria listed in the archetype's prerequisites. Class archetypes always alter or replace some of a class's static class features in addition to any new feats they offer. It might be possible to take a class archetype at 1st level if it alters or replaces some of the class's initial class features. The 1st-level ability is presented much like a class feature and includes the class archetype's prerequisites and rules on how it changes your class. If you select this ability, you must take that archetype's dedication feat at 2nd level, and you proceed normally afterward. You can never have more than one class archetype.",
  Cleric: "This indicates abilities from the cleric class.",
  Climbing: "The hand wielding the weapon is available to Climb.",
  Clockwork:
    "Clockworks are intricate, complex constructs that can be programmed to perform specific functions.",
  Coagulant:
    "Healing alchemical items with the coagulant trait lose effectiveness when many are applied in a short period of time. If a creature heals Hit Points from an item with the coagulant trait, that creature is temporarily immune to healing Hit Points from subsequent items with the coagulant trait for 10 minutes (but not immune to any other effects of those items).",
  Coatl:
    "A family of supernatural feathered serpents who serve as guardians and messengers in the Universe for various holy divinities.",
  Cobbled:
    "This firearm is cobbled together and likely to misfire. No matter how well you upkeep it, on a failed attack roll, the attack misses and you must roll a @Check[flat|dc:5]. If you fail this check, the weapon misfires.",
  Coda: "<p>Instruments with the coda trait work mostly like staves and have the staff trait. There are two differences: Coda instruments are in the form of musical instruments, and they can be prepared only by bards. Because they're not physically staves, you can't attack with a coda instrument, nor can you etch it with weapon runes.</p><p>The process of preparing a coda instrument involves playing significant portions of songs related to the spells within the instrument—either old standards or ones of your own creation. This leaves magical reverberations within the instrument that allow you to complete the songs by playing their coda later in the day.</p>",
  Cold: "Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.",
  Combination:
    "This is a trait for weapons that combine the functionality of melee weapons and firearms in unique or unusual ways. A combination weapon has both a firearm form or usage and a melee weapon form or usage.",
  Comfort:
    "The armor is so comfortable that you can rest normally while wearing it.",
  Common:
    "Anything that doesn't list another rarity trait (uncommon, rare, or unique) automatically has the common trait. This rarity indicates that an ability, item, or spell is available to all players who meet the prerequisites for it. A creature of this rarity is generally known and can be summoned with the appropriate summon spell.",
  Companion:
    "An item with this trait can be worn by an animal companion or similar creature. A companion can have up to two items invested.",
  Complex: "A hazard with this trait takes turns in an encounter.",
  Composite:
    "A composite impulse combines multiple elements. You can gain an impulse with the composite trait only if your kinetic elements include all the elements listed in the impulse's traits.",
  Composition:
    "To cast a composition cantrip or focus spell, you use a type of Performance. If the spell requires an auditory performance, you might recite a poem, sing a song, or perform a dramatic monologue. If the spell requires a visual performance, you might dance or pantomime. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.",
  Concealable:
    "This weapon is designed to be inconspicuous or easily concealed. You gain a +2 circumstance bonus to Stealth checks and DCs to hide or conceal a weapon with this trait.",
  Concentrate:
    "An action with this trait requires a degree of mental concentration and discipline.",
  Concussive:
    "These weapons smash as much as puncture. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning. For instance, if the creature were immune to piercing and had no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance or immunity to all physical damage, or all damage, applies as normal.",
  Conrasu:
    "A people that are made of cosmic force given consciousness and housed within unique exoskeletons.",
  Consecration:
    "A consecration spell enhances an area for an extended period of time. A given area can have only a single consecration effect at a time. The new effect attempts to counteract any existing one in areas of overlap.",
  Construct:
    "A construct is an artificial creature empowered by a force other than vitality or void. Constructs are often mindless; they are immune to bleed, death effects, disease, healing, nonlethal attacks, poison, spirit, vitality, void, and the doomed, drained, fatigued, paralyzed, sickened, and unconscious conditions; and they may have Hardness based on the materials used to construct their bodies. Constructs are not living creatures, nor are they undead. When reduced to 0 Hit Points, a construct creature is destroyed.",
  Consumable:
    "An item with this trait can be used only once. Unless stated otherwise, it's destroyed after activation. Consumable items include alchemical items and magical consumables such as scrolls and talismans. When a character creates consumable items, they can make them in batches of four.",
  Contact:
    "A contact poison is activated by applying it to an item or directly onto a living creature's skin. The first creature to touch the affected item must attempt a saving throw against the poison; if the poison is applied directly, the creature must attempt a saving throw immediately when the poison touches its skin. Contact poisons are infeasible to apply to a creature via a weapon attack due to the logistics of delivering them without poisoning yourself. Typically, the onset time of a contact poison is 1 minute.",
  Contingency:
    "Spells with this trait grant you an action during the spell's effects, typically a reaction with a special trigger. They typically have a long duration, such as 24 hours. You can have only one spell with the contingency trait, or one contingency spell, active at a time. If you cast another spell with the contingency trait or contingency, the newer casting supersedes the older.",
  Contract:
    "A contract is a type of item that magically establishes an agreement between multiple parties and typically grants magical benefits.",
  CriticalFusion:
    "Critical fusion is a new trait for combination weapons that grants you two additional options for the critical specialization effect when using the combination weapon's melee version to make a melee attack while the firearm is loaded. If you choose to use one of them, they replace the melee usage's normal critical specialization effect. First, you can discharge the firearm to create a loud bang and concussion, using the critical specialization effect for firearms instead of the melee weapon group's critical specialization effect. Second, you can choose to discharge the firearm to increase the critical hit's momentum or shoot the foe as you attack them in melee, dealing 2 additional damage per weapon damage die. Both of these options discharge the firearm, which typically means you have to reload it before firing it again.",
  Curse:
    "A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap. Effects with this trait can be removed only by effects that specifically target curses.",
  Cursebound:
    "Spells with this trait increase the severity of your oracular curse when cast. Usually, only revelation spells have this trait. You can't cast a cursebound spell if you don't have an oracular curse. A cursebound ability that allows a defense uses your spell attack modifier or spell DC unless noted otherwise.",
  Cursed:
    "An item with this trait is cursed to cause trouble for its owner. A curse isn't detected when the item is identified, though a critical success reveals both the presence and exact nature of the curse. Cursed items can't be discarded once they've been triggered or invested the first time. The item can be removed only if the curse is removed.",
  Daemon:
    "A family of fiends spawned on the desolate plane of Abaddon, most daemons are irredeemably unholy. They typically have darkvision and weakness to holy.",
  Darkness:
    "Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.",
  Darvakka:
    "Entropic undead creatures twisted by the Netherworld and the Void.",
  Deadly:
    "On a critical hit, the weapon adds a weapon damage die of the listed size. Roll this after doubling the weapon's damage. This increases to two dice if the weapon has a greater striking rune and three dice if the weapon has a major striking rune. For instance, a rapier with a greater striking rune deals 2d8 extra piercing damage on a critical hit. An ability that changes the size of the weapon's normal damage dice doesn't change the size of its deadly die.",
  Death:
    "An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.",
  Dedication:
    "Each archetype's dedication feat represents your character's dedicated effort learning a new set of abilities, making it impossible to split your focus and pursue another archetype at the same time. Once you take a dedication feat, you can't select a different dedication feat until you complete your dedication by taking two other feats from your current archetype. You can't retrain a dedication feat as long as you have any other feats from that archetype.",
  Deflecting:
    "This shield is designed to block or divert certain types of attacks or weapons. Increase the shield's Hardness against the listed type of attack by 2.",
  Demon:
    "A family of fiends, demons hail from or trace their origins to the Outer Rifts. Most are irredeemably unholy and have darkvision and weaknesses to cold iron and holy.",
  Dero: "This family of humanoids are the descendants of fey creatures that fell into darkness and confusion after being abandoned in the Darklands. They are immune to confusion and vulnerable to sunlight.",
  Destiny:
    "The destiny trait indicates the first feat in a mythic destiny. You must be a mythic character of 12th-level to select a destiny and cannot take subsequent feats in that mythic destiny without first taking the destiny feat.",
  Detection:
    "Effects with this trait attempt to determine the presence or location of a person, object, or aura.",
  Deviant: "This trait describes strange supernatural or paranormal abilities.",
  Devil:
    "A family of fiends from Hell, most devils are irredeemably unholy. They typically have greater darkvision, immunity to fire, telepathy, and weakness to holy.",
  Dhampir:
    "A creature with this trait has the dhampir versatile heritage. These humanoids are the offspring of vampires and members of other ancestries.",
  Dinosaur: "These reptiles have survived from prehistoric times.",
  Disarm:
    "You can use this weapon to Disarm with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls (if any) as an item bonus to the Athletics check. If you critically fail a check to Disarm using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure. On a critical success, you still need a free hand if you want to take the item.",
  Disease:
    "An effect with this trait applies one or more diseases. A disease is typically an affliction.",
  Div: "Divs are a family of fiends spawned from the spirits of evil genies within the desolation of Abaddon. Most divs are neutral evil. They typically have greater darkvision and weakness to cold iron and good damage.",
  Divine:
    "This magic comes from the divine tradition, drawing power from deities or similar sources. Anything with this trait is magical. A creature with this trait is primarily constituted of or has a strong connection to divine magic.",
  DoubleBarrel:
    "This weapon has two barrels that are each loaded separately. You can fire both barrels of a double barrel weapon in a single Strike to increase the weapon damage die by one step. If the weapon has the fatal trait, this increases the fatal die by one step.",
  Downtime:
    "An activity with this trait takes a day or more, and can be used only during downtime.",
  Dragon:
    "Dragons are reptilian creatures, often winged or with the power of flight. Most can exhale magical energy and are immune to sleep and paralysis.",
  Dragonblood:
    "A creature with this trait has the dragonblood versatile heritage. These creatures are born of draconic lineage and often have draconic appearances.",
  Dream:
    "Creatures native to the Dimension of Dreams can possess a diverse array of abilities, although those associated with the nightmare realm of Leng are almost always unholy and immune to that realm's freezing temperatures.",
  Dromaar:
    "A creature with this trait has the dromaar versatile heritage. Dromaars are of mixed ancestry, including orcs or other dromaars. An ability with this trait can be used or selected only by dromaars.",
  Drug: "An item with this trait is a drug, a poison that conveys short-term benefits in addition to harmful side effects and long-term consequences. Each time a creature uses a given drug it must also attempt a saving throw against addiction to that drug.",
  Druid: "This indicates abilities from the druid class.",
  Duskwalker:
    "A creature with this trait has the duskwalker versatile heritage. Duskwalkers are planar scions infused with the supernatural energy of psychopomps. An ability with this trait can be used or selected only by duskwalkers.",
  Dwarf:
    "A creature with this trait is a member of the dwarf ancestry. Dwarves are stout folk who often live underground and typically have darkvision. An ability with this trait can be used or selected only by dwarves. An item with this trait is created and used by dwarves.",
  Earth:
    "Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a connection to magical earth.",
  Eidolon:
    "A creature with this trait is a summoner's eidolon. An item with this trait can be worn by an eidolon. An eidolon can have up to two items invested.",
  Electricity:
    "Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.",
  Elemental:
    "Creatures directly tied to an element and native to the elemental planes. Elementals don't need to breathe.",
  Elf: "A creature with this trait is a member of the elf ancestry. Elves are mysterious people with rich traditions of magic and scholarship who typically have low-light vision. An ability with this trait can be used or selected only by elves. A weapon with this trait is created and used by elves.",
  Elixir: "Elixirs are alchemical liquids that are used by drinking them.",
  Emotion:
    "This effect alters a creature's emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.",
  Entrench:
    "You can position yourself in the armor or reposition its articulated pieces to better protect against some attacks. If you're trained in this armor, while wearing it you can spend a single action to gain a +1 circumstance bonus to AC against a certain type of attack until the start of your next turn. The entrench trait lists the type of attack this bonus applies against, typically entrench melee or entrench ranged.",
  Environmental:
    "A hazard with this trait is something dangerous that's part of the natural world, such as quicksand or harmful mold.",
  Esoterica:
    "The esoterica trait is present in many thaumaturge feats and class features that incorporate the various talismans, supernatural trinkets, and other objects you carry with you. Abilities that have the esoterica trait require you to be in possession of your esoterica to use them. Normally, you're assumed to always have your esoterica with you, but in some rare circumstances, you might either not have them on hand or have your gear stripped from you.",
  Ethereal:
    "Ethereal creatures are natives of the Ethereal Plane. They can survive the basic environmental effects of the Ethereal Plane.",
  Evolution:
    "Feats with this trait affect your eidolon instead of you, typically by granting it additional physical capabilities.",
  Expandable:
    "An item with the expandable trait increases to a specific size when activated. Unless otherwise noted, this space must be adjacent to you and on the ground, and the item needs to have enough open space to expand into or else the activation has no effect. When the effect ends, the expanded item disintegrates if it's a consumable or shrinks back to its normal size if it's not a consumable.",
  Exemplar: "This indicates abilities from the exemplar class.",
  Experiment:
    "An experimental cryptid has been purposefully altered through alchemy, engineering, magic, or ritual to contain some degree of construct components. Although powerful, the process is volatile and imperfect.",
  Exploration:
    "An activity with this trait takes more than a turn to use, and can usually be used only during exploration mode.",
  Extradimensional:
    "This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed.",
  Fatal:
    "The fatal trait includes a die size. On a critical hit, the weapon's damage die increases to that die size instead of the normal die size, and the weapon adds one additional damage die of the listed size.",
  FatalAim:
    "It's possible to hold the stock of this weapon under one arm so you can fire it with a single hand as long as the other hand isn't holding a weapon, shield, or anything else you would need to move and position, to ensure the weapon doesn't slip out from under your arm. However, if you use both hands, the weapon can make fatal attacks. When you wield the weapon in two hands, it gains the fatal trait with the listed damage die. Holding the weapon underarm stably enough to fire is significantly more complicated than just releasing one hand from the weapon, so to switch between the two grips, you must do so with an Interact action rather than Releasing or as part of reloading.",
  Fear: "Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.",
  Fetchling:
    "A creature with this trait is a member of the fetchling ancestry. Fetchlings were once human, but generations of life in the Netherworld have transformed them.",
  Fey: "Creatures of the First World are called the fey.",
  Fiend:
    "Creatures that hail from or have a strong connection to the unholy planes are called fiends. Fiends can survive the basic environmental effects of planes in the Outer Sphere.",
  Fighter: "This indicates abilities from the fighter class.",
  Figurehead:
    "While many ships are adorned with decorative carvings, daring crews sometimes procure magical figureheads for their vessels.",
  Finesse:
    "You can use your Dexterity modifier instead of your Strength modifier on attack rolls using this melee weapon. You still use your Strength modifier when calculating damage.",
  Finisher:
    "Finishers are spectacular finishing moves. You can use a finisher only if you have panache, and you lose your panache immediately after performing a finisher. Once you use a finisher, you can't use actions that have the attack trait for the rest of your turn. Some finisher actions also grant an effect on a failure. If your finisher succeeds, you can choose to apply the failure effect instead.",
  Finite: "Planes with this trait consist of a limited amount of space.",
  Fire: "Effects with the fire trait deal fire damage, or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a connection to magical fire.",
  Fleshwarp:
    "A humanoid transformed so completely by outside forces that they are now a unique ancestry.",
  Flexible:
    "The armor is flexible enough that it doesn't hinder most actions. You don't apply its check penalty to Acrobatics or Athletics checks.",
  Flourish:
    "Actions with the flourish trait are special techniques that require too much exertion for you to perform frequently. You can use only one action with the flourish trait per round.",
  Focus:
    "Focus spells are a special type of spell attained directly from a branch of study, from a deity, or from another specific source. You can learn focus spells only through special class features or feats, rather than choosing them from a spell list. Furthermore, you cast focus spells using a special pool of Focus Points—you can't prepare a focus spell in a spell slot or use your spell slots to cast focus spells; similarly, you can't spend your Focus Points to cast spells that aren't focus spells.",
  Focused:
    "An item with this trait can give you an additional Focus Point. This focus point is separate from your focus pool and doesn't count toward the cap on your focus pool. You can gain this benefit only if you have a focus pool, and there might be restrictions on how the point can be used. You can't gain more than 1 Focus Point per day from focused items.",
  Foldaway:
    "<p>This shield can collapse into a smaller form attached to a gauntlet for stability and easy travel. You can use an Interact action to deploy or stow the shield. While it's deployed, you can Raise the Shield as long as you have that hand free or are holding an object of light Bulk that's not a weapon in that hand. The shield impedes the use of your hand while it's deployed. Though you can still hold items in that hand, you can't wield weapons in that hand, operate anything that takes two hands, or attack with the gauntlet.</p><p>A foldaway shield must be attached to a gauntlet for stability. It can be affixed to an item with 10 minutes of work and a successful DC 10 Crafting check; this includes the time needed to remove the shield from a previous gauntlet, if necessary. If the gauntlet is destroyed, the foldaway shield can usually be salvaged. The collapsible nature of the shield makes it impossible to affix an attached weapon to it.</p>",
  Force:
    "Effects with this trait deal force damage or create objects made of pure magical force.",
  Forceful:
    "This weapon becomes more dangerous as you build momentum. When you attack with it more than once on your turn, the second attack gains a circumstance bonus to damage equal to the number of weapon damage dice, and each subsequent attack gains a circumstance bonus to damage equal to double the number of weapon damage dice.",
  Fortune:
    "A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.",
  FreeHand:
    "This weapon doesn't take up your hand, usually because it is built into your armor. A free-hand weapon can't be Disarmed. You can use the hand covered by your free-hand weapon to wield other items, perform manipulate actions, and so on. You can't attack with a free-hand weapon if you're wielding anything in that hand or otherwise using that hand. When you're not wielding anything and not otherwise using the hand, you can use abilities that require you to have a hand free as well as those that require you to be wielding a weapon in that hand. Each of your hands can have only one free-hand weapon on it.",
  Fulu: "Fulus are small paper charms that can be affixed to a suit of armor, a shield, a weapon, a creature, or even a structure. Some fulus are composed of multiple such charms, taking effect only once all have been affixed. Normal fulus have effects immediately once affixed, while fulu talismans have an effect only once activated. Once a fulu has been activated, it lasts for the given duration and then burns out. Unless otherwise noted, fulus expire one year after being created, reverting to mundane paper. All fulus have the fulu and consumable traits. Fulus also have a tradition trait—either arcane, divine, occult or primal—determined by the magical tradition of its creator. For example, a fulu created by a priest would have the divine trait, whereas a witch who dabbles in fate might create a fulu with the occult trait. Some fulus also have the talisman trait, if they work similarly to talismans (such as being affixed to a suit of armor, a shield, or a weapon. Each fulu's stat block indicates the type of item or creature it can be affixed to. Affixing or removing a fulu requires using the Affix a Fulu activity, or the Affix a Talisman action instead if the fulu is also a talisman.",
  Fungus:
    "Fungal creatures have the fungus trait. They are distinct from normal fungi.",
  Gadget:
    "Gadgets are consumable technological inventions with innovative uses.",
  Ganzi:
    "A planar scion descended from a chaotic being of the Maelstrom, such as a protean.",
  General:
    "A type of feat that any character can select, regardless of ancestry and class, as long as they meet the prerequisites. You can select a feat with this trait when your class grants a general feat.",
  Genie:
    "The diverse families of genies hold positions of prominence on the elemental planes. They have powerful magical abilities.",
  Geniekin:
    "An umbrella term for planar scions descended from beings from the Elemental Planes.",
  Ghoran:
    "An intelligent plant ancestry that maintain long lives by rejuvenating themselves from seeds.",
  Ghost:
    "Lost souls that haunt the world as incorporeal undead are called ghosts.",
  Ghoul: "Ghouls are vile undead creatures that feast on flesh.",
  Ghul: "Greedy and gluttonous undead originally formed from genie.",
  Giant: "Giants are massive humanoid creatures.",
  Gnoll: "Kholos are humanoids that resemble hyenas.",
  Gnome:
    "A creature with this trait is a member of the gnome ancestry. Gnomes are small people skilled at magic who seek out new experiences and usually have low-light vision. An ability with this trait can be used or selected only by gnomes. A weapon with this trait is created and used by gnomes.",
  Goblin:
    "A creature with this trait is a small, frantic goblinoid. Goblins tend to have darkvision. An ability with this trait can be used or chosen only by goblins. A weapon with this trait is created and used by goblins.",
  Goloma: "Insular humanoids that bear countless eyes.",
  Graft:
    "<p>An item that has the graft trait is a living tissue sample that has been implanted into a host. It's permanently a part of the subject's body and reduces the number of items that creature can invest per day by 1. Each graft has the invested trait to indicate this limitation—a graft is like an invested item that the host creature has no choice but to invest. If a creature gets a new graft when their limit on invested items has already been reduced to zero, the host body rejects the graft. Once fully implanted, a graft cannot take damage separately.</p><p>If a graft is ever severed from the host body, it can be reattached by any effect that can typically reattach limbs or organs, such as the regenerate spell. A grafter can remove a grant using the same process required to implant one, though this does not necessarily restore any organs replaced by the graft initially. Grafts typically require specialized storage conditions, such as alchemical tanks, to remain viable outside of a host. Grafts can usually be upgraded into their greater versions by having a grafter apply additional surgeries, mutagenic development, or similar medical procedures</p>",
  Grapple:
    "You can use this weapon to Grapple with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Grapple using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  Gremlin:
    "Cruel and mischievous fey, gremlins have acclimated to life in the Universe.",
  Grimoire:
    "Spellbooks are useful tools for any magic user to write down incantations and runes of power, but where most spellbooks are nothing more than ink on parchment, grimoires have absorbed the magic of the spells within—magic that knowledgeable spellcasters can use to augment their spells.",
  Grioth:
    "A grioth is a batlike alien that wields occult powers and can exist in the dark vacuum of space. They have darkvision and echolocation.",
  Grippli: "Tripkees are a family of froglike humanoids.",
  Gunslinger: "This indicates abilities from the gunslinger class.",
  Hag: "These malevolent spellcasters form covens.",
  Halfling:
    "A creature with this trait is a member of the halfling ancestry. These small people are friendly wanderers considered to be lucky. An ability with this trait can be used or selected only by halflings. A weapon with this trait is created and used by halflings.",
  Hampering:
    "After you hit with the weapon, you can use an Interact action to give the target a –10-foot circumstance penalty to all Speeds. The penalty ends after the target takes a move action, at the start of your next turn, if you attack with the weapon, or if you move out of reach of the target, whichever comes first.",
  Harnessed:
    "This shield features a special brace or opening designed to hold jousting weapons.",
  Haunt:
    "A hazard with this trait is a spiritual echo, often of someone with a tragic death. Putting a haunt to rest often involves resolving the haunt's unfinished business. A haunt that hasn't been properly put to rest always returns after a time.",
  Healing:
    "A healing effect restores a creature's body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.",
  Hefty:
    "A hefty shield is so heavy that raising it takes more effort. Raising a Shield with the hefty trait is a 2-action activity unless your Strength score equals or exceeds the number with the trait.",
  Herald:
    "Nearly all deities have a specific representative known as a herald; heralds are as diverse in their appearances and abilities as the gods themselves. A creature with the herald type is always unique.",
  Hex: "A hex is a spell caused by your patron's direct attention and intervention. Your patron does not take well to being disturbed repeatedly, so you can cast only one spell that has the hex trait each turn; attempts to use a second automatically fail and usually cause your familiar to hiss in displeasure as your patron rejects your call.",
  Hindering:
    "This armor is so heavy and bulky it slows you down no matter what. You take a -5 penalty to all your Speeds (to a minimum of a 5-foot Speed). This is separate from and in addition to the armor's Speed penalty, and affects you even if your Strength or an ability lets you reduce or ignore the armor's Speed penalty.",
  Hobgoblin:
    "A creature with this trait is a tall, militaristic goblinoid. Hobgoblins tend to have darkvision.",
  z: "Effects with the holy trait are tied to powerful magical forces of benevolence and virtue. They often have stronger effects on unholy creatures. Creatures with this trait are strongly devoted to holy causes and often have weakness to unholy. If a creature with weakness to holy uses a holy item or effect, it takes damage from its weakness.",
  Hryngar:
    "Subterranean kin of the dwarves, hryngars typically have darkvision, resist poison, and recoil from bright light",
  Human:
    "A creature with this trait is a member of the human ancestry. Humans are a diverse array of people known for their adaptability. An ability with this trait can be used or selected only by humans.",
  Humanoid:
    "Humanoid creatures reason and act much like humans. They typically stand upright and have two arms and two legs.",
  Ifrit: "A type of geniekin descended from a being from the Plane of Fire.",
  Ikon: "An item with the ikon trait is a special item provided or created by an exemplar's divinity that is so tied to that exemplar that it can serve as a sacred vessel for their might. You gain three ikons at first level. Each ikon has a passive immanence ability and an activated transcendence ability. A feat with the ikon trait imbues one of your ikons with further capabilities. Whenever you gain a feat with the ikon trait, choose which of your ikons gains that ability; if you have multiple ikons that meet the feat's usage requirements, you can take the feat multiple times to apply its effects to another one of your ikons. These feats list what ikon they can be imbued into, and any number of them can be imbued into a single ikon.",
  Illusion:
    "Effects and magic items with this trait involve false sensory stimuli.",
  Impulse:
    "The primary magical actions kineticists use are called impulses. You can use an impulse only if your kinetic aura is active and channeling that element, and only if you have a hand free to shape the elemental flow. The impulse trait means the action has the concentrate trait unless another ability changes this. If an impulse allows you to choose an element, you can choose any element you're channeling, and the impulse gains that element's trait.",
  Incapacitation:
    "An ability with this trait can take a character completely out of the fight or even kill them, and it's harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell's rank treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.",
  Incarnate:
    "A spell with the incarnate trait is similar in theme to spells that summon creatures, but it doesn't conjure a minion with the summoned trait. Instead, when summoned, the incarnate creature takes its Arrive action when you finish Casting the Spell. At the end of your next turn, the incarnate creature can either Step, Stride, or take the action for another movement type it has (such as Climb or Burrow), and then takes its Depart action. The spell then ends. The names of specific Arrive and Depart actions are listed in italics after the word &quote;Arrive&quote; or &quote;Depart&quote; respectively, along with any traits. A creature summoned by an incarnate spell acts in your interests, directs its effects away from you and your allies as much as possible, and might listen to your requests, but ultimately makes its own decisions. If the spell indicates that the incarnate makes a decision, the GM determines what the incarnate would do. It might even become more inclined to do precisely as you wish over multiple summonings. The incarnate is not fully a creature. It can't take any other actions, nor can it be targeted or harmed by Strikes, spells, or other effects unless they would be able to target or end a spell effect (such as dispel magic). It has a size for the purposes of determining its placement for effects, but it doesn't block movement. If applicable, its effects use your spell DCs and spell attack roll modifier.",
  Incorporeal:
    "An incorporeal creature or object has no physical form. It can pass through solid objects, including walls. When inside an object, an incorporeal creature can't perceive, attack, or interact with anything outside the object, and if it starts its turn in an object, it is slowed 1 until the end of its turn. A corporeal and an incorporeal creature can pass through one another, but they can't end their movement in each other's space. An incorporeal creature can't attempt Strength-based checks against physical creatures or objects—only against incorporeal ones—unless those objects have the ghost touch property rune. Likewise, a corporeal creature can't attempt Strength-based checks against incorporeal creatures or objects. Incorporeal creatures usually have immunity to effects or conditions that require a physical body, like disease, poison, and precision damage. They usually have resistance against all damage (except force damage, spirit damage, and damage from Strikes with the ghost touch property rune), with double the resistance against non-magical damage.",
  Inevitable:
    "These constructed aeons were created by the axiomites. Each type of inevitable is dedicated to a specific task. Most inevitables have weakness to chaotic damage.",
  Infused:
    "An alchemical item with the infused trait has a limited time before it becomes inert. Any non-permanent effects from your infused alchemical items, with the exception of afflictions such as slow-acting poisons, end when you make your daily preparations again.",
  Infusion:
    "Actions with the infusion trait tweak your kineticist impulses. You must use an infusion action directly before the impulse action you want to alter. If you use any action (including free actions and reactions) other than an impulse action directly after, you waste the benefits of the infusion action. Any additional effects added by an infusion action are part of the impulse's effect, not of the infusion action itself.",
  Ingested:
    "An ingested poison is activated by applying it to food or drink to be consumed by a living creature, or by placing it directly into a living creature's mouth. A creature attempts a saving throw against such a poison when it consumes the poison or the food or drink treated with the poison. The onset time of ingested poisons typically ranges anywhere from 1 minute to 1 day.",
  Inhaled:
    "An inhaled poison is activated by unleashing it from its container. Once unleashed, the poison creates a cloud filling a 10-foot cube lasting for 1 minute or until a strong wind dissipates the cloud. Every creature entering this cloud is exposed to the poison and must attempt a saving throw against it; a creature aware of the poison before entering the cloud can use a single action to hold its breath and gain a +2 circumstance bonus to the saving throw for 1 round.",
  Injection:
    "This weapon can be filled with an injury poison. Immediately after a successful attack with the weapon, you can inject the target with the loaded poison with a single Interact action. Refilling the weapon with a new substance requires 3 Interact actions and uses two hands.",
  Injury:
    "An injury poison is activated by applying it to a weapon or ammunition, and it affects the target of the first Strike made using the poisoned item. If that Strike is a success and deals piercing or slashing damage, the target must attempt a saving throw against the poison. On a failed Strike, the target is unaffected, but the poison remains on the weapon and you can try again. On a critical failure, or if the Strike fails to deal slashing or piercing damage for some other reason, the poison is spent but the target is unaffected.",
  Inscribed:
    "The armor or shield has been treated so it can be inscribed with magical symbols using the same method as Crafting a scroll. Inscribed attire can hold one scroll inscribed on it. You need a free hand to Activate the scroll, but you don't need to Interact to draw it. You can also Activate the magic to erase the scroll the armor currently contains. You can't inscribe a new scroll onto the armor if a scroll is currently inscribed on it or if the armor is broken.",
  Integrated:
    "This shield has been created to include a weapon in its construction, which works like an attached weapon but can't be removed from the shield.",
  Intelligent:
    "An item with this trait is intelligent and has its own will and personality, as well as several statistics that most items don't have. Intelligent items can't be crafted by normal means, and they are always rare or unique.",
  Inventor: "This indicates abilities from the inventor class.",
  Invested:
    "A character can invest only 10 magical items that have the invested trait. None of the magical effects of the item apply if the character hasn't invested it, nor can it be activated, though the character still gains any normal benefits from wearing the physical item (like a hat keeping rain off their head).",
  Investigator: "This indicates abilities from the investigator class.",
  Jousting:
    "The weapon is suited for mounted combat with a harness or similar means. When mounted, if you moved at least 10 feet on the action before your attack, add a circumstance bonus to damage for that attack equal to the number of damage dice for the weapon. In addition, while mounted, you can wield the weapon in one hand, changing the damage die to the listed value.",
  Kami: "Kami are spirits of the Material Plane that bond with a specific object or place.",
  Kashrishi:
    "A stout ancestry bearing distinctive crystal horns and inherent psychic abilities.",
  Kholo: "Kholos are humanoids that resemble hyenas.",
  Kickback:
    "A kickback weapon is extra powerful and difficult to use due to its high recoil. A kickback weapon deals 1 additional damage with all attacks. Firing a kickback weapon gives a -2 circumstance penalty to the attack roll, but characters with 14 or more Strength ignore the penalty. Attaching a kickback weapon to a deployed bipod, tripod, or other stabilizer can lower or negate this penalty.",
  Kineticist: "This indicates abilities from the kineticist class.",
  Kitsune: "Shapeshifting humanoids whose true forms resemble foxes.",
  Kobold:
    "A creature with this trait is a member of the kobold ancestry. Kobolds are reptilian humanoids who are usually Small and typically have darkvision.",
  Kovintus:
    "Reclusive humanoids with an inborn talent for geomancy, kovintus have an intrinsic tie to nature and magic alike",
  Laminar:
    "The armor is made up of layered sections, so when it breaks, it isn't as much of a problem. The status penalty to AC if this armor is broken is –1 for broken medium armor, –2 for broken heavy armor, or no penalty for broken light armor.",
  Launching:
    'A mechanism within this shield can shoot projectiles, causing the shield to also function as a ranged weapon. The trait lists the type of weapon, such as "launching dart." Striking with the launcher requires the same number of hands as normal, except that the hand holding the shield counts toward this total, so a one-handed ranged weapon would require only one hand. Reloading takes the normal number of Interact actions, to a minimum of 1 action, and you can\'t use the hand holding your shield to reload.',
  Leshy:
    "A creature with this trait is a member of the leshy ancestry. These small plant or fungus creatures are humanoid in form.",
  Light:
    "Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.",
  Lineage:
    "A feat with this trait indicates a character's descendance from a particular type of creature. You can have only one lineage feat. You can select a lineage feat only at 1st level, and you can't retrain into or out of these feats.",
  Linguistic:
    "An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.",
  Litany:
    "Litanies are special devotion spells, typically used by champions and requiring a single action, that usually give temporary immunity to further litanies.",
  Lizardfolk:
    "Lizardfolk are a family of reptilian humanoids. These reptilian humanoids, also known as iruxi, are extremely adaptable and patient.",
  Lozenge:
    "You Activate an alchemical lozenge by putting it in your mouth. It stays there, slowly dissolving and releasing its ingredients over time. You can bite a lozenge for a secondary effect. The action this takes is noted in the item. As soon as this secondary effect is over, the lozenge is used up and its benefits for you end. You can drink elixirs, potions, and beverages with a lozenge in your mouth, but you can't benefit from more than one lozenge at a time. If you have two lozenges in your mouth at the same time, both become inert. You can also spit out a lozenge as a single action to end its effect and make it inert. A lozenge dissolves due to its alchemical ingredients, so it typically still works even if you don't have saliva.",
  Magical:
    "Something with the magical trait is imbued with magical energies not tied to a specific tradition of magic. Some items or effects are closely tied to a particular tradition of magic. In these cases, the item has the arcane, divine, occult, or primal trait instead of the magical trait. Any of these traits indicate that the item is magical.",
  Magus: "This indicates abilities from the magus class.",
  Manipulate:
    "You must physically manipulate an item or make gestures to use an action with this trait. Creatures without a suitable appendage can't perform actions with this trait. Manipulate actions often trigger reactions.",
  Mechanical: "A hazard with this trait is a constructed physical object.",
  Mental:
    "A mental effect can alter the target's mind. It has no effect on an object or a mindless creature.",
  Merfolk:
    "These aquatic humanoids have an upper body similar to a human and a lower body similar to a fish.",
  Metal:
    "Effects with the metal trait conjure or manipulate metal. Those that manipulate metal have no effect in an area without metal. Creatures with this trait consist primarily of metal or have a connection to magical metal.",
  Mindless:
    "A mindless creature has either programmed or rudimentary mental attributes. Most, if not all, of their mental attribute modifiers are –5. They are immune to all mental effects.",
  Mindshift:
    "An action with this trait can always be altered to use the raw power of your mind. When you take this action, you can choose to replace any damage it deals with mental damage, give it the mental trait, and replace any save it requires with a Will save. The action loses any traits matching damage types it no longer deals.",
  Minion:
    "<p>Minions are creatures that directly serve another creature. Your minion acts on your turn in combat, once per turn, when you spend an action to issue it commands. For an animal companion, you Command an Animal; for a minion that's a spell or magic item effect, like a summoned minion, you Sustain the effect; if not otherwise specified, you issue a verbal command as a single action with the auditory and concentrate traits. If given no commands, minions use no actions except to defend themselves or to escape obvious harm. If left unattended for long enough, typically 1 minute, mindless minions usually don't act, animals follow their instincts, and sapient minions act how they please. You can have a maximum of four minions under your control.</p><p>A minion has only 2 actions and 0 reactions per turn, though certain conditions (such as slowed or quickened) or abilities might give them a reaction that they can use. Alterations to a minion's actions occur when they gain their actions for the round. A minion can't control other creatures.</p>",
  Minotaur:
    "Minotaurs are horned, bovine humanoids with a mastery of mazes and puzzles.",
  Misfortune:
    "A misfortune effect detrimentally alters how you roll your dice. You can never have more than one misfortune effect alter a single roll. If multiple misfortune effects would apply, the GM decides which is worse and applies it. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.",
  Missive:
    "A missive is a piece of magical stationery that must be crafted and composed before it can be activated. All missives have the missive and consumable traits. Missives are often constructed of paper, parchment, or vellum, but any other thin, portable material that can hold writing or embossing upon it can be crafted into missives. After being crafted, the missive is a blank sheet until a message is composed upon it, completing its magic.",
  Modification:
    "A feat with this trait alters the construction of your innovation. If you have the reconfigure class feature, you can retrain such a feat more easily.",
  Modular:
    "The weapon has multiple configurations that you can switch between using an Interact action. Typically, switching between configurations of a modular weapon allows it to deal different types of damage (listed in the trait, such as \"modular B, P, or S\"), though it's possible for a modular weapon's description to list more complicated configurations.",
  Monitor:
    "Creatures that hail from or have a strong connection to Axis, the Boneyard, or the Maelstrom are called monitors. Monitors can survive the basic environmental effects of planes in the Outer Sphere.",
  Monk: "Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.",
  MonkWeapon: "Many monks learn to use these weapons.",
  Morlock:
    "Morlocks are a family of pale, underground-dwelling humanoids who, generations ago, were regular humans.",
  Morph:
    "Effects that slightly alter a creature's form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait). Your morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can't.",
  Mortic:
    "Mortics are living humanoids with close ties to undeath. They have darkvision, negative healing, and vulnerabilities to sacred ground, and they can become undead by holding their breath.",
  Mounted:
    "Mounted siege weapons take up a certain size and space, and typically have statistics to allow them to be attacked. They're used for large-scale warfare.",
  Move: "An action with this trait involves moving from one space to another.",
  Multiclass:
    "Archetypes with the multiclass trait represent diversifying your training into another class's specialties. You can't select a multiclass archetype's dedication feat if you are a member of the class of the same name.",
  Mummy: "A mummy is an undead creature created from a preserved corpse.",
  Munavri:
    "Amicable humanoids living in the Darklands, munavris have powerful telekinetic and psychic abilities.",
  Mutagen:
    "An elixir with the mutagen trait temporarily transmogrifies the subject's body and alters its mind. A mutagen always conveys one or more beneficial effects paired with one or more detrimental effects. Mutagens are polymorph effects, meaning you can benefit from only one at a time.",
  Mutant:
    "The monster has mutated or evolved, granting it unusual benefits, drawbacks, or both.",
  Mythic:
    "Options with this trait grant or utilize mythic power. Feats with the mythic trait can only be taken by mythic characters, who are typically characters with a mythic Calling.</p><p>Monsters with the mythic trait have access to a pool of Mythic Points and are particularly strong for creatures of their level. Many mythic monsters are either resistant or entirely immune to attacks from non-mythic creatures and weapons.</p><p>Spells with the mythic trait require the expenditure of a Mythic Point in order to be cast, and items with the mythic trait require the expenditure of a Mythic Point in order to use their activated abilities.</p><p>Weapons with the mythic trait overcome the resistances and immunities of mythic monsters.",
  Nagaji:
    "A traditionalist ancestry with reptilian features and serpentine heads.",
  Nephilim:
    "A creature with this trait has the nephilim versatile heritage. Nephilim are planar scions descended from immortal beings from other planes. An ability with this trait can be used or selected only by nephilim.",
  Nindoru:
    "Nindorus are chaotic evil fiends that rise from corruptions to the cycle of reincarnating souls and live on the Universe. Although they often have elements in their appearance that make them seem undead, they're actually living beings. Most nindorus have darkvision, are immune to death effects, have weakness to silver, and possess the power to manifest objects or creatures from their thoughts.",
  Noisy:
    "This armor is loud and likely to alert others to your presence when you're using the Avoid Notice exploration activity. The armor's check penalty applies to Stealth checks even if you meet the required Strength score.",
  None: "This trait has no description.",
  Nonlethal:
    "Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a -2 circumstance penalty.",
  Nymph:
    "This family of beautiful fey creatures has strong ties to natural locations.",
  Oath: "Oaths add an additional tenet to your code. You can usually have only one feat with this trait.",
  Occult:
    "This magic comes from the occult tradition, calling upon bizarre and ephemeral mysteries. Anything with this trait is magical. A creature with this trait is primarily constituted of or has a strong connection to occult magic.",
  Oil: "Oils are magical gels, ointments, pastes, or salves that are typically applied to an object and are used up in the process.",
  Olfactory:
    "An olfactory effect can affect only creatures that can smell it. This applies only to olfactory parts of the effect, as determined by the GM.",
  Oni: "Oni are a family of brutal, shapechanging giants who were once kami.",
  Ooze: "Oozes are creatures with simple anatomies. They tend to have low mental attribute modifiers and immunity to mental effects and precision damage.",
  Oracle: "This indicates abilities from the oracle class.",
  Orc: "A creature with this trait is a member of the orc ancestry. These green-skinned people tend to have darkvision. A weapon with this trait is a weapon which orcs craft and use.",
  Oread: "A type of geniekin descended from a being from the Plane of Earth.",
  Overflow:
    "Powerful impulses temporarily overdraw the energy of your kinetic gate. When you use an impulse that has the overflow trait, your kinetic aura deactivates until you revitalize it (typically with Channel Elements). Extinguishing your element this severely is taxing, and consequently, you can use only one overflow impulse per round, even if you reactivate your kinetic gate.",
  Paaridar:
    "A paaridar is a humanoid who has gained physical aspects and abilities of a powerful beast through corrupted magical rituals.",
  Palinthanos:
    "When a cosmic event like Godsrain disturbs all that exists, the River of Souls sometimes flows backward for a brief moment, literally, from the shockwave. Unwilling and confused souls that are forced back far enough can have the agonizing experience of enduring death in reversed time. Some of these souls manage to re-enter the river once the flow returns to normal, but those who are stranded on the metaphorical shores of the living can become palinthanos: powerful undead born from their reversed demise who struggle futilely until their predestined banishment back to the River.",
  Parry:
    "This weapon can be used defensively to block attacks. While wielding this weapon, if your proficiency with it is trained or better, you can spend a single action to position your weapon defensively, gaining a +1 circumstance bonus to AC until the start of your next turn.",
  Peachwood:
    "Peachwood weapons have a particularly auburn tinge to them when under direct sunlight. Peachwood is treated as duskwood for any undead creatures' resistances or weaknesses related to duskwood (allowing a peachwood weapon to bypass a jiang-shi's resistance, for example). In addition, peachwood weapons bypass a small portion of the resistances of any undead creature. Strikes with a peachwood weapon treat an undead's resistances against physical damage as 2 lower for standard-grade peachwood, and 4 lower for high-grade.",
  PersonaFlirt:
    "The public perceives you as the most romantic of the group, and you may be thought of as a seducer or vapid pretender who gets by on their looks and brings nothing of value to the party.",
  PersonaGuardian:
    'The public perceives you as the healer and protector of the group, but some may also consider you too soft-hearted and meek to be a "true hero."',
  PersonaLeader:
    "The public perceives you as the leader of the group, but some likewise consider you too brash or even pompous.",
  PersonaScholar:
    "The public considers you the problem-solver and brains of the group, though some also perceive you as arrogant or incapable of physical tasks.",
  PersonaScoundrel:
    'The public is convinced you are the "bad boy/bad girl" of the group who gets the distasteful but necessary things done, but who is at times thought of as a criminal or potential traitor to the party.',
  PersonaUnderdog:
    'The public perceives you as a "fish out of water"—someone who accidently got swept up by the group and still manages to triumph, but who is sometimes thought of as a weak link or loser.',
  PersonaWarrior:
    "The public believes you are the strong-arm of the group, the person who excels in a fight but is also at times considered cruel, uncouth, or even a bully.",
  PersonaWildcard:
    "The public perceives you as a source of whimsy, outlandish ideas, and comedy in the group, but that reputation is a double-edged sword, as some also consider you a liability or unreliable.",
  Phantom:
    "A phantom is soul that has diverged from the River of Souls on the Ethereal Plane before being judged. They typically retain memories of their life before death but are not undead.",
  Plant:
    "Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.",
  Poison:
    "An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.",
  Polymorph:
    "These effects transform the target into a new form. A target can't be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don't allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry. If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there's doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can't activate any items.",
  Ponderous:
    "The armor has moving parts or other complications that lengthen the wearer's initial reaction time. While wearing the armor, you take a –1 penalty to initiative checks. If you don't meet the armor's required Strength score, this penalty increases to be equal to the armor's check penalty if it's worse.",
  Poppet: "A creature with this trait is a member of the poppet ancestry.",
  Portable:
    "Portable siege weapons, such as battering rams, can be more easily carried and have a role in both warfare and smaller conflicts or exploration.",
  Possession:
    "Effects with this trait allow a creature to project its mind and spirit into a target. A creature immune to mental effects can't use a possession effect. While possessing a target, a possessor's true body is unconscious (and can't wake up normally), unless the possession effect allows the creature to physically enter the target. Whenever the target takes damage, the possessor takes half that amount of damage as mental damage. A possessor loses the benefits of any of its active spells or abilities that affect its physical body, though it gains the benefits of the target's active spells and abilities that affect their body. A possessor can use any of the target's abilities that are purely physical, and it can't use any of its own abilities except spells and purely mental abilities. The GM decides whether an ability is purely physical or purely mental. A possessor uses the target's attack modifier, AC, Fortitude save, Reflex save, Perception, and physical skills, and its own Will save, mental skills, spell attack roll, and spell DC; benefits of invested items apply where relevant (the possessor's invested items apply when using its own values, and the target's invested items apply when using the target's values). A possessor gains no benefit from casting spells that normally affect only the caster, since it isn't in its own body. The possessor must use its own actions to make the possessed creature act. If a possessor reaches 0 Hit Points through any combination of damage to its true body and mental damage from the possession, it is knocked out as normal and the possession immediately ends. If the target reaches 0 Hit Points first, the possessor can either fall unconscious with the body and continue the possession or end the effect as a free action and return to its body. If the target dies, the possession ends immediately and the possessor is stunned for 1 minute.",
  Potion: "A potion is a magical liquid activated when you drink it.",
  Precious:
    "Valuable materials with special properties have the precious trait. They can be substituted for base materials when you Craft items.",
  Prediction:
    "Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.",
  Press:
    "Actions with this trait allow you to follow up earlier attacks. An action with the press trait can be used only if you are currently affected by a multiple attack penalty. You can't use a press action when it's not your turn, even if you use the Ready activity. Some actions with the press trait also grant an effect on a failure. The effects that are added on a failure don't apply on a critical failure. If your press action succeeds, you can choose to apply the failure effect instead. (For example, you may wish to do this when an attack deals no damage due to resistance.)",
  Primal:
    "This magic comes from the primal tradition, connecting to the natural world and instinct. Anything with this trait is magical. A creature with this trait is primarily constituted of or has a strong connection to primal magic.",
  Processed:
    "An alchemical consumable with the processed trait can be created with Quick Alchemy but is too complex to create in a single action.",
  Propulsive:
    "You add half your Strength modifier (if positive) to damage rolls with a propulsive ranged weapon. If you have a negative Strength modifier, you add your full Strength modifier instead.",
  Protean:
    "A family of monitors spawned within the Maelstrom, these creatures are guardians of disorder. They typically have darkvision, an amorphous anatomy, and abilities that create magical warpwaves.",
  Psyche:
    "Your psyche must be unleashed to use abilities that have the psyche trait, and they end automatically when your unleashed psyche subsides.",
  Psychic: "This indicates abilities from the psychic class.",
  Psychopomp:
    "A family of monitors spawned within the Boneyard to convey souls to the Outer Planes. They typically have darkvision, lifesense, and shepherd's touch, and they are immune to death effects.",
  Qlippoth:
    "A family of fiends hailing from the Outer Rifts, most qlippoth are unholy. Their appearance affects the minds of non-qlippoth that view them.",
  Radiation:
    "A dangerous, typically poisonous emission typically originating from radioactive minerals.",
  Rage: "You must be raging to use abilities with the rage trait, and they end automatically when you stop raging.",
  Rakshasa:
    "Rakshasas are divine spirits who exemplify the profane. They can typically Change Shape and have a weakness to holy.",
  Range:
    "These attacks will either list a finite range or a range increment, which follows the normal rules for range increments.",
  RangedTrip:
    "This weapon can be used to Trip with the Athletics skill at a distance up to the weapon's first range increment. The skill check takes a -2 circumstance penalty. You can add the weapon's item bonus to attack rolls as a bonus to the check. As with using a melee weapon to trip, a ranged trip doesn't deal any damage when used to Trip.",
  Ranger: "This indicates abilities from the ranger class.",
  Rare: "This rarity indicates that a rules element is very difficult to find in the game world. A rare feat, spell, item or the like is available to players only if the GM decides to include it in the game, typically through discovery during play. Creatures with this trait are rare. They typically can't be summoned. The DC of Recall Knowledge checks related to these creatures is increased by 5.",
  Ratfolk:
    "A creature with this trait is a member of the ratfolk ancestry. Ratfolk are humanoids who resemble rats.",
  Razing:
    "Razing weapons are particularly good at damaging objects, structures, and vehicles. Whenever you deal damage to an object (including shields and animated objects), structure, or vehicle with a razing weapon, the object takes an amount of additional damage equal to double the number of weapon damage dice.",
  Reach:
    "Natural attacks with this trait can be used to attack creatures up to the listed distance away instead of only adjacent creatures. Weapons with this trait are long and can be used to attack creatures up to 10 feet away instead of only adjacent creatures. For creatures that already have reach with the limb or limbs that wield the weapon, the weapon increases their reach by 5 feet.",
  Reckless:
    "Actions with the reckless trait run the risk of the pilot losing control of a vehicle. When performing a reckless action, the pilot must first attempt an appropriate piloting check to keep control of the vehicle.",
  Recovery:
    "Recovery weapons are thrown weapons designed to return to the thrower when they miss the target. When you make an unsuccessful thrown Strike with this weapon, it flies back to your hand after the Strike is complete, allowing you to try again. If your hands are full when the weapon returns, it falls to the ground in your space.",
  Reincarnated:
    "This ancestry feat is available to any character who has reincarnated at least once, either as part of their backstory or because of a reincarnation that took place during play.",
  Reflection:
    "A creature with this trait has the reflection versatile heritage. Reflections are beings who are copies of living people, whether through cloning, planar duplication, or another mechanism. An ability with this trait can be used or selected only by reflections.",
  Relic: "An item with the relic trait grows in power with its wielder.",
  Reload:
    "While all weapons need some amount of time to get into position, many ranged weapons also need to be loaded and reloaded. This entry indicates how many Interact actions it takes to reload such weapons. This can be 0 if drawing ammunition and firing the weapon are part of the same action. If an item takes 2 or more actions to reload, the GM determines whether they must be performed together as an activity, or you can spend some of those actions during one turn and the rest during your next turn.",
  Repeating:
    "These weapons can't be loaded with individual bolts or bullets like other crossbows and firearms; instead, they require a magazine of specialized ammunition to be loaded into a special slot. Once that magazine is in place, the ammunition is automatically loaded each time the weapon is cocked to fire, reducing its reload to the value in its reload entry (typically 0). When the ammunition runs out, a new magazine must be loaded, which requires a free hand and 3 Interact actions (to remove the old magazine, retrieve the new magazine, and slot the new magazine in place). These actions don't need to be consecutive.",
  Resonant:
    "This weapon can channel energy damage. You gain the Conduct Energy free action while wielding a resonant weapon.",
  Revelation: "Effects with this trait see things as they truly are.",
  Rogue: "This indicates abilities from the rogue class.",
  Saggorak:
    "Ancient dwarven blacksmiths in Saggorak designed a series of spectacularly powerful runes. Only someone with legendary proficiency in Crafting, or a well-versed dwarven crafter from the city of Kovlar, can apply, transfer, or remove a rune with the Saggorak trait. Because of their considerable power, all Saggorak runes take up two property rune slots, and consequently they can be applied only to armor and weapons with at least a +2 potency rune.",
  Sahkil:
    "Sahkils are fiends that delight in spreading fear and unease among mortal creatures. They typically have darkvision, immunity to fear, and weakness to good.",
  Samsaran:
    "Blue-skinned people native to Zi Ha, who reincarnate upon death and recall pieces of their past lives.",
  Sanctified:
    "If you are holy or unholy, your sanctified actions and spells gain the same trait.",
  Scatter:
    "This weapon fires a cluster of pellets in a wide spray. Scatter always has an area listed with it, indicating the radius of the spray. On a hit, the primary target of attacks with a scatter weapon take the listed damage, and the target and all other creatures within the listed radius around it take 1 point of splash damage per weapon damage die.",
  Scroll: "A scroll contains a single spell you can cast without a spell slot.",
  Scrying:
    "A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.",
  SeaDevil:
    "Evil ocean-dwelling humanoids, sea devils usually have darkvision and wavesense.",
  Secret: "The GM rolls the check for this ability in secret.",
  Sedacthy:
    "Ocean-dwelling humanoids who communicate with sea life and usually have darkvision and wavesense.",
  Serpentfolk: "Serpentfolk are a family of serpentine humanoids.",
  Shabti:
    "A shabti is a constructed humanoid originally meant to face judgment for a living creature's sins after death.",
  Shade:
    "Shades are mortal souls who have been judged and then transformed into creatures native to other planes. Petitioners can survive the basic environmental effects of their home plane.",
  Shadow: "This magic involves shadows or the energy of the Netherworld.",
  ShieldThrow:
    "A shield with this trait is designed to be thrown as a ranged attack.",
  Shisk: "Secretive humanoids covered in bony plumage that reside underground.",
  Shoony: "A creature with this trait is a member of the shoony ancestry.",
  Shove:
    "You can use this weapon to Shove with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Shove using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  Skeleton:
    "This undead is made by animating a dead creature's skeleton with void energy. An ability with this trait can be used or selected only by skeletons.",
  Skelm:
    "These creatures are monstrous, wrathful misanthropes who seek to control others through anger and spite.",
  Skill:
    "A general feat with the skill trait improves your skills and their actions or gives you new actions for a skill. A feat with this trait can be selected when a class grants a skill feat or general feat. Archetype feats with the skill trait can be selected in place of a skill feat if you have that archetype's dedication feat.",
  Skulk:
    "Skulks are a family of humanoids whose skin can shift coloration to aid in stealth.",
  Sleep: "This effect can cause a creature to fall asleep or get drowsy.",
  Snare:
    "Traps typically made by rangers, snares follow special rules that allow them to be constructed quickly and used on the battlefield.",
  Social:
    "Actions and abilities with the social trait can be used only while a vigilante is in their social identity.",
  Sonic:
    "An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage.",
  Sorcerer: "This indicates abilities from the sorcerer class.",
  Soulbound:
    "These constructs are mentally augmented by a fragment of a once-living creature's soul.",
  Spellgun:
    "The spellgun trait appears on items that can generate a magical effect that flies out like a bullet. You can make either a spell attack roll with a spellgun or a ranged attack roll using your proficiency with simple firearms. Spellguns have a range increment, which applies regardless of which type of attack roll you make. Though you can use your modifier for simple firearms, a spellgun isn't actually a firearm. You don't get the damage of a firearm Strike, nor other benefits like critical specialization. Similarly, you can't load or reload a spellgun, affix talismans to one, make a spellgun Strike as part of an action that lets you make a firearm Strike, and so on.",
  Spellheart:
    "Spellhearts are permanent items that work similarly to talismans. You affix a spellheart using the Affix a Spellheart activity, which is otherwise identical to Affix a Talisman. The limit of one talisman per item remains—an item can have one spellheart or one talisman, not both. When casting a cantrip from a spellheart, you can use your own spell attack roll or spell DC if it's higher. Crafting a spellheart requires the spells the spellheart can cast. For example, a major five-feather wreath requires air walk, gale blast, and wall of wind.",
  Spellshape:
    "Spellshape actions tweak the properties of your spells. You must use a spellshape action directly before casting the spell you want to alter. If you use any action (including free actions and reactions) other than casting a spell directly after, you waste the benefits of the spellshape action. The benefit is also lost if your turn ends before you cast the spell. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself.",
  Spirit:
    "Effects with this trait can affect creatures with spiritual essence and might deal spirit damage. A creature with this trait is defined by its spiritual essence. Spirit creatures often lack a material form.",
  Splash:
    "Some weapons and effects, such as alchemical bombs, have the splash trait. When you use a weapon or effect with the splash trait, you don't add your Strength modifier to the damage roll. A splash weapon or effect deals any listed splash damage to the target on a failure, success, or critical success, and to all other creatures within 5 feet of the target on a success or critical success. On a critical failure, the weapon or effect misses entirely, dealing no damage. Add splash damage together with the initial damage against the target before applying the target's resistance or weakness. You don't multiply splash damage on a critical hit.",
  Splash10:
    "When you use a thrown weapon with the splash trait, you don't add your Strength modifier to the damage roll. If an attack with a splash weapon fails, succeeds, or critically succeeds, all creatures within 10 feet of the target (including the target) take the listed splash damage. On a failure (but not a critical failure), the target of the attack still takes the splash damage. Add splash damage together with the initial damage against the target before applying the target's weaknesses or resistances. You don't multiply splash damage on a critical hit.",
  Spriggan:
    "Kin to gnomes, spriggans tend to be evil and can grow in size to resemble giants.",
  Sprite:
    "A family of diminutive winged fey with a strong connection to primal magic.",
  Staff:
    "This magic item holds spells of a particular theme and allows a spellcaster to cast additional spells by preparing the staff.",
  Stance:
    "A stance is a general combat strategy that you enter by using an action with the stance trait, and that you remain in for some time. A stance lasts until you get knocked out, until its requirements (if any) are violated, until the encounter ends, or until you enter a new stance, whichever comes first. After you use an action with the stance trait, you can't use another one for 1 round. You can enter or be in a stance only in encounter mode.",
  Steam:
    "Items with this trait are powered by engines that boil water to produce steam and move their components.",
  Stheno: "Stheno are humanoids related to medusas, with snakes for hair.",
  Strix: "Winged humanoids, most of whom live in and around Cheliax.",
  Structure:
    "A spell, item activation, or ability with the structure trait creates a magical building or other structure. The structure must be created on a plot of land free of other structures. The structure adapts to the natural terrain, adopting the structural requirements for being built there. The structure adjusts around small features such as ponds or spires of rock, but it can't be created on water or other nonsolid surfaces. If created on snow, sand dunes, or other soft surfaces with a solid surface underneath, the structure's foundation (if any) reaches the solid ground. If the structure is on a solid but unstable surface, such as a swamp or an area plagued by tremors, roll a @Check[flat|dc:3] each day; on a failure, the structure begins to sink or collapse.</p><p>The structure doesn't harm creatures within the area when it appears, and it can't be created within a crowd or in a densely populated area. Any creature inadvertently caught inside the structure when it's created ends up unharmed inside the complete structure and always has a clear path of escape. A creature inside the structure when the effect ends isn't harmed, and it lands harmlessly on the ground if it was on an upper level of the structure",
  SubjectiveGravity:
    "All bodies of mass can be centers of gravity with the same force, but only if a non-mindless creature wills it. Unattended items, objects, and mindless creatures treat the plane as having microgravity. Creatures on a plane with subjective gravity can move normally along a solid surface by imagining &quote;down&quote; near their feet. Designating this downward direction is a free action that has the concentration trait. If suspended in midair, a creature can replicate flight by choosing a &quote;down&quote; direction and falling in that direction, moving up to their Speed or fly Speed. This pseudo-flight uses the Fly action.",
  Subtle:
    "A spell with the subtle trait can be cast without incantations and doesn't have obvious manifestations.",
  Suli: "Sulis are planar scions descended from jann.",
  Surki:
    "Surkis are a subterranean insectile ancestry that absorb ambient magic and evolve unique adaptations.",
  Summon:
    "Spells with the summon trait can conjure creatures, typically ones with a particular trait. Such creatures can be found in Monster Core and similar books. Unless noted otherwise, the creature must be common, it gains the summoned trait, and it must appear in an unoccupied space in range large enough to contain it. The highest level of creature the spell can summon depends on the rank of the spell, as listed below. The spell can still summon a creature of a lower level if you so choose. These rules apply only to spells that have the summon trait; other spells that call or conjure items or beings but that don't have the trait, like summon instrument, work as explained in the spell.",
  Summoned:
    "A creature called by a spell or effect gains the summoned trait. A summoned creature can't summon other creatures, create things of value, or cast spells that require a cost. It has the minion trait. If it tries to Cast a Spell of equal or higher rank than the spell that summoned it, it overpowers the summoning magic, causing its own spell to fail and the summon spell to end. Otherwise, the summoned creature uses the standard abilities for a creature of its kind. It generally attacks your enemies to the best of its ability. If you can communicate with it, you can attempt to command it, but the GM determines the degree to which it follows your commands. Immediately when you finish Casting the Spell, the summoned creature uses its 2 actions for that turn. A spawn or other creature generated from a summoned creature returns to its unaltered state (usually a corpse in the case of spawn) once the summoned creature is gone. If it's unclear what this state would be, the GM decides. Summoned creatures can be banished by various spells and effects. They are automatically banished if reduced to 0 Hit Points or if the spell that called them ends.",
  Summoner: "This indicates abilities from the Summoner class.",
  Swashbuckler: "This indicates abilities from the Swashbuckler class.",
  Swarm:
    "A swarm is a mass or cloud of creatures that functions as one monster. Its size entry gives the size of the entire mass, though for most swarms the individual creatures that make up that mass are Tiny. A swarm can occupy the same space as other creatures and must do so in order to use its damaging action. A swarm typically has weakness to effects that deal damage over an area (like area spells and splash weapons). Swarms are immune to the grappled, prone, and restrained conditions.",
  Sweep:
    "This weapon makes wide sweeping or spinning attacks, making it easier to attack multiple enemies. When you attack with this weapon, you gain a +1 circumstance bonus to your attack roll if you already attempted to attack a different target this turn using this weapon.",
  Sylph: "A type of geniekin descended from a being from the Plane of Air.",
  Talisman:
    "A talisman is a small object affixed to armor, a shield, or a weapon (called the affixed item). You must be wielding or wearing an item to activate a talisman attached to it. Once activated, a talisman burns out permanently.",
  Talos: "Taloses are planar scions descended from zuhras.",
  Tandem:
    "Actions with this trait involve you and your eidolon acting in concert. You can't use a tandem action if either you or your eidolon can't act, if you haven't Manifested your Eidolon, or if you've Manifested your Eidolon in a way where it isn't a separate entity (such as with the Meld into Eidolon feat). Tandem actions often let both you and your eidolon take separate actions, but these must be actions taken separately by you and your eidolon; you can't use a tandem action to take another tandem action.",
  Tane: "The Tane are powerful creatures created eons ago by the Eldest of the First World. All of the Tane treat whatever plane they happen to be on as their home plane.",
  Tanggal:
    "This family of cannibalistic aberrations consists of various humanoid-shaped creatures that can separate their body into two pieces while hunting.",
  Tattoo:
    "A tattoo is a type of item that is drawn or cut into a creature's skin and usually takes the form of images or symbols.",
  Tea: "<p>Magic tea is a type of potion. It activates when you drink it, which uses it up. Magic tea has the potion and tea traits. When you craft a dose of magic tea, the raw materials you supply are in the form of unusual and costly tea leaves. The process of crafting magic tea includes infusing the leaves with magical reagents, purifying the water, and steeping the tea in the water, resulting in what's essentially a particularly delicious-tasting potion. You can activate magic tea with an Interact action as you drink it or feed it to another creature, as if it were a potion. You can also activate magic tea with a 10-minute activity that requires sterling tea ware (these artisan's tools can be shared by up to four people who take this activity simultaneously) to prepare the tea and then consume it or present it to someone during a short tea ceremony, after which the magic tea's effects begin; activating magic tea in this way enhances its effect, as detailed in each entry's Tea Ceremony.</p><p>Once you drink a dose of magic tea, you're temporarily immune to that particular type of magic tea for 24 hours.</p>",
  Tearing:
    "This weapon is edged with curved teeth that leave bleeding wounds. When you hit a creature with this weapon, it deals an additional 1 persistent bleed damage. This increases to 2 persistent bleed damage if the weapon has a greater striking rune.",
  Tech: "Items with the tech trait can be crafted by anyone, but if they also have the magical trait, they are hybrid items and require the Machine Magic feat to craft.",
  Telepathy:
    "A creature with telepathy can communicate mentally with creatures. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would.",
  Teleportation:
    "Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.",
  Tengu:
    "A creature with this trait is a member of the tengu ancestry. Tengus are humanoids who resemble crows. An ability with this trait can be used or selected only by tengus. An item with this trait is created and used by tengus.",
  Tethered:
    "This weapon is attached to a length of rope or chain that allows you to retrieve it after it has left your hand. If you have a free hand (including if you've just thrown a two-handed tethered weapon and have a hand holding nothing but the weapon's tether), you can use an Interact action to pull the weapon back into your grasp after you have thrown it as a ranged attack or after it has been disarmed (unless it's being held by another creature).",
  Thaumaturge: "This indicates abilities from the thaumaturge class.",
  Thrown:
    "You can throw this weapon as a ranged attack. A thrown weapon adds your Strength modifier to damage just like a melee weapon does. When this trait appears on a melee weapon, it also includes the range increment.",
  Titan:
    "Titans are enormous, primordial creatures of neargodlike power who predate the mortal races.",
  Training:
    "A training weapon is designed to be used when training an animal to participate in combat by identifying the target for the animal to attack. Striking a creature with a training weapon gives your animal companion or your bonded animal a +1 circumstance bonus to its next attack roll against that target.",
  Transcendence:
    "Transcendence channels the might of an exemplar's divine spark through one of their ikons to surpass the mortal and enact a miraculous deed. Each ikon has an action with the transcendence trait, and using it is called Sparking Transcendence. To use the action, your divine spark must be empowering that ikon and you must have the ikon ready to use (typically holding a weapon ikon or wearing a worn ikon). Immediately after you Spark Transcendence, your divine spark is forcefully ejected from that ikon, coming to rest in another ikon of your choice. You can Spark Transcendence only once each round. As it comes from your divine spark, a transcendence action has the divine trait.",
  Trap: "A hazard or item with this trait is constructed to hinder interlopers.",
  Trip: "You can use this weapon to Trip with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Trip using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure.",
  Troll:
    "Trolls are giant, brutish creatures and are well known for transforming into inanimate materials.",
  Troop:
    "A troop is an organized collection of component creatures, typically Small or Medium in size, working as a cohesive whole. Over the course of enough attacks and downed comrades, troops shrink in size. A troop typically has the troop defenses and troop movement abilities, and most troops have weaknesses to area damage and splash damage. Because they consist of multiple discrete creatures, they can't be summoned.",
  TrueName:
    "Certain spells, feats, and items have the true name trait. This trait means they require you to know a creature's true name to use them.",
  Twin: "These weapons are used as a pair, complementing each other. When you attack with a twin weapon, you add a circumstance bonus to the damage roll equal to the weapon's number of damage dice if you have previously attacked with a different weapon of the same type this turn. The weapons must be of the same type to benefit from this trait, but they don't need to have the same runes.",
  TwoHand:
    "This weapon can be wielded with two hands. Doing so changes its weapon damage die to the indicated value. This change applies to all the weapon's damage dice, such as those from striking runes.",
  Unarmed:
    "An unarmed attack uses your body rather than a manufactured weapon. An unarmed attack isn't a weapon, though it's categorized with weapons for weapon groups, and it might have weapon traits. Since it's part of your body, an unarmed attack can't be Disarmed. It also doesn't take up a hand, though a fist or other grasping appendage follows the same rules as a free-hand weapon.",
  Uncommon:
    "Something of uncommon rarity requires special training or comes from a particular culture or part of the world. Some character choices give access to uncommon options, and the GM can choose to allow access for anyone. Less is known about uncommon creatures than common creatures. They typically can't be summoned. The DC of Recall Knowledge checks related to these creature is increased by 2.",
  Undead:
    "Once living, these creatures were infused after death with void energy and soul-corrupting unholy magic. When reduced to 0 Hit Points, an undead creature is destroyed. Undead creatures are damaged by vitality energy and are healed by void energy, and don't benefit from healing vitality effects.",
  Undine: "A type of geniekin descended from a being from the Plane of Water.",
  Unholy:
    "Effects with the unholy trait are tied to powerful magical forces of cruelty and sin. They often have stronger effects on holy creatures. Creatures with this trait are strongly devoted to unholy causes, and often have weakness to holy. If a creature with weakness to unholy uses an unholy item or effect, it takes damage from its weakness.",
  Unique:
    "A rules element with this trait is one-of-a-kind. The DC of Recall Knowledge checks related to creatures with this trait is increased by 10.",
  Unstable:
    "Unstable actions rely on experimental functions of your innovation that even you can't fully predict. After an unstable action is used on an innovation, using another one is dangerous.",
  Urdefhan:
    "Urdefhans are humanoids who have pacts with daemons, have transparent skin, and drink blood.",
  Vampire:
    "Undead creatures who thirst for blood, vampires are notoriously versatile and hard to destroy.",
  Vanara:
    "An inquisitive ancestry with primate-like features and prehensile tails.",
  Vehicular:
    "A vehicular weapon is attached to a vehicle or worn by a mount and can typically only be wielded by the driver of the vehicle or the mount's primary rider. The driver or rider can control a vehicular weapon with the same hands they use to steer the vehicle or guide the mount. A vehicular weapon can be Disarmed by knocking the controls (typically reins for a mount or a steering device for a vehicle) out of the wielder's hands.",
  Velstrac:
    "A family of fiends from the Shadow Plane that are associated with pain and agony. All velstracs possess some form of disturbing gaze.",
  Venomous:
    "These weapons inject poison into every hit. When you hit a creature with this weapon, it deals an additional 1 persistent poison damage. This increases to 2 persistent poison damage if the weapon has a greater striking rune.",
  Versatile:
    "A versatile weapon can be used to deal a different type of damage than that listed in the Damage entry. This trait indicates the alternate damage type. For instance, a piercing weapon that is versatile S can be used to deal piercing or slashing damage. You choose the damage type each time you make an attack.",
  Vigilante:
    "Your class feats and vigilante feats are associated with your vigilante identity, and using them while in your social identity may risk exposing you as a vigilante. If your identity is exposed to the public, you lose the benefits of Vigilante Dedication to disguising yourself, but you can spend 1 week of downtime to create a new social identity.",
  Virulent:
    "Afflictions with the virulent trait are harder to remove. You must succeed at two consecutive saves to reduce a virulent affliction's stage by 1. A critical success reduces a virulent affliction's stage by only 1 instead of by 2.",
  Vishkanya: "An ancestry with snake-like features and powerful venom.",
  Visual:
    "A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.",
  Vitality:
    "Effects with this trait heal living creatures with energy from the Forge of Creation, deal vitality energy damage to undead, or manipulate vitality energy.",
  Void: "Effects with this trait heal undead creatures with void energy, deal void damage to living creatures, or manipulate void energy.",
  Volley:
    "This ranged weapon is less effective at close distances. Your attacks against targets that are at a distance within the range listed take a -2 penalty.",
  Wand: "A wand contains a single spell which you can cast once per day.",
  Wandering:
    "Wandering identifies animist feats attuned to particular types of apparitions. These feats require you to have attuned to an apparition who matches their prerequisites when you select them, and represent knowledge and ability pulled from that specific bond. When you make your daily preparations, you can retrain any wandering feat you know for any other wandering feat available at the level you took the exchanged feat (including lower-level wandering feats, as usual). You must meet all the new feat's other prerequisites.",
  Water:
    "Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a connection to magical water.",
  Wayang:
    "Small people native to the Netherworld. Immigrated to Golarion after Earthfall.",
  Werecreature:
    "These shapechanging creatures can shift between animal, humanoid, and hybrid forms.",
  Whetstone:
    "A whetstone is a magically enhanced consumable item designed to increase a weapon's effectiveness",
  Wight:
    "A wight is an undead creature that drains life and stands vigil over a burial site.",
  WildHunt:
    "Creatures with the wild hunt trait are never below 14th level. They possess greater darkvision, greensight, planar acclimation, wild gaze, instinctive cooperation, weakness to cold iron, the ability to speak with plants and animals, and their own specific wild hunt link.",
  Witch: "This indicates abilities from the witch class.",
  Wizard: "This indicates abilities from the wizard class.",
  Wraith:
    "A wraith is an incorporeal undead creature infused with void energy and driven by a hatred of all life.",
  Wood: "Effects with the wood trait conjure or manipulate wood. Those that manipulate wood have no effect in an area without wood. Creatures with this trait consist primarily of wood or have a connection to magical wood.",
  Wyrwood:
    "A wyrwood is a small, sapient living construct crafted of wood and powered with an aeon stone or a similar magical stone.",
  Xulgath:
    "These subterranean reptilian creatures tend to have darkvision and smell awful.",
  Zombie:
    "These undead are mindless rotting corpses that hunger for living flesh.",
};

function getIsTraitRarity(trait) {
  return (
    trait.toLowerCase().trim().startsWith("uncommon") ||
    trait.toLowerCase().trim().startsWith("common") ||
    trait.toLowerCase().trim().startsWith("rare") ||
    trait.toLowerCase().trim().startsWith("unqiue")
  );
}

// Helper function to convert PascalCase to readable format with spaces
function formatTraitName(name) {
  return name.replace(/([A-Z])/g, " $1").trim();
}

function getTraitToolTip(value) {
  // If no value is provided, return empty string
  if (!value) return "";

  // Format all trait names in the traitDescriptions object
  const formattedTraitDescriptions = {};
  for (const [key, value] of Object.entries(traitDescriptions)) {
    formattedTraitDescriptions[formatTraitName(key)] = value;
  }

  // Function to find a trait that starts with the given value
  function findTraitStartingWith(value) {
    if (!value) return null;

    // Convert keys to an array and find a match
    const keys = Object.keys(traitDescriptions);
    return keys.find((key) => value.startsWith(key));
  }

  // First, check if the exact value exists in the original trait descriptions
  if (traitDescriptions[value]) {
    return traitDescriptions[value];
  }

  // Try to find a trait that the value starts with (for cases like "Deadly d8")
  const matchingTrait = findTraitStartingWith(value);
  if (matchingTrait) {
    return traitDescriptions[matchingTrait];
  }

  // If no match is found in the original descriptions, check the formatted descriptions
  if (formattedTraitDescriptions[value]) {
    return formattedTraitDescriptions[value];
  }

  // If still no match, return the value itself
  return value;
}

// Function to get all traits as options for dropdown
function getTraitOptions() {
  // Get all trait keys from traitDescriptions
  const traitKeys = Object.keys(traitDescriptions);

  // Format options similar to getLocations function
  return [
    ...traitKeys.map((trait) => ({
      value: trait,
      label: formatTraitName(trait),
    })),
  ];
}

// Function to get all languages as options for dropdown
function getLanguageOptions() {
  return [
    // Common Languages
    { value: "Taldane", label: "Taldane (Common)" },
    { value: "Razatlani", label: "Razatlani (Common)" },
    { value: "Sakvroth", label: "Sakvroth (Common)" },
    { value: "Fey", label: "Fey (Common)" },
    { value: "Common", label: "Common (Common)" },
    { value: "Draconic", label: "Draconic (Common)" },
    { value: "Dwarven", label: "Dwarven (Common)" },
    { value: "Elven", label: "Elven (Common)" },
    { value: "Gnomish", label: "Gnomish (Common)" },
    { value: "Goblin", label: "Goblin (Common)" },
    { value: "Halfling", label: "Halfling (Common)" },
    { value: "Jotun", label: "Jotun (Common)" },
    { value: "Orcish", label: "Orcish (Common)" },
    { value: "Tanuki", label: "Tanuki (Common)" },
    { value: "Wayang", label: "Wayang (Common)" },
    { value: "Yaksha", label: "Yaksha (Common)" },
    { value: "Iblydosi", label: "Iblydosi (Common)" },

    // Uncommon Languages
    { value: "Alghollthu", label: "Alghollthu (Uncommon)" },
    { value: "Amurrun", label: "Amurrun (Uncommon)" },
    { value: "Arboreal", label: "Arboreal (Uncommon)" },
    { value: "Boggard", label: "Boggard (Uncommon)" },
    { value: "Caligni", label: "Caligni (Uncommon)" },
    { value: "Cyclops", label: "Cyclops (Uncommon)" },
    { value: "Daemonic", label: "Daemonic (Uncommon)" },
    { value: "Iruxi", label: "Iruxi (Uncommon)" },
    { value: "Protean", label: "Protean (Uncommon)" },
    { value: "Requian", label: "Requian (Uncommon)" },
    { value: "Sphinx", label: "Sphinx (Uncommon)" },
    { value: "Utopian", label: "Utopian (Uncommon)" },
    { value: "Anadi", label: "Anadi (Uncommon)" },
    { value: "Tengu", label: "Tengu (Uncommon)" },
    { value: "Azlanti", label: "Azlanti (Uncommon)" },
    { value: "Strix", label: "Strix (Uncommon)" },
    { value: "Thassilonian", label: "Thassilonian (Uncommon)" },
    { value: "Garundi", label: "Garundi (Uncommon)" },
    { value: "Erutaki", label: "Erutaki (Uncommon)" },
    { value: "Varki", label: "Varki (Uncommon)" },
    { value: "Shoony", label: "Shoony (Uncommon)" },
    { value: "Destrachan", label: "Destrachan (Uncommon)" },
    { value: "D'ziriak", label: "D'ziriak (Uncommon)" },
    { value: "Jistkan", label: "Jistkan (Uncommon)" },
    { value: "Jyoti", label: "Jyoti (Uncommon)" },
    { value: "Ysoki", label: "Ysoki (Uncommon)" },
    { value: "Adlet", label: "Adlet (Uncommon)" },
    { value: "Girtablilu", label: "Girtablilu (Uncommon)" },
    { value: "Calda", label: "Calda (Uncommon)" },
    { value: "Ekujae", label: "Ekujae (Uncommon)" },
    { value: "Kibwani", label: "Kibwani (Uncommon)" },
    { value: "Lirgeni", label: "Lirgeni (Uncommon)" },
    { value: "Mzunu", label: "Mzunu (Uncommon)" },
    { value: "Ocotan", label: "Ocotan (Uncommon)" },
    { value: "Xanmba", label: "Xanmba (Uncommon)" },
    { value: "Anugobu", label: "Anugobu (Uncommon)" },
    { value: "Kitsune", label: "Kitsune (Uncommon)" },
    { value: "Nagaji", label: "Nagaji (Uncommon)" },
    { value: "Muan", label: "Muan (Uncommon)" },
    { value: "Petran", label: "Petran (Uncommon)" },
    { value: "Pyric", label: "Pyric (Uncommon)" },
    { value: "Sussuran", label: "Sussuran (Uncommon)" },
    { value: "Talican", label: "Talican (Uncommon)" },
    { value: "Thalassic", label: "Thalassic (Uncommon)" },
    { value: "Chthonian", label: "Chthonian (Uncommon)" },
    { value: "Empyrean", label: "Empyrean (Uncommon)" },
    { value: "Diabolic", label: "Diabolic (Uncommon)" },
    { value: "Minkaian", label: "Minkaian (Uncommon)" },
    { value: "Kholo", label: "Kholo (Uncommon)" },
    { value: "Aklo", label: "Aklo (Uncommon)" },
    { value: "Necril", label: "Necril (Uncommon)" },
    { value: "Shadowtongue", label: "Shadowtongue (Uncommon)" },
    { value: "Hallit", label: "Hallit (Uncommon)" },
    { value: "Kelish", label: "Kelish (Uncommon)" },
    { value: "Mwangi", label: "Mwangi (Uncommon)" },
    { value: "Osiriani", label: "Osiriani (Uncommon)" },
    { value: "Shoanti", label: "Shoanti (Uncommon)" },
    { value: "Skald", label: "Skald (Uncommon)" },
    { value: "Tien", label: "Tien (Uncommon)" },
    { value: "Varisian", label: "Varisian (Uncommon)" },
    { value: "Vudrani", label: "Vudrani (Uncommon)" },
    { value: "Tripkee", label: "Tripkee (Uncommon)" },

    // Rare Languages
    { value: "Androffan", label: "Androffan (Rare)" },
    { value: "Grioth", label: "Grioth (Rare)" },
    { value: "Kovintal", label: "Kovintal (Rare)" },
    { value: "Mi-Go", label: "Mi-Go (Rare)" },
    { value: "Munavri", label: "Munavri (Rare)" },
    { value: "Samsaran", label: "Samsaran (Rare)" },
    { value: "Sasquatch", label: "Sasquatch (Rare)" },
    { value: "Shae", label: "Shae (Rare)" },
    { value: "Vanara", label: "Vanara (Rare)" },
    { value: "Vishkanyan", label: "Vishkanyan (Rare)" },
    { value: "Yithian", label: "Yithian (Rare)" },
    { value: "Rasu", label: "Rasu (Rare)" },
    { value: "Goloma", label: "Goloma (Rare)" },
    { value: "Shisk", label: "Shisk (Rare)" },
    { value: "Arcadian", label: "Arcadian (Rare)" },
    { value: "Wyrwood", label: "Wyrwood (Rare)" },
    { value: "Minatan", label: "Minatan (Rare)" },
    { value: "Wayang", label: "Wayang (Rare)" },
    { value: "Senzar", label: "Senzar (Rare)" },
    { value: "Jistka", label: "Jistka (Rare)" },
    { value: "Akitonian", label: "Akitonian (Rare)" },
    { value: "Formian", label: "Formian (Rare)" },
    { value: "Ikeshti", label: "Ikeshti (Rare)" },
    { value: "Shobhad", label: "Shobhad (Rare)" },
    { value: "Hwan", label: "Hwan (Rare)" },
    { value: "Okaiyan", label: "Okaiyan (Rare)" },
    { value: "Drooni", label: "Drooni (Rare)" },
    { value: "Ancient Osiriani", label: "Ancient Osiriani (Rare)" },
    { value: "Kashrishi", label: "Kashrishi (Rare)" },
    { value: "Vishkanya", label: "Vishkanya (Rare)" },
    { value: "Ratajin", label: "Ratajin (Rare)" },
    { value: "Elder Thing", label: "Elder Thing (Rare)" },
    { value: "Orvian", label: "Orvian (Rare)" },
    { value: "Surki", label: "Surki (Rare)" },
    { value: "Lashunta", label: "Lashunta (Rare)" },

    // Secret Languages
    { value: "Wildsong", label: "Wildsong (Secret)" },
  ];
}

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

  // Ensure value is a string for regex operations
  if (typeof value !== "string") {
    value = String(value || "");
  }

  // Case for 'Half Level' or 'Half Character Level'
  const matchHalfLevel =
    value.match(/[Hh]alf [Cc]haracter [Ll]evel/) ||
    value.match(/[Hh]alf [Ll]evel/);
  const matchCharacterLevel =
    value.match(/[Cc]haracter [Ll]evel/) || value.match(/[Ll]evel/);
  if (matchHalfLevel) {
    // Minimum of 1 if half level is 0
    value = value.replaceAll(
      matchHalfLevel[0],
      String(
        Math.max(
          1,
          Math.floor(parseInt(thisRecord?.data?.level || "1", 10) / 2)
        )
      )
    );
  } else if (matchCharacterLevel) {
    // Minimum of 1
    value = value.replaceAll(
      matchCharacterLevel[0],
      String(Math.floor(parseInt(thisRecord?.data?.level || "1", 10)))
    );
  }

  // Case for Strength|Dexterity|Constitution|Wisdom|Intelligence|Charisma
  const matchModifier = value.match(
    /[Ss]trength|[Dd]exterity|[Cc]onstitution|[Ww]isdom|[Ii]ntelligence|[Cc]harisma/
  );
  if (matchModifier) {
    let attribute = "str";
    if (matchModifier[0].toLowerCase().includes("dexterity")) {
      attribute = "dex";
    } else if (matchModifier[0].toLowerCase().includes("constitution")) {
      attribute = "con";
    } else if (matchModifier[0].toLowerCase().includes("wisdom")) {
      attribute = "wis";
    } else if (matchModifier[0].toLowerCase().includes("intelligence")) {
      attribute = "int";
    } else if (matchModifier[0].toLowerCase().includes("charisma")) {
      attribute = "cha";
    }
    const attributeMod = parseInt(
      thisRecord?.data?.[`${attribute}`] || "0",
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

  // For effects we also need to check those that include -circumstance, -item, -status,
  // so make a new array to include those
  const allTypes = [...types];
  for (const type of allTypes) {
    if (type.endsWith("Penalty") || type.endsWith("Bonus")) {
      allTypes.push(`${type}-circumstance`);
      allTypes.push(`${type}-item`);
      allTypes.push(`${type}-status`);
    }
  }

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
      let bonusPenaltyType = "none";

      // For effects, we get the modifierType from the suffix, if it ends with -circumstance, -item, or -status
      if (ruleType.endsWith("-circumstance")) {
        bonusPenaltyType = "circumstance";
      } else if (ruleType.endsWith("-item")) {
        bonusPenaltyType = "item";
      } else if (ruleType.endsWith("-status")) {
        bonusPenaltyType = "status";
      }

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
            type: bonusPenaltyType,
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
            type: bonusPenaltyType,
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
            type: bonusPenaltyType,
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

  // Collect all modifiers from ancestry and class features
  const ancestries = target?.data?.ancestries || [];
  for (const ancestry of ancestries) {
    features.push(...(ancestry.data?.features || []));
  }
  const heritages = target?.data?.heritages || [];
  for (const heritage of heritages) {
    features.push(...(heritage.data?.features || []));
  }
  const classes = target?.data?.classes || [];
  for (const classObj of classes) {
    features.push(...(classObj.data?.features || []));
  }

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
      const bonusPenaltyType = modifier.data?.modifierType || "none";
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
          type: bonusPenaltyType,
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

  // TODO - fix for pf2e Special case for armor, if this is a stealth check
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

  if (allTypes && allTypes.length > 0) {
    results = results.filter((r) => allTypes.includes(r.modifierType));
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

  // For the roll, we need only count 1 status / item / circumstance bonus or penalty,
  // and we take the highest of each
  const filteredResults = [];
  const bonusGroups = { circumstance: [], item: [], status: [] };
  const penaltyGroups = { circumstance: [], item: [], status: [] };

  // Group results by type and bonus/penalty
  results.forEach((result) => {
    if (result.type === "none") {
      // Keep non-typed modifiers as-is
      filteredResults.push(result);
      return;
    }

    const isPenalty = result.modifierType.toLowerCase().includes("penalty");
    const groups = isPenalty ? penaltyGroups : bonusGroups;

    if (groups[result.type]) {
      groups[result.type].push(result);
    }
  });

  // For each type, keep only the highest value
  Object.keys(bonusGroups).forEach((type) => {
    if (bonusGroups[type].length > 0) {
      const highestBonus = bonusGroups[type].reduce((highest, current) =>
        (current.value || 0) > (highest.value || 0) ? current : highest
      );
      filteredResults.push(highestBonus);
    }

    if (penaltyGroups[type].length > 0) {
      const highestPenalty = penaltyGroups[type].reduce((highest, current) =>
        (current.value || 0) < (highest.value || 0) ? current : highest
      );
      filteredResults.push(highestPenalty);
    }
  });

  // Replace results with filtered results
  results = filteredResults;

  // Filter by appliedById if provided
  if (appliedById) {
    results = results.filter((r) => r.appliedBy === appliedById);
  }

  return results;
}

/**
 * Returns all Pathfinder 2e skills with their associated ability scores
 */
function getPathfinderSkills() {
  return {
    Acrobatics: "dex",
    Arcana: "int",
    Athletics: "str",
    Crafting: "int",
    Deception: "cha",
    Diplomacy: "cha",
    Intimidation: "cha",
    Medicine: "wis",
    Nature: "wis",
    Occultism: "int",
    Performance: "cha",
    Religion: "wis",
    Society: "int",
    Stealth: "dex",
    Survival: "wis",
    Thievery: "dex",
  };
}

// Call this function after adding a talent/feature or equipping an item
function updateAllAttributes(record, callback = undefined) {
  const attributes = ["str", "dex", "con", "int", "wis", "cha"];
  const valuesToSet = {};

  // First recalculate the ability scores based on base values and total mods
  attributes.forEach((attribute) => {
    // Get the base value and total modifier
    const baseValue =
      record.data?.[`base${capitalize(attribute)}`] ||
      record.data?.[attribute] ||
      0;
    const totalMod = record.data?.[`total${capitalize(attribute)}Mod`] || 0;

    // Calculate the actual attribute value
    const calculatedValue = parseInt(baseValue, 10) + parseInt(totalMod, 10);

    // Update the attribute if it's different from the current value
    if (calculatedValue !== parseInt(record.data?.[attribute] || 0, 10)) {
      valuesToSet[`data.${attribute}`] = calculatedValue;
    }

    // Now calculate the modifiers and other derived values
    updateAttribute({
      record,
      attribute,
      value: calculatedValue,
      moreValuesToSet: valuesToSet,
    });
  });

  if (Object.keys(valuesToSet).length > 0) {
    api.setValuesOnRecord(record, valuesToSet, callback);
  }
}

function updateAttribute({
  record,
  attribute,
  value,
  moreValuesToSet = undefined,
}) {
  const valuesToSet = {};

  const val = parseInt(value, 10);
  if (isNaN(val)) {
    return;
  }

  // Get the current total modifier for this attribute
  const totalMod =
    record.data?.[`total${capitalize(attribute)}Mod`] !== undefined
      ? parseInt(record.data?.[`total${capitalize(attribute)}Mod`], 10)
      : 0;

  // Calculate the base value by subtracting the total modifier from the new value
  const baseValue = val - parseInt(totalMod, 10);

  // Store the base value
  valuesToSet[`data.base${capitalize(attribute)}`] = baseValue;

  // Get hitpoints max modifiers
  const hitpointsMaxMods = getEffectsAndModifiersForToken(record, [
    "hitpoints",
  ]);
  const extraHitpoints = hitpointsMaxMods.reduce((acc, mod) => {
    return acc + parseInt(mod.value || 0, 10);
  }, 0);

  // If this was constitution, update hitpoints
  if (attribute === "con") {
    // hitpoints = CON MOD + hp rolled at each level (min 1)
    const conMod = value;
    // Hit Points in PF2e is Ancestry HP + (Class HP + Con Mod)*Level
    const ancestryHp = record.data?.ancestries?.[0]?.data?.hp || 0;
    const classHp = record.data?.classes?.[0]?.data?.hp || 0;
    const level = record.data?.level || 0;
    const totalHp = extraHitpoints + ancestryHp + (conMod + classHp) * level;
    valuesToSet[`data.hitpoints`] = totalHp;
    // If curhp is not set, set it to hitpoints
    if (record.data?.curhp === undefined) {
      valuesToSet[`data.curhp`] = totalHp;
    }
  }

  // You can carry an amount of Bulk equal to 5 plus your Strength modifier without penalty
  let strength = parseInt(record.data?.str || 0, 10);
  if (attribute === "str") {
    strength = value;
  }
  valuesToSet[`data.bulk`] = 5 + strength;

  // AC = 10 + your Dexterity modifier. Wearing armor changes your AC.
  // TODO GET BEST ARMOR
  // const bestArmor = getBestArmor(record);
  // PLACEHOLDER
  const bestArmor = {
    ac: 10,
    addDex: false,
    shield: 0,
    shieldName: "",
    armorType: "",
  };
  let ac = Math.max(10, bestArmor.ac);
  let dexterity = record.data?.dex || 0;
  if (attribute === "dex") {
    dexterity = value;
  }
  // AC = 10 + your Dexterity modifier. Wearing armor changes your AC.
  if (bestArmor.addDex) {
    ac += dexterity;
  }
  if (bestArmor.shield) {
    ac += bestArmor.shield;
  }
  const acBonus = getEffectsAndModifiersForToken(
    record,
    ["armorClassBonus", "armorClassPenalty"],
    "all"
  );
  const armorModsSet = new Set();
  acBonus.forEach((modifier) => {
    if (!armorModsSet.has(JSON.stringify(modifier))) {
      ac += modifier.value;
      armorModsSet.add(JSON.stringify(modifier));
    }
  });
  // Also get the armor type bonuses
  if (bestArmor.armorType) {
    const armorTypeBonus = getEffectsAndModifiersForToken(
      record,
      ["armorClassBonus", "armorClassPenalty"],
      bestArmor.armorType
    );
    armorTypeBonus.forEach((modifier) => {
      if (!armorModsSet.has(JSON.stringify(modifier))) {
        ac += modifier.value;
        armorModsSet.add(JSON.stringify(modifier));
      }
    });
  }
  // Also get the shield bonus
  if (bestArmor.shieldName) {
    const shieldBonus = getEffectsAndModifiersForToken(
      record,
      ["armorClassBonus", "armorClassPenalty"],
      "Shield"
    );
    shieldBonus.forEach((modifier) => {
      if (!armorModsSet.has(JSON.stringify(modifier))) {
        ac += modifier.value;
        armorModsSet.add(JSON.stringify(modifier));
      }
    });
  }
  valuesToSet[`data.ac`] = ac;

  // If moreValuesToSet is provided, add it to the valuesToSet else call API directly
  if (moreValuesToSet) {
    Object.keys(valuesToSet).forEach((key) => {
      moreValuesToSet[key] = valuesToSet[key];
    });
  } else {
    api.setValuesOnRecord(record, valuesToSet);
  }
}

// This function is called after adding/editing a talent/feature or equipping an item
function onAddEditFeature(record, callback = undefined) {
  // Check for ability score bonuses
  const abilityScoreBonus = getEffectsAndModifiersForToken(record, [
    "attributeBonus",
    "attributePenalty",
  ]);

  const valuesToSet = {};

  // Initialize total modifier values for each ability
  const attributes = ["str", "dex", "con", "int", "wis", "cha"];

  // Reset all total mods to 0 first
  attributes.forEach((attribute) => {
    valuesToSet[`data.total${capitalize(attribute)}Mod`] = 0;
  });

  // Calculate the total modifier for each ability
  abilityScoreBonus.forEach((modifier) => {
    const ability = modifier.field || "";
    if (ability && attributes.includes(ability)) {
      const currentTotalMod =
        valuesToSet[`data.total${capitalize(ability)}Mod`] || 0;
      valuesToSet[`data.total${capitalize(ability)}Mod`] =
        currentTotalMod + modifier.value;
    } else if (ability === "all") {
      attributes.forEach((attribute) => {
        const currentTotalMod =
          valuesToSet[`data.total${capitalize(attribute)}Mod`] || 0;
        valuesToSet[`data.total${capitalize(attribute)}Mod`] =
          currentTotalMod + modifier.value;
      });
    }
  });

  attributes.forEach((attribute) => {
    const baseValue =
      record.data?.[`base${capitalize(attribute)}`] ||
      record.data?.[attribute] ||
      0;
    const totalMod = valuesToSet[`data.total${capitalize(attribute)}Mod`] || 0;
    valuesToSet[`data.${attribute}`] =
      parseInt(baseValue, 10) + parseInt(totalMod, 10);
  });

  // Check for sense bonuses
  const senseBonus = getEffectsAndModifiersForToken(record, ["sense"]);
  const currentSenses = record.data?.senses || "";

  senseBonus.forEach((modifier) => {
    const sense = modifier.value || modifier.field || "";
    if (sense && !currentSenses.includes(sense)) {
      let newSenses = currentSenses;

      // If the new sense is Darkvision, replace any existing Low-Light vision
      if (sense.toLowerCase() === "darkvision") {
        newSenses = currentSenses.replace(/low-light/gi, "Darkvision");
      }

      // Append new sense with comma if there are existing senses
      if (newSenses && !newSenses.includes(sense)) {
        newSenses = `${newSenses}, ${sense}`;
      } else if (!newSenses) {
        newSenses = sense;
      }

      valuesToSet[`data.senses`] = newSenses;
    }
  });

  // Check for Resistence, Weakness, Immunity
  const resistanceBonus = getEffectsAndModifiersForToken(record, [
    "resistance",
  ]);
  const weaknessBonus = getEffectsAndModifiersForToken(record, ["weakness"]);
  const immunityBonus = getEffectsAndModifiersForToken(record, ["immunity"]);
  const resistances = [];
  const weaknesses = [];
  const immunities = [];

  resistanceBonus.forEach((modifier) => {
    const field = modifier.field || "";
    const resistance = modifier.value || modifier.field || "";
    resistances.push(resistance);
  });

  weaknessBonus.forEach((modifier) => {
    const weakness = modifier.value || modifier.field || "";
    weaknesses.push(weakness);
  });

  immunityBonus.forEach((modifier) => {
    const immunity = modifier.value || modifier.field || "";
    immunities.push(immunity);
  });
  if (
    JSON.stringify(resistances) !==
    JSON.stringify(record.data?.resistances || [])
  ) {
    valuesToSet[`data.resistances`] = resistances;
  }
  if (
    JSON.stringify(weaknesses) !== JSON.stringify(record.data?.weaknesses || [])
  ) {
    valuesToSet[`data.weaknesses`] = weaknesses;
  }
  if (
    JSON.stringify(immunities) !== JSON.stringify(record.data?.immunities || [])
  ) {
    valuesToSet[`data.immunities`] = immunities;
  }

  if (Object.keys(valuesToSet).length > 0) {
    api.setValuesOnRecord(record, valuesToSet, (recordUpdated) => {
      updateAllAttributes(recordUpdated, callback);
    });
  } else {
    updateAllAttributes(record, callback);
  }
}

// Add languages to the character or npc
function setLanguages(languages) {
  const recordDataPath = getNearestParentDataPath(dataPath);

  // Set the traits list to the values within traitsList
  const languageList = [];
  for (const language of languages) {
    // Strip rarity information from parentheses if present
    const cleanLanguageName = language.replace(/\s*\([^)]*\)$/, "");

    languageList.push({
      _id: generateUuid(),
      name: cleanLanguageName,
      identified: true,
      data: {
        description: `Can speak the ${cleanLanguageName} language.`,
      },
    });
  }

  const valuesToSet = {
    [`${recordDataPath}${recordDataPath ? "." : ""}data.languagesList`]:
      languageList,
  };

  api.setValues(valuesToSet);
}

// Sets the traits for the record
function setTraits(traits) {
  const recordDataPath = getNearestParentDataPath(dataPath);

  // Set the traits list to the values within traitsList
  const traitsObjects = [];
  for (const trait of traits) {
    traitsObjects.push({
      _id: generateUuid(),
      name: trait,
      identified: true,
      data: {},
    });
  }

  const valuesToSet = {
    [`${recordDataPath}${recordDataPath ? "." : ""}data.traitsList`]:
      traitsObjects,
  };

  api.setValues(valuesToSet);
}
