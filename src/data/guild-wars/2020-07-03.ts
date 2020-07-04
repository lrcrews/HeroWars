import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-03';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 140629),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 146073),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 157350),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:25:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 346322),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 216109),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:25:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 70695),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:45:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 139303),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:46:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 157010),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 118845),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:27:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 157010),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 78312),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:27:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 150635),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 76982),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:23:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 150635),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 117269),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:24:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398887),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 243746),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:29:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398887),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 214591),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:30:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204749),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 106351),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:06:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 210864),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 96281),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:14:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 210864),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 95542),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:14:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 310584),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 224652),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:34:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 310584),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 203666),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:34:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318941),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 246454),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:39:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318941),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 180009),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:40:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 329229),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 176624),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:45:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326844),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 163790),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:46:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 180160),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 113473),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:17:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 180160),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 113332),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:17:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 204749),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 81847),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:48:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 377313),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 189534),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:11:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 377313),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 179183),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:11:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 354974),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 147357),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:31:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 354974),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 169011),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:32:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 282234),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 181890),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:33:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 280351),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 173911),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:35:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 405532),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 165763),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:06:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 405532),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 161710),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:06:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 155399),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 85563),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:24:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 155399),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 91400),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:25:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152188),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 89822),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:47:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152188),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 82967),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:48:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 161340),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 60029),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:14:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 294773),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 189593),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:14:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 298017),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 182795),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:40:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 298017),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 168990),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:40:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 217999),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 266683),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:30:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 219281),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T00:32:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 224652),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T00:34:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 224652),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 264638),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T00:35:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 246770),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 310475),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T01:32:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 246770),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T01:33:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 181890),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T03:42:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 181890),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T03:43:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 243746),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 264638),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:42:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 243746),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 370153),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T04:43:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 158517),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T05:54:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 158517),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T05:55:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 169011),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T07:09:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 169011),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T07:10:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 182795),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T07:48:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 180064),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267837),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T07:49:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 180064),
      new Player(Guild.ASSASSINS_ID, 'En4', 294773),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T07:50:04`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 147357),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T07:58:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 147357),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T07:59:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 163905),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T09:14:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 163905),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T09:15:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 179923),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T09:51:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 179923),
      new Player(Guild.ASSASSINS_ID, 'KP', 279845),
      Fortification.BARRACKS_ID,
      5,
      true,
      `${warDateString}T09:52:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 204005),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:06:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 204005),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:06:46`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 79024),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:14:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 79024),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T10:14:53`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 165763),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:42:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 165763),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T10:42:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 189762),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267837),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T11:06:54`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 189762),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267837),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T11:07:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 216488),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:45:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 216488),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T11:46:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 168507),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:58:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 118845),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T12:02:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 189593),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 256583),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:07:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 189593),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:07:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 176771),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:24:50`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 176771),
      new Player(Guild.ASSASSINS_ID, 'Regal', 344928),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:25:22`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  113,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_27_2020,
  Guild.ASSASSINS_ID,
  1400
);
