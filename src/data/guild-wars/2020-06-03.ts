import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-03';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 249997),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 265565),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.MERICA_ID, 'discuas', 219343),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:15:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.MERICA_ID, 'Babababababab', 236649),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:16:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 171046),
      new Player(Guild.MERICA_ID, 'Gi', 161415),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:06:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 171046),
      new Player(Guild.MERICA_ID, 'Dinobunny', 167951),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T05:08:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 155364),
      new Player(Guild.MERICA_ID, 'Fenrigul', 137516),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:18:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 155364),
      new Player(Guild.MERICA_ID, 'Julian', 132551),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:19:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.MERICA_ID, 'Dol', 89202),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:13:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.MERICA_ID, 'Juramar', 97178),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:13:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132869),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 117925),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:24:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132869),
      new Player(Guild.MERICA_ID, 'Drenz', 110971),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:24:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298741),
      new Player(Guild.MERICA_ID, '_sad1_', 190482),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:30:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298741),
      new Player(Guild.MERICA_ID, 'TanoOo', 176883),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:31:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 257249),
      new Player(Guild.MERICA_ID, 'DerVehuel', 184308),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:10:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365981),
      new Player(Guild.MERICA_ID, 'discuas', 271352),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:16:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320545),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 204019),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:32:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 326339),
      new Player(Guild.MERICA_ID, 'Jokill31', 304929),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:37:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320545),
      new Player(Guild.MERICA_ID, 'Mac', 245564),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:39:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255822),
      new Player(Guild.MERICA_ID, 'Fenrigul', 197980),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255822),
      new Player(Guild.MERICA_ID, 'Dol', 181564),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 252726),
      new Player(Guild.MERICA_ID, 'Juramar', 152696),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:18:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 249761),
      new Player(Guild.MERICA_ID, 'Drenz', 173719),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:20:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 386830),
      new Player(Guild.MERICA_ID, 'Song', 252847),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:22:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 347098),
      new Player(Guild.MERICA_ID, 'Babababababab', 267708),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:26:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 347098),
      new Player(Guild.MERICA_ID, 'Dinobunny', 267635),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:26:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 126154),
      new Player(Guild.MERICA_ID, '_sad1_', 90528),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:35:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 126154),
      new Player(Guild.MERICA_ID, 'Dinobunny', 167951),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T09:36:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 273429),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 204019),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:39:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 275436),
      new Player(Guild.MERICA_ID, 'WildWind', 181360),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:44:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 275436),
      new Player(Guild.MERICA_ID, 'Bilbo', 193565),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:45:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.MERICA_ID, 'WildWind', 103570),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:08:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.MERICA_ID, 'Tioaco', 103413),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:09:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 157547),
      new Player(Guild.MERICA_ID, 'TanoOo', 94475),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:13:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 157547),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 117975),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:15:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 307745),
      new Player(Guild.MERICA_ID, 'DerVehuel', 244383),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:33:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 307745),
      new Player(Guild.MERICA_ID, 'Tioaco', 212248),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:34:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Mac', 147745),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:43:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Bilbo', 146688),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:43:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387498),
      new Player(Guild.MERICA_ID, 'Gi', 291679),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:02:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 249997),
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 249997),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T00:04:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 265565),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:58:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 265565),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T00:59:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 139193),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T01:05:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 145638),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T04:24:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 98012),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T05:54:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 98012),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T05:54:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 256642),
      new Player(Guild.ASSASSINS_ID, 'Regal', 257249),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:05:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 256642),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 241255),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:05:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 118436),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 119577),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T06:12:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 147745),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 155364),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T06:13:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 94475),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 119577),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T06:14:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 147745),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 157547),
      Fortification.BASTION_OF_ICE_ID,
      13,
      false,
      `${warDateString}T06:14:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 155580),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 139053),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:25:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 155580),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:26:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 93444),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 155364),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T06:48:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 182010),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249229),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T06:54:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 194852),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 197102),
      Fortification.GATES_OF_NATURE_ID,
      14,
      false,
      `${warDateString}T07:18:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 90533),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 157547),
      Fortification.BASTION_OF_ICE_ID,
      2,
      false,
      `${warDateString}T07:20:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 90528),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 157547),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T07:21:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 196051),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:33:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 219972),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 220838),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T09:38:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 219972),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 241901),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T09:40:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 94997),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 220838),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T09:46:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 175962),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 184383),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T10:42:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 175962),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 171069),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:44:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 147751),
      new Player(Guild.ASSASSINS_ID, 'KP', 133608),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:46:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 103570),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 184383),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T11:06:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 119365),
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T11:28:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 139587),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132869),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:51:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 117925),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 197102),
      Fortification.GATES_OF_NATURE_ID,
      6,
      true,
      `${warDateString}T11:55:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 117925),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 241901),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T11:56:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 284196),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249229),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T12:17:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 273990),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249229),
      Fortification.BARRACKS_ID,
      7,
      true,
      `${warDateString}T12:17:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 103570),
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T12:21:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 218347),
      new Player(Guild.ASSASSINS_ID, 'HERO', 226652),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T12:29:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 218347),
      new Player(Guild.ASSASSINS_ID, 'KP', 250428),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T12:32:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 170857),
      new Player(Guild.ASSASSINS_ID, 'HERO', 226652),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:47:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 181575),
      new Player(Guild.ASSASSINS_ID, 'HERO', 226652),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:48:55`
    ),
  ],
  Guild.MERICA_ID,
  734,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_23_2020,
  Guild.ASSASSINS_ID,
  1320
);
