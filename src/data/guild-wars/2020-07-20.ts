import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-20';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 267578),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:48:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:37:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      new Player(Guild.MERICA_ID, 'Dinobunny', 208410),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:51:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      new Player(Guild.MERICA_ID, 'Dol', 133140),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:52:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.MERICA_ID, 'Juramar', 113503),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:05:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 80589),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:06:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191261),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 137841),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:40:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191261),
      new Player(Guild.MERICA_ID, 'MightyMite89', 75579),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:41:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 365172),
      new Player(Guild.MERICA_ID, 'Jokill31', 366728),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:25:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316013),
      new Player(Guild.MERICA_ID, 'Dol', 232203),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:48:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316013),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 218946),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:48:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.MERICA_ID, 'emojis', 222793),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:57:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.MERICA_ID, 'Julian', 185020),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:57:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195045),
      new Player(Guild.MERICA_ID, 'Bilbo', 179592),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:02:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195045),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 170771),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:02:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 284770),
      new Player(Guild.MERICA_ID, 'Bilbo', 203744),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:51:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 284770),
      new Player(Guild.MERICA_ID, 'Drenz', 206211),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:52:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.MERICA_ID, 'Drenz', 134792),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:18:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.MERICA_ID, 'Tioaco', 127075),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:18:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.MERICA_ID, 'Mac', 186662),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:43:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.MERICA_ID, 'TanoOo', 121533),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:43:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293127),
      new Player(Guild.MERICA_ID, 'MightyMite89', 186293),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:02:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293127),
      new Player(Guild.MERICA_ID, 'kiritoscart', 176652),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:02:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 373042),
      new Player(Guild.MERICA_ID, 'discuas', 317819),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:24:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 275906),
      new Player(Guild.MERICA_ID, 'Juramar', 170589),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:49:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 275906),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 194217),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:49:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 365172),
      new Player(Guild.MERICA_ID, 'Dinobunny', 318413),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:54:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.MERICA_ID, '_sad1_', 108491),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:59:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.MERICA_ID, 'kiritoscart', 69473),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:00:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.MERICA_ID, 'Tioaco', 258711),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:11:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.MERICA_ID, 'emojis', 278237),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:11:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 291699),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 245862),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:23:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 339940),
      new Player(Guild.MERICA_ID, '_sad1_', 235369),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:47:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 339940),
      new Player(Guild.MERICA_ID, 'Julian', 195735),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:48:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 324036),
      new Player(Guild.MERICA_ID, 'Song', 279106),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:02:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 324036),
      new Player(Guild.MERICA_ID, 'Mac', 307932),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:03:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 413914),
      new Player(Guild.MERICA_ID, 'Babababababab', 287451),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:04:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 413914),
      new Player(Guild.MERICA_ID, 'TanoOo', 226797),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:04:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:44:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:45:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 262304),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:06:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 170771),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:11:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 170771),
      new Player(Guild.ASSASSINS_ID, 'KP', 174236),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:12:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 185521),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T03:40:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 185521),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195045),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:41:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 222793),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238030),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T03:54:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 222793),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T03:54:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'kiritoscart', 69473),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T04:13:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 113864),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T04:35:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 209646),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:50:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 209646),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212956),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:51:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 180139),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191261),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T04:52:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 180139),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:53:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 113864),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191261),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T05:04:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 133140),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238030),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      true,
      `${warDateString}T05:10:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:56:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T06:57:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 80841),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T07:45:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 307994),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315894),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:02:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 232659),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 244864),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:57:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 246185),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 269942),
      Fortification.MAGE_ACADEMY_ID,
      16,
      false,
      `${warDateString}T09:19:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 227004),
      new Player(Guild.ASSASSINS_ID, 'elo', 253067),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:34:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'kiritoscart', 176676),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 269942),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T09:48:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 227004),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 248193),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:24:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266242),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:40:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 307994),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 285948),
      Fortification.BARRACKS_ID,
      16,
      false,
      `${warDateString}T10:48:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 135169),
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T11:48:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 135169),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167563),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T11:49:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 245699),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 267576),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:07:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 80841),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167563),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T12:30:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 137841),
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T12:31:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 218946),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 285948),
      Fortification.BARRACKS_ID,
      4,
      true,
      `${warDateString}T12:33:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 186970),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 288426),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T12:39:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 186970),
      new Player(Guild.ASSASSINS_ID, 'HERO', 273542),
      Fortification.FOUNDRY_ID,
      2,
      false,
      `${warDateString}T12:41:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 223474),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 248667),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T12:45:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 229961),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 248667),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T12:46:19`
    ),
  ],
  Guild.MERICA_ID,
  887,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_30_2020,
  Guild.ASSASSINS_ID,
  1400
);
