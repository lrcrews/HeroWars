import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-20';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'LOD 2020', 202158),
      new Player(3, 'Akigis', 180352),
      4,
      20,
      true,
      `${warDateString}T03:30:14`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 202158),
      new Player(3, 'genorho', 146705),
      4,
      20,
      true,
      `${warDateString}T03:30:49`
    ),
    new Battle(
      new Player(1, 'wookie', 168897),
      new Player(3, 'Ulol4free', 140960),
      1,
      20,
      true,
      `${warDateString}T04:34:12`
    ),
    new Battle(
      new Player(1, 'wookie', 168897),
      new Player(3, 'Vorn', 139721),
      9,
      20,
      true,
      `${warDateString}T04:34:43`
    ),
    new Battle(
      new Player(1, 'doublejam', 142585),
      new Player(3, 'sylvainwar', 138231),
      4,
      20,
      true,
      `${warDateString}T05:18:37`
    ),
    new Battle(
      new Player(1, 'doublejam', 142585),
      new Player(3, 'ATILLA', 119070),
      4,
      20,
      true,
      `${warDateString}T05:18:54`
    ),
    new Battle(new Player(1, 'Disciple', 81405), new Player(3, 'val', 40263), 2, 20, true, `${warDateString}T05:42:24`),
    new Battle(
      new Player(1, 'Disciple', 81405),
      new Player(3, 'DMostafa', 33005),
      2,
      20,
      true,
      `${warDateString}T05:42:58`
    ),
    new Battle(
      new Player(1, 'BOTI', 74209),
      new Player(3, 'darweesh999', 45635),
      7,
      20,
      true,
      `${warDateString}T05:56:19`
    ),
    new Battle(
      new Player(1, 'BOTI', 74209),
      new Player(3, 'DynasticDani', 38957),
      7,
      20,
      true,
      `${warDateString}T05:57:11`
    ),
    new Battle(
      new Player(1, 'Sheevara', 75789),
      new Player(3, 'King Oko', 45348),
      3,
      20,
      true,
      `${warDateString}T06:00:02`
    ),
    new Battle(
      new Player(1, 'Sheevara', 75789),
      new Player(3, 'Spymanu', 48655),
      10,
      20,
      true,
      `${warDateString}T06:00:47`
    ),
    new Battle(
      new Player(1, 'Dikree', 114630),
      new Player(3, 'Nick56450', 54154),
      7,
      20,
      true,
      `${warDateString}T06:20:35`
    ),
    new Battle(
      new Player(1, 'Dikree', 114630),
      new Player(3, 'Vorn', 33882),
      10,
      20,
      true,
      `${warDateString}T06:22:02`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 258642),
      new Player(3, 'ATILLA', 174136),
      6,
      20,
      true,
      `${warDateString}T06:30:56`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 258642),
      new Player(3, 'Jack', 177627),
      6,
      20,
      true,
      `${warDateString}T06:31:39`
    ),
    new Battle(
      new Player(1, 'Dagul', 118274),
      new Player(3, 'JustCIO', 60434),
      2,
      20,
      true,
      `${warDateString}T06:38:34`
    ),
    new Battle(new Player(1, 'Dagul', 118274), new Player(3, 'Jack', 81394), 2, 20, true, `${warDateString}T06:39:01`),
    new Battle(
      new Player(1, 'Post Goats', 337167),
      new Player(3, 'Akigis', 217649),
      5,
      20,
      true,
      `${warDateString}T06:56:53`
    ),
    new Battle(
      new Player(1, 'Post Goats', 337167),
      new Player(3, 'lolodo', 204249),
      5,
      20,
      true,
      `${warDateString}T06:57:15`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 87652),
      new Player(3, 'Ulol4free', 76378),
      10,
      20,
      true,
      `${warDateString}T07:06:00`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 87652),
      new Player(3, 'snookerbibi', 80414),
      7,
      20,
      true,
      `${warDateString}T07:06:46`
    ),
    new Battle(
      new Player(1, 'Forblitz', 185744),
      new Player(3, 'jpMazura', 136175),
      6,
      20,
      true,
      `${warDateString}T07:15:09`
    ),
    new Battle(
      new Player(1, 'Forblitz', 185744),
      new Player(3, 'Nick56450', 117054),
      6,
      20,
      true,
      `${warDateString}T07:15:36`
    ),
    new Battle(
      new Player(1, 'gertyman', 263310),
      new Player(3, 'genorho', 190505),
      5,
      20,
      true,
      `${warDateString}T07:20:30`
    ),
    new Battle(
      new Player(1, 'gertyman', 263310),
      new Player(3, 'sylvainwar', 164154),
      9,
      20,
      true,
      `${warDateString}T07:20:54`
    ),
    new Battle(
      new Player(1, 'Dan', 190940),
      new Player(3, 'darweesh999', 131234),
      5,
      20,
      true,
      `${warDateString}T07:27:04`
    ),
    new Battle(
      new Player(1, 'Dan', 190940),
      new Player(3, 'ThanhDu', 151395),
      5,
      20,
      true,
      `${warDateString}T07:27:28`
    ),
    new Battle(
      new Player(1, 'Buffy', 80136),
      new Player(3, 'ThanhDu', 41619),
      3,
      20,
      true,
      `${warDateString}T07:33:51`
    ),
    new Battle(
      new Player(1, 'elo', 105447),
      new Player(3, 'jpMazura', 53199),
      10,
      20,
      true,
      `${warDateString}T07:33:56`
    ),
    new Battle(new Player(1, 'Buffy', 80136), new Player(3, 'Scof14', 57996), 3, 20, true, `${warDateString}T07:34:18`),
    new Battle(new Player(1, 'elo', 105447), new Player(3, 'lolodo', 70648), 3, 20, true, `${warDateString}T07:34:59`),
    new Battle(
      new Player(1, 'Gom', 276841),
      new Player(3, 'King Oko', 154681),
      1,
      20,
      true,
      `${warDateString}T07:50:38`
    ),
    new Battle(new Player(1, 'Gom', 276841), new Player(3, 'Scof14', 130341), 5, 20, true, `${warDateString}T09:08:41`),
    new Battle(new Player(1, 'KP', 194630), new Player(3, 'val', 106652), 5, 20, true, `${warDateString}T10:28:29`),
    new Battle(
      new Player(1, 'KP', 194630),
      new Player(3, 'DMostafa', 126900),
      1,
      20,
      true,
      `${warDateString}T10:29:08`
    ),
    new Battle(
      new Player(1, 'agent_chu', 209152),
      new Player(3, 'JustCIO', 115798),
      9,
      20,
      true,
      `${warDateString}T10:57:08`
    ),
    new Battle(
      new Player(1, 'agent_chu', 209152),
      new Player(3, 'snookerbibi', 126845),
      8,
      20,
      true,
      `${warDateString}T10:57:54`
    ),
    new Battle(
      new Player(1, 'Don', 183892),
      new Player(3, 'Spymanu', 126587),
      8,
      20,
      true,
      `${warDateString}T12:05:09`
    ),
    new Battle(
      new Player(1, 'Don', 183892),
      new Player(3, 'DynasticDani', 126623),
      8,
      20,
      true,
      `${warDateString}T12:05:28`
    ),
    new Battle(
      new Player(3, 'Spymanu', 126587),
      new Player(1, 'Buffy', 139719),
      1,
      20,
      true,
      `${warDateString}T01:41:36`
    ),
    new Battle(
      new Player(3, 'Spymanu', 126587),
      new Player(1, 'Dagul', 149847),
      9,
      6,
      false,
      `${warDateString}T01:42:32`
    ),
    new Battle(
      new Player(3, 'King Oko', 142848),
      new Player(1, 'Dagul', 149847),
      9,
      14,
      true,
      `${warDateString}T02:05:43`
    ),
    new Battle(
      new Player(3, 'King Oko', 146244),
      new Player(1, 'agent_chu', 208936),
      9,
      9,
      false,
      `${warDateString}T02:07:18`
    ),
    new Battle(
      new Player(3, 'Akigis', 217649),
      new Player(1, 'doublejam', 230390),
      1,
      16,
      false,
      `${warDateString}T02:18:02`
    ),
    new Battle(new Player(3, 'Akigis', 217649), new Player(1, 'KP', 194112), 8, 20, true, `${warDateString}T02:18:44`),
    new Battle(
      new Player(3, 'ATILLA', 176809),
      new Player(1, 'agent_chu', 208936),
      9,
      6,
      false,
      `${warDateString}T02:30:50`
    ),
    new Battle(
      new Player(3, 'ATILLA', 176809),
      new Player(1, 'Forblitz', 185744),
      8,
      13,
      false,
      `${warDateString}T02:31:48`
    ),
    new Battle(
      new Player(3, 'genorho', 182180),
      new Player(1, 'Forblitz', 185744),
      8,
      7,
      true,
      `${warDateString}T02:54:48`
    ),
    new Battle(
      new Player(3, 'genorho', 182180),
      new Player(1, 'agent_chu', 208936),
      9,
      5,
      true,
      `${warDateString}T02:55:34`
    ),
    new Battle(
      new Player(3, 'ThanhDu', 159144),
      new Player(1, 'doublejam', 230390),
      1,
      4,
      true,
      `${warDateString}T03:44:06`
    ),
    new Battle(
      new Player(3, 'lolodo', 204249),
      new Player(1, 'gertyman', 263174),
      8,
      4,
      false,
      `${warDateString}T05:23:54`
    ),
    new Battle(
      new Player(3, 'lolodo', 204249),
      new Player(1, 'gertyman', 263174),
      8,
      1,
      false,
      `${warDateString}T05:24:21`
    ),
    new Battle(
      new Player(3, 'Ulol4free', 141258),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T05:37:30`
    ),
    new Battle(
      new Player(3, 'Ulol4free', 141258),
      new Player(1, 'gertyman', 263174),
      8,
      3,
      false,
      `${warDateString}T05:38:02`
    ),
    new Battle(
      new Player(3, 'Jack', 64504),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T06:17:32`
    ),
    new Battle(
      new Player(3, 'Nick56450', 117601),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T10:22:09`
    ),
    new Battle(
      new Player(3, 'Nick56450', 117601),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T10:22:30`
    ),
    new Battle(
      new Player(3, 'sylvainwar', 144441),
      new Player(1, 'LOD 2020', 203413),
      4,
      10,
      false,
      `${warDateString}T10:31:18`
    ),
    new Battle(
      new Player(3, 'sylvainwar', 144441),
      new Player(1, 'LOD 2020', 203413),
      4,
      8,
      false,
      `${warDateString}T10:33:05`
    ),
    new Battle(
      new Player(3, 'jpMazura', 53199),
      new Player(1, 'LOD 2020', 203413),
      4,
      0,
      false,
      `${warDateString}T10:37:43`
    ),
    new Battle(
      new Player(3, 'jpMazura', 49290),
      new Player(1, 'LOD 2020', 203413),
      4,
      0,
      false,
      `${warDateString}T10:38:37`
    ),
    new Battle(
      new Player(3, 'JustCIO', 61954),
      new Player(1, 'LOD 2020', 203413),
      4,
      0,
      false,
      `${warDateString}T10:42:49`
    ),
    new Battle(
      new Player(3, 'JustCIO', 61954),
      new Player(1, 'LOD 2020', 203413),
      4,
      1,
      false,
      `${warDateString}T10:43:25`
    ),
    new Battle(
      new Player(3, 'DMostafa', 141680),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T10:47:13`
    ),
    new Battle(
      new Player(3, 'darweesh999', 48111),
      new Player(1, 'LOD 2020', 203413),
      4,
      1,
      true,
      `${warDateString}T10:59:02`
    ),
    new Battle(
      new Player(3, 'darweesh999', 48111),
      new Player(1, 'Post Goats', 221494),
      4,
      0,
      false,
      `${warDateString}T10:59:45`
    ),
    new Battle(
      new Player(3, 'Jack', 180487),
      new Player(1, 'gertyman', 263174),
      8,
      0,
      false,
      `${warDateString}T12:17:42`
    ),
  ],
  1,
  3,
  148,
  warDateString,
  'Monday',
  17,
  1,
  1400
);
