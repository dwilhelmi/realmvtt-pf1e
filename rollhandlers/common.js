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

  // Function to normalize a trait name by removing spaces and hyphens (to match camelCase keys)
  function normalizeTraitName(name) {
    return name.replace(/[\s\-]+/g, "");
  }

  // Function to find a trait that starts with the given value
  function findTraitStartingWith(value) {
    if (!value) return null;

    // Normalize the incoming value to remove spaces and hyphens
    const normalizedValue = normalizeTraitName(value);

    // Convert keys to an array and find a match
    const keys = Object.keys(traitDescriptions);
    return keys.find((key) => normalizedValue.startsWith(key));
  }

  // First, check if the exact value exists in the original trait descriptions
  if (traitDescriptions[value]) {
    return traitDescriptions[value];
  }

  // Try to find a trait that the value starts with (for cases like "Deadly d8" or "Two Hand d10")
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
  const match = duration.match(/(\d+)\s+(round|minute|hour|day|week)s?/i);
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

function getLabelForAbility(ability) {
  if (ability === "str") {
    return "Strength";
  } else if (ability === "dex") {
    return "Dexterity";
  } else if (ability === "con") {
    return "Constitution";
  } else if (ability === "wis") {
    return "Wisdom";
  } else if (ability === "int") {
    return "Intelligence";
  } else if (ability === "cha") {
    return "Charisma";
  }
  return ability;
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

  // Replace Foundry-style @actor.level with actual level
  const actorLevel = parseInt(thisRecord?.data?.level || "1", 10);
  value = value.replaceAll("@actor.level", String(actorLevel));

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
      String(Math.max(1, Math.floor(actorLevel / 2)))
    );
  } else if (matchCharacterLevel) {
    // Minimum of 1
    value = value.replaceAll(matchCharacterLevel[0], String(actorLevel));
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

  // Process formulas: ternary() and comparison functions
  // This handles expressions like: ternary(lt(@actor.level, 5), 1, 2)
  value = evaluateFormula(value);

  return value;
}

// Helper function to evaluate formulas
function evaluateFormula(formula) {
  if (typeof formula !== "string") {
    return formula;
  }

  // Keep evaluating until no more functions are found
  let previousFormula = "";
  let iterations = 0;
  const maxIterations = 50; // Prevent infinite loops

  while (formula !== previousFormula && iterations < maxIterations) {
    previousFormula = formula;
    iterations++;

    // Evaluate comparison functions: lt, lte, gt, gte, eq, ne
    // lt(a, b) - less than
    formula = formula.replace(/lt\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA < numB ? "1" : "0";
    });

    // lte(a, b) - less than or equal
    formula = formula.replace(/lte\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA <= numB ? "1" : "0";
    });

    // gt(a, b) - greater than
    formula = formula.replace(/gt\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA > numB ? "1" : "0";
    });

    // gte(a, b) - greater than or equal
    formula = formula.replace(/gte\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA >= numB ? "1" : "0";
    });

    // eq(a, b) - equal
    formula = formula.replace(/eq\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA === numB ? "1" : "0";
    });

    // ne(a, b) - not equal
    formula = formula.replace(/ne\(([^,]+),\s*([^)]+)\)/g, (_match, a, b) => {
      const numA = parseFloat(a.trim());
      const numB = parseFloat(b.trim());
      return numA !== numB ? "1" : "0";
    });

    // Evaluate ternary: ternary(condition, trueValue, falseValue)
    // We need to handle nested ternaries by finding matching parentheses
    const ternaryMatch = findTernary(formula);
    if (ternaryMatch) {
      const { start, end, condition, trueValue, falseValue } = ternaryMatch;
      const conditionNum = parseFloat(condition.trim());
      // In Foundry, any non-zero value is true
      const result = conditionNum !== 0 ? trueValue.trim() : falseValue.trim();
      formula = formula.substring(0, start) + result + formula.substring(end);
    }
  }

  return formula;
}

