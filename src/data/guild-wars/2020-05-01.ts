import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-01';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 218117),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.ROMANIA_ID, 'Marius', 195045),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176812),
      new Player(Guild.ROMANIA_ID, 'Phantom', 161070),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:14:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176812),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 143061),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:15:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253872),
      new Player(Guild.ROMANIA_ID, 'Blondu', 238188),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:47:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253872),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 159008),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:47:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 181528),
      new Player(Guild.ROMANIA_ID, 'ALAN', 161012),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T05:53:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 112379),
      new Player(Guild.ROMANIA_ID, 'Antonio', 98234),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:03:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 116083),
      new Player(Guild.ROMANIA_ID, 'hama52', 106562),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T06:06:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 121450),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 141569),
      Fortification.GATES_OF_NATURE_ID,
      10,
      false,
      `${warDateString}T06:16:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 121450),
      new Player(Guild.ROMANIA_ID, 'Adrian', 109040),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:17:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ROMANIA_ID, 'JustMe', 153950),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:20:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 154275),
      Fortification.BASTION_OF_FIRE_ID,
      7,
      false,
      `${warDateString}T06:21:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 127674),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 141569),
      Fortification.GATES_OF_NATURE_ID,
      10,
      true,
      `${warDateString}T06:31:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 84396),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:40:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.ROMANIA_ID, 'Phantom', 57508),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:40:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 344822),
      new Player(Guild.ROMANIA_ID, 'Blondu', 271852),
      Fortification.CITADEL_ID,
      9,
      false,
      `${warDateString}T06:41:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 344822),
      new Player(Guild.ROMANIA_ID, 'Blondu', 271852),
      Fortification.CITADEL_ID,
      11,
      true,
      `${warDateString}T06:42:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 267764),
      new Player(Guild.ROMANIA_ID, 'JustMe', 251146),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:46:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 267764),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 211849),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:47:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 267408),
      new Player(Guild.ROMANIA_ID, 'Marius', 215148),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:48:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 267408),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 192762),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:02:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 173284),
      new Player(Guild.ROMANIA_ID, 'Medo', 148190),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:05:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 173284),
      new Player(Guild.ROMANIA_ID, 'VsEye', 143753),
      Fortification.CITADEL_ID,
      12,
      false,
      `${warDateString}T07:05:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 127808),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 154275),
      Fortification.BASTION_OF_FIRE_ID,
      13,
      true,
      `${warDateString}T07:20:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192749),
      new Player(Guild.ROMANIA_ID, 'VsEye', 143753),
      Fortification.CITADEL_ID,
      8,
      true,
      `${warDateString}T07:21:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80795),
      new Player(Guild.ROMANIA_ID, 'VsEye', 64791),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:32:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80795),
      new Player(Guild.ROMANIA_ID, 'Gaby', 55394),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:33:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107420),
      new Player(Guild.ROMANIA_ID, 'tokyo', 91330),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:39:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107420),
      new Player(Guild.ROMANIA_ID, 'Medo', 69638),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:40:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 80395),
      new Player(Guild.ROMANIA_ID, 'ALAN', 52906),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:05:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 80395),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 51530),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:06:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 179272),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 176203),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:38:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 216008),
      new Player(Guild.ROMANIA_ID, 'Adrian', 194099),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:47:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 216008),
      new Player(Guild.ROMANIA_ID, 'Thyned', 176219),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:48:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 201671),
      new Player(Guild.ROMANIA_ID, 'tokyo', 166446),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:49:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 99941),
      new Player(Guild.ROMANIA_ID, 'hama52', 106562),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T09:52:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 88262),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66652),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:17:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 88262),
      new Player(Guild.ROMANIA_ID, 'Thyned', 68784),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:17:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 190272),
      new Player(Guild.ROMANIA_ID, 'Gaby', 143238),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:23:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 238117),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 218117),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 224643),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:51:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 218117),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      11,
      false,
      `${warDateString}T00:51:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 203892),
      new Player(Guild.ASSASSINS_ID, 'Gom', 282976),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:39:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 143859),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 150235),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:27:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 195045),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 207545),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T03:33:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 195045),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      9,
      true,
      `${warDateString}T03:34:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 51530),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 207545),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T03:45:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 91330),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 224643),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T04:33:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 109040),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 224643),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T04:46:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 263424),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 268667),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T04:51:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 205376),
      new Player(Guild.ASSASSINS_ID, 'Don', 190272),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:52:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 205376),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 182431),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:53:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 64791),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:54:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 64791),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 79544),
      Fortification.SPRING_OF_ELEMENTS_ID,
      10,
      false,
      `${warDateString}T04:56:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 91330),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:03:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 109040),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 95544),
      Fortification.GATES_OF_NATURE_ID,
      16,
      false,
      `${warDateString}T05:05:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 159607),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 126853),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:24:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 159607),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 127674),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:25:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 154275),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 145654),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:54:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 154275),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:55:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 106562),
      new Player(Guild.ASSASSINS_ID, 'wookie', 88210),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:06:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 141569),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122006),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:09:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 141569),
      new Player(Guild.ASSASSINS_ID, 'elo', 112379),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:10:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66652),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80795),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T06:24:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 51750),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80795),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T06:49:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 84396),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 84973),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:40:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 84396),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87869),
      Fortification.BASTION_OF_ICE_ID,
      12,
      false,
      `${warDateString}T07:41:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 55394),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 79544),
      Fortification.SPRING_OF_ELEMENTS_ID,
      7,
      false,
      `${warDateString}T07:58:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 52906),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 79544),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T08:06:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 72721),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 95544),
      Fortification.GATES_OF_NATURE_ID,
      4,
      true,
      `${warDateString}T08:25:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 72721),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87869),
      Fortification.BASTION_OF_ICE_ID,
      8,
      true,
      `${warDateString}T08:26:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66652),
      new Player(Guild.ASSASSINS_ID, 'KP', 99941),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      false,
      `${warDateString}T08:46:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 153950),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:24:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 161269),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 156481),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:26:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 153950),
      new Player(Guild.ASSASSINS_ID, 'KP', 99941),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      true,
      `${warDateString}T09:55:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 161269),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 158212),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:59:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 164154),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 162922),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T10:30:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 180915),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 173203),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:09:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 180915),
      new Player(Guild.ASSASSINS_ID, 'wookie', 176787),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:10:56`
    ),
  ],
  Guild.ROMANIA_ID,
  905,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_18_2020,
  Guild.ASSASSINS_ID,
  1182
);
