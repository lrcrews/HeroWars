import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-19';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 189051),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:39:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 186703),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:40:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 185924),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 61605),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:51:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 185924),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 186546),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:51:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 210758),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 163387),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:25:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 210758),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 88609),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:25:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 378415),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 295490),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:20:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 378415),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 277575),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:20:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241262),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 81514),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:24:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241262),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 48922),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:24:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 316091),
      new Player(Guild.COFFEE_TIME_ID, '2020', 188355),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:33:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 316091),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 169410),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:33:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 129747),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:56:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 260282),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 108317),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:56:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 88525),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:41:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 210599),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 73554),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:41:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 373081),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 220161),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:02:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 373081),
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 198533),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:03:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 336801),
      new Player(Guild.COFFEE_TIME_ID, 'Scof14', 192214),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:26:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 336801),
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 171396),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:26:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 164420),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:33:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311655),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 188673),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:35:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 311655),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 192053),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:35:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186681),
      new Player(Guild.COFFEE_TIME_ID, 'Scof14', 87986),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:38:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      new Player(Guild.COFFEE_TIME_ID, '2020', 65547),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:58:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 62946),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:59:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 386861),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 265689),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:03:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 386861),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 187699),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:04:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 297478),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 162296),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:17:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 282756),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 113490),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:17:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 317811),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 80285),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:32:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 230593),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 71969),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:44:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 230593),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 71863),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:44:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 424417),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 209090),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:58:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 317964),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 156006),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:03:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 247356),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:47:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 225163),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:47:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 424417),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 296286),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:55:55`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 296286),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 265390),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:53:46`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 296286),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T02:54:53`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 186703),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T03:23:31`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 186703),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T03:24:12`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 189051),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T04:21:18`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 189051),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T04:22:14`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 164420),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T05:35:14`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 164420),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T05:58:06`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Scof14', 91484),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T06:15:46`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 190156),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T06:27:37`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 187746),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T06:28:23`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 88525),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T06:55:47`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 88525),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T06:56:08`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 62946),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:05:25`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 62946),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:05:52`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 130288),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T08:25:24`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 108317),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:20:33`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 108317),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:21:03`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 296174),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 336738),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:47:21`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 193114),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:37:09`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 171221),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 258402),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T12:35:12`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 159910),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 258402),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T12:35:59`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 159910),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T12:36:40`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, '2020', 188355),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279568),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T12:38:29`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, '2020', 188355),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 297478),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T12:40:20`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 61020),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:54:49`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 61020),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:55:18`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 296174),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 300393),
      Fortification.BARRACKS_ID,
      10,
      false,
      `${warDateString}T12:55:54`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 50990),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:58:49`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 50979),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:59:21`
    ),
  ],
  Guild.COFFEE_TIME_ID,
  183,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_34_2020,
  Guild.ASSASSINS_ID,
  1300
);
