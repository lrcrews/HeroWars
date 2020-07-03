import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-02';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:22:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 267578),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:40:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268846),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:41:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MERICA_ID, 'DerVehuel', 214590),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:46:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 310431),
      new Player(Guild.MERICA_ID, 'Fenrigul', 218401),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:47:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318916),
      new Player(Guild.MERICA_ID, 'Song', 271971),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:19:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152188),
      new Player(Guild.MERICA_ID, 'MightyMite89', 72423),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:26:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152188),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 71546),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:27:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 156427),
      new Player(Guild.MERICA_ID, 'TanoOo', 114418),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:37:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 156427),
      new Player(Guild.MERICA_ID, 'Dol', 121411),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:37:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.MERICA_ID, 'Drenz', 133943),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:00:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.MERICA_ID, 'Tioaco', 118355),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:04:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154917),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134202),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:45:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204749),
      new Player(Guild.MERICA_ID, 'Julian', 173720),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:18:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 260538),
      new Player(Guild.MERICA_ID, 'MightyMite89', 173176),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:21:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 210233),
      new Player(Guild.MERICA_ID, 'Dinobunny', 199250),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:26:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 266683),
      new Player(Guild.MERICA_ID, 'Dol', 202579),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:30:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 315831),
      new Player(Guild.MERICA_ID, '_sad1_', 214122),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:49:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 344737),
      new Player(Guild.MERICA_ID, 'Dinobunny', 309264),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:49:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267837),
      new Player(Guild.MERICA_ID, 'Bilbo', 203325),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:00:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 179559),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 157140),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:07:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 179559),
      new Player(Guild.MERICA_ID, 'Bilbo', 166502),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:08:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326654),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 215174),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:09:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326654),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 232544),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:10:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318916),
      new Player(Guild.MERICA_ID, 'Babababababab', 282319),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:15:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 401281),
      new Player(Guild.MERICA_ID, 'Jokill31', 344236),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:22:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 405468),
      new Player(Guild.MERICA_ID, 'discuas', 302387),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:23:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 297541),
      new Player(Guild.MERICA_ID, 'Drenz', 194305),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:02:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 297541),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 172378),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:02:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278843),
      new Player(Guild.MERICA_ID, 'Juramar', 164298),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:33:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MERICA_ID, 'Mac', 176082),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:34:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278843),
      new Player(Guild.MERICA_ID, 'Julian', 186794),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:34:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MERICA_ID, 'Fenrigul', 146342),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:34:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398799),
      new Player(Guild.MERICA_ID, 'DerVehuel', 267617),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:54:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398799),
      new Player(Guild.MERICA_ID, 'Tioaco', 244911),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:55:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T00:18:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 122513),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T00:35:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:10:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:11:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T01:53:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 258994),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:54:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 157140),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T02:26:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 157140),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 156427),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:27:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 173720),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:29:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 173720),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 179559),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:30:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 215198),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 211365),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:45:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 215198),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 210233),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:45:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'elo', 152188),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:07:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:08:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 199250),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204749),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:29:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 199250),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 200410),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T05:30:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 122513),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 200410),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T05:40:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 289460),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 310299),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:53:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 246995),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256314),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:30:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 275637),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 266409),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:39:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 166512),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:31:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 166512),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154937),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:32:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T09:35:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 248442),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:36:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 210175),
      new Player(Guild.ASSASSINS_ID, 'elo', 244217),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:40:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 102965),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      0,
      false,
      `${warDateString}T10:42:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 102965),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T10:42:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 106191),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T10:45:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 236527),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 239469),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:21:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 210175),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 236568),
      Fortification.CITADEL_ID,
      13,
      false,
      `${warDateString}T11:25:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 172486),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 236568),
      Fortification.CITADEL_ID,
      7,
      true,
      `${warDateString}T11:29:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134202),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:58:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 215414),
      new Player(Guild.ASSASSINS_ID, 'HERO', 257443),
      Fortification.FOUNDRY_ID,
      10,
      false,
      `${warDateString}T12:01:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 172486),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 251620),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:13:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 188498),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 251620),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:29:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 173468),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267837),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T12:31:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 173631),
      new Player(Guild.ASSASSINS_ID, 'En4', 294120),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T12:32:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 189521),
      new Player(Guild.ASSASSINS_ID, 'HERO', 257443),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:35:09`
    ),
  ],
  Guild.MERICA_ID,
  874,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_27_2020,
  Guild.ASSASSINS_ID,
  1220
);
