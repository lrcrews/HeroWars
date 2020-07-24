import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-21';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236775),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Taylord', 218797),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      new Player(Guild.USA_ID, 'Specter', 197395),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.USA_ID, 'Geronimo_64', 54237),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:36:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.USA_ID, 'Dan1 0', 137427),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:36:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.USA_ID, 'MJR6969', 135040),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:04:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.USA_ID, 'One', 83108),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:05:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 332172),
      new Player(Guild.USA_ID, 'Dan1 0', 198294),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:55:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 324848),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 241865),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:56:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.USA_ID, 'Nezil', 69203),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:09:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.USA_ID, 'Mercion', 201157),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:11:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 365414),
      new Player(Guild.USA_ID, 'Mercion', 226928),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:42:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.USA_ID, 'Netbar', 61100),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:12:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:12:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 413914),
      new Player(Guild.USA_ID, 'Taylord', 301100),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:15:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 413914),
      new Player(Guild.USA_ID, 'Specter', 259417),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:15:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 365414),
      new Player(Guild.USA_ID, 'MJR6969', 216675),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:20:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316122),
      new Player(Guild.USA_ID, 'Danman', 161653),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:21:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316122),
      new Player(Guild.USA_ID, 'Warby', 163716),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:22:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 284770),
      new Player(Guild.USA_ID, 'Meztilabar', 173020),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:27:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238030),
      new Player(Guild.USA_ID, 'A O S', 73698),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:28:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      new Player(Guild.USA_ID, 'Meztilabar', 73372),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:28:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      new Player(Guild.USA_ID, 'Warby', 68925),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:29:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.USA_ID, 'Danman', 56298),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:36:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.USA_ID, 'NanNo', 35052),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:37:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293249),
      new Player(Guild.USA_ID, 'Boika Mt', 162792),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:24:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293249),
      new Player(Guild.USA_ID, 'NanNo', 133454),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:25:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 292839),
      new Player(Guild.USA_ID, 'A O S', 165230),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:02:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 292839),
      new Player(Guild.USA_ID, 'Netbar', 112198),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:03:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 279530),
      new Player(Guild.USA_ID, 'Isoko', 157895),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:24:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 339990),
      new Player(Guild.USA_ID, 'One', 199146),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:36:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 337605),
      new Player(Guild.USA_ID, 'mirkwood777', 197064),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:37:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'qqstar168', 37311),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:13:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'mirkwood777', 63539),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:13:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167542),
      new Player(Guild.USA_ID, 'Isoko', 53357),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:11:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167542),
      new Player(Guild.USA_ID, 'mirkwood12345', 36470),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:11:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 253221),
      new Player(Guild.USA_ID, 'mirkwood12345', 107486),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:14:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 253221),
      new Player(Guild.USA_ID, 'Geronimo_64', 129806),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:16:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.USA_ID, 'Nezil', 166138),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:40:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.USA_ID, 'qqstar168', 151309),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:40:39`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61100),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:37:41`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61100),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:38:05`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 227042),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245053),
      Fortification.MAGE_ACADEMY_ID,
      12,
      false,
      `${warDateString}T04:14:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 227042),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245053),
      Fortification.MAGE_ACADEMY_ID,
      8,
      true,
      `${warDateString}T04:15:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 218797),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T06:55:22`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 218797),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:56:00`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 197363),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 277207),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T07:08:32`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 197363),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 270890),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T07:09:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 69203),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:04:22`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 69203),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:04:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 53357),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:57:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 158015),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 287969),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:58:32`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 197395),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T08:58:50`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 197395),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T08:59:10`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 51819),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:04:33`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 51819),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:04:59`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 137427),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T09:55:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 137427),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T09:56:25`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 199146),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 270890),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:47:25`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 199146),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 270890),
      Fortification.MAGE_ACADEMY_ID,
      12,
      true,
      `${warDateString}T10:47:50`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 74469),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:11:58`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 165407),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 277207),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:15:03`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 107865),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 277207),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:21:26`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 36470),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:21:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 73372),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:22:29`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 168912),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 277207),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:24:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 68925),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:36:26`
    ),
  ],
  Guild.USA_ID,
  106,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_30_2020,
  Guild.ASSASSINS_ID,
  1400
);
