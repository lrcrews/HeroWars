import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-01';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 259691),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:49:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 252304),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:51:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204135),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:49:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204135),
      new Player(Guild.ROMANIA_ID, 'Adrian', 187305),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:50:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318804),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 300840),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:16:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318804),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 272434),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:17:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      new Player(Guild.ROMANIA_ID, 'Fluffy Monkey', 236746),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:54:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 155299),
      new Player(Guild.ROMANIA_ID, 'Bernde', 143533),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:33:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 155299),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 136672),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:34:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 108210),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:45:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 84308),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:46:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209706),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 189125),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:14:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'JustMe', 220504),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:33:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 223392),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:34:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.ROMANIA_ID, 'Galy', 123950),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:09:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.ROMANIA_ID, 'Thyned', 124057),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:10:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398448),
      new Player(Guild.ROMANIA_ID, 'Blondu', 376196),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:59:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328878),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 233340),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:06:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 266578),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 249683),
      Fortification.CITADEL_ID,
      14,
      false,
      `${warDateString}T07:06:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326493),
      new Player(Guild.ROMANIA_ID, 'tokyo', 210792),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:07:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 341647),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 316648),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:13:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 359684),
      new Player(Guild.ROMANIA_ID, 'hama52', 295075),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:35:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370870),
      new Player(Guild.ROMANIA_ID, 'JustMe', 303280),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:37:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 377089),
      new Player(Guild.ROMANIA_ID, 'Thyned', 246255),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:37:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 377089),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 249683),
      Fortification.CITADEL_ID,
      6,
      true,
      `${warDateString}T07:38:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278610),
      new Player(Guild.ROMANIA_ID, 'Medo', 194127),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:49:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278610),
      new Player(Guild.ROMANIA_ID, 'Bernde', 218749),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:51:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 341700),
      new Player(Guild.ROMANIA_ID, 'Antonio', 286601),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:57:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 293456),
      new Player(Guild.ROMANIA_ID, 'Adrian', 235698),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:03:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 231388),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 207764),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:52:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 231388),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 186191),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:52:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 260322),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 217978),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:53:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 260322),
      new Player(Guild.ROMANIA_ID, 'Galy', 209787),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:54:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178955),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 149132),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:01:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178955),
      new Player(Guild.ROMANIA_ID, 'Medo', 148909),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:01:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.ROMANIA_ID, 'tokyo', 115856),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:42:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 83070),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:42:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398448),
      new Player(Guild.ROMANIA_ID, 'Fluffy Monkey', 277338),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:44:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:47:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 376196),
      new Player(Guild.ASSASSINS_ID, 'Regal', 341606),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:55:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 295309),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 308762),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:02:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:14:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T03:16:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 286601),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256130),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:23:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 286601),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 266203),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:23:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 259691),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:43:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 124509),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T04:05:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 143533),
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T04:13:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 140210),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154937),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T04:14:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 149132),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T04:19:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 149955),
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:22:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 252304),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:27:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 252304),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 258325),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:28:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 307532),
      new Player(Guild.ASSASSINS_ID, 'KP', 278346),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:33:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 307532),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 264422),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:33:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 149955),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T05:39:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 84881),
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T05:42:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 124509),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154937),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T05:45:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 187908),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204135),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T05:48:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 187908),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 200410),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:50:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 189125),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 211365),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:41:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 189125),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209706),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:41:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 136672),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 155299),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T07:04:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 136672),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T07:04:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Fluffy Monkey', 236746),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:57:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Fluffy Monkey', 236746),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 247782),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T08:58:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 149132),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178955),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T09:05:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      true,
      `${warDateString}T09:07:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 84881),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 247782),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T09:29:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 83070),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      2,
      false,
      `${warDateString}T10:02:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 83070),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T10:03:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 115856),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178955),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T10:46:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 115856),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204135),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T10:47:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 108210),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 155299),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T11:54:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 108210),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T11:55:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 246740),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 239469),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:48:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 246740),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 235718),
      Fortification.CITADEL_ID,
      9,
      false,
      `${warDateString}T12:49:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 300890),
      new Player(Guild.ASSASSINS_ID, 'HERO', 256720),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:50:51`
    ),
  ],
  Guild.ROMANIA_ID,
  949,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_27_2020,
  Guild.ASSASSINS_ID,
  1340
);
