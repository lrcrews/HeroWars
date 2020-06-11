import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-10';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'PerMEATions', 241904),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:42:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'MEATeor', 230375),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:42:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      new Player(Guild.MRCO_ID, 'Angelina', 205870),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:21:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MRCO_ID, 'meat', 170291),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:21:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 186794),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:21:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MRCO_ID, 'Amothep', 156846),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:22:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 328679),
      new Player(Guild.MRCO_ID, 'Kifyu', 215720),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:10:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 133912),
      new Player(Guild.MRCO_ID, 'Wallario', 114969),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:22:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 133912),
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 96323),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:22:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184877),
      new Player(Guild.MRCO_ID, 'Kifyu', 136190),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:23:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184877),
      new Player(Guild.MRCO_ID, 'MEAT', 128942),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:24:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 67586),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:53:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 146434),
      new Player(Guild.MRCO_ID, 'BEEF RIB', 81217),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:54:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.MRCO_ID, 'Coop5280', 118416),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:00:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.MRCO_ID, 'MrTom', 100283),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:00:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149837),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 76592),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:03:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149837),
      new Player(Guild.MRCO_ID, 'perMEATerik', 87072),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:03:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 328679),
      new Player(Guild.MRCO_ID, 'BEEF RIB', 197506),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:05:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 287108),
      new Player(Guild.MRCO_ID, 'MEAT', 195320),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:09:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323114),
      new Player(Guild.MRCO_ID, 'PerMEATions', 234358),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:15:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 259122),
      new Player(Guild.MRCO_ID, 'perMEATerik', 172673),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:20:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 350547),
      new Player(Guild.MRCO_ID, 'Sardine', 428761),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:28:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259438),
      new Player(Guild.MRCO_ID, 'Wallario', 186971),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:32:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255502),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 214743),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:33:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 260373),
      new Player(Guild.MRCO_ID, 'German Wiener', 209841),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:34:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 310967),
      new Player(Guild.MRCO_ID, 'meat', 236890),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:34:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 310967),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 272215),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:35:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 372716),
      new Player(Guild.MRCO_ID, 'Angelina', 313225),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:50:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 357288),
      new Player(Guild.MRCO_ID, 'MrTom', 250023),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:55:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 357288),
      new Player(Guild.MRCO_ID, 'Gardakus', 212634),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:56:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 293376),
      new Player(Guild.MRCO_ID, 'Amothep', 222842),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:04:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318199),
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 241108),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:11:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 164488),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 118833),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:48:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 164488),
      new Player(Guild.MRCO_ID, 'German Wiener', 118377),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:49:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 372716),
      new Player(Guild.MRCO_ID, 'MEATeor', 296772),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:54:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 390238),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 247004),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:01:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 254569),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 203307),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:09:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 254569),
      new Player(Guild.MRCO_ID, 'Coop5280', 211367),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:10:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T00:22:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:23:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 241904),
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:50:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 241904),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:05:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 94912),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T01:49:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 186794),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T03:08:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 186794),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T03:09:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 250384),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:15:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 203825),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:15:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 156846),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149837),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:42:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 156846),
      new Player(Guild.ASSASSINS_ID, 'KP', 145224),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:43:53`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 232916),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259003),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T05:18:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 118416),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      Fortification.BASTION_OF_ICE_ID,
      10,
      false,
      `${warDateString}T05:24:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 118416),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 136114),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T05:25:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 250214),
      new Player(Guild.ASSASSINS_ID, 'Regal', 292333),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:05:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 250214),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301515),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:05:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 203327),
      new Player(Guild.ASSASSINS_ID, 'elo', 232144),
      Fortification.FOUNDRY_ID,
      5,
      false,
      `${warDateString}T08:22:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 241408),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 243598),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:25:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'meat', 170291),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 164488),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:25:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 203327),
      new Player(Guild.ASSASSINS_ID, 'elo', 232144),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T08:25:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'meat', 170291),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184901),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:26:44`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 241108),
      new Player(Guild.ASSASSINS_ID, 'HERO', 233046),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:28:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 241108),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 239966),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:32:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BEEF RIB', 197506),
      new Player(Guild.ASSASSINS_ID, 'elo', 232144),
      Fortification.FOUNDRY_ID,
      14,
      true,
      `${warDateString}T08:45:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BEEF RIB', 197506),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 205520),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T08:48:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 241528),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 221384),
      Fortification.CITADEL_ID,
      17,
      false,
      `${warDateString}T09:12:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEAT', 128942),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 136114),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T09:29:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEAT', 128942),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T09:30:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 114969),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T09:35:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 140266),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      Fortification.BASTION_OF_ICE_ID,
      10,
      true,
      `${warDateString}T09:46:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 140266),
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T09:48:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 114969),
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      false,
      `${warDateString}T09:51:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 214743),
      new Player(Guild.ASSASSINS_ID, 'KP', 260058),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:54:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 313263),
      new Player(Guild.ASSASSINS_ID, 'KP', 260058),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:06:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 313263),
      new Player(Guild.ASSASSINS_ID, 'agent_hero', 255502),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:06:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 118893),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      false,
      `${warDateString}T11:16:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 118893),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 177583),
      Fortification.BASTION_OF_ICE_ID,
      8,
      false,
      `${warDateString}T11:17:44`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 233553),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 229049),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:41:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 214858),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 205520),
      Fortification.CITADEL_ID,
      19,
      true,
      `${warDateString}T11:48:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 94912),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 177583),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T12:57:17`
    ),
  ],
  Guild.MRCO_ID,
  783,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_24_2020,
  Guild.ASSASSINS_ID,
  1400
);
