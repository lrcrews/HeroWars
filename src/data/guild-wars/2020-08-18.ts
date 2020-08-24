import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-18';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 262320),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:40:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:41:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 262875),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:47:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.ROMANIA_ID, 'JustMe', 251715),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:48:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241262),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 215628),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:59:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241262),
      new Player(Guild.ROMANIA_ID, 'Specter', 214595),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:00:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 248488),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:57:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 236744),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:57:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.ROMANIA_ID, 'Galy', 143243),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:05:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 130288),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:06:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 227873),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:15:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 315931),
      new Player(Guild.ROMANIA_ID, 'Gaby', 216814),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:16:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 206331),
      new Player(Guild.ROMANIA_ID, 'Thyned', 153435),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:46:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 206331),
      new Player(Guild.ROMANIA_ID, 'Bishop', 127698),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:47:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 397536),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 360524),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:28:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 230593),
      new Player(Guild.ROMANIA_ID, 'Adrian', 210946),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:55:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 230593),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 170861),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:56:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      new Player(Guild.ROMANIA_ID, 'Blondu', 390317),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:19:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204251),
      new Player(Guild.ROMANIA_ID, 'Kai', 157463),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:24:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204251),
      new Player(Guild.ROMANIA_ID, 'tokyo', 138113),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:24:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 315898),
      new Player(Guild.ROMANIA_ID, 'Specter', 281901),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:33:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 315898),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 232823),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:33:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311338),
      new Player(Guild.ROMANIA_ID, 'Kai', 286775),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:21:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311338),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 290465),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:21:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 363509),
      new Player(Guild.ROMANIA_ID, 'Thyned', 283501),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:23:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 363509),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 261924),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:23:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 320369),
      new Player(Guild.ROMANIA_ID, 'Adrian', 262155),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:28:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 397593),
      new Player(Guild.ROMANIA_ID, 'hama52', 334509),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:29:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 317666),
      new Player(Guild.ROMANIA_ID, 'Bishop', 265806),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:36:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.ROMANIA_ID, 'BEAR', 341933),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:09:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.ROMANIA_ID, 'Antonio', 301860),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:09:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 288126),
      new Player(Guild.ROMANIA_ID, 'tokyo', 241890),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:47:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 288126),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 249885),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:48:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 424329),
      new Player(Guild.ROMANIA_ID, 'JustMe', 336020),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:01:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      new Player(Guild.ROMANIA_ID, 'hama52', 195213),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:28:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      new Player(Guild.ROMANIA_ID, 'Gaby', 129867),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:29:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 424329),
      new Player(Guild.ROMANIA_ID, 'Galy', 245229),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:58:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:08:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 262875),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 262875),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:33:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 143243),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T00:40:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 211550),
      new Player(Guild.ASSASSINS_ID, 'HERO', 210758),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:56:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 215628),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 216627),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:57:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 211550),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T00:57:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 215628),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 229964),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:58:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 251715),
      new Player(Guild.ASSASSINS_ID, 'Gom', 262320),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:20:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 251715),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:21:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 302243),
      new Player(Guild.ASSASSINS_ID, 'KP', 317059),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:32:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 302243),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279443),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:33:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 248488),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249707),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T02:08:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 248488),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T02:11:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 287136),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 294778),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:59:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 227873),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 239963),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:43:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 227873),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241262),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:44:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      12,
      false,
      `${warDateString}T04:05:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T04:06:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Specter', 214595),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 206331),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:22:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Specter', 214595),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 204251),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:23:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 334509),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 335940),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:44:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 334509),
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:45:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 143243),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T05:09:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 390317),
      new Player(Guild.ASSASSINS_ID, 'En4', 335115),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:11:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 130892),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 249707),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T06:42:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 130892),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T06:43:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 138113),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T07:05:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 283501),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 264643),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:52:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 390317),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 296447),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:59:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 170861),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:19:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 170861),
      new Player(Guild.ASSASSINS_ID, 'KP', 201693),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T08:19:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 130288),
      new Player(Guild.ASSASSINS_ID, 'KP', 201693),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T08:28:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 130288),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T08:29:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 156874),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      6,
      false,
      `${warDateString}T10:47:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 127698),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T10:48:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 242090),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 273331),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T10:57:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 266267),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 273331),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T11:04:01`
    ),
  ],
  Guild.ROMANIA_ID,
  1007,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_34_2020,
  Guild.ASSASSINS_ID,
  1320
);
