import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-24';

export const war = new GuildWar(
  [
    new Battle(new Player(1, 'Dagul', 119315), new Player(6, 'tokyo', 89446), 4, 20, true, `${warDateString}T04:04:11`),
    new Battle(
      new Player(1, 'wookie', 171767),
      new Player(6, 'ALAN', 152403),
      1,
      20,
      true,
      `${warDateString}T04:29:15`
    ),
    new Battle(
      new Player(1, 'wookie', 171767),
      new Player(6, 'Ancaelena', 130495),
      1,
      20,
      true,
      `${warDateString}T04:29:56`
    ),
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(6, 'Blondu', 232269),
      4,
      20,
      true,
      `${warDateString}T05:47:10`
    ),
    new Battle(
      new Player(1, 'gertyman', 248819),
      new Player(6, 'Tonydarat', 214294),
      4,
      20,
      true,
      `${warDateString}T05:47:32`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 203189),
      new Player(6, 'Marius', 192892),
      4,
      20,
      true,
      `${warDateString}T06:14:35`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 264055),
      new Player(6, 'hama52', 192661),
      1,
      20,
      true,
      `${warDateString}T06:15:24`
    ),
    new Battle(
      new Player(1, 'Dagul', 119315),
      new Player(6, 'hama52', 104566),
      10,
      20,
      true,
      `${warDateString}T06:32:39`
    ),
    new Battle(
      new Player(1, 'Dan', 167028),
      new Player(6, 'Nightmare', 151399),
      2,
      20,
      true,
      `${warDateString}T06:50:30`
    ),
    new Battle(new Player(1, 'Dan', 167028), new Player(6, 'JustMe', 148506), 3, 20, true, `${warDateString}T06:51:14`),
    new Battle(
      new Player(1, 'Disciple', 83018),
      new Player(6, 'CoskunBayraktar', 61441),
      3,
      20,
      true,
      `${warDateString}T06:57:35`
    ),
    new Battle(
      new Player(1, 'Disciple', 83018),
      new Player(6, 'Medo', 64803),
      3,
      20,
      true,
      `${warDateString}T06:58:29`
    ),
    new Battle(
      new Player(1, 'BOTI', 74458),
      new Player(6, 'd1n06586', 53549),
      2,
      20,
      true,
      `${warDateString}T07:12:48`
    ),
    new Battle(
      new Player(1, 'BOTI', 74458),
      new Player(6, 'Ancaelena', 49127),
      7,
      20,
      true,
      `${warDateString}T07:13:43`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 89501),
      new Player(6, '--Strange Tamer--', 79122),
      2,
      20,
      true,
      `${warDateString}T07:41:49`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 89501),
      new Player(6, 'AndreaAnfo1501', 66002),
      2,
      20,
      true,
      `${warDateString}T07:42:07`
    ),
    new Battle(
      new Player(1, 'Post Goats', 340150),
      new Player(6, 'Blondu', 256045),
      5,
      20,
      true,
      `${warDateString}T07:45:01`
    ),
    new Battle(
      new Player(1, 'Post Goats', 340150),
      new Player(6, 'JustMe', 236835),
      5,
      20,
      true,
      `${warDateString}T07:45:25`
    ),
    new Battle(new Player(1, 'Gom', 279584), new Player(6, 'Adrian', 187011), 8, 20, true, `${warDateString}T07:49:34`),
    new Battle(
      new Player(1, 'Gom', 279584),
      new Player(6, 'TheWicked', 193991),
      9,
      20,
      true,
      `${warDateString}T07:50:12`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77418),
      new Player(6, 'Gaby', 53065),
      3,
      20,
      true,
      `${warDateString}T07:55:18`
    ),
    new Battle(
      new Player(1, 'Sheevara', 77418),
      new Player(6, 'VsEye', 62348),
      10,
      20,
      true,
      `${warDateString}T07:56:02`
    ),
    new Battle(
      new Player(1, 'elo', 106833),
      new Player(6, 'Adrian', 104610),
      7,
      18,
      false,
      `${warDateString}T08:46:57`
    ),
    new Battle(new Player(1, 'elo', 106833), new Player(6, 'Phantom', 54596), 7, 20, true, `${warDateString}T09:01:37`),
    new Battle(
      new Player(1, 'doublejam', 232178),
      new Player(6, 'CoskunBayraktar', 111741),
      5,
      20,
      true,
      `${warDateString}T09:15:16`
    ),
    new Battle(
      new Player(1, 'KP', 197074),
      new Player(6, 'Tonydarat', 152872),
      5,
      20,
      true,
      `${warDateString}T09:39:18`
    ),
    new Battle(new Player(1, 'KP', 96045), new Player(6, 'Adrian', 104610), 7, 2, true, `${warDateString}T09:57:32`),
    new Battle(
      new Player(1, 'agent_chu', 211871),
      new Player(6, 'Thyned', 170180),
      9,
      20,
      true,
      `${warDateString}T10:14:41`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 261066),
      new Player(6, 'Marius', 209836),
      6,
      20,
      true,
      `${warDateString}T10:15:51`
    ),
    new Battle(
      new Player(1, 'agent_chu', 208517),
      new Player(6, '--Strange Tamer--', 163859),
      6,
      20,
      true,
      `${warDateString}T10:16:24`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 261066),
      new Player(6, 'Nightmare', 207921),
      5,
      20,
      true,
      `${warDateString}T10:16:45`
    ),
    new Battle(
      new Player(1, 'Forblitz', 189848),
      new Player(6, 'Medo', 144860),
      5,
      20,
      true,
      `${warDateString}T10:48:01`
    ),
    new Battle(
      new Player(1, 'Forblitz', 189848),
      new Player(6, 'd1n06586', 136491),
      5,
      20,
      true,
      `${warDateString}T10:48:23`
    ),
    new Battle(
      new Player(1, 'Buffy', 84991),
      new Player(6, 'Thyned', 65169),
      10,
      20,
      true,
      `${warDateString}T10:54:52`
    ),
    new Battle(new Player(1, 'Buffy', 84991), new Player(6, 'ALAN', 50550), 10, 20, true, `${warDateString}T10:55:15`),
    new Battle(
      new Player(1, 'doublejam', 143526),
      new Player(6, 'TheWicked', 137417),
      7,
      20,
      true,
      `${warDateString}T11:02:58`
    ),
    new Battle(
      new Player(1, 'Dikree', 176741),
      new Player(6, 'Gaby', 135873),
      6,
      20,
      true,
      `${warDateString}T11:30:50`
    ),
    new Battle(
      new Player(1, 'Dikree', 176741),
      new Player(6, 'VsEye', 135409),
      6,
      20,
      true,
      `${warDateString}T11:31:28`
    ),
    new Battle(new Player(1, 'Don', 186270), new Player(6, 'tokyo', 164336), 9, 20, true, `${warDateString}T12:37:05`),
    new Battle(
      new Player(1, 'Don', 186270),
      new Player(6, 'Phantom', 156657),
      8,
      20,
      true,
      `${warDateString}T12:37:32`
    ),
    new Battle(
      new Player(6, 'Blondu', 227250),
      new Player(1, 'gertyman', 248819),
      4,
      15,
      false,
      `${warDateString}T00:01:18`
    ),
    new Battle(new Player(6, 'Blondu', 232269), new Player(1, 'Gom', 227817), 4, 20, true, `${warDateString}T00:02:30`),
    new Battle(
      new Player(6, 'TheWicked', 137417),
      new Player(1, 'gertyman', 248819),
      4,
      5,
      true,
      `${warDateString}T02:16:55`
    ),
    new Battle(
      new Player(6, 'Tonydarat', 214294),
      new Player(1, 'LOD 2020', 203927),
      4,
      20,
      true,
      `${warDateString}T02:44:11`
    ),
    new Battle(
      new Player(6, 'Tonydarat', 214294),
      new Player(1, 'Post Goats', 222751),
      4,
      18,
      false,
      `${warDateString}T02:45:56`
    ),
    new Battle(
      new Player(6, 'JustMe', 148506),
      new Player(1, 'Post Goats', 222751),
      4,
      2,
      true,
      `${warDateString}T03:14:10`
    ),
    new Battle(new Player(6, 'Marius', 192892), new Player(1, 'Dan', 167028), 7, 20, true, `${warDateString}T03:16:47`),
    new Battle(
      new Player(6, 'Marius', 192892),
      new Player(1, 'doublejam', 143526),
      3,
      20,
      true,
      `${warDateString}T03:17:29`
    ),
    new Battle(new Player(6, 'Medo', 64803), new Player(1, 'Don', 65099), 10, 15, false, `${warDateString}T03:18:25`),
    new Battle(
      new Player(6, 'AndreaAnfo1501', 66327),
      new Player(1, 'Sheevara', 77418),
      10,
      17,
      false,
      `${warDateString}T03:18:47`
    ),
    new Battle(
      new Player(6, 'AndreaAnfo1501', 66327),
      new Player(1, 'Disciple', 83018),
      2,
      10,
      false,
      `${warDateString}T03:19:54`
    ),
    new Battle(
      new Player(6, 'Nightmare', 151971),
      new Player(1, 'Dagul', 119863),
      3,
      20,
      true,
      `${warDateString}T03:22:29`
    ),
    new Battle(
      new Player(6, 'Nightmare', 151971),
      new Player(1, 'GurraBurra', 142325),
      2,
      20,
      true,
      `${warDateString}T03:23:16`
    ),
    new Battle(
      new Player(6, 'hama52', 104566),
      new Player(1, 'Forblitz', 125825),
      2,
      16,
      false,
      `${warDateString}T03:45:55`
    ),
    new Battle(
      new Player(6, 'Ancaelena', 49127),
      new Player(1, 'Sheevara', 77418),
      10,
      3,
      true,
      `${warDateString}T04:04:28`
    ),
    new Battle(new Player(6, 'Gaby', 53065), new Player(1, 'Don', 65099), 10, 5, true, `${warDateString}T04:05:26`),
    new Battle(new Player(6, 'tokyo', 89446), new Player(1, 'Fuzzy', 90480), 3, 20, true, `${warDateString}T04:09:25`),
    new Battle(new Player(6, 'tokyo', 89446), new Player(1, 'KP', 96045), 2, 20, true, `${warDateString}T04:10:56`),
    new Battle(
      new Player(6, '--Strange Tamer--', 79122),
      new Player(1, 'Buffy', 84994),
      10,
      17,
      false,
      `${warDateString}T04:25:59`
    ),
    new Battle(new Player(6, 'Medo', 64803), new Player(1, 'BOTI', 74458), 7, 13, false, `${warDateString}T04:26:20`),
    new Battle(
      new Player(6, '--Strange Tamer--', 79122),
      new Player(1, 'wookie', 85027),
      10,
      17,
      false,
      `${warDateString}T04:29:23`
    ),
    new Battle(new Player(6, 'VsEye', 62348), new Player(1, 'BOTI', 74458), 7, 7, true, `${warDateString}T05:13:40`),
    new Battle(
      new Player(6, 'VsEye', 62348),
      new Player(1, 'Disciple', 83018),
      2,
      10,
      true,
      `${warDateString}T05:14:39`
    ),
    new Battle(
      new Player(6, 'TheWicked', 137417),
      new Player(1, 'Dikree', 124541),
      7,
      20,
      true,
      `${warDateString}T05:19:23`
    ),
    new Battle(
      new Player(6, 'CoskunBayraktar', 63919),
      new Player(1, 'wookie', 85027),
      10,
      3,
      true,
      `${warDateString}T05:44:20`
    ),
    new Battle(
      new Player(6, 'CoskunBayraktar', 63919),
      new Player(1, 'Forblitz', 125825),
      2,
      4,
      true,
      `${warDateString}T05:45:05`
    ),
    new Battle(
      new Player(6, 'd1n06586', 53549),
      new Player(1, 'Buffy', 84994),
      10,
      3,
      true,
      `${warDateString}T06:07:41`
    ),
    new Battle(new Player(6, 'ALAN', 153422), new Player(1, 'elo', 177081), 5, 4, false, `${warDateString}T06:33:56`),
    new Battle(new Player(6, 'hama52', 194049), new Player(1, 'Dan', 191945), 5, 20, true, `${warDateString}T06:57:32`),
    new Battle(new Player(6, 'Adrian', 104610), new Player(1, 'elo', 106833), 3, 20, true, `${warDateString}T07:50:24`),
    new Battle(
      new Player(6, 'Adrian', 104610),
      new Player(1, 'agent_chu', 89329),
      7,
      20,
      true,
      `${warDateString}T07:54:30`
    ),
    new Battle(
      new Player(6, 'Thyned', 174788),
      new Player(1, 'Fuzzy', 154022),
      5,
      20,
      true,
      `${warDateString}T08:44:40`
    ),
    new Battle(
      new Player(6, 'Thyned', 177903),
      new Player(1, 'Disciple', 170475),
      5,
      20,
      true,
      `${warDateString}T08:51:28`
    ),
    new Battle(
      new Player(6, 'Phantom', 156825),
      new Player(1, 'Sheevara', 153031),
      5,
      11,
      false,
      `${warDateString}T08:59:12`
    ),
    new Battle(
      new Player(6, 'Phantom', 156825),
      new Player(1, 'BOTI', 149534),
      5,
      20,
      true,
      `${warDateString}T09:03:15`
    ),
    new Battle(new Player(6, 'Gaby', 136064), new Player(1, 'Buffy', 142358), 1, 20, true, `${warDateString}T09:13:09`),
    new Battle(new Player(6, 'ALAN', 153422), new Player(1, 'Dagul', 154079), 9, 0, false, `${warDateString}T09:18:12`),
    new Battle(
      new Player(6, 'd1n06586', 136537),
      new Player(1, 'Sheevara', 153031),
      5,
      9,
      true,
      `${warDateString}T09:18:14`
    ),
    new Battle(
      new Player(6, 'Ancaelena', 133225),
      new Player(1, 'elo', 177081),
      5,
      6,
      false,
      `${warDateString}T09:41:03`
    ),
    new Battle(
      new Player(6, 'JustMe', 236835),
      new Player(1, 'Dikree', 176741),
      6,
      20,
      true,
      `${warDateString}T09:56:11`
    ),
  ],
  5,
  6,
  850,
  warDateString,
  'Friday',
  17,
  1,
  1340
);
