import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-13';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236131),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Taylord', 204731),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 215249),
      new Player(Guild.USA_ID, 'Specter', 188143),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 215249),
      new Player(Guild.USA_ID, 'Geronimo_64', 53353),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:30:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 322379),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 241044),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T00:51:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 192964),
      new Player(Guild.USA_ID, 'MJR6969', 121796),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:32:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 192964),
      new Player(Guild.USA_ID, 'Nezil', 67916),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:32:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.USA_ID, 'Dan1 0', 136916),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:47:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.USA_ID, 'Mercion', 170505),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:48:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 171578),
      new Player(Guild.USA_ID, 'Netbar', 61100),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:34:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 171578),
      new Player(Guild.USA_ID, 'Boika Mt', 30343),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:35:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 186687),
      new Player(Guild.USA_ID, 'Danman', 55005),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:15:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 186687),
      new Player(Guild.USA_ID, 'NanNo', 34848),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:15:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 402902),
      new Player(Guild.USA_ID, 'Taylord', 285583),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:18:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 402902),
      new Player(Guild.USA_ID, 'Specter', 253495),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:18:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 313922),
      new Player(Guild.USA_ID, 'Danman', 158958),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:40:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 313922),
      new Player(Guild.USA_ID, 'Warby', 158783),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:40:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328565),
      new Player(Guild.USA_ID, 'Meztilabar', 165294),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:59:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328565),
      new Player(Guild.USA_ID, 'Boika Mt', 159144),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:59:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 272607),
      new Player(Guild.USA_ID, 'NanNo', 123686),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:17:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 272607),
      new Player(Guild.USA_ID, 'Dan1 0', 189629),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:19:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 162424),
      new Player(Guild.USA_ID, 'Meztilabar', 68792),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:46:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 162424),
      new Player(Guild.USA_ID, 'mirkwood777', 62203),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:46:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 284243),
      new Player(Guild.USA_ID, 'A O S', 162668),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:52:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 284243),
      new Player(Guild.USA_ID, 'Netbar', 111256),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:53:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 222047),
      new Player(Guild.USA_ID, 'Isoko', 52270),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:59:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 222047),
      new Player(Guild.USA_ID, 'mirkwood12345', 31813),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:59:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329087),
      new Player(Guild.USA_ID, 'MJR6969', 206744),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:29:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329087),
      new Player(Guild.USA_ID, 'Nezil', 162260),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:29:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 331227),
      new Player(Guild.USA_ID, 'One', 193747),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:03:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 331227),
      new Player(Guild.USA_ID, 'Geronimo_64', 126696),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:04:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      new Player(Guild.USA_ID, 'qqstar168', 149346),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:25:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 380971),
      new Player(Guild.USA_ID, 'Mercion', 214000),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:25:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 380971),
      new Player(Guild.USA_ID, 'Isoko', 149635),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:25:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      new Player(Guild.USA_ID, 'mirkwood12345', 102774),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:26:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 357791),
      new Player(Guild.USA_ID, 'mirkwood777', 192523),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:54:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 164387),
      new Player(Guild.USA_ID, 'One', 82015),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:05:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 164387),
      new Player(Guild.USA_ID, 'A O S', 71521),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:06:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 160423),
      new Player(Guild.USA_ID, 'Warby', 67446),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:30:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 160423),
      new Player(Guild.USA_ID, 'qqstar168', 35608),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:30:35`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 285583),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 277755),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T00:02:35`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 204731),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:03:26`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 67916),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T00:25:02`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 67916),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T00:25:35`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188143),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      9,
      false,
      `${warDateString}T03:44:19`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188143),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T03:44:39`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61100),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:33:19`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 61100),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:33:42`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 136916),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T05:28:33`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 136916),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T05:29:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 192866),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 225890),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:29:57`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236131),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T05:35:05`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236131),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T05:35:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 193747),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242482),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T06:24:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 193747),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242482),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T06:24:29`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 170505),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T06:57:39`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 170505),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T06:58:04`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 31813),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:05:21`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 31813),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:05:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 68792),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T08:06:43`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 193872),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242482),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:53:34`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 51007),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:54:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'qqstar168', 157289),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242482),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T11:03:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'qqstar168', 157289),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242482),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:04:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 72530),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:26:22`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 72530),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:26:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 149635),
      new Player(Guild.ASSASSINS_ID, 'KP', 288059),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T11:39:15`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 149635),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 269007),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:40:29`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 68792),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:43:06`
    ),
  ],
  Guild.USA_ID,
  107,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_29_2020,
  Guild.ASSASSINS_ID,
  1400
);
