import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-26';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 151872),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 130377),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:34:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 151872),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 125804),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:35:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 168711),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:42:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 160585),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:43:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 292238),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 157028),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:15:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 292238),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 142602),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:14:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 104156),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:04:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 218958),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 120664),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:08:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 218958),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 88730),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:21:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 168434),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 82180),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:41:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 168434),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 81649),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:42:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 85340),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:51:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 351934),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 212300),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:07:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 351934),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 180899),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:07:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 150534),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 76386),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:33:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 150534),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 59350),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:33:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 380933),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 224122),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:36:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 380933),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 191205),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:36:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 320899),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 173102),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:46:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 320899),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 162559),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:46:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 127319),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 77890),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:09:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 127319),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 69894),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:10:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 294584),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 154669),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:12:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 294584),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 133359),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:12:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 140501),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 82778),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:39:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136274),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 81222),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:40:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 312254),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 147397),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:40:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 312254),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 148207),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:41:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 161291),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:45:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      new Player(Guild.THE_ACADEMY_ID, 'VaSyL ShV', 136112),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:46:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 75202),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:12:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.THE_ACADEMY_ID, 'VaSyL ShV', 56807),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:12:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 75728),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:22:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 70269),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:22:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 131297),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 55694),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:27:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 131297),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 56222),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:27:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 234606),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 142485),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:35:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 234606),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 146712),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:36:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 249233),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 135457),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:46:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 249233),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 130581),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:46:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 224461),
      new Player(Guild.ASSASSINS_ID, 'KP', 229702),
      Fortification.MAGE_ACADEMY_ID,
      12,
      false,
      `${warDateString}T05:33:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 224461),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      12,
      false,
      `${warDateString}T05:34:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 173151),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238484),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T05:59:13`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 173151),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238484),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T05:59:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 213684),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238484),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:07:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 213684),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238484),
      Fortification.LIGHTHOUSE_ID,
      11,
      false,
      `${warDateString}T06:08:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 191238),
      new Player(Guild.ASSASSINS_ID, 'KP', 229702),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T06:21:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 191238),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T06:22:90`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 157088),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:29:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 157088),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:31:04`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 130798),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:49:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 128869),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T06:50:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 142485),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 225875),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T08:14:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 154807),
      new Player(Guild.ASSASSINS_ID, 'KP', 229702),
      Fortification.MAGE_ACADEMY_ID,
      8,
      true,
      `${warDateString}T08:19:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 139634),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 293368),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:23:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 139634),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 293368),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T08:23:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 142485),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T08:27:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 160585),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 245978),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T08:39:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 160585),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T08:39:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 154807),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T08:59:01`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 147600),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:14:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 147600),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T09:14:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 148207),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:08:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 148207),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T10:09:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 161291),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:25:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 161291),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:25:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 163790),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:00:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 163790),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T11:00:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 168711),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:06:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 168711),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:06:53`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 133359),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:14:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 133863),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:25:49`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VaSyL ShV', 129055),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:05:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VaSyL ShV', 129055),
      new Player(Guild.ASSASSINS_ID, 'En4', 260377),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T12:06:43`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 146673),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:11:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 146269),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254929),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:12:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 183414),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T12:42:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 183414),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 252759),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T12:43:19`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  93,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_22_2020,
  Guild.ASSASSINS_ID,
  1400
);
