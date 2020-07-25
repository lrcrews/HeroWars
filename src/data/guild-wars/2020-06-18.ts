import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-18';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:08:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MRCO_ID, 'MEATeor', 235478),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 171028),
      new Player(Guild.MRCO_ID, 'Kifyu', 146250),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:59:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 171028),
      new Player(Guild.MRCO_ID, 'Big Meat', 138425),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T01:59:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MRCO_ID, 'Amothep', 160732),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:38:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.MRCO_ID, 'badianchick', 175592),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:38:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.MRCO_ID, 'Tfy', 84690),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:49:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 69621),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:49:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194248),
      new Player(Guild.MRCO_ID, 'German Wiener', 126316),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:02:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154189),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 122356),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:25:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154189),
      new Player(Guild.MRCO_ID, 'Coop5280', 120208),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:52:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.MRCO_ID, 'Angelina', 213253),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:15:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 190917),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:15:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 335335),
      new Player(Guild.MRCO_ID, 'Sardine', 435452),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:40:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 327284),
      new Player(Guild.MRCO_ID, 'PerMEATions', 239560),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:50:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327246),
      new Player(Guild.MRCO_ID, 'badianchick', 244989),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:52:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259634),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 220638),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:59:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254403),
      new Player(Guild.MRCO_ID, 'Tfy', 207681),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:00:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 362544),
      new Player(Guild.MRCO_ID, 'MrTom', 256128),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:16:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 362544),
      new Player(Guild.MRCO_ID, 'Gardakus', 213387),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:17:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 327284),
      new Player(Guild.MRCO_ID, 'Big Meat', 212529),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:18:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 148345),
      new Player(Guild.MRCO_ID, 'MrTom', 100283),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:22:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 267296),
      new Player(Guild.MRCO_ID, 'pertrainerik', 181200),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:23:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327246),
      new Player(Guild.MRCO_ID, 'Amothep', 242256),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:25:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 414394),
      new Player(Guild.MRCO_ID, 'Angelina', 317260),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:58:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MRCO_ID, 'Wallario', 118737),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:06:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 99849),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:07:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317495),
      new Player(Guild.MRCO_ID, 'MEATeor', 307373),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:17:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317495),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 267291),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:18:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 252203),
      new Player(Guild.MRCO_ID, 'Wallario', 192030),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:13:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259925),
      new Player(Guild.MRCO_ID, 'German Wiener', 215325),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:54:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395602),
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 228935),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:55:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259925),
      new Player(Guild.MRCO_ID, 'Kifyu', 223589),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:55:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395602),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 253518),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:58:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:15:44`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 264910),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:47:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:47:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 186797),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194273),
      Fortification.BASTION_OF_ICE_ID,
      13,
      false,
      `${warDateString}T00:58:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 213253),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 195654),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:02:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 213253),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 206941),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:03:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 126316),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194273),
      Fortification.BASTION_OF_ICE_ID,
      7,
      true,
      `${warDateString}T01:59:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 161302),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154189),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:12:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 235478),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 241889),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:18:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 175592),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 186120),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:18:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 175592),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 171028),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:35:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T02:44:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 252358),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T02:46:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 190917),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:59:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 120208),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 252358),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T04:45:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 120208),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T04:45:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 236119),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 254995),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:52:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 161302),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T04:57:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 123587),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T05:04:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 147319),
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      Fortification.GATES_OF_NATURE_ID,
      5,
      false,
      `${warDateString}T07:38:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 147319),
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      Fortification.GATES_OF_NATURE_ID,
      15,
      true,
      `${warDateString}T08:04:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 97209),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      7,
      false,
      `${warDateString}T08:22:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 258271),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 259925),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:41:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 258271),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 251714),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:43:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big Meat', 138425),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 147205),
      Fortification.SPRING_OF_ELEMENTS_ID,
      13,
      true,
      `${warDateString}T09:10:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big Meat', 138425),
      new Player(Guild.ASSASSINS_ID, 'KP', 148345),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:11:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 122356),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 143363),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:36:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 229160),
      new Player(Guild.ASSASSINS_ID, 'HERO', 248615),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:43:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Invincible MEAT', 229160),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 235961),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:47:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 253666),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 218776),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:15:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 220825),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 232961),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:45:38`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 220825),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 229598),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T11:47:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 210894),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 229598),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T12:05:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 210894),
      new Player(Guild.ASSASSINS_ID, 'elo', 235439),
      Fortification.CITADEL_ID,
      8,
      false,
      `${warDateString}T12:06:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 192122),
      new Player(Guild.ASSASSINS_ID, 'elo', 235439),
      Fortification.CITADEL_ID,
      12,
      true,
      `${warDateString}T12:12:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 192122),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 229598),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T12:21:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 181680),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 229598),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T12:25:14`
    ),
  ],
  Guild.MRCO_ID,
  853,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_25_2020,
  Guild.ASSASSINS_ID,
  1220
);
