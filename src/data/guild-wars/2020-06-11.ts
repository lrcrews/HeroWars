import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-11';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:34:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 265532),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.MERICA_ID, 'Jokill31', 264918),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:46:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'discuas', 232306),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:27:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 152660),
      new Player(Guild.MERICA_ID, 'Jokill31', 264918),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T03:46:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 152660),
      new Player(Guild.MERICA_ID, 'Dol', 100189),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:47:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184877),
      new Player(Guild.MERICA_ID, 'Fenrigul', 145193),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:54:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184877),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 143435),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:55:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MERICA_ID, 'Dinobunny', 191411),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:00:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MERICA_ID, 'Julian', 169880),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 149901),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 132184),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:46:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 149901),
      new Player(Guild.MERICA_ID, 'WildWind', 108721),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:46:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182631),
      new Player(Guild.MERICA_ID, 'Bilbo', 155611),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:00:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182631),
      new Player(Guild.MERICA_ID, 'Gi', 162017),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:01:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 146262),
      new Player(Guild.MERICA_ID, 'TanoOo', 106356),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:29:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 382478),
      new Player(Guild.MERICA_ID, 'Jokill31', 307672),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:32:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 372365),
      new Player(Guild.MERICA_ID, 'discuas', 281142),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:34:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 259625),
      new Player(Guild.MERICA_ID, 'Fenrigul', 204006),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:35:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'DerVehuel', 202112),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:36:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 233886),
      new Player(Guild.MERICA_ID, 'Juramar', 157466),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:53:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 133912),
      new Player(Guild.MERICA_ID, '_sad1_', 101407),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:54:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 260492),
      new Player(Guild.MERICA_ID, 'Drenz', 184361),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:59:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 260492),
      new Player(Guild.MERICA_ID, 'WildWind', 189124),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:59:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 353652),
      new Player(Guild.MERICA_ID, 'Babababababab', 270226),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:17:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 353652),
      new Player(Guild.MERICA_ID, 'Dinobunny', 280506),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:17:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 311536),
      new Player(Guild.MERICA_ID, 'Song', 261129),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:26:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 311536),
      new Player(Guild.MERICA_ID, 'Mac 270072', 264162),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:27:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318539),
      new Player(Guild.MERICA_ID, 'DerVehuel', 252310),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:42:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318539),
      new Player(Guild.MERICA_ID, 'TanoOo', 190138),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:43:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 292252),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 204054),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:45:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302202),
      new Player(Guild.MERICA_ID, 'Tioaco', 229656),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:22:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302202),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 210384),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:22:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.MERICA_ID, 'Drenz', 120093),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:02:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.MERICA_ID, 'Juramar', 92233),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:02:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 165070),
      new Player(Guild.MERICA_ID, 'Mac 270072', 160033),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:23:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 165070),
      new Player(Guild.MERICA_ID, 'Tioaco', 110478),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:23:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288640),
      new Player(Guild.MERICA_ID, 'Dol', 188079),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:34:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288640),
      new Player(Guild.MERICA_ID, 'Bilbo', 198584),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:34:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 391231),
      new Player(Guild.MERICA_ID, 'Gi', 291896),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:37:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 382593),
      new Player(Guild.MERICA_ID, '_sad1_', 196718),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:40:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 265532),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:32:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 265532),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:32:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 202112),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 204441),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:55:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 253008),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T02:00:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 251042),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:01:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 202112),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 192373),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:01:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 93752),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 253008),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T02:21:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 93752),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 253008),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T02:23:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 169880),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 165070),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:52:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 169880),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182037),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T03:54:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 155602),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 149901),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:04:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 155602),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 150973),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:05:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 106356),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182037),
      Fortification.BASTION_OF_ICE_ID,
      3,
      false,
      `${warDateString}T04:28:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 106356),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182037),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T04:28:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 144474),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T05:00:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 144474),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 136114),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:01:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 100189),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T05:09:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 132722),
      new Player(Guild.ASSASSINS_ID, 'KP', 146262),
      Fortification.SPRING_OF_ELEMENTS_ID,
      13,
      false,
      `${warDateString}T05:23:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 132722),
      new Player(Guild.ASSASSINS_ID, 'KP', 146262),
      Fortification.SPRING_OF_ELEMENTS_ID,
      7,
      true,
      `${warDateString}T05:24:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 191411),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184901),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:55:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 192009),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:58:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 148006),
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:24:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 232306),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 232233),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:53:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 232306),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T09:29:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 100189),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T09:32:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 172086),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 208718),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:37:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 177557),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 221570),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T11:38:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 204144),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 221570),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T11:52:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 229656),
      new Player(Guild.ASSASSINS_ID, 'elo', 232783),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:58:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 229656),
      new Player(Guild.ASSASSINS_ID, 'HERO', 234270),
      Fortification.FOUNDRY_ID,
      10,
      false,
      `${warDateString}T12:00:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 284690),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302076),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T12:05:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 265691),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302076),
      Fortification.MAGE_ACADEMY_ID,
      18,
      true,
      `${warDateString}T12:12:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 265171),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242255),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:13:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 265171),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 245083),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:14:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 179627),
      new Player(Guild.ASSASSINS_ID, 'HERO', 234270),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T12:23:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 179627),
      new Player(Guild.ASSASSINS_ID, 'HERO', 234270),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:25:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 181635),
      new Player(Guild.ASSASSINS_ID, 'HERO', 234270),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T12:59:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 181635),
      new Player(Guild.ASSASSINS_ID, 'HERO', 234270),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:59:53`
    ),
  ],
  Guild.MERICA_ID,
  866,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_24_2020,
  Guild.ASSASSINS_ID,
  1340
);
