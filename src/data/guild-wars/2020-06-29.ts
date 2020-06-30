import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-29';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 229144),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.USA_ID, 'Taylord', 199725),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 370153),
      new Player(Guild.USA_ID, 'MJR6969', 199379),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:29:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 370153),
      new Player(Guild.USA_ID, 'One', 185435),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:42:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 207309),
      new Player(Guild.USA_ID, 'qqstar168', 144676),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:01:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 235781),
      new Player(Guild.USA_ID, 'Nezil', 152173),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:01:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 202915),
      new Player(Guild.USA_ID, 'Specter', 188143),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:14:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 202915),
      new Player(Guild.USA_ID, 'One', 78130),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:15:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178357),
      new Player(Guild.USA_ID, 'Nezil', 68179),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:27:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178357),
      new Player(Guild.USA_ID, 'MJR6969', 119273),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:27:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318489),
      new Player(Guild.USA_ID, 'Mercion', 197191),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:37:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318489),
      new Player(Guild.USA_ID, 'A O S', 154509),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:38:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209180),
      new Player(Guild.USA_ID, 'Mercion', 162791),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:51:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209180),
      new Player(Guild.USA_ID, 'Dan1 0', 130031),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:53:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 164907),
      new Player(Guild.USA_ID, 'Netbar', 57716),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:27:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 164907),
      new Player(Guild.USA_ID, 'Boika Mt', 26608),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398191),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 238094),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:29:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398191),
      new Player(Guild.USA_ID, 'Specter', 248152),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:36:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 307211),
      new Player(Guild.USA_ID, 'Meztilabar', 152443),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:42:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 307211),
      new Player(Guild.USA_ID, 'Warby', 155225),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:42:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328711),
      new Player(Guild.USA_ID, 'Geronimo_64', 120453),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:00:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328711),
      new Player(Guild.USA_ID, 'NanNo', 112015),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:01:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.USA_ID, 'Meztilabar', 65004),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:11:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.USA_ID, 'Danman', 52022),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:20:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 339686),
      new Player(Guild.USA_ID, 'Dan1 0', 172514),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:04:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 339686),
      new Player(Guild.USA_ID, 'Boika Mt', 153619),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:05:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 365186),
      new Player(Guild.USA_ID, 'Taylord', 277987),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:41:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 346018),
      new Player(Guild.USA_ID, 'Netbar', 106799),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:51:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 346018),
      new Player(Guild.USA_ID, 'Danman', 153307),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:52:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 293032),
      new Player(Guild.USA_ID, 'mirkwood777', 184394),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:53:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 293032),
      new Player(Guild.USA_ID, 'Isoko', 139918),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:54:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.USA_ID, 'A O S', 68290),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:56:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.USA_ID, 'Warby', 63132),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:56:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 86810),
      new Player(Guild.USA_ID, 'mirkwood12345', 93413),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:12:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      new Player(Guild.USA_ID, 'NanNo', 31858),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:05:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154917),
      new Player(Guild.USA_ID, 'mirkwood777', 60113),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:05:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      new Player(Guild.USA_ID, 'Isoko', 51336),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:05:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154917),
      new Player(Guild.USA_ID, 'mirkwood12345', 27248),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:06:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.USA_ID, 'Geronimo_64', 50021),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:44:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.USA_ID, 'qqstar168', 31186),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:45:15`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 106799),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T03:06:41`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 106799),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:07:10`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188143),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T03:46:55`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 188143),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T03:47:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 130031),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T04:13:21`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 130031),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T04:13:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 48098),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:16:31`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Geronimo_64', 48098),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T04:16:53`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 153663),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T05:51:02`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 185435),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T05:51:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 185435),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T05:52:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 153663),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 264894),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T05:55:00`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 277987),
      new Player(Guild.ASSASSINS_ID, 'KP', 279701),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:59:33`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 277987),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 264288),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:00:25`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 112687),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T06:05:56`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 120594),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T06:06:26`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 230413),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T06:07:13`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Seeker Of Lost', 230413),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T06:07:41`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 60110),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:00:59`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 162791),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T07:03:10`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Mercion', 162791),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T07:03:42`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 60110),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:53:51`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 62025),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:08:45`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 64711),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T08:26:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Nezil', 64711),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:26:51`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 27504),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:51:27`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 93756),
      new Player(Guild.ASSASSINS_ID, 'Regal', 339686),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:52:03`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 68290),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:57:02`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'A O S', 68290),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:58:29`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 65004),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:07:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 65004),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T10:08:11`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 63132),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T11:42:48`
    ),
  ],
  Guild.USA_ID,
  112,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_27_2020,
  Guild.ASSASSINS_ID,
  1400
);
