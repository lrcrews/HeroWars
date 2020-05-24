import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-14';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 239186),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:56:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 252005),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:57:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      new Player(Guild.MERICA_ID, 'discuas', 212760),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:11:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      new Player(Guild.MERICA_ID, 'Babababababab', 234008),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:12:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      new Player(Guild.MERICA_ID, 'Gi', 156551),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:42:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      new Player(Guild.MERICA_ID, 'Dinobunny', 159162),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:44:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 138500),
      new Player(Guild.MERICA_ID, 'Bilbo', 131937),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:00:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 96271),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:07:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      new Player(Guild.MERICA_ID, '_sad1_', 89270),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:07:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 114865),
      new Player(Guild.MERICA_ID, 'Juramar', 82546),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:54:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 114865),
      new Player(Guild.MERICA_ID, 'Dol', 69629),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:55:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 127448),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112171),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:51:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 127448),
      new Player(Guild.MERICA_ID, 'Tioaco', 101390),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:51:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      new Player(Guild.MERICA_ID, 'DerVehuel', 176344),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:03:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365545),
      new Player(Guild.MERICA_ID, 'Gi', 275913),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:11:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262999),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 186479),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:15:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 326665),
      new Player(Guild.MERICA_ID, 'Mac 270072', 237027),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:24:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 300108),
      new Player(Guild.MERICA_ID, 'Jokill31', 230597),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:26:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277277),
      new Player(Guild.MERICA_ID, 'Drenz', 163378),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:50:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 121851),
      new Player(Guild.MERICA_ID, 'Drenz', 96255),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:51:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 121851),
      new Player(Guild.MERICA_ID, 'TanoOo', 83169),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:52:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 282711),
      new Player(Guild.MERICA_ID, 'Fenrigul', 181187),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:55:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 282711),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 177696),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:56:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 290451),
      new Player(Guild.MERICA_ID, 'Song', 231181),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:59:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 257402),
      new Player(Guild.MERICA_ID, '_sad1_', 181108),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:01:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277277),
      new Player(Guild.MERICA_ID, 'Bilbo', 181966),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:04:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 217574),
      new Player(Guild.MERICA_ID, 'Juramar', 141113),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:05:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 332629),
      new Player(Guild.MERICA_ID, 'discuas', 266073),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:08:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 332629),
      new Player(Guild.MERICA_ID, 'Dinobunny', 237530),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:08:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 286211),
      new Player(Guild.MERICA_ID, 'DerVehuel', 221827),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:45:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 286211),
      new Player(Guild.MERICA_ID, 'Tioaco', 185677),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:46:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158644),
      new Player(Guild.MERICA_ID, 'Fenrigul', 133067),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:17:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158644),
      new Player(Guild.MERICA_ID, 'Mac 270072', 138677),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:18:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 127985),
      new Player(Guild.MERICA_ID, 'Julian', 121918),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:23:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 127985),
      new Player(Guild.MERICA_ID, 'WildWind', 100219),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:24:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230996),
      new Player(Guild.MERICA_ID, 'Dol', 167281),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:43:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230996),
      new Player(Guild.MERICA_ID, 'WildWind', 159924),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:44:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 206194),
      new Player(Guild.MERICA_ID, 'TanoOo', 150684),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:58:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 210507),
      new Player(Guild.MERICA_ID, 'Julian', 156994),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:59:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365545),
      new Player(Guild.MERICA_ID, 'Babababababab', 261570),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:00:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 253228),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:22:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 253228),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:24:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 239186),
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:54:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 239186),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:55:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 83169),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T00:58:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 131441),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T01:00:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 234008),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T01:23:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 234008),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      16,
      false,
      `${warDateString}T01:23:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 160298),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158664),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:43:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 160298),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 178098),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T01:47:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 96271),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T01:51:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 96271),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 178098),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T01:52:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 177586),
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T02:30:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 177586),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 190008),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:31:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 100219),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T03:21:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 69629),
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T03:28:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 212760),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 232897),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T04:11:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 212760),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 216459),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:11:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 121918),
      new Player(Guild.ASSASSINS_ID, 'elo', 127985),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:20:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 121918),
      new Player(Guild.ASSASSINS_ID, 'KP', 125006),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:22:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112681),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 114865),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T06:13:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112681),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T06:16:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 69629),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 114865),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T06:53:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 156551),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 232897),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T07:41:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 131937),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126990),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:41:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 131937),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124456),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:42:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 156551),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 138500),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:43:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 83509),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T08:06:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 190629),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 168412),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:29:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 185677),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 180043),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:31:30`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 131441),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 129149),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:43:49`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 159960),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 189919),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:49:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 87103),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      Fortification.BASTION_OF_ICE_ID,
      9,
      false,
      `${warDateString}T09:42:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 89270),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      Fortification.BASTION_OF_ICE_ID,
      4,
      false,
      `${warDateString}T09:42:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 77352),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T10:08:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 77352),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 136282),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T10:09:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 237105),
      new Player(Guild.ASSASSINS_ID, 'KP', 210155),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:06:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 237105),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 210906),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:08:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 163378),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 166198),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T12:31:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 155189),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 166198),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:32:53`
    ),
  ],
  Guild.MERICA_ID,
  802,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_20_2020,
  Guild.ASSASSINS_ID,
  1400
);
