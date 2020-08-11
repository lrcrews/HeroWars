import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-10';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.USA_ID, 'MJR6969', 135915),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.USA_ID, 'One', 92170),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236775),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:34:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'BuenoJr', 48386),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:42:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 198897),
      new Player(Guild.USA_ID, 'Nezil', 76307),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:04:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 198897),
      new Player(Guild.USA_ID, 'Dan1 0', 143843),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:05:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 391497),
      new Player(Guild.USA_ID, 'mirkwood777', 204171),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:15:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 391497),
      new Player(Guild.USA_ID, 'Dan1 0', 213981),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:16:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'Netbar', 61100),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:19:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'Mihu000', 42126),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:20:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:52:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      new Player(Guild.USA_ID, 'Isoko', 61732),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:53:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309342),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 241865),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:08:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309342),
      new Player(Guild.USA_ID, 'BuenoJr', 223121),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:09:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.USA_ID, 'Danman', 59356),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:32:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.USA_ID, 'Yadav', 46957),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:32:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 357974),
      new Player(Guild.USA_ID, 'Warby', 170871),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:03:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 363007),
      new Player(Guild.USA_ID, 'Meztilabar', 196474),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:04:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 178422),
      new Player(Guild.USA_ID, 'Meztilabar', 77012),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:05:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 178422),
      new Player(Guild.USA_ID, 'mirkwood777', 66638),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:05:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 402629),
      new Player(Guild.USA_ID, 'qqstar168', 160024),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:25:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 402629),
      new Player(Guild.USA_ID, 'Boika Mt', 173342),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:26:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197221),
      new Player(Guild.USA_ID, 'Geronimo_64', 57147),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:35:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197221),
      new Player(Guild.USA_ID, 'mirkwood12345', 45361),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:36:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 306778),
      new Player(Guild.USA_ID, 'Yadav', 131573),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:51:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 252387),
      new Player(Guild.USA_ID, 'A O S', 76188),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 252387),
      new Player(Guild.USA_ID, 'Warby', 70653),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 306778),
      new Player(Guild.USA_ID, 'Netbar', 115266),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:53:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 330567),
      new Player(Guild.USA_ID, 'Danman', 177558),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:45:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 330567),
      new Player(Guild.USA_ID, 'Isoko', 166905),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:46:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 334108),
      new Player(Guild.USA_ID, 'Mihu000', 112787),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:03:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 334108),
      new Player(Guild.USA_ID, 'mirkwood12345', 118048),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:03:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422406),
      new Player(Guild.USA_ID, 'One', 206313),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:21:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 310083),
      new Player(Guild.USA_ID, 'A O S', 172876),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:06:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 310083),
      new Player(Guild.USA_ID, 'Geronimo_64', 139632),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:07:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422406),
      new Player(Guild.USA_ID, 'MJR6969', 220516),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:15:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 182733),
      new Player(Guild.USA_ID, 'qqstar168', 38992),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:26:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 182733),
      new Player(Guild.USA_ID, 'NanNo', 36244),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:26:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 304058),
      new Player(Guild.USA_ID, 'Nezil', 171617),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:07:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 304058),
      new Player(Guild.USA_ID, 'NanNo', 151728),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:07:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Yadav', 141915),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256616),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T03:26:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Yadav', 141915),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256616),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:27:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 204927),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256616),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T04:52:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 204927),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      11,
      false,
      `${warDateString}T04:52:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 116399),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T05:47:24`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 116399),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T05:47:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 159518),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T06:05:42`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 159518),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T06:06:27`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 207844),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256616),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T06:14:35`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 207844),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256616),
      Fortification.MAGE_ACADEMY_ID,
      8,
      true,
      `${warDateString}T06:15:13`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 125238),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T06:36:13`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 117161),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 290645),
      Fortification.BARRACKS_ID,
      3,
      true,
      `${warDateString}T06:38:35`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 214145),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:58:05`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 214145),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:58:51`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 70653),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T08:43:27`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 174445),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:44:19`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 184612),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T12:18:04`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 192010),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T12:21:01`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 139702),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281077),
      Fortification.MAGE_ACADEMY_ID,
      6,
      true,
      `${warDateString}T12:40:26`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 54583),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:43:59`
    ),
  ],
  Guild.USA_ID,
  61,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_33_2020,
  Guild.ASSASSINS_ID,
  1400
);
