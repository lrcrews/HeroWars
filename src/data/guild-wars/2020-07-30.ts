import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-30';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Jokill31', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:13:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:14:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:42:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:42:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249104),
      new Player(Guild.MERICA_ID, 'DerVehuel', 227074),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:46:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249104),
      new Player(Guild.MERICA_ID, 'Dinobunny', 209646),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:47:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.MERICA_ID, 'Kifyu', 171796),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:25:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 175066),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:25:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.MERICA_ID, 'Mac', 188453),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:52:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.MERICA_ID, 'Bilbo', 183453),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:52:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 206053),
      new Player(Guild.MERICA_ID, 'Drenz', 145588),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:49:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 206053),
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:50:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176090),
      new Player(Guild.MERICA_ID, 'Dol', 136091),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:55:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176090),
      new Player(Guild.MERICA_ID, 'MrTom', 106751),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:55:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 389287),
      new Player(Guild.MERICA_ID, 'pertrainerik', 225920),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:10:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 389287),
      new Player(Guild.MERICA_ID, 'Tioaco', 254385),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:11:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 266728),
      new Player(Guild.MERICA_ID, 'Bilbo', 198355),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:04:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 266728),
      new Player(Guild.MERICA_ID, 'Drenz', 212733),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:05:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 178875),
      new Player(Guild.MERICA_ID, '_sad1_', 112155),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:10:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 178875),
      new Player(Guild.MERICA_ID, 'Tfy', 109171),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:10:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 376123),
      new Player(Guild.MERICA_ID, 'Jokill31', 370634),
      Fortification.CITADEL_ID,
      14,
      false,
      `${warDateString}T09:13:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 376123),
      new Player(Guild.MERICA_ID, 'Dinobunny', 325175),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:15:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 301633),
      new Player(Guild.MERICA_ID, 'Jokill31', 370634),
      Fortification.CITADEL_ID,
      6,
      true,
      `${warDateString}T09:25:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.MERICA_ID, 'TanoOo', 123784),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:04:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.MERICA_ID, 'Juramar', 116946),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:04:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 376735),
      new Player(Guild.MERICA_ID, 'discuas', 321358),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:06:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 376735),
      new Player(Guild.MERICA_ID, '_sad1_', 243930),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:07:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 341298),
      new Player(Guild.MERICA_ID, 'DerVehuel', 287425),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:20:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 341298),
      new Player(Guild.MERICA_ID, 'MrTom', 295405),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:20:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 301633),
      new Player(Guild.MERICA_ID, 'Tfy', 252390),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:25:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 300473),
      new Player(Guild.MERICA_ID, 'Kifyu', 247525),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:30:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 300473),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 253586),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:31:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 166979),
      new Player(Guild.MERICA_ID, 'Tioaco', 131508),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:00:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 166979),
      new Player(Guild.MERICA_ID, 'pertrainerik', 117181),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:01:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 293277),
      new Player(Guild.MERICA_ID, 'Dol', 237507),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:16:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 293277),
      new Player(Guild.MERICA_ID, 'Juramar', 176599),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:17:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 419601),
      new Player(Guild.MERICA_ID, 'Song', 283866),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:48:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 419601),
      new Player(Guild.MERICA_ID, 'Mac', 315320),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:51:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329010),
      new Player(Guild.MERICA_ID, 'TanoOo', 235717),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:52:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329010),
      new Player(Guild.MERICA_ID, 'Julian', 206826),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:53:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:57:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:57:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:48:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:49:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 175667),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 178311),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:00:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 175667),
      new Player(Guild.ASSASSINS_ID, 'KP', 177111),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T03:00:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 315402),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320782),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:01:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 176306),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:11:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 176306),
      new Player(Guild.ASSASSINS_ID, 'elo', 166397),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:12:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 262963),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 266254),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:40:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 262963),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:40:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 116946),
      new Player(Guild.ASSASSINS_ID, 'KP', 177111),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T03:43:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 227074),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 229082),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T05:36:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 227074),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 241901),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:36:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 295405),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 298360),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:44:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 206053),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:45:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:46:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 295405),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 286495),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:50:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 116946),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 229082),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T06:28:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 255379),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275578),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:17:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 210262),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 213585),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:23:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 183442),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T07:25:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 183442),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:26:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 211498),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:32:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 238230),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 249453),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:50:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 118841),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T07:58:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 305763),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 283917),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:17:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 252495),
      new Player(Guild.ASSASSINS_ID, 'elo', 256531),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:23:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 252495),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 263586),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T08:25:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 235851),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 260332),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T08:26:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 235851),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 263586),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T08:29:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249104),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:59:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T09:00:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 238538),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 260332),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:31:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 226220),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 263586),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T09:56:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 112710),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T10:00:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 238554),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 263586),
      Fortification.CITADEL_ID,
      5,
      true,
      `${warDateString}T10:00:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 254385),
      new Player(Guild.ASSASSINS_ID, 'Gom', 376735),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:17:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 208464),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 260332),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:23:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 205877),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 279276),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:25:49`
    ),
  ],
  Guild.MERICA_ID,
  970,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_31_2020,
  Guild.ASSASSINS_ID,
  1340
);
