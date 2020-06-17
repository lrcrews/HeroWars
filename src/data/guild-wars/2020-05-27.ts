import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-27';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 247042),
      new Player(Guild.MERICA_ID, 'Babababababab', 236116),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:57:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.MERICA_ID, 'discuas', 217566),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:03:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 247413),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:42:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 260964),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:43:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Gi', 159141),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:46:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Dinobunny', 163579),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:47:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MERICA_ID, 'TanoOo', 91701),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:00:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MERICA_ID, 'Dol', 83493),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:01:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 313127),
      new Player(Guild.MERICA_ID, '_sad1_', 187862),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:46:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 313127),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 198467),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:46:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 297450),
      new Player(Guild.MERICA_ID, 'Song', 242565),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:47:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136274),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 103190),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:11:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136274),
      new Player(Guild.MERICA_ID, '_sad1_', 90528),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:12:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      new Player(Guild.MERICA_ID, 'Bilbo', 139698),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:28:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      new Player(Guild.MERICA_ID, 'Mac', 139698),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:29:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.MERICA_ID, 'DerVehuel', 182494),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:50:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295052),
      new Player(Guild.MERICA_ID, 'Drenz', 172264),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:17:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295052),
      new Player(Guild.MERICA_ID, 'WildWind', 177155),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:18:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 151096),
      new Player(Guild.MERICA_ID, 'Julian', 126754),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:24:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 151096),
      new Player(Guild.MERICA_ID, 'Fenrigul', 136387),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:25:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.MERICA_ID, 'WildWind', 103295),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:12:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.MERICA_ID, 'Tioaco', 101390),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:14:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 383102),
      new Player(Guild.MERICA_ID, 'discuas', 272494),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:17:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 383102),
      new Player(Guild.MERICA_ID, 'Gi', 290409),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:17:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      new Player(Guild.MERICA_ID, 'Juramar', 92877),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:36:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 235415),
      new Player(Guild.MERICA_ID, 'Julian', 165652),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:37:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129352),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 117047),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:48:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129352),
      new Player(Guild.MERICA_ID, 'Drenz', 108830),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:48:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 239741),
      new Player(Guild.MERICA_ID, 'Juramar', 149556),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:04:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 239741),
      new Player(Guild.MERICA_ID, 'Dol', 177087),
      Fortification.CITADEL_ID,
      11,
      false,
      `${warDateString}T09:05:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 263333),
      new Player(Guild.MERICA_ID, 'Fenrigul', 192972),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:07:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 297697),
      new Player(Guild.MERICA_ID, 'Mac', 240644),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:25:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 235284),
      new Player(Guild.MERICA_ID, 'Dol', 177087),
      Fortification.CITADEL_ID,
      9,
      true,
      `${warDateString}T09:25:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 266100),
      new Player(Guild.MERICA_ID, 'Bilbo', 188368),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:26:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 352971),
      new Player(Guild.MERICA_ID, 'Babababababab', 265991),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:37:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 352971),
      new Player(Guild.MERICA_ID, 'Dinobunny', 261116),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:37:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 250552),
      new Player(Guild.MERICA_ID, 'TanoOo', 169024),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:00:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 250552),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 188224),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:01:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 334401),
      new Player(Guild.MERICA_ID, 'Jokill31', 239814),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:15:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 340236),
      new Player(Guild.MERICA_ID, 'DerVehuel', 236090),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:24:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 247413),
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T00:02:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 247413),
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 260964),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:26:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 260964),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:27:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 139698),
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T06:21:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 91701),
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T06:34:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 183079),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 195544),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:36:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 183079),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:37:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 139698),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 140501),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:39:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 126754),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T06:46:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 126754),
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:47:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 93368),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T07:01:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 103190),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 128800),
      Fortification.SPRING_OF_ELEMENTS_ID,
      10,
      false,
      `${warDateString}T07:47:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 136943),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 135541),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:52:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 143509),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 152349),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:03:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 143509),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 151096),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:04:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 163579),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:08:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 217566),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 238673),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:15:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 217566),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 218958),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:16:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 103295),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 128800),
      Fortification.SPRING_OF_ELEMENTS_ID,
      10,
      true,
      `${warDateString}T09:33:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 103295),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T09:34:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 236116),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239963),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T09:58:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 236116),
      new Player(Guild.ASSASSINS_ID, 'Regal', 247042),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T09:59:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 93368),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T10:48:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 108830),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239963),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T10:53:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 108830),
      new Player(Guild.ASSASSINS_ID, 'Regal', 247042),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T10:54:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 177276),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 239571),
      Fortification.LIGHTHOUSE_ID,
      18,
      false,
      `${warDateString}T11:06:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 163579),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 182755),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:12:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 177276),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 189901),
      Fortification.CITADEL_ID,
      18,
      false,
      `${warDateString}T11:17:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 199246),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 195843),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:44:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 176685),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 239571),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:04:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 163329),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 239571),
      Fortification.LIGHTHOUSE_ID,
      2,
      true,
      `${warDateString}T12:10:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 273255),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 247297),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:26:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 273255),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 313127),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:31:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 193178),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 205655),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T12:40:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 170420),
      new Player(Guild.ASSASSINS_ID, 'elo', 216482),
      Fortification.FOUNDRY_ID,
      16,
      false,
      `${warDateString}T12:42:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 198575),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 205655),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:50:27`
    ),
  ],
  Guild.MERICA_ID,
  857,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_22_2020,
  Guild.ASSASSINS_ID,
  1340
);