// Helper function to find and parse a ternary expression with proper parenthesis matching
function findTernary(str) {
  const ternaryIndex = str.indexOf("ternary(");
  if (ternaryIndex === -1) return null;

  const startIndex = ternaryIndex;
  let pos = ternaryIndex + 8; // Position after "ternary("
  let parenDepth = 1;
  let commaPositions = [];

  // Find commas at depth 1 (not inside nested parentheses)
  while (pos < str.length && parenDepth > 0) {
    const char = str[pos];
    if (char === "(") {
      parenDepth++;
    } else if (char === ")") {
      parenDepth--;
      if (parenDepth === 0) break;
    } else if (char === "," && parenDepth === 1) {
      commaPositions.push(pos);
    }
    pos++;
  }

  // We need exactly 2 commas for ternary(condition, trueValue, falseValue)
  if (commaPositions.length !== 2 || parenDepth !== 0) {
    return null;
  }

  const conditionStart = ternaryIndex + 8;
  const conditionEnd = commaPositions[0];
  const trueValueStart = commaPositions[0] + 1;
  const trueValueEnd = commaPositions[1];
  const falseValueStart = commaPositions[1] + 1;
  const falseValueEnd = pos;
  const endIndex = pos + 1; // Include the closing paren

  return {
    start: startIndex,
    end: endIndex,
    condition: str.substring(conditionStart, conditionEnd),
    trueValue: str.substring(trueValueStart, trueValueEnd),
    falseValue: str.substring(falseValueStart, falseValueEnd),
  };
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

// In this call we look for effects that are relevant to the caller and the target for damage rolls
function getDamageEffectsForTarget(ourToken, target) {
  if (!target) {
    return [];
  }

  let results = [];

  // Get effects that are relevant to the target
  // damageTargetBonus is for damage bonuses to attacks specific to the target
  // and the token that applied the effect
  const effectsToCheck = ["damageTargetBonus"];

  const damageEffects = getEffectsAndModifiersForToken(
    target, // Look for effects on this target
    effectsToCheck, // that match damageTargetBonus
    "", // field is irrelevant
    undefined, // itemId is irrelevant
    ourToken?._id // appliedById is the caller
  );

  damageEffects.forEach((r) => {
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
  const feats = target?.data?.feats || [];
  const bonusFeats = target?.data?.bonusFeats || [];
  features.push(...feats);
  features.push(...bonusFeats);
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
    // Only push class features that are <= our level
    const level = target?.data?.level || 0;
    const classFeatures = classObj.data?.features || [];
    classFeatures.forEach((feature) => {
      const featureLevel = feature.data?.level || 0;
      if (featureLevel <= level) {
        features.push(feature);
      }
    });
  }

  // Filter items that are not equipped or that require investment and not invested
  // Helper function to check if an item requires investment
  const requiresInvestment = (item) => {
    const traits = item.data?.traits || [];
    return traits.map((trait) => trait.toLowerCase()).includes("invested");
  };

  const equippedItems = items.filter(
    (item) =>
      item.data?.carried === "equipped" &&
      (!requiresInvestment(item) || item.data?.invested === "true")
  );
  [...features, ...equippedItems].forEach((feature) => {
    const modifiers = feature.data?.modifiers || [];
    const toggleable = feature.data?.toggleable || false;
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
          // If toggleable is true, make all modifiers inactive by default
          active: toggleable ? false : modifier.data?.active === true,
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

  // Add modifiers for armor penalties and runes
  const bestArmor = getBestEquippedArmor(target);
  const checkPenalty = getCheckPenaltyForArmor(target, bestArmor);
  const resilientBonus = getResilientArmorBonus(target, bestArmor);
  if (checkPenalty) {
    results.push(...checkPenalty);
  }
  if (resilientBonus) {
    results.push(...resilientBonus);
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
    acrobatics: "dex",
    arcana: "int",
    athletics: "str",
    crafting: "int",
    deception: "cha",
    diplomacy: "cha",
    intimidation: "cha",
    medicine: "wis",
    nature: "wis",
    occultism: "int",
    performance: "cha",
    religion: "wis",
    society: "int",
    stealth: "dex",
    survival: "wis",
    thievery: "dex",
  };
}

function getAllSkillOptions() {
  return [
    { label: "Acrobatics", value: "acrobatics" },
    { label: "Arcana", value: "arcana" },
    { label: "Athletics", value: "athletics" },
    { label: "Crafting", value: "crafting" },
    { label: "Deception", value: "deception" },
    { label: "Diplomacy", value: "diplomacy" },
    { label: "Intimidation", value: "intimidation" },
    { label: "Medicine", value: "medicine" },
    { label: "Nature", value: "nature" },
    { label: "Occultism", value: "occultism" },
    { label: "Performance", value: "performance" },
    { label: "Religion", value: "religion" },
    { label: "Society", value: "society" },
    { label: "Stealth", value: "stealth" },
    { label: "Survival", value: "survival" },
    { label: "Thievery", value: "thievery" },
  ];
}

// Call this function after adding a talent/feature or equipping an item
function updateAllAttributes(record, callback = undefined) {
  const attributes = ["str", "dex", "con", "int", "wis", "cha"];
  const valuesToSet = {};

  // Use the existing ability scores to update derived values
  attributes.forEach((attribute) => {
    // Get the current ability score (already calculated from boosts + mods)
    const currentValue = parseInt(record.data?.[attribute] || 0, 10);

    // Calculate the modifiers and other derived values using the current score
    updateAttribute({
      record,
      attribute,
      value: currentValue,
      moreValuesToSet: valuesToSet,
    });
  });

  if (Object.keys(valuesToSet).length > 0) {
    api.setValuesOnRecord(record, valuesToSet, callback);
  }
}

function useItem() {
  // Deduct count by 1, delete item if count is 0,
  // and output the description to Chat
  // If it is a scoll with a spell set, output a link to the spell
  const itemDataPath = dataPath.replace(".data.useBtn", "");
  const itemName = api.getValue(`${itemDataPath}.name`);
  const itemCount = api.getValue(`${itemDataPath}.data.count`);
  const indexValue = parseInt(itemDataPath.split(".").pop());
  const isConsumable = api.getValue(`${itemDataPath}.data.consumable`) || false;

  // Output the description to Chat
  const description = api.getValue(`${itemDataPath}.data.description`) || "";
  const effects = api.getValue(`${itemDataPath}.data.effects`) || [];
  const healing = api.getValue(`${itemDataPath}.data.healing`);
  const damage = api.getValue(`${itemDataPath}.data.useDamage`);
  const portrait = encodeURI(api.getValue(`${itemDataPath}.portrait`));
  const itemIcon = portrait
    ? `![${itemName}](${assetUrl}${portrait}?width=40&height=40) `
    : "";
  const itemDescription = api.richTextToMarkdown(description || "");
  let markdownDescription = `
#### ${itemIcon}${itemName}

---
${itemDescription}
`;

  let recordLinks;
  const spell = api.getValue(`${itemDataPath}.data.spell`);
  if (spell) {
    const spellName = JSON.parse(spell)?.name || "";
    const spellId = JSON.parse(spell)?._id || "";
    if (spellId) {
      recordLinks = [
        {
          tooltip: spellName,
          type: "records",
          value: {
            _id: spellId,
            recordType: "spells",
          },
        },
      ];
    }
  }

  // If we're using a potion with an effect or healing, add the buttons
  if (effects) {
    // Create macros for all effects that this action can apply
    let effectButtons = getEffectMacrosFor(effects);

    markdownDescription += `\n${effectButtons}`;
  }

  if (healing) {
    const escapedName = itemName.replace(/'/g, "\\'");
    const escapedHealing = healing.replace(/'/g, "\\'");
    const healingButton = `\`\`\`Roll_Healing
api.promptRoll('${escapedName} Healing', '${escapedHealing}', [], {}, 'healing')
\`\`\``;
    markdownDescription += `\n${healingButton}`;
  }

  if (damage) {
    const escapedName = itemName.replace(/'/g, "\\'");
    const escapedDamage = damage.replace(/'/g, "\\'");
    const damageButton = `\`\`\`Roll_Damage
api.promptRoll('${escapedName} Damage', '${escapedDamage}', [], {}, 'damage')
\`\`\``;
    markdownDescription += `\n${damageButton}`;
  }

  api.sendMessage(markdownDescription, undefined, recordLinks);

  // If consumable, deduct count by 1, delete item if count is 0
  if (isConsumable) {
    const count = parseFloat(itemCount || "0");
    if (count - 1 > 0) {
      api.setValue(`${itemDataPath}.data.count`, count - 1);
    } else if (!isNaN(indexValue)) {
      api.removeValue(`data.inventory`, indexValue);
    }
  }
}

function onItemInvested() {
  const itemDataPath = dataPath.replace(".data.invested", "");
  const item = api.getValue(itemDataPath);
  const valuesToSet = {};

  // TODO UPDATE FOR PF2E
  // updateAttributes(item, valuesToSet);

  if (Object.keys(valuesToSet).length > 0) {
    api.setValues(valuesToSet);
  }
}

// Returns the proper fields object for the given item
function getItemFields(item) {
  const traits = item.data?.traits || [];
  const hasInvestedTrait = traits
    .map((trait) => trait.toLowerCase())
    .includes("invested");
  const hasConsumableTrait = traits
    .map((trait) => trait.toLowerCase())
    .includes("consumable");
  const isConsumable = item.data?.type === "consumable" || hasConsumableTrait;
  const hasUseBtn = item.data?.hasUseBtn || false;
  const isTwoHanded = item.data?.usage === "held-in-two-hands";
  const isThrown = traits
    .map((trait) => trait.toLowerCase())
    .includes("thrown"); // Only thrown weapons can be toggled melee/range
  const isMelee = (item.data?.range || 0) === 0; // Melee shown only melee icon
  const hasVersatilePiercingProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile p");
  const hasVersatileBludgeoningProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile b");
  const hasVersatileSlashingProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile s");

  // If we have any of the versatile properties, we need to show the toggle for the
  // primary damage type
  const hasVersatile =
    hasVersatilePiercingProperty ||
    hasVersatileBludgeoningProperty ||
    hasVersatileSlashingProperty;
  const versatileFields = {
    versatilePiercing: { hidden: !hasVersatilePiercingProperty },
    versatileBludgeoning: { hidden: !hasVersatileBludgeoningProperty },
    versatileSlashing: { hidden: !hasVersatileSlashingProperty },
  };
  if (hasVersatile) {
    const itemDamageType = item.data?.damage?.damageType || "";
    if (itemDamageType === "bludgeoning") {
      versatileFields.versatileBludgeoning = { hidden: false };
    } else if (itemDamageType === "piercing") {
      versatileFields.versatilePiercing = { hidden: false };
    } else if (itemDamageType === "slashing") {
      versatileFields.versatileSlashing = { hidden: false };
    }
  }

  const requiresReload = (item.data?.reload || 0) > 0;

  return {
    invested: { hidden: !hasInvestedTrait },
    useBtn: { hidden: !isConsumable && !hasUseBtn },
    handBtn: { hidden: isTwoHanded },
    rangeToggleBtn: { hidden: !(isMelee && isThrown) },
    rangeToggleBtnDisabled: { hidden: isMelee },
    meleeToggleBtnDisabled: { hidden: !isMelee || (isMelee && isThrown) },
    ammoFields: { hidden: isMelee && !isThrown },
    ammo: { hidden: isMelee && !isThrown },
    reloadBtn: { hidden: !requiresReload },
    loadedAmmo: { hidden: !requiresReload },
    ammoSelect: { hidden: isMelee || isThrown },
    ...versatileFields,
  };
}

// On the given, item, and valuesToSet, set the items fields as needed
function setItemFields(item, itemDataPath, valuesToSet) {
  const itemFields = item.fields || {};
  const traits = item.data?.traits || [];
  const hasInvestedTrait = traits
    .map((trait) => trait.toLowerCase())
    .includes("invested");
  const hasConsumableTrait = traits
    .map((trait) => trait.toLowerCase())
    .includes("consumable");
  const isConsumable = item.data?.type === "consumable" || hasConsumableTrait;
  const hasUseBtn = item.data?.hasUseBtn || false;
  const isTwoHanded = item.data?.usage === "held-in-two-hands";
  const isThrown = traits
    .map((trait) => trait.toLowerCase())
    .includes("thrown"); // Only thrown weapons can be toggled melee/range
  const isMelee = (item.data?.range || 0) === 0; // Melee shown only melee icon
  const hasVersatilePiercingProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile p");
  const hasVersatileBludgeoningProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile b");
  const hasVersatileSlashingProperty = traits
    .map((trait) => trait.toLowerCase())
    .includes("versatile s");

  const requiresReload = (item.data?.reload || 0) > 0;

  // Set properties - only set hidden to false when needed (to unhide)
  if (hasInvestedTrait && itemFields?.invested?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.invested.hidden`] = false;
  }
  if ((isConsumable || hasUseBtn) && itemFields?.useBtn?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.useBtn.hidden`] = false;
  }
  if (!isTwoHanded && itemFields?.handBtn?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.handBtn.hidden`] = false;
  }
  // Show toggle button only for melee throwing weapons
  if (isMelee && isThrown && itemFields?.rangeToggleBtn?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.rangeToggleBtn.hidden`] = false;
  }
  // Hide disabled range button for melee weapons or when toggle is showing
  if (!isMelee && itemFields?.rangeToggleBtnDisabled?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.rangeToggleBtnDisabled.hidden`] = false;
  }
  // Hide disabled melee button for ranged weapons or thrown melee weapons
  if (
    isMelee &&
    !isThrown &&
    itemFields?.meleeToggleBtnDisabled?.hidden !== false
  ) {
    valuesToSet[`${itemDataPath}.fields.meleeToggleBtnDisabled.hidden`] = false;
  }
  if (
    (!isMelee || isThrown) &&
    (itemFields?.ammo?.hidden !== false ||
      itemFields?.ammoFields?.hidden !== false)
  ) {
    valuesToSet[`${itemDataPath}.fields.ammoFields.hidden`] = false;
    valuesToSet[`${itemDataPath}.fields.ammo.hidden`] = false;
  }
  // Reload fields
  if (requiresReload && itemFields?.reloadBtn?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.reloadBtn.hidden`] = false;
  }
  if (requiresReload && itemFields?.loadedAmmo?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.loadedAmmo.hidden`] = false;
  }
  if (!isMelee && itemFields?.ammoSelect?.hidden !== false) {
    valuesToSet[`${itemDataPath}.fields.ammoSelect.hidden`] = false;
  }

  if (isThrown && item.data?.count !== item.data?.ammo) {
    valuesToSet[`${itemDataPath}.data.ammo`] = item.data?.count;
  }

  // Versatile fields
  if (
    hasVersatilePiercingProperty &&
    itemFields?.versatilePiercing?.hidden !== false
  ) {
    valuesToSet[`${itemDataPath}.fields.versatilePiercing.hidden`] = false;
  }
  if (
    hasVersatileBludgeoningProperty &&
    itemFields?.versatileBludgeoning?.hidden !== false
  ) {
    valuesToSet[`${itemDataPath}.fields.versatileBludgeoning.hidden`] = false;
  }
  if (
    hasVersatileSlashingProperty &&
    itemFields?.versatileSlashing?.hidden !== false
  ) {
    valuesToSet[`${itemDataPath}.fields.versatileSlashing.hidden`] = false;
  }

  const hasVersatile =
    hasVersatilePiercingProperty ||
    hasVersatileBludgeoningProperty ||
    hasVersatileSlashingProperty;

  // Also set the fields for the versatile properties
  if (hasVersatile) {
    const itemDamageType = item.data?.damage?.damageType || "";
    if (
      itemDamageType === "bludgeoning" &&
      itemFields?.versatileBludgeoning?.hidden !== false
    ) {
      valuesToSet[`${itemDataPath}.fields.versatileBludgeoning.hidden`] = false;
    } else if (
      itemDamageType === "piercing" &&
      itemFields?.versatilePiercing?.hidden !== false
    ) {
      valuesToSet[`${itemDataPath}.fields.versatilePiercing.hidden`] = false;
    } else if (
      itemDamageType === "slashing" &&
      itemFields?.versatileSlashing?.hidden !== false
    ) {
      valuesToSet[`${itemDataPath}.fields.versatileSlashing.hidden`] = false;
    }
  }
}

function onItemEquipped() {
  const itemDataPath = dataPath.replace(".data.carried", "");
  const item = api.getValue(itemDataPath);

  // Some items add/remove effects when equipped
  const equipEffect = api.getValue(`${itemDataPath}.data.equipEffect`);
  const isEquipEffect = value === "equipped";

  if (equipEffect) {
    const effect = JSON.parse(equipEffect);
    const effectId = effect?._id || "";
    const ourToken = api.getToken();
    if (effectId && isEquipEffect && ourToken) {
      api.addEffectById(effectId, ourToken);
    } else if (effectId && !isEquipEffect && ourToken) {
      api.removeEffectById(effectId, ourToken);
    }
  }

  // If an item's equipped status changes, we need to recalculate the total bulk
  // and update any bonuses such as AC if it's a piece of armor
  const valuesToSet = {};
  const totalBulk = updateTotalBulk(record, false);
  if (totalBulk !== record?.data?.totalBulk) {
    valuesToSet["data.totalBulk"] = totalBulk;
  }

  // Update the fields to show/hide the correct buttons on attack list
  // based on type incase it changed
  setItemFields(item, itemDataPath, valuesToSet);

  if (Object.keys(valuesToSet).length > 0) {
    api.setValues(valuesToSet, (recordUpdated) => {
      // Update attributes as needed
      onAddEditFeature(recordUpdated, undefined, true);
    });
  } else {
    onAddEditFeature(record, undefined, true);
  }
}

// Gets the AC for an armor item
function getACForArmor(item) {
  let ac = item?.data?.acBonus || 0;
  // Check for potency runes
  const potencyRune = parseInt(item?.data?.runes?.potency || 0, 10);
  ac += potencyRune;
  return ac;
}

// Gets the best equipped armor for the context of the current PC
function getBestEquippedArmor(record) {
  // Get the current ac due to armor
  let bestEquippedArmor = {
    armor: {
      armorId: null,
      armorIndex: null,
      acBonus: 0,
      dexCap: 10, // Unarmored, just set cap to 10
      strength: null,
      checkPenalty: null,
      speedPenalty: null,
      armorCategory: "unarmored",
      group: "",
    },
    shield: {
      shieldId: null,
      shieldIndex: null,
      acBonus: 0,
      hardness: 0,
      hp: {
        value: 0,
        max: 0,
      },
      speedPenalty: null,
    },
  };

  const items = record?.data?.inventory || [];
  items.forEach((item, index) => {
    if (item.data?.carried === "equipped" && item.data?.type === "armor") {
      const ac = getACForArmor(item);
      const dexCap = item?.data?.dexCap ? item?.data?.dexCap : 0;
      if (ac > bestEquippedArmor.armor.acBonus) {
        bestEquippedArmor.armor.acBonus = ac;
        bestEquippedArmor.armor.dexCap = dexCap;
        bestEquippedArmor.armor.checkPenalty = item?.data?.checkPenalty;
        bestEquippedArmor.armor.speedPenalty = item?.data?.speedPenalty;
        bestEquippedArmor.armor.strength = item?.data?.strength;
        bestEquippedArmor.armor.armorId = item?._id;
        bestEquippedArmor.armor.armorIndex = index;
        bestEquippedArmor.armor.armorCategory = (
          item?.data?.itemCategory || "unarmored"
        ).toLowerCase();
        bestEquippedArmor.armor.group = (item?.data?.group || "").toLowerCase();
      }
    } else if (
      item.data?.carried === "equipped" &&
      item.data?.type === "shield"
    ) {
      const ac = item?.data?.acBonus || 0;
      const hardness = item?.data?.hardness || 0;
      const hpValue = item?.data?.hp?.value || 0;
      if (
        ac > bestEquippedArmor.shield.acBonus ||
        (ac === bestEquippedArmor.shield.acBonus &&
          hardness > bestEquippedArmor.shield.hardness) ||
        (ac === bestEquippedArmor.shield.acBonus &&
          hardness === bestEquippedArmor.shield.hardness &&
          hpValue > bestEquippedArmor.shield.hp.value)
      ) {
        bestEquippedArmor.shield.acBonus = ac;
        bestEquippedArmor.shield.hardness = item?.data?.hardness;
        bestEquippedArmor.shield.hp.value = item?.data?.hp?.value;
        bestEquippedArmor.shield.hp.max = item?.data?.hp?.max;
        bestEquippedArmor.shield.speedPenalty = item?.data?.speedPenalty;
        bestEquippedArmor.shield.shieldId = item?._id;
        bestEquippedArmor.shield.shieldIndex = index;
      }
    }
  });

  return bestEquippedArmor;
}

// Returns bonuses to Saves for Resiliency rune in armor
function getResilientArmorBonus(record, bestArmor) {
  // Check if record and bestArmor are valid
  if (!record || !bestArmor?.armor?.armorId) {
    return null;
  }

  // Find the armor in the inventory and check for a rune
  const armor = (record.data?.inventory || [])?.find(
    (item) => item._id === bestArmor?.armor?.armorId
  );

  if (armor) {
    const resiliencyRune = parseInt(armor?.data?.runes?.resilient || 0, 10);
    if (resiliencyRune > 0) {
      let runeName = "Resilient";
      if (resiliencyRune === 2) {
        runeName = "Greater Resilient";
      } else if (resiliencyRune === 3) {
        runeName = "Major Resilient";
      }
      return [
        {
          value: Math.abs(resiliencyRune),
          isPenalty: false,
          valueType: "number",
          name: `Armor ${runeName} Rune`,
          type: "item",
          modifierType: "saveBonus",
          field: "all",
          active: true,
        },
      ];
    }
  }

  return null;
}

// Returns the penalty if necessary for the armor worn
function getCheckPenaltyForArmor(record, bestArmor) {
  if (!record) {
    return null;
  }

  const checkPenalty =
    bestArmor?.armor?.checkPenalty !== undefined
      ? bestArmor.armor.checkPenalty
      : 0;
  const strength = record.data?.str != undefined ? record.data?.str : 0;
  const armorStrengthRequired = bestArmor?.armor?.strength;
  if (armorStrengthRequired !== undefined && strength < armorStrengthRequired) {
    return [
      {
        value: -1 * Math.abs(checkPenalty),
        isPenalty: true,
        valueType: "number",
        name: "Check Penalty",
        type: "item",
        modifierType: "skillPenalty",
        field: "str",
        active: true,
      },
      {
        value: -1 * Math.abs(checkPenalty),
        isPenalty: true,
        valueType: "number",
        name: "Check Penalty",
        type: "item",
        modifierType: "skillPenalty",
        field: "dex",
        active: true,
      },
    ];
  }
  return null;
}

function getArmorClassForToken(token, targetIsOffGuardDueToFlanking = false) {
  const acModifiers = getEffectsAndModifiersForToken(token, [
    "armorClassBonus",
    "armorClassPenalty",
  ]);

  let tokenData = token.data === undefined ? token.record.data : token.data;

  // NPCs store in attributes.ac.value, PCs store in ac, fall back to 10 as the default
  let ac = tokenData?.attributes?.ac?.value || tokenData?.ac || 10;

  // Check if there's already a circumstance penalty
  const existingCircumstancePenalty = acModifiers.find(
    (mod) => mod.modifierType === "circumstance" && mod.isPenalty
  );

  // Apply all modifiers from getEffectsAndModifiersForToken
  // (already returns highest of each type)
  acModifiers.forEach((mod) => {
    if (typeof mod.value === "number") {
      ac += mod.value;
    }
  });

  // Handle flanking: -2 circumstance penalty
  if (targetIsOffGuardDueToFlanking) {
    if (!existingCircumstancePenalty) {
      // No circumstance penalty exists, add -2 for flanking
      ac -= 2;
    } else if (existingCircumstancePenalty.value === -1) {
      // Existing penalty is -1, but flanking is -2 (higher)
      // Add an additional -1 to reach -2 total
      ac -= 1;
    }
  }

  return ac;
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

  // Since direct editing is disabled, the value passed in is already the final ability score
  // Store it directly
  valuesToSet[`data.${attribute}`] = val;

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
  let strength = parseInt(
    record.data?.str !== undefined ? record.data?.str : 0,
    10
  );
  if (attribute === "str") {
    strength = value;
  }
  valuesToSet[`data.bulk`] = 5 + strength;

  // AC = 10 + your Dexterity modifier. Wearing armor changes your AC and adds proficency bonus if proficient
  let dexValue = parseInt(
    record.data?.dex !== undefined ? record.data?.dex : 0,
    10
  );
  if (attribute === "dex") {
    dexValue = value;
  }
  const bestArmor = getBestEquippedArmor(record);
  let ac = 10 + Math.max(0, bestArmor.armor.acBonus);
  let additionalAcAttribute = "dex";
  // Check for armorClassCalculation mods
  const acCalculationMods = getEffectsAndModifiersForToken(record, [
    "armorClassCalculation",
  ]);
  acCalculationMods.forEach((mod) => {
    if (mod.field !== undefined && mod.field !== "dex") {
      additionalAcAttribute = mod.field;
    }
  });
  if (additionalAcAttribute !== "dex") {
    let additionalAcValue = parseInt(
      record.data?.[additionalAcAttribute] !== undefined
        ? record.data?.[additionalAcAttribute]
        : 0,
      10
    );
    if (attribute === additionalAcAttribute) {
      additionalAcValue = value;
    }
    ac += additionalAcValue;
  }
  // AC = 10 + your Dexterity modifier. Wearing armor changes your AC.
  if (bestArmor.armor.dexCap !== undefined && bestArmor.armor.dexCap > 0) {
    ac += Math.min(dexValue, bestArmor.armor.dexCap);
  }
  const shieldBroken = record.data?.shieldBroken === true;
  // AC bonus is only if shield is equipped AND raised AND not broken
  if (
    bestArmor.shield &&
    record.data?.shieldRaised === "true" &&
    !shieldBroken
  ) {
    ac += bestArmor.shield.acBonus;
  }
  // Get proficiency bonus for this armor type
  const armorProf = parseInt(
    record?.data?.defenses?.[bestArmor.armor.armorCategory] || 0,
    10
  );
  // Prof bonus is prof * 2 + level, if we're proficient, else we don't add level
  if (armorProf > 0) {
    ac += armorProf * 2 + (record?.data?.level || 0);
  }

  const acBonus = getEffectsAndModifiersForToken(
    record,
    ["armorClassBonus", "armorClassPenalty"],
    "all"
  );
  const armorModsSet = new Set();
  acBonus.forEach((modifier) => {
    // Only if it was from a feature or item, not effect
    if (!armorModsSet.has(JSON.stringify(modifier) && !modifier.isEffect)) {
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
      // Only if it was from a feature or item, not effect
      if (!armorModsSet.has(JSON.stringify(modifier) && !modifier.isEffect)) {
        ac += modifier.value;
        armorModsSet.add(JSON.stringify(modifier));
      }
    });
  }
  // Also get the shield bonuses
  if (bestArmor.shieldName) {
    const shieldBonus = getEffectsAndModifiersForToken(
      record,
      ["armorClassBonus", "armorClassPenalty"],
      "Shield"
    );
    shieldBonus.forEach((modifier) => {
      // Only if it was from a feature or item, not effect
      if (!armorModsSet.has(JSON.stringify(modifier) && !modifier.isEffect)) {
        ac += modifier.value;
        armorModsSet.add(JSON.stringify(modifier));
      }
    });
  }

  valuesToSet[`data.ac`] = ac;

  // Check for speed penalty
  let totalSpeedPenalty = 0;
  const armorStrength =
    bestArmor?.armor?.strength !== undefined ? bestArmor.armor.strength : 0;
  if (
    bestArmor?.armor?.speedPenalty !== undefined &&
    armorStrength !== undefined
  ) {
    totalSpeedPenalty = bestArmor.armor.speedPenalty;
    // If we meet the strength requirement, reduce speed penalty by 5
    if (strength >= armorStrength) {
      totalSpeedPenalty -= 5;
    }
  }
  // If the shield has a speed penalty always add it
  if (bestArmor?.shield?.speedPenalty !== undefined) {
    totalSpeedPenalty += bestArmor.shield.speedPenalty;
  }

  const speed = record.data?.speed || "";
  valuesToSet[`data.speedPenalty`] = totalSpeedPenalty;

  // Update speed display to show penalty in parentheses
  let speedDisplay = speed;
  // Remove any existing parenthetical note first
  speedDisplay = speedDisplay.replace(/\s*\([^)]*\)\s*$/, "").trim();

  // Add penalty note if there is a penalty
  if (totalSpeedPenalty > 0 && speedDisplay) {
    // Extract the numeric value from the base speed
    const speedMatch = speedDisplay.match(/(\d+)/);
    if (speedMatch) {
      const baseSpeed = parseInt(speedMatch[1]);
      const penalizedSpeed = Math.max(0, baseSpeed - totalSpeedPenalty);
      // Extract the unit (e.g., "feet")
      const unitMatch = speedDisplay.match(/\d+\s+(\w+)/);
      const unit = unitMatch ? unitMatch[1] : "feet";
      speedDisplay = `${speedDisplay} (${penalizedSpeed} ${unit} due to armor)`;
    }
  }

  if (speedDisplay !== speed) {
    valuesToSet[`data.speed`] = speedDisplay;
  }

  if (bestArmor?.shield?.hp?.value !== undefined) {
    valuesToSet[`data.shieldHp`] = bestArmor.shield.hp.value;
    valuesToSet[`data.shieldMaxHp`] = bestArmor.shield.hp.max;
    valuesToSet[`data.shieldBt`] = Math.floor(
      (bestArmor.shield.hp.max || 0) / 2
    );
  } else {
    valuesToSet[`data.shieldHp`] = null;
    valuesToSet[`data.shieldMaxHp`] = null;
    valuesToSet[`data.shieldBt`] = null;
  }
  if (bestArmor?.shield?.hardness !== undefined) {
    valuesToSet[`data.shieldHardness`] = bestArmor.shield.hardness;
  } else {
    valuesToSet[`data.shieldHardness`] = null;
  }
  if (bestArmor?.shield?.acBonus !== undefined) {
    valuesToSet[`data.shieldAC`] = bestArmor.shield.acBonus;
  } else {
    valuesToSet[`data.shieldAC`] = null;
  }

  // If moreValuesToSet is provided, add it to the valuesToSet else call API directly
  if (moreValuesToSet) {
    Object.keys(valuesToSet).forEach((key) => {
      moreValuesToSet[key] = valuesToSet[key];
    });
  } else {
    api.setValuesOnRecord(record, valuesToSet);
  }
}

// This function looks for all features in the record that have choices,
// then checks for features that were provided by the choices. If we have
// any choices that are not yet provided, we prompt the user to make a choice
// and then add the feature to the record.
function processChoices(record) {
  const characterLevel = record.data?.level || 1;
  const ancestryFeatures = [];
  const heritageFeatures = [];
  const classFeatures = [];
  // Collect all features from ancestries, heritages, and classes
  const ancestries = record.data?.ancestries || [];
  const heritages = record.data?.heritages || [];
  const classes = record.data?.classes || [];
  for (const ancestry of ancestries) {
    ancestryFeatures.push(...(ancestry.data?.features || []));
  }
  for (const heritage of heritages) {
    heritageFeatures.push(...(heritage.data?.features || []));
  }
  for (const classObj of classes) {
    classFeatures.push(...(classObj.data?.features || []));
  }

  // Collect all feats
  const feats = record.data?.feats || [];
  const bonusFeats = record.data?.bonusFeats || [];

  const groups = [
    {
      name: "Ancestry",
      // Assume only ever 1 ancestry
      dataPath: "data.ancestries.0.data.features",
      features: ancestryFeatures,
    },
    {
      name: "Heritage",
      // Assume only ever 1 heritage
      dataPath: "data.heritages.0.data.features",
      features: heritageFeatures,
    },
    {
      name: "Class",
      // Assume only ever 1 class
      dataPath: "data.classes.0.data.features",
      features: classFeatures,
    },
    {
      name: "Feats",
      dataPath: "data.feats",
      features: feats,
    },
    {
      name: "Bonus Feats",
      dataPath: "data.bonusFeats",
      features: bonusFeats,
    },
  ];

  // Make a map of all features / feats resulting from choices
  const choicesToFeatures = {};

  for (const group of groups) {
    for (const feature of group.features) {
      // On each feature we add, we will set the `choiceFromId` field to indicate
      // it was from a choice on another feature containing a choice with that ID
      if (feature.data?.choiceFromId !== undefined) {
        choicesToFeatures[feature.data?.choiceFromId] = feature;
      }
    }
  }

  // Also check bonusFeats for choices (Feats go here when from a choice)
  for (const feat of bonusFeats) {
    if (feat.data?.choiceFromId !== undefined) {
      choicesToFeatures[feat.data?.choiceFromId] = feat;
    }
  }

  // Now check for choices that are not yet provided
  const choicesToMake = [];

  for (const group of groups) {
    for (const feature of group.features) {
      // If this feature is for our level or lower, check for choices
      const featureLevel = feature.data?.level || 0;
      if (featureLevel <= characterLevel) {
        const choices = feature.data?.choices || [];
        for (const choice of choices) {
          if (choicesToFeatures[choice._id] === undefined) {
            // We need to make this choice
            choicesToMake.push({ choice, feature, group });
            choicesToFeatures[choice._id] = choice;
          }
        }
      }
    }
  }

  promptForChoices(record, choicesToMake, 0);
}

function addFeatsToCharacter(record, feats, callback = undefined) {
  const curFeats = record.data?.feats || [];

  // If there are no feats to add, call callback and return
  if (feats.length === 0) {
    if (callback) callback();
    return;
  }

  // Helper function to collect feats recursively
  function collectFeats(featIds, collectedFeats = []) {
    if (featIds.length === 0) {
      // All feats collected, now append them to the character's feats
      const updatedFeats = [...curFeats, ...collectedFeats];
      api.setValues({ "data.feats": updatedFeats }, callback);
      return;
    }

    // Take the first feat from the array
    const featToAdd = featIds[0];
    const remainingFeats = featIds.slice(1);

    // Parse the JSON string to get the feat ID
    let featId;
    try {
      const featData = JSON.parse(featToAdd);
      featId = featData._id;
    } catch (error) {
      console.error("Error parsing feat JSON:", featToAdd, error);
      // Skip this feat and continue with the next one
      collectFeats(remainingFeats, collectedFeats);
      return;
    }

    // Check if this feat is already in the character's current feats
    const featName = JSON.parse(featToAdd).name;
    const alreadyHasFeat = curFeats.some(
      (existingFeat) => existingFeat.name === featName
    );

    if (alreadyHasFeat) {
      // Skip this feat and continue with the next one
      collectFeats(remainingFeats, collectedFeats);
      return;
    }

    // Query for the current feat using the parsed ID
    api.getRecord("feats", featId, (featRecord) => {
      // Add the retrieved feat to our collected feats
      collectedFeats.push(featRecord);

      // Recursively collect remaining feats
      collectFeats(remainingFeats, collectedFeats);
    });
  }

  // Start collecting feats
  collectFeats(feats);
}

function promptForChoices(record, choicesToMake, index) {
  if (index >= choicesToMake.length) {
    // Only call onAddEditFeature if we actually processed choices
    if (choicesToMake.length > 0) {
      // Re-query the record to get the latest values
      api.getRecord("characters", record._id, (updatedRecord) => {
        // Update all attributes after processing choices, but skip choice processing to prevent infinite loops
        onAddEditFeature(updatedRecord, undefined, true);
      });
    }
    return;
  }

  const choice = choicesToMake[index];
  const choiceObj = choice.choice;
  const feature = choice.feature;
  const group = choice.group;

  // Prompt the user for the choice
  const promptName = choiceObj.name;
  const promptDescription = choiceObj?.data?.description;
  const itemType = choiceObj?.data?.itemType || "feature";
  const filters = choiceObj?.data?.filter || [];
  const promptOptions = choiceObj?.data?.choices || [];

  // Prompt the user for the choice
  const callback = (choices) => {
    const choice = choices && choices.length > 0 ? choices[0] : null;
    if (choice) {
      if (itemType === "feat") {
        // For feats, add to the character's bonus feats
        const currentFeats = record.data?.bonusFeats || [];
        const newFeat = {
          ...choice,
          data: {
            ...(choice?.data || {}),
            choiceFromId: choiceObj._id,
          },
        };
        const updatedFeats = [...currentFeats, newFeat];
        api.setValues({ "data.bonusFeats": updatedFeats }, () => {
          promptForChoices(record, choicesToMake, index + 1);
        });
      } else {
        // For features, add to the group's features
        const dataPath = group.dataPath;
        api.getRecord("features", choice, (featureRecord) => {
          api.addValue(
            dataPath,
            {
              ...featureRecord,
              data: {
                ...(featureRecord?.data || {}),
                // Mark the id of the choice that provided this feature
                level: featureRecord?.data?.level || feature?.data?.level || 1,
                choiceFromId: choiceObj._id,
              },
            },
            () => {
              promptForChoices(record, choicesToMake, index + 1);
            }
          );
        });
      }
    } else {
      // No choice made, continue to next
      promptForChoices(record, choicesToMake, index + 1);
    }
  };

  // Build options based on item type
  let options = null;
  let optionsQuery = null;

  if (itemType === "feat" && filters.length > 0) {
    // For feats, build query based on filters
    const query = {};

    filters.forEach((filter) => {
      const [category, field, value] = filter.split(":");

      if (category === "item" && field === "category") {
        // Handle category filters - use data.type for feat types
        if (value === "general") {
          query["data.type"] = { $in: ["general", "skill"] };
        } else {
          query["data.type"] = value;
        }
      } else if (category === "item" && field === "trait") {
        // Handle trait filters - search for feats with this trait
        if (!query["data.traits"]) {
          query["data.traits"] = [];
        }
        if (value === "actor") {
          // Add all the characters and class traits to the query
          const actorTraits = record.data?.traits || [];
          const classTraits = record.data?.classes?.[0]?.data?.traits || [];
          const className = record.data?.classes?.[0]?.name || "";
          if (className) {
            query["data.traits"].push(className);
          }
          for (const trait of actorTraits) {
            query["data.traits"].push(trait);
          }
          for (const trait of classTraits) {
            query["data.traits"].push(trait);
          }
        } else {
          query["data.traits"].push(value);
        }
      } else if (category === "item" && field === "level") {
        // Handle level filters
        const level = parseInt(value, 10);
        if (!query["data.level"]) {
          query["data.level"] = {};
        }
        query["data.level"].$lte = level;
      }
    });

    // Convert trait array to $elemMatch if multiple traits
    if (query["data.traits"] && query["data.traits"].length > 0) {
      if (query["data.traits"].length === 1) {
        query["data.traits"] = query["data.traits"][0];
      } else {
        // Use $in for multiple trait values
        query["data.traits"] = { $in: query["data.traits"] };
      }
    }

    optionsQuery = {
      type: "feats",
      query: query,
    };
  } else {
    // For features, parse the provided choices
    options = promptOptions
      .map((option) => {
        try {
          const choiceOpt = JSON.parse(option);
          return {
            label: choiceOpt.name,
            value: choiceOpt._id,
          };
        } catch (e) {
          return null;
        }
      })
      .filter((option) => option !== null);
  }

  if ((!options || options.length === 0) && !optionsQuery) {
    // No options and no query, so we can just go to the next choice
    callback(null);
    return;
  }

  // Prompt the user for the choice
  api.showPrompt(
    promptName,
    promptDescription,
    "Select Option...",
    options, // Use options for features, empty for feats
    optionsQuery, // Use query for feats, null for features
    callback, // Callback when chosen
    "OK",
    "Cancel",
    1 // Limit 1 choice
  );
}

// Helper function to calculate proficiency bonus
function calculateProficiencyBonus(record, training) {
  const characterLevel = parseInt(record.data?.level || "0", 10);
  switch (parseInt(training, 10)) {
    case 0:
      return 0;
    case 1:
      return 2 + characterLevel;
    case 2:
      return 4 + characterLevel;
    case 3:
      return 6 + characterLevel;
    case 4:
      return 8 + characterLevel;
    default:
      return 0;
  }
}

// Called by onAddEditFeature to set the feat slots for the character based on their feats
function setFeatSlots(record, valuesToSet) {
  const classes = record.data?.classes || [];
  const classObj = classes?.[0];
  const ancestryFeatLevels = (classObj?.data?.ancestryFeatLevels || []).map(
    (level) => parseInt(level, 10)
  );
  const classFeatLevels = (classObj?.data?.classFeatLevels || []).map((level) =>
    parseInt(level, 10)
  );
  const generalFeatLevels = (classObj?.data?.generalFeatLevels || []).map(
    (level) => parseInt(level, 10)
  );
  const skillFeatLevels = (classObj?.data?.skillFeatLevels || []).map((level) =>
    parseInt(level, 10)
  );

  // Get current feats to check what slots already exist
  const oldFeats = record.data?.feats || [];
  let currentFeats = [...(record.data?.feats || [])];

  // Get character's current level
  const characterLevel = parseInt(record.data?.level || "1", 10);

  // Filter out empty feat slots that we are not high enough to have,
  // incase we set the level lower TODO FIX
  currentFeats = currentFeats.filter((feat) => {
    const featLevel = feat.data?.level || 0;
    const isSlot = feat.data?.type === "slot";
    const shouldKeep = featLevel <= characterLevel || !isSlot;
    return shouldKeep;
  });

  // Create feat slots for each type
  const featSlots = [];
  let slotOrder = 0;

  // Ancestry feat slots - only for levels up to current character level
  ancestryFeatLevels.forEach((level) => {
    if (level <= characterLevel) {
      const existingSlot = currentFeats.find(
        (feat) =>
          feat.data?.featSlotType === "ancestry" && feat.data?.level === level
      );

      if (!existingSlot) {
        featSlots.push({
          _id: generateUuid(),
          name: "Ancestry Feat Slot",
          recordType: "feats",
          unidentifiedName: "Ancestry Feat Slot",
          data: {
            type: "slot",
            level: level,
            featSlotType: "ancestry",
            slotOrder: slotOrder++,
          },
          fields: {
            featSlot: { hidden: false },
            featDetails: { hidden: true },
          },
        });
      }
    }
  });

  // Class feat slots - only for levels up to current character level
  classFeatLevels.forEach((level) => {
    if (level <= characterLevel) {
      const existingSlot = currentFeats.find(
        (feat) =>
          feat.data?.featSlotType === "class" && feat.data?.level === level
      );

      if (!existingSlot) {
        featSlots.push({
          _id: generateUuid(),
          name: "Class Feat Slot",
          recordType: "feats",
          unidentifiedName: "Class Feat Slot",
          data: {
            type: "slot",
            level: level,
            featSlotType: "class",
            slotOrder: slotOrder++,
          },
          fields: {
            featSlot: { hidden: false },
            featDetails: { hidden: true },
          },
        });
      }
    }
  });

  // General feat slots - only for levels up to current character level
  generalFeatLevels.forEach((level) => {
    if (level <= characterLevel) {
      const existingSlot = currentFeats.find(
        (feat) =>
          feat.data?.featSlotType === "general" && feat.data?.level === level
      );

      if (!existingSlot) {
        featSlots.push({
          _id: generateUuid(),
          name: "General Feat Slot",
          recordType: "feats",
          unidentifiedName: "General Feat Slot",
          data: {
            type: "slot",
            level: level,
            featSlotType: "general",
            slotOrder: slotOrder++,
          },
          fields: {
            featSlot: { hidden: false },
            featDetails: { hidden: true },
          },
        });
      }
    }
  });

  // Skill feat slots - only for levels up to current character level
  skillFeatLevels.forEach((level) => {
    if (level <= characterLevel) {
      const existingSlot = currentFeats.find(
        (feat) =>
          feat.data?.featSlotType === "skill" && feat.data?.level === level
      );

      if (!existingSlot) {
        featSlots.push({
          _id: generateUuid(),
          name: "Skill Feat Slot",
          recordType: "feats",
          unidentifiedName: "Skill Feat Slot",
          data: {
            type: "slot",
            level: level,
            featSlotType: "skill",
            slotOrder: slotOrder++,
          },
          fields: {
            featSlot: { hidden: false },
            featDetails: { hidden: true },
          },
        });
      }
    }
  });

  // Update feats array with filtered feats and any new slots
  const updatedFeats = [...currentFeats, ...featSlots];

  // Always update if feats changed (either filtered out or new slots added)
  if (updatedFeats.length !== oldFeats.length || featSlots.length > 0) {
    valuesToSet["data.feats"] = updatedFeats;
  }
}

// Called by onAddEditFeature to update the proficiencies for the character based on class and all features
function updateProficiencies(record, valuesToSet) {
  // Helper function to get ability score value, checking valuesToSet first, then record
  const getAbilityScore = (ability) => {
    const valueFromSet = valuesToSet[`data.${ability}`];
    if (valueFromSet !== undefined) {
      return parseInt(valueFromSet, 10);
    }
    const recordValue = record.data?.[ability];
    if (
      recordValue !== undefined &&
      recordValue !== null &&
      recordValue !== ""
    ) {
      return parseInt(recordValue, 10);
    }
    return 0; // Only default to 0 if truly not set
  };
  // Collect all features from ancestries, heritages, and classes
  const ancestries = record.data?.ancestries || [];
  const heritages = record.data?.heritages || [];
  const classes = record.data?.classes || [];
  const classObj = classes?.[0];
  const backgrounds = record.data?.backgrounds || [];
  const backgroundObj = backgrounds?.[0];
  const features = [];
  for (const ancestry of ancestries) {
    features.push(...(ancestry.data?.features || []));
  }
  for (const heritage of heritages) {
    features.push(...(heritage.data?.features || []));
  }
  for (const classObj of classes) {
    features.push(...(classObj.data?.features || []));
  }

  // First create a map of all proficiencies, 0=untrained, 1=trained, 2=expert, 3=master, 4=legendary
  const proficiencies = {
    // class dc is always trained by default
    classDC: 1,
    // saving throws
    reflex: 0,
    fortitude: 0,
    will: 0,
    // armor
    unarmored: 0,
    light: 0,
    medium: 0,
    heavy: 0,
    // weapons
    unarmed: 0,
    simple: 0,
    martial: 0,
    advanced: 0,
    // spellcasting
    spellcasting: 0,
    // perception
    perception: 0,
    // skills
    acrobatics: 0,
    arcana: 0,
    athletics: 0,
    crafting: 0,
    deception: 0,
    diplomacy: 0,
    intimidation: 0,
    medicine: 0,
    nature: 0,
    occultism: 0,
    performance: 0,
    religion: 0,
    society: 0,
    stealth: 0,
    survival: 0,
    thievery: 0,
    lore: {},
  };

  const possibleSkills = [
    "acrobatics",
    "arcana",
    "athletics",
    "crafting",
    "deception",
    "diplomacy",
    "intimidation",
    "medicine",
    "nature",
    "occultism",
    "performance",
    "religion",
    "society",
    "stealth",
    "survival",
    "thievery",
  ];

  // First check Class
  if (classObj?.data?.classDC) {
    proficiencies.classDC = parseInt(classObj.data.classDC, 10);
  }
  if (classObj?.data?.savingThrows) {
    proficiencies.reflex = parseInt(
      classObj.data.savingThrows?.reflex || "0",
      10
    );
    proficiencies.fortitude = parseInt(
      classObj.data.savingThrows?.fortitude || "0",
      10
    );
    proficiencies.will = parseInt(classObj.data.savingThrows?.will || "0", 10);
  }
  if (classObj?.data?.perception) {
    proficiencies.perception = parseInt(classObj.data.perception || "0", 10);
  }
  if (classObj?.data?.defenses) {
    proficiencies.unarmored = parseInt(
      classObj.data.defenses?.unarmored || "0",
      10
    );
    proficiencies.light = parseInt(classObj.data.defenses?.light || "0", 10);
    proficiencies.medium = parseInt(classObj.data.defenses?.medium || "0", 10);
    proficiencies.heavy = parseInt(classObj.data.defenses?.heavy || "0", 10);
  }
  if (classObj?.data?.attacks) {
    proficiencies.unarmed = parseInt(classObj.data.attacks?.unarmed || "0", 10);
    proficiencies.simple = parseInt(classObj.data.attacks?.simple || "0", 10);
    proficiencies.martial = parseInt(classObj.data.attacks?.martial || "0", 10);
    proficiencies.advanced = parseInt(
      classObj.data.attacks?.advanced || "0",
      10
    );
  }
  if (classObj?.data?.spellcasting) {
    proficiencies.spellcasting = parseInt(
      classObj.data.spellcasting || "0",
      10
    );
  }
  // Class and background skills
  if (classObj?.data?.trainedSkills || backgroundObj?.data?.trainedSkills) {
    const skills = classObj?.data?.trainedSkills || [];
    const backgroundSkills = backgroundObj?.data?.trainedSkills || [];
    const allSkills = [...skills, ...backgroundSkills];
    for (const skill of allSkills) {
      const skillName = skill.toLowerCase();
      // Check if it's a lore skill (ends with " lore")
      if (skillName.endsWith(" lore")) {
        const loreSkillName = skillName.replace(" lore", "");
        if (
          !proficiencies.lore[loreSkillName] ||
          1 > proficiencies.lore[loreSkillName]
        ) {
          proficiencies.lore[loreSkillName] = 1;
        }
      }
      // Check if it's a regular skill
      else if (possibleSkills.includes(skillName)) {
        proficiencies[skillName] = 1;
      }
    }
  }

  // Now add all proficiencies from features
  // First sort features by level (assume 0 if level is not set)
  features.sort((a, b) => {
    const levelA = parseInt(a.data?.level || "0", 10);
    const levelB = parseInt(b.data?.level || "0", 10);
    return levelA - levelB;
  });

  // Go through each feature and update proficiencies if the new rank is higher
  for (const feature of features) {
    const featureProficiencies = feature.data?.proficiencies || [];
    featureProficiencies.forEach((proficiency) => {
      const name = (proficiency?.data?.name || "").toLowerCase();
      const rank = parseInt(proficiency?.data?.rank || "0", 10);

      if (name && rank > 0) {
        // Check if it's a saving throw
        if (name === "fortitude" || name === "reflex" || name === "will") {
          if (rank > proficiencies[name]) {
            proficiencies[name] = rank;
          }
        }
        // Check if it's armor
        else if (
          name === "unarmored" ||
          name === "light" ||
          name === "medium" ||
          name === "heavy"
        ) {
          if (rank > proficiencies[name]) {
            proficiencies[name] = rank;
          }
        }
        // Check if it's weapons
        else if (
          name === "unarmed" ||
          name === "simple" ||
          name === "martial" ||
          name === "advanced"
        ) {
          if (rank > proficiencies[name]) {
            proficiencies[name] = rank;
          }
        }
        // Check if it's spellcasting
        else if (name === "spellcasting") {
          if (rank > proficiencies.spellcasting) {
            proficiencies.spellcasting = rank;
          }
        }
        // Check if it's perception
        else if (name === "perception") {
          if (rank > proficiencies.perception) {
            proficiencies.perception = rank;
          }
        }
        // Check if it's a skill
        else if (possibleSkills.includes(name.toLowerCase())) {
          if (rank > proficiencies[name.toLowerCase()]) {
            proficiencies[name.toLowerCase()] = rank;
          }
        }
        // Check if it's a lore skill (ends with " Lore")
        else if (name.endsWith(" lore")) {
          const loreSkillName = name.replace(" lore", "");
          if (
            !proficiencies.lore[loreSkillName] ||
            rank > proficiencies.lore[loreSkillName]
          ) {
            proficiencies.lore[loreSkillName] = rank;
          }
        }
        // Otherwise assume it's a class DC
        else {
          if (rank > proficiencies.classDC) {
            proficiencies.classDC = rank;
          }
        }
      }
    });
  }

  // Set Class DC
  const keyAbility = record.data?.keyAbility;
  let keyAbilityScore = 0;
  if (
    keyAbility &&
    ["str", "dex", "con", "int", "wis", "cha"].includes(keyAbility)
  ) {
    keyAbilityScore = getAbilityScore(keyAbility);
  }
  const currentClassDCProficiency = parseInt(
    record.data?.classDCProficiency || "0",
    10
  );

  // If no class, reset class DC proficiency to 0
  if (!classObj) {
    valuesToSet["data.classDCProficiency"] = 0;
    valuesToSet["data.classDC"] = 10 + keyAbilityScore;
  } else {
    const effectiveClassDCProficiency = Math.max(
      currentClassDCProficiency,
      proficiencies.classDC
    );
    const classDCProficiencyBonus = calculateProficiencyBonus(
      record,
      effectiveClassDCProficiency
    );
    valuesToSet["data.classDC"] =
      10 + classDCProficiencyBonus + keyAbilityScore;
    if (
      currentClassDCProficiency < proficiencies.classDC ||
      proficiencies.classDC === 0
    ) {
      valuesToSet["data.classDCProficiency"] = proficiencies.classDC;
    }
  }

  // Set saving throw modifiers
  const dexMod = getAbilityScore("dex");
  const conMod = getAbilityScore("con");
  const wisMod = getAbilityScore("wis");

  // Reflex (DEX + proficiency bonus)
  const currentReflex = parseInt(record.data?.reflex || "0", 10);
  const effectiveReflex = Math.max(currentReflex, proficiencies.reflex);
  const reflexProficiencyBonus = calculateProficiencyBonus(
    record,
    effectiveReflex
  );
  valuesToSet["data.reflexMod"] = dexMod + reflexProficiencyBonus;
  if (currentReflex < proficiencies.reflex || proficiencies.reflex === 0) {
    valuesToSet["data.reflex"] = proficiencies.reflex.toString();
  }

  // Fortitude (CON + proficiency bonus)
  const currentFortitude = parseInt(record.data?.fortitude || "0", 10);
  const effectiveFortitude = Math.max(
    currentFortitude,
    proficiencies.fortitude
  );
  const fortitudeProficiencyBonus = calculateProficiencyBonus(
    record,
    effectiveFortitude
  );
  valuesToSet["data.fortitudeMod"] = conMod + fortitudeProficiencyBonus;
  if (
    currentFortitude < proficiencies.fortitude ||
    proficiencies.fortitude === 0
  ) {
    valuesToSet["data.fortitude"] = proficiencies.fortitude.toString();
  }

  // Will (WIS + proficiency bonus)
  const currentWill = parseInt(record.data?.will || "0", 10);
  const effectiveWill = Math.max(currentWill, proficiencies.will);
  const willProficiencyBonus = calculateProficiencyBonus(record, effectiveWill);
  valuesToSet["data.willMod"] = wisMod + willProficiencyBonus;
  if (currentWill < proficiencies.will || proficiencies.will === 0) {
    valuesToSet["data.will"] = proficiencies.will.toString();
  }

  // Perception (WIS + proficiency bonus)
  const currentPerception = parseInt(record.data?.perception || "0", 10);
  const effectivePerception = Math.max(
    currentPerception,
    proficiencies.perception
  );
  const perceptionProficiencyBonus = calculateProficiencyBonus(
    record,
    effectivePerception
  );
  valuesToSet["data.perceptionMod"] = wisMod + perceptionProficiencyBonus;
  if (
    currentPerception < proficiencies.perception ||
    proficiencies.perception === 0
  ) {
    valuesToSet["data.perception"] = proficiencies.perception.toString();
  }

  // Set skill modifiers
  const pathfinderSkills = getPathfinderSkills();
  for (const [skillName, abilityKey] of Object.entries(pathfinderSkills)) {
    const skillProficiency = proficiencies[skillName] || 0;

    // Check if user has set a custom ability score for this skill
    const customAbilityKey = record.data?.[`${skillName}Ability`];
    const effectiveAbilityKey = customAbilityKey || abilityKey;
    const abilityMod = getAbilityScore(effectiveAbilityKey);

    // Get the current skill proficiency from the record
    const currentSkillProficiency = parseInt(
      record.data?.[skillName] || "0",
      10
    );

    // Use the higher of current proficiency or calculated proficiency for the modifier
    const effectiveProficiency = Math.max(
      currentSkillProficiency,
      skillProficiency
    );
    const skillProficiencyBonus = calculateProficiencyBonus(
      record,
      effectiveProficiency
    );

    // Always set the modifier based on the effective proficiency
    valuesToSet[`data.${skillName}Mod`] = abilityMod + skillProficiencyBonus;

    // Only update the proficiency value if the calculated one is higher
    // Don't override manually set higher values
    if (currentSkillProficiency < skillProficiency) {
      valuesToSet[`data.${skillName}`] = skillProficiency.toString();
    }
  }

  // Set lore skills
  const currentLoreSkills = record.data?.loreSkills || [];
  const loreSkillsToSet = [];
  const processedLoreSkills = new Set();

  // Process each lore skill from proficiencies
  for (const [loreSkillName, rank] of Object.entries(proficiencies.lore)) {
    const formattedLoreSkillName =
      loreSkillName.charAt(0).toUpperCase() + loreSkillName.slice(1);
    const loreSkillFullName = `${formattedLoreSkillName} Lore`;

    // Check if this lore skill already exists in current lore skills
    const existingLoreSkill = currentLoreSkills.find(
      (skill) => skill.name === loreSkillFullName
    );

    if (existingLoreSkill) {
      // Update existing lore skill if new rank is higher
      const currentRank = parseInt(existingLoreSkill.data?.rank || "0", 10);
      if (rank > currentRank) {
        existingLoreSkill.data.rank = rank.toString();
      }
      loreSkillsToSet.push(existingLoreSkill);
      processedLoreSkills.add(loreSkillFullName);
    } else {
      // Create new lore skill entry
      loreSkillsToSet.push({
        _id: generateUuid(),
        name: loreSkillFullName,
        recordType: "records",
        unidentifiedName: "Lore Skill",
        data: {
          rank: rank.toString(),
        },
        icon: "IconTools",
      });
      processedLoreSkills.add(loreSkillFullName);
    }
  }

  // Preserve existing lore skills that weren't processed (user-added lore skills)
  currentLoreSkills.forEach((loreSkill) => {
    if (!processedLoreSkills.has(loreSkill.name)) {
      loreSkillsToSet.push(loreSkill);
    }
  });

  // Set the lore skills array (always set it to preserve existing lore skills)
  valuesToSet["data.loreSkills"] = loreSkillsToSet;

  // Process lore skills for modifiers
  for (const loreSkill of loreSkillsToSet) {
    const rank = parseInt(loreSkill.data?.rank || "0", 10);
    const proficiencyBonus = calculateProficiencyBonus(record, rank);

    // Check if lore skill has a custom ability score set
    const customAbilityKey = loreSkill.data?.ability;
    const effectiveAbilityKey = customAbilityKey || "int"; // Default to Intelligence for lore skills
    const abilityMod = getAbilityScore(effectiveAbilityKey);

    // Calculate and set the modifier
    const totalMod = abilityMod + proficiencyBonus;
    loreSkill.data.mod = totalMod;
  }

  // Set armor and weapon proficiencies
  const currentUnarmored = parseInt(
    record.data?.defenses?.unarmored || "0",
    10
  );
  if (
    currentUnarmored < proficiencies.unarmored ||
    proficiencies.unarmored === 0
  ) {
    valuesToSet["data.defenses.unarmored"] = proficiencies.unarmored;
  }

  const currentLight = parseInt(record.data?.defenses?.light || "0", 10);
  if (currentLight < proficiencies.light || proficiencies.light === 0) {
    valuesToSet["data.defenses.light"] = proficiencies.light;
  }

  const currentMedium = parseInt(record.data?.defenses?.medium || "0", 10);
  if (currentMedium < proficiencies.medium || proficiencies.medium === 0) {
    valuesToSet["data.defenses.medium"] = proficiencies.medium;
  }

  const currentHeavy = parseInt(record.data?.defenses?.heavy || "0", 10);
  if (currentHeavy < proficiencies.heavy || proficiencies.heavy === 0) {
    valuesToSet["data.defenses.heavy"] = proficiencies.heavy;
  }

  const currentUnarmed = parseInt(record.data?.attacks?.unarmed || "0", 10);
  if (currentUnarmed < proficiencies.unarmed || proficiencies.unarmed === 0) {
    valuesToSet["data.attacks.unarmed"] = proficiencies.unarmed;
  }

  const currentSimple = parseInt(record.data?.attacks?.simple || "0", 10);
  if (currentSimple < proficiencies.simple || proficiencies.simple === 0) {
    valuesToSet["data.attacks.simple"] = proficiencies.simple;
  }

  const currentMartial = parseInt(record.data?.attacks?.martial || "0", 10);
  if (currentMartial < proficiencies.martial || proficiencies.martial === 0) {
    valuesToSet["data.attacks.martial"] = proficiencies.martial;
  }

  const currentAdvanced = parseInt(record.data?.attacks?.advanced || "0", 10);
  if (
    currentAdvanced < proficiencies.advanced ||
    proficiencies.advanced === 0
  ) {
    valuesToSet["data.attacks.advanced"] = proficiencies.advanced;
  }

  // Set spellcasting proficiency
  const currentSpellcasting = parseInt(record.data?.spellcasting || "0", 10);
  if (
    currentSpellcasting < proficiencies.spellcasting ||
    proficiencies.spellcasting === 0
  ) {
    valuesToSet["data.spellcasting"] = proficiencies.spellcasting;
  }
}

// Calculate Pathfinder 2e ability boosts
function calculateAbilityBoosts(record) {
  const boosts = {
    ancestryBoost1: record.data?.ancestryBoost1,
    ancestryBoost2: record.data?.ancestryBoost2,
    backgroundBoost1: record.data?.backgroundBoost1,
    backgroundBoost2: record.data?.backgroundBoost2,
    classBoost: record.data?.keyAbility,
    freeBoosts: record.data?.freeBoosts || [],
    freeBoostsLevel5: record.data?.freeBoostsLevel5 || [],
    freeBoostsLevel10: record.data?.freeBoostsLevel10 || [],
    freeBoostsLevel15: record.data?.freeBoostsLevel15 || [],
    freeBoostsLevel20: record.data?.freeBoostsLevel20 || [],
  };

  // Count boosts per ability
  const boostCounts = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  };

  // Handle ancestry boosts and flaws if not using alternate ancestry boosts
  const alternateAncestryBoosts = record.data?.alternateAncestryBoosts;
  const ancestries = record.data?.ancestries || [];
  if (!alternateAncestryBoosts && ancestries.length > 0) {
    const ancestry = ancestries[0];
    const ancestryBoosts = ancestry?.data?.boosts || {};
    const ancestryFlaws = ancestry?.data?.flaws || {};

    // Process ancestry boosts (arrays of 1 are provided boosts)
    for (const boost of Object.values(ancestryBoosts)) {
      if (Array.isArray(boost) && boost.length === 1 && boost[0]) {
        const ability = boost[0];
        if (boostCounts.hasOwnProperty(ability)) {
          boostCounts[ability]++;
        }
      }
    }

    // Process ancestry flaws (always decrement by 1)
    for (const flaw of Object.values(ancestryFlaws)) {
      if (Array.isArray(flaw) && flaw.length === 1 && flaw[0]) {
        const ability = flaw[0];
        if (boostCounts.hasOwnProperty(ability)) {
          boostCounts[ability]--;
        }
      }
    }
  }

  // Helper function to add a boost
  const addBoost = (ability) => {
    if (ability && boostCounts.hasOwnProperty(ability)) {
      boostCounts[ability]++;
    }
  };

  // Process all boost sources
  Object.values(boosts).forEach((boost) => {
    if (Array.isArray(boost)) {
      boost.forEach(addBoost);
    } else if (boost) {
      addBoost(boost);
    }
  });

  // Calculate final ability scores based on boost rules
  const attributes = ["str", "dex", "con", "int", "wis", "cha"];
  const boostResults = {};

  attributes.forEach((attribute) => {
    const boostCount = boostCounts[attribute];

    // Calculate modifier from boosts
    let modifier = 0;
    let partialBoost = false;

    if (boostCount !== 0) {
      if (boostCount > 0) {
        // Each boost adds +1 until +4, then it takes 2 boosts for each additional +1
        if (boostCount <= 4) {
          modifier = boostCount;
        } else {
          // After +4, it takes 2 boosts for each +1
          const extraBoosts = boostCount - 4;
          modifier = 4 + Math.floor(extraBoosts / 2);

          // Check if there's a partial boost (odd number of extra boosts)
          if (extraBoosts % 2 === 1) {
            partialBoost = true;
          }
        }
      } else {
        // Negative boostCount (from flaws) - each flaw reduces by 1
        modifier = boostCount;
      }
    }

    boostResults[attribute] = {
      boostCount: boostCount,
      modifier: modifier,
      partialBoost: partialBoost,
    };
  });

  return boostResults;
}

// Sequentially query for and add actions
function queryAndAddActions(actions, index, callback) {
  // If we're done, call the callback
  if (index >= actions.length) {
    if (callback) {
      callback();
    }
    return;
  }

  // Else, query for the action and add it to the character
  const action = actions[index];
  api.getRecord("actions", action, (actionObj) => {
    api.addValue(
      "data.actions",
      {
        ...actionObj,
        data: { ...actionObj.data, fromId: action },
      },
      queryAndAddActions(actions, index + 1, callback)
    );
  });
}

// This function collects all `providesActions` from feats and features and adds them to the character
function setProvidedActions(record, callback = undefined) {
  const feats = record.data?.feats || [];
  const bonusFeats = record.data?.bonusFeats || [];
  const features = record.data?.features || [];
  const ancestries = record.data?.ancestries || [];
  const ancestryFeatures = ancestries
    .map((ancestry) => ancestry.data?.features || [])
    .flat();
  const heritages = record.data?.heritages || [];
  const heritageFeatures = heritages
    .map((heritage) => heritage.data?.features || [])
    .flat();
  const classes = record.data?.classes || [];
  const classFeatures = classes
    .map((classObj) => classObj.data?.features || [])
    .flat();
  const actionsProvided = [];
  for (const feature of [
    ...feats,
    ...bonusFeats,
    ...ancestryFeatures,
    ...heritageFeatures,
    ...classFeatures,
    ...features,
  ]) {
    if (
      feature.data?.providesActions &&
      feature.data?.providesActions.length > 0
    ) {
      actionsProvided.push(...feature.data?.providesActions);
    }
  }

  const actions = record.data?.actions || [];
  const actionsToAdd = [];
  for (const action of actionsProvided) {
    // Parse the JSON from the dropdown value and get the ID of the action
    try {
      const actionData = JSON.parse(action);
      const actionId = actionData._id;
      if (!actions.find((a) => a.data?.fromId === actionId)) {
        actionsToAdd.push(actionId);
      }
    } catch (error) {
      console.error("Error parsing action JSON:", action, error);
    }
  }

  if (actionsToAdd.length > 0) {
    queryAndAddActions(actionsToAdd, 0, callback);
  } else {
    if (callback) {
      callback();
    }
  }
}

// This function is called after adding/editing a talent/feature or equipping an item
function onAddEditFeature(record, callback = undefined, skipChoices = false) {
  // Calculate Pathfinder 2e ability boosts first
  const boostResults = calculateAbilityBoosts(record);

  // Check for ability score bonuses from other sources
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

  // Apply boost-based modifiers first
  attributes.forEach((attribute) => {
    const boostResult = boostResults[attribute];
    if (boostResult) {
      valuesToSet[`data.total${capitalize(attribute)}Mod`] =
        boostResult.modifier;

      // Track partial boost if applicable
      if (boostResult.partialBoost) {
        valuesToSet[`data.partial${capitalize(attribute)}Boost`] = true;
      } else {
        valuesToSet[`data.partial${capitalize(attribute)}Boost`] = false;
      }
    }
  });

  // Calculate the total modifier for each ability from other sources
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

  // Calculate final ability scores and modifiers
  attributes.forEach((attribute) => {
    const boostResult = boostResults[attribute];
    if (boostResult) {
      const totalMod =
        valuesToSet[`data.total${capitalize(attribute)}Mod`] || 0;

      // Store the total modifier for reference
      valuesToSet[`data.${attribute}Mod`] = totalMod;

      // The final ability score is just the total modifier (starts from 0 base)
      valuesToSet[`data.${attribute}`] = totalMod;
    }
  });

  // Check for sense bonuses
  const senseBonus = getEffectsAndModifiersForToken(record, ["sense"]);
  const lowLightDarkvisionBonus = getEffectsAndModifiersForToken(record, [
    "lowLightDarkvision",
  ]);
  const currentSenses = String(record.data?.senses || "");

  // Handle low-light darkvision bonus
  if (lowLightDarkvisionBonus.length > 0) {
    let newSenses = currentSenses;

    // Check if they already have Low-Light vision (various formats)
    const hasLowLight = /low.?light|lowlight/i.test(currentSenses);
    const hasDarkvision = /darkvision/i.test(currentSenses);

    if (hasLowLight && !hasDarkvision) {
      // Replace Low-Light vision with Darkvision
      newSenses = currentSenses.replace(/low.?light|lowlight/gi, "Darkvision");
    } else if (!hasDarkvision) {
      // Add Low-Light vision if they don't have it and don't already have Darkvision
      if (newSenses && !newSenses.includes("Low-Light")) {
        newSenses = `${newSenses}, Low-Light`;
      } else if (!newSenses) {
        newSenses = "Low-Light";
      }
    }

    valuesToSet[`data.senses`] = newSenses;
  }

  senseBonus.forEach((modifier) => {
    const sense = String(modifier.value || modifier.field || "");
    if (sense && sense.trim() && !currentSenses.includes(sense)) {
      let newSenses = currentSenses;

      // If the new sense is Darkvision, replace any existing Low-Light vision
      if (sense.toLowerCase() === "darkvision") {
        newSenses = currentSenses.replace(/low-light/gi, "Darkvision");
      }

      // Only append if the sense isn't already in the new senses string
      if (newSenses && !newSenses.includes(sense)) {
        newSenses = `${newSenses}, ${sense}`;
      } else if (!newSenses) {
        newSenses = sense;
      }

      valuesToSet[`data.senses`] = newSenses;
    }
  });

  // Check for trait bonuses
  const traitBonus = getEffectsAndModifiersForToken(record, ["trait"]);
  const currentTraits = record.data?.traits || [];
  const currentTraitsList = record.data?.traitsList || [];
  const newTraits = [...currentTraits];
  const newTraitsList = [...currentTraitsList];

  traitBonus.forEach((modifier) => {
    const trait = modifier.value || modifier.field || "";
    if (trait && typeof trait === "string") {
      // Set traits list
      const traitObject = {
        _id: generateUuid(),
        name: trait,
        identified: true,
        data: {},
      };

      // Add to traits array if not already present
      if (!newTraits.includes(trait)) {
        newTraits.push(trait);
      }

      // Add to traitsList if not already present
      const existingTrait = newTraitsList.find((t) => t.name === trait);
      if (!existingTrait) {
        newTraitsList.push(traitObject);
      }
    }
  });

  // Only update if there are changes
  if (JSON.stringify(newTraits) !== JSON.stringify(currentTraits)) {
    valuesToSet[`data.traits`] = newTraits;
  }
  if (JSON.stringify(newTraitsList) !== JSON.stringify(currentTraitsList)) {
    valuesToSet[`data.traitsList`] = newTraitsList;
  }

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

  // Determine the best proficiencies for class dcs / saving throws / armor / weapons
  // And set them on the character
  updateProficiencies(record, valuesToSet);

  // Check for feats that the character gets at their current level, and add (or remove empty slots)
  // to make sure it matches
  setFeatSlots(record, valuesToSet);

  const setActionsCallback = () => {
    setProvidedActions(record, callback);
  };

  if (Object.keys(valuesToSet).length > 0) {
    api.setValuesOnRecord(record, valuesToSet, (recordUpdated) => {
      updateAllAttributes(recordUpdated, setActionsCallback);
    });
  } else {
    updateAllAttributes(record, setActionsCallback);
  }

  // Check for choices that the character needs to make and
  // process each one sequentially (unless explicitly skipped to prevent infinite loops)
  if (!skipChoices) {
    processChoices(record);
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
function setTraits(traits, callback = undefined) {
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

  api.setValues(valuesToSet, (recordUpdated) => {
    if (callback) {
      callback(recordUpdated);
    }
  });
}

// Roll a saving throw for PF2e
function rollSave(record, type, dc = null, isSpell = false, isMacro = false) {
  if (!record || !type) {
    console.error("rollSave: Invalid record or type");
    return;
  }

  // Normalize the save type
  const saveType = type.toLowerCase();
  const validSaves = ["fortitude", "reflex", "will"];

  if (!validSaves.includes(saveType)) {
    console.error(`rollSave: Invalid save type '${type}'`);
    return;
  }

  // Get the save modifier from the record
  const saveMod = parseInt(record.data?.[`${saveType}Mod`] || "0", 10);

  // Get the proficiency level for display purposes
  const proficiencyLevel = parseInt(record.data?.[saveType] || "0", 10);
  const proficiencyNames = [
    "Untrained",
    "Trained",
    "Expert",
    "Master",
    "Legendary",
  ];
  const proficiencyName = proficiencyNames[proficiencyLevel] || "Untrained";

  // Capitalize the save type for display
  const saveDisplay = saveType.charAt(0).toUpperCase() + saveType.slice(1);

  // Build modifiers array for the roll
  const modifiers = [];

  // Add the total save modifier (includes ability + proficiency)
  if (saveMod !== 0) {
    modifiers.push({
      name: `${saveDisplay} (${proficiencyName})`,
      type: "",
      value: saveMod,
      active: true,
    });
  }

  // Get any additional modifiers from effects
  const additionalMods = getEffectsAndModifiersForToken(
    record,
    [`saveBonus`, `savePenalty`],
    saveType
  );

  const additionalModsSet = new Set();

  // If this is a spell, get the spell save modifiers
  if (isSpell) {
    const spellSaveMods = getEffectsAndModifiersForToken(
      record,
      [`saveBonus`, `savePenalty`],
      "spell"
    );
    spellSaveMods.forEach((mod) => {
      const modString = JSON.stringify(mod);
      if (!additionalModsSet.has(modString)) {
        additionalModsSet.add(modString);
        modifiers.push(mod);
      }
    });
  }

  // Determine the attribute for this save
  let attribute = "con"; // Fortitude uses CON
  if (saveType === "reflex") {
    attribute = "dex";
  } else if (saveType === "will") {
    attribute = "wis";
  }

  // Get all bonuses/penalties that apply to the save's attribute
  const allEffectMods = getEffectsAndModifiersForToken(
    record,
    [`allBonus`, `allPenalty`],
    attribute
  );

  // Add save-specific modifiers
  additionalMods.forEach((mod) => {
    const modString = JSON.stringify(mod);
    if (!additionalModsSet.has(modString)) {
      additionalModsSet.add(modString);
      modifiers.push({
        name: mod.name || "Save Modifier",
        type: mod.type || "",
        value: mod.value,
        active: true,
      });
    }
  });

  // Add attribute-based all bonuses/penalties unless already seen
  allEffectMods.forEach((mod) => {
    const modString = JSON.stringify(mod);
    if (!additionalModsSet.has(modString)) {
      additionalModsSet.add(modString);
      modifiers.push({
        name: `${mod.name || "All Modifier"} (${attribute.toUpperCase()})`,
        type: mod.type || "",
        value: mod.value,
        active: true,
      });
    }
  });

  // Prepare metadata for the roll handler
  const metadata = {
    rollName: `${saveDisplay} Save`,
    tooltip: `${saveDisplay} Saving Throw`,
    saveType: saveType,
  };

  // Add DC if provided
  if (dc !== null && dc !== undefined) {
    metadata.dc = dc;
  }

  // Add isSpell flag if true
  if (isSpell) {
    metadata.isSpell = true;
  }

  // Use promptRoll to allow players to modify the roll
  if (isMacro) {
    api.promptRollForToken(
      record,
      `${saveDisplay} Save`,
      "1d20",
      modifiers,
      metadata,
      "save"
    );
  } else {
    api.promptRoll(`${saveDisplay} Save`, "1d20", modifiers, metadata, "save");
  }
}

// Generate a clickable save macro for PF2e
function getSaveMacro(saveType, dc = null, isSpell = false, showDc = false) {
  if (!saveType) {
    console.error("getSaveMacro: Invalid saveType");
    return "";
  }

  // Normalize the save type
  const normalizedSaveType = saveType.toLowerCase();
  const validSaves = ["fortitude", "reflex", "will"];

  if (!validSaves.includes(normalizedSaveType)) {
    console.error(`getSaveMacro: Invalid save type '${saveType}'`);
    return "";
  }

  // Create snake_case name for the macro
  const saveNameSnakeCase = `${capitalize(normalizedSaveType)}_Save`;

  // Escape the save type for the macro
  const escapedSaveType = normalizedSaveType.replace(/'/g, "\\'");

  // Build the macro content that gets selected tokens and rolls for each
  let macroContent = `const selectedTokens = api.getSelectedOrDroppedToken();
selectedTokens.forEach(token => {
  rollSave(token, '${escapedSaveType}'`;

  // Add DC parameter
  if (dc !== null && dc !== undefined) {
    macroContent += `, ${dc}`;
  } else {
    macroContent += `, null`;
  }

  // Add isSpell parameter
  macroContent += `, ${isSpell}, true`;

  // Close the function call and forEach
  macroContent += `);
});`;

  // Build the macro label
  let macroLabel = `Roll_${saveNameSnakeCase}`;
  if (dc !== null && dc !== undefined && showDc) {
    macroLabel += `_DC${dc}`;
  }

  // Generate the macro
  return `\`\`\`${macroLabel}
${macroContent}
\`\`\``;
}

// Roll a skill check for PF2e
function rollSkill(
  record,
  skillName,
  dc = null,
  isLore = false,
  loreSkillMod = 0,
  loreSkillTraining = 1,
  loreSkillStat = "int",
  isMacro = false
) {
  if (!record || !skillName) {
    console.error("rollSkill: Invalid record or skillName");
    return;
  }

  // Normalize the skill name
  const skill = skillName.toLowerCase();

  // Determine if this is Perception (special case)
  const isPerception = skill === "perception";

  // Get the skill modifier from the record
  const skillMod = isLore
    ? loreSkillMod
    : parseInt(record.data?.[`${skill}Mod`] || "0", 10);

  // Get the proficiency level for display purposes
  const proficiencyLevel = isLore
    ? loreSkillTraining
    : parseInt(record.data?.[skill] || "0", 10);
  const proficiencyNames = [
    "Untrained",
    "Trained",
    "Expert",
    "Master",
    "Legendary",
  ];
  const proficiencyName = proficiencyNames[proficiencyLevel] || "Untrained";

  // Capitalize the skill name for display
  const skillDisplay = skill.charAt(0).toUpperCase() + skill.slice(1);

  // Build modifiers array
  const modifiers = [];

  // Add the total skill modifier (includes ability + proficiency)
  if (skillMod !== 0) {
    modifiers.push({
      name: `${skillName} (${proficiencyName})`,
      type: "",
      value: skillMod,
      active: true,
    });
  }

  // Get skill-specific modifiers
  const additionalModsSet = new Set();
  let additionalMods;
  if (isPerception) {
    // Perception gets special treatment with perception-specific bonuses
    additionalMods = getEffectsAndModifiersForToken(
      record,
      [`perceptionBonus`, `perceptionPenalty`, `skillBonus`, `skillPenalty`],
      "perception"
    );
  } else {
    // Regular skills get skill bonuses
    additionalMods = getEffectsAndModifiersForToken(
      record,
      [`skillBonus`, `skillPenalty`],
      skill
    );
  }

  // Determine the attribute for this skill
  let attribute = "";
  if (isPerception) {
    attribute = "wis";
  } else if (isLore) {
    attribute = loreSkillStat;
    // If attribute is undefined or empty, get default ability from skill
    if (!attribute) {
      attribute = "int";
    }
  } else {
    // Get attribute setting from record
    attribute = record.data?.[`${skill}Ability`] || "";
    // If attribute is undefined or empty, get default ability from skill
    if (!attribute) {
      attribute = getPathfinderSkills()[skill];
    }
  }

  // Get all bonuses/penalties that apply to the skill's attribute
  let allEffectMods = [];
  if (attribute) {
    allEffectMods = getEffectsAndModifiersForToken(
      record,
      ["allBonus", "allPenalty", "skillBonus", "skillPenalty"],
      attribute
    );
  }

  // Add skill-specific modifiers
  additionalMods.forEach((mod) => {
    const modString = JSON.stringify(mod);
    if (!additionalModsSet.has(modString)) {
      additionalModsSet.add(modString);
      modifiers.push({
        name: mod.name || "Skill Modifier",
        type: mod.type || "",
        value: mod.value,
        active: true,
      });
    }
  });

  // Add attribute-based all bonuses/penalties
  allEffectMods.forEach((mod) => {
    const modString = JSON.stringify(mod);
    if (!additionalModsSet.has(modString)) {
      additionalModsSet.add(modString);
      modifiers.push({
        name: `${mod.name || "All Modifier"} (${attribute.toUpperCase()})`,
        type: mod.type || "",
        value: mod.value,
        active: true,
      });
    }
  });

  // Prepare metadata for the roll handler
  const metadata = {
    rollName: `${capitalize(skillName)}`,
    tooltip: `${capitalize(skillName)} Skill Check`,
    skillName: skill,
  };

  if (isPerception) {
    metadata.tooltip = `Perception Check`;
  }

  // Add DC if provided
  if (dc !== null && dc !== undefined) {
    metadata.dc = dc;
  }

  // Use promptRoll to allow players to modify the roll
  if (isMacro) {
    api.promptRollForToken(
      record,
      `${skillDisplay} Check`,
      "1d20",
      modifiers,
      metadata,
      "skill"
    );
  } else {
    api.promptRoll(
      `${skillDisplay} Check`,
      "1d20",
      modifiers,
      metadata,
      "skill"
    );
  }
}

// Generate a clickable skill check macro for PF2e
function getSkillCheckMacro(skillName, dc = null) {
  if (!skillName) {
    console.error("getSkillCheckMacro: Invalid skillName");
    return "";
  }

  // Normalize the skill name
  const skill = skillName.toLowerCase();

  // Create snake_case name for the macro
  const skillNameSnakeCase =
    capitalize(skillName).replace(/\s+/g, "_") + "_Check";

  // Escape the skill name for the macro
  const escapedSkillName = skill.replace(/'/g, "\\'");

  // Build the macro content that gets selected tokens and rolls for each
  let macroContent = `const selectedTokens = api.getSelectedOrDroppedToken();
selectedTokens.forEach(token => {
  rollSkill(token, '${escapedSkillName}'`;

  // Add DC parameter
  if (dc !== null && dc !== undefined) {
    macroContent += `, ${dc}, false, 0, 1, "int", true`;
  } else {
    macroContent += `, null, false, 0, 1, "int", true`;
  }

  // Close the function call and forEach
  macroContent += `);
});`;

  // Build the macro label
  let macroLabel = `Roll_${skillNameSnakeCase}`;
  if (dc !== null && dc !== undefined) {
    macroLabel += `_DC${dc}`;
  }

  // Generate the macro
  return `\`\`\`${macroLabel}
${macroContent}
\`\`\``;
}

// For a quick custom macro
function rollSavingThrow(save, dc) {
  const escapedSaveType = save.toLowerCase().replace(/'/g, "\\'");
  const selectedTokens = api.getSelectedOrDroppedToken();
  selectedTokens.forEach((token) => {
    rollSave(token, escapedSaveType, dc);
  });
}

// For a quick custom skill macro
function rollSkillCheck(skill, dc) {
  const escapedSkillName = skill.toLowerCase().replace(/'/g, "\\'");
  const selectedTokens = api.getSelectedOrDroppedToken();
  selectedTokens.forEach((token) => {
    rollSkill(token, escapedSkillName, dc, false, 0, 1, "int", true);
  });
}

function updateTotalBulk(record, setValue = true) {
  // Update total weight
  const items = record?.data?.inventory || [];
  let totalBulk = 0;
  items.forEach((item) => {
    if (item.data?.carried !== "dropped") {
      let weight = parseFloat(item.data?.bulk?.value || "0");

      // If heldOrStowed is set, and it's not dropped or carried
      if (item.data?.bulk?.heldOrStowed && item.data?.carried !== "equipped") {
        weight = item.data?.bulk?.heldOrStowed;
      }

      // Armor that is carried is 1 bulk more
      if (item.data?.type === "armor" && item.data?.carried !== "equipped") {
        weight += 1;
      }

      let count = parseFloat(item.data?.count || "0");
      if (count === undefined || isNaN(count)) {
        count = 0;
      }
      if (weight !== undefined && !isNaN(weight)) {
        totalBulk += weight * count;
      }

      // Get the total bulk of all backpacks (containers)
      if (item.data?.type === "backpack") {
        let totalBulkOfPack = parseFloat(item.data?.bulkUsed || "0");
        // Subtract what's ignored
        totalBulkOfPack = Math.max(
          0,
          totalBulkOfPack - parseFloat(item.data?.bulk?.ignored || "0")
        );
        totalBulk += totalBulkOfPack;
      }
    }
  });

  // Include coinage if set
  const includeCoinage = api.getSetting("coinWeight") === "yes";
  if (includeCoinage) {
    const totalCoins =
      (record?.data?.cp || 0) +
      (record?.data?.sp || 0) +
      (record?.data?.gp || 0) +
      (record?.data?.pp || 0);
    totalBulk += Math.floor(totalCoins / 1000);
  }

  totalBulk = Math.round(totalBulk * 100) / 100;

  if (setValue) {
    api.setValuesOnRecord(record, { "data.totalBulk": totalBulk });
  } else {
    return totalBulk;
  }
}

// Helper function to convert size string to grid squares (1 square = 5 feet)
function getSizeInSquares(size) {
  const sizeMap = {
    tiny: 1,
    small: 1,
    medium: 1,
    large: 2,
    huge: 3,
    gargantuan: 4,
  };
  return sizeMap[size?.toLowerCase()] || 1;
}

// Helper function to check if a token is incapacitated and cannot act
function isTokenIncapacitated(token) {
  if (!token) {
    return true; // No token means can't act
  }

  // Check if token has any incapacitating effects
  const effects = token.effects || [];
  const incapacitatingConditions = [
    "dead",
    "dying",
    "paralyzed",
    "petrified",
    "unconscious",
    "stunned", // In PF2e, stunned can prevent actions
    "restrained", // Prevents attack
  ];

  for (const effect of effects) {
    const effectName = (effect.name || "").toLowerCase();
    // Check if the effect name contains any of the incapacitating conditions
    if (
      incapacitatingConditions.some((condition) =>
        effectName.includes(condition)
      )
    ) {
      return true;
    }
  }

  return false;
}

// Helper function to get the reach of a token
function getTokenReach(token) {
  if (!token) {
    return 5; // Default reach
  }

  // Check if token has a record with a reach property (for NPCs)
  // TODO CONFIRM THIS LOGIC
  const baseReach = token.record?.data?.reach || 5;

  // Check equipped melee weapons for reach trait
  const inventory = token.record?.data?.inventory || [];
  const equippedMeleeWeapons = inventory.filter((item) => {
    const isMelee = (item.data?.range || 0) === 0;
    const isEquipped = item.data?.carried === "equipped";
    return isMelee && isEquipped;
  });

  // Check if any equipped melee weapon has the reach trait
  let hasReachWeapon = false;
  for (const weapon of equippedMeleeWeapons) {
    const traits = weapon.data?.traits || [];
    const hasReachTrait = traits.some((trait) =>
      trait.toLowerCase().includes("reach")
    );
    if (hasReachTrait) {
      hasReachWeapon = true;
      break;
    }
  }

  // Reach weapons add 5 feet to the base reach
  return hasReachWeapon ? baseReach + 5 : baseReach;
}

function isOffGuard(token) {
  const effects = token?.effects || [];
  return effects.some(
    (effect) =>
      effect.name.toLowerCase().includes("off-guard") ||
      effect.name.toLowerCase().includes("off guard") ||
      effect.name.toLowerCase().includes("offguard")
  );
}

function getOffGuardTooltip() {
  return "You're distracted or otherwise unable to focus your full attention on defense. You take a –2 circumstance penalty to AC. Some effects give you the off-guard condition only to certain creatures or against certain attacks. Others—especially conditions—can make you off-guard against everything. If a rule doesn't specify that the condition applies only to certain circumstances, it applies to all of them, such as “The target is off-guard.”";
}

// Determines if an enemy is Off-Guard due to Flanking
// Per PF2e rules: A line drawn between the center of the flankers' spaces
// must pass through opposite sides or opposite corners of the target's space
function isOffGuardDueToFlanking({
  sourceToken,
  sourceReach = 5, // Default to 5ft reach
  otherTokens,
  target,
}) {
  const targetToken = target?.token;
  const targetDistance = target?.distance || 0;

  // Basic validation
  if (!otherTokens || otherTokens.length === 0) {
    return false;
  }

  if (!sourceToken || !targetToken) {
    return false;
  }

  // Check if source is within reach of target
  if (targetDistance > sourceReach) {
    return false;
  }

  // Get source position
  const sourcePos = sourceToken.position;
  const targetPos = targetToken.position;

  if (!sourcePos || !targetPos) {
    return false;
  }

  // Get target size in grid squares
  const targetSize =
    targetToken?.data?.size || targetToken?.record?.data?.size || "medium";
  const targetSizeSquares = getSizeInSquares(targetSize);

  // Find allied tokens (same faction as source)
  const sourceFaction = sourceToken.faction;
  const allies = otherTokens.filter((token) => {
    // Must be the same faction
    if (token.faction !== sourceFaction) {
      return false;
    }

    // Must not be the source token itself
    if (token._id === sourceToken._id) {
      return false;
    }

    // Must not be the target token
    if (token._id === targetToken._id) {
      return false;
    }

    // Must be able to act (not incapacitated)
    if (isTokenIncapacitated(token)) {
      return false;
    }

    return true;
  });

  if (allies.length === 0) {
    return false;
  }

  // Helper function to check if line segment intersects with a line segment
  function lineSegmentsIntersect(p1, p2, p3, p4) {
    const ccw = (A, B, C) =>
      (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
    return (
      ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4)
    );
  }

  // Helper function to calculate distance from point to line segment
  function pointToLineDistance(point, lineStart, lineEnd) {
    const A = point.x - lineStart.x;
    const B = point.y - lineStart.y;
    const C = lineEnd.x - lineStart.x;
    const D = lineEnd.y - lineStart.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;

    if (lenSq !== 0) {
      param = dot / lenSq;
    }

    let xx, yy;

    if (param < 0) {
      xx = lineStart.x;
      yy = lineStart.y;
    } else if (param > 1) {
      xx = lineEnd.x;
      yy = lineEnd.y;
    } else {
      xx = lineStart.x + param * C;
      yy = lineStart.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Helper function to check if line between two allies passes through opposite sides
  function doesLineCrossOppositeSides(pos1, pos2) {
    // Define the target's bounding box based on its size and grid system rules
    // Odd-sized tokens (1x1, 3x3, 5x5): position IS the center square
    // Even-sized tokens (2x2, 4x4, 6x6): position is offset inward from top-right corner

    let left, right, top, bottom;

    if (targetSizeSquares % 2 === 1) {
      // Odd-sized token: position is the center
      // For grid-based flanking, we need the edges of the squares, not just grid positions
      // Each square extends 0.5 units in each direction from its grid position
      const halfSize = Math.floor(targetSizeSquares / 2);
      left = targetPos.x - halfSize - 0.5;
      right = targetPos.x + halfSize + 0.5;
      top = targetPos.y - halfSize - 0.5;
      bottom = targetPos.y + halfSize + 0.5;
    } else {
      // Even-sized token: position is offset inward from the actual top-right corner
      // For a 2x2 token, position is at the top-right corner
      // For a 4x4 token, position is 1 square inward from top-right (at row 1, col 2 from right)
      // The offset is (size/2 - 1) squares from the actual corner
      const offset = targetSizeSquares / 2 - 1;

      // Position is offset inward, so actual top-right corner is at:
      // pos.x + offset (right), pos.y - offset (top)
      right = targetPos.x + offset + 0.5;
      left = right - targetSizeSquares;
      top = targetPos.y - offset - 0.5;
      bottom = top + targetSizeSquares;
    }

    // Define the four corners of the target's bounding box
    const topLeft = { x: left, y: top };
    const topRight = { x: right, y: top };
    const bottomLeft = { x: left, y: bottom };
    const bottomRight = { x: right, y: bottom };

    // For opposite-side detection, check if the line passes through the target's bounding box
    // when the flankers are on opposite sides of the target's center

    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    // Determine which sides of the center each flanker is on
    const pos1OnLeft = pos1.x < centerX;
    const pos1OnRight = pos1.x > centerX;
    const pos1OnTop = pos1.y < centerY;
    const pos1OnBottom = pos1.y > centerY;

    const pos2OnLeft = pos2.x < centerX;
    const pos2OnRight = pos2.x > centerX;
    const pos2OnTop = pos2.y < centerY;
    const pos2OnBottom = pos2.y > centerY;

    // Check if flankers are on opposite sides (horizontally or vertically)
    const oppositeHorizontally =
      (pos1OnLeft && pos2OnRight) || (pos1OnRight && pos2OnLeft);
    const oppositeVertically =
      (pos1OnTop && pos2OnBottom) || (pos1OnBottom && pos2OnTop);

    // For opposite-side flanking, check if the line segment intersects the bounding box
    let passesHorizontally = false;
    let passesVertically = false;

    if (oppositeHorizontally || oppositeVertically) {
      // Check if line intersects with any of the four edges of the bounding box
      const intersectsTop = lineSegmentsIntersect(
        pos1,
        pos2,
        topLeft,
        topRight
      );
      const intersectsBottom = lineSegmentsIntersect(
        pos1,
        pos2,
        bottomLeft,
        bottomRight
      );
      const intersectsLeft = lineSegmentsIntersect(
        pos1,
        pos2,
        topLeft,
        bottomLeft
      );
      const intersectsRight = lineSegmentsIntersect(
        pos1,
        pos2,
        topRight,
        bottomRight
      );

      // Also check if either point is inside the bounding box
      const pos1Inside =
        pos1.x >= left && pos1.x <= right && pos1.y >= top && pos1.y <= bottom;
      const pos2Inside =
        pos2.x >= left && pos2.x <= right && pos2.y >= top && pos2.y <= bottom;

      // For valid flanking, the line must pass through OPPOSITE sides, not adjacent sides
      // Horizontal flanking: line must cross BOTH left AND right edges (or one flanker inside)
      if (oppositeHorizontally) {
        if ((intersectsLeft && intersectsRight) || pos1Inside || pos2Inside) {
          passesHorizontally = true;
        }
      }

      // Vertical flanking: line must cross BOTH top AND bottom edges (or one flanker inside)
      if (oppositeVertically) {
        if ((intersectsTop && intersectsBottom) || pos1Inside || pos2Inside) {
          passesVertically = true;
        }
      }
    }

    // For diagonal flanking, check if the line passes close to opposite corners
    // A line passes through opposite corners if it's close to both corners of a diagonal
    const threshold = 0.1; // Tolerance for "close enough" to corner

    const distToTopLeft = pointToLineDistance(topLeft, pos1, pos2);
    const distToTopRight = pointToLineDistance(topRight, pos1, pos2);
    const distToBottomLeft = pointToLineDistance(bottomLeft, pos1, pos2);
    const distToBottomRight = pointToLineDistance(bottomRight, pos1, pos2);

    // Check if line passes through top-left to bottom-right diagonal
    const passesTopLeftToBottomRight =
      distToTopLeft < threshold && distToBottomRight < threshold;

    // Check if line passes through top-right to bottom-left diagonal
    const passesTopRightToBottomLeft =
      distToTopRight < threshold && distToBottomLeft < threshold;

    const passesDiagonally =
      passesTopLeftToBottomRight || passesTopRightToBottomLeft;

    return passesHorizontally || passesVertically || passesDiagonally;
  }

  // Check each ally to see if they create a flanking position
  for (const ally of allies) {
    // Get ally's reach
    const allyReach = getTokenReach(ally);

    // Check if ally is within reach of the target
    const allyDistance = api.getDistance(ally, targetToken);
    if (allyDistance > allyReach) {
      continue; // Ally is not within reach of target
    }

    const allyPos = ally.position;
    if (!allyPos) {
      continue;
    }

    // Check if the line between source and ally passes through opposite sides
    if (doesLineCrossOppositeSides(sourcePos, allyPos)) {
      return true;
    }
  }

  return false;
}

// Automatically determine an animation based on the attack or spell damage and ranged/melee
function getAnimationFor({
  abilityName,
  damage = "",
  healing = "",
  isRanged = false,
}) {
  if (!abilityName) return null;

  const animation = {
    animationName: isRanged ? "bolt_1" : "slash_1",
    sound: isRanged ? "bolt_1" : "slash_1",
    moveToDestination: isRanged,
    stretchToDestination:
      isRanged &&
      (abilityName.toLowerCase().match(/\bray\b/i) ||
        abilityName.toLowerCase().match(/\bspray\b/i) ||
        abilityName.toLowerCase().match(/\bbeam\b/i) ||
        abilityName.toLowerCase().match(/\bdisintegrate\b/i)),
    destinationOnly: false,
    startAtCenter: false,
  };

  if (!damage) {
    animation.animationName = "";
    animation.sound = "";
  }

  if (
    isRanged &&
    damage &&
    (abilityName.toLowerCase().match(/\borb\b/i) ||
      abilityName.toLowerCase().match(/\bmissile\b/i))
  ) {
    animation.animationName = "orb_1";
  }

  // If this is actually healing, we use a different animation
  if (healing) {
    animation.animationName = "healing_1";
    animation.scale = 0.75;
    animation.opacity = 1;
    animation.sound = "healing_1";
    animation.moveToDestination = false;
    animation.startAtCenter = true;
    animation.destinationOnly = true;
    return animation;
  }

  // Based on the damage, set the animation name and props
  if (damage.includes("fire")) {
    animation.animationName = "fire_1";
    animation.sound = "bolt_2";
    animation.hue = undefined;
    animation.contrast = undefined;
    animation.brightness = undefined;
    if (abilityName.toLowerCase().includes("fireball")) {
      animation.animationName = "fire_2";
    }
  } else if (damage.includes("cold")) {
    animation.animationName = "ice_1";
    animation.hue = 180;
    animation.contrast = 1.0;
    animation.brightness = 0.5;
  } else if (damage.includes("acid")) {
    animation.animationName = "splash_1";
    animation.sound = "water_1";
    animation.hue = 100;
    animation.contrast = 1.0;
    animation.brightness = 0.8;
  } else if (damage.includes("lightning")) {
    animation.animationName = "lightning_1";
    animation.sound = "lightning_1";
    animation.hue = 244;
    animation.opacity = 0.5;
    animation.contrast = 1.0;
    animation.brightness = 0.5;
  } else if (damage.includes("poison")) {
    animation.hue = 128;
    animation.contrast = 1.0;
    animation.brightness = 0.1;
  } else if (damage.includes("necrotic")) {
    animation.animationName = "necrotic_1";
    animation.hue = 240;
    animation.contrast = 0.1;
    animation.brightness = 0.1;
    animation.scale = 0.5;
    animation.opacity = 0.75;
  } else if (damage.includes("radiant")) {
    animation.animationName = "radiant_1";
    animation.hue = 50;
    animation.contrast = 1.0;
    animation.brightness = 0.8;
    animation.scale = 0.5;
    animation.opacity = 0.75;
  } else if (damage.includes("thunder")) {
    animation.animationName = "lightning_1";
    animation.sound = "lightning_1";
    animation.hue = 244;
    animation.contrast = 1.0;
    animation.brightness = 0.8;
  } else if (damage.includes("force")) {
    animation.hue = 284;
    animation.contrast = 1.0;
    animation.brightness = 0.2;
    if (abilityName.toLowerCase().includes("disintegrate")) {
      animation.hue = 128;
    }
  } else if (damage.includes("psychic")) {
    animation.hue = 330;
    animation.contrast = 1.0;
    animation.brightness = 0.2;
  } else if (damage.includes("piercing")) {
    animation.sound = isRanged ? "arrow_1" : "slash_1";
    // If this is a ranged bow use arrow_1 animationName
    if (
      (isRanged &&
        (abilityName.toLowerCase().match(/\bbow\b/i) ||
          abilityName.toLowerCase().match(/\bcrossbow\b/i))) ||
      abilityName.toLowerCase().match(/\longbow\b/i) ||
      abilityName.toLowerCase().match(/\bshortbow\b/i)
    ) {
      animation.animationName = "arrow_1";
    } else if (isRanged) {
      animation.animationName = "arrow_2";
    } else if (!isRanged) {
      animation.animationName = "pierce_1";
    }
  } else if (damage.includes("bludgeoning")) {
    animation.sound = isRanged ? "bolt_1" : "bludgeon_1";
    if (isRanged) {
      animation.animationName = "bullet_1";
    } else {
      animation.animationName = "bludgeon_1";
    }
  } else if (damage.includes("slashing")) {
    animation.sound = isRanged ? "bolt_1" : "slash_1";
  }

  // Alternatively, if the ability name includes something that indicates a metallic weapon, we use slash_2
  // or a whip, use whip_1, or guns use gun_1
  if (
    (abilityName.toLowerCase().includes("sword") ||
      abilityName.toLowerCase().includes("axe")) &&
    damage.includes("slashing")
  ) {
    animation.animationName = "slash_1";
    animation.sound = "slash_2";
  } else if (abilityName.toLowerCase().includes("whip")) {
    animation.animationName = "slash_1";
    animation.sound = "whip_1";
  } else if (abilityName.toLowerCase().includes("pistol")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("rifle")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("arquebus")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("musket")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("shotgun")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("revolver")) {
    animation.animationName = "bullet_2";
    animation.sound = "gun_1";
  } else if (abilityName.toLowerCase().includes("grenade")) {
    animation.animationName = "explosion_1";
    animation.sound = "explosive_1";
    animation.moveToDestination = false;
    animation.stretchToDestination = false;
    animation.destinationOnly = true;
  } else if (abilityName.toLowerCase().includes("gunpowder")) {
    animation.animationName = "explosion_1";
    animation.sound = "explosive_1";
    animation.moveToDestination = false;
    animation.stretchToDestination = false;
    animation.destinationOnly = true;
  } else if (abilityName.toLowerCase().includes("dynamite")) {
    animation.animationName = "explosion_1";
    animation.sound = "explosive_1";
    animation.moveToDestination = false;
    animation.stretchToDestination = false;
    animation.destinationOnly = true;
  } else if (abilityName.toLowerCase().includes("bomb")) {
    animation.animationName = "explosion_1";
    animation.sound = "explosive_1";
    animation.moveToDestination = false;
    animation.stretchToDestination = false;
    animation.destinationOnly = true;
  }

  if (!damage && !healing) {
    if (abilityName.match(/\bshield\b/i)) {
      animation.animationName = "shield_1";
      animation.sound = "healing_1";
    }
  }

  if (!animation.animationName) {
    // If not a spell or ability, we can't determine an animation
    return null;
  }

  return animation;
}

/**
 * Helper function to get damage type, string, and modifiers for a weapon/spell/item
 * @returns {Object} - { damageType, damageString, damageMod, strikingRuneMod, deadlyDie, isMelee, isThrown, isPropulsive, hasDeathTrait, isSpell, isItem }
 */
function getWeaponDamageInfo(record, weapon) {
  const isMelee = (weapon.data?.range || 0) === 0;
  const hasThrownTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("thrown")
  );
  const hasDeathTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("death")
  );
  // Check for two-hand trait and parse the die size
  // Format: "Two Hand d10", "Two-Hand d10", "Two-Hand-d10", "TwoHand d10", etc.
  let twoHandDie = null;
  const twoHandTrait = weapon.data?.traits?.find((trait) => {
    const normalized = trait.toLowerCase().replace(/[\s\-]+/g, "");
    return normalized.includes("twohand");
  });
  if (twoHandTrait) {
    // Match with optional spaces or hyphens between "two hand" and die size
    const match = twoHandTrait.match(/two[\s\-]*hand[\s\-]*(d\d+)/i);
    if (match) {
      twoHandDie = match[1].toLowerCase(); // e.g., "d10"
    }
  }

  const isSpell = weapon.recordType === "spells";
  const isItem =
    weapon.recordType === "items" && weapon.data?.type !== "weapon";
  const isThrown = hasThrownTrait && weapon.data?.rangeToggleBtn === "ranged";

  let isPropulsive = false;
  // If the weapon has the propulsive trait we only do half strength
  if (
    weapon.data?.traits?.some((trait) =>
      trait.toLowerCase().includes("propulsive")
    )
  ) {
    isPropulsive = true;
  }

  // Check for deadly trait and parse the die size
  // Format: "Deadly d4", "Deadly d10", "Deadly-d10", etc.
  let deadlyDie = null;
  const deadlyTrait = weapon.data?.traits?.find((trait) =>
    trait.toLowerCase().startsWith("deadly")
  );
  if (deadlyTrait) {
    // Match with optional space or hyphen between "deadly" and die size
    const match = deadlyTrait.match(/deadly[\s\-]*(d\d+)/i);
    if (match) {
      deadlyDie = match[1].toLowerCase(); // e.g., "d10"
    }
  }

  // Check for fatal trait the same way
  let fatalDie = null;
  const fatalTrait = weapon.data?.traits?.find((trait) =>
    trait.toLowerCase().startsWith("fatal")
  );
  if (fatalTrait) {
    // Match with optional space or hyphen between "fatal" and die size
    const match = fatalTrait.match(/fatal[\s\-]*(d\d+)/i);
    if (match) {
      fatalDie = match[1].toLowerCase(); // e.g., "d10"
    }
  }

  let damageType = weapon.data?.damage.damageType;

  // If this is a versatile weapon and we have a different type, use that
  if (weapon.data?.versatilePiercing) {
    damageType = "piercing";
  } else if (weapon.data?.versatileBludgeoning) {
    damageType = "bludgeoning";
  } else if (weapon.data?.versatileSlashing) {
    damageType = "slashing";
  }

  // Get the damage modifier (STR/DEX)
  let damageMod = {
    name: "Strength",
    value: 0,
    active: true,
    type: damageType,
  };

  // If we add strength to the damage, add the strength modifier
  // Don't add for spells or non-weapon items
  if (!isSpell && !isItem && (isMelee || isThrown || isPropulsive)) {
    const isPositive = record.data?.str > 0;
    if (isPropulsive) {
      // Add half strength for propulsive weapons if positive, else add whole strength
      if (isPositive) {
        damageMod.value = Math.floor(record.data?.str / 2);
        damageMod.name = "Half Strength (Propulsive)";
      } else {
        damageMod.value = record.data?.str;
        damageMod.name = "Strength (Propulsive)";
      }
    } else {
      damageMod.value = record.data?.str;
    }
  }

  // Check for striking runes and create modifier
  // Striking runes add extra weapon damage dice of the same type
  const strikingRune = parseInt(weapon.data?.runes?.striking || "0", 10);
  let strikingRuneMod = null;

  if (strikingRune > 0 && weapon.data?.damage?.die) {
    const strikingNames = {
      1: "Striking",
      2: "Greater Striking",
      3: "Major Striking",
    };

    strikingRuneMod = {
      name: strikingNames[strikingRune] || "Striking",
      value: `${strikingRune}${weapon.data.damage.die}`,
      active: true,
      type: damageType,
      valueType: "string",
    };
  }

  // TODO if this is a spell or item, get damage from formula

  let damageDie = weapon.data?.damage.die;
  if (twoHandDie && weapon.data?.handBtn === "two") {
    damageDie = twoHandDie;
  }
  let numDice = weapon.data?.damage.dice;

  const damageString = `${numDice}${damageDie} ${damageType}`;
  const fatalDamageString = fatalDie
    ? `${numDice}${fatalDie} ${damageType}`
    : null;

  return {
    damageType,
    damageString,
    damageMod,
    strikingRuneMod,
    deadlyDie,
    fatalDie,
    fatalDamageString,
    isMelee,
    isThrown,
    isPropulsive,
    hasDeathTrait,
    isSpell,
    isItem,
  };
}

function performAttackRoll(record, weapon, weaponDataPath, attackNumber = 1) {
  const valuesToSet = {};
  const isMelee = (weapon.data?.range || 0) === 0;
  const hasThrownTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("thrown")
  );
  const hasFinesseTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("finesse")
  );
  const hasAgileTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("agile")
  );
  const range = weapon.data?.range || 0;
  const hasReachTrait = weapon.data?.traits?.some((trait) =>
    trait.toLowerCase().includes("reach")
  );

  // Create a list of all traits as tags that we'll add to the roll message
  const traits = weapon.data?.traits || [];

  // TODO make sure this is right for NPC's reach later
  let reach = record.data?.reach || 5;
  if (hasReachTrait) {
    reach += 5;
  }

  const isThrown = hasThrownTrait && weapon.data?.rangeToggleBtn === "ranged";
  const requiresReload = (weapon.data?.reload || 0) > 0 && !isMelee;

  if (requiresReload && !weapon.data?.loadedAmmo) {
    api.showNotification("You need to reload first!", "red", "Out of Ammo");
    return;
  }

  let abilityScore = "str";
  let addStrengthToDamage = true;
  let isPropulsive = false;
  // If the weapon has the propulsive trait we only do half strength
  if (
    weapon.data?.traits?.some((trait) =>
      trait.toLowerCase().includes("propulsive")
    )
  ) {
    isPropulsive = true;
  }

  if (isThrown || !isMelee) {
    // Thrown and ranged always use dex
    abilityScore = "dex";
    // Only if thrown
    addStrengthToDamage = isThrown;
    // Check if we have enough ammo
    const ammo = weapon.data?.ammo || 0;
    if (ammo <= 0) {
      api.showNotification("You are out of ammo!", "red", "Out of Ammo");
      return;
    }

    // Deduct ammo for all weapons that are using this, as well as the item itself
    const ammoSelected = weapon.data?.ammoSelect;
    const expend = parseInt(weapon.data?.expend || "1", 10) || 1; // Default to 1 if 0 or undefined

    // Get the ammo item to check for uses system
    let ammoItem = null;
    let newAmmoCount = 0;
    let newUsesValue = 0;
    let needsReload = false; // Track if we need to reload (consumed a full shot)

    if (ammoSelected) {
      const inventory = record.data?.inventory || [];
      ammoItem = inventory.find((item) => item._id === ammoSelected);
    } else {
      ammoItem = weapon;
    }

    // Calculate the new ammo count and uses value once
    if (ammoItem) {
      const usesMax = parseInt(ammoItem.data?.uses?.max || "0", 10);
      const usesValue = parseInt(
        ammoItem.data?.uses?.value || (usesMax > 0 ? usesMax : "0"),
        10
      );

      if (usesMax <= 1) {
        // No uses system or single-use, just deduct count
        newAmmoCount = Math.max(0, ammo - expend);
        newUsesValue = 0;
        needsReload = true; // Always need reload if no uses system
      } else {
        // Multi-use system
        const newValue = usesValue - expend;

        if (newValue > 0) {
          // Still have uses left on current item
          newAmmoCount = ammo;
          newUsesValue = newValue;
          needsReload = false; // Don't need reload, still have uses
        } else if (newValue === 0) {
          // Exactly used up this item, deduct count and reset to max
          newAmmoCount = Math.max(0, ammo - 1);
          newUsesValue = usesMax;
          needsReload = true; // Need reload, consumed full item
        } else {
          // Went negative, deduct count and calculate carry-over
          const countToDeduct = Math.ceil(Math.abs(newValue) / usesMax);
          newAmmoCount = Math.max(0, ammo - countToDeduct);
          const remainder = Math.abs(newValue) % usesMax;
          newUsesValue = remainder > 0 ? usesMax - remainder : usesMax;
          needsReload = true; // Need reload, consumed full item(s)
        }
      }
    } else {
      // Fallback if no ammo item found
      newAmmoCount = Math.max(0, ammo - expend);
      newUsesValue = 0;
      needsReload = true;
    }

    // Apply the calculated values to all relevant items
    if (ammoSelected) {
      const inventory = record.data?.inventory || [];
      inventory.forEach((item, index) => {
        if (item._id === ammoSelected) {
          // Update the ammo item itself
          valuesToSet[`data.inventory.${index}.data.count`] = newAmmoCount;
          const usesMax = parseInt(item.data?.uses?.max || "0", 10);
          if (usesMax > 1) {
            valuesToSet[`data.inventory.${index}.data.uses.value`] =
              newUsesValue;
          }
        }
        if (item.data?.ammoSelect === ammoSelected) {
          // Update all weapons using this ammo
          valuesToSet[`data.inventory.${index}.data.ammo`] = newAmmoCount;
          const usesMax = parseInt(ammoItem?.data?.uses?.max || "0", 10);
          if (usesMax > 1) {
            valuesToSet[`data.inventory.${index}.data.uses.value`] =
              newUsesValue;
            valuesToSet[`data.inventory.${index}.data.uses.max`] = usesMax;
          }
          // If weapon requires reloading and we consumed a shot, set loadedAmmo to false
          if (requiresReload && needsReload) {
            valuesToSet[`data.inventory.${index}.data.loadedAmmo`] = false;
          }
        }
      });
    } else {
      // No ammo selected, update weapon itself
      valuesToSet[`${weaponDataPath}.data.ammo`] = newAmmoCount;
      const usesMax = parseInt(weapon.data?.uses?.max || "0", 10);
      if (usesMax > 1) {
        valuesToSet[`${weaponDataPath}.data.uses.value`] = newUsesValue;
      }
    }

    // If this weapon requires reloading and we consumed a shot, set loadedAmmo to false
    if (requiresReload && needsReload) {
      valuesToSet[`${weaponDataPath}.data.loadedAmmo`] = false;
    }
  } else if (
    hasFinesseTrait &&
    (record.data?.dex || 0) > (record.data?.str || 0)
  ) {
    // If melee, and has finesse trait, use dex if it's higher than str
    abilityScore = "dex";
  }

  // Get weapon damage info using helper function
  const weaponDamageInfo = getWeaponDamageInfo(record, weapon);
  const damageType = weaponDamageInfo.damageType;
  const damage = weaponDamageInfo.damageString;
  const fatalDamageString = weaponDamageInfo.fatalDamageString;
  const hasDeathTraitFromHelper = weaponDamageInfo.hasDeathTrait;
  const strikingRuneMod = weaponDamageInfo.strikingRuneMod;
  const deadlyDie = weaponDamageInfo.deadlyDie;
  const fatalDie = weaponDamageInfo.fatalDie;

  // Override damageMod logic for attack roll (uses addStrengthToDamage flag)
  let damageMod = {
    ...weaponDamageInfo.damageMod,
  };

  // In attack rolls, we use addStrengthToDamage instead of the helper's logic
  if (isMelee || addStrengthToDamage || isPropulsive) {
    const isPositive = record.data?.str > 0;
    if (isPropulsive) {
      // Add half strength for propulsive weapons if positive, else add whole strength
      if (isPositive) {
        damageMod.value = Math.floor(record.data?.str / 2);
        damageMod.name = "Half Strength (Propulsive)";
      } else {
        damageMod.value = record.data?.str;
        damageMod.name = "Strength (Propulsive)";
      }
    } else {
      damageMod.value = record.data?.str;
    }
  } else {
    damageMod.value = 0; // Don't add damage if conditions not met
  }

  const animation = weapon?.data?.animation?.animationName
    ? weapon?.data?.animation
    : undefined;

  // TODO persistent / splash damage

  // Check attackCalculation modifier to see if we use a differenet stat
  const attackCalculationMod = getEffectsAndModifiersForToken(
    record,
    ["attackCalculation"],
    undefined,
    weapon._id
  );
  attackCalculationMod.forEach((mod) => {
    const attackCalculation = mod.field;
    if (attackCalculation) {
      if (
        record.data?.[`${attackCalculation}`] > record.data?.[`${abilityScore}`]
      ) {
        abilityScore = attackCalculation.toLowerCase();
      }
    }
  });

  // Determine base proficiency with weapon
  const weaponCategory = (weapon.data?.itemCategory || "simple").toLowerCase();
  // Check proficiency
  const weaponProficiency = parseInt(
    record.data?.attacks?.[weaponCategory] || "0",
    10
  );
  const proficiencyNames = [
    "Untrained",
    "Trained",
    "Expert",
    "Master",
    "Legendary",
  ];
  const proficiencyName = proficiencyNames[weaponProficiency] || "Untrained";

  const modifiers = [];

  // Add the total proficiency modifier
  if (weaponProficiency !== 0) {
    // Calculate the modifier
    const level = parseInt(record.data?.level || "0", 10);
    let statMod = parseInt(record.data?.[`${abilityScore}`] || "0", 10);
    let modifier = weaponProficiency * 2 + level + statMod;
    modifiers.push({
      name: `${weaponCategory} (${proficiencyName})`,
      type: "",
      value: modifier,
      active: true,
    });
  }

  // Get bonuses for potenct runes
  const potencyRune = parseInt(weapon.data?.runes?.potency || "0", 10);
  if (potencyRune > 0) {
    modifiers.push({
      name: `Weapon Potency +${potencyRune}`,
      value: potencyRune,
      isPenalty: false,
      active: true,
      valueType: "number",
    });
  }

  // If this is the second or third attach we add MAP
  if (attackNumber === 2 || attackNumber === 3) {
    let mapPenalty = attackNumber === 2 ? -5 : -10;
    if (hasAgileTrait) {
      // If agile trait, -4 / -8
      mapPenalty = attackNumber === 2 ? -4 : -8;
    }
    // Check for MAP reduction modifier
    const mapReductionMod = getEffectsAndModifiersForToken(
      record,
      ["mapReduction"],
      undefined,
      weapon._id
    );

    if (mapReductionMod.length) {
      mapReductionMod.forEach((mod) => {
        const mapReduction = mod.value;
        if (
          (Math.abs(mapReduction) > 0 &&
            hasAgileTrait &&
            mod.field === "agile") ||
          (Math.abs(mapReduction) > 0 &&
            !hasAgileTrait &&
            mod.field !== "agile")
        ) {
          modifiers.push({
            name: `${mod.name} (Reduce MAP)`,
            value: Math.abs(mapReduction),
            isPenalty: false,
            valueType: "number",
            active: mod.active,
          });
        }
      });
    }
    modifiers.push({
      name: "Mutliple Attack Penalty",
      value: mapPenalty,
      isPenalty: true,
      valueType: "number",
      active: true,
    });
  }

  if (Object.keys(valuesToSet).length > 0) {
    api.setValues(valuesToSet);
  }

  // Get damage modifiers
  let damageModifiers = getEffectsAndModifiersForToken(
    record,
    ["damageBonus", "damagePenalty"],
    isMelee ? "melee" : "ranged",
    weapon._id
  );

  damageModifiers = damageModifiers.map((mod) => {
    return {
      ...mod,
      type: damageType,
    };
  });

  // Add striking rune modifier if present
  if (strikingRuneMod) {
    damageModifiers.unshift(strikingRuneMod);
  }

  // Push the damage mod, if there is one, to the top
  if (damageMod.value !== 0) {
    damageModifiers.unshift(damageMod);
  }

  // Determine if we are making a damage roll that ignores resistances / immunities
  const damageIgnoresResistances = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        mod.value.trim().toLowerCase().includes("resistance")
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  const damageIgnoresImmunities = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        (mod.value.trim().toLowerCase().includes("immunities") ||
          mod.value.trim().toLowerCase().includes("immunity"))
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  const damageIgnoresWeaknesses = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        mod.value.trim().toLowerCase().includes("weakness")
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  // Filter these out of the modifiers array, we don't need them to be toggleable
  const filteredDamageModifiers = damageModifiers.filter(
    (m) => !m.value.toString().toLowerCase().includes("ignore")
  );

  // Roll for each target or just once
  const targets = api.getTargets();
  const ourToken = api.getToken();
  const otherTokens = api.getOtherTokens();
  if (targets.length > 0) {
    for (const target of targets) {
      const targetName =
        target?.token?.identified === false
          ? target?.token?.record?.unidentifiedName
          : target?.token?.record?.name;
      const targetDistance = target?.distance || 0;

      // If this a ranged attack, add penalties based on range increment
      if (!isMelee || isThrown) {
        let rangePenalty = 0;
        let increment = 0;

        // Look up ignoreRangePenalty modifier
        const ignoreRangePenaltyMod = getEffectsAndModifiersForToken(
          record,
          ["ignoreRangePenalty"],
          undefined,
          weapon._id
        );
        let ignoreRangePenalty = 0;
        for (const mod of ignoreRangePenaltyMod) {
          if (mod.value > 0 && mod.value > ignoreRangePenalty) {
            ignoreRangePenalty = mod.value;
          }
        }

        // Calculate range increment penalty
        // No penalty within first range increment, -2 for each additional increment
        // Attacks beyond 6th increment (6x range) are impossible
        if (range > 0 && targetDistance > range) {
          increment = Math.ceil(targetDistance / range);

          // Attacks beyond 6th increment are impossible
          if (increment > 6) {
            api.showNotification(
              `Target is beyond maximum range (${6 * range} ft)!`,
              "red",
              "Out of Range"
            );
            continue;
          }

          // -2 penalty for each increment beyond the first
          rangePenalty = -(increment - 1) * 2;
        }

        // Add penalties based on range increment
        if (
          targetDistance > 0 &&
          rangePenalty < 0 &&
          increment > ignoreRangePenalty
        ) {
          modifiers.push({
            name: `Range Increment (${increment})`,
            value: rangePenalty,
            valueType: "number",
            isPenalty: true,
            active: true,
          });
        }
      }

      // Get modifiers for target
      // Get effects and modifiers for the target
      let autoCritical = false;
      const targetEffects = getAttackModifiersForTarget(
        target?.token,
        targetDistance
      );
      targetEffects.forEach((r) => {
        if (r.value === "critical") {
          autoCritical = true;
        } else {
          modifiers.push(r);
        }
      });

      // Get damage effects for the target
      const targetDamageEffects = getDamageEffectsForTarget(
        ourToken,
        target?.token
      );
      const allDamageModifiers = [...filteredDamageModifiers];
      targetDamageEffects.forEach((r) => {
        allDamageModifiers.push({
          ...r,
          type: damageType,
        });
      });

      // Check if target is off guard due to effects or flanking (only for melee attacks)
      // Per PF2e rules, flanking only applies to melee attacks
      let targetIsOffGuard = isOffGuard(target?.token);
      let targetIsOffGuardDueToFlanking = false;
      if (isMelee && !isThrown && !targetIsOffGuard) {
        targetIsOffGuardDueToFlanking = isOffGuardDueToFlanking({
          sourceToken: ourToken,
          sourceReach: reach,
          otherTokens: otherTokens,
          target: target,
        });
        targetIsOffGuard = targetIsOffGuardDueToFlanking;
      }

      let targetAc = getArmorClassForToken(
        target?.token,
        targetIsOffGuardDueToFlanking
      );

      const diceRoll = "1d20";
      const metadata = {
        attack: `${weapon.name}`,
        rollName: "Attack",
        tooltip: `Attack with ${weapon.name}`,
        weaponName: weapon.name,
        traits: traits,
        icon: isMelee && !isThrown ? "IconSword" : "IconBow",
        targetName: targetName,
        tokenId: ourToken?._id,
        targetId: target?.token?._id,
        autoCritical: autoCritical,
        dc: targetAc,
        damage: damage,
        fatalDamageString: fatalDamageString,
        damageModifiers: allDamageModifiers,
        damageIgnoresResistances: damageIgnoresResistances,
        damageIgnoresImmunities: damageIgnoresImmunities,
        damageIgnoresWeaknesses: damageIgnoresWeaknesses,
        isOffGuard: targetIsOffGuard,
        isRanged: !isMelee || isThrown,
        deadlyDie: deadlyDie,
        fatalDie: fatalDie,
        animation,
      };

      if (targetIsOffGuardDueToFlanking) {
        // Float text to show
        api.floatText(target?.token, "Off-Guard (Flanked)", "#ff7700");
      }

      // TODO set metadata needed in attack handler for target
      api.promptRoll(
        `Attack with ${weapon.name}`,
        diceRoll,
        modifiers,
        metadata,
        "attack"
      );
    }
  } else {
    const metadata = {
      attack: `${weapon.name}`,
      rollName: "Attack",
      tooltip: `Attack with ${weapon.name}`,
      traits: traits,
      weaponName: weapon.name,
      icon: isMelee && !isThrown ? "IconSword" : "IconBow",
      tokenId: ourToken?._id,
      damage: damage,
      fatalDamageString: fatalDamageString,
      damageModifiers: filteredDamageModifiers,
      damageIgnoresResistances: damageIgnoresResistances,
      damageIgnoresImmunities: damageIgnoresImmunities,
      damageIgnoresWeaknesses: damageIgnoresWeaknesses,
      hasDeathTrait: hasDeathTraitFromHelper,
      isRanged: !isMelee || isThrown,
      deadlyDie: deadlyDie,
      fatalDie: fatalDie,
      animation,
    };

    api.promptRoll(
      `Attack with ${weapon.name}`,
      "1d20",
      modifiers,
      metadata,
      "attack"
    );
  }
}

// Perform a damage roll with the given weapon (or ability)
function performDamageRoll(record, weapon, weaponDataPath, isCritical) {
  // Get weapon damage info using helper function
  const weaponDamageInfo = getWeaponDamageInfo(record, weapon);
  const damageType = weaponDamageInfo.damageType;
  let damage = weaponDamageInfo.damageString;
  const fatalDamageString = weaponDamageInfo.fatalDamageString;
  const damageMod = weaponDamageInfo.damageMod;
  const strikingRuneMod = weaponDamageInfo.strikingRuneMod;
  const deadlyDie = weaponDamageInfo.deadlyDie;
  const fatalDie = weaponDamageInfo.fatalDie;
  const isMelee = weaponDamageInfo.isMelee;
  const isThrown = weaponDamageInfo.isThrown;
  const hasDeathTrait = weaponDamageInfo.hasDeathTrait;
  const isSpell = weaponDamageInfo.isSpell;

  // Create a list of all traits as tags that we'll add to the roll message
  const traits = weapon.data?.traits || [];

  // TODO persistent / splash damage

  // Get damage modifiers
  let damageModifiers = getEffectsAndModifiersForToken(
    record,
    ["damageBonus", "damagePenalty"],
    isMelee ? "melee" : "ranged",
    weapon._id
  );

  damageModifiers = damageModifiers.map((mod) => {
    return {
      ...mod,
      type: damageType,
    };
  });

  // Add striking rune modifier if present
  if (strikingRuneMod) {
    damageModifiers.unshift(strikingRuneMod);
  }

  // Push the damage mod for STR, if there is one, to the top
  if (damageMod.value !== 0) {
    damageModifiers.unshift(damageMod);
  }

  // On critical hits, add deadly dice to damage modifiers
  // The number of deadly dice depends on striking runes
  let criticalOnlyDice = [];

  if (isCritical && deadlyDie) {
    // Determine number of deadly dice based on striking runes
    let strikingRuneLevel = 0;
    if (strikingRuneMod) {
      if (strikingRuneMod.name.includes("Major")) {
        strikingRuneLevel = 2;
      } else if (strikingRuneMod.name.includes("Greater")) {
        strikingRuneLevel = 1;
      } else {
        strikingRuneLevel = 0;
      }
    }

    // Number of deadly dice = 1 + striking rune level
    const numDeadlyDice = 1 + strikingRuneLevel;

    // Add deadly dice modifier
    const deadlyMod = {
      name: `Deadly`,
      value: `${numDeadlyDice}${deadlyDie}`,
      active: true,
      type: damageType,
      valueType: "string",
    };

    damageModifiers.push(deadlyMod);

    // Track the deadly dice so we don't double them
    // Extract die size (e.g., "d8" -> 8)
    const dieSizeMatch = deadlyDie.match(/d(\d+)/);
    const dieSize = dieSizeMatch ? parseInt(dieSizeMatch[1], 10) : 0;

    if (dieSize > 0) {
      // Add one entry for each deadly die
      for (let i = 0; i < numDeadlyDice; i++) {
        criticalOnlyDice.push({
          dieType: dieSize,
          damageType: damageType.toLowerCase(),
        });
      }
    }
  }

  // On critical hits, add fatal dice to damage modifiers
  if (isCritical && fatalDie) {
    damage = fatalDamageString;
    // Add modifier for the fatal die
    const fatalMod = {
      name: `Fatal`,
      value: `1${fatalDie}`,
      active: true,
      type: damageType,
      valueType: "string",
    };
    damageModifiers.push(fatalMod);

    const dieSizeMatch = fatalDie.match(/d(\d+)/);
    const dieSize = dieSizeMatch ? parseInt(dieSizeMatch[1], 10) : 0;

    // Add one entry for the fatal die
    criticalOnlyDice.push({
      dieType: dieSize,
      damageType: damageType.toLowerCase(),
    });
  }

  // Determine if we are making a damage roll that ignores resistances / immunities
  const damageIgnoresResistances = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        mod.value.trim().toLowerCase().includes("resistance")
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  const damageIgnoresImmunities = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        (mod.value.trim().toLowerCase().includes("immunities") ||
          mod.value.trim().toLowerCase().includes("immunity"))
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  const damageIgnoresWeaknesses = damageModifiers
    .filter(
      (mod) =>
        mod.valueType === "string" &&
        mod.value.trim().toLowerCase().startsWith("ignore") &&
        mod.value.trim().toLowerCase().includes("weakness")
    )
    ?.map((mod) => mod.value.split(" ")[1])
    .join(",");
  // Filter these out of the modifiers array, we don't need them to be toggleable
  const filteredDamageModifiers = damageModifiers.filter(
    (m) => !m.value.toString().toLowerCase().includes("ignore")
  );

  // Roll for each target or just once
  const targets = api.getTargets();
  const ourToken = api.getToken();
  if (targets.length > 0) {
    for (const target of targets) {
      // Get damage effects for the target
      const targetDamageEffects = getDamageEffectsForTarget(
        ourToken,
        target?.token
      );
      targetDamageEffects.forEach((r) => {
        filteredDamageModifiers.push({
          ...r,
          type: damageType,
        });
      });
    }
  }
  const metadata = {
    attack: `${weapon.name}`,
    traits: traits,
    rollName: "Damage",
    tooltip: `${weapon.name} Damage`,
    critical: isCritical,
    damageIgnoresResistances: damageIgnoresResistances,
    damageIgnoresImmunities: damageIgnoresImmunities,
    damageIgnoresWeaknesses: damageIgnoresWeaknesses,
    isRanged: !isMelee || isThrown,
    isSpell: isSpell,
    hasDeathTrait: hasDeathTrait,
    criticalOnlyDice: criticalOnlyDice,
  };

  api.promptRoll(
    `${weapon.name} Damage`,
    damage,
    filteredDamageModifiers,
    metadata,
    "damage"
  );
}

// Helper function to get Immunities, Weaknesses, and Resistances for PF2e
function getIWR(target) {
  const immunities = [];
  const weaknesses = {};
  const resistances = {};

  // Parse immunities (simple array of types)
  const immunityArray = target.data?.immunities || [];
  immunityArray.forEach((immunity) => {
    if (immunity) {
      immunities.push(immunity.toLowerCase().trim());
    }
  });

  // Parse weaknesses (format: "Fire 5", "Cold 10", etc.)
  const weaknessArray = target.data?.weaknesses || [];
  weaknessArray.forEach((weakness) => {
    if (weakness) {
      const match = weakness.match(/^(.+?)\s+(\d+)$/i);
      if (match) {
        const type = match[1].toLowerCase().trim();
        const value = parseInt(match[2], 10);
        weaknesses[type] = value;
      }
    }
  });

  // Parse resistances (format: "Fire 5", "Physical 3", etc.)
  const resistanceArray = target.data?.resistances || [];
  resistanceArray.forEach((resistance) => {
    if (resistance) {
      const match = resistance.match(/^(.+?)\s+(\d+)$/i);
      if (match) {
        const type = match[1].toLowerCase().trim();
        const value = parseInt(match[2], 10);
        resistances[type] = value;
      }
    }
  });

  return { immunities, weaknesses, resistances };
}

/**
 * Applies damage to selected or dropped tokens following PF2e rules.
 *
 * @param {Object} record - The record that initiated the damage (for ownership checks)
 * @param {Object} roll - The damage roll object containing:
 *   - types: Array of damage types with {type, value} properties
 *   - dice: Array of individual dice results with {type, value} properties
 *   - metadata: Additional roll metadata including:
 *     - critical: Boolean indicating critical hit
 *     - criticalOnlyDice: Array of {dieType, damageType} objects for dice that shouldn't be doubled (deadly/fatal)
 *     - hasDeathTrait: Boolean indicating death trait
 *     - damageIgnoresResistances: Comma-separated string of damage types that ignore resistances
 *     - damageIgnoresImmunities: Comma-separated string of damage types that ignore immunities
 *     - damageIgnoresWeaknesses: Comma-separated string of damage types that ignore weaknesses
 * @param {boolean} halfDamage - Whether to halve the damage (e.g., successful basic save)
 *
 * PF2e Critical Damage Rules:
 * - On a critical hit, damage is normally doubled (roll dice twice or double the total)
 * - Dice from deadly/fatal weapon traits are NOT doubled (they're critical-only bonuses)
 * - Use metadata.criticalOnlyDice to specify which dice shouldn't be doubled
 *   - Each entry: { dieType: 8, damageType: "slashing" } for a d8
 * - All modifiers, bonuses, and penalties are doubled
 * - After doubling, subtract the extra value from deadly/fatal dice
 * - Critical Hit Immunity: If target has immunity to "critical" or "critical hits", treat as normal hit
 *   - Damage is not doubled
 *   - Dying condition increases by 1 instead of 2
 * - Apply IWR (Immunities, Weaknesses, Resistances) after damage calculation
 * - Round down when halving damage (minimum 1 damage)
 *
 * PF2e Death Rules:
 * - Massive Damage: Instant death if damage >= 2× max HP (after all reductions)
 * - Death Trait: Instant death if reduced to 0 HP by damage with death trait
 * - Dying Condition: At 0 HP, gain Dying 1 + Wounded value
 * - Critical Hit Dying: Gain Dying 2 instead of 1 from critical hits (unless immune to critical)
 * - Death at Dying 4+
 *
 * @example
 * // Normal damage
 * applyDamage(null, rollData, false);
 *
 * // Critical hit with deadly dice (marked in metadata)
 * const roll = {
 *   types: [
 *     {type: 'slashing', value: 20},  // Normal damage: doubled
 *     {type: 'slashing', value: 8}    // Deadly dice: not doubled
 *   ],
 *   dice: [
 *     {type: 6, value: 4}, {type: 6, value: 5},  // 2d6 weapon dice
 *     {type: 8, value: 8}                         // 1d8 deadly die
 *   ],
 *   metadata: {
 *     critical: true,
 *     criticalOnlyDice: [
 *       { dieType: 8, damageType: "slashing" }  // The d8 is deadly, don't double
 *     ]
 *   }
 * };
 * applyDamage(null, roll, false);
 *
 * // Half damage (successful basic save)
 * applyDamage(null, rollData, true);
 *
 * // Death effect spell
 * const roll = {
 *   types: [{type: 'negative', value: 30}],
 *   metadata: { hasDeathTrait: true }
 * };
 * applyDamage(null, roll, false);
 */
function applyDamage(record, roll, halfDamage = false) {
  // Extract values from metadata
  const isCritical = roll.metadata?.critical === true;
  const hasDeathTrait = roll.metadata?.hasDeathTrait === true;

  // Parse damage ignore lists from metadata (comma-separated strings)
  const damageIgnoresResistances = (
    roll.metadata?.damageIgnoresResistances || ""
  )
    .split(",")
    .map((s) => s.toLowerCase().trim())
    .filter((s) => s.length > 0);
  const damageIgnoresImmunities = (roll.metadata?.damageIgnoresImmunities || "")
    .split(",")
    .map((s) => s.toLowerCase().trim())
    .filter((s) => s.length > 0);
  const damageIgnoresWeaknesses = (roll.metadata?.damageIgnoresWeaknesses || "")
    .split(",")
    .map((s) => s.toLowerCase().trim())
    .filter((s) => s.length > 0);

  let targets = api.getSelectedOrDroppedToken();

  // If record is not null, check if we're the GM or owner and use it
  if (record) {
    if (isGM || record?.record?.ownerId === userId) {
      targets = [record];
    }
  }

  // If we're a player and we did not drop on a record, get our owned tokens
  if (!isGM && targets.length === 0) {
    targets = api.getSelectedOwnedTokens().map((target) => target.token);
  }

  targets.forEach((target) => {
    // Apply damage
    if (target && target.data) {
      let damage = 0;

      const IWR = getIWR(target);

      // Check if target is immune to critical hits
      const immuneToCritical = IWR.immunities.some((immunity) =>
        ["critical", "critical hits", "critical hit", "crits", "crit"].includes(
          immunity.toLowerCase().trim()
        )
      );

      // Get list of critical-only dice that shouldn't be doubled (deadly/fatal)
      // Each entry has { dieType, damageType }
      const criticalOnlyDice = roll.metadata?.criticalOnlyDice || [];

      // First, calculate damage with PF2e critical rules
      // On a critical hit: double all damage EXCEPT dice from deadly/fatal traits
      // If target is immune to critical hits, treat as a normal hit
      const damageByType = {};

      // Process each damage type entry from the roll
      roll.types.forEach((type, index) => {
        const damageType = type.type || "untyped";
        let damageValue = type.value;

        // PF2e Critical Rule: Double damage unless it's from deadly/fatal trait
        // or target is immune to critical hits
        if (isCritical && !immuneToCritical) {
          damageValue *= 2; // Start by doubling everything
        }

        damageByType[damageType] =
          (damageByType[damageType] || 0) + damageValue;
      });

      // Now subtract the doubled critical-only dice
      // We need to process the raw roll dice to find and "un-double" the deadly dice
      // Skip this if target is immune to critical hits (damage wasn't doubled)
      if (
        isCritical &&
        !immuneToCritical &&
        criticalOnlyDice.length > 0 &&
        roll.dice
      ) {
        // Create a working copy of criticalOnlyDice to track which we've found
        const remainingCriticalDice = [...criticalOnlyDice];

        // Process dice from the end (deadly dice are added last)
        for (
          let i = roll.dice.length - 1;
          i >= 0 && remainingCriticalDice.length > 0;
          i--
        ) {
          const die = roll.dice[i];

          // Find a matching critical-only die
          const matchIndex = remainingCriticalDice.findIndex(
            (critDie) => critDie.dieType === die.type
          );

          if (matchIndex >= 0) {
            // Found a match - this die shouldn't have been doubled
            const critDie = remainingCriticalDice[matchIndex];
            const damageType = critDie.damageType || "untyped";

            // Subtract the extra value (we doubled it, but should have only counted it once)
            if (damageByType[damageType] !== undefined) {
              damageByType[damageType] -= die.value;
            }

            // Remove this entry from the remaining list
            remainingCriticalDice.splice(matchIndex, 1);
          }
        }
      }

      // Calculate total base damage (before IWR and before half)
      let baseDamage = 0;
      Object.keys(damageByType).forEach((type) => {
        baseDamage += damageByType[type];
      });

      // Apply half damage to the base if needed (e.g., successful basic save)
      let damageAfterHalf = baseDamage;
      if (halfDamage && baseDamage > 0) {
        damageAfterHalf = Math.floor(baseDamage / 2);
        // Minimum 1 damage if there was any damage to begin with
        if (damageAfterHalf < 1) {
          damageAfterHalf = 1;
        }
      }

      // PF2e: Apply Immunities, Weaknesses, and Resistances
      // These are applied AFTER halving
      let iwrAdjustment = 0;
      Object.keys(damageByType).forEach((type) => {
        const lowerType = type.toLowerCase();

        // Check Immunities first (all damage of this type is negated)
        if (!damageIgnoresImmunities.includes(lowerType)) {
          if (IWR.immunities.includes(lowerType)) {
            // Immune to this damage type - negate all damage
            iwrAdjustment -= damageAfterHalf;
            return; // Skip weakness/resistance for this type
          }
        }

        // Apply Weaknesses (add extra damage)
        if (!damageIgnoresWeaknesses.includes(lowerType)) {
          if (IWR.weaknesses[lowerType]) {
            iwrAdjustment += IWR.weaknesses[lowerType];
          }
        }

        // Apply Resistances (reduce damage)
        if (!damageIgnoresResistances.includes(lowerType)) {
          if (IWR.resistances[lowerType]) {
            iwrAdjustment -= IWR.resistances[lowerType];
          }
        }
      });

      // Final damage = halved damage + IWR adjustments
      damage = damageAfterHalf + iwrAdjustment;

      // We cannot deal negative damage
      if (damage < 0) {
        damage = 0;
      }

      var curhp = target.data?.curhp || 0;
      const maxHp = target.data?.hitpoints || 0;
      const oldTempHp = parseInt(target.data?.tempHp || "0", 10);

      // Check for Massive Damage (instant death)
      // "You die instantly if you ever take damage equal to or greater than double your maximum Hit Points in one blow."
      // This uses the actual damage taken after all reductions (IWR, half damage, etc.)
      let massiveDamage = false;
      if (damage >= maxHp * 2) {
        massiveDamage = true;
      }

      // Collect all values to change and their old values for undo
      const valuesToSet = {};
      const oldValues = {};

      // Store old values
      const oldHp = curhp;
      oldValues["data.curhp"] = oldHp;
      oldValues["data.tempHp"] = oldTempHp;

      // If damage > 0, float text
      if (damage > 0) {
        let message = `-${damage}`;
        if (immuneToCritical && isCritical) {
          message += "\n(Immune to Critical Hits)";
        }
        api.floatText(target, message, "#FF0000");
      }

      // First deduct from Temp HP
      const newTempHp = Math.max(oldTempHp - damage, 0);
      damage = Math.max(damage - oldTempHp, 0);
      let usedTempHp = false;
      if (newTempHp !== oldTempHp) {
        valuesToSet["data.tempHp"] = newTempHp;
        usedTempHp = true;
      }

      // Then deduct from Current HP
      curhp -= damage;

      // Check for instant death conditions
      let instantDeath = false;
      let deathReason = "";

      if (massiveDamage) {
        instantDeath = true;
        deathReason = "MASSIVE DAMAGE";
      } else if (hasDeathTrait && curhp <= 0) {
        // Death trait: "If you are reduced to 0 Hit Points by a death effect, you are slain instantly"
        instantDeath = true;
        deathReason = "DEATH EFFECT";
      }

      if (curhp < 0) {
        curhp = 0;
      }
      if (curhp > maxHp) {
        curhp = maxHp;
      }

      valuesToSet["data.curhp"] = curhp;

      const unIdentified = target.identified === false;
      const targetName = !unIdentified
        ? target.name || target.record.name
        : target.unidentifiedName || target.record.unidentifiedName;

      let message = `${targetName} took ${damage} damage.`;
      if (usedTempHp) {
        message = `${targetName} took ${damage} damage after deducting Temp HP.`;
      }

      // Handle death conditions
      if (instantDeath) {
        message += `\n**[center][color=red]INSTANT DEATH (${deathReason})[/color][/center]**`;
        // For characters, set dying to 4+ (dead)
        if (target.recordType === "characters") {
          oldValues["data.dying"] = parseInt(target.data?.dying || "0", 10);
          oldValues["data.wounded"] = parseInt(target.data?.wounded || "0", 10);
          valuesToSet["data.dying"] = 4;
          valuesToSet["data.wounded"] = 0;
          api.addEffect("Dead", target);
        }
        // For NPCs, add Dead effect
        if (target.recordType === "npcs") {
          api.addEffect("Dead", target);
        }
      } else if (curhp <= 0 && damage > 0) {
        // Not instant death, but reduced to 0 HP
        if (target.recordType === "characters") {
          // Characters gain Dying condition
          const currentDying = parseInt(target.data?.dying || "0", 10);
          const wounded = parseInt(target.data?.wounded || "0", 10);
          let newDying = currentDying + 1 + wounded;

          // Store old values
          oldValues["data.dying"] = currentDying;

          // Cap dying at 4 (death)
          if (newDying > 4) {
            newDying = 4;
          }

          // Check if this is from a critical hit (if isCritical is available)
          // If target is immune to critical hits, treat as normal hit
          if (
            typeof isCritical !== "undefined" &&
            isCritical &&
            !immuneToCritical
          ) {
            newDying = currentDying + 2 + wounded;
            message += `\n${targetName} gains Dying ${newDying} (critical hit increases dying by 2).`;
          } else {
            message += `\n${targetName} gains Dying ${newDying}.`;
          }

          valuesToSet["data.dying"] = newDying;

          // Check if dying >= 4 (death)
          if (newDying >= 4) {
            api.addEffect("Dead", target);
            message += `\n**[center][color=red]DEAD (Dying ${newDying})[/color][/center]**`;
          }
        } else if (target.recordType === "npcs") {
          // NPCs just die at 0 HP
          api.addEffect("Dead", target);
          message += `\n${targetName} is dead.`;
        }
      }

      // Apply all value changes in a single batch
      if (Object.keys(valuesToSet).length > 0) {
        api.setValuesOnTokenById(target._id, target.recordType, valuesToSet);
      }

      // Build undo macro with all old values as a single batch operation
      const macro =
        damage > 0 && !instantDeath && Object.keys(oldValues).length > 0
          ? `\n\`\`\`Undo\nif (isGM) { api.setValuesOnTokenById('${
              target._id
            }', '${target.recordType}', ${JSON.stringify(
              oldValues
            )}); api.editMessage(null, \`~${message}~\`); } else { api.showNotification('Only the GM can undo damage.', 'yellow', 'Notice'); }\n\`\`\``
          : "";

      api.sendMessage(
        `${message}${macro}`,
        undefined,
        undefined,
        undefined,
        target
      );
    }
  });
}
