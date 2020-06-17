import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-23';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.MERICA_ID, 'Song', 204510),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:49:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.MERICA_ID, 'discuas', 181088),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:50:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 202672),
      new Player(Guild.MERICA_ID, 'Babababababab', 155432),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:21:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 263151),
      new Player(Guild.MERICA_ID, 'Mac', 224829),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:21:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      new Player(Guild.MERICA_ID, 'Dinobunny', 127281),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T07:17:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 227817),
      new Player(Guild.MERICA_ID, 'Babababababab', 228299),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:20:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 89092),
      new Player(Guild.MERICA_ID, 'Drenz', 80802),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:21:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 260278),
      new Player(Guild.MERICA_ID, 'Gi', 216531),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:21:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 89092),
      new Player(Guild.MERICA_ID, 'TanoOo', 75230),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:21:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 170211),
      new Player(Guild.MERICA_ID, 'TanoOo', 132698),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:23:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 170211),
      new Player(Guild.MERICA_ID, 'WildWind', 138301),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:24:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      new Player(Guild.MERICA_ID, 'Fenrigul', 50841),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:33:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      new Player(Guild.MERICA_ID, 'WildWind', 58100),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      new Player(Guild.MERICA_ID, 'Juramar', 73723),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:46:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      new Player(Guild.MERICA_ID, 'DerVehuel', 64666),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:47:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 106833),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:59:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 106833),
      new Player(Guild.MERICA_ID, '_sad1_', 75041),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:00:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 339575),
      new Player(Guild.MERICA_ID, 'discuas', 237228),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:03:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 339575),
      new Player(Guild.MERICA_ID, 'Song', 205105),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:03:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231947),
      new Player(Guild.MERICA_ID, 'Jokill31', 184481),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:11:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231947),
      new Player(Guild.MERICA_ID, 'DerVehuel', 178479),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:11:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 169982),
      new Player(Guild.MERICA_ID, 'Juramar', 124090),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:15:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 169982),
      new Player(Guild.MERICA_ID, 'Drenz', 147838),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:25:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 196700),
      new Player(Guild.MERICA_ID, 'Tioaco', 168025),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:11:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 196700),
      new Player(Guild.MERICA_ID, 'Fenrigul', 162538),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 278202),
      new Player(Guild.MERICA_ID, 'Dinobunny', 215821),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:12:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 189006),
      new Player(Guild.MERICA_ID, 'Dol', 158177),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:34:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 189006),
      new Player(Guild.MERICA_ID, 'Julian', 140131),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:35:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118803),
      new Player(Guild.MERICA_ID, 'Julian', 108864),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:56:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118803),
      new Player(Guild.MERICA_ID, 'Mac', 108522),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:56:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 124541),
      new Player(Guild.MERICA_ID, 'Tioaco', 86969),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:04:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 124541),
      new Player(Guild.MERICA_ID, 'Jokill31', 89038),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:04:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MERICA_ID, 'Bilbo', 114655),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:23:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MERICA_ID, 'Gi', 127347),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:24:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 211726),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 174220),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:59:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 211726),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 171483),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:00:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84132),
      new Player(Guild.MERICA_ID, 'Dol', 65131),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:19:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84132),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 67684),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:19:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 185890),
      new Player(Guild.MERICA_ID, '_sad1_', 166450),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:28:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 185890),
      new Player(Guild.MERICA_ID, 'Bilbo', 164628),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:29:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 181088),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203927),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T00:16:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 181088),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 222122),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T00:17:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 204510),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T02:09:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 204510),
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T02:09:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 157417),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 141474),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T03:17:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 157417),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 141474),
      Fortification.BARRACKS_ID,
      15,
      true,
      `${warDateString}T03:18:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 155432),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T04:55:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 155432),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203927),
      Fortification.BRIDGE_ID,
      9,
      true,
      `${warDateString}T04:56:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 127347),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T07:46:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 127347),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 222122),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T07:47:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 108522),
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T09:21:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 108522),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T09:26:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 73723),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T09:39:34`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 73723),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T09:40:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 75230),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:40:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 127649),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T09:48:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T09:50:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 128194),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 142325),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T09:52:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 108885),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 125371),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T09:52:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 108885),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 119331),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:53:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 142325),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T09:54:44`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 67684),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 125371),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T09:56:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 89038),
      new Player(Guild.ASSASSINS_ID, 'wookie', 84422),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:06:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 89038),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90071),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:09:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 108864),
      new Player(Guild.ASSASSINS_ID, 'elo', 106486),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:50:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 108864),
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:51:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 158585),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154019),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T11:18:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 65131),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 82688),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T11:22:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 67684),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 82688),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      true,
      `${warDateString}T11:26:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 58473),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84135),
      Fortification.SPRING_OF_ELEMENTS_ID,
      12,
      false,
      `${warDateString}T11:32:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 75230),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:33:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 58473),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84135),
      Fortification.SPRING_OF_ELEMENTS_ID,
      8,
      true,
      `${warDateString}T11:33:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 178697),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 149534),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:03`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 178697),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 169982),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T11:40:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 168025),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 152608),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:33:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 86969),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 89329),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T12:35:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 145123),
      new Player(Guild.ASSASSINS_ID, 'wookie', 169312),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:38:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 80802),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 89329),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T12:39:32`
    ),
  ],
  Guild.MERICA_ID,
  667,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_17_2020,
  Guild.ASSASSINS_ID,
  1400
);
