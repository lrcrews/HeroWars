import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-21';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'doublejam', 142585),
      new Player(2, 'HERO', 122235),
      4,
      20,
      true,
      `${warDateString}T03:54:51`
    ),
    new Battle(
      new Player(1, 'gertyman', 246321),
      new Player(2, 'Regal', 122235),
      4,
      20,
      true,
      `${warDateString}T04:30:39`
    ),
    new Battle(
      new Player(1, 'gertyman', 246321),
      new Player(2, 'En4', 251772),
      4,
      20,
      true,
      `${warDateString}T04:31:14`
    ),
    new Battle(
      new Player(1, 'wookie', 169075),
      new Player(2, 'xxAlphaDrunkxx', 137171),
      9,
      20,
      true,
      `${warDateString}T05:39:35`
    ),
    new Battle(
      new Player(1, 'wookie', 169075),
      new Player(2, 'AlexLee', 127988),
      1,
      20,
      true,
      `${warDateString}T05:40:03`
    ),
    new Battle(
      new Player(1, 'Dan', 165870),
      new Player(2, 'tntodor', 163513),
      4,
      20,
      true,
      `${warDateString}T05:46:50`
    ),
    new Battle(new Player(1, 'Dan', 165870), new Player(2, 'Marcus', 119362), 2, 20, true, `${warDateString}T05:50:21`),
    new Battle(
      new Player(1, 'Dikree', 119569),
      new Player(2, 'Panzie81', 73149),
      10,
      20,
      true,
      `${warDateString}T05:59:20`
    ),
    new Battle(
      new Player(1, 'Dikree', 174949),
      new Player(2, 'Mogor', 148472),
      6,
      20,
      true,
      `${warDateString}T06:00:03`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 259166),
      new Player(2, 'Regal', 244457),
      9,
      20,
      true,
      `${warDateString}T06:17:17`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 259166),
      new Player(2, 'tntodor', 243421),
      1,
      20,
      true,
      `${warDateString}T06:18:13`
    ),
    new Battle(new Player(1, 'BOTI', 74209), new Player(2, 'BadAss', 63632), 10, 20, true, `${warDateString}T06:23:13`),
    new Battle(
      new Player(1, 'Disciple', 81882),
      new Player(2, 'Easton', 65136),
      3,
      20,
      true,
      `${warDateString}T06:23:28`
    ),
    new Battle(
      new Player(1, 'BOTI', 74209),
      new Player(2, 'galy.yang', 64361),
      10,
      9,
      false,
      `${warDateString}T06:24:12`
    ),
    new Battle(
      new Player(1, 'Disciple', 81882),
      new Player(2, 'Coop@5280', 71702),
      3,
      20,
      true,
      `${warDateString}T06:24:27`
    ),
    new Battle(
      new Player(1, 'Sheevara', 76436),
      new Player(2, 'Bernde', 69352),
      10,
      20,
      true,
      `${warDateString}T06:26:10`
    ),
    new Battle(
      new Player(1, 'Sheevara', 76436),
      new Player(2, "Booz'r", 65164),
      7,
      20,
      true,
      `${warDateString}T06:27:09`
    ),
    new Battle(
      new Player(1, 'Dagul', 118274),
      new Player(2, 'Father Zara', 111931),
      3,
      15,
      false,
      `${warDateString}T06:31:37`
    ),
    new Battle(
      new Player(1, 'Dagul', 118274),
      new Player(2, 'satoshi93', 91240),
      7,
      20,
      true,
      `${warDateString}T06:32:16`
    ),
    new Battle(new Player(1, 'Gom', 277053), new Player(2, 'BadAss', 202358), 9, 20, true, `${warDateString}T07:29:15`),
    new Battle(
      new Player(1, 'Forblitz', 187000),
      new Player(2, 'satoshi93', 154678),
      6,
      20,
      true,
      `${warDateString}T07:40:17`
    ),
    new Battle(
      new Player(1, 'Forblitz', 124805),
      new Player(2, 'Father Zara', 111931),
      3,
      5,
      true,
      `${warDateString}T07:41:59`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 262896),
      new Player(2, 'NinjaTazzy', 192386),
      1,
      20,
      true,
      `${warDateString}T08:05:59`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 262896),
      new Player(2, 'Coop@5280', 170371),
      6,
      20,
      true,
      `${warDateString}T08:07:10`
    ),
    new Battle(
      new Player(1, 'elo', 105447),
      new Player(2, 'NinjaTazzy', 90074),
      7,
      20,
      true,
      `${warDateString}T08:12:47`
    ),
    new Battle(
      new Player(1, 'elo', 105447),
      new Player(2, 'xxAlphaDrunkxx', 84583),
      7,
      20,
      true,
      `${warDateString}T08:13:45`
    ),
    new Battle(
      new Player(1, 'Post Goats', 338478),
      new Player(2, 'Marcus', 290434),
      5,
      20,
      true,
      `${warDateString}T08:21:18`
    ),
    new Battle(
      new Player(1, 'Buffy', 80136),
      new Player(2, 'AlexLee', 70466),
      2,
      20,
      true,
      `${warDateString}T08:37:53`
    ),
    new Battle(new Player(1, 'Buffy', 80136), new Player(2, 'Mogor', 68755), 2, 20, true, `${warDateString}T08:38:24`),
    new Battle(new Player(1, 'Fuzzy', 88128), new Player(2, 'Kai', 74763), 2, 20, true, `${warDateString}T08:39:47`),
    new Battle(
      new Player(1, 'Fuzzy', 88128),
      new Player(2, 'Murdox06', 78274),
      3,
      20,
      true,
      `${warDateString}T08:40:21`
    ),
    new Battle(
      new Player(1, 'KP', 195103),
      new Player(2, 'galy.yang', 136920),
      5,
      20,
      true,
      `${warDateString}T09:17:27`
    ),
    new Battle(new Player(1, 'KP', 195103), new Player(2, 'Bernde', 135628), 5, 20, true, `${warDateString}T09:18:25`),
    new Battle(
      new Player(1, 'Don', 184407),
      new Player(2, 'Panzie81', 141278),
      5,
      20,
      true,
      `${warDateString}T09:44:56`
    ),
    new Battle(
      new Player(1, 'agent_chu', 207530),
      new Player(2, 'Murdox06', 163421),
      5,
      20,
      true,
      `${warDateString}T09:48:31`
    ),
    new Battle(
      new Player(1, 'agent_chu', 210799),
      new Player(2, 'Kai', 148433),
      5,
      20,
      true,
      `${warDateString}T09:49:23`
    ),
    new Battle(
      new Player(1, 'doublejam', 231504),
      new Player(2, 'HERO', 164318),
      5,
      20,
      true,
      `${warDateString}T10:48:48`
    ),
    new Battle(
      new Player(1, 'Post Goats', 340649),
      new Player(2, 'En4', 256709),
      6,
      20,
      true,
      `${warDateString}T11:01:33`
    ),
    new Battle(
      new Player(1, 'Gom', 227817),
      new Player(2, 'galy.yang', 64361),
      10,
      11,
      true,
      `${warDateString}T12:32:50`
    ),
    new Battle(new Player(1, 'Don', 184407), new Player(2, "Booz'r", 127902), 8, 20, true, `${warDateString}T12:36:03`),
    new Battle(
      new Player(2, 'Regal', 197901),
      new Player(1, 'LOD 2020', 203413),
      4,
      20,
      true,
      `${warDateString}T00:20:19`
    ),
    new Battle(new Player(2, 'Regal', 197901), new Player(1, 'Gom', 227185), 4, 20, true, `${warDateString}T00:21:07`),
    new Battle(new Player(2, 'Marcus', 282837), new Player(1, 'Gom', 276951), 1, 2, false, `${warDateString}T01:03:48`),
    new Battle(
      new Player(2, 'Marcus', 282837),
      new Player(1, 'doublejam', 231681),
      1,
      20,
      true,
      `${warDateString}T01:08:26`
    ),
    new Battle(
      new Player(2, 'En4', 251772),
      new Player(1, 'gertyman', 246321),
      4,
      16,
      false,
      `${warDateString}T01:36:38`
    ),
    new Battle(
      new Player(2, 'En4', 251772),
      new Player(1, 'Post Goats', 221494),
      4,
      20,
      true,
      `${warDateString}T01:37:18`
    ),
    new Battle(
      new Player(2, 'Mogor', 68755),
      new Player(1, 'gertyman', 246321),
      4,
      0,
      false,
      `${warDateString}T02:23:43`
    ),
    new Battle(
      new Player(2, 'NinjaTazzy', 90074),
      new Player(1, 'gertyman', 246321),
      4,
      3,
      false,
      `${warDateString}T03:32:33`
    ),
    new Battle(
      new Player(2, 'AlexLee', 70466),
      new Player(1, 'gertyman', 246321),
      4,
      1,
      true,
      `${warDateString}T04:11:31`
    ),
    new Battle(
      new Player(2, 'tntodor', 163513),
      new Player(1, 'doublejam', 142585),
      3,
      20,
      true,
      `${warDateString}T04:12:19`
    ),
    new Battle(new Player(2, 'AlexLee', 70466), new Player(1, 'BOTI', 74209), 7, 20, true, `${warDateString}T04:12:44`),
    new Battle(
      new Player(2, 'tntodor', 163513),
      new Player(1, 'Dan', 165870),
      7,
      20,
      true,
      `${warDateString}T04:13:03`
    ),
    new Battle(
      new Player(2, 'NinjaTazzy', 90074),
      new Player(1, 'Buffy', 80139),
      10,
      20,
      true,
      `${warDateString}T04:18:38`
    ),
    new Battle(
      new Player(2, 'Coop@5280', 71702),
      new Player(1, 'Disciple', 81405),
      2,
      14,
      false,
      `${warDateString}T04:50:14`
    ),
    new Battle(
      new Player(2, 'Coop@5280', 71702),
      new Player(1, 'KP', 96045),
      2,
      15,
      false,
      `${warDateString}T04:51:44`
    ),
    new Battle(new Player(2, 'Mogor', 68755), new Player(1, 'Don', 65099), 10, 20, true, `${warDateString}T04:52:51`),
    new Battle(new Player(2, 'galy.yang', 64361), new Player(1, 'KP', 96045), 2, 5, true, `${warDateString}T05:21:45`),
    new Battle(
      new Player(2, 'galy.yang', 64361),
      new Player(1, 'Disciple', 81405),
      2,
      6,
      true,
      `${warDateString}T05:22:35`
    ),
    new Battle(
      new Player(2, 'Bernde', 69352),
      new Player(1, 'Sheevara', 76436),
      10,
      11,
      false,
      `${warDateString}T05:27:04`
    ),
    new Battle(
      new Player(2, 'Bernde', 69352),
      new Player(1, 'Sheevara', 76436),
      10,
      9,
      true,
      `${warDateString}T05:27:41`
    ),
    new Battle(
      new Player(2, 'Father Zara', 111931),
      new Player(1, 'elo', 105447),
      3,
      20,
      true,
      `${warDateString}T06:38:13`
    ),
    new Battle(
      new Player(2, 'satoshi93', 91240),
      new Player(1, 'Forblitz', 124353),
      2,
      19,
      false,
      `${warDateString}T06:51:31`
    ),
    new Battle(
      new Player(2, 'satoshi93', 91240),
      new Player(1, 'Dikree', 119150),
      7,
      15,
      false,
      `${warDateString}T06:52:11`
    ),
    new Battle(
      new Player(2, 'Panzie81', 73479),
      new Player(1, 'Dikree', 119150),
      7,
      5,
      true,
      `${warDateString}T07:47:26`
    ),
    new Battle(
      new Player(2, 'Panzie81', 73479),
      new Player(1, 'Forblitz', 124353),
      2,
      1,
      true,
      `${warDateString}T07:48:28`
    ),
    new Battle(new Player(2, 'Kai', 78559), new Player(1, 'wookie', 84422), 10, 14, false, `${warDateString}T07:58:31`),
    new Battle(
      new Player(2, 'Kai', 78559),
      new Player(1, 'agent_chu', 84280),
      7,
      14,
      false,
      `${warDateString}T07:59:33`
    ),
    new Battle(
      new Player(2, 'xxAlphaDrunkxx', 84583),
      new Player(1, 'wookie', 84422),
      10,
      6,
      true,
      `${warDateString}T08:06:05`
    ),
    new Battle(
      new Player(2, 'xxAlphaDrunkxx', 84583),
      new Player(1, 'Fuzzy', 90071),
      3,
      20,
      true,
      `${warDateString}T08:17:03`
    ),
    new Battle(new Player(2, 'HERO', 122235), new Player(1, 'Dagul', 118274), 3, 20, true, `${warDateString}T08:49:06`),
    new Battle(
      new Player(2, 'HERO', 122235),
      new Player(1, 'GurraBurra', 141755),
      2,
      15,
      false,
      `${warDateString}T08:51:14`
    ),
    new Battle(
      new Player(2, "Booz'r", 59325),
      new Player(1, 'agent_chu', 84280),
      7,
      6,
      true,
      `${warDateString}T09:47:16`
    ),
    new Battle(
      new Player(2, "Booz'r", 59325),
      new Player(1, 'GurraBurra', 141755),
      2,
      0,
      false,
      `${warDateString}T09:50:49`
    ),
    new Battle(
      new Player(2, 'Father Zara', 237139),
      new Player(1, 'Gom', 276951),
      1,
      18,
      true,
      `${warDateString}T10:51:47`
    ),
    new Battle(
      new Player(2, 'Murdox06', 163421),
      new Player(1, 'Buffy', 140079),
      1,
      20,
      true,
      `${warDateString}T10:55:30`
    ),
    new Battle(
      new Player(2, 'Murdox06', 78274),
      new Player(1, 'GurraBurra', 141755),
      2,
      5,
      true,
      `${warDateString}T11:01:09`
    ),
    new Battle(new Player(2, 'BadAss', 204426), new Player(1, 'elo', 169627), 5, 20, true, `${warDateString}T11:39:16`),
    new Battle(
      new Player(2, 'BadAss', 204426),
      new Player(1, 'Disciple', 166000),
      5,
      20,
      true,
      `${warDateString}T11:39:49`
    ),
    new Battle(
      new Player(2, 'Easton', 205294),
      new Player(1, 'Sheevara', 150877),
      5,
      20,
      true,
      `${warDateString}T11:48:07`
    ),
    new Battle(
      new Player(2, 'Easton', 205294),
      new Player(1, 'BOTI', 149200),
      5,
      20,
      true,
      `${warDateString}T11:48:35`
    ),
  ],
  2,
  2,
  880,
  warDateString,
  'Tuesday',
  17,
  1,
  1320
);
