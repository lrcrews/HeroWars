import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-20';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 202158),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 180352),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:30:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 202158),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 146705),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:30:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 168897),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 140960),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:34:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 168897),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 139721),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:34:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 142585),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 138231),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:18:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 142585),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 119070),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:18:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81405),
      new Player(Guild.LES_FRANCS_ID, 'val', 40263),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:42:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81405),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 33005),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:42:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 45635),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:56:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.LES_FRANCS_ID, 'DynasticDani', 38957),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:57:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 75789),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 45348),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:00:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 75789),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 48655),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:00:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 114630),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 54154),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:20:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 114630),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 33882),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:22:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 258642),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 174136),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:30:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 258642),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 177627),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:31:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118274),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 60434),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:38:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118274),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 81394),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:39:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 337167),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 217649),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:56:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 337167),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 204249),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:57:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 87652),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 76378),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:06:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 87652),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 80414),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:06:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 185744),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 136175),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:15:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 185744),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 117054),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:15:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263310),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 190505),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:20:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263310),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 164154),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:20:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 190940),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 131234),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:27:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 190940),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 151395),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:27:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80136),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 41619),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:33:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105447),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53199),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:33:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80136),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 57996),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105447),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 70648),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 276841),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 154681),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:50:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 276841),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 130341),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:08:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 194630),
      new Player(Guild.LES_FRANCS_ID, 'val', 106652),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:28:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 194630),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 126900),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:29:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 209152),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 115798),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:57:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 209152),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 126845),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:57:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 183892),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 126587),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:05:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 183892),
      new Player(Guild.LES_FRANCS_ID, 'DynasticDani', 126623),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:05:28`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 126587),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 139719),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:41:36`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 126587),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 149847),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T01:42:32`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 142848),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 149847),
      Fortification.MAGE_ACADEMY_ID,
      14,
      true,
      `${warDateString}T02:05:43`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 146244),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 208936),
      Fortification.MAGE_ACADEMY_ID,
      9,
      false,
      `${warDateString}T02:07:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 217649),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 230390),
      Fortification.BARRACKS_ID,
      16,
      false,
      `${warDateString}T02:18:02`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 217649),
      new Player(Guild.ASSASSINS_ID, 'KP', 194112),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:18:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 176809),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 208936),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T02:30:50`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 176809),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 185744),
      Fortification.LIGHTHOUSE_ID,
      13,
      false,
      `${warDateString}T02:31:48`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 182180),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 185744),
      Fortification.LIGHTHOUSE_ID,
      7,
      true,
      `${warDateString}T02:54:48`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 182180),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 208936),
      Fortification.MAGE_ACADEMY_ID,
      5,
      true,
      `${warDateString}T02:55:34`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 159144),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 230390),
      Fortification.BARRACKS_ID,
      4,
      true,
      `${warDateString}T03:44:06`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 204249),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T05:23:54`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 204249),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:24:21`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 141258),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:37:30`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 141258),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T05:38:02`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 64504),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:17:32`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 117601),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:22:09`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 117601),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:22:30`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 144441),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T10:31:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 144441),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T10:33:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53199),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:37:43`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 49290),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:38:37`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 61954),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:42:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 61954),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T10:43:25`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 141680),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:47:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 48111),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T10:59:02`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 48111),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 221494),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:59:45`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 180487),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 263174),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:17:42`
    ),
  ],
  Guild.LES_FRANCS_ID,
  148,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_17_2020,
  Guild.ASSASSINS_ID,
  1400
);
