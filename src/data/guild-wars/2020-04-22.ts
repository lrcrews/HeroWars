import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-22';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'wookie', 87997),
      new Player(5, 'Wallario', 79023),
      4,
      20,
      true,
      `${warDateString}T03:07:36`
    ),
    new Battle(
      new Player(1, 'wookie', 87997),
      new Player(5, 'Amothep', 80386),
      4,
      20,
      true,
      `${warDateString}T03:08:06`
    ),
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(5, 'Sardine', 268913),
      4,
      20,
      true,
      `${warDateString}T05:21:02`
    ),
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(5, 'Gardakus', 268882),
      4,
      20,
      true,
      `${warDateString}T05:21:27`
    ),
    new Battle(new Player(1, 'BOTI', 74209), new Player(5, '_DAZ_', 58437), 3, 20, true, `${warDateString}T05:38:29`),
    new Battle(new Player(1, 'BOTI', 74209), new Player(5, 'ecka', 61226), 2, 20, true, `${warDateString}T05:39:22`),
    new Battle(
      new Player(1, 'Disciple', 169828),
      new Player(5, 'Wallario', 153550),
      6,
      20,
      true,
      `${warDateString}T05:56:48`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77088),
      new Player(5, 'Anhvilla', 66983),
      7,
      20,
      true,
      `${warDateString}T06:07:35`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77088),
      new Player(5, 'Jeep Jerry', 62682),
      10,
      20,
      true,
      `${warDateString}T06:08:24`
    ),
    new Battle(
      new Player(1, 'Dikree', 175204),
      new Player(5, 'Tfy :)', 147779),
      1,
      20,
      true,
      `${warDateString}T06:09:07`
    ),
    new Battle(
      new Player(1, 'Dikree', 175204),
      new Player(5, 'BIG D', 138543),
      9,
      20,
      true,
      `${warDateString}T06:10:07`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 88128),
      new Player(5, 'Indred Cole', 74087),
      2,
      20,
      true,
      `${warDateString}T06:48:31`
    ),
    new Battle(new Player(1, 'Fuzzy', 88128), new Player(5, 'Revan', 70280), 3, 20, true, `${warDateString}T06:48:57`),
    new Battle(
      new Player(1, 'LOD 2020', 263151),
      new Player(5, 'Saucy', 196529),
      6,
      20,
      true,
      `${warDateString}T06:58:51`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 259742),
      new Player(5, 'MrTom', 205486),
      6,
      20,
      true,
      `${warDateString}T07:21:47`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 259742),
      new Player(5, 'Jeep Jerry', 193864),
      9,
      20,
      true,
      `${warDateString}T07:22:40`
    ),
    new Battle(
      new Player(1, 'doublejam', 143526),
      new Player(5, 'budge', 125917),
      3,
      20,
      true,
      `${warDateString}T07:45:38`
    ),
    new Battle(
      new Player(1, 'doublejam', 231947),
      new Player(5, 'Revan', 184528),
      6,
      20,
      true,
      `${warDateString}T07:46:06`
    ),
    new Battle(new Player(1, 'elo', 105969), new Player(5, 'MrTom', 92494), 7, 20, true, `${warDateString}T07:49:56`),
    new Battle(new Player(1, 'elo', 105969), new Player(5, 'BIG D', 102076), 2, 20, true, `${warDateString}T07:51:53`),
    new Battle(
      new Player(1, 'Forblitz', 188127),
      new Player(5, 'Kifyu', 169982),
      1,
      20,
      true,
      `${warDateString}T08:17:30`
    ),
    new Battle(
      new Player(1, 'Buffy', 84132),
      new Player(5, 'Williepint1982', 72401),
      10,
      20,
      true,
      `${warDateString}T09:38:26`
    ),
    new Battle(new Player(1, 'Buffy', 84132), new Player(5, 'Kifyu', 70987), 10, 20, true, `${warDateString}T09:38:55`),
    new Battle(
      new Player(1, 'Dagul', 118803),
      new Player(5, 'PetrifiedBear', 108973),
      3,
      20,
      true,
      `${warDateString}T10:14:41`
    ),
    new Battle(
      new Player(1, 'Dagul', 118803),
      new Player(5, 'badianchick', 110002),
      10,
      20,
      true,
      `${warDateString}T10:15:10`
    ),
    new Battle(
      new Player(1, 'Post Goats', 334810),
      new Player(5, 'Sardine', 362734),
      5,
      20,
      true,
      `${warDateString}T10:19:16`
    ),
    new Battle(
      new Player(1, 'Disciple', 82688),
      new Player(5, 'Tfy :)', 58083),
      7,
      20,
      true,
      `${warDateString}T10:22:52`
    ),
    new Battle(
      new Player(1, 'KP', 195236),
      new Player(5, 'Anhvilla', 142924),
      5,
      20,
      true,
      `${warDateString}T10:32:13`
    ),
    new Battle(
      new Player(1, 'agent_chu', 211119),
      new Player(5, 'ecka', 171082),
      5,
      20,
      true,
      `${warDateString}T10:33:21`
    ),
    new Battle(new Player(1, 'KP', 195236), new Player(5, 'Amothep', 175808), 8, 20, true, `${warDateString}T10:34:04`),
    new Battle(
      new Player(1, 'agent_chu', 207930),
      new Player(5, 'PetrifiedBear', 196939),
      5,
      20,
      true,
      `${warDateString}T10:35:06`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 263151),
      new Player(5, 'badianchick', 200193),
      5,
      20,
      true,
      `${warDateString}T10:36:08`
    ),
    new Battle(new Player(1, 'Gom', 277388), new Player(5, 'budge', 220416), 5, 20, true, `${warDateString}T10:56:18`),
    new Battle(
      new Player(1, 'Forblitz', 188555),
      new Player(5, 'Indred Cole', 144415),
      5,
      20,
      true,
      `${warDateString}T11:04:44`
    ),
    new Battle(new Player(1, 'Dan', 167028), new Player(5, 'Saucy', 147689), 7, 20, true, `${warDateString}T11:12:18`),
    new Battle(
      new Player(1, 'Dan', 167028),
      new Player(5, 'Angelina', 152305),
      2,
      20,
      true,
      `${warDateString}T11:13:09`
    ),
    new Battle(
      new Player(1, 'Gom', 277388),
      new Player(5, 'Gardakus', 211819),
      1,
      20,
      true,
      `${warDateString}T11:50:08`
    ),
    new Battle(
      new Player(1, 'Don', 184936),
      new Player(5, 'Williepint1982', 130773),
      8,
      20,
      true,
      `${warDateString}T12:25:16`
    ),
    new Battle(new Player(1, 'Don', 174587), new Player(5, '_DAZ_', 166305), 9, 20, true, `${warDateString}T12:26:27`),
    new Battle(
      new Player(1, 'Post Goats', 341135),
      new Player(5, 'Angelina', 281024),
      8,
      20,
      true,
      `${warDateString}T12:41:25`
    ),
    new Battle(
      new Player(5, 'Gardakus', 268882),
      new Player(1, 'gertyman', 248819),
      4,
      20,
      true,
      `${warDateString}T00:03:50`
    ),
    new Battle(
      new Player(5, 'Gardakus', 268882),
      new Player(1, 'Gom', 227817),
      4,
      20,
      true,
      `${warDateString}T00:04:20`
    ),
    new Battle(
      new Player(5, 'Anhvilla', 161655),
      new Player(1, 'Buffy', 141019),
      1,
      20,
      true,
      `${warDateString}T00:49:54`
    ),
    new Battle(
      new Player(5, 'Anhvilla', 161655),
      new Player(1, 'Dagul', 152921),
      9,
      10,
      false,
      `${warDateString}T00:51:41`
    ),
    new Battle(
      new Player(5, 'MrTom', 188343),
      new Player(1, 'Forblitz', 187324),
      8,
      20,
      true,
      `${warDateString}T04:26:15`
    ),
    new Battle(new Player(5, 'MrTom', 188343), new Player(1, 'KP', 195145), 8, 20, true, `${warDateString}T04:26:40`),
    new Battle(new Player(5, 'ecka', 170946), new Player(1, 'Dagul', 152921), 9, 10, true, `${warDateString}T08:09:24`),
    new Battle(
      new Player(5, 'Angelina', 281024),
      new Player(1, 'gertyman', 265524),
      8,
      20,
      true,
      `${warDateString}T09:12:02`
    ),
    new Battle(
      new Player(5, 'Angelina', 281024),
      new Player(1, 'doublejam', 231926),
      1,
      20,
      true,
      `${warDateString}T09:12:59`
    ),
    new Battle(
      new Player(5, 'Sardine', 266223),
      new Player(1, 'Post Goats', 222122),
      4,
      20,
      true,
      `${warDateString}T09:22:54`
    ),
    new Battle(
      new Player(5, 'Sardine', 266223),
      new Player(1, 'LOD 2020', 203413),
      4,
      20,
      true,
      `${warDateString}T09:23:37`
    ),
    new Battle(
      new Player(5, 'Saucy', 147689),
      new Player(1, 'GurraBurra', 141755),
      2,
      20,
      true,
      `${warDateString}T09:26:28`
    ),
    new Battle(
      new Player(5, 'Saucy', 148832),
      new Player(1, 'doublejam', 143526),
      3,
      20,
      true,
      `${warDateString}T09:45:58`
    ),
    new Battle(
      new Player(5, 'Williepint1982', 72401),
      new Player(1, 'Don', 65099),
      10,
      20,
      true,
      `${warDateString}T09:52:58`
    ),
    new Battle(
      new Player(5, 'Williepint1982', 72401),
      new Player(1, 'BOTI', 74209),
      7,
      20,
      true,
      `${warDateString}T09:54:41`
    ),
    new Battle(
      new Player(5, 'budge', 126453),
      new Player(1, 'Dagul', 118803),
      3,
      20,
      true,
      `${warDateString}T10:21:05`
    ),
    new Battle(
      new Player(5, 'budge', 126453),
      new Player(1, 'Forblitz', 124805),
      2,
      20,
      true,
      `${warDateString}T10:22:27`
    ),
    new Battle(
      new Player(5, 'PetrifiedBear', 108973),
      new Player(1, 'elo', 105969),
      3,
      20,
      true,
      `${warDateString}T10:22:33`
    ),
    new Battle(
      new Player(5, 'PetrifiedBear', 108973),
      new Player(1, 'KP', 96045),
      2,
      20,
      true,
      `${warDateString}T10:24:36`
    ),
    new Battle(
      new Player(5, 'ecka', 170946),
      new Player(1, 'wookie', 169176),
      6,
      20,
      true,
      `${warDateString}T10:32:58`
    ),
    new Battle(new Player(5, 'BIG D', 102076), new Player(1, 'Fuzzy', 90071), 3, 20, true, `${warDateString}T10:42:15`),
    new Battle(
      new Player(5, 'Revan', 184528),
      new Player(1, 'Dikree', 175204),
      6,
      20,
      true,
      `${warDateString}T10:43:26`
    ),
    new Battle(
      new Player(5, 'BIG D', 102076),
      new Player(1, 'Disciple', 82358),
      2,
      20,
      true,
      `${warDateString}T10:43:30`
    ),
    new Battle(
      new Player(5, 'Amothep', 80386),
      new Player(1, 'Sheevara', 77088),
      10,
      20,
      true,
      `${warDateString}T10:44:06`
    ),
    new Battle(
      new Player(5, 'Amothep', 80386),
      new Player(1, 'Buffy', 80139),
      10,
      19,
      false,
      `${warDateString}T10:47:21`
    ),
    new Battle(new Player(5, 'Revan', 184718), new Player(1, 'Don', 184936), 6, 10, false, `${warDateString}T10:49:30`),
    new Battle(
      new Player(5, 'badianchick', 110002),
      new Player(1, 'wookie', 84422),
      10,
      20,
      true,
      `${warDateString}T11:03:19`
    ),
    new Battle(
      new Player(5, 'badianchick', 110002),
      new Player(1, 'agent_chu', 88509),
      7,
      20,
      true,
      `${warDateString}T11:05:17`
    ),
    new Battle(
      new Player(5, 'Tfy :)', 150007),
      new Player(1, 'BOTI', 149200),
      5,
      20,
      true,
      `${warDateString}T11:05:52`
    ),
    new Battle(
      new Player(5, 'Jeep Jerry', 190049),
      new Player(1, 'agent_chu', 210799),
      9,
      20,
      true,
      `${warDateString}T11:11:35`
    ),
    new Battle(
      new Player(5, 'Wallario', 79023),
      new Player(1, 'Buffy', 80139),
      10,
      1,
      true,
      `${warDateString}T11:12:37`
    ),
    new Battle(new Player(5, '_DAZ_', 166465), new Player(1, 'Don', 184936), 6, 10, true, `${warDateString}T11:14:31`),
    new Battle(
      new Player(5, 'Tfy :)', 150007),
      new Player(1, 'Fuzzy', 153654),
      5,
      1,
      false,
      `${warDateString}T11:14:32`
    ),
    new Battle(
      new Player(5, 'Wallario', 153613),
      new Player(1, 'Fuzzy', 153654),
      5,
      6,
      false,
      `${warDateString}T11:30:46`
    ),
    new Battle(
      new Player(5, 'Fuzzy', 144731),
      new Player(1, 'Fuzzy', 153654),
      5,
      4,
      false,
      `${warDateString}T11:34:38`
    ),
    new Battle(new Player(5, 'Fuzzy', 144731), new Player(1, 'Fuzzy', 153654), 5, 9, true, `${warDateString}T11:35:24`),
    new Battle(
      new Player(5, 'Jeep Jerry', 190049),
      new Player(1, 'elo', 174539),
      5,
      20,
      true,
      `${warDateString}T11:39:01`
    ),
    new Battle(
      new Player(5, 'Kifyu', 170174),
      new Player(1, 'Sheevara', 151972),
      5,
      20,
      true,
      `${warDateString}T11:52:18`
    ),
    new Battle(
      new Player(5, 'Kifyu', 170174),
      new Player(1, 'Disicple', 166968),
      5,
      20,
      true,
      `${warDateString}T11:54:51`
    ),
    new Battle(new Player(5, '_DAZ_', 163336), new Player(1, 'Dan', 191945), 5, 4, false, `${warDateString}T11:59:54`),
  ],
  3,
  5,
  944,
  warDateString,
  'Wednesday',
  17,
  1,
  1400
);
