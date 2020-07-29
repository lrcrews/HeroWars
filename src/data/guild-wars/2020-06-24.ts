import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-24';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:08:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 257725),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:29:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 249027),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:30:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 257725),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T03:47:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 188009),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:57:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.ROMANIA_ID, 'hama52', 181132),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:58:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.ROMANIA_ID, 'Thyned', 114341),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:14:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 78488),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:14:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.ROMANIA_ID, 'Galy', 119809),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:34:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 188700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:13:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      new Player(Guild.ROMANIA_ID, 'Adrian', 186196),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:14:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 220877),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:18:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 235444),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:18:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      new Player(Guild.ROMANIA_ID, 'tokyo', 114045),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:07:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174485),
      new Player(Guild.ROMANIA_ID, 'Bernde', 142595),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:24:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174485),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 147920),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:24:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 135087),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:27:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:27:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 396204),
      new Player(Guild.ROMANIA_ID, 'Blondu', 368876),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:29:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 344617),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 313895),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:35:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 265207),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 183654),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:37:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 265207),
      new Player(Guild.ROMANIA_ID, 'tokyo', 201447),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:38:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263270),
      new Player(Guild.ROMANIA_ID, 'Medo', 190609),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:44:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263270),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 202534),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:45:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 273829),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 222298),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:36:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 334399),
      new Player(Guild.ROMANIA_ID, 'Antonio', 280060),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:46:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 334399),
      new Player(Guild.ROMANIA_ID, 'Thyned', 238159),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:47:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157403),
      new Player(Guild.ROMANIA_ID, 'Medo', 147480),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:00:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157403),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 104719),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:00:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367645),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 246314),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:16:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318229),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 291452),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:16:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367645),
      new Player(Guild.ROMANIA_ID, 'Adrian', 233240),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:16:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318229),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 260574),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:17:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323281),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 202005),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:56:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 325528),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 215550),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:57:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 287881),
      new Player(Guild.ROMANIA_ID, 'Bernde', 211868),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:07:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 287881),
      new Player(Guild.ROMANIA_ID, 'Galy', 200110),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 345150),
      new Player(Guild.ROMANIA_ID, 'hama52', 286441),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:10:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 396204),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 272920),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:12:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:11:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 368876),
      new Player(Guild.ASSASSINS_ID, 'Regal', 334272),
      Fortification.BARRACKS_ID,
      17,
      false,
      `${warDateString}T02:36:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:52:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:54:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 233240),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 253638),
      Fortification.MAGE_ACADEMY_ID,
      9,
      false,
      `${warDateString}T03:23:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 233240),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 255047),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:24:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 280367),
      new Player(Guild.ASSASSINS_ID, 'KP', 275774),
      Fortification.BARRACKS_ID,
      12,
      false,
      `${warDateString}T03:44:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 280367),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 261271),
      Fortification.BARRACKS_ID,
      14,
      false,
      `${warDateString}T03:46:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 257725),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:49:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 235444),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 243844),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T03:51:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 188700),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 209042),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T03:53:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 188700),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T03:54:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 120252),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 203841),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T04:10:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 120252),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 209042),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T04:10:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 243844),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T04:12:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 249027),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 256991),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T04:27:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 249027),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 254339),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:28:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 183654),
      new Player(Guild.ASSASSINS_ID, 'Regal', 334272),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T05:34:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 147920),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157403),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:41:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 147920),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174485),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T05:42:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 286540),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 305159),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:11:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 286540),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 261271),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T06:13:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 135551),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138226),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:41:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 135551),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:42:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 188607),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 198051),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:51:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 188607),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 198130),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:53:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 142595),
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T08:28:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 142595),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 149768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:29:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 257725),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:45:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 114045),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 256991),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T09:01:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 78488),
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T09:19:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 238159),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 253638),
      Fortification.MAGE_ACADEMY_ID,
      11,
      true,
      `${warDateString}T09:36:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 238159),
      new Player(Guild.ASSASSINS_ID, 'Regal', 334272),
      Fortification.BARRACKS_ID,
      3,
      true,
      `${warDateString}T09:39:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 273164),
      new Player(Guild.ASSASSINS_ID, 'KP', 275774),
      Fortification.BARRACKS_ID,
      8,
      true,
      `${warDateString}T10:06:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 148432),
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:31:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 148432),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174485),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      true,
      `${warDateString}T11:31:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 114045),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      false,
      `${warDateString}T12:05:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 104719),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      7,
      false,
      `${warDateString}T12:09:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 104719),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T12:10:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 100281),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T12:12:35`
    ),
  ],
  Guild.ROMANIA_ID,
  900,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_26_2020,
  Guild.ASSASSINS_ID,
  1340
);
