import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-14';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.MERICA_ID, 'discuas', 251049),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.MERICA_ID, 'Babababababab', 265565),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Jokill31', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 200447),
      new Player(Guild.MERICA_ID, 'Kifyu', 183247),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:00:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 200447),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 181115),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:00:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198983),
      new Player(Guild.MERICA_ID, 'Drenz', 148819),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:26:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198983),
      new Player(Guild.MERICA_ID, '_sad1_', 123546),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:26:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.MERICA_ID, 'Mac', 192054),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:05:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.MERICA_ID, 'Bilbo', 186155),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:06:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      new Player(Guild.MERICA_ID, 'DerVehuel', 228387),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:45:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 392909),
      new Player(Guild.MERICA_ID, 'Dinobunny', 334696),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:56:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 279354),
      new Player(Guild.MERICA_ID, 'Juramar', 195003),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:58:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      new Player(Guild.MERICA_ID, 'Juramar', 121897),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:09:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      new Player(Guild.MERICA_ID, 'Tfy', 114189),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:11:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 186867),
      new Player(Guild.MERICA_ID, 'TanoOo', 127541),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:31:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.MERICA_ID, 'Dinobunny', 215215),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:03:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.MERICA_ID, 'Julian', 196343),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:04:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 423364),
      new Player(Guild.MERICA_ID, 'Jokill31', 369956),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:32:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      new Player(Guild.MERICA_ID, 'Dol', 139093),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:36:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      new Player(Guild.MERICA_ID, 'MrTom', 113279),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:37:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 334380),
      new Player(Guild.MERICA_ID, 'Dol', 251750),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:44:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 334380),
      new Player(Guild.MERICA_ID, 'Kifyu', 242321),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:45:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 393141),
      new Player(Guild.MERICA_ID, 'Babababababab', 291979),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:16:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 362333),
      new Player(Guild.MERICA_ID, 'MrTom', 310698),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:26:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 362333),
      new Player(Guild.MERICA_ID, 'DerVehuel', 272205),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:27:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 314711),
      new Player(Guild.MERICA_ID, '_sad1_', 250400),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:38:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 385744),
      new Player(Guild.MERICA_ID, 'discuas', 336994),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:42:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 276615),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 261851),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:56:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 185108),
      new Player(Guild.MERICA_ID, 'pertrainerik', 120839),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:18:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 185108),
      new Player(Guild.MERICA_ID, 'Tioaco', 135402),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:19:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.MERICA_ID, 'TanoOo', 248703),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:24:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.MERICA_ID, 'Tioaco', 258370),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:24:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310265),
      new Player(Guild.MERICA_ID, 'pertrainerik', 229301),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:44:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310265),
      new Player(Guild.MERICA_ID, 'Tfy', 267801),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:45:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 336717),
      new Player(Guild.MERICA_ID, 'Song', 299514),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:05:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 336717),
      new Player(Guild.MERICA_ID, 'Mac', 325513),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:06:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 407533),
      new Player(Guild.MERICA_ID, 'Julian', 210220),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:09:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 265565),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 265565),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:10:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:11:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 325662),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 334380),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:28:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 183247),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198983),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T01:57:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 183247),
      new Player(Guild.ASSASSINS_ID, 'KP', 186867),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T01:58:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 248703),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 294842),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:03:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 216463),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227763),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T02:08:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 218337),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:24:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 121897),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198983),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T02:37:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 121897),
      new Player(Guild.ASSASSINS_ID, 'KP', 186867),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T02:42:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:56:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 228387),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 236749),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:02:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:03:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 181115),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:06:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 181115),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 185108),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:07:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 228387),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 246445),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:22:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 283901),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:41:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 310698),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 308251),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:45:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 267879),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 259697),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:00:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 186155),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T06:16:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 186155),
      new Player(Guild.ASSASSINS_ID, 'HERO', 200447),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T06:17:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 122748),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227763),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T06:19:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 122748),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T06:38:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 251049),
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T06:40:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 251049),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T06:41:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 139093),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T06:45:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 258687),
      new Player(Guild.ASSASSINS_ID, 'Gom', 385744),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:34:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 325703),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 293466),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:39:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 275202),
      new Player(Guild.ASSASSINS_ID, 'En4', 333836),
      Fortification.LIGHTHOUSE_ID,
      8,
      false,
      `${warDateString}T07:43:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 250440),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 280023),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T08:54:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 124113),
      new Player(Guild.ASSASSINS_ID, 'HERO', 200447),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T08:55:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 114189),
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T09:29:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 251783),
      new Player(Guild.ASSASSINS_ID, 'En4', 333836),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:38:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 196343),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T11:14:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 196343),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      Fortification.BASTION_OF_ICE_ID,
      13,
      false,
      `${warDateString}T11:15:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 148819),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      Fortification.BASTION_OF_ICE_ID,
      7,
      true,
      `${warDateString}T11:44:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 148819),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T11:45:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 248819),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 272772),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:52:12`
    ),
  ],
  Guild.MERICA_ID,
  954,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_33_2020,
  Guild.ASSASSINS_ID,
  1240
);
