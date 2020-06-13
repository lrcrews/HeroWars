import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-12';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 200590),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 192086),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 239295),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 194705),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182631),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 182631),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 123244),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:23:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 167207),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 72031),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:56:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 167207),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 80190),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:56:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 156958),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 61641),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:21:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 156958),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:22:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 391639),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 245296),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:32:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 391639),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 243466),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:35:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302252),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198086),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:49:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 302252),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 143451),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:49:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 355712),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 186647),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:54:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 355712),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 162108),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:54:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318539),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 180951),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:58:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318539),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 187913),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:59:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 214207),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 171766),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:00:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 150926),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 39260),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:01:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 289289),
      new Player(Guild.LES_FRANCS_ID, 'Ruthergnol', 145377),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:05:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 289289),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 125314),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:06:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 383220),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 162492),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:20:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 237059),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 205508),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:42:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 237830),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 151738),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:43:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 147205),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 75278),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:00:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 147205),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 70227),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:01:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 133912),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 93706),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:08:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 133912),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 79862),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:08:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 145110),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 73576),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:26:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 145129),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 52317),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:27:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 50261),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:52:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.LES_FRANCS_ID, 'nik96', 45298),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:53:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 185389),
      new Player(Guild.LES_FRANCS_ID, 'Ruthergnol', 45959),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:00:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 185389),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 83325),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:00:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 332111),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 165895),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:59:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 332111),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 117335),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:00:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 283308),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 160690),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:05:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 283308),
      new Player(Guild.LES_FRANCS_ID, 'nik96', 138192),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:06:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 312807),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 165197),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:23:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 312807),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 202248),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:24:24`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 243466),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 257414),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:01:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 243466),
      new Player(Guild.ASSASSINS_ID, 'KP', 262006),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T02:02:52`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 125314),
      new Player(Guild.ASSASSINS_ID, 'KP', 262006),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T03:35:01`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 125314),
      new Player(Guild.ASSASSINS_ID, 'KP', 262006),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T04:00:31`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 140961),
      new Player(Guild.ASSASSINS_ID, 'KP', 262006),
      Fortification.BARRACKS_ID,
      14,
      true,
      `${warDateString}T05:41:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 140961),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 357743),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:42:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 245296),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242492),
      Fortification.MAGE_ACADEMY_ID,
      10,
      false,
      `${warDateString}T07:48:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 245296),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242492),
      Fortification.MAGE_ACADEMY_ID,
      10,
      true,
      `${warDateString}T07:48:31`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 197734),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 246056),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T08:25:43`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 197734),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 256820),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:27:27`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'nik96', 154167),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387550),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:45:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'nik96', 154167),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387550),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:47:41`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 192086),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T09:04:01`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 192086),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T09:06:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198345),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 246056),
      Fortification.MAGE_ACADEMY_ID,
      18,
      true,
      `${warDateString}T11:09:15`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198111),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 391639),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T11:10:48`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 166420),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387550),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:19:11`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 166420),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 256820),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T11:19:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 75278),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T11:21:55`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 75278),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:22:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 73576),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:23:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 69701),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:23:42`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 68759),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T11:49:46`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 68759),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:50:04`
    ),
  ],
  Guild.LES_FRANCS_ID,
  108,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_24_2020,
  Guild.ASSASSINS_ID,
  1400
);
