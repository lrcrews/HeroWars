import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-03';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236775),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:39:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Taylord', 228717),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:40:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207281),
      new Player(Guild.USA_ID, 'Specter', 199081),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:48:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207281),
      new Player(Guild.USA_ID, 'Geronimo_64', 56539),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:49:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:51:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.USA_ID, 'MJR6969', 135430),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:51:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 330630),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 241865),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:21:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.USA_ID, 'Meztilabar', 75714),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:31:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.USA_ID, 'Danman', 58624),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:35:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      new Player(Guild.USA_ID, 'NanNo', 36037),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:46:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      new Player(Guild.USA_ID, 'Nezil', 75262),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:46:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420403),
      new Player(Guild.USA_ID, 'Taylord', 305151),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:03:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 301784),
      new Player(Guild.USA_ID, 'Specter', 268489),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:04:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 341350),
      new Player(Guild.USA_ID, 'Danman', 168029),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:12:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 341350),
      new Player(Guild.USA_ID, 'Warby', 168350),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:12:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.USA_ID, 'Netbar', 61100),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:14:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:15:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 293806),
      new Player(Guild.USA_ID, 'Meztilabar', 190332),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:18:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249770),
      new Player(Guild.USA_ID, 'Mercion', 218411),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:24:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249770),
      new Player(Guild.USA_ID, 'mirkwood777', 65668),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:25:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 330630),
      new Player(Guild.USA_ID, 'Boika Mt', 169407),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:52:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 323232),
      new Player(Guild.USA_ID, 'NanNo', 142221),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:58:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 323232),
      new Player(Guild.USA_ID, 'Dan1 0', 209088),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:59:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 302195),
      new Player(Guild.USA_ID, 'A O S', 170748),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:25:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 302195),
      new Player(Guild.USA_ID, 'Netbar', 115026),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:25:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 298218),
      new Player(Guild.USA_ID, 'Mercion', 242469),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:31:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 298218),
      new Player(Guild.USA_ID, 'Isoko', 164650),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:31:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 389485),
      new Player(Guild.USA_ID, 'mirkwood12345', 121480),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:04:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 389485),
      new Player(Guild.USA_ID, 'One', 202797),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:04:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 378723),
      new Player(Guild.USA_ID, 'mirkwood777', 200856),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:02:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 378723),
      new Player(Guild.USA_ID, 'Geronimo_64', 137199),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:03:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179464),
      new Player(Guild.USA_ID, 'Isoko', 57770),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:34:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179464),
      new Player(Guild.USA_ID, 'mirkwood12345', 40642),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:35:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272256),
      new Player(Guild.USA_ID, 'MJR6969', 220095),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:54:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 303306),
      new Player(Guild.USA_ID, 'Nezil', 169698),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:23:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 303306),
      new Player(Guild.USA_ID, 'qqstar168', 157848),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:23:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 169806),
      new Player(Guild.USA_ID, 'A O S', 75526),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:51:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 169806),
      new Player(Guild.USA_ID, 'Warby', 69630),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:52:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'One', 90647),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:25:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'qqstar168', 38270),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:25:58`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 218411),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:44:59`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 218411),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:45:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61079),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:16:00`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61100),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:16:59`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 220120),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T03:49:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 201152),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T04:18:39`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 58723),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T05:02:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T05:38:55`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 199081),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T05:52:52`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 199081),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      7,
      true,
      `${warDateString}T05:53:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 202836),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T07:14:52`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 202836),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T07:15:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 121618),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:33:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 121618),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:34:13`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 201152),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 253599),
      Fortification.MAGE_ACADEMY_ID,
      6,
      true,
      `${warDateString}T07:35:05`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 228717),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T07:50:53`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 75714),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T08:11:24`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      Fortification.BASTION_OF_ICE_ID,
      9,
      false,
      `${warDateString}T08:41:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 228717),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T10:15:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 58723),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 193621),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T10:54:41`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 190478),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 323232),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T12:10:27`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 69630),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      0,
      false,
      `${warDateString}T12:21:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 75262),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      0,
      false,
      `${warDateString}T12:52:45`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 75262),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      0,
      false,
      `${warDateString}T12:53:12`
    ),
  ],
  Guild.USA_ID,
  195,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_32_2020,
  Guild.ASSASSINS_ID,
  1400
);
