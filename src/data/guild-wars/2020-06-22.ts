import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-22';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:06:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.MRCO_ID, 'MEATeor', 236759),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T04:15:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 70733),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:46:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 190917),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:03:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'Angelina', 215079),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:05:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 173887),
      new Player(Guild.MRCO_ID, 'Kifyu', 146250),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:16:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 173887),
      new Player(Guild.MRCO_ID, 'Big Meat', 140059),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:16:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.MRCO_ID, 'Tfy', 87452),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:21:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      new Player(Guild.MRCO_ID, 'perMEATerik', 99891),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:21:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155227),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 123912),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:56:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155227),
      new Player(Guild.MRCO_ID, 'MrTom', 100283),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:56:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.MRCO_ID, 'Amothep', 162355),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:09:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      new Player(Guild.MRCO_ID, 'badianchick', 177550),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:09:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      new Player(Guild.MRCO_ID, 'German Wiener', 127676),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:26:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      new Player(Guild.MRCO_ID, 'Coop5280', 120740),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:28:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 415532),
      new Player(Guild.MRCO_ID, 'Sardine', 435764),
      Fortification.CITADEL_ID,
      13,
      false,
      `${warDateString}T08:49:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 149198),
      new Player(Guild.MRCO_ID, 'FOxMeAT', 80881),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:04:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 257051),
      new Player(Guild.MRCO_ID, 'Tfy', 212516),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:05:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 261412),
      new Player(Guild.MRCO_ID, 'Sardine', 435764),
      Fortification.CITADEL_ID,
      7,
      true,
      `${warDateString}T09:08:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 333186),
      new Player(Guild.MRCO_ID, 'badianchick', 247470),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:16:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 333186),
      new Player(Guild.MRCO_ID, 'Amothep', 245616),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:17:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 261412),
      new Player(Guild.MRCO_ID, 'perMEATerik', 185495),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:17:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 415532),
      new Player(Guild.MRCO_ID, 'Angelina', 318706),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:27:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MRCO_ID, 'Wallario', 120019),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:28:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.MRCO_ID, 'Revan', 104365),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:29:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323092),
      new Player(Guild.MRCO_ID, 'Wallario', 192976),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:32:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 323092),
      new Player(Guild.MRCO_ID, 'Revan', 231536),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:32:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366551),
      new Player(Guild.MRCO_ID, 'MrTom', 259284),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:40:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366551),
      new Player(Guild.MRCO_ID, 'PerMEATions', 249657),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:41:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 292724),
      new Player(Guild.MRCO_ID, 'German Wiener', 215196),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 292724),
      new Player(Guild.MRCO_ID, 'Big Meat', 213483),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318056),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 269290),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:39:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 318056),
      new Player(Guild.MRCO_ID, 'MEATeor', 315893),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:40:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395779),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 257775),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:41:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254554),
      new Player(Guild.MRCO_ID, 'cyrusgg88', 210994),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:36:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254554),
      new Player(Guild.MRCO_ID, 'Coop5280', 215618),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:36:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395779),
      new Player(Guild.MRCO_ID, 'Kifyu', 224701),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:39:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 318706),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366311),
      Fortification.LIGHTHOUSE_ID,
      19,
      false,
      `${warDateString}T00:55:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:54:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:54:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 259368),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 261412),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:15:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 259368),
      new Player(Guild.ASSASSINS_ID, 'En4', 287153),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:16:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 318706),
      new Player(Guild.ASSASSINS_ID, 'KP', 274122),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:36:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T08:29:22`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PerMEATions', 243855),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T08:30:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 162355),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T08:57:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 162355),
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T09:27:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 177550),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 173887),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:54:53`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 177550),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161773),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:55:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 221975),
      new Player(Guild.ASSASSINS_ID, 'HERO', 249956),
      Fortification.FOUNDRY_ID,
      14,
      false,
      `${warDateString}T10:58:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'FOxMeAT', 221975),
      new Player(Guild.ASSASSINS_ID, 'HERO', 249956),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T10:59:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 120019),
      new Player(Guild.ASSASSINS_ID, 'KP', 149768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T11:21:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 192976),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 366311),
      Fortification.LIGHTHOUSE_ID,
      1,
      true,
      `${warDateString}T11:22:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 258282),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 252769),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:42:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 258282),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 254457),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:44:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 236759),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 243192),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:45:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 236759),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 254339),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:45:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 146774),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 149198),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:56:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 146774),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 144907),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:57:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 231933),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 241954),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:59:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 190917),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 196245),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:02:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 190917),
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:07:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 231933),
      new Player(Guild.ASSASSINS_ID, 'elo', 237364),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:15:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 204571),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 223503),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:15:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'cyrusgg88', 204249),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 234185),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:16:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 215643),
      new Player(Guild.ASSASSINS_ID, 'HERO', 249956),
      Fortification.FOUNDRY_ID,
      3,
      true,
      `${warDateString}T12:31:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 124947),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T12:33:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 99891),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T12:46:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big Meat', 140059),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155227),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:48:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big Meat', 140059),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 195518),
      Fortification.BASTION_OF_ICE_ID,
      7,
      false,
      `${warDateString}T12:49:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 87784),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193166),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T12:53:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 99891),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 195518),
      Fortification.BASTION_OF_ICE_ID,
      6,
      false,
      `${warDateString}T12:54:01`
    ),
  ],
  Guild.MRCO_ID,
  753,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_26_2020,
  Guild.ASSASSINS_ID,
  1320
);
