import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-01';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'Gom', 228443),
      new Player(6, 'Tonydarat', 218117),
      4,
      20,
      true,
      `${warDateString}T00:31:02`
    ),
    new Battle(new Player(1, 'Gom', 228443), new Player(6, 'Marius', 195045), 4, 20, true, `${warDateString}T00:31:44`),
    new Battle(
      new Player(1, 'wookie', 176812),
      new Player(6, 'Phantom', 161070),
      8,
      20,
      true,
      `${warDateString}T04:14:47`
    ),
    new Battle(
      new Player(1, 'wookie', 176812),
      new Player(6, 'AndreaAnfo1501', 143061),
      8,
      20,
      true,
      `${warDateString}T04:15:15`
    ),
    new Battle(
      new Player(1, 'gertyman', 253872),
      new Player(6, 'Blondu', 238188),
      4,
      20,
      true,
      `${warDateString}T05:47:08`
    ),
    new Battle(
      new Player(1, 'gertyman', 253872),
      new Player(6, 'Aldwiin', 159008),
      4,
      20,
      true,
      `${warDateString}T05:47:27`
    ),
    new Battle(
      new Player(1, 'Dikree', 181528),
      new Player(6, 'ALAN', 161012),
      1,
      2,
      false,
      `${warDateString}T05:53:37`
    ),
    new Battle(new Player(1, 'elo', 112379), new Player(6, 'Antonio', 98234), 3, 20, true, `${warDateString}T06:03:20`),
    new Battle(
      new Player(1, 'elo', 116083),
      new Player(6, 'hama52', 106562),
      10,
      19,
      false,
      `${warDateString}T06:06:46`
    ),
    new Battle(
      new Player(1, 'Dagul', 121450),
      new Player(6, 'TheWicked', 141569),
      7,
      10,
      false,
      `${warDateString}T06:16:55`
    ),
    new Battle(
      new Player(1, 'Dagul', 121450),
      new Player(6, 'Adrian', 109040),
      7,
      20,
      true,
      `${warDateString}T06:17:23`
    ),
    new Battle(new Player(1, 'Dan', 169146), new Player(6, 'JustMe', 153950), 3, 20, true, `${warDateString}T06:20:53`),
    new Battle(
      new Player(1, 'Dan', 169146),
      new Player(6, 'Nightmare', 154275),
      2,
      7,
      false,
      `${warDateString}T06:21:44`
    ),
    new Battle(
      new Player(1, 'Dikree', 127674),
      new Player(6, 'TheWicked', 141569),
      7,
      10,
      true,
      `${warDateString}T06:31:32`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(6, '--Strange Tamer--', 84396),
      7,
      20,
      true,
      `${warDateString}T06:40:00`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(6, 'Phantom', 57508),
      7,
      20,
      true,
      `${warDateString}T06:40:19`
    ),
    new Battle(
      new Player(1, 'Post Goats', 344822),
      new Player(6, 'Blondu', 271852),
      5,
      9,
      false,
      `${warDateString}T06:41:25`
    ),
    new Battle(
      new Player(1, 'Post Goats', 344822),
      new Player(6, 'Blondu', 271852),
      5,
      11,
      true,
      `${warDateString}T06:42:12`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 267764),
      new Player(6, 'JustMe', 251146),
      5,
      20,
      true,
      `${warDateString}T06:46:36`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 267764),
      new Player(6, 'Nightmare', 211849),
      5,
      20,
      true,
      `${warDateString}T06:47:20`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 267408),
      new Player(6, 'Marius', 215148),
      8,
      20,
      true,
      `${warDateString}T06:48:15`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 267408),
      new Player(6, 'TheWicked', 192762),
      5,
      20,
      true,
      `${warDateString}T07:02:28`
    ),
    new Battle(
      new Player(1, 'Disciple', 173284),
      new Player(6, 'Medo', 148190),
      5,
      20,
      true,
      `${warDateString}T07:05:09`
    ),
    new Battle(
      new Player(1, 'Disciple', 173284),
      new Player(6, 'VsEye', 143753),
      5,
      12,
      false,
      `${warDateString}T07:05:49`
    ),
    new Battle(
      new Player(1, 'Forblitz', 127808),
      new Player(6, 'Nightmare', 154275),
      2,
      13,
      true,
      `${warDateString}T07:20:04`
    ),
    new Battle(
      new Player(1, 'Forblitz', 192749),
      new Player(6, 'VsEye', 143753),
      5,
      8,
      true,
      `${warDateString}T07:21:47`
    ),
    new Battle(new Player(1, 'BOTI', 80795), new Player(6, 'VsEye', 64791), 3, 20, true, `${warDateString}T07:32:46`),
    new Battle(new Player(1, 'BOTI', 80795), new Player(6, 'Gaby', 55394), 3, 20, true, `${warDateString}T07:33:36`),
    new Battle(
      new Player(1, 'hotaru086', 107420),
      new Player(6, 'tokyo', 91330),
      2,
      20,
      true,
      `${warDateString}T07:39:54`
    ),
    new Battle(
      new Player(1, 'hotaru086', 107420),
      new Player(6, 'Medo', 69638),
      2,
      20,
      true,
      `${warDateString}T07:40:20`
    ),
    new Battle(
      new Player(1, 'Sheevara', 80395),
      new Player(6, 'ALAN', 52906),
      2,
      20,
      true,
      `${warDateString}T09:05:45`
    ),
    new Battle(
      new Player(1, 'Sheevara', 80395),
      new Player(6, 'Ancaelena', 51530),
      10,
      20,
      true,
      `${warDateString}T09:06:19`
    ),
    new Battle(
      new Player(1, 'agent_chu', 216008),
      new Player(6, 'Adrian', 194099),
      9,
      20,
      true,
      `${warDateString}T09:47:26`
    ),
    new Battle(
      new Player(1, 'agent_chu', 216008),
      new Player(6, 'Thyned', 176219),
      9,
      20,
      true,
      `${warDateString}T09:48:53`
    ),
    new Battle(new Player(1, 'KP', 201671), new Player(6, 'tokyo', 166446), 9, 20, true, `${warDateString}T09:49:30`),
    new Battle(new Player(1, 'KP', 99941), new Player(6, 'hama52', 106562), 10, 1, true, `${warDateString}T09:52:20`),
    new Battle(
      new Player(1, 'Buffy', 88262),
      new Player(6, 'AndreaAnfo1501', 66652),
      10,
      20,
      true,
      `${warDateString}T10:17:17`
    ),
    new Battle(
      new Player(1, 'Buffy', 88262),
      new Player(6, 'Thyned', 68784),
      10,
      20,
      true,
      `${warDateString}T10:17:42`
    ),
    new Battle(new Player(1, 'Don', 190272), new Player(6, 'Gaby', 143238), 6, 20, true, `${warDateString}T12:23:42`),
    new Battle(
      new Player(6, 'Blondu', 238117),
      new Player(1, 'gertyman', 253241),
      4,
      20,
      true,
      `${warDateString}T00:02:03`
    ),
    new Battle(
      new Player(6, 'Tonydarat', 218117),
      new Player(1, 'Post Goats', 224643),
      4,
      17,
      false,
      `${warDateString}T00:51:16`
    ),
    new Battle(
      new Player(6, 'Tonydarat', 218117),
      new Player(1, 'Gom', 228443),
      4,
      11,
      false,
      `${warDateString}T00:51:59`
    ),
    new Battle(new Player(6, 'hama52', 203892), new Player(1, 'Gom', 282976), 1, 20, true, `${warDateString}T01:39:57`),
    new Battle(new Player(6, 'Gaby', 143859), new Player(1, 'Buffy', 150235), 1, 20, true, `${warDateString}T03:27:49`),
    new Battle(
      new Player(6, 'Marius', 195045),
      new Player(1, 'LOD 2020', 207545),
      4,
      19,
      false,
      `${warDateString}T03:33:28`
    ),
    new Battle(new Player(6, 'Marius', 195045), new Player(1, 'Gom', 228443), 4, 9, true, `${warDateString}T03:34:06`),
    new Battle(
      new Player(6, 'Ancaelena', 51530),
      new Player(1, 'LOD 2020', 207545),
      4,
      1,
      true,
      `${warDateString}T03:45:57`
    ),
    new Battle(
      new Player(6, 'tokyo', 91330),
      new Player(1, 'Post Goats', 224643),
      4,
      2,
      false,
      `${warDateString}T04:33:46`
    ),
    new Battle(
      new Player(6, 'Adrian', 109040),
      new Player(1, 'Post Goats', 224643),
      4,
      1,
      true,
      `${warDateString}T04:46:41`
    ),
    new Battle(
      new Player(6, 'Blondu', 263424),
      new Player(1, 'GurraBurra', 268667),
      6,
      3,
      false,
      `${warDateString}T04:51:07`
    ),
    new Battle(
      new Player(6, 'Antonio', 205376),
      new Player(1, 'Don', 190272),
      6,
      20,
      true,
      `${warDateString}T04:52:07`
    ),
    new Battle(
      new Player(6, 'Antonio', 205376),
      new Player(1, 'hotaru086', 182431),
      1,
      20,
      true,
      `${warDateString}T04:53:01`
    ),
    new Battle(new Player(6, 'VsEye', 64791), new Player(1, 'Don', 66898), 10, 20, true, `${warDateString}T04:54:52`),
    new Battle(
      new Player(6, 'VsEye', 64791),
      new Player(1, 'Sheevara', 79544),
      10,
      10,
      false,
      `${warDateString}T04:56:14`
    ),
    new Battle(new Player(6, 'tokyo', 91330), new Player(1, 'Fuzzy', 90893), 3, 20, true, `${warDateString}T05:03:04`),
    new Battle(
      new Player(6, 'Adrian', 109040),
      new Player(1, 'agent_chu', 95544),
      7,
      16,
      false,
      `${warDateString}T05:05:04`
    ),
    new Battle(
      new Player(6, 'Aldwiin', 159607),
      new Player(1, 'Forblitz', 126853),
      2,
      20,
      true,
      `${warDateString}T05:24:49`
    ),
    new Battle(
      new Player(6, 'Aldwiin', 159607),
      new Player(1, 'Dikree', 127674),
      3,
      20,
      true,
      `${warDateString}T05:25:47`
    ),
    new Battle(
      new Player(6, 'Nightmare', 154275),
      new Player(1, 'GurraBurra', 145654),
      3,
      20,
      true,
      `${warDateString}T05:54:15`
    ),
    new Battle(
      new Player(6, 'Nightmare', 154275),
      new Player(1, 'Dan', 167028),
      7,
      20,
      true,
      `${warDateString}T05:55:02`
    ),
    new Battle(
      new Player(6, 'hama52', 106562),
      new Player(1, 'wookie', 88210),
      7,
      20,
      true,
      `${warDateString}T06:06:43`
    ),
    new Battle(
      new Player(6, 'TheWicked', 141569),
      new Player(1, 'Dagul', 122006),
      2,
      20,
      true,
      `${warDateString}T06:09:52`
    ),
    new Battle(
      new Player(6, 'TheWicked', 141569),
      new Player(1, 'elo', 112379),
      7,
      20,
      true,
      `${warDateString}T06:10:44`
    ),
    new Battle(
      new Player(6, 'AndreaAnfo1501', 66652),
      new Player(1, 'BOTI', 80795),
      10,
      15,
      false,
      `${warDateString}T06:24:46`
    ),
    new Battle(
      new Player(6, 'Ancaelena', 51750),
      new Player(1, 'BOTI', 80795),
      10,
      5,
      true,
      `${warDateString}T06:49:36`
    ),
    new Battle(
      new Player(6, '--Strange Tamer--', 84396),
      new Player(1, 'Disciple', 84973),
      10,
      20,
      true,
      `${warDateString}T07:40:36`
    ),
    new Battle(
      new Player(6, '--Strange Tamer--', 84396),
      new Player(1, 'Buffy', 87869),
      3,
      12,
      false,
      `${warDateString}T07:41:38`
    ),
    new Battle(
      new Player(6, 'Gaby', 55394),
      new Player(1, 'Sheevara', 79544),
      10,
      7,
      false,
      `${warDateString}T07:58:03`
    ),
    new Battle(
      new Player(6, 'ALAN', 52906),
      new Player(1, 'Sheevara', 79544),
      10,
      3,
      true,
      `${warDateString}T08:06:52`
    ),
    new Battle(
      new Player(6, 'Medo', 72721),
      new Player(1, 'agent_chu', 95544),
      7,
      4,
      true,
      `${warDateString}T08:25:49`
    ),
    new Battle(new Player(6, 'Medo', 72721), new Player(1, 'Buffy', 87869), 3, 8, true, `${warDateString}T08:26:16`),
    new Battle(
      new Player(6, 'AndreaAnfo1501', 66652),
      new Player(1, 'KP', 99941),
      2,
      8,
      false,
      `${warDateString}T08:46:52`
    ),
    new Battle(
      new Player(6, 'JustMe', 153950),
      new Player(1, 'hotaru086', 98042),
      2,
      20,
      true,
      `${warDateString}T09:24:09`
    ),
    new Battle(
      new Player(6, 'Phantom', 161269),
      new Player(1, 'Dagul', 156481),
      9,
      20,
      true,
      `${warDateString}T09:26:57`
    ),
    new Battle(new Player(6, 'JustMe', 153950), new Player(1, 'KP', 99941), 2, 12, true, `${warDateString}T09:55:15`),
    new Battle(
      new Player(6, 'Phantom', 161269),
      new Player(1, 'Fuzzy', 158212),
      6,
      20,
      true,
      `${warDateString}T09:59:45`
    ),
    new Battle(
      new Player(6, 'ALAN', 164154),
      new Player(1, 'Sheevara', 162922),
      5,
      2,
      false,
      `${warDateString}T10:30:58`
    ),
    new Battle(
      new Player(6, 'Thyned', 180915),
      new Player(1, 'Disciple', 173203),
      5,
      20,
      true,
      `${warDateString}T11:09:21`
    ),
    new Battle(
      new Player(6, 'Thyned', 180915),
      new Player(1, 'wookie', 176787),
      6,
      20,
      true,
      `${warDateString}T11:10:56`
    ),
  ],
  10,
  6,
  905,
  warDateString,
  'Friday',
  18,
  1,
  1182
);
