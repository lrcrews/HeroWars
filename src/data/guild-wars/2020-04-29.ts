import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-29';

export const war = new GuildWar(
  [
    new Battle(new Player(1, 'Gom', 228443), new Player(2, 'En4', 253729), 4, 20, true, `${warDateString}T00:42:57`),
    new Battle(
      new Player(1, 'wookie', 176294),
      new Player(2, 'Bernde', 144755),
      8,
      20,
      true,
      `${warDateString}T03:30:46`
    ),
    new Battle(
      new Player(1, 'wookie', 176294),
      new Player(2, 'Mogor', 160496),
      8,
      20,
      true,
      `${warDateString}T03:31:25`
    ),
    new Battle(new Player(1, 'Dagul', 120915), new Player(2, 'HERO', 124910), 4, 20, true, `${warDateString}T04:45:34`),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(2, 'Regal', 199169),
      4,
      20,
      true,
      `${warDateString}T05:46:29`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(2, 'tntodor', 166378),
      4,
      20,
      true,
      `${warDateString}T05:46:52`
    ),
    new Battle(
      new Player(1, 'Disciple', 83828),
      new Player(2, 'Coop@5280', 72888),
      7,
      20,
      true,
      `${warDateString}T05:52:12`
    ),
    new Battle(
      new Player(1, 'elo', 109727),
      new Player(2, 'NinjaTazzy', 93898),
      7,
      20,
      true,
      `${warDateString}T05:53:15`
    ),
    new Battle(
      new Player(1, 'elo', 109727),
      new Player(2, 'Knight_rider', 95900),
      7,
      20,
      true,
      `${warDateString}T05:54:25`
    ),
    new Battle(new Player(1, 'BOTI', 80295), new Player(2, 'Easton', 65906), 3, 20, true, `${warDateString}T06:29:43`),
    new Battle(
      new Player(1, 'Sheevara', 78729),
      new Player(2, 'AlexLee', 72077),
      2,
      20,
      true,
      `${warDateString}T06:29:46`
    ),
    new Battle(new Player(1, 'BOTI', 80295), new Player(2, 'BadAss', 63947), 10, 20, true, `${warDateString}T06:29:57`),
    new Battle(
      new Player(1, 'Sheevara', 78729),
      new Player(2, 'Galy', 66953),
      10,
      20,
      true,
      `${warDateString}T06:30:29`
    ),
    new Battle(
      new Player(1, 'Dikree', 180914),
      new Player(2, 'Coop@5280', 170525),
      6,
      20,
      true,
      `${warDateString}T06:31:01`
    ),
    new Battle(
      new Player(1, 'Dikree', 180914),
      new Player(2, 'Knight_rider', 163655),
      6,
      20,
      true,
      `${warDateString}T06:32:01`
    ),
    new Battle(
      new Player(1, 'Dagul', 120915),
      new Player(2, 'satoshi93', 97818),
      7,
      20,
      true,
      `${warDateString}T06:55:55`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(2, 'xxAlphaDrunkxx', 86916),
      3,
      20,
      true,
      `${warDateString}T06:56:53`
    ),
    new Battle(
      new Player(1, 'Fuzzy', 90893),
      new Player(2, 'Murdox06', 83952),
      3,
      20,
      true,
      `${warDateString}T06:57:32`
    ),
    new Battle(
      new Player(1, 'Post Goats', 343761),
      new Player(2, 'Marcus', 304130),
      5,
      20,
      true,
      `${warDateString}T06:58:27`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(2, 'Mogor', 74907),
      2,
      20,
      true,
      `${warDateString}T07:02:58`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(2, 'Kai', 78971),
      2,
      20,
      true,
      `${warDateString}T07:03:22`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 267036),
      new Player(2, 'Father Zara', 281731),
      5,
      0,
      false,
      `${warDateString}T07:14:31`
    ),
    new Battle(
      new Player(1, 'Post Goats', 343761),
      new Player(2, 'Father Zara', 281731),
      5,
      0,
      false,
      `${warDateString}T07:17:50`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 267036),
      new Player(2, 'En4', 254826),
      6,
      20,
      true,
      `${warDateString}T07:23:50`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 266895),
      new Player(2, 'BadAss', 211140),
      6,
      20,
      true,
      `${warDateString}T07:23:51`
    ),
    new Battle(
      new Player(1, 'Disciple', 172682),
      new Player(2, 'Panzie81', 146937),
      9,
      20,
      true,
      `${warDateString}T07:33:54`
    ),
    new Battle(
      new Player(1, 'agent_chu', 208732),
      new Player(2, 'NinjaTazzy', 194637),
      1,
      20,
      true,
      `${warDateString}T09:09:20`
    ),
    new Battle(new Player(1, 'Dan', 167028), new Player(2, 'Marcus', 122622), 2, 20, true, `${warDateString}T10:19:54`),
    new Battle(
      new Player(1, 'Dan', 167028),
      new Player(2, 'Father Zara', 137806),
      3,
      20,
      true,
      `${warDateString}T10:20:54`
    ),
    new Battle(
      new Player(1, 'Buffy', 87866),
      new Player(2, 'Panzie81', 76351),
      10,
      20,
      true,
      `${warDateString}T10:49:19`
    ),
    new Battle(
      new Player(1, 'Buffy', 87866),
      new Player(2, 'Bernde', 70929),
      10,
      20,
      true,
      `${warDateString}T10:49:45`
    ),
    new Battle(
      new Player(1, 'Forblitz', 192279),
      new Player(2, 'satoshi93', 161187),
      9,
      20,
      true,
      `${warDateString}T11:02:27`
    ),
    new Battle(
      new Player(1, 'Forblitz', 192279),
      new Player(2, 'Kai', 155051),
      1,
      20,
      true,
      `${warDateString}T11:02:59`
    ),
    new Battle(
      new Player(1, 'Gom', 281354),
      new Player(2, 'tntodor', 215607),
      1,
      20,
      true,
      `${warDateString}T11:16:37`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 269511),
      new Player(2, 'Easton', 207972),
      8,
      20,
      true,
      `${warDateString}T11:42:04`
    ),
    new Battle(new Player(1, 'KP', 199871), new Player(2, 'AlexLee', 137655), 5, 20, true, `${warDateString}T11:48:55`),
    new Battle(new Player(1, 'KP', 199871), new Player(2, 'Galy', 139613), 5, 20, true, `${warDateString}T11:50:14`),
    new Battle(
      new Player(1, 'agent_chu', 212425),
      new Player(2, 'Murdox06', 167614),
      5,
      20,
      true,
      `${warDateString}T11:50:20`
    ),
    new Battle(new Player(1, 'Don', 189592), new Player(2, 'HERO', 173410), 5, 20, true, `${warDateString}T12:29:58`),
    new Battle(
      new Player(1, 'Don', 189592),
      new Player(2, 'xxAlphaDrunkxx', 141730),
      5,
      20,
      true,
      `${warDateString}T12:32:48`
    ),
    new Battle(new Player(2, 'Regal', 199169), new Player(1, 'Gom', 228443), 4, 20, true, `${warDateString}T00:29:59`),
    new Battle(
      new Player(2, 'Regal', 199169),
      new Player(1, 'LOD 2020', 206303),
      4,
      20,
      true,
      `${warDateString}T00:32:12`
    ),
    new Battle(
      new Player(2, 'En4', 253729),
      new Player(1, 'Post Goats', 224012),
      4,
      20,
      true,
      `${warDateString}T02:11:27`
    ),
    new Battle(
      new Player(2, 'En4', 253729),
      new Player(1, 'gertyman', 253241),
      4,
      20,
      true,
      `${warDateString}T02:12:16`
    ),
    new Battle(
      new Player(2, 'satoshi93', 97818),
      new Player(1, 'elo', 109727),
      7,
      20,
      true,
      `${warDateString}T02:17:18`
    ),
    new Battle(
      new Player(2, 'NinjaTazzy', 94398),
      new Player(1, 'Fuzzy', 90893),
      3,
      20,
      true,
      `${warDateString}T02:18:30`
    ),
    new Battle(
      new Player(2, 'satoshi93', 97818),
      new Player(1, 'Forblitz', 126395),
      2,
      20,
      true,
      `${warDateString}T02:18:41`
    ),
    new Battle(
      new Player(2, 'NinjaTazzy', 94398),
      new Player(1, 'agent_chu', 91388),
      7,
      20,
      true,
      `${warDateString}T02:20:11`
    ),
    new Battle(new Player(2, 'HERO', 124910), new Player(1, 'Dagul', 121467), 2, 20, true, `${warDateString}T02:21:18`),
    new Battle(
      new Player(2, 'HERO', 124910),
      new Player(1, 'Dikree', 126057),
      3,
      20,
      true,
      `${warDateString}T02:22:57`
    ),
    new Battle(new Player(2, 'Galy', 66953), new Player(1, 'Don', 66898), 10, 20, true, `${warDateString}T02:34:40`),
    new Battle(
      new Player(2, 'tntodor', 166378),
      new Player(1, 'Dan', 167028),
      7,
      20,
      true,
      `${warDateString}T03:08:31`
    ),
    new Battle(
      new Player(2, 'tntodor', 166378),
      new Player(1, 'GurraBurra', 144795),
      3,
      20,
      true,
      `${warDateString}T03:09:17`
    ),
    new Battle(
      new Player(2, 'Panzie81', 145262),
      new Player(1, 'Buffy', 145884),
      1,
      20,
      true,
      `${warDateString}T03:26:55`
    ),
    new Battle(
      new Player(2, 'Knight_rider', 95900),
      new Player(1, 'KP', 98156),
      2,
      20,
      true,
      `${warDateString}T04:37:45`
    ),
    new Battle(
      new Player(2, 'Knight_rider', 95900),
      new Player(1, 'hotaru086', 98042),
      2,
      20,
      true,
      `${warDateString}T04:38:10`
    ),
    new Battle(
      new Player(2, 'Coop@5280', 72888),
      new Player(1, 'BOTI', 80295),
      10,
      20,
      true,
      `${warDateString}T04:48:55`
    ),
    new Battle(
      new Player(2, 'Coop@5280', 72888),
      new Player(1, 'Sheevara', 78729),
      10,
      20,
      true,
      `${warDateString}T04:49:48`
    ),
    new Battle(
      new Player(2, 'Marcus', 298551),
      new Player(1, 'Post Goats', 343655),
      5,
      13,
      false,
      `${warDateString}T07:45:15`
    ),
    new Battle(
      new Player(2, 'Marcus', 298551),
      new Player(1, 'Post Goats', 343655),
      5,
      7,
      true,
      `${warDateString}T07:47:57`
    ),
    new Battle(
      new Player(2, 'AlexLee', 72767),
      new Player(1, 'Disciple', 83828),
      10,
      14,
      false,
      `${warDateString}T08:05:31`
    ),
    new Battle(
      new Player(2, 'AlexLee', 72767),
      new Player(1, 'Disciple', 83828),
      10,
      6,
      true,
      `${warDateString}T08:05:50`
    ),
    new Battle(
      new Player(2, 'xxAlphaDrunkxx', 86916),
      new Player(1, 'Buffy', 87869),
      3,
      20,
      true,
      `${warDateString}T08:25:50`
    ),
    new Battle(
      new Player(2, 'xxAlphaDrunkxx', 86916),
      new Player(1, 'wookie', 86374),
      7,
      20,
      true,
      `${warDateString}T08:26:40`
    ),
    new Battle(new Player(2, 'Galy', 120130), new Player(1, 'Fuzzy', 156780), 5, 20, true, `${warDateString}T09:35:53`),
    new Battle(
      new Player(2, 'BadAss', 211395),
      new Player(1, 'Disciple', 172682),
      5,
      20,
      true,
      `${warDateString}T09:45:50`
    ),
    new Battle(new Player(2, 'BadAss', 211395), new Player(1, 'elo', 180736), 5, 20, true, `${warDateString}T09:46:20`),
    new Battle(
      new Player(2, 'Murdox06', 172847),
      new Player(1, 'BOTI', 153572),
      5,
      20,
      true,
      `${warDateString}T10:02:42`
    ),
    new Battle(
      new Player(2, 'Murdox06', 172847),
      new Player(1, 'Sheevara', 162596),
      5,
      20,
      true,
      `${warDateString}T10:04:47`
    ),
    new Battle(
      new Player(2, 'Father Zara', 281901),
      new Player(1, 'agent_chu', 214261),
      5,
      20,
      true,
      `${warDateString}T10:07:14`
    ),
    new Battle(
      new Player(2, 'Father Zara', 281901),
      new Player(1, 'LOD 2020', 266895),
      9,
      14,
      false,
      `${warDateString}T10:18:06`
    ),
    new Battle(
      new Player(2, 'Bernde', 145055),
      new Player(1, 'LOD 2020', 266895),
      9,
      2,
      false,
      `${warDateString}T10:33:55`
    ),
    new Battle(
      new Player(2, 'Bernde', 137304),
      new Player(1, 'LOD 2020', 266895),
      9,
      4,
      true,
      `${warDateString}T10:41:14`
    ),
    new Battle(new Player(2, 'Easton', 210403), new Player(1, 'Dan', 191945), 9, 20, true, `${warDateString}T11:02:51`),
    new Battle(new Player(2, 'Kai', 155930), new Player(1, 'Dagul', 155719), 9, 20, true, `${warDateString}T12:25:32`),
    new Battle(new Player(2, 'Kai', 155930), new Player(1, 'Dikree', 175099), 6, 8, false, `${warDateString}T12:29:14`),
    new Battle(
      new Player(2, 'Mogor', 162814),
      new Player(1, 'hotaru86', 172921),
      1,
      4,
      false,
      `${warDateString}T12:40:01`
    ),
    new Battle(
      new Player(2, 'Panzie81', 146180),
      new Player(1, 'wookie', 176248),
      6,
      11,
      false,
      `${warDateString}T12:40:57`
    ),
    new Battle(
      new Player(2, 'Mogor', 162814),
      new Player(1, 'wookie', 176248),
      6,
      9,
      true,
      `${warDateString}T12:44:04`
    ),
    new Battle(
      new Player(2, 'Easton', 210463),
      new Player(1, 'hotaru86', 172921),
      1,
      16,
      true,
      `${warDateString}T12:56:16`
    ),
  ],
  8,
  2,
  1128,
  warDateString,
  'Wednesday',
  18,
  1,
  1200
);
