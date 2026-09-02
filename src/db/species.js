import spells from "./spells";

const species = {
  elf: {
    drow: {
      name: "Drow Elf",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 120 feet.",
        },
        {
          name: "Elven Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).",
        },
        {
          name: "Fey Ancestry",
          val: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        },
        {
          name: "Keen Senses",
          val: "You have proficiency in the Insight, Perception, or Survival skill.",
        },
        {
          name: "Trance",
          val: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        },
      ],
      spells: [
        { spell: spells.cantrips.dancing_lights, level: 1 },
        { spell: spells.lv1.faerie_fire, level: 3 },
        { spell: spells.lv2.darkness, level: 5 },
      ],
    },
    high: {
      name: "High Elf",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Elven Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).",
        },
        {
          name: "Fey Ancestry",
          val: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        },
        {
          name: "Keen Senses",
          val: "You have proficiency in the Insight, Perception, or Survival skill.",
        },
        {
          name: "Trance",
          val: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        },
        {
          name: "High Magic",
          val: "You know the Prestidigitation cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list.",
        },
      ],
      spells: [
        { spell: "cantrip", level: 1 },
        { spell: spells.lv1.detect_magic, level: 3 },
        { spell: spells.lv2.misty_step, level: 5 },
      ],
    },
    wood: {
      name: "Wood Elf",
      creature_type: "Humanoid",
      size: "medium",
      speed: 35,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Elven Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).",
        },
        {
          name: "Fey Ancestry",
          val: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        },
        {
          name: "Keen Senses",
          val: "You have proficiency in the Insight, Perception, or Survival skill.",
        },
        {
          name: "Trance",
          val: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        },
        {
          name: "Wood Magic",
          val: "You know the Druidcraft cantrip.",
        },
      ],
      spells: [
        { spell: spells.cantrips.druidcraft, level: 1 },
        { spell: spells.lv1.longstrider, level: 3 },
        { spell: spells.lv2.pass_without_trace, level: 5 },
      ],
    },
    lorwyn: {
      name: "Lorwyn Elf",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Elven Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).",
        },
        {
          name: "Fey Ancestry",
          val: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        },
        {
          name: "Keen Senses",
          val: "You have proficiency in the Insight, Perception, or Survival skill.",
        },
        {
          name: "Trance",
          val: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        },
        {
          name: "Lorwyn Magic",
          val: "You know the Thorn Whip cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Druid spell list.",
        },
      ],
      spells: [
        { spell: "cantrip", level: 1 },
        { spell: spells.lv1.command, level: 3 },
        { spell: spells.lv2.silence, level: 5 },
      ],
    },
    shadowmoor: {
      name: "Shadowmoor Elf",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 120 feet.",
        },
        {
          name: "Elven Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).",
        },
        {
          name: "Fey Ancestry",
          val: "You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        },
        {
          name: "Keen Senses",
          val: "You have proficiency in the Insight, Perception, or Survival skill.",
        },
        {
          name: "Trance",
          val: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        },
        {
          name: "Shadowmoor Magic",
          val: "You know the Starry Wisp cantrip.",
        },
      ],
      spells: [
        { spell: spells.cantrips.starry_wisp, level: 1 },
        { spell: spells.lv1.command, level: 3 },
        { spell: spells.lv2.silence, level: 5 },
      ],
    },
  },
  aasimar: {
    name: "Aasimar",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Celestial Resistance",
        val: "You have Resistance to Necrotic damage and Radiant damage.",
      },
      {
        name: "Darkvision",
        val: "You have Darkvision with a range of 60 feet.",
      },
      {
        name: "Healing Hands",
        val: "As a Magic action, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can't use it again until you finish a Long Rest.",
      },
      {
        name: "Light Bearer",
        val: "You know the Light cantrip. Charisma is your spellcasting ability for it.",
      },
      {
        name: "Celestial Revelation",
        val: "When you reach character level 3, you can transform as a Bonus Action using one of the options below (choose the option each time you transform). The transformation lasts for 1 minute or until you end it (no action required). Once you transform, you can’t do so again until you finish a Long Rest. \nOnce on each of your turns before the transformation ends, you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your Proficiency Bonus, and the extra damage’s type is either Necrotic for Necrotic Shroud or Radiant for Heavenly Wings and Inner Radiance. \nHere are the transformation options: \n* Heavenly Wings. Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a Fly Speed equal to your Speed. \n* Inner Radiance. Searing light temporarily radiates from your eyes and mouth. For the duration, you shed Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your Proficiency Bonus. \n* Necrotic Shroud. Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn.",
      },
    ],
    spells: [{ spell: spells.cantrips.light, level: 1 }],
  },
  dragonborn: {
    name: "Dragonborn",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Draconic Ancestry",
        val: "Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance. \n* Black - Acid \n* Copper - Acid \n* Blue - Lightning \n* Bronze - Lightning \n* Brass - Fire \n* Gold - Fire \n* Red - Fire \n* Green - Poison \n* Silver - Cold \n* White - Cold",
      },
      {
        name: "Breath Weapon",
        val: "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10). \nYou can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
      },
      {
        name: "Damage Resistance",
        val: "You have Resistance to the damage type determined by your Draconic Ancestry trait.",
      },
      {
        name: "Darkvision",
        val: "You have Darkvision with a range of 60 feet.",
      },
      {
        name: "Draconic Flight",
        val: "When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition. During that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon. Once you use this trait, you can't use it again until you finish a Long Rest.",
      },
    ],
    spells: [],
  },
  dwarf: {
    name: "Dwarf",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Darkvision",
        val: "You have Darkvision with a range of 60 feet.",
      },
      {
        name: "Dwarven Resilience",
        val: "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
      },
      {
        name: "Dwarven Toughness",
        val: "Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.",
      },
      {
        name: "Stonecunning",
        val: "As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. \nYou can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
      },
    ],
    spells: [],
  },
  gnome: {
    forest: {
      name: "Gnome",
      creature_type: "Humanoid",
      size: "small",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Advantage on Intelligence, Wisdom, and Charisma saving throws.",
        },
        {
          name: "Gnomish Cunning",
          val: "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
        },
        {
          name: "Gnomish Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose one of the following options; whichever one you choose, Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage)",
        },
        {
          name: "Forest Gnome",
          val: "You know the Minor Illusion cantrip. \nYou also always have the Speak with Animals spell prepared. You can cast it without a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. You can also use any spell slots you have to cast the spell.",
        },
      ],
      spells: [
        { spell: spells.cantrips.minor_illusion, level: 1 },
        { spell: spells.lv1.speak_with_animals, level: 1 },
      ],
    },
    rock: {
      name: "Gnome",
      creature_type: "Humanoid",
      size: "small",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Advantage on Intelligence, Wisdom, and Charisma saving throws.",
        },
        {
          name: "Gnomish Cunning",
          val: "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
        },
        {
          name: "Gnomish Lineage",
          val: "You are part of a lineage that grants you supernatural abilities. Choose one of the following options; whichever one you choose, Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage)",
        },
        {
          name: "Rock Gnome",
          val: "You know the Mending and Prestidigitation cantrips. In addition, you can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5,1 HP), such as a toy, fire starter, or music box. When you create the device, you determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever you or another creature takes a Bonus Action to activate it with a touch. If the chosen effect has options within it, you choose one of those options for the device when you create it. For example, if you choose the spell's ignite-extinguish effect, you determine whether the device ignites or extinguishes fire; the device doesn't do both. You can have three such devices in existence at a time, and each falls apart 8 hours after its creation or when you dismantle it with a touch as a Utilize action.",
        },
      ],
      spells: [
        { spell: spells.cantrips.mending, level: 1 },
        { spell: spells.cantrips.prestidigitation, level: 1 },
      ],
    },
  },
  goliath: {
    name: "goliath",
    creature_type: "Humanoid",
    size: "medium",
    speed: 35,
    feats: [
      {
        name: "Powerful Build",
        val: "You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.",
      },
      {
        name: "Giant Ancestry",
        val: "You are descended from Giants. Choose one of the following benefits - a supernatural boon from your ancestry; you can use the chosen benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest: \n* Cloud's Jaunt (Cloud Giant). As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see. \n* Fire's Burn (Fire Giant). When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target. \n* Frost's Chill (Frost Giant). When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10 feet until the start of your next turn. \n* Hill's Tumble (Hill Giant). When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition. \n* Stone's Endurance (Stone Giant). When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. \n* Storm's Thunder (Storm Giant). When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.",
      },
      {
        name: "Large Form",
        val: "Starting at character level 5, you can change your size to Large as a Bonus Action if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required). For that duration, you have Advantage on Strength checks, and your Speed increases by 10 feet. Once you use this trait, you can't use it again until you finish a Long Rest.",
      },
    ],
    spells: [],
  },
  halfling: {
    name: "Halfling",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Brave",
        val: "You have Advantage on saving throws you make to avoid or end the Frightened condition.",
      },
      {
        name: "Halfling Nimbleness",
        val: "You can move through the space of any creature that is a size larger than you, but you can't stop in the same space.",
      },
      {
        name: "Luck",
        val: "When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.",
      },
      {
        name: "Naturally Stealthy",
        val: "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you.",
      },
    ],
    spells: [],
  },
  human: {
    name: "Human",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Resourceful",
        val: "You gain Heroic Inspiration whenever you finish a Long Rest.",
      },
      {
        name: "Skillful",
        val: "You gain proficiency in one skill of your choice.",
      },
      {
        name: "Versatile",
        val: "You gain an Origin feat of your choice. Skilled is recommended.",
      },
    ],
    spells: [],
  },
  orc: {
    name: "Orc",
    creature_type: "Humanoid",
    size: "medium",
    speed: 30,
    feats: [
      {
        name: "Adrenaline Rush",
        val: "You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. \nYou can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.",
      },
      {
        name: "Darkvision",
        val: "You have Darkvision with a range of 120 feet.",
      },
      {
        name: "Relentless Endurance",
        val: "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest.",
      },
    ],
    spells: [],
  },
  tiefling: {
    abyssal: {
      name: "Abyssal Tiefling",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Otherworldly Presence",
          val: "You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.",
        },
        {
          name: "Fiendish Legacy",
          val: "You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy).",
        },
        {
          name: "Abyssal Legacy",
          val: "You have Resistance to Poison damage. You also know the Poison Spray cantrip.",
        },
      ],
      spells: [
        { spell: spells.cantrips.thaumaturgy, level: 1 },
        { spell: spells.cantrips.poison_spray, level: 1 },
        { spell: spells.lv1.ray_of_sickness, level: 3 },
        { spell: spells.lv2.hold_person, level: 5 },
      ],
    },
    chthonic: {
      name: "Chthonic Tiefling",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Otherworldly Presence",
          val: "You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.",
        },
        {
          name: "Fiendish Legacy",
          val: "You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy).",
        },
        {
          name: "Chthonic Legacy",
          val: "You have Resistance to Necrotic damage. You also know the Chill Touch cantrip.",
        },
      ],
      spells: [
        { spell: spells.cantrips.thaumaturgy, level: 1 },
        { spell: spells.cantrips.chill_touch, level: 1 },
        { spell: spells.lv1.false_life, level: 3 },
        { spell: spells.lv2.ray_of_enfeeblement, level: 5 },
      ],
    },
    infernal: {
      name: "Infernal Tiefling",
      creature_type: "Humanoid",
      size: "medium",
      speed: 30,
      feats: [
        {
          name: "Darkvision",
          val: "You have Darkvision with a range of 60 feet.",
        },
        {
          name: "Otherworldly Presence",
          val: "You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.",
        },
        {
          name: "Fiendish Legacy",
          val: "You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy. \nWhen you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. \nIntelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy).",
        },
        {
          name: "Infernal Legacy",
          val: "You have Resistance to Fire damage. You also know the Fire Bolt cantrip.",
        },
      ],
      spells: [
        { spell: spells.cantrips.thaumaturgy, level: 1 },
        { spell: spells.cantrips.fire_bolt, level: 1 },
        { spell: spells.lv1.hellish_rebuke, level: 3 },
        { spell: spells.lv2.darkness, level: 5 },
      ],
    },
  },
};

export default species