import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-04';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Jokill31', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:27:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:28:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:29:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.MERICA_ID, 'Babababababab', 263609),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:04:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.MERICA_ID, 'DerVehuel', 227729),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:04:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      new Player(Guild.MERICA_ID, 'Kifyu', 181046),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:25:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 177684),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:25:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299510),
      new Player(Guild.MERICA_ID, 'Dol', 240637),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:34:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299510),
      new Player(Guild.MERICA_ID, 'Juramar', 182557),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:35:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.MERICA_ID, 'Mac', 189051),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:10:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.MERICA_ID, 'Bilbo', 184526),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:11:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'Dinobunny', 212114),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:39:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 323581),
      new Player(Guild.MERICA_ID, 'Tfy', 258883),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:39:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.MERICA_ID, 'Tfy', 110427),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:41:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 170395),
      new Player(Guild.MERICA_ID, '_sad1_', 118638),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:41:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.MERICA_ID, 'pertrainerik', 119051),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:41:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 170395),
      new Player(Guild.MERICA_ID, 'Tioaco', 131508),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:42:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 340551),
      new Player(Guild.MERICA_ID, 'Song', 286187),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:57:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420544),
      new Player(Guild.MERICA_ID, 'Jokill31', 371648),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:58:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 333516),
      new Player(Guild.MERICA_ID, 'Mac', 316827),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:58:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 379950),
      new Player(Guild.MERICA_ID, 'discuas', 325103),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:07:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 383695),
      new Player(Guild.MERICA_ID, 'Dinobunny', 325220),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:08:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272534),
      new Player(Guild.MERICA_ID, 'Bilbo', 199585),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:13:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 282051),
      new Player(Guild.MERICA_ID, 'Drenz', 214858),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:15:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 383695),
      new Player(Guild.MERICA_ID, 'Babababababab', 289621),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:19:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 305018),
      new Player(Guild.MERICA_ID, 'Kifyu', 235676),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:32:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 305018),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 247121),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:32:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 304257),
      new Player(Guild.MERICA_ID, '_sad1_', 247974),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:24:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 304257),
      new Player(Guild.MERICA_ID, 'Julian', 207544),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:25:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179464),
      new Player(Guild.MERICA_ID, 'TanoOo', 126017),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:44:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      new Player(Guild.MERICA_ID, 'Juramar', 118589),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:47:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.MERICA_ID, 'Drenz', 146077),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:20:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:21:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.MERICA_ID, 'Dol', 137107),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:21:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.MERICA_ID, 'MrTom', 112231),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:22:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 399171),
      new Player(Guild.MERICA_ID, 'pertrainerik', 229040),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:53:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 399171),
      new Player(Guild.MERICA_ID, 'Tioaco', 255846),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:54:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 403953),
      new Player(Guild.MERICA_ID, 'TanoOo', 239473),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:07:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 344342),
      new Player(Guild.MERICA_ID, 'MrTom', 300294),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:07:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 344342),
      new Player(Guild.MERICA_ID, 'DerVehuel', 289215),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:08:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:33:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:33:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:38:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 268213),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:39:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 120359),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T03:54:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 177684),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:59:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 177684),
      new Player(Guild.ASSASSINS_ID, 'elo', 169806),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:59:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 263609),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 266914),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:50:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 263609),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:51:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 181046),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:10:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Kifyu', 181046),
      new Player(Guild.ASSASSINS_ID, 'KP', 177111),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:12:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 184515),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:55:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 185078),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T05:56:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      Fortification.BASTION_OF_FIRE_ID,
      13,
      false,
      `${warDateString}T06:04:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 187132),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:05:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 316827),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 323400),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:12:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 300448),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 302312),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:19:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 118589),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T06:24:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 137107),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      false,
      `${warDateString}T07:02:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 255846),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 289365),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:03:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 118589),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T07:12:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 240676),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253949),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:13:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 227727),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 234186),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:17:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 227727),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242547),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T07:17:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MrTom', 300448),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 293074),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:05:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'pertrainerik', 119051),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242547),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      false,
      `${warDateString}T09:13:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 250439),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T09:14:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:15:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 308541),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 287015),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:41:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 118655),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 250439),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T09:57:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 118655),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242547),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T09:57:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 239541),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 267925),
      Fortification.CITADEL_ID,
      7,
      false,
      `${warDateString}T10:03:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 239541),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 262133),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:05:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 212114),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T10:24:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 212734),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T10:28:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 258883),
      new Player(Guild.ASSASSINS_ID, 'elo', 261976),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:56:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tfy', 110427),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T11:08:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 131508),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T12:24:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 215871),
      new Player(Guild.ASSASSINS_ID, 'HERO', 286654),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T12:36:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 217014),
      new Player(Guild.ASSASSINS_ID, 'HERO', 286654),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:37:58`
    ),
  ],
  Guild.MERICA_ID,
  951,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_32_2020,
  Guild.ASSASSINS_ID,
  1400
);
