import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-28';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'wookie', 90116),
      new Player(5, 'Wallario', 81398),
      4,
      20,
      true,
      `${warDateString}T03:19:55`
    ),
    new Battle(
      new Player(1, 'wookie', 176242),
      new Player(5, 'Tfy :)', 153395),
      1,
      20,
      true,
      `${warDateString}T03:20:24`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(5, 'Sardine', 268913),
      4,
      20,
      true,
      `${warDateString}T04:52:40`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(5, 'Gardakus', 268882),
      4,
      19,
      false,
      `${warDateString}T04:53:06`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(5, 'Amothep', 92138),
      4,
      20,
      true,
      `${warDateString}T05:35:34`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(5, 'Gardakus', 268882),
      4,
      1,
      true,
      `${warDateString}T05:59:26`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(5, 'Indred Cole', 74087),
      2,
      20,
      true,
      `${warDateString}T06:02:31`
    ),
    new Battle(new Player(1, 'Fuzzy', 90893), new Player(5, 'ecka', 62644), 2, 20, true, `${warDateString}T06:02:50`),
    new Battle(
      new Player(1, 'Dagul', 120379),
      new Player(5, 'badianchick', 114869),
      10,
      20,
      true,
      `${warDateString}T06:03:44`
    ),
    new Battle(
      new Player(1, 'Dagul', 120379),
      new Player(5, 'BIG D', 102090),
      2,
      20,
      true,
      `${warDateString}T06:04:17`
    ),
    new Battle(
      new Player(1, 'Disciple', 83348),
      new Player(5, 'Mincer2412', 45030),
      10,
      20,
      true,
      `${warDateString}T06:05:19`
    ),
    new Battle(new Player(1, 'BOTI', 80295), new Player(5, '_DAZ_', 60256), 3, 20, true, `${warDateString}T06:06:22`),
    new Battle(new Player(1, 'BOTI', 80295), new Player(5, 'Revan', 70280), 3, 20, true, `${warDateString}T06:07:17`),
    new Battle(
      new Player(1, 'Sheevara', 78729),
      new Player(5, 'Anhvilla', 66983),
      7,
      20,
      true,
      `${warDateString}T06:59:47`
    ),
    new Battle(
      new Player(1, 'Sheevara', 78729),
      new Player(5, 'Tfy :)', 62518),
      7,
      20,
      true,
      `${warDateString}T07:00:11`
    ),
    new Battle(
      new Player(1, 'Gom', 228443),
      new Player(5, 'Angelina', 153422),
      2,
      20,
      true,
      `${warDateString}T07:06:32`
    ),
    new Battle(new Player(1, 'Dan', 167028), new Player(5, 'budge', 131059), 3, 20, true, `${warDateString}T07:18:44`),
    new Battle(new Player(1, 'Dan', 167028), new Player(5, 'Saucy', 151153), 7, 20, true, `${warDateString}T07:19:29`),
    new Battle(new Player(1, 'elo', 107892), new Player(5, 'MrTom', 93171), 7, 20, true, `${warDateString}T07:30:55`),
    new Battle(
      new Player(1, 'Post Goats', 340486),
      new Player(5, 'Sardine', 364965),
      5,
      7,
      false,
      `${warDateString}T07:40:08`
    ),
    new Battle(
      new Player(1, 'Post Goats', 338331),
      new Player(5, 'Sardine', 364965),
      5,
      13,
      true,
      `${warDateString}T08:09:28`
    ),
    new Battle(
      new Player(1, 'agent_chu', 214031),
      new Player(5, 'badianchick', 207995),
      5,
      0,
      false,
      `${warDateString}T09:36:12`
    ),
    new Battle(new Player(1, 'Buffy', 87456), new Player(5, 'Kifyu', 74618), 10, 20, true, `${warDateString}T09:36:30`),
    new Battle(
      new Player(1, 'Buffy', 87456),
      new Player(5, 'Jeep Jerry', 59443),
      10,
      20,
      true,
      `${warDateString}T09:36:59`
    ),
    new Battle(
      new Player(1, 'agent_chu', 214208),
      new Player(5, 'PetrifiedBear', 204011),
      5,
      20,
      true,
      `${warDateString}T09:48:06`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 266785),
      new Player(5, 'badianchick', 207995),
      5,
      20,
      true,
      `${warDateString}T09:49:52`
    ),
    new Battle(
      new Player(1, 'Disciple', 172682),
      new Player(5, 'Anhvilla', 145302),
      5,
      20,
      true,
      `${warDateString}T09:51:26`
    ),
    new Battle(new Player(1, 'Gom', 281116), new Player(5, 'budge', 224686), 5, 0, false, `${warDateString}T09:56:32`),
    new Battle(
      new Player(1, 'LOD 2020', 266785),
      new Player(5, 'budge', 224686),
      5,
      20,
      true,
      `${warDateString}T10:28:59`
    ),
    new Battle(
      new Player(1, 'KP', 199482),
      new Player(5, 'Indred Cole', 147946),
      5,
      20,
      true,
      `${warDateString}T10:37:03`
    ),
    new Battle(new Player(1, 'KP', 199482), new Player(5, 'ecka', 177862), 5, 6, false, `${warDateString}T10:38:36`),
    new Battle(
      new Player(1, 'GurraBurra', 265922),
      new Player(5, 'MrTom', 212952),
      6,
      20,
      true,
      `${warDateString}T11:14:59`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 266655),
      new Player(5, 'Saucy', 204248),
      6,
      20,
      true,
      `${warDateString}T11:15:48`
    ),
    new Battle(
      new Player(1, 'Forblitz', 190706),
      new Player(5, 'Wallario', 156558),
      6,
      20,
      true,
      `${warDateString}T11:15:59`
    ),
    new Battle(
      new Player(1, 'Forblitz', 190706),
      new Player(5, 'BIG D', 145149),
      6,
      20,
      true,
      `${warDateString}T11:16:27`
    ),
    new Battle(new Player(1, 'Don', 188902), new Player(5, 'ecka', 177862), 5, 14, true, `${warDateString}T12:11:52`),
    new Battle(
      new Player(1, 'elo', 107892),
      new Player(5, 'PetrifieBear', 118334),
      3,
      15,
      false,
      `${warDateString}T12:13:17`
    ),
    new Battle(
      new Player(1, 'Don', 65099),
      new Player(5, 'PetrifieBear', 118334),
      3,
      1,
      false,
      `${warDateString}T12:30:48`
    ),
    new Battle(new Player(5, 'ecka', 179752), new Player(1, 'Dagul', 155642), 9, 20, true, `${warDateString}T00:25:07`),
    new Battle(
      new Player(5, 'ecka', 179752),
      new Player(1, 'hotaru086', 168978),
      1,
      20,
      true,
      `${warDateString}T00:26:58`
    ),
    new Battle(
      new Player(5, 'Anhvilla', 164975),
      new Player(1, 'Buffy', 145431),
      1,
      20,
      true,
      `${warDateString}T00:35:11`
    ),
    new Battle(
      new Player(5, 'Gardakus', 268882),
      new Player(1, 'gertyman', 253241),
      4,
      20,
      true,
      `${warDateString}T02:57:04`
    ),
    new Battle(
      new Player(5, 'Gardakus', 268882),
      new Player(1, 'Gom', 228443),
      4,
      20,
      true,
      `${warDateString}T02:57:33`
    ),
    new Battle(
      new Player(5, 'Sardine', 266223),
      new Player(1, 'Post Goats', 224012),
      4,
      20,
      true,
      `${warDateString}T04:20:29`
    ),
    new Battle(
      new Player(5, 'Sardine', 266223),
      new Player(1, 'LOD 2020', 206303),
      4,
      20,
      true,
      `${warDateString}T04:21:07`
    ),
    new Battle(
      new Player(5, 'badianchick', 114869),
      new Player(1, 'elo', 107892),
      7,
      20,
      true,
      `${warDateString}T04:39:53`
    ),
    new Battle(
      new Player(5, 'badianchick', 114869),
      new Player(1, 'agent_chu', 91388),
      7,
      20,
      true,
      `${warDateString}T04:40:20`
    ),
    new Battle(
      new Player(5, 'Revan', 185357),
      new Player(1, 'wookie', 176169),
      6,
      20,
      true,
      `${warDateString}T04:40:28`
    ),
    new Battle(
      new Player(5, 'budge', 131602),
      new Player(1, 'Forblitz', 126395),
      2,
      20,
      true,
      `${warDateString}T05:43:45`
    ),
    new Battle(
      new Player(5, 'budge', 131602),
      new Player(1, 'Dagul', 120395),
      2,
      20,
      true,
      `${warDateString}T05:44:28`
    ),
    new Battle(
      new Player(5, 'Angelina', 284249),
      new Player(1, 'GurraBurra', 265812),
      6,
      0,
      false,
      `${warDateString}T06:36:11`
    ),
    new Battle(
      new Player(5, 'Angelina', 155096),
      new Player(1, 'Dan', 167028),
      7,
      20,
      true,
      `${warDateString}T06:36:46`
    ),
    new Battle(
      new Player(5, 'Saucy', 151153),
      new Player(1, 'GurraBurra', 144222),
      3,
      20,
      true,
      `${warDateString}T07:21:24`
    ),
    new Battle(
      new Player(5, 'PetrifiedBear', 111031),
      new Player(1, 'KP', 98156),
      2,
      20,
      true,
      `${warDateString}T07:21:36`
    ),
    new Battle(
      new Player(5, 'Saucy', 151153),
      new Player(1, 'Dikree', 125077),
      3,
      20,
      true,
      `${warDateString}T07:22:43`
    ),
    new Battle(
      new Player(5, 'PetrifiedBear', 111031),
      new Player(1, 'hotaru086', 98042),
      2,
      20,
      true,
      `${warDateString}T07:23:37`
    ),
    new Battle(
      new Player(5, 'MrTom', 89081),
      new Player(1, 'Disciple', 83348),
      10,
      16,
      false,
      `${warDateString}T07:49:19`
    ),
    new Battle(new Player(5, 'MrTom', 85458), new Player(1, 'Buffy', 87459), 3, 16, false, `${warDateString}T07:54:26`),
    new Battle(
      new Player(5, 'Jeep Jerry', 215429),
      new Player(1, 'Dikree', 175099),
      6,
      20,
      true,
      `${warDateString}T07:54:52`
    ),
    new Battle(
      new Player(5, 'Amothep', 92138),
      new Player(1, 'Sheevara', 78729),
      10,
      20,
      true,
      `${warDateString}T07:55:30`
    ),
    new Battle(
      new Player(5, 'Amothep', 92138),
      new Player(1, 'BOTI', 80295),
      10,
      19,
      false,
      `${warDateString}T07:56:08`
    ),
    new Battle(new Player(5, 'Tfy :)', 62518), new Player(1, 'Buffy', 87459), 3, 4, true, `${warDateString}T08:08:42`),
    new Battle(
      new Player(5, 'Tfy :)', 62518),
      new Player(1, 'Disciple', 83348),
      10,
      4,
      true,
      `${warDateString}T08:09:54`
    ),
    new Battle(
      new Player(5, 'Wallario', 81398),
      new Player(1, 'Don', 66898),
      10,
      20,
      true,
      `${warDateString}T08:16:05`
    ),
    new Battle(
      new Player(5, 'Mincer2412', 45302),
      new Player(1, 'BOTI', 80295),
      10,
      1,
      true,
      `${warDateString}T08:44:47`
    ),
    new Battle(
      new Player(5, 'BIG D', 102091),
      new Player(1, 'wookie', 86374),
      7,
      20,
      true,
      `${warDateString}T09:16:02`
    ),
    new Battle(new Player(5, 'BIG D', 102091), new Player(1, 'Fuzzy', 90480), 3, 20, true, `${warDateString}T09:17:24`),
    new Battle(
      new Player(5, 'Jeep Jerry', 218693),
      new Player(1, 'Don', 188902),
      6,
      4,
      false,
      `${warDateString}T09:23:24`
    ),
    new Battle(
      new Player(5, 'Mincer2412', 151180),
      new Player(1, 'BOTI', 152474),
      5,
      20,
      true,
      `${warDateString}T09:45:29`
    ),
    new Battle(
      new Player(5, 'Revan', 185357),
      new Player(1, 'Disciple', 172538),
      5,
      20,
      true,
      `${warDateString}T09:59:06`
    ),
    new Battle(
      new Player(5, 'Anhvilla', 164975),
      new Player(1, 'Don', 188902),
      6,
      0,
      false,
      `${warDateString}T11:30:20`
    ),
    new Battle(
      new Player(5, '_DAZ_', 168380),
      new Player(1, 'Sheevara', 156633),
      5,
      20,
      true,
      `${warDateString}T12:29:42`
    ),
    new Battle(
      new Player(5, '_DAZ_', 168380),
      new Player(1, 'Fuzzy', 155884),
      5,
      20,
      true,
      `${warDateString}T12:33:12`
    ),
    new Battle(
      new Player(5, 'Wallario', 157196),
      new Player(1, 'elo', 180700),
      5,
      4,
      false,
      `${warDateString}T12:42:36`
    ),
    new Battle(new Player(5, 'Kifyu', 178103), new Player(1, 'elo', 180700), 5, 16, true, `${warDateString}T12:45:56`),
    new Battle(new Player(5, 'Kifyu', 178103), new Player(1, 'Don', 188902), 6, 0, false, `${warDateString}T12:47:06`),
  ],
  7,
  5,
  904,
  warDateString,
  'Tuesday',
  18,
  1,
  1056
);
