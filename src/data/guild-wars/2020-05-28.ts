import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-28';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:07:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:08:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:07:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.MRCO_ID, 'MEATeor', 222125),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:08:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'badianchick', 161717),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:43:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 165180),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:44:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MRCO_ID, 'RadRob', 51965),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:23:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MRCO_ID, 'Tfy', 64832),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:23:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 314118),
      new Player(Guild.MRCO_ID, 'Saucy', 210224),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:33:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 314118),
      new Player(Guild.MRCO_ID, 'Amothep', 214903),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:34:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      new Player(Guild.MRCO_ID, 'Amothep', 147786),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:40:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      new Player(Guild.MRCO_ID, 'Big-D', 122490),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:41:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.MRCO_ID, 'perMEATerik', 73942),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:48:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.MRCO_ID, '_DAZ_', 74932),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:48:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354237),
      new Player(Guild.MRCO_ID, 'Revan', 220761),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:24:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      new Player(Guild.MRCO_ID, 'Angelina', 203948),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 275802),
      new Player(Guild.MRCO_ID, 'RadRob', 200936),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:32:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 275894),
      new Player(Guild.MRCO_ID, 'Coop5280', 202277),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:15:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268573),
      new Player(Guild.MRCO_ID, 'badianchick', 231316),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:18:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129352),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 92371),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:38:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152235),
      new Player(Guild.MRCO_ID, 'Kai', 116451),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:38:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129352),
      new Player(Guild.MRCO_ID, 'Coop5280', 109832),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:39:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152235),
      new Player(Guild.MRCO_ID, 'Kifyu', 123608),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:39:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295952),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 214883),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:43:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295952),
      new Player(Guild.MRCO_ID, 'Kai', 201233),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:43:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.MRCO_ID, 'Wallario', 99146),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:05:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.MRCO_ID, 'Revan', 87499),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:05:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 341850),
      new Player(Guild.MRCO_ID, 'Sardine', 396259),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:11:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 242845),
      new Player(Guild.MRCO_ID, 'Wallario', 180820),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:31:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 242845),
      new Player(Guild.MRCO_ID, 'Tfy', 183272),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:32:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      new Player(Guild.MRCO_ID, 'MrTom', 96301),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:55:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 246936),
      new Player(Guild.MRCO_ID, 'perMEATerik', 159256),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:57:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 252572),
      new Player(Guild.MRCO_ID, 'Big-D', 183753),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:04:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 249317),
      new Player(Guild.MRCO_ID, '_DAZ_', 198177),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:05:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354237),
      new Player(Guild.MRCO_ID, 'MrTom', 236037),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:25:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 383217),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 261056),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:35:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 350012),
      new Player(Guild.MRCO_ID, 'Angelina', 306915),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:35:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 350012),
      new Player(Guild.MRCO_ID, 'MEATeor', 293077),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:37:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 303362),
      new Player(Guild.MRCO_ID, 'Gardakus', 212634),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:24:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 303362),
      new Player(Guild.MRCO_ID, 'Kifyu', 209709),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:24:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:08:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:51:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T02:53:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 110272),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T05:01:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 110272),
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T05:01:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 240609),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T07:25:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 222125),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T10:13:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 222125),
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T10:15:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 220761),
      new Player(Guild.ASSASSINS_ID, 'elo', 219951),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:38:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 147786),
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:40:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 220761),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 221886),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:40:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 147786),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:41:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 123608),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 128880),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      false,
      `${warDateString}T11:06:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 123608),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 128880),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      false,
      `${warDateString}T11:10:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 116451),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:14:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 116451),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 128800),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      true,
      `${warDateString}T11:17:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 198177),
      new Player(Guild.ASSASSINS_ID, 'KP', 246517),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T11:22:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 198177),
      new Player(Guild.ASSASSINS_ID, 'KP', 246517),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T11:23:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 183366),
      new Player(Guild.ASSASSINS_ID, 'KP', 246517),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T11:27:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 165180),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162662),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:37:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 165180),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T11:38:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 307789),
      new Player(Guild.ASSASSINS_ID, 'En4', 277222),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:05:53`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 307789),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 254820),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:07:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 122490),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:14:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 122490),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 137106),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T12:17:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 242793),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 227467),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:23:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 64832),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 137106),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T12:42:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 69384),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 152349),
      Fortification.BASTION_OF_ICE_ID,
      5,
      false,
      `${warDateString}T12:43:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 69384),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152235),
      Fortification.GATES_OF_NATURE_ID,
      5,
      false,
      `${warDateString}T12:45:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 242793),
      new Player(Guild.ASSASSINS_ID, 'KP', 246517),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T12:48:35`
    ),
  ],
  Guild.MRCO_ID,
  523,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_22_2020,
  Guild.ASSASSINS_ID,
  1400
);
