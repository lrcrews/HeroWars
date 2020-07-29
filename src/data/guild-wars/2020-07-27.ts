import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-27';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256908),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:16:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:36:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:36:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:44:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.ROMANIA_ID, 'Adrian', 201724),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:38:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153646),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:38:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 186509),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:02:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 186509),
      new Player(Guild.ROMANIA_ID, 'Thyned', 136448),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:02:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:57:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.ROMANIA_ID, 'Gaby', 116880),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:58:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.ROMANIA_ID, 'Galy', 135107),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 111921),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      new Player(Guild.ROMANIA_ID, 'Kai', 144125),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:38:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      new Player(Guild.ROMANIA_ID, 'tokyo', 126358),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:39:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 194427),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:08:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      new Player(Guild.ROMANIA_ID, 'Bishop', 111577),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:09:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 229742),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:01:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 318691),
      new Player(Guild.ROMANIA_ID, 'Gaby', 211677),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:02:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 295720),
      new Player(Guild.ROMANIA_ID, 'Kai', 258712),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:12:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 295720),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 223443),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:14:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 375334),
      new Player(Guild.ROMANIA_ID, 'Blondu', 380229),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:43:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 369073),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 335660),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:51:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 278657),
      new Player(Guild.ROMANIA_ID, 'tokyo', 231056),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:18:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 278657),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 228177),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:19:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340834),
      new Player(Guild.ROMANIA_ID, 'Thyned', 273294),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:25:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340834),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 247077),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:25:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 369073),
      new Player(Guild.ROMANIA_ID, 'hama52', 321138),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:29:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'TheUnkown', 242657),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:59:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'JustMe', 235740),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:00:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327073),
      new Player(Guild.ROMANIA_ID, 'TheUnkown', 301485),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:19:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327073),
      new Player(Guild.ROMANIA_ID, 'Galy', 232872),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:20:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386486),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 331545),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:15:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386486),
      new Player(Guild.ROMANIA_ID, 'Antonio', 305651),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:15:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 240609),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:46:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 291588),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 214299),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:46:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 418213),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 289316),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:01:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 287857),
      new Player(Guild.ROMANIA_ID, 'Bishop', 245261),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:02:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 287857),
      new Player(Guild.ROMANIA_ID, 'Adrian', 248929),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:03:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 320672),
      new Player(Guild.ROMANIA_ID, 'JustMe', 293211),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:05:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 418213),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 276046),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:06:11`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256908),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:39:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 321138),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 318624),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:30:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:38:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256908),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T03:23:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 135107),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T03:43:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 135107),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T03:44:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268244),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T03:51:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 264941),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:52:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 235740),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:17:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 293211),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 375774),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:19:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 194427),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:19:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 321138),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 276844),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:20:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 194427),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T04:20:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 201724),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212956),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:24:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 201724),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:27:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 186509),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:41:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      new Player(Guild.ASSASSINS_ID, 'KP', 177111),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:42:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 111577),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 199564),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T05:18:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 138565),
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T05:38:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 141397),
      new Player(Guild.ASSASSINS_ID, 'elo', 165814),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T05:39:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153646),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T05:40:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153646),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T05:40:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 126358),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268244),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T05:46:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 273788),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248686),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:54:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 273788),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 274716),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:54:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 380229),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340834),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:31:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 242657),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:46:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 242657),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 240609),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T06:48:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 169570),
      Fortification.SPRING_OF_ELEMENTS_ID,
      10,
      false,
      `${warDateString}T07:40:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 169570),
      Fortification.SPRING_OF_ELEMENTS_ID,
      10,
      true,
      `${warDateString}T07:40:51`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 111577),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 240609),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T07:41:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 229742),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 224648),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:53:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 305792),
      new Player(Guild.ASSASSINS_ID, 'HERO', 279655),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:53:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 231287),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 256534),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T09:05:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 212198),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 256534),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T09:15:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 212198),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 256534),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T09:16:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:00:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 214299),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 256534),
      Fortification.CITADEL_ID,
      8,
      true,
      `${warDateString}T11:25:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 209349),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 285830),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T11:27:07`
    ),
  ],
  Guild.ROMANIA_ID,
  964,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_31_2020,
  Guild.ASSASSINS_ID,
  1400
);
