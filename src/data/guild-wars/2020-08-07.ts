import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-07';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:13:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:13:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:42:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 259552),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:35:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 234826),
      new Player(Guild.ROMANIA_ID, 'Antonio', 232277),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:52:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:48:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.ROMANIA_ID, 'JustMe', 238243),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:52:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      new Player(Guild.ROMANIA_ID, 'Thyned', 138600),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:59:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      new Player(Guild.ROMANIA_ID, 'Bishop', 114153),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:00:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.ROMANIA_ID, 'Gaby', 120266),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:15:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.ROMANIA_ID, 'tokyo', 128607),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:16:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      new Player(Guild.ROMANIA_ID, 'Galy', 137044),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:04:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 113564),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:05:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203265),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:13:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 327998),
      new Player(Guild.ROMANIA_ID, 'Gaby', 214296),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:14:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 389184),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 342356),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:30:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 402578),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 337172),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:32:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 402578),
      new Player(Guild.ROMANIA_ID, 'Antonio', 310604),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:33:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 353691),
      new Player(Guild.ROMANIA_ID, 'Thyned', 279745),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:30:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 353691),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 254164),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:31:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 304557),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 229885),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:36:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 309794),
      new Player(Guild.ROMANIA_ID, 'Bernde', 236456),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:26:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 309794),
      new Player(Guild.ROMANIA_ID, 'tokyo', 309794),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:30:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 195362),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:41:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 195362),
      new Player(Guild.ROMANIA_ID, 'Bernde', 150818),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:41:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 208370),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 195827),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:47:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 208370),
      new Player(Guild.ROMANIA_ID, 'Adrian', 201724),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:48:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179991),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 155253),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:49:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179991),
      new Player(Guild.ROMANIA_ID, 'Kai', 144681),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:49:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 389380),
      new Player(Guild.ROMANIA_ID, 'hama52', 331033),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:56:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 380529),
      new Player(Guild.ROMANIA_ID, 'Blondu', 389547),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:00:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 300652),
      new Player(Guild.ROMANIA_ID, 'Bishop', 256986),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:36:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 300652),
      new Player(Guild.ROMANIA_ID, 'Adrian', 257241),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:36:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 308227),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 278677),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:49:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422115),
      new Player(Guild.ROMANIA_ID, 'JustMe', 318543),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:50:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422115),
      new Player(Guild.ROMANIA_ID, 'Kai', 271430),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:59:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:55:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:59:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:00:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 331033),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 327937),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:00:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T01:13:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:33:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 238243),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 234826),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:38:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 238243),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 242547),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:39:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 259552),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:24:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 259552),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268244),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:24:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 280313),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254376),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:37:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 280313),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280987),
      Fortification.MAGE_ACADEMY_ID,
      13,
      false,
      `${warDateString}T06:38:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 343819),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 304467),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T06:46:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 202338),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 208370),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T06:58:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 202338),
      new Player(Guild.ASSASSINS_ID, 'HERO', 198386),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:00:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 257587),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280987),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T07:35:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 389547),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384208),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:41:51`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T07:44:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      Fortification.GATES_OF_NATURE_ID,
      11,
      false,
      `${warDateString}T07:47:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 137044),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      Fortification.GATES_OF_NATURE_ID,
      8,
      false,
      `${warDateString}T07:52:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 137044),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T07:55:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 295430),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 286939),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:06:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 310604),
      new Player(Guild.ASSASSINS_ID, 'HERO', 288464),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:07:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 120266),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T08:23:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 120266),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 208370),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T08:23:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 195827),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 195362),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:42:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 195827),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:42:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 331033),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 350883),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:44:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203265),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T08:48:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203265),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T08:49:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 148160),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179991),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      false,
      `${warDateString}T09:37:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 143023),
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T09:41:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 128607),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T10:36:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 128607),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T10:37:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 155253),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T10:59:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 155253),
      new Player(Guild.ASSASSINS_ID, 'KP', 177710),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:00:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 114022),
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T11:51:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 114022),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T11:51:22`
    ),
  ],
  Guild.ROMANIA_ID,
  871,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_32_2020,
  Guild.ASSASSINS_ID,
  1240
);
