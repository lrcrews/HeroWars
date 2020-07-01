import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-30';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.MRCO_ID, 'PerMEATions', 245158),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260321),
      new Player(Guild.MRCO_ID, 'MEATeor', 238683),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:59:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:00:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 149135),
      new Player(Guild.MRCO_ID, 'Grok', 84286),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:54:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 149135),
      new Player(Guild.MRCO_ID, 'Tfy', 91317),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:54:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178357),
      new Player(Guild.MRCO_ID, 'German Wiener', 130592),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:02:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178357),
      new Player(Guild.MRCO_ID, 'BIG D', 140059),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:03:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209706),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 192708),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:23:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209706),
      new Player(Guild.MRCO_ID, 'badianchick', 180408),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:24:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      new Player(Guild.MRCO_ID, 'philippe', 87849),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:45:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      new Player(Guild.MRCO_ID, 'VonBagher', 76290),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:46:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 296922),
      new Player(Guild.MRCO_ID, 'Kifyu', 232918),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:27:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 296922),
      new Player(Guild.MRCO_ID, 'VonBagher', 211901),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:27:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318526),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 282289),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:36:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318526),
      new Player(Guild.MRCO_ID, 'MEATeor', 321725),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:37:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263843),
      new Player(Guild.MRCO_ID, 'Coop5280', 217720),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:59:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 130173),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:13:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:14:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 340231),
      new Player(Guild.MRCO_ID, 'Revan', 237619),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:41:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.MRCO_ID, 'perMEATerik', 103443),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:52:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 81667),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:53:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398294),
      new Player(Guild.MRCO_ID, 'Sardine', 383851),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154917),
      new Player(Guild.MRCO_ID, 'MrTom', 100283),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:00:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154917),
      new Player(Guild.MRCO_ID, 'Revan', 104365),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:01:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328878),
      new Player(Guild.MRCO_ID, 'Tfy', 221673),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328878),
      new Player(Guild.MRCO_ID, 'Gardakus', 213387),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:08:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MRCO_ID, 'Kifyu', 156624),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:13:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      new Player(Guild.MRCO_ID, 'Amothep', 166192),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:14:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 367198),
      new Player(Guild.MRCO_ID, 'MrTom', 269188),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:15:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 308680),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 226753),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:19:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 308680),
      new Player(Guild.MRCO_ID, 'German Wiener', 226459),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:19:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 370153),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 267405),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:31:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 340283),
      new Player(Guild.MRCO_ID, 'BIG D', 223357),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:31:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 377018),
      new Player(Guild.MRCO_ID, 'badianchick', 253201),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:31:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278324),
      new Player(Guild.MRCO_ID, 'Grok', 217715),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:59:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 278324),
      new Player(Guild.MRCO_ID, 'perMEATerik', 199761),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:01:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 398294),
      new Player(Guild.MRCO_ID, 'perMEATions', 262907),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:05:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 394101),
      new Player(Guild.MRCO_ID, 'Amothep', 252812),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:30:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 263843),
      new Player(Guild.MRCO_ID, 'philippe', 193115),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:34:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268213),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:37:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:37:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 192708),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 200410),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:52:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 238683),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 258325),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:08:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 192708),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193670),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:20:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      Fortification.GATES_OF_NATURE_ID,
      13,
      false,
      `${warDateString}T04:44:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 124155),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      10,
      false,
      `${warDateString}T04:44:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 156624),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 154937),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:57:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 180408),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178357),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:57:22`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 156624),
      new Player(Guild.ASSASSINS_ID, 'KP', 152345),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:57:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 180408),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 203525),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T04:59:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 103783),
      new Player(Guild.ASSASSINS_ID, 'elo', 151615),
      Fortification.GATES_OF_NATURE_ID,
      7,
      true,
      `${warDateString}T05:03:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 103783),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      9,
      false,
      `${warDateString}T05:05:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 245158),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 255000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:48:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 245158),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 247782),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:15:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 88337),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 159008),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T06:22:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 88825),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 203525),
      Fortification.GATES_OF_NATURE_ID,
      3,
      false,
      `${warDateString}T06:34:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 76290),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 203525),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T06:45:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 269340),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 250785),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:36:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 269340),
      new Player(Guild.ASSASSINS_ID, 'HERO', 254642),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:37:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 140059),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 149135),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:46:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 140059),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 148689),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:47:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 237619),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 255779),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:01:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 237619),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 265566),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:03:14`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 212174),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 234863),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:10:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 222008),
      new Player(Guild.ASSASSINS_ID, 'elo', 241520),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:33:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 329121),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 308590),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:42:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 226823),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 239260),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:00:44`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 253033),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 276393),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T11:09:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 253033),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 276393),
      Fortification.CITADEL_ID,
      7,
      false,
      `${warDateString}T11:10:14`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 267776),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 267259),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:25:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 267776),
      new Player(Guild.ASSASSINS_ID, 'KP', 278106),
      Fortification.BARRACKS_ID,
      12,
      false,
      `${warDateString}T11:27:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 222008),
      new Player(Guild.ASSASSINS_ID, 'KP', 278106),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:32:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 127847),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 209706),
      Fortification.BASTION_OF_ICE_ID,
      8,
      false,
      `${warDateString}T11:57:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 225633),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 276393),
      Fortification.CITADEL_ID,
      3,
      true,
      `${warDateString}T12:39:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 226792),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 264392),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T12:41:30`
    ),
  ],
  Guild.MRCO_ID,
  842,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_27_2020,
  Guild.ASSASSINS_ID,
  1400
);
