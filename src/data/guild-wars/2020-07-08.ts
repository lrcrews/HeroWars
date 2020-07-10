import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-08';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 267578),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268846),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:16:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 194912),
      new Player(Guild.MERICA_ID, 'Mac', 183128),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T00:58:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 194912),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 160245),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:58:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 153786),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134202),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:33:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 153786),
      new Player(Guild.MERICA_ID, 'MightyMite89', 73523),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:35:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 150988),
      new Player(Guild.MERICA_ID, 'Juramar', 108846),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:51:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 150988),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 72863),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:51:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 182254),
      new Player(Guild.MERICA_ID, 'Bilbo', 172111),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:30:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 182254),
      new Player(Guild.MERICA_ID, 'Julian', 174312),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:30:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      new Player(Guild.MERICA_ID, 'Fenrigul', 146342),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:18:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.MERICA_ID, 'Drenz', 133943),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:49:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.MERICA_ID, 'Tioaco', 119300),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:49:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319354),
      new Player(Guild.MERICA_ID, 'Song', 270252),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:56:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319354),
      new Player(Guild.MERICA_ID, 'Mac', 294214),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:57:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212131),
      new Player(Guild.MERICA_ID, 'Dinobunny', 204725),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:06:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 267655),
      new Player(Guild.MERICA_ID, 'Juramar', 167746),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:07:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 349679),
      new Player(Guild.MERICA_ID, 'Dinobunny', 312060),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:20:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370546),
      new Player(Guild.MERICA_ID, 'Jokill31', 342255),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:28:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370546),
      new Player(Guild.MERICA_ID, 'discuas', 307028),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:29:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311378),
      new Player(Guild.MERICA_ID, 'Bilbo', 204338),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:45:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311378),
      new Player(Guild.MERICA_ID, 'Drenz', 196131),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:46:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271727),
      new Player(Guild.MERICA_ID, 'MightyMite89', 176949),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:58:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271727),
      new Player(Guild.MERICA_ID, 'Fenrigul', 220441),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:59:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 349832),
      new Player(Guild.MERICA_ID, 'Babababababab', 283643),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:03:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MERICA_ID, 'emojis', 218311),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:36:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297901),
      new Player(Guild.MERICA_ID, 'Dol', 209026),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:37:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 283354),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 215834),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:07:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 283354),
      new Player(Guild.MERICA_ID, 'TanoOo', 214944),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:08:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263355),
      new Player(Guild.MERICA_ID, 'Julian', 190554),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:55:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263355),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 183300),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:56:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378855),
      new Player(Guild.MERICA_ID, 'emojis', 270296),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:57:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378855),
      new Player(Guild.MERICA_ID, 'Tioaco', 249956),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:58:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401440),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 236177),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:37:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      new Player(Guild.MERICA_ID, 'TanoOo', 116424),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:40:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      new Player(Guild.MERICA_ID, '_sad1_', 106719),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:40:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      new Player(Guild.MERICA_ID, 'Dol', 124733),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:07:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401440),
      new Player(Guild.MERICA_ID, '_sad1_', 218742),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:05:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:23:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268213),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:24:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:57:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268846),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T02:58:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 1247333),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T03:43:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 218311),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 214430),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:46:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 218311),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212131),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:47:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 174312),
      new Player(Guild.ASSASSINS_ID, 'HERO', 194912),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:00:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 174312),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 182254),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 172111),
      new Player(Guild.ASSASSINS_ID, 'KP', 163372),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:49:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 172111),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:50:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 204725),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 202076),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:06:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 204725),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 212763),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:07:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 160245),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 157543),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:37:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 160830),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:39:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134202),
      new Player(Guild.ASSASSINS_ID, 'wookie', 150988),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T06:09:41`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      13,
      false,
      `${warDateString}T07:06:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 256973),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T07:07:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 250036),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 259604),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:07:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 239540),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271727),
      Fortification.LIGHTHOUSE_ID,
      13,
      false,
      `${warDateString}T07:09:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 108846),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 256973),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T07:10:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 282820),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 273027),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:13:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 134202),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      5,
      false,
      `${warDateString}T07:41:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 108846),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T07:46:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 150988),
      new Player(Guild.ASSASSINS_ID, 'wookie', 150988),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T08:31:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 215110),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271727),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T09:30:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 249763),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:33:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 212363),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271727),
      Fortification.LIGHTHOUSE_ID,
      6,
      true,
      `${warDateString}T09:35:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 307086),
      new Player(Guild.ASSASSINS_ID, 'En4', 297901),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:36:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 215110),
      new Player(Guild.ASSASSINS_ID, 'elo', 247188),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:57:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:07:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 149727),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 153786),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:07:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 294253),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311331),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:14:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 213475),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T11:32:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 198514),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:33:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 190987),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:52:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 194944),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 241493),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T11:54:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 176971),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 242558),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:56:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 176971),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:57:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 183300),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:07:38`
    ),
  ],
  Guild.MERICA_ID,
  865,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_28_2020,
  Guild.ASSASSINS_ID,
  1400
);
