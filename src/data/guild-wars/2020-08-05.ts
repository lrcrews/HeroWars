import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-05';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 177287),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 164302),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 163215),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:55:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 68044),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:56:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 130399),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:57:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 333684),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 264508),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:05:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 333684),
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 241405),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:06:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 128725),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:57:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 76461),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:58:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 61737),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:41:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 67964),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:41:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 283461),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 196422),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:55:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 283461),
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 191650),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:57:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299785),
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 180605),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:11:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299785),
      new Player(Guild.COFFEE_TIME_ID, 'corel77', 179034),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:12:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 133868),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:33:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 176673),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 81902),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:33:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 326047),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 153701),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:48:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 326047),
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 169177),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:49:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 180453),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 79762),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:54:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 306818),
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 216284),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:55:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 344523),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 112236),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:05:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 348307),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 178335),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:06:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.COFFEE_TIME_ID, 'tfex151', 64786),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:07:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.COFFEE_TIME_ID, 'Rockman', 39347),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:07:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420628),
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 284537),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:29:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 170984),
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 77980),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:41:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 170984),
      new Player(Guild.COFFEE_TIME_ID, '2020', 58084),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:42:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 194237),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 53284),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:49:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 194237),
      new Player(Guild.COFFEE_TIME_ID, 'Astedorian', 62422),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:50:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 366199),
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 284923),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:22:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 384344),
      new Player(Guild.COFFEE_TIME_ID, 'Rockman', 127453),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:22:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 304520),
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 217741),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:24:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 304520),
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 153905),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:25:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 380041),
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 264194),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:51:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420628),
      new Player(Guild.COFFEE_TIME_ID, '2020', 175824),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:01:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 399363),
      new Player(Guild.COFFEE_TIME_ID, 'Mileman', 151902),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:13:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198693),
      new Player(Guild.COFFEE_TIME_ID, 'Abe max', 46601),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:14:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 60544),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:16:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      new Player(Guild.COFFEE_TIME_ID, 'mastu092', 45758),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:17:14`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 284537),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T00:48:17`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'g.a.s', 284537),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T00:48:56`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 196422),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T00:50:14`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 241405),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T03:47:04`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Darth Daddy39', 241405),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T03:47:30`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 264194),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 326047),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:51:45`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Malagis', 264194),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T06:53:44`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'matsu092', 171032),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T07:17:42`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 216284),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T08:42:52`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'EvilJaguar', 216284),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T08:43:36`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Manos', 196422),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T09:22:59`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 180686),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T10:14:22`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'DynasticDani', 180686),
      new Player(Guild.ASSASSINS_ID, 'KP', 304257),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:15:41`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 217791),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254236),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T10:22:36`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Silasblaine', 217791),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:23:17`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 191650),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:42:34`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 258042),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254236),
      Fortification.MAGE_ACADEMY_ID,
      9,
      false,
      `${warDateString}T10:43:49`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 284988),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:53:00`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'chin7ez', 284988),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 289529),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:55:23`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Gby', 264947),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T10:56:49`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 149734),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254236),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:47:20`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'VaSyL ShV', 149734),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254236),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:48:14`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 153701),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280833),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:04:38`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'Coquette', 153701),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:05:33`
    ),
    new Battle(
      new Player(Guild.COFFEE_TIME_ID, 'V.A.L.', 191704),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288240),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:09:58`
    ),
  ],
  Guild.COFFEE_TIME_ID,
  96,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_32_2020,
  Guild.ASSASSINS_ID,
  1400
);
