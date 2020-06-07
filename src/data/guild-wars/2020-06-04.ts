import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-04';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.MRCO_ID, 'Budge', 226569),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:22:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:23:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:24:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 257249),
      new Player(Guild.MRCO_ID, 'Angelina', 204597),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:30:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 158617),
      new Player(Guild.MRCO_ID, 'Kifyu', 133711),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:42:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 157559),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 113715),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:42:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 157559),
      new Player(Guild.MRCO_ID, 'Coop5280', 112096),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:43:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 347063),
      new Player(Guild.MRCO_ID, 'Sardine', 403654),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:06:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 127072),
      new Player(Guild.MRCO_ID, 'Wallario', 107394),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 127072),
      new Player(Guild.MRCO_ID, 'Revan', 91870),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 308182),
      new Player(Guild.MRCO_ID, 'badianchick', 233643),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:29:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 308182),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 267232),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:30:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348229),
      new Player(Guild.MRCO_ID, 'MrTom', 239794),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:41:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348229),
      new Player(Guild.MRCO_ID, 'Gardakus', 212634),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:42:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 299295),
      new Player(Guild.MRCO_ID, 'Kai', 209186),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:48:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 174985),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:49:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 142072),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 65414),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:56:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 142072),
      new Player(Guild.MRCO_ID, 'Tfy', 67582),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:58:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 133408),
      new Player(Guild.MRCO_ID, 'MrTom', 133408),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:18:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 133408),
      new Player(Guild.MRCO_ID, 'pertrainerik', 85587),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:19:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 182128),
      new Player(Guild.MRCO_ID, 'BIG D', 125794),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:10:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303406),
      new Player(Guild.MRCO_ID, 'Kifyu', 213941),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:47:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303406),
      new Player(Guild.MRCO_ID, 'Saucy', 217400),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:48:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 275795),
      new Player(Guild.MRCO_ID, 'BIG D', 189648),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:15:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 366607),
      new Player(Guild.MRCO_ID, 'Angelina', 311644),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:42:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 252863),
      new Player(Guild.MRCO_ID, 'Tfy', 190361),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:24:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 252863),
      new Player(Guild.MRCO_ID, 'pertrainerik', 166200),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:25:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 273945),
      new Player(Guild.MRCO_ID, 'Amothep', 216030),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:40:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255932),
      new Player(Guild.MRCO_ID, 'Wallario', 184410),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:45:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 252562),
      new Player(Guild.MRCO_ID, '_DAZ_', 209457),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:45:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 275795),
      new Player(Guild.MRCO_ID, 'Revan', 227076),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:49:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 144455),
      new Player(Guild.MRCO_ID, 'Kai', 117869),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:04:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 144455),
      new Player(Guild.MRCO_ID, '_DAZ_', 74544),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:04:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249977),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 196827),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:52:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'Amothep', 142999),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:56:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'badianchick', 165102),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:56:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 235733),
      new Player(Guild.MRCO_ID, 'Coop5280', 206164),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:59:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 387341),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 218799),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:06:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:01:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 260964),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:14:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:15:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 143755),
      new Player(Guild.ASSASSINS_ID, 'elo', 144455),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:20:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 143755),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 133408),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:20:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 174985),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:19:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 174985),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 181034),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:25:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 311644),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354745),
      Fortification.LIGHTHOUSE_ID,
      19,
      false,
      `${warDateString}T04:24:35`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 204597),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 191145),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:27:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 166250),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 158617),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:07:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 166250),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 157559),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:07:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 112096),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198949),
      Fortification.GATES_OF_NATURE_ID,
      5,
      false,
      `${warDateString}T05:18:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 207164),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354745),
      Fortification.LIGHTHOUSE_ID,
      1,
      true,
      `${warDateString}T05:18:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Budge', 227200),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 221467),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:11:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Budge', 227200),
      new Player(Guild.ASSASSINS_ID, 'Regal', 257249),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:13:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 240334),
      new Player(Guild.ASSASSINS_ID, 'En4', 246329),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:45:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 240334),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 252562),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:46:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 243845),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:59:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 242551),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:01:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 133711),
      new Player(Guild.ASSASSINS_ID, 'KP', 134442),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:37:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 125794),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:44:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 125794),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 128165),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:47:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 118379),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198949),
      Fortification.GATES_OF_NATURE_ID,
      3,
      false,
      `${warDateString}T09:02:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 118907),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198949),
      Fortification.GATES_OF_NATURE_ID,
      4,
      false,
      `${warDateString}T09:03:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 134183),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 139609),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T09:10:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 112060),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198949),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T09:12:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 112060),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 198949),
      Fortification.GATES_OF_NATURE_ID,
      6,
      true,
      `${warDateString}T09:14:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 87778),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 139609),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T09:15:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 190361),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 199591),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T09:23:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 210553),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 199591),
      Fortification.CITADEL_ID,
      19,
      true,
      `${warDateString}T09:28:14`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 210553),
      new Player(Guild.ASSASSINS_ID, 'elo', 224243),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T09:29:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 190361),
      new Player(Guild.ASSASSINS_ID, 'elo', 224243),
      Fortification.CITADEL_ID,
      10,
      true,
      `${warDateString}T09:32:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 197505),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 216003),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:35:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 227364),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 219055),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:36:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 227364),
      new Player(Guild.ASSASSINS_ID, 'HERO', 227516),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:37:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 197505),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 224089),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:38:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 222072),
      new Player(Guild.ASSASSINS_ID, 'KP', 250849),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:10:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 166599),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249977),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:16:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 222072),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 249977),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T10:18:42`
    ),
  ],
  Guild.MRCO_ID,
  947,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_23_2020,
  Guild.ASSASSINS_ID,
  1340
);
