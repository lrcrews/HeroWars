import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-23';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(4, 'Song x 2', 204510),
      4,
      20,
      true,
      `${warDateString}T05:49:39`
    ),
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(4, 'discuas', 181088),
      4,
      20,
      true,
      `${warDateString}T05:50:44`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 202672),
      new Player(4, '--Babababababab', 155432),
      4,
      20,
      true,
      `${warDateString}T06:21:05`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 263151),
      new Player(4, 'Mac 270072', 224829),
      9,
      20,
      true,
      `${warDateString}T06:21:52`
    ),
    new Battle(
      new Player(1, 'Gom', 227817),
      new Player(4, 'Dinobunny', 127281),
      4,
      20,
      true,
      `${warDateString}T07:17:01`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 227817),
      new Player(4, '--Babababababab', 228299),
      8,
      20,
      true,
      `${warDateString}T07:20:14`
    ),
    new Battle(new Player(1, 'Fuzzy', 89092), new Player(4, 'Drenz', 80802), 2, 20, true, `${warDateString}T07:21:02`),
    new Battle(
      new Player(1, 'GurraBurra', 260278),
      new Player(4, 'Gi', 216531),
      6,
      20,
      true,
      `${warDateString}T07:21:10`
    ),
    new Battle(new Player(1, 'Fuzzy', 89092), new Player(4, 'TanoOo', 75230), 3, 20, true, `${warDateString}T07:21:29`),
    new Battle(
      new Player(1, 'wookie', 170211),
      new Player(4, 'TanoOo', 132698),
      6,
      20,
      true,
      `${warDateString}T07:23:51`
    ),
    new Battle(
      new Player(1, 'wookie', 170211),
      new Player(4, 'WildWind', 138301),
      6,
      20,
      true,
      `${warDateString}T07:24:20`
    ),
    new Battle(
      new Player(1, 'BOTI', 74458),
      new Player(4, 'Fenrigul', 50841),
      2,
      20,
      true,
      `${warDateString}T07:33:23`
    ),
    new Battle(
      new Player(1, 'BOTI', 74458),
      new Player(4, 'WildWind', 58100),
      3,
      20,
      true,
      `${warDateString}T07:34:19`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77088),
      new Player(4, 'Juramar', 73723),
      7,
      20,
      true,
      `${warDateString}T07:46:59`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77088),
      new Player(4, 'DerVehuel', 64666),
      7,
      20,
      true,
      `${warDateString}T07:47:34`
    ),
    new Battle(
      new Player(1, 'elo', 106833),
      new Player(4, 'Waldo The Great', 103955),
      3,
      20,
      true,
      `${warDateString}T07:59:08`
    ),
    new Battle(new Player(1, 'elo', 106833), new Player(4, '_sad1_', 75041), 3, 20, true, `${warDateString}T08:00:31`),
    new Battle(
      new Player(1, 'Post Goats', 339575),
      new Player(4, 'discuas', 237228),
      5,
      20,
      true,
      `${warDateString}T08:03:13`
    ),
    new Battle(
      new Player(1, 'Post Goats', 339575),
      new Player(4, 'Song x 2', 205105),
      5,
      20,
      true,
      `${warDateString}T08:03:42`
    ),
    new Battle(
      new Player(1, 'doublejam', 231947),
      new Player(4, 'Jokill31', 184481),
      8,
      20,
      true,
      `${warDateString}T08:11:28`
    ),
    new Battle(
      new Player(1, 'doublejam', 231947),
      new Player(4, 'DerVehuel', 178479),
      5,
      20,
      true,
      `${warDateString}T08:11:51`
    ),
    new Battle(
      new Player(1, 'Disciple', 169982),
      new Player(4, 'Juramar', 124090),
      5,
      20,
      true,
      `${warDateString}T08:15:08`
    ),
    new Battle(
      new Player(1, 'Disciple', 169982),
      new Player(4, 'Drenz', 147838),
      6,
      20,
      true,
      `${warDateString}T08:25:43`
    ),
    new Battle(new Player(1, 'KP', 196700), new Player(4, 'Tioaco', 168025), 9, 20, true, `${warDateString}T09:11:03`),
    new Battle(
      new Player(1, 'KP', 196700),
      new Player(4, 'Fenrigul', 162538),
      5,
      20,
      true,
      `${warDateString}T09:12:01`
    ),
    new Battle(
      new Player(1, 'Gom', 278202),
      new Player(4, 'Dinobunny', 215821),
      1,
      20,
      true,
      `${warDateString}T10:12:18`
    ),
    new Battle(
      new Player(1, 'Forblitz', 189006),
      new Player(4, 'Dol', 158177),
      5,
      20,
      true,
      `${warDateString}T10:34:57`
    ),
    new Battle(
      new Player(1, 'Forblitz', 189006),
      new Player(4, 'Julian', 140131),
      5,
      20,
      true,
      `${warDateString}T10:35:17`
    ),
    new Battle(
      new Player(1, 'Dagul', 118803),
      new Player(4, 'Julian', 108864),
      10,
      20,
      true,
      `${warDateString}T10:56:28`
    ),
    new Battle(
      new Player(1, 'Dagul', 118803),
      new Player(4, 'Mac 270072', 108522),
      7,
      20,
      true,
      `${warDateString}T10:56:57`
    ),
    new Battle(
      new Player(1, 'Dikree', 124541),
      new Player(4, 'Tioaco', 86969),
      2,
      20,
      true,
      `${warDateString}T11:04:24`
    ),
    new Battle(
      new Player(1, 'Dikree', 124541),
      new Player(4, 'Jokill31', 89038),
      10,
      20,
      true,
      `${warDateString}T11:04:59`
    ),
    new Battle(new Player(1, 'Dan', 167028), new Player(4, 'Bilbo', 114655), 7, 20, true, `${warDateString}T11:23:29`),
    new Battle(new Player(1, 'Dan', 167028), new Player(4, 'Gi', 127347), 2, 20, true, `${warDateString}T11:24:12`),
    new Battle(
      new Player(1, 'agent_chu', 211726),
      new Player(4, 'EllipticalAid4', 174220),
      8,
      20,
      true,
      `${warDateString}T11:59:01`
    ),
    new Battle(
      new Player(1, 'agent_chu', 211726),
      new Player(4, 'Waldo The Great', 171483),
      1,
      20,
      true,
      `${warDateString}T12:00:31`
    ),
    new Battle(new Player(1, 'Buffy', 84132), new Player(4, 'Dol', 65131), 10, 20, true, `${warDateString}T12:19:09`),
    new Battle(
      new Player(1, 'Buffy', 84132),
      new Player(4, 'EllipticalAid4', 67684),
      10,
      20,
      true,
      `${warDateString}T12:19:38`
    ),
    new Battle(new Player(1, 'Don', 185890), new Player(4, '_sad1_', 166450), 9, 20, true, `${warDateString}T12:28:17`),
    new Battle(new Player(1, 'Don', 185890), new Player(4, 'Bilbo', 164628), 1, 20, true, `${warDateString}T12:29:15`),
    new Battle(
      new Player(4, 'discuas', 181088),
      new Player(1, 'LOD 2020', 203927),
      4,
      11,
      false,
      `${warDateString}T00:16:28`
    ),
    new Battle(
      new Player(4, 'discuas', 181088),
      new Player(1, 'Post Goats', 222122),
      4,
      14,
      false,
      `${warDateString}T00:17:11`
    ),
    new Battle(
      new Player(4, 'Song x 2', 204510),
      new Player(1, 'gertyman', 248819),
      4,
      12,
      false,
      `${warDateString}T02:09:20`
    ),
    new Battle(
      new Player(4, 'Song x 2', 204510),
      new Player(1, 'Gom', 227817),
      4,
      17,
      false,
      `${warDateString}T02:09:48`
    ),
    new Battle(
      new Player(4, 'Fenrigul', 157417),
      new Player(1, 'Buffy', 141474),
      1,
      5,
      false,
      `${warDateString}T03:17:23`
    ),
    new Battle(
      new Player(4, 'Fenrigul', 157417),
      new Player(1, 'Buffy', 141474),
      1,
      15,
      true,
      `${warDateString}T03:18:17`
    ),
    new Battle(
      new Player(4, '--Babababababab', 155432),
      new Player(1, 'gertyman', 248819),
      4,
      2,
      false,
      `${warDateString}T04:55:13`
    ),
    new Battle(
      new Player(4, '--Babababababab', 155432),
      new Player(1, 'LOD 2020', 203927),
      4,
      9,
      true,
      `${warDateString}T04:56:06`
    ),
    new Battle(
      new Player(4, 'Gi', 127347),
      new Player(1, 'gertyman', 248819),
      4,
      3,
      false,
      `${warDateString}T07:46:56`
    ),
    new Battle(
      new Player(4, 'Gi', 127347),
      new Player(1, 'Post Goats', 222122),
      4,
      6,
      true,
      `${warDateString}T07:47:31`
    ),
    new Battle(
      new Player(4, 'Mac 270072', 108522),
      new Player(1, 'Gom', 227817),
      4,
      3,
      true,
      `${warDateString}T09:21:06`
    ),
    new Battle(
      new Player(4, 'Mac 270072', 108522),
      new Player(1, 'gertyman', 248819),
      4,
      3,
      true,
      `${warDateString}T09:26:23`
    ),
    new Battle(
      new Player(4, 'Juramar', 73723),
      new Player(1, 'Don', 65099),
      10,
      15,
      false,
      `${warDateString}T09:39:34`
    ),
    new Battle(new Player(4, 'Juramar', 73723), new Player(1, 'Don', 65099), 10, 5, true, `${warDateString}T09:40:01`),
    new Battle(
      new Player(4, 'TanoOo', 75230),
      new Player(1, 'Sheevara', 77088),
      10,
      20,
      true,
      `${warDateString}T09:40:24`
    ),
    new Battle(
      new Player(4, 'Dinobunny', 127649),
      new Player(1, 'doublejam', 143526),
      3,
      16,
      false,
      `${warDateString}T09:48:11`
    ),
    new Battle(
      new Player(4, 'Waldo The Great', 103955),
      new Player(1, 'doublejam', 143526),
      3,
      4,
      true,
      `${warDateString}T09:50:50`
    ),
    new Battle(
      new Player(4, 'Dinobunny', 128194),
      new Player(1, 'GurraBurra', 142325),
      2,
      17,
      false,
      `${warDateString}T09:52:30`
    ),
    new Battle(
      new Player(4, 'Bilbo', 108885),
      new Player(1, 'Forblitz', 125371),
      2,
      18,
      false,
      `${warDateString}T09:52:43`
    ),
    new Battle(
      new Player(4, 'Bilbo', 108885),
      new Player(1, 'Dagul', 119331),
      3,
      20,
      true,
      `${warDateString}T09:53:23`
    ),
    new Battle(
      new Player(4, 'Waldo The Great', 103955),
      new Player(1, 'GurraBurra', 142325),
      2,
      3,
      true,
      `${warDateString}T09:54:44`
    ),
    new Battle(
      new Player(4, 'EllipticalAid4', 67684),
      new Player(1, 'Forblitz', 125371),
      2,
      2,
      true,
      `${warDateString}T09:56:56`
    ),
    new Battle(
      new Player(4, 'Jokill31', 89038),
      new Player(1, 'wookie', 84422),
      10,
      20,
      true,
      `${warDateString}T10:06:20`
    ),
    new Battle(
      new Player(4, 'Jokill31', 89038),
      new Player(1, 'Fuzzy', 90071),
      3,
      20,
      true,
      `${warDateString}T10:09:51`
    ),
    new Battle(new Player(4, 'Julian', 108864), new Player(1, 'elo', 106486), 3, 20, true, `${warDateString}T10:50:30`),
    new Battle(new Player(4, 'Julian', 108864), new Player(1, 'KP', 96045), 2, 20, true, `${warDateString}T10:51:31`),
    new Battle(new Player(4, 'Dol', 158585), new Player(1, 'Fuzzy', 154019), 5, 5, false, `${warDateString}T11:18:40`),
    new Battle(
      new Player(4, 'Dol', 65131),
      new Player(1, 'Disciple', 82688),
      2,
      14,
      false,
      `${warDateString}T11:22:46`
    ),
    new Battle(
      new Player(4, 'EllipticalAid4', 67684),
      new Player(1, 'Disciple', 82688),
      2,
      6,
      true,
      `${warDateString}T11:26:09`
    ),
    new Battle(
      new Player(4, 'WildWind', 58473),
      new Player(1, 'Buffy', 84135),
      10,
      12,
      false,
      `${warDateString}T11:32:48`
    ),
    new Battle(new Player(4, 'TanoOo', 75230), new Player(1, 'BOTI', 74458), 7, 20, true, `${warDateString}T11:33:27`),
    new Battle(
      new Player(4, 'WildWind', 58473),
      new Player(1, 'Buffy', 84135),
      10,
      8,
      true,
      `${warDateString}T11:33:42`
    ),
    new Battle(
      new Player(4, 'DerVehuel', 178697),
      new Player(1, 'BOTI', 149534),
      5,
      20,
      true,
      `${warDateString}T11:39:03`
    ),
    new Battle(
      new Player(4, 'DerVehuel', 178697),
      new Player(1, 'Disciple', 169982),
      5,
      2,
      false,
      `${warDateString}T11:40:08`
    ),
    new Battle(
      new Player(4, 'Tioaco', 168025),
      new Player(1, 'Sheevara', 152608),
      5,
      20,
      true,
      `${warDateString}T12:33:55`
    ),
    new Battle(
      new Player(4, 'Tioaco', 86969),
      new Player(1, 'agent_chu', 89329),
      7,
      17,
      false,
      `${warDateString}T12:35:19`
    ),
    new Battle(
      new Player(4, 'Drenz', 145123),
      new Player(1, 'wookie', 169312),
      6,
      0,
      false,
      `${warDateString}T12:38:59`
    ),
    new Battle(
      new Player(4, 'Drenz', 80802),
      new Player(1, 'agent_chu', 89329),
      7,
      3,
      true,
      `${warDateString}T12:39:32`
    ),
  ],
  4,
  4,
  667,
  warDateString,
  'Thursday',
  17,
  1,
  1400
);
