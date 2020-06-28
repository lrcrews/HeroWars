import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-26';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157965),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 138184),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 157965),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 66757),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 148707),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:06:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 145602),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:06:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 199873),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 138178),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:40:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 199873),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 111690),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:42:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 116024),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:59:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 103542),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:59:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318302),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 241656),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:39:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 316780),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 183552),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:40:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 98201),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:05:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 174979),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 83822),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:06:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 397759),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 242725),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:10:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 397759),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 217671),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:11:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 162355),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 92839),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:07:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 162355),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 84590),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:07:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 204470),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 107428),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:57:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 204470),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 80689),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:57:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328012),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 205094),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:09:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328012),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 177546),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:10:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 302317),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 196601),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:20:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 302317),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 170951),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:22:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 339568),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 158865),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:01:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 339568),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 164999),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:02:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 275280),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 144012),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:36:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 277659),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 211829),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:38:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367703),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 203122),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:52:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367703),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 163905),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:52:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 150722),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 97554),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:56:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 150703),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 107251),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:57:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 363749),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 160446),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:30:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 178505),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:30:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 254482),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 164833),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:30:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 161938),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:31:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 254482),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 166475),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:31:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 363749),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 188434),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:31:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 78312),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:10:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 86081),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:10:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 150476),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 88512),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:18:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 150476),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 81417),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:19:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 241705),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 254482),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:20:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 241705),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263846),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T04:21:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 242725),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367703),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T04:26:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 242725),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 367703),
      Fortification.LIGHTHOUSE_ID,
      16,
      true,
      `${warDateString}T04:27:01`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 178505),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T04:59:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 178505),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263846),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T04:59:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 205616),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 256913),
      Fortification.MAGE_ACADEMY_ID,
      12,
      false,
      `${warDateString}T05:27:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 205616),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 256913),
      Fortification.MAGE_ACADEMY_ID,
      8,
      true,
      `${warDateString}T05:27:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 218296),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T06:26:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 218296),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:27:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 177546),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T07:19:28`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 177546),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T07:20:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 158887),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T08:01:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 158887),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:02:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 153237),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T08:41:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 153237),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:42:13`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 212087),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T09:28:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 212087),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T09:30:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 203122),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      12,
      false,
      `${warDateString}T09:39:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 203122),
      new Player(Guild.ASSASSINS_ID, 'KP', 276917),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T09:40:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 183581),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T09:46:28`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 183581),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:46:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 161962),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T09:56:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 158642),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 265105),
      Fortification.LIGHTHOUSE_ID,
      5,
      true,
      `${warDateString}T09:56:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 164833),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:08:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 164833),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:08:49`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 171176),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:18:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 171176),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:18:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 197520),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:49:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 197520),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:49:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 169585),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:01:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 165253),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:03:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 144636),
      new Player(Guild.ASSASSINS_ID, 'En4', 288537),
      Fortification.LIGHTHOUSE_ID,
      5,
      true,
      `${warDateString}T11:45:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 146456),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263846),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:59:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 112841),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T12:01:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 188434),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 306533),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:05:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 188434),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263846),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T12:05:48`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 164999),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 306533),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T12:43:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 164999),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 306533),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:44:04`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  174,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_26_2020,
  Guild.ASSASSINS_ID,
  1400
);
