import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-22';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'deserter', 206143),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'deserter', 242640),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MRCO_ID, 'deserter', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:28:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:28:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.MRCO_ID, 'Kifyu', 169566),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:40:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.MRCO_ID, 'deserter', 171216),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T00:40:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.MRCO_ID, 'deserter', 139284),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:27:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      new Player(Guild.MRCO_ID, 'philippe', 102578),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:28:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      new Player(Guild.MRCO_ID, 'deserter', 183351),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:09:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      new Player(Guild.MRCO_ID, 'German Wiener', 142177),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:09:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.MRCO_ID, 'Wallario', 128935),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:05:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.MRCO_ID, 'RadRob', 87333),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:06:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.MRCO_ID, 'Arnomarty', 63032),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:48:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.MRCO_ID, 'Tfy', 106151),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:49:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417490),
      new Player(Guild.MRCO_ID, 'deserter', 419669),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:09:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263099),
      new Player(Guild.MRCO_ID, 'RadRob', 247746),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:15:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 365792),
      new Player(Guild.MRCO_ID, 'deserter', 352011),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:17:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 349245),
      new Player(Guild.MRCO_ID, 'MrTom', 289978),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:17:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 288645),
      new Player(Guild.MRCO_ID, 'Tfy', 246024),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:18:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316359),
      new Player(Guild.MRCO_ID, 'pertrainerik', 220699),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:04:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316359),
      new Player(Guild.MRCO_ID, 'wapdap', 205021),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:05:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.MRCO_ID, 'deserter', 264240),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:27:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.MRCO_ID, 'Kifyu', 242789),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:27:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.MRCO_ID, 'MrTom', 104579),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:41:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.MRCO_ID, 'pertrainerik', 114004),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:42:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 294877),
      new Player(Guild.MRCO_ID, 'VonBagher', 239271),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:20:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 294877),
      new Player(Guild.MRCO_ID, 'Gardakus', 213459),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:21:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 325363),
      new Player(Guild.MRCO_ID, 'German Wiener', 254344),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:36:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 334135),
      new Player(Guild.MRCO_ID, 'deserter', 316428),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:37:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167563),
      new Player(Guild.MRCO_ID, 'VonBagher', 89126),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:07:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167563),
      new Player(Guild.MRCO_ID, 'juanKi69', 59741),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:08:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417570),
      new Player(Guild.MRCO_ID, 'deserter', 317073),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:28:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 285769),
      new Player(Guild.MRCO_ID, 'juanKi69', 150871),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:47:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 285769),
      new Player(Guild.MRCO_ID, 'Arnomarty', 174627),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:47:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 336251),
      new Player(Guild.MRCO_ID, 'deserter', 272988),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:07:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 337695),
      new Player(Guild.MRCO_ID, 'philippe', 220929),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:08:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 301556),
      new Player(Guild.MRCO_ID, 'Warbrain', 193540),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:27:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 301556),
      new Player(Guild.MRCO_ID, 'Wallario', 202702),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:27:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.MRCO_ID, 'wapdap', 81402),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:07:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.MRCO_ID, 'Warbrain', 90728),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:07:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:01:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:11:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:12:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 206143),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 222757),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:32:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 206143),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T03:38:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 170142),
      new Player(Guild.ASSASSINS_ID, 'KP', 175423),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:23:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 170142),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 167563),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:26:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 106151),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      false,
      `${warDateString}T05:42:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 142637),
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T06:10:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 254676),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245160),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:11:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 171216),
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T06:36:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 171216),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T06:36:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 183351),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:05:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 183351),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:06:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 102578),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173189),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T07:13:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 102578),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      Fortification.BASTION_OF_FIRE_ID,
      0,
      false,
      `${warDateString}T07:14:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 317118),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 271198),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:55:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'wapdap', 83621),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T08:22:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 317118),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316294),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:32:35`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 242640),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 262971),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:42:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'deserter', 242640),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:43:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Warbrain', 90728),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      false,
      `${warDateString}T10:49:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Warbrain', 90728),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      false,
      `${warDateString}T10:49:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 128935),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T10:57:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 128935),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 195571),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      true,
      `${warDateString}T10:58:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 239649),
      new Player(Guild.ASSASSINS_ID, 'elo', 254027),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T12:20:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 239649),
      new Player(Guild.ASSASSINS_ID, 'elo', 254027),
      Fortification.CITADEL_ID,
      14,
      true,
      `${warDateString}T12:21:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 246024),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 253443),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:22:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'juanKi69', 162778),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 268884),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:22:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'juanKi69', 162778),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 268884),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:24:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 114004),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T12:32:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 114004),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      0,
      false,
      `${warDateString}T12:33:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Arnomarty', 53910),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      0,
      false,
      `${warDateString}T12:55:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Arnomarty', 174627),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 251767),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T12:57:09`
    ),
  ],
  Guild.MRCO_ID,
  626,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_30_2020,
  Guild.ASSASSINS_ID,
  1400
);
