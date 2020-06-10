import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-09';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 136306),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 143067),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 164488),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 128545),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:01:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 164488),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 60187),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:01:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 145224),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 107978),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:09:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 145224),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 97998),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:09:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 310947),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 195718),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:13:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 310947),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 190465),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:14:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 85281),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:15:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 83351),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:15:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 170159),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:23:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 157288),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:24:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 280573),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 178728),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T01:26:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 277412),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174568),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T01:27:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 321759),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171608),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:07:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 321759),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 172724),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:08:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 389500),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 232145),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:43:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 389500),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 226114),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:45:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184366),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 88918),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:46:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184366),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 93345),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:47:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 128373),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 78312),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:30:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 128373),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 82685),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:30:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 328499),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 203379),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:09:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 328499),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 181264),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:10:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 102536),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:29:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 94780),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:29:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 351377),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 155604),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:57:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 351377),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 157560),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:58:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149837),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 71169),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:34:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149837),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 78846),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:35:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301273),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 151375),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:18:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301273),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 137927),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:19:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 165890),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143520),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:28:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 311287),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 149881),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:33:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 136419),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:16:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 239703),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 169258),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:17:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144639),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 76575),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:29:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 258704),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 151946),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:30:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 83313),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:48:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 77405),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:49:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 226400),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238724),
      Fortification.MAGE_ACADEMY_ID,
      9,
      false,
      `${warDateString}T01:52:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 226400),
      new Player(Guild.ASSASSINS_ID, 'KP', 259023),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T01:53:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 180773),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238724),
      Fortification.MAGE_ACADEMY_ID,
      11,
      true,
      `${warDateString}T03:00:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174568),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 242476),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:01:28`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174568),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 242476),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:01:46`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 232196),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 242476),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:34:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 232196),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T03:34:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 204440),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T04:09:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 204440),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254768),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T04:11:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 148459),
      new Player(Guild.ASSASSINS_ID, 'KP', 259023),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:15:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 145850),
      new Player(Guild.ASSASSINS_ID, 'KP', 259023),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T06:15:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143520),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:19:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 157840),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T07:38:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 157840),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T07:38:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143532),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:01:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 195990),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T08:17:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 195990),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T08:21:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 180881),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T08:28:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 170213),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:49:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 170213),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254768),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:49:30`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 151946),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:57:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 190729),
      new Player(Guild.ASSASSINS_ID, 'KP', 259023),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:59:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 190729),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254768),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:00:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 155604),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:22:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 155604),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301235),
      Fortification.MAGE_ACADEMY_ID,
      6,
      true,
      `${warDateString}T10:22:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 151946),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:55:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 151631),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:24:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 151631),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:26:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 179176),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T11:39:43`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 179176),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:39:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171608),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 252307),
      Fortification.LIGHTHOUSE_ID,
      9,
      true,
      `${warDateString}T11:53:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 171608),
      new Player(Guild.ASSASSINS_ID, 'KP', 259023),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:54:40`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 172724),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254768),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:57:46`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 172724),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254768),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:58:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 135328),
      new Player(Guild.ASSASSINS_ID, 'Regal', 286234),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:01:50`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 82685),
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T12:03:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 102536),
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T12:35:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 102536),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T12:36:13`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  135,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_24_2020,
  Guild.ASSASSINS_ID,
  1400
);
