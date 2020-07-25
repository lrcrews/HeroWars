import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-15';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 255741),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:08:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 248372),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:08:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 139470),
      new Player(Guild.ROMANIA_ID, 'Thyned', 112565),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:18:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 139470),
      new Player(Guild.ROMANIA_ID, 'Gaby', 97348),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:18:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.ROMANIA_ID, 'hama52', 179331),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:36:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 169946),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 146342),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:42:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 169946),
      new Player(Guild.ROMANIA_ID, 'Medo', 146528),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:43:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:05:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 102677),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:05:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.ROMANIA_ID, 'Antonio', 217761),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:56:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.ROMANIA_ID, 'JustMe', 211575),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:57:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 152601),
      new Player(Guild.ROMANIA_ID, 'Bernde', 141008),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:11:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 152601),
      new Player(Guild.ROMANIA_ID, 'tokyo', 110451),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:11:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 374256),
      new Player(Guild.ROMANIA_ID, 'Blondu', 363711),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T07:24:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 233526),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:26:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302713),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 214553),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:27:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.ROMANIA_ID, 'Galy', 115190),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:50:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 133783),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:52:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 244233),
      new Player(Guild.ROMANIA_ID, 'tokyo', 195170),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:18:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 222510),
      new Player(Guild.ROMANIA_ID, 'Blondu', 363711),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T10:34:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 222510),
      new Player(Guild.ROMANIA_ID, 'Blondu', 363711),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T10:50:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 346884),
      new Player(Guild.ROMANIA_ID, 'Blondu', 363711),
      Fortification.CITADEL_ID,
      8,
      true,
      `${warDateString}T11:11:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 267528),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 195962),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:22:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 358190),
      new Player(Guild.ROMANIA_ID, 'Thyned', 231660),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:42:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 358190),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 288787),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:43:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 262043),
      new Player(Guild.ROMANIA_ID, 'Gaby', 186610),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:54:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 314918),
      new Player(Guild.ROMANIA_ID, 'JustMe', 286133),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:59:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320699),
      new Player(Guild.ROMANIA_ID, 'Adrian', 229165),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:02:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 325331),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 254214),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:04:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.ROMANIA_ID, 'Adrian', 180430),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T12:16:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 185585),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:17:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 262043),
      new Player(Guild.ROMANIA_ID, 'Medo', 190036),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:36:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 264966),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 210832),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:41:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 376679),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 191631),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:43:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 334138),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 310575),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:46:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 320414),
      new Player(Guild.ROMANIA_ID, 'Antonio', 271922),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:55:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249492),
      new Player(Guild.ROMANIA_ID, 'Bernde', 206026),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:57:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249492),
      new Player(Guild.ROMANIA_ID, 'Galy', 180550),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:57:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:45:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:46:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 255741),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:01:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:01:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 115190),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T03:24:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 115190),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T03:27:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 248372),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:30:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 218384),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 206941),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:30:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 248372),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 254332),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:31:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 180430),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:32:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 180430),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 183818),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:34:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 141008),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 158106),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:16:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 141008),
      new Player(Guild.ASSASSINS_ID, 'KP', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:17:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 146342),
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:32:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 146342),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 152601),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 133783),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:20:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 133783),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 142231),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T08:20:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 233526),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 251700),
      Fortification.GATES_OF_NATURE_ID,
      12,
      false,
      `${warDateString}T09:12:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 233526),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 240590),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T09:14:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 240590),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T10:03:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 211575),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 251700),
      Fortification.GATES_OF_NATURE_ID,
      8,
      true,
      `${warDateString}T10:04:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 270154),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249114),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:06:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 281804),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302713),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:09:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 185585),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193235),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T10:09:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 281804),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 250786),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:10:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 185585),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 194627),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T10:11:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193235),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T10:17:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 110451),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 142231),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T10:38:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 146528),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 169946),
      Fortification.BASTION_OF_FIRE_ID,
      9,
      false,
      `${warDateString}T10:51:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 98118),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 194627),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T11:01:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 186934),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 227746),
      Fortification.CITADEL_ID,
      8,
      false,
      `${warDateString}T11:03:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 272311),
      new Player(Guild.ASSASSINS_ID, 'KP', 265628),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:15:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 146528),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 169946),
      Fortification.BASTION_OF_FIRE_ID,
      11,
      true,
      `${warDateString}T11:20:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 196268),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 227746),
      Fortification.CITADEL_ID,
      12,
      true,
      `${warDateString}T11:26:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 196268),
      new Player(Guild.ASSASSINS_ID, 'elo', 233205),
      Fortification.CITADEL_ID,
      8,
      false,
      `${warDateString}T11:29:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 363711),
      new Player(Guild.ASSASSINS_ID, 'Regal', 303738),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:03:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 288835),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 258033),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:49:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 231660),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 214980),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:55:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 231660),
      new Player(Guild.ASSASSINS_ID, 'HERO', 244233),
      Fortification.FOUNDRY_ID,
      10,
      false,
      `${warDateString}T12:56:22`
    ),
  ],
  Guild.ROMANIA_ID,
  958,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_25_2020,
  Guild.ASSASSINS_ID,
  1300
);
