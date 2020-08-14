import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-12';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 179619),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:26:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 168869),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:27:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 166492),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:56:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 60842),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:56:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 133204),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:12:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 78720),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:13:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 392281),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 290476),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:25:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 199928),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 72872),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:50:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 199928),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 47743),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:50:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 129281),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:04:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 84208),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:05:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 366536),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 200717),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:08:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 366536),
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 194795),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:09:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 423184),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 270576),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:35:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 335476),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 183195),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:39:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 335476),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 186165),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:39:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.COFFEE_TIME_ID, 'Scof14', 87986),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:48:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 66429),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:48:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309816),
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 169814),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:06:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309816),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 154391),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:06:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 79932),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:28:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 181667),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:28:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 332399),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 244192),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:55:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 332399),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 218883),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:56:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 179007),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 136288),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:18:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 308186),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 112883),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:40:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 308186),
      new Player(Guild.COFFEE_TIME_ID, 'Scof14', 190757),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:40:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 86250),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:43:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.COFFEE_TIME_ID, '2020', 59597),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:43:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 423184),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 265474),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:46:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 179007),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 59321),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:07:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 286280),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 222082),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:26:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263805),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 156512),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:27:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 375749),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 288368),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:15:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 312609),
      new Player(Guild.COFFEE_TIME_ID, '2020', 179304),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:23:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 312609),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 159343),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:23:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 184512),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 70061),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:31:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 184512),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 67769),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:31:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197847),
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 62049),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:21:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197847),
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 46494),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:21:41`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 290476),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 258052),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:37:25`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 290476),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 331890),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T02:38:10`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 168869),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T03:26:15`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 168869),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      9,
      false,
      `${warDateString}T03:27:13`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 179619),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T03:28:48`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 179619),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T03:29:09`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 66429),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T03:39:06`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 136288),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T07:27:20`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 136288),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T07:27:55`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 62049),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:00:53`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 63581),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T08:01:47`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 60257),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T08:15:36`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 154548),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 331890),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:16:21`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 129281),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T08:45:15`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 123659),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T08:46:04`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 86250),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:12:44`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 86250),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:14:59`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 84208),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:15:17`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 84208),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:15:37`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 160961),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 331890),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:06:11`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 160961),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 331890),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T10:06:43`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 67756),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:24:51`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 153807),
      new Player(Guild.ASSASSINS_ID, 'KP', 312091),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T11:25:11`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 49190),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:26:06`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 49486),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:26:36`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, '2020', 179437),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:47:39`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, '2020', 60363),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:48:31`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 288776),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T12:36:23`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 288776),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 294392),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:36:54`
    ),
  ],
  Guild.COFFEE_TIME_ID,
  107,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_33_2020,
  Guild.ASSASSINS_ID,
  1400
);
