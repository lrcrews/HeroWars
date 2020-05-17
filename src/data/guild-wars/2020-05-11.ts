import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-11';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 170243),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 191907),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 133246),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:42:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 242001),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 160189),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:50:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 181049),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 66196),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:01:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 181049),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 86886),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:02:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 135452),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 50076),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:53:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 135452),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:54:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 324096),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 229907),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:02:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 329672),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 208203),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:03:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 112035),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:22:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 112035),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 59584),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:23:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126166),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 60345),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:50:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126166),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53789),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:50:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 283941),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 186885),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:18:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 283941),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 192197),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:18:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 283203),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 142535),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:33:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 283203),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 132711),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:33:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 133246),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 34417),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:49:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 235947),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 135400),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:08:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 151856),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 80710),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:49:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 151856),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 52571),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:49:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 280175),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 140375),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:07:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 327999),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 157252),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:07:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 327999),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 193875),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 280175),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 136754),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:08:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 292787),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 110905),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:59:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 292787),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 124703),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:59:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120332),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 82542),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:07:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120332),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 64574),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:07:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 126966),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 73328),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:10:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 126966),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 68521),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:11:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 206157),
      new Player(Guild.LES_FRANCS_ID, 'val', 113196),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:38:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 118329),
      new Player(Guild.LES_FRANCS_ID, 'val', 40263),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:38:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 261021),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 149070),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:15:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 273251),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 180515),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:16:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 228847),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 135142),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:30:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 228847),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 126071),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:31:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 363551),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 177265),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:35:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 363551),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 160299),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:36:15`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 201668),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 207403),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:02:46`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 201668),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 192078),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:03:20`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 211983),
      new Player(Guild.ASSASSINS_ID, 'elo', 186051),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T03:21:30`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 211983),
      new Player(Guild.ASSASSINS_ID, 'elo', 186051),
      Fortification.BARRACKS_ID,
      11,
      true,
      `${warDateString}T03:37:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 192883),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T04:31:35`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 187159),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 226030),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T04:32:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 170243),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255124),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T05:04:57`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 170243),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T05:06:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 229988),
      new Player(Guild.ASSASSINS_ID, 'Regal', 235947),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:23:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 229988),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 226030),
      Fortification.MAGE_ACADEMY_ID,
      11,
      false,
      `${warDateString}T05:24:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 160773),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 226030),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:11:52`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 160950),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 226030),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T07:12:34`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 185606),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T07:34:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 185606),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 226030),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T07:34:46`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 135431),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:37:26`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 126624),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T08:38:28`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 126071),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:06:15`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:06:41`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 59584),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255124),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:51:12`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 59584),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255124),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:51:38`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 181232),
      new Player(Guild.ASSASSINS_ID, 'En4', 273251),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T12:39:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 171141),
      new Player(Guild.ASSASSINS_ID, 'En4', 273251),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:40:42`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 140176),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:52:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 141587),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190270),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:56:00`
    ),
  ],
  Guild.LES_FRANCS_ID,
  140,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_20_2020,
  Guild.ASSASSINS_ID,
  1400
);
