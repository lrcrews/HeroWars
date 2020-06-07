import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-05';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 258334),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 141949),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 258334),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 134442),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 184332),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 126718),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:24:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 184332),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 58456),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:24:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 275807),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 193218),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:57:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 275807),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 161962),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:57:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 366761),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 224695),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:03:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217798),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143412),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:04:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 142126),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 109566),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:28:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 142126),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 93085),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:28:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303583),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171199),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:30:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303583),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 169984),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:30:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 159085),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 77398),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:53:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 159085),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 93785),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:53:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 143004),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 101884),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:54:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 143004),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 95945),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:55:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 367684),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 230177),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:58:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 367684),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 201342),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:59:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 82624),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:54:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 80842),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:54:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 250229),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 171477),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:55:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 250229),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 151573),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:56:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 147666),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 83754),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:59:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 147666),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 81083),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:59:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174281),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:12:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 177388),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:12:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 308623),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 155716),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:59:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 308623),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 169238),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:59:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 300466),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 148131),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:48:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 300466),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 136353),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:48:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 276410),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 185380),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:08:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 183819),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 149254),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:09:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 139591),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 84961),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:29:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 139591),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 76272),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:29:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348267),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 153978),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:53:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348267),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 146995),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:53:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145017),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 78312),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:10:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145017),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 77308),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:10:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 127072),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 62030),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:00:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 127072),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 73403),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:00:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 230177),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 238534),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:19:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 230177),
      new Player(Guild.ASSASSINS_ID, 'elo', 225173),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:19:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 224703),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      7,
      false,
      `${warDateString}T04:46:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 224703),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T04:47:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 201411),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 202156),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:04:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 148131),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T05:07:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 161962),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:08:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 148131),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:09:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174474),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 218583),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T05:27:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174474),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T05:28:41`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 149525),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:49:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 149525),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:50:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143412),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:58:28`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 161962),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T06:34:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 177913),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235883),
      Fortification.LIGHTHOUSE_ID,
      2,
      true,
      `${warDateString}T06:57:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 172060),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 218583),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T07:32:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 172060),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 218583),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T07:33:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 177913),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 218583),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T07:58:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 201411),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 224243),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:23:41`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 194027),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T08:29:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 194027),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T08:30:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 155786),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 218583),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T08:38:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 155786),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:39:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 151859),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T09:10:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 151859),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T09:11:35`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 170094),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227749),
      Fortification.BARRACKS_ID,
      4,
      true,
      `${warDateString}T09:13:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 170094),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:14:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 185540),
      new Player(Guild.ASSASSINS_ID, 'KP', 252309),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:35:48`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 185540),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:39:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143412),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:54:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 154826),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T12:02:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 154826),
      new Player(Guild.ASSASSINS_ID, 'KP', 252309),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:03:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 134006),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T12:05:35`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 134006),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T12:06:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171199),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:35:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171199),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T12:35:50`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 147728),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 220877),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:50:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 147728),
      new Player(Guild.ASSASSINS_ID, 'KP', 252309),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:51:30`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  231,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_23_2020,
  Guild.ASSASSINS_ID,
  1400
);
