import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-30';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176597),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 133218),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:47:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176597),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 144851),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:48:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 205048),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 146705),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:20:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 152102),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:16:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 188295),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:16:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 181528),
      new Player(Guild.LES_FRANCS_ID, 'val', 109105),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:59:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 181528),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 121061),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:00:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 145272),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 119542),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T08:27:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.LES_FRANCS_ID, 'val', 40263),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:28:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 62648),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:29:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 84641),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53423),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:35:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 84641),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 64943),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:36:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 281424),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 184017),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:17:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 200399),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 139512),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:24:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 200399),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 153284),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:26:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 79463),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 41619),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:30:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 215758),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 166688),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:36:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 121450),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 81784),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:46:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 121450),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 81729),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:46:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 111933),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 50540),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:54:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 111933),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:55:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268374),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 179536),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:55:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 267178),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 168091),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:55:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 131432),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:02:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 124025),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:03:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 79463),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 34417),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:10:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87866),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 56208),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:17:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87866),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 71330),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:18:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 215758),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 151428),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:18:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 344187),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 220810),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:23:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 344187),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 204232),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:24:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru86', 98042),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 59039),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:39:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru86', 98042),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 78898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:40:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 51101),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:42:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 190272),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 118663),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:47:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 190272),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 119952),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:48:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 137347),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:51:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 134840),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:52:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 48095),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:55:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 220810),
      new Player(Guild.ASSASSINS_ID, 'KP', 200093),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:55:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 220810),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T01:55:37`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 197441),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      Fortification.LIGHTHOUSE_ID,
      7,
      false,
      `${warDateString}T04:24:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 197441),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 149191),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:25:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 194537),
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:23:16`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 194537),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 174990),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:23:56`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 51424),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:27:16`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 81784),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T07:28:22`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 178012),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T07:45:24`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 178012),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 155787),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:46:14`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 118663),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:48:31`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 118663),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      Fortification.LIGHTHOUSE_ID,
      8,
      true,
      `${warDateString}T09:49:14`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 131432),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:50:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 123792),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:51:20`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 104185),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:14:33`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 104185),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:14:57`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 155095),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 267507),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:10:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 166754),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T12:17:59`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 160828),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:19:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 168188),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:24:50`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 152102),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T12:26:45`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 56208),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:41:11`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 56208),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:41:39`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'val', 39161),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206923),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T12:46:08`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 136419),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:58:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 133933),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 272395),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:59:44`
    ),
  ],
  Guild.LES_FRANCS_ID,
  139,
  warDateString,
  'Thursday',
  GuildWar.WAR_WEEK_18_2020,
  Guild.ASSASSINS_ID,
  1260
);
