const species = {
  elf: [
    {
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
        { name: "Dancing Lights", level: 1 },
        { name: "Faerie Fire", level: 3 },
        { name: "Darkness", level: 5 },
      ],
    },
    {
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
        { name: "cantrip", level: 1 },
        { name: "Detect Magic", level: 3 },
        { name: "Misty Step", level: 5 },
      ],
    },
    {
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
        { name: "Druidcraft", level: 1 },
        { name: "Longstrider", level: 3 },
        { name: "Pass without Trace", level: 5 },
      ],
    },
    {
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
        { name: "cantrip", level: 1 },
        { name: "Command", level: 3 },
        { name: "Silence", level: 5 },
      ],
    },
    {
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
        { name: "Starry Wisp", level: 1 },
        { name: "Command", level: 3 },
        { name: "Silence", level: 5 },
      ],
    },
  ],
  aasimar: [
    {
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
      spells: [
        { name: "Light", level: 1 },
      ],
    },
  ],
  dragonborn: [
    {
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
  ],
};
