import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-06';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 232940),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Taylord', 202382),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      new Player(Guild.USA_ID, 'Specter', 188121),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 207818),
      new Player(Guild.USA_ID, 'Geronimo_64', 51147),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:24:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 207818),
      new Player(Guild.USA_ID, 'Mercion', 168105),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:24:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 146554),
      new Player(Guild.USA_ID, 'Nezil', 66593),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:53:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 146554),
      new Player(Guild.USA_ID, 'MJR6969', 121417),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:54:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.USA_ID, 'Dan1 0', 130505),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:04:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.USA_ID, 'Meztilabar', 65868),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:05:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319226),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 239102),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:10:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327127),
      new Player(Guild.USA_ID, 'Dan1 0', 179845),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:12:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181260),
      new Player(Guild.USA_ID, 'Netbar', 57716),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:54:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181260),
      new Player(Guild.USA_ID, 'Boika Mt', 27045),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:54:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      new Player(Guild.USA_ID, 'Danman', 54359),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:05:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      new Player(Guild.USA_ID, 'NanNo', 31858),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:06:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 400133),
      new Player(Guild.USA_ID, 'Taylord', 282883),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:30:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 400133),
      new Player(Guild.USA_ID, 'Specter', 249954),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:31:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 211496),
      new Player(Guild.USA_ID, 'mirkwood12345', 30505),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:17:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 211496),
      new Player(Guild.USA_ID, 'mirkwood777', 60856),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:18:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387289),
      new Player(Guild.USA_ID, 'Mercion', 202842),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:31:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387289),
      new Player(Guild.USA_ID, 'Danman', 158057),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:45:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 160710),
      new Player(Guild.USA_ID, 'Isoko', 51802),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:07:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 160710),
      new Player(Guild.USA_ID, 'One', 80976),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:08:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 158547),
      new Player(Guild.USA_ID, 'A O S', 70150),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:41:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 158547),
      new Player(Guild.USA_ID, 'Warby', 64733),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:42:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 356583),
      new Player(Guild.USA_ID, 'Warby', 156317),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:54:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 356583),
      new Player(Guild.USA_ID, 'Boika Mt', 156827),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:55:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297000),
      new Player(Guild.USA_ID, 'Meztilabar', 157627),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:50:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297000),
      new Player(Guild.USA_ID, 'NanNo', 111941),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:50:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 282572),
      new Player(Guild.USA_ID, 'A O S', 158021),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:58:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 282572),
      new Player(Guild.USA_ID, 'Netbar', 107122),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:59:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378214),
      new Player(Guild.USA_ID, 'One', 190478),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:04:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378214),
      new Player(Guild.USA_ID, 'mirkwood777', 189372),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:04:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271252),
      new Player(Guild.USA_ID, 'Geronimo_64', 124178),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:13:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271252),
      new Player(Guild.USA_ID, 'MJR6969', 203317),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:14:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311177),
      new Player(Guild.USA_ID, 'Nezil', 156472),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:50:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311177),
      new Player(Guild.USA_ID, 'qqstar168', 146898),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:50:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      new Player(Guild.USA_ID, 'qqstar168', 33229),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:54:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 246714),
      new Player(Guild.USA_ID, 'Isoko', 147339),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:44:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 246714),
      new Player(Guild.USA_ID, 'mirkwood12345', 97417),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:45:01`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 190478),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 258498),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:07:52`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 190478),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T01:08:38`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 57716),
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T03:54:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 57716),
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T03:54:37`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 189700),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T04:00:55`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 232940),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T04:19:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 232940),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T04:20:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 168105),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      7,
      true,
      `${warDateString}T04:22:22`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 168105),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:22:43`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188121),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T05:09:13`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188143),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T05:09:34`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 66593),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T05:10:23`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 66593),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T05:10:53`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 202382),
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T06:05:51`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 282883),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 270401),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T06:06:58`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 130505),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T06:41:56`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 130505),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T06:42:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 157050),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T06:53:56`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 157050),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T06:54:22`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 71395),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T07:18:15`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 71395),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:22:24`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 190000),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 270401),
      Fortification.LIGHTHOUSE_ID,
      7,
      false,
      `${warDateString}T07:29:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 156407),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:36:57`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 65720),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:37:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 157677),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 270401),
      Fortification.LIGHTHOUSE_ID,
      11,
      true,
      `${warDateString}T08:11:05`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 204642),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:12:43`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 204642),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:13:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'qqstar168', 154027),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:55:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'qqstar168', 154027),
      new Player(Guild.ASSASSINS_ID, 'En4', 297000),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:56:58`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 49156),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:00:03`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 49156),
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:01:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 147339),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241814),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:05:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 147339),
      new Player(Guild.ASSASSINS_ID, 'KP', 282438),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:07:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 97746),
      new Player(Guild.ASSASSINS_ID, 'Regal', 348183),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:32:37`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 97746),
      new Player(Guild.ASSASSINS_ID, 'Regal', 348183),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:32:51`
    ),
  ],
  Guild.USA_ID,
  113,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_28_2020,
  Guild.ASSASSINS_ID,
  1400
);
