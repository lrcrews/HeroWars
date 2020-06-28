import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-25';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 267578),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268846),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'discuas', 238842),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MERICA_ID, 'Julian', 172539),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:59:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MERICA_ID, 'Mac', 173180),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:00:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.MERICA_ID, 'Drenz', 122365),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:05:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134245),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:05:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 199873),
      new Player(Guild.MERICA_ID, 'DerVehuel', 208220),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:58:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 199873),
      new Player(Guild.MERICA_ID, 'Bilbo', 161673),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:11:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.MERICA_ID, 'WildWind', 110079),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:25:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 70154),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:26:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 152624),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:55:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      new Player(Guild.MERICA_ID, 'Dol', 104262),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:55:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      new Player(Guild.MERICA_ID, 'Dinobunny', 198042),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:05:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      new Player(Guild.MERICA_ID, 'Fenrigul', 146342),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:06:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157965),
      new Player(Guild.MERICA_ID, 'Tioaco', 117927),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:12:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157965),
      new Player(Guild.MERICA_ID, 'TanoOo', 112060),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:13:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 306533),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 209215),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:36:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 306533),
      new Player(Guild.MERICA_ID, 'Fenrigul', 212687),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:36:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 392920),
      new Player(Guild.MERICA_ID, 'Jokill31', 327541),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T07:10:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 316596),
      new Player(Guild.MERICA_ID, 'Song', 267734),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:29:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 316596),
      new Player(Guild.MERICA_ID, 'Babababababab', 273134),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:30:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 307746),
      new Player(Guild.MERICA_ID, 'discuas', 294166),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:35:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 372952),
      new Player(Guild.MERICA_ID, 'Jokill31', 327541),
      Fortification.CITADEL_ID,
      15,
      true,
      `${warDateString}T08:04:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367645),
      new Player(Guild.MERICA_ID, 'Tioaco', 240879),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:15:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367645),
      new Player(Guild.MERICA_ID, 'DerVehuel', 260066),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:16:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 325540),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 226166),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:25:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 325540),
      new Player(Guild.MERICA_ID, 'TanoOo', 205454),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:26:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288220),
      new Player(Guild.MERICA_ID, 'Juramar', 163548),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:52:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288220),
      new Player(Guild.MERICA_ID, 'Julian', 183795),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:53:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 276662),
      new Player(Guild.MERICA_ID, 'WildWind', 194489),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:06:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 274250),
      new Player(Guild.MERICA_ID, 'Bilbo', 200951),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:07:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 266845),
      new Player(Guild.MERICA_ID, 'Drenz', 189212),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:09:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 266845),
      new Player(Guild.MERICA_ID, 'Dol', 198223),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:10:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 396311),
      new Player(Guild.MERICA_ID, 'Mac', 281011),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:20:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 396311),
      new Player(Guild.MERICA_ID, 'Dinobunny', 303613),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:21:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      new Player(Guild.MERICA_ID, 'Juramar', 102508),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:39:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      new Player(Guild.MERICA_ID, '_sad1_', 102965),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:39:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 302317),
      new Player(Guild.MERICA_ID, '_sad1_', 204752),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:12:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:40:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:40:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 208220),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 209042),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:29:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 208220),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T01:30:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 104262),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T01:38:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:12:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 256991),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T02:13:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 110079),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 256991),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T02:13:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 153101),
      new Player(Guild.ASSASSINS_ID, 'KP', 150341),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:36:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 153101),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 150722),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T03:37:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 161673),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157965),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:45:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 161673),
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:46:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 172539),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:46:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 172539),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T03:47:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 102508),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T03:50:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 139188),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:28:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:28:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 70154),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 150722),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T05:30:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 198042),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 199873),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:53:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 198042),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 198543),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:55:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 238842),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T09:32:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 238842),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 244498),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:33:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 205682),
      new Player(Guild.ASSASSINS_ID, 'elo', 239299),
      Fortification.CITADEL_ID,
      18,
      false,
      `${warDateString}T10:11:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 104262),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T10:20:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 205682),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 228009),
      Fortification.CITADEL_ID,
      9,
      false,
      `${warDateString}T11:24:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 166195),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 228009),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T11:26:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 188200),
      new Player(Guild.ASSASSINS_ID, 'elo', 239299),
      Fortification.CITADEL_ID,
      2,
      true,
      `${warDateString}T11:27:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 188200),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 228009),
      Fortification.CITADEL_ID,
      7,
      true,
      `${warDateString}T11:27:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 209191),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 236115),
      Fortification.CITADEL_ID,
      11,
      false,
      `${warDateString}T11:29:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 163697),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 236115),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:30:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 281101),
      new Player(Guild.ASSASSINS_ID, 'KP', 276118),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:32:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 208197),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 236115),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:32:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 281101),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 305226),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:53:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 194489),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 236115),
      Fortification.CITADEL_ID,
      9,
      true,
      `${warDateString}T11:55:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 216237),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 243960),
      Fortification.FOUNDRY_ID,
      5,
      false,
      `${warDateString}T12:05:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 240879),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 253773),
      Fortification.MAGE_ACADEMY_ID,
      14,
      false,
      `${warDateString}T12:08:58`
    ),
  ],
  Guild.MERICA_ID,
  819,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_26_2020,
  Guild.ASSASSINS_ID,
  1340
);
