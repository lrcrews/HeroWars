import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-17';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 147923),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 143630),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 135940),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 309220),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 207074),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:28:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 290696),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 175272),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:23:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 65821),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:53:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 214518),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 183981),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:55:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317388),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 180363),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:49:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317388),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 161076),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:50:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 171028),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 136865),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:25:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 171028),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 107910),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:25:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 251648),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 157703),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:15:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 251648),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 174020),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:16:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184921),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 96656),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:25:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 184921),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 82033),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:26:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 377819),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 234339),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:33:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 334923),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 238466),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:43:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 334923),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 209031),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:47:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 377819),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 193789),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:48:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153633),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 110022),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:54:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153633),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 101453),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:54:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 89856),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:13:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 87662),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:13:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 362544),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174978),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:14:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 362544),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 186692),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:14:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 329329),
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 200353),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:34:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 329329),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 166595),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:36:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 152300),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:38:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 140961),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:39:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320971),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 167356),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:43:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 320971),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 158794),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:43:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 290696),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 153594),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:32:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 147775),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 91842),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:32:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 147775),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 80279),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:33:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147205),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 108126),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:35:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147186),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 106199),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:35:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 78312),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:32:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 84171),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:33:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194248),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 82127),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:36:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194248),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 78274),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:36:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 238466),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 251648),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:31:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 238466),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 251737),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:31:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174978),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T04:05:30`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 174978),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T04:05:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 207333),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      10,
      false,
      `${warDateString}T04:41:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 207333),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T04:42:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 234804),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T04:55:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 209031),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T04:55:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 234804),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T04:56:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 209031),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T04:58:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143393),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T06:25:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 143393),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:27:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 166777),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T06:29:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 175272),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T06:29:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 159997),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T06:45:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 159997),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:46:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 152625),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302881),
      Fortification.MAGE_ACADEMY_ID,
      12,
      true,
      `${warDateString}T08:55:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 152625),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:56:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 161076),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:53:49`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RoamingLynx', 161076),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:55:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 194265),
      new Player(Guild.ASSASSINS_ID, 'KP', 267232),
      Fortification.BARRACKS_ID,
      7,
      true,
      `${warDateString}T09:56:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 194265),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T09:57:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 186986),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:06:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 186986),
      new Player(Guild.ASSASSINS_ID, 'Regal', 309220),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T10:07:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 159185),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:21:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 159185),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:21:43`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 195190),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:08:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Sheevara', 200573),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:08:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 141206),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:12:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 136870),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:13:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 167088),
      new Player(Guild.ASSASSINS_ID, 'Regal', 309220),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:37:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 167088),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:37:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 107910),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T11:55:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 107910),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T11:56:54`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 180505),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T12:03:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 180505),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259351),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:03:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 174020),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:15:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 174020),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259299),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:15:29`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  142,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_25_2020,
  Guild.ASSASSINS_ID,
  1400
);
