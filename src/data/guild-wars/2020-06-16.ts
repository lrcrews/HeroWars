import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-16';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268846),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 264918),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'discuas', 236681),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.MERICA_ID, 'DerVehuel', 206438),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:56:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 170538),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 147974),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:09:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 170538),
      new Player(Guild.MERICA_ID, 'Fenrigul', 145766),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:09:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      new Player(Guild.MERICA_ID, 'Juramar', 96641),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:03:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 67158),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:04:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193729),
      new Player(Guild.MERICA_ID, 'Mac', 169144),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:28:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193729),
      new Player(Guild.MERICA_ID, 'Bilbo', 157110),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:29:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 142231),
      new Player(Guild.MERICA_ID, 'WildWind', 108721),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:43:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 142231),
      new Player(Guild.MERICA_ID, 'Dol', 103215),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:44:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.MERICA_ID, 'Dinobunny', 192610),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:51:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 376075),
      new Player(Guild.MERICA_ID, 'discuas', 286650),
      Fortification.CITADEL_ID,
      7,
      false,
      `${warDateString}T05:56:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153633),
      new Player(Guild.MERICA_ID, 'Tioaco', 115331),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:57:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153633),
      new Player(Guild.MERICA_ID, 'Drenz', 122365),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:57:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 359633),
      new Player(Guild.MERICA_ID, 'DerVehuel', 255848),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:00:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 359633),
      new Player(Guild.MERICA_ID, 'Babababababab', 271174),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:00:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MERICA_ID, 'TanoOo', 108835),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:48:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MERICA_ID, '_sad1_', 102965),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:48:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302831),
      new Player(Guild.MERICA_ID, '_sad1_', 200356),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:59:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302831),
      new Player(Guild.MERICA_ID, 'Fenrigul', 207236),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:00:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317088),
      new Player(Guild.MERICA_ID, 'discuas', 286650),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T08:05:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317088),
      new Player(Guild.MERICA_ID, 'Song', 263829),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:06:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MERICA_ID, 'Julian', 171061),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:11:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 133489),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:11:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 369377),
      new Player(Guild.MERICA_ID, 'discuas', 286650),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T10:46:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 405157),
      new Player(Guild.MERICA_ID, 'discuas', 286650),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T12:09:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254111),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 219400),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:19:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254111),
      new Player(Guild.MERICA_ID, 'Julian', 179219),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:19:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 306229),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 205546),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:24:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 306229),
      new Player(Guild.MERICA_ID, 'Dinobunny', 291083),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:24:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 265505),
      new Player(Guild.MERICA_ID, 'Dol', 192028),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:26:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 268629),
      new Player(Guild.MERICA_ID, 'WildWind', 190846),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:27:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320817),
      new Player(Guild.MERICA_ID, 'Tioaco', 231733),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:31:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 364353),
      new Player(Guild.MERICA_ID, 'Jokill31', 316933),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:31:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259250),
      new Player(Guild.MERICA_ID, 'TanoOo', 201167),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:32:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259250),
      new Player(Guild.MERICA_ID, 'Drenz', 187220),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:33:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320817),
      new Player(Guild.MERICA_ID, 'Juramar', 159537),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:34:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:04:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:12:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 147974),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T01:47:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 98354),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T02:23:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 67158),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T04:42:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:44:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 254332),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:45:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 206438),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 195038),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T05:56:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 148579),
      new Player(Guild.ASSASSINS_ID, 'KP', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:56:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 206438),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 206941),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T05:56:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 148579),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:56:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 157101),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:46:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 157101),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 152601),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:46:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 98354),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 195038),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T07:08:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 147974),
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:13:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 115331),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 206941),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T07:50:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 171061),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184420),
      Fortification.GATES_OF_NATURE_ID,
      10,
      false,
      `${warDateString}T08:39:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 171061),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 170538),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:40:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 192610),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193235),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T09:20:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 192610),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:21:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 103215),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193235),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T09:38:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 133489),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 142231),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:45:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 133489),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184420),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T09:47:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 202390),
      new Player(Guild.ASSASSINS_ID, 'elo', 233509),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:02:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 190389),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259192),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:03:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 100374),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184420),
      Fortification.GATES_OF_NATURE_ID,
      6,
      false,
      `${warDateString}T10:06:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 67158),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184420),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T10:12:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 103215),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184420),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T10:14:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 236681),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 241239),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:21:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 236681),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 252358),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T11:22:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 108721),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 252358),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T12:06:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 267753),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 258107),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:11:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 267753),
      new Player(Guild.ASSASSINS_ID, 'KP', 265888),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:14:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 182604),
      new Player(Guild.ASSASSINS_ID, 'HERO', 247754),
      Fortification.FOUNDRY_ID,
      4,
      false,
      `${warDateString}T12:35:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 202450),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 215892),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:35:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 221867),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 229060),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:43:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 173710),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 232849),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T12:56:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 181263),
      new Player(Guild.ASSASSINS_ID, 'HERO', 247754),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:56:18`
    ),
  ],
  Guild.MERICA_ID,
  811,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_25_2020,
  Guild.ASSASSINS_ID,
  1208
);
