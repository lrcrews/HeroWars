import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-20';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.MERICA_ID, 'Babababababab', 266883),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:57:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.MERICA_ID, 'discuas', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:58:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'Jokill31', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:42:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:42:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 189113),
      new Player(Guild.MERICA_ID, 'Drenz', 156191),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:47:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 189113),
      new Player(Guild.MERICA_ID, '_sad1_', 132021),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:47:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.MERICA_ID, 'MrTom', 129380),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:24:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.MERICA_ID, 'Dol', 165944),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:25:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      new Player(Guild.MERICA_ID, 'Dinobunny', 221484),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:34:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      new Player(Guild.MERICA_ID, 'DerVehuel', 234823),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:34:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 398245),
      new Player(Guild.MERICA_ID, 'Dinobunny', 341104),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:40:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204873),
      new Player(Guild.MERICA_ID, 'Tioaco', 140672),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:50:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204873),
      new Player(Guild.MERICA_ID, 'Tfy', 116922),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:51:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 427087),
      new Player(Guild.MERICA_ID, 'Jokill31', 371116),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:52:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 427087),
      new Player(Guild.MERICA_ID, 'Song', 302080),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:53:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 234383),
      new Player(Guild.MERICA_ID, 'Julian', 208772),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:53:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 234383),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 206439),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:54:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'TanoOo', 137892),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:23:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Kifyu', 193439),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:24:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 410159),
      new Player(Guild.MERICA_ID, 'Babababababab', 294586),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:40:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 410159),
      new Player(Guild.MERICA_ID, 'MrTom', 314649),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:41:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 211743),
      new Player(Guild.MERICA_ID, 'Mac', 200540),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:18:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 211743),
      new Player(Guild.MERICA_ID, 'Bilbo', 201540),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:18:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 321252),
      new Player(Guild.MERICA_ID, 'Tioaco', 259879),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:58:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 283430),
      new Player(Guild.MERICA_ID, 'Bilbo', 211303),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:05:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 189678),
      new Player(Guild.MERICA_ID, 'Juramar', 124122),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:28:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 189678),
      new Player(Guild.MERICA_ID, 'pertrainerik', 129272),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:29:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 388602),
      new Player(Guild.MERICA_ID, 'Mac', 336935),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 388602),
      new Player(Guild.MERICA_ID, 'discuas', 340596),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 288744),
      new Player(Guild.MERICA_ID, 'pertrainerik', 233697),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:41:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 288744),
      new Player(Guild.MERICA_ID, 'Drenz', 232013),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:43:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 398245),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 269212),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:50:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 318395),
      new Player(Guild.MERICA_ID, '_sad1_', 254279),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:51:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297699),
      new Player(Guild.MERICA_ID, 'DerVehuel', 273139),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:54:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 374482),
      new Player(Guild.MERICA_ID, 'TanoOo', 253874),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:00:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 374482),
      new Player(Guild.MERICA_ID, 'Julian', 212446),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:00:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 316091),
      new Player(Guild.MERICA_ID, 'Dol', 256635),
      Fortification.FOUNDRY_ID,
      5,
      false,
      `${warDateString}T12:10:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 316091),
      new Player(Guild.MERICA_ID, 'Juramar', 198314),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:11:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311875),
      new Player(Guild.MERICA_ID, 'Dol', 256635),
      Fortification.FOUNDRY_ID,
      15,
      true,
      `${warDateString}T12:24:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311875),
      new Player(Guild.MERICA_ID, 'Tfy', 276011),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:25:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266883),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266883),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 253902),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 336801),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:08:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 253941),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 258402),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:56:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T02:18:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T02:19:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 156191),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T03:25:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 156191),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T03:25:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 276011),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 265497),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:24:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 315021),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 301529),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:41:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 288511),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 297735),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:41:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 206439),
      new Player(Guild.ASSASSINS_ID, 'KP', 202303),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:50:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 206439),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204873),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:51:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 193439),
      new Player(Guild.ASSASSINS_ID, 'elo', 189678),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:02:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 193439),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:03:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 201528),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 211743),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:10:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 201540),
      new Player(Guild.ASSASSINS_ID, 'HERO', 210758),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:11:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 208772),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241908),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T10:40:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 208772),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 234383),
      Fortification.BASTION_OF_ICE_ID,
      10,
      false,
      `${warDateString}T10:41:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 166567),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 234383),
      Fortification.BASTION_OF_ICE_ID,
      10,
      true,
      `${warDateString}T10:48:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 268913),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:01:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 268913),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:03:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 124122),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241908),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T11:06:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 234823),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249707),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:12:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 234823),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T11:13:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 259879),
      new Player(Guild.ASSASSINS_ID, 'Gom', 388499),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:24:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 337261),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279693),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:32:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 166567),
      new Player(Guild.ASSASSINS_ID, 'wookie', 185924),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:38:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 337261),
      new Player(Guild.ASSASSINS_ID, 'KP', 318009),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:45:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 259879),
      new Player(Guild.ASSASSINS_ID, 'En4', 335652),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T11:51:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 124122),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T12:01:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 221484),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 239963),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:18:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 342839),
      new Player(Guild.ASSASSINS_ID, 'En4', 335652),
      Fortification.LIGHTHOUSE_ID,
      14,
      true,
      `${warDateString}T12:21:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 132038),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      false,
      `${warDateString}T12:54:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 132038),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      false,
      `${warDateString}T12:54:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 130225),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      0,
      false,
      `${warDateString}T12:55:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 130225),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      false,
      `${warDateString}T12:56:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 276068),
      new Player(Guild.ASSASSINS_ID, 'elo', 275331),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:56:59`
    ),
  ],
  Guild.MERICA_ID,
  867,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_34_2020,
  Guild.ASSASSINS_ID,
  1340
);
