import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-24';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 183938),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 150171),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:13:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 152345),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 71859),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 141008),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:58:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 152497),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:59:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 197297),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 134903),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:06:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 197297),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 94719),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:08:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 366311),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 265578),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:34:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 269643),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 199946),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:40:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 100290),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:51:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 88231),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:51:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 134998),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:30:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 115581),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:31:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417757),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 253392),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:21:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417757),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 240084),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:33:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340131),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 193807),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:10:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 274955),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 219501),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:12:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 317504),
      new Player(Guild.THE_ACADEMY_ID, 'tuzia', 189260),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:08:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 317504),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 175990),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:08:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 366311),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 244168),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:30:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 103445),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:39:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 102833),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:40:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 302217),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 206990),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:41:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 302217),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 201279),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:41:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164659),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 83072),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:31:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164659),
      new Player(Guild.THE_ACADEMY_ID, 'tuzia', 63423),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:32:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 174351),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 100297),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:13:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 174351),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 95878),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:13:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 288537),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 157667),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:17:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 288537),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 188289),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:18:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 170602),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:34:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 238907),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:35:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 297581),
      new Player(Guild.THE_ACADEMY_ID, 'Hire Shumaru', 186565),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:21:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 295195),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 185695),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:22:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 264020),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 178037),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:47:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 169066),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 89682),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:31:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 169066),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 64583),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:32:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 326278),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 226700),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:46:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 326278),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 200383),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:46:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 244168),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245683),
      Fortification.MAGE_ACADEMY_ID,
      14,
      false,
      `${warDateString}T00:24:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 244168),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245683),
      Fortification.MAGE_ACADEMY_ID,
      6,
      true,
      `${warDateString}T00:24:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 240084),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 271506),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T00:25:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 240084),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 271506),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T00:26:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 266202),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 317364),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T01:26:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 266202),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T01:27:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiru Shumaru', 186565),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T02:34:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiru Shumaru', 186565),
      new Player(Guild.ASSASSINS_ID, 'KP', 295105),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T02:35:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 253392),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 317364),
      Fortification.MAGE_ACADEMY_ID,
      15,
      true,
      `${warDateString}T04:07:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 176832),
      new Player(Guild.ASSASSINS_ID, 'KP', 295105),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T05:00:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 176832),
      new Player(Guild.ASSASSINS_ID, 'KP', 295105),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T05:01:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 199946),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 271506),
      Fortification.MAGE_ACADEMY_ID,
      13,
      true,
      `${warDateString}T05:04:50`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 199946),
      new Player(Guild.ASSASSINS_ID, 'KP', 295105),
      Fortification.LIGHTHOUSE_ID,
      13,
      true,
      `${warDateString}T05:06:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 239066),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 284782),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:49:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 239066),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 292028),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:51:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 226700),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 278560),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T06:56:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 226700),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 278560),
      Fortification.BARRACKS_ID,
      13,
      true,
      `${warDateString}T06:57:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 178086),
      new Player(Guild.ASSASSINS_ID, 'En4', 318293),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T07:31:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 185695),
      new Player(Guild.ASSASSINS_ID, 'En4', 318293),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T07:32:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 194524),
      new Player(Guild.ASSASSINS_ID, 'En4', 318293),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T07:48:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 194524),
      new Player(Guild.ASSASSINS_ID, 'En4', 318293),
      Fortification.LIGHTHOUSE_ID,
      10,
      true,
      `${warDateString}T07:48:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 158812),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:08:35`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 165464),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:10:46`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 96873),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T08:24:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 96873),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T08:24:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 176050),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:29:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 176050),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:30:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 220671),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:35:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 220671),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:28:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 200467),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:55:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 200467),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:56:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'tuzia', 189348),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:58:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'tuzia', 189348),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:58:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 203025),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:03:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 203025),
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:04:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 141008),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T10:58:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 141008),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T10:59:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 134998),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T12:05:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 134998),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T12:05:38`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  258,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_30_2020,
  Guild.ASSASSINS_ID,
  1400
);
