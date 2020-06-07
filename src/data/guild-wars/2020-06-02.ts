import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-02';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 194705),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 191217),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 175962),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 45479),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:34:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:37:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 154419),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 88421),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:45:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 154419),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 70044),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:45:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 386764),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 237313),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:53:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 386764),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 229239),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:53:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298259),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 175477),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:19:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298259),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 138857),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:19:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318955),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 155313),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:23:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318955),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 179115),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:24:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 248355),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 57160),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:24:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 248355),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:25:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163644),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 66135),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:31:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163644),
      new Player(Guild.LES_FRANCS_ID, 'Upload', 39069),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:32:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 75567),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:46:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 47103),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:47:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 155523),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 65542),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:57:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 251772),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 113823),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:58:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 306920),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 200386),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:08:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 306920),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 147791),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:09:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 118203),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 68947),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:26:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 118203),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 77618),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:26:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 325209),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 118289),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:32:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 252209),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 156626),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:40:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 274305),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 187913),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:40:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 274305),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 185804),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:40:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 252209),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 151651),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:41:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 249043),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 161046),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255789),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 159457),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:56:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 54990),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:13:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 36063),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:13:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 325553),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 142996),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:23:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 325553),
      new Player(Guild.LES_FRANCS_ID, 'Upload', 130204),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:24:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354745),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 161246),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:24:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354745),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 197845),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:25:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 104634),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:44:26`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 175962),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T00:33:01`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 175962),
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T00:34:32`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 237836),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 252419),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T01:03:10`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 191217),
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      Fortification.BRIDGE_ID,
      10,
      true,
      `${warDateString}T01:03:39`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Upload', 130204),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 222591),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T01:27:02`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Upload', 130204),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 222591),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T01:27:21`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 188939),
      new Player(Guild.ASSASSINS_ID, 'HERO', 220711),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T03:43:59`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 237313),
      new Player(Guild.ASSASSINS_ID, 'HERO', 220711),
      Fortification.BARRACKS_ID,
      13,
      false,
      `${warDateString}T04:07:48`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 237313),
      new Player(Guild.ASSASSINS_ID, 'KP', 250098),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:08:22`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 193763),
      new Player(Guild.ASSASSINS_ID, 'HERO', 220711),
      Fortification.BARRACKS_ID,
      7,
      true,
      `${warDateString}T06:39:57`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 236081),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 222591),
      Fortification.MAGE_ACADEMY_ID,
      18,
      true,
      `${warDateString}T08:09:19`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 236081),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T08:09:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 138857),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 252419),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:57:28`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 146627),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T09:15:31`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 156719),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T09:16:01`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 159325),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:09:12`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 13642),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:11:34`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 68947),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:39:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 68947),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:39:38`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 193763),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:05:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 118289),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:20:33`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 189021),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:28:17`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 189021),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248859),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:28:47`
    ),
  ],
  Guild.LES_FRANCS_ID,
  97,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_23_2020,
  Guild.ASSASSINS_ID,
  1400
);
