import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-28';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.USA_ID, 'Specter', 197955),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.USA_ID, 'Geronimo_64', 55446),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 236775),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:22:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.USA_ID, 'Taylord', 218797),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:22:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      new Player(Guild.USA_ID, 'MJR6969', 135430),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:02:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      new Player(Guild.USA_ID, 'Nezil', 70952),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:03:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 372190),
      new Player(Guild.USA_ID, 'Seeker Of Lost', 241865),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:06:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.USA_ID, 'One', 89309),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T01:12:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.USA_ID, 'qqstar168', 37563),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T01:13:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.USA_ID, 'Netbar', 61100),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:21:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:21:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320223),
      new Player(Guild.USA_ID, 'Danman', 165165),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:14:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320223),
      new Player(Guild.USA_ID, 'Warby', 166683),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:14:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 418213),
      new Player(Guild.USA_ID, 'Taylord', 302037),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:17:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 294899),
      new Player(Guild.USA_ID, 'Specter', 266534),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:18:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:23:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.USA_ID, 'Meztilabar', 74580),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:23:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 289014),
      new Player(Guild.USA_ID, 'Meztilabar', 181832),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:25:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340959),
      new Player(Guild.USA_ID, 'Boika Mt', 167658),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:34:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340959),
      new Player(Guild.USA_ID, 'NanNo', 139005),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:35:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297096),
      new Player(Guild.USA_ID, 'Dan1 0', 206752),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:36:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297096),
      new Player(Guild.USA_ID, 'A O S', 168783),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:36:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.USA_ID, 'Mercion', 206856),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:41:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.USA_ID, 'A O S', 74552),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:42:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 373118),
      new Player(Guild.USA_ID, 'Mercion', 232754),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:43:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 296147),
      new Player(Guild.USA_ID, 'Netbar', 115026),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:31:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 296147),
      new Player(Guild.USA_ID, 'Isoko', 162526),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:33:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 266025),
      new Player(Guild.USA_ID, 'mirkwood12345', 115181),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:30:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 170134),
      new Player(Guild.USA_ID, 'Warby', 69630),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:58:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 170134),
      new Player(Guild.USA_ID, 'Danman', 57674),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:59:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      new Player(Guild.USA_ID, 'mirkwood777', 65668),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:42:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      new Player(Guild.USA_ID, 'Isoko', 54296),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:42:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'NanNo', 35515),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:53:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.USA_ID, 'mirkwood12345', 39747),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:54:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386486),
      new Player(Guild.USA_ID, 'One', 201305),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:13:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386486),
      new Player(Guild.USA_ID, 'mirkwood777', 199031),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:13:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 291623),
      new Player(Guild.USA_ID, 'Geronimo_64', 133422),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:32:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 291623),
      new Player(Guild.USA_ID, 'MJR6969', 219122),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:33:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327545),
      new Player(Guild.USA_ID, 'Nezil', 168252),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:51:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327545),
      new Player(Guild.USA_ID, 'qqstar168', 156269),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:52:08`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 200510),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T02:08:07`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'One', 201305),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T02:08:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 115463),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:27:23`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Netbar', 115463),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:27:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 199304),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T04:30:54`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood777', 199304),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248817),
      Fortification.MAGE_ACADEMY_ID,
      3,
      true,
      `${warDateString}T04:31:21`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 197345),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:03:49`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Specter', 197345),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T06:04:15`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T06:31:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Dan1 0', 138457),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T06:31:50`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 218797),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T06:40:42`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Taylord', 218797),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T06:41:07`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 219322),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 281309),
      Fortification.BARRACKS_ID,
      10,
      false,
      `${warDateString}T07:42:47`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'MJR6969', 219322),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 281309),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T07:43:16`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:10:14`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Boika Mt', 41650),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:10:32`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 39747),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:21:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'mirkwood12345', 116779),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 281309),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T10:22:03`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Warby', 69630),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:42:44`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 180023),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 281309),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:56:09`
    ),
    new Battle(
      new Player(Guild.USA_ID, 'Meztilabar', 173933),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 281309),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T12:58:13`
    ),
  ],
  Guild.USA_ID,
  108,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_31_2020,
  Guild.ASSASSINS_ID,
  1400
);
