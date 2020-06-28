import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-23';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 224697),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Taylord', 185573),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.USA_ID, 'Specter', 183687),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:41:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 333468),
      new Player(Guild.USA_ID, 'Taylord', 246255),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:43:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 195492),
      new Player(Guild.USA_ID, 'One', 74814),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:20:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 195492),
      new Player(Guild.USA_ID, 'A O S', 67018),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:21:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.USA_ID, 'Nezil', 67560),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:07:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.USA_ID, 'Netbar', 57716),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:07:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.USA_ID, 'Danman', 51389),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:54:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.USA_ID, 'NanNo', 31605),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:54:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 196846),
      new Player(Guild.USA_ID, 'MJR6969', 106617),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:07:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 16177),
      new Player(Guild.USA_ID, 'Boika Mt', 24793),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:21:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 16177),
      new Player(Guild.USA_ID, 'mirkwood12345', 25301),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:22:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395880),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 235588),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:23:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395880),
      new Player(Guild.USA_ID, 'Specter', 245406),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:24:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323092),
      new Player(Guild.USA_ID, 'Meztilabar', 147211),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:28:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323092),
      new Player(Guild.USA_ID, 'Warby', 154092),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:29:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 196846),
      new Player(Guild.USA_ID, 'Mercion', 141777),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:36:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 344124),
      new Player(Guild.USA_ID, 'Mercion', 189563),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:06:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366609),
      new Player(Guild.USA_ID, 'Geronimo_64', 117580),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:25:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366609),
      new Player(Guild.USA_ID, 'Dan1 0', 164782),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:25:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 305095),
      new Player(Guild.USA_ID, 'A O S', 150606),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:46:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 305095),
      new Player(Guild.USA_ID, 'Boika Mt', 152005),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:47:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 344124),
      new Player(Guild.USA_ID, 'Netbar', 105471),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:02:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 194720),
      new Player(Guild.USA_ID, 'NanNo', 106218),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:53:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 287550),
      new Player(Guild.USA_ID, 'MJR6969', 194205),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:55:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 173887),
      new Player(Guild.USA_ID, 'Meztilabar', 62594),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:14:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 173887),
      new Player(Guild.USA_ID, 'Dan1 0', 124727),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:14:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 273796),
      new Player(Guild.USA_ID, 'Isoko', 137066),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:16:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 273796),
      new Player(Guild.USA_ID, 'mirkwood12345', 87275),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:16:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318163),
      new Player(Guild.USA_ID, 'Nezil', 148240),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:18:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318163),
      new Player(Guild.USA_ID, 'qqstar168', 140266),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:18:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 257084),
      new Player(Guild.USA_ID, 'One', 180666),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:34:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 243527),
      new Player(Guild.USA_ID, 'mirkwood777', 178244),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:34:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 337527),
      new Player(Guild.USA_ID, 'Danman', 150758),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:44:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.USA_ID, 'Warby', 62441),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:44:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 156370),
      new Player(Guild.USA_ID, 'Geronimo_64', 48213),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:48:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 156370),
      new Player(Guild.USA_ID, 'qqstar168', 29906),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:49:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149321),
      new Player(Guild.USA_ID, 'mirkwood777', 59733),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:32:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 149910),
      new Player(Guild.USA_ID, 'Isoko', 50515),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:33:21`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 189563),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 253508),
      Fortification.MAGE_ACADEMY_ID,
      13,
      false,
      `${warDateString}T02:36:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 189563),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 253508),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T02:37:40`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 57716),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:22:12`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 57716),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:22:34`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 243329),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263017),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T04:44:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 183687),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T04:45:28`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 194682),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T04:45:46`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 194682),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T04:46:11`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 224697),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T04:57:17`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 224697),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T04:57:48`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 124727),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T04:58:52`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 124727),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T05:01:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 142658),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254567),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T05:48:08`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 142658),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254567),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T05:48:39`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 180666),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263017),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:56:57`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 180666),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263017),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T05:57:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 246255),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 261184),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:25:24`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 246255),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263017),
      Fortification.LIGHTHOUSE_ID,
      13,
      true,
      `${warDateString}T06:26:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 84928),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T06:57:45`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 25487),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T06:58:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 60042),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:06:36`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 179528),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T07:09:33`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 170635),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T07:10:10`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 141266),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:07:56`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 117580),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:04:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 150606),
      new Player(Guild.ASSASSINS_ID, 'KP', 275173),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:04:21`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 149416),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:21:25`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 135389),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:04:31`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Isoko', 137066),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254657),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:05:57`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 141409),
      new Player(Guild.ASSASSINS_ID, 'KP', 275173),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:11:27`
    ),
  ],
  Guild.USA_ID,
  114,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_26_2020,
  Guild.ASSASSINS_ID,
  1400
);
