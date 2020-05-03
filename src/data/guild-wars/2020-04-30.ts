import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-30';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'wookie', 176597),
      new Player(3, 'snookerbibi', 133218),
      8,
      20,
      true,
      `${warDateString}T03:47:46`
    ),
    new Battle(
      new Player(1, 'wookie', 176597),
      new Player(3, 'Ulol4free', 144851),
      1,
      20,
      true,
      `${warDateString}T03:48:15`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 205048),
      new Player(3, 'genorho', 146705),
      4,
      20,
      true,
      `${warDateString}T04:20:29`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(3, 'sylvainwar', 152102),
      4,
      20,
      true,
      `${warDateString}T06:16:04`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(3, 'Akigis', 188295),
      4,
      20,
      true,
      `${warDateString}T06:16:43`
    ),
    new Battle(new Player(1, 'Dikree', 181528), new Player(3, 'val', 109105), 1, 20, true, `${warDateString}T07:59:52`),
    new Battle(
      new Player(1, 'Dikree', 181528),
      new Player(3, 'Nick56450', 121061),
      9,
      20,
      true,
      `${warDateString}T08:00:37`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 145272),
      new Player(3, 'ATILLA', 119542),
      4,
      20,
      true,
      `${warDateString}T08:27:03`
    ),
    new Battle(new Player(1, 'BOTI', 80295), new Player(3, 'val', 40263), 3, 20, true, `${warDateString}T08:28:40`),
    new Battle(new Player(1, 'BOTI', 80295), new Player(3, 'Scof14', 62648), 3, 20, true, `${warDateString}T08:29:27`),
    new Battle(
      new Player(1, 'Disciple', 84641),
      new Player(3, 'jpMazura', 53423),
      10,
      20,
      true,
      `${warDateString}T08:35:15`
    ),
    new Battle(
      new Player(1, 'Disciple', 84641),
      new Player(3, 'JustCIO', 64943),
      2,
      20,
      true,
      `${warDateString}T08:36:09`
    ),
    new Battle(new Player(1, 'Gom', 281424), new Player(3, 'Jack', 184017), 6, 20, true, `${warDateString}T10:17:29`),
    new Battle(
      new Player(1, 'KP', 200399),
      new Player(3, 'jpMazura', 139512),
      6,
      20,
      true,
      `${warDateString}T10:24:50`
    ),
    new Battle(new Player(1, 'KP', 200399), new Player(3, 'Vorn', 153284), 9, 20, true, `${warDateString}T10:26:52`),
    new Battle(
      new Player(1, 'Sheevara', 79463),
      new Player(3, 'ThanhDu', 41619),
      3,
      20,
      true,
      `${warDateString}T10:30:40`
    ),
    new Battle(
      new Player(1, 'agent_chu', 215758),
      new Player(3, 'King Oko', 166688),
      1,
      20,
      true,
      `${warDateString}T10:36:52`
    ),
    new Battle(new Player(1, 'Dagul', 121450), new Player(3, 'Jack', 81784), 2, 20, true, `${warDateString}T10:46:29`),
    new Battle(
      new Player(1, 'Dagul', 121450),
      new Player(3, 'snookerbibi', 81729),
      7,
      20,
      true,
      `${warDateString}T10:46:51`
    ),
    new Battle(
      new Player(1, 'elo', 111933),
      new Player(3, 'King Oko', 50540),
      7,
      20,
      true,
      `${warDateString}T10:54:39`
    ),
    new Battle(
      new Player(1, 'elo', 111933),
      new Player(3, 'Spicitus', 40928),
      7,
      20,
      true,
      `${warDateString}T10:55:16`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 268374),
      new Player(3, 'ATILLA', 179536),
      6,
      20,
      true,
      `${warDateString}T10:55:23`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 267178),
      new Player(3, 'sylvainwar', 168091),
      9,
      20,
      true,
      `${warDateString}T10:55:45`
    ),
    new Battle(
      new Player(1, 'Dan', 191945),
      new Player(3, 'Spymanu', 131432),
      8,
      20,
      true,
      `${warDateString}T11:02:43`
    ),
    new Battle(
      new Player(1, 'Dan', 191945),
      new Player(3, 'Touftouff', 124025),
      8,
      20,
      true,
      `${warDateString}T11:03:31`
    ),
    new Battle(
      new Player(1, 'Sheevara', 79463),
      new Player(3, 'Vorn', 34417),
      2,
      20,
      true,
      `${warDateString}T11:10:17`
    ),
    new Battle(
      new Player(1, 'Buffy', 87866),
      new Player(3, 'Touftouff', 56208),
      2,
      20,
      true,
      `${warDateString}T11:17:04`
    ),
    new Battle(new Player(1, 'Buffy', 87866), new Player(3, 'lolodo', 71330), 3, 20, true, `${warDateString}T11:18:27`),
    new Battle(
      new Player(1, 'agent_chu', 215758),
      new Player(3, 'ThanhDu', 151428),
      5,
      20,
      true,
      `${warDateString}T11:18:49`
    ),
    new Battle(
      new Player(1, 'Post Goats', 344187),
      new Player(3, 'Akigis', 220810),
      5,
      20,
      true,
      `${warDateString}T11:23:33`
    ),
    new Battle(
      new Player(1, 'Post Goats', 344187),
      new Player(3, 'lolodo', 204232),
      5,
      20,
      true,
      `${warDateString}T11:24:17`
    ),
    new Battle(
      new Player(1, 'hotaru86', 98042),
      new Player(3, 'Nick56450', 59039),
      7,
      20,
      true,
      `${warDateString}T11:39:34`
    ),
    new Battle(
      new Player(1, 'hotaru86', 98042),
      new Player(3, 'Ulol4free', 78898),
      10,
      20,
      true,
      `${warDateString}T11:40:02`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(3, 'Spymanu', 51101),
      10,
      20,
      true,
      `${warDateString}T11:42:24`
    ),
    new Battle(
      new Player(1, 'Don', 190272),
      new Player(3, 'Spicitus', 118663),
      5,
      20,
      true,
      `${warDateString}T11:47:33`
    ),
    new Battle(
      new Player(1, 'Don', 190272),
      new Player(3, 'JustCIO', 119952),
      6,
      20,
      true,
      `${warDateString}T11:48:23`
    ),
    new Battle(
      new Player(1, 'Forblitz', 192279),
      new Player(3, 'darweesh999', 137347),
      5,
      20,
      true,
      `${warDateString}T11:51:26`
    ),
    new Battle(
      new Player(1, 'Forblitz', 192279),
      new Player(3, 'Scof14', 134840),
      5,
      20,
      true,
      `${warDateString}T11:52:14`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(3, 'darweesh999', 48095),
      10,
      20,
      true,
      `${warDateString}T11:55:47`
    ),
    new Battle(new Player(3, 'Akigis', 220810), new Player(1, 'KP', 200093), 8, 20, true, `${warDateString}T01:55:05`),
    new Battle(
      new Player(3, 'Akigis', 220810),
      new Player(1, 'gertyman', 272395),
      8,
      5,
      false,
      `${warDateString}T01:55:37`
    ),
    new Battle(
      new Player(3, 'genorho', 197441),
      new Player(1, 'Forblitz', 192279),
      8,
      7,
      false,
      `${warDateString}T04:24:49`
    ),
    new Battle(
      new Player(3, 'genorho', 197441),
      new Player(1, 'Buffy', 149191),
      1,
      20,
      true,
      `${warDateString}T04:25:13`
    ),
    new Battle(new Player(3, 'lolodo', 194537), new Player(1, 'Dan', 191945), 9, 20, true, `${warDateString}T06:23:16`),
    new Battle(
      new Player(3, 'lolodo', 194537),
      new Player(1, 'hotaru086', 174990),
      1,
      20,
      true,
      `${warDateString}T06:23:56`
    ),
    new Battle(
      new Player(3, 'Jack', 51424),
      new Player(1, 'LOD 2020', 206923),
      4,
      0,
      false,
      `${warDateString}T07:27:16`
    ),
    new Battle(
      new Player(3, 'Jack', 81784),
      new Player(1, 'LOD 2020', 206923),
      4,
      1,
      false,
      `${warDateString}T07:28:22`
    ),
    new Battle(
      new Player(3, 'ATILLA', 178012),
      new Player(1, 'Forblitz', 192279),
      8,
      5,
      false,
      `${warDateString}T07:45:24`
    ),
    new Battle(
      new Player(3, 'ATILLA', 178012),
      new Player(1, 'Dagul', 155787),
      9,
      20,
      true,
      `${warDateString}T07:46:14`
    ),
    new Battle(
      new Player(3, 'Spicitus', 118663),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T09:48:31`
    ),
    new Battle(
      new Player(3, 'Spicitus', 118663),
      new Player(1, 'Forblitz', 192279),
      8,
      8,
      true,
      `${warDateString}T09:49:14`
    ),
    new Battle(
      new Player(3, 'Spymanu', 131432),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T09:50:44`
    ),
    new Battle(
      new Player(3, 'Spymanu', 123792),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T09:51:20`
    ),
    new Battle(
      new Player(3, 'Nick56450', 104185),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T10:14:33`
    ),
    new Battle(
      new Player(3, 'Nick56450', 104185),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T10:14:57`
    ),
    new Battle(
      new Player(3, 'Vorn', 155095),
      new Player(1, 'LOD 2020', 267507),
      9,
      0,
      false,
      `${warDateString}T12:10:49`
    ),
    new Battle(
      new Player(3, 'King Oko', 166754),
      new Player(1, 'gertyman', 272395),
      8,
      1,
      false,
      `${warDateString}T12:17:59`
    ),
    new Battle(
      new Player(3, 'King Oko', 160828),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T12:19:05`
    ),
    new Battle(
      new Player(3, 'sylvainwar', 168188),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T12:24:50`
    ),
    new Battle(
      new Player(3, 'sylvainwar', 152102),
      new Player(1, 'LOD 2020', 206923),
      4,
      11,
      false,
      `${warDateString}T12:26:45`
    ),
    new Battle(
      new Player(3, 'Touftouff', 56208),
      new Player(1, 'LOD 2020', 206923),
      4,
      0,
      false,
      `${warDateString}T12:41:11`
    ),
    new Battle(
      new Player(3, 'Touftouff', 56208),
      new Player(1, 'LOD 2020', 206923),
      4,
      0,
      false,
      `${warDateString}T12:41:39`
    ),
    new Battle(
      new Player(3, 'val', 39161),
      new Player(1, 'LOD 2020', 206923),
      4,
      1,
      false,
      `${warDateString}T12:46:08`
    ),
    new Battle(
      new Player(3, 'jpMazura', 136419),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T12:58:49`
    ),
    new Battle(
      new Player(3, 'jpMazura', 133933),
      new Player(1, 'gertyman', 272395),
      8,
      0,
      false,
      `${warDateString}T12:59:44`
    ),
  ],
  9,
  3,
  139,
  warDateString,
  'Thursday',
  18,
  1,
  1260
);
