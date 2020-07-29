import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-17';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:01:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 254932),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:21:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:45:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 141000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:46:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      new Player(Guild.ROMANIA_ID, 'Adrian', 201129),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:15:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      new Player(Guild.ROMANIA_ID, 'Antonio', 227201),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:27:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236743),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 200531),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:49:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189740),
      new Player(Guild.ROMANIA_ID, 'Bernde', 146639),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:08:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189740),
      new Player(Guild.ROMANIA_ID, 'tokyo', 122454),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:08:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315171),
      new Player(Guild.ROMANIA_ID, 'Bernde', 230095),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:29:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165784),
      new Player(Guild.ROMANIA_ID, 'Galy', 131638),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:49:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165784),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110288),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:49:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315171),
      new Player(Guild.ROMANIA_ID, 'Medo', 200341),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:04:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 194000),
      new Player(Guild.ROMANIA_ID, 'Medo', 155213),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:09:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 194000),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 152640),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:10:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 240719),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:33:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'JustMe', 233912),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 368153),
      new Player(Guild.ROMANIA_ID, 'Blondu', 379149),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:19:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 362819),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 332311),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:25:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 337956),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 243639),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:29:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 337956),
      new Player(Guild.ROMANIA_ID, 'Thyned', 266723),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:29:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 291783),
      new Player(Guild.ROMANIA_ID, 'tokyo', 221879),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:30:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 291783),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 221756),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:31:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 322667),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 293594),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:56:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 322667),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 278814),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:57:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 162733),
      new Player(Guild.ROMANIA_ID, 'Gaby', 112537),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:59:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 162733),
      new Player(Guild.ROMANIA_ID, 'Bishop', 108410),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:01:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 274360),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 213768),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:19:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 282899),
      new Player(Guild.ROMANIA_ID, 'Gaby', 204317),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:52:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 363041),
      new Player(Guild.ROMANIA_ID, 'hama52', 310043),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:37:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 374061),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 319803),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:18:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 382934),
      new Player(Guild.ROMANIA_ID, 'Antonio', 297883),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:19:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 410896),
      new Player(Guild.ROMANIA_ID, 'JustMe', 325410),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:27:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 166378),
      new Player(Guild.ROMANIA_ID, 'Thyned', 130409),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:30:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 410896),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 222078),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:31:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 287615),
      new Player(Guild.ROMANIA_ID, 'Adrian', 245425),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:18:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:37:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:39:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 310043),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315171),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:31:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 310043),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 282423),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:32:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 329317),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 285111),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T05:29:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T07:20:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268913),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T07:22:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 298588),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 274360),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T07:59:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 108934),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:54:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 132187),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T09:26:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 132187),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      Fortification.BASTION_OF_ICE_ID,
      9,
      false,
      `${warDateString}T09:30:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 200531),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183499),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:30:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 149768),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 194000),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T09:31:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 200531),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212956),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:32:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 240719),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:33:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 240719),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T09:34:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 149768),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      Fortification.BASTION_OF_ICE_ID,
      10,
      false,
      `${warDateString}T09:34:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 122454),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      3,
      false,
      `${warDateString}T09:37:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 122454),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T09:38:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 112537),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 194000),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T09:39:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 254932),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 261641),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:39:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 254932),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 265578),
      Fortification.BASTION_OF_FIRE_ID,
      13,
      false,
      `${warDateString}T09:40:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 141000),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      10,
      false,
      `${warDateString}T10:00:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 141000),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      7,
      false,
      `${warDateString}T10:00:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 152640),
      new Player(Guild.ASSASSINS_ID, 'KP', 172559),
      Fortification.GATES_OF_NATURE_ID,
      14,
      false,
      `${warDateString}T10:14:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 112537),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T10:14:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 152640),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 166398),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:15:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 227201),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236743),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:44:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 155213),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165784),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T11:11:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 155213),
      new Player(Guild.ASSASSINS_ID, 'elo', 162733),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:11:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 201129),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 226481),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:14:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 201129),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221499),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:15:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 233912),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 265578),
      Fortification.BASTION_OF_FIRE_ID,
      7,
      true,
      `${warDateString}T12:13:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 108934),
      new Player(Guild.ASSASSINS_ID, 'KP', 172559),
      Fortification.GATES_OF_NATURE_ID,
      6,
      true,
      `${warDateString}T12:19:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 267725),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 243530),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:41:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 267725),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 246579),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:42:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110288),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165784),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T12:53:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110288),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T12:53:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 379149),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 285111),
      Fortification.BARRACKS_ID,
      17,
      true,
      `${warDateString}T12:55:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 379149),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 274360),
      Fortification.BARRACKS_ID,
      18,
      true,
      `${warDateString}T12:56:24`
    ),
  ],
  Guild.ROMANIA_ID,
  900,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_29_2020,
  Guild.ASSASSINS_ID,
  1320
);
