import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-15';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 267578),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 259981),
      new Player(Guild.MERICA_ID, 'MightyMite89', 181296),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:48:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 259981),
      new Player(Guild.MERICA_ID, 'kiritoscart', 175203),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:48:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:00:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314711),
      new Player(Guild.MERICA_ID, 'Dol', 223548),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:46:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314711),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 218574),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:46:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 217740),
      new Player(Guild.MERICA_ID, 'Dinobunny', 205949),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:12:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 163000),
      new Player(Guild.MERICA_ID, 'Juramar', 111705),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:43:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 163000),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 135155),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:44:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      new Player(Guild.MERICA_ID, 'emojis', 220855),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:20:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.MERICA_ID, 'Mac', 185485),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:23:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 169084),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:24:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 171479),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 78830),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:37:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 171479),
      new Player(Guild.MERICA_ID, 'Dol', 131460),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:38:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 193481),
      new Player(Guild.MERICA_ID, 'Bilbo', 176364),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:41:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 193481),
      new Player(Guild.MERICA_ID, 'Julian', 179882),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:42:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 359661),
      new Player(Guild.MERICA_ID, 'Jokill31', 337567),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:47:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 276406),
      new Player(Guild.MERICA_ID, 'Juramar', 170389),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:53:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 161578),
      new Player(Guild.MERICA_ID, '_sad1_', 106719),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:09:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 161578),
      new Player(Guild.MERICA_ID, 'kiritoscart', 67085),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:09:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 381467),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 240696),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:15:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 374061),
      new Player(Guild.MERICA_ID, 'Tioaco', 255815),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:16:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 321406),
      new Player(Guild.MERICA_ID, 'emojis', 274987),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:20:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 364762),
      new Player(Guild.MERICA_ID, 'discuas', 313443),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:24:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 187298),
      new Player(Guild.MERICA_ID, 'Drenz', 134792),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:19:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 187298),
      new Player(Guild.MERICA_ID, 'Tioaco', 120868),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:19:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 265210),
      new Player(Guild.MERICA_ID, 'Bilbo', 201077),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:29:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 265210),
      new Player(Guild.MERICA_ID, 'Drenz', 205220),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:30:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236743),
      new Player(Guild.MERICA_ID, 'TanoOo', 119155),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:33:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236743),
      new Player(Guild.MERICA_ID, 'MightyMite89', 72017),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:34:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 320888),
      new Player(Guild.MERICA_ID, 'Song', 273973),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:50:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 320888),
      new Player(Guild.MERICA_ID, 'Mac', 298550),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:51:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 333933),
      new Player(Guild.MERICA_ID, 'TanoOo', 221539),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:55:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 333933),
      new Player(Guild.MERICA_ID, 'Julian', 192555),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:55:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 406258),
      new Player(Guild.MERICA_ID, 'Babababababab', 284721),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:59:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 359661),
      new Player(Guild.MERICA_ID, 'Dinobunny', 313312),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:02:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 406258),
      new Player(Guild.MERICA_ID, '_sad1_', 226978),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:03:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 286591),
      new Player(Guild.MERICA_ID, 'xCunniffe1', 188168),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:33:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:09:36`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 268913),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 111705),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T01:04:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:10:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 267547),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:11:29`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T04:26:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 266849),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 262936),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T04:27:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 79079),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T04:39:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 176883),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 187298),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:41:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 176883),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 172788),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:42:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 179882),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T05:41:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 179882),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 193481),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:43:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 169084),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 165400),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:55:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 169084),
      new Player(Guild.ASSASSINS_ID, 'KP', 171479),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:56:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 111705),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T08:11:08`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 131460),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 262936),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      false,
      `${warDateString}T08:20:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 137279),
      new Player(Guild.ASSASSINS_ID, 'elo', 161578),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T08:37:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 137279),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 163000),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T08:45:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 299960),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314582),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:54:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 259637),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T09:05:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 242155),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:07:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 131460),
      new Player(Guild.ASSASSINS_ID, 'elo', 161578),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T09:16:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 221498),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 226481),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:23:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'emojis', 221498),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236743),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:23:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 243889),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 243131),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:25:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 255815),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 230401),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:27:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 207177),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212330),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:19:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 207793),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 217740),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T10:39:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 221841),
      new Player(Guild.ASSASSINS_ID, 'elo', 249578),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:57:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 221841),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 247674),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T10:58:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'xCunniffe1', 79079),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 262936),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T11:21:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 299960),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275523),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:22:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 72017),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 163000),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      false,
      `${warDateString}T12:29:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'MightyMite89', 72017),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 163000),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T12:32:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 107267),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 259637),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T12:52:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 107267),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 217740),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T12:52:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 201099),
      new Player(Guild.ASSASSINS_ID, 'HERO', 271590),
      Fortification.FOUNDRY_ID,
      2,
      false,
      `${warDateString}T12:57:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 199732),
      new Player(Guild.ASSASSINS_ID, 'HERO', 271590),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:58:33`
    ),
  ],
  Guild.MERICA_ID,
  844,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_29_2020,
  Guild.ASSASSINS_ID,
  1340
);
