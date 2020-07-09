import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-07';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:06:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'PerMEATions', 246468),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:51:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'MEATeor', 240649),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 147605),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T01:57:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 194314),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 196923),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:25:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 194314),
      new Player(Guild.MRCO_ID, 'badianchick', 182756),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:26:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 210901),
      new Player(Guild.MRCO_ID, 'Amothep', 169076),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:04:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 210901),
      new Player(Guild.MRCO_ID, 'Big-D', 143796),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:05:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 82932),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:07:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      new Player(Guild.MRCO_ID, 'VonBagher', 77507),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:07:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      new Player(Guild.MRCO_ID, 'German Wiener', 133784),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:08:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      new Player(Guild.MRCO_ID, 'perMEATerik', 106092),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:08:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181756),
      new Player(Guild.MRCO_ID, 'Kifyu', 159457),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:45:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181756),
      new Player(Guild.MRCO_ID, 'Revan', 104365),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:46:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 147605),
      new Player(Guild.MRCO_ID, 'philippe', 94540),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:16:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311260),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 231510),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:14:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311260),
      new Player(Guild.MRCO_ID, 'German Wiener', 235752),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:15:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370387),
      new Player(Guild.MRCO_ID, 'Sardine', 390035),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:30:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319266),
      new Player(Guild.MRCO_ID, 'MEATeor', 326492),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:39:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319266),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 287782),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:40:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 349331),
      new Player(Guild.MRCO_ID, 'Revan', 240532),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:00:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 319097),
      new Player(Guild.MRCO_ID, 'MrTom', 273372),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:00:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297341),
      new Player(Guild.MRCO_ID, 'Kifyu', 236342),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:21:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297341),
      new Player(Guild.MRCO_ID, 'RadRob', 238756),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:21:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      new Player(Guild.MRCO_ID, 'RadRob', 83311),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:21:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      new Player(Guild.MRCO_ID, 'Tfy', 94672),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:22:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 282713),
      new Player(Guild.MRCO_ID, 'Tfy', 228336),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:04:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 282713),
      new Player(Guild.MRCO_ID, 'Gardakus', 213459),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:06:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 267655),
      new Player(Guild.MRCO_ID, 'Coop5280', 222026),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:28:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 267655),
      new Player(Guild.MRCO_ID, 'Big-D', 226318),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:28:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 156944),
      new Player(Guild.MRCO_ID, 'MrTom', 100711),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:11:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271391),
      new Player(Guild.MRCO_ID, 'perMEATerik', 206765),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 131461),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:24:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:25:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378368),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 280286),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:45:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378368),
      new Player(Guild.MRCO_ID, 'badianchick', 257010),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:46:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401258),
      new Player(Guild.MRCO_ID, 'VonBagher', 217943),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:02:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401258),
      new Player(Guild.MRCO_ID, 'PerMEATions', 267051),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:02:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370447),
      new Player(Guild.MRCO_ID, 'Amothep', 258819),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:07:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 267547),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 246468),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:33:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 196923),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 214430),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:16:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 273372),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 270495),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:08:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 273372),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 272806),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:09:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 246468),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 249763),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:14:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      new Player(Guild.ASSASSINS_ID, 'wookie', 147605),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T04:48:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T04:48:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 160914),
      new Player(Guild.ASSASSINS_ID, 'HERO', 194314),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T05:42:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 160914),
      new Player(Guild.ASSASSINS_ID, 'KP', 160189),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:43:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 169076),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T05:51:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 169076),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:54:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 240649),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255646),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:02:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 240649),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212131),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:02:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 196923),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 210901),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:17:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 94540),
      new Player(Guild.ASSASSINS_ID, 'HERO', 194314),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T07:50:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 94540),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T07:50:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 182756),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181756),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:11:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 182756),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 201450),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:12:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 281272),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 258568),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:43:35`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 143796),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 157543),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T09:51:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 143796),
      new Player(Guild.ASSASSINS_ID, 'elo', 152582),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:53:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 94672),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 157543),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T09:56:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 231510),
      new Player(Guild.ASSASSINS_ID, 'wookie', 241920),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:53:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 106092),
      new Player(Guild.ASSASSINS_ID, 'wookie', 147605),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T11:00:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 83311),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 151809),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T11:30:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 227570),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 255630),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:42:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 227900),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319266),
      Fortification.FOUNDRY_ID,
      9,
      false,
      `${warDateString}T11:54:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 228382),
      new Player(Guild.ASSASSINS_ID, 'elo', 246872),
      Fortification.CITADEL_ID,
      13,
      false,
      `${warDateString}T11:58:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 281542),
      new Player(Guild.ASSASSINS_ID, 'HERO', 264326),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:03:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 231510),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 242294),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:05:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 237302),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 241338),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:08:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 218839),
      new Player(Guild.ASSASSINS_ID, 'elo', 246872),
      Fortification.CITADEL_ID,
      7,
      true,
      `${warDateString}T12:10:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 238818),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319266),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:11:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 237302),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 278587),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:12:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 218839),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267455),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:16:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 207416),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267455),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:23:52`
    ),
  ],
  Guild.MRCO_ID,
  949,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_28_2020,
  Guild.ASSASSINS_ID,
  1340
);
