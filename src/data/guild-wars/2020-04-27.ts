import { Battle } from '../../models/battle';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-27';

export const war = new GuildWar(
  [
    new Battle(
      new Player(1, 'Gom', 228443),
      new Player(6, 'Song x 2', 206834),
      4,
      20,
      true,
      `${warDateString}T00:35:40`
    ),
    new Battle(
      new Player(1, 'Gom', 228443),
      new Player(6, 'discuas', 181621),
      4,
      20,
      true,
      `${warDateString}T00:36:06`
    ),
    new Battle(
      new Player(1, 'wookie', 176041),
      new Player(6, 'EllipticalAid4', 177814),
      9,
      20,
      true,
      `${warDateString}T04:52:17`
    ),
    new Battle(
      new Player(1, 'wookie', 176041),
      new Player(6, 'Bilbo', 165753),
      8,
      20,
      true,
      `${warDateString}T05:13:01`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(6, '--Babababababab', 161531),
      4,
      20,
      true,
      `${warDateString}T05:46:53`
    ),
    new Battle(
      new Player(1, 'gertyman', 253241),
      new Player(6, 'Dinobunny', 128732),
      4,
      20,
      true,
      `${warDateString}T08:11:03`
    ),
    new Battle(
      new Player(1, 'Dagul', 120379),
      new Player(6, 'Julian', 109846),
      10,
      20,
      true,
      `${warDateString}T08:15:31`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(6, 'WildWind', 88606),
      2,
      20,
      true,
      `${warDateString}T08:15:48`
    ),
    new Battle(
      new Player(1, 'Dagul', 120379),
      new Player(6, 'Mac 270072', 108959),
      10,
      20,
      true,
      `${warDateString}T08:15:58`
    ),
    new Battle(
      new Player(1, 'hotaru086', 98042),
      new Player(6, 'Tioaco', 88652),
      7,
      20,
      true,
      `${warDateString}T08:16:23`
    ),
    new Battle(new Player(1, 'BOTI', 74707), new Player(6, 'Dol', 65371), 3, 20, true, `${warDateString}T08:31:38`),
    new Battle(
      new Player(1, 'BOTI', 74707),
      new Player(6, 'Fenrigul', 50841),
      2,
      20,
      true,
      `${warDateString}T08:32:17`
    ),
    new Battle(
      new Player(1, 'Sheevara', 78409),
      new Player(6, 'Juramar', 75229),
      10,
      20,
      true,
      `${warDateString}T08:37:09`
    ),
    new Battle(
      new Player(1, 'Sheevara', 78409),
      new Player(6, 'EllipticalAid4', 68733),
      10,
      20,
      true,
      `${warDateString}T08:37:38`
    ),
    new Battle(new Player(1, 'Fuzzy', 90480), new Player(6, 'Drenz', 82574), 2, 20, true, `${warDateString}T08:53:29`),
    new Battle(
      new Player(1, 'Fuzzy', 90480),
      new Player(6, 'DerVehuel', 84584),
      7,
      20,
      true,
      `${warDateString}T08:54:09`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 266085),
      new Player(6, 'Gi', 224230),
      6,
      20,
      true,
      `${warDateString}T09:04:52`
    ),
    new Battle(
      new Player(1, 'GurraBurra', 266085),
      new Player(6, 'Jokill31', 202432),
      8,
      20,
      true,
      `${warDateString}T09:05:32`
    ),
    new Battle(
      new Player(1, 'KP', 199091),
      new Player(6, 'Waldo The Great', 176115),
      6,
      20,
      true,
      `${warDateString}T09:25:03`
    ),
    new Battle(new Player(1, 'KP', 199091), new Player(6, 'Tioaco', 168163), 9, 20, true, `${warDateString}T09:27:47`),
    new Battle(
      new Player(1, 'elo', 107535),
      new Player(6, 'Waldo The Great', 103955),
      3,
      20,
      true,
      `${warDateString}T09:48:45`
    ),
    new Battle(
      new Player(1, 'Dikree', 125077),
      new Player(6, 'Bilbo', 116194),
      7,
      20,
      true,
      `${warDateString}T10:14:39`
    ),
    new Battle(
      new Player(1, 'Dikree', 180641),
      new Player(6, 'WildWind', 142813),
      6,
      20,
      true,
      `${warDateString}T10:15:53`
    ),
    new Battle(new Player(1, 'Buffy', 87456), new Player(6, '_sad1_', 76255), 7, 20, true, `${warDateString}T11:24:46`),
    new Battle(new Player(1, 'Buffy', 87456), new Player(6, 'TanoOo', 76152), 3, 20, true, `${warDateString}T11:25:18`),
    new Battle(
      new Player(1, 'Forblitz', 190269),
      new Player(6, 'Fenrigul', 163134),
      5,
      20,
      true,
      `${warDateString}T11:27:40`
    ),
    new Battle(
      new Player(1, 'Forblitz', 190269),
      new Player(6, 'Dol', 159591),
      5,
      20,
      true,
      `${warDateString}T11:30:20`
    ),
    new Battle(
      new Player(1, 'Disciple', 171799),
      new Player(6, 'Julian', 141082),
      5,
      20,
      true,
      `${warDateString}T11:32:43`
    ),
    new Battle(
      new Player(1, 'Disciple', 171799),
      new Player(6, 'Juramar', 131831),
      5,
      20,
      true,
      `${warDateString}T11:33:34`
    ),
    new Battle(
      new Player(1, 'agent_chu', 210700),
      new Player(6, 'Mac 270072', 228689),
      8,
      9,
      false,
      `${warDateString}T11:39:32`
    ),
    new Battle(new Player(1, 'elo', 180235), new Player(6, 'TanoOo', 135575), 5, 20, true, `${warDateString}T12:03:44`),
    new Battle(
      new Player(1, 'Post Goats', 342940),
      new Player(6, 'discuas', 248534),
      5,
      20,
      true,
      `${warDateString}T12:10:03`
    ),
    new Battle(
      new Player(1, 'Post Goats', 342940),
      new Player(6, 'Song x 2', 210329),
      5,
      20,
      true,
      `${warDateString}T12:10:50`
    ),
    new Battle(new Player(1, 'Don', 188417), new Player(6, 'Drenz', 152064), 6, 20, true, `${warDateString}T12:16:49`),
    new Battle(new Player(1, 'Don', 188417), new Player(6, '_sad1_', 171813), 1, 20, true, `${warDateString}T12:24:37`),
    new Battle(
      new Player(1, 'LOD 2020', 204428),
      new Player(6, 'Jokill31', 123274),
      3,
      20,
      true,
      `${warDateString}T12:53:34`
    ),
    new Battle(
      new Player(1, 'LOD 2020', 204428),
      new Player(6, 'Gi', 127729),
      2,
      20,
      true,
      `${warDateString}T12:54:20`
    ),
    new Battle(
      new Player(1, 'agent_chu', 213966),
      new Player(6, '--Babababababab', 233918),
      9,
      0,
      false,
      `${warDateString}T12:56:52`
    ),
    new Battle(
      new Player(6, 'discuas', 182106),
      new Player(1, 'LOD 2020', 205683),
      4,
      18,
      false,
      `${warDateString}T00:07:01`
    ),
    new Battle(
      new Player(6, 'discuas', 182106),
      new Player(1, 'Post Goats', 223380),
      4,
      13,
      false,
      `${warDateString}T00:07:55`
    ),
    new Battle(
      new Player(6, 'Fenrigul', 162646),
      new Player(1, 'Buffy', 144885),
      1,
      20,
      true,
      `${warDateString}T00:10:35`
    ),
    new Battle(
      new Player(6, 'Song x 2', 206834),
      new Player(1, 'Gom', 228443),
      4,
      17,
      false,
      `${warDateString}T00:29:17`
    ),
    new Battle(
      new Player(6, 'Song x 2', 206834),
      new Player(1, 'gertyman', 253241),
      4,
      14,
      false,
      `${warDateString}T00:29:45`
    ),
    new Battle(
      new Player(6, 'Mac 270072', 108959),
      new Player(1, 'Gom', 228443),
      4,
      3,
      true,
      `${warDateString}T00:51:54`
    ),
    new Battle(
      new Player(6, 'Mac 270072', 108959),
      new Player(1, 'LOD 2020', 205683),
      4,
      2,
      true,
      `${warDateString}T00:53:18`
    ),
    new Battle(
      new Player(6, '--Babababababab', 161531),
      new Player(1, 'Post Goats', 223380),
      4,
      7,
      true,
      `${warDateString}T07:17:28`
    ),
    new Battle(
      new Player(6, '--Babababababab', 161531),
      new Player(1, 'gertyman', 253241),
      4,
      6,
      true,
      `${warDateString}T07:18:24`
    ),
    new Battle(new Player(6, 'TanoOo', 76152), new Player(1, 'BOTI', 74707), 10, 20, true, `${warDateString}T07:37:21`),
    new Battle(
      new Player(6, 'Bilbo', 111040),
      new Player(1, 'Forblitz', 125825),
      2,
      20,
      true,
      `${warDateString}T07:38:04`
    ),
    new Battle(
      new Player(6, 'TanoOo', 76152),
      new Player(1, 'Sheevara', 78409),
      10,
      18,
      false,
      `${warDateString}T07:43:06`
    ),
    new Battle(
      new Player(6, 'Jokill31', 123737),
      new Player(1, 'Dagul', 120395),
      2,
      20,
      true,
      `${warDateString}T07:50:54`
    ),
    new Battle(
      new Player(6, 'Jokill31', 123737),
      new Player(1, 'Dikree', 125077),
      3,
      20,
      true,
      `${warDateString}T07:52:14`
    ),
    new Battle(
      new Player(6, 'DerVehuel', 84584),
      new Player(1, 'Disciple', 83348),
      10,
      20,
      true,
      `${warDateString}T07:58:47`
    ),
    new Battle(
      new Player(6, 'DerVehuel', 84584),
      new Player(1, 'wookie', 85546),
      7,
      15,
      false,
      `${warDateString}T08:01:43`
    ),
    new Battle(
      new Player(6, 'Dinobunny', 134807),
      new Player(1, 'Dan', 167028),
      7,
      10,
      false,
      `${warDateString}T08:05:38`
    ),
    new Battle(
      new Player(6, 'Gi', 127729),
      new Player(1, 'GurraBurra', 144222),
      3,
      14,
      false,
      `${warDateString}T08:13:58`
    ),
    new Battle(
      new Player(6, 'Dinobunny', 134807),
      new Player(1, 'Dan', 167028),
      7,
      10,
      true,
      `${warDateString}T08:21:02`
    ),
    new Battle(
      new Player(6, 'WildWind', 94069),
      new Player(1, 'Don', 66898),
      10,
      20,
      true,
      `${warDateString}T08:21:18`
    ),
    new Battle(
      new Player(6, 'Gi', 127729),
      new Player(1, 'GurraBurra', 144222),
      3,
      6,
      true,
      `${warDateString}T08:23:38`
    ),
    new Battle(
      new Player(6, 'WildWind', 94069),
      new Player(1, 'wookie', 85546),
      7,
      5,
      true,
      `${warDateString}T08:24:37`
    ),
    new Battle(
      new Player(6, 'Juramar', 75229),
      new Player(1, 'Sheevara', 78409),
      10,
      2,
      true,
      `${warDateString}T08:32:37`
    ),
    new Battle(
      new Player(6, '_sad1_', 76255),
      new Player(1, 'Fuzzy', 90480),
      3,
      12,
      false,
      `${warDateString}T08:32:54`
    ),
    new Battle(new Player(6, '_sad1_', 76255), new Player(1, 'Fuzzy', 90480), 3, 8, true, `${warDateString}T08:33:32`),
    new Battle(new Player(6, 'Bilbo', 111040), new Player(1, 'elo', 107535), 7, 20, true, `${warDateString}T08:42:02`),
    new Battle(
      new Player(6, 'Waldo The Great', 103955),
      new Player(1, 'Buffy', 87459),
      3,
      20,
      true,
      `${warDateString}T10:27:11`
    ),
    new Battle(
      new Player(6, 'Waldo The Great', 103955),
      new Player(1, 'agent_chu', 90893),
      7,
      20,
      true,
      `${warDateString}T10:27:42`
    ),
    new Battle(
      new Player(6, 'EllipticalAid4', 178306),
      new Player(1, 'Fuzzy', 155619),
      5,
      10,
      false,
      `${warDateString}T10:45:26`
    ),
    new Battle(
      new Player(6, 'EllipticalAid4', 178306),
      new Player(1, 'Sheevara', 156182),
      5,
      16,
      false,
      `${warDateString}T10:46:18`
    ),
    new Battle(new Player(6, 'Julian', 109846), new Player(1, 'KP', 98156), 2, 20, true, `${warDateString}T11:04:46`),
    new Battle(
      new Player(6, 'Julian', 109846),
      new Player(1, 'hotaru086', 98042),
      2,
      20,
      true,
      `${warDateString}T11:05:39`
    ),
    new Battle(
      new Player(6, 'Juramar', 131934),
      new Player(1, 'Fuzzy', 155619),
      5,
      0,
      false,
      `${warDateString}T11:10:18`
    ),
    new Battle(new Player(6, 'Dol', 160208), new Player(1, 'BOTI', 151360), 5, 20, true, `${warDateString}T11:12:15`),
    new Battle(
      new Player(6, 'Drenz', 151737),
      new Player(1, 'hotaru086', 165779),
      1,
      20,
      true,
      `${warDateString}T11:13:48`
    ),
    new Battle(new Player(6, 'Dol', 160208), new Player(1, 'Fuzzy', 155619), 5, 0, false, `${warDateString}T11:15:53`),
    new Battle(
      new Player(6, 'Drenz', 152781),
      new Player(1, 'Disciple', 171517),
      5,
      0,
      false,
      `${warDateString}T11:24:56`
    ),
    new Battle(
      new Player(6, 'Fenrigul', 163622),
      new Player(1, 'Sheevara', 156182),
      5,
      4,
      true,
      `${warDateString}T11:50:56`
    ),
    new Battle(
      new Player(6, 'Tioaco', 168163),
      new Player(1, 'Dagul', 154758),
      9,
      20,
      true,
      `${warDateString}T11:51:09`
    ),
    new Battle(
      new Player(6, 'Tioaco', 168163),
      new Player(1, 'Disciple', 171517),
      5,
      6,
      false,
      `${warDateString}T11:54:10`
    ),
  ],
  6,
  4,
  816,
  warDateString,
  'Monday',
  18,
  1,
  1209
);
