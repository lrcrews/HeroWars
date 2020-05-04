import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-28';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 90116),
      new Player(Guild.MRCO_ID, 'Wallario', 81398),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:19:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176242),
      new Player(Guild.MRCO_ID, 'Tfy :)', 153395),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:20:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:52:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T04:53:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.MRCO_ID, 'Amothep', 92138),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:35:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T05:59:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.MRCO_ID, 'Indred Cole', 74087),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:02:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.MRCO_ID, 'ecka', 62644),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:02:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120379),
      new Player(Guild.MRCO_ID, 'badianchick', 114869),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:03:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120379),
      new Player(Guild.MRCO_ID, 'BIG D', 102090),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:04:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83348),
      new Player(Guild.MRCO_ID, 'Mincer2412', 45030),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:05:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.MRCO_ID, '_DAZ_', 60256),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:06:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.MRCO_ID, 'Revan', 70280),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:07:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      new Player(Guild.MRCO_ID, 'Anhvilla', 66983),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:59:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      new Player(Guild.MRCO_ID, 'Tfy :)', 62518),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:00:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.MRCO_ID, 'Angelina', 153422),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:06:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MRCO_ID, 'budge', 131059),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:18:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MRCO_ID, 'Saucy', 151153),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:19:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 107892),
      new Player(Guild.MRCO_ID, 'MrTom', 93171),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:30:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 340486),
      new Player(Guild.MRCO_ID, 'Sardine', 364965),
      Fortification.CITADEL_ID,
      7,
      false,
      `${warDateString}T07:40:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 338331),
      new Player(Guild.MRCO_ID, 'Sardine', 364965),
      Fortification.CITADEL_ID,
      13,
      true,
      `${warDateString}T08:09:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 214031),
      new Player(Guild.MRCO_ID, 'badianchick', 207995),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:36:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87456),
      new Player(Guild.MRCO_ID, 'Kifyu', 74618),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:36:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87456),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 59443),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:36:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 214208),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 204011),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:48:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266785),
      new Player(Guild.MRCO_ID, 'badianchick', 207995),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:49:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 172682),
      new Player(Guild.MRCO_ID, 'Anhvilla', 145302),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:51:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 281116),
      new Player(Guild.MRCO_ID, 'budge', 224686),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:56:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266785),
      new Player(Guild.MRCO_ID, 'budge', 224686),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:28:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199482),
      new Player(Guild.MRCO_ID, 'Indred Cole', 147946),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:37:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199482),
      new Player(Guild.MRCO_ID, 'ecka', 177862),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T10:38:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 265922),
      new Player(Guild.MRCO_ID, 'MrTom', 212952),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:14:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 266655),
      new Player(Guild.MRCO_ID, 'Saucy', 204248),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:15:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 190706),
      new Player(Guild.MRCO_ID, 'Wallario', 156558),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:15:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 190706),
      new Player(Guild.MRCO_ID, 'BIG D', 145149),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:16:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 188902),
      new Player(Guild.MRCO_ID, 'ecka', 177862),
      Fortification.CITADEL_ID,
      14,
      true,
      `${warDateString}T12:11:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 107892),
      new Player(Guild.MRCO_ID, 'PetrifieBear', 118334),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T12:13:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      new Player(Guild.MRCO_ID, 'PetrifieBear', 118334),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T12:30:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'ecka', 179752),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 155642),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:25:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'ecka', 179752),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 168978),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:26:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 164975),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 145431),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:35:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:57:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:57:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266223),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 224012),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:20:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266223),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206303),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:21:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 114869),
      new Player(Guild.ASSASSINS_ID, 'elo', 107892),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:39:53`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 114869),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 91388),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:40:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 185357),
      new Player(Guild.ASSASSINS_ID, 'wookie', 176169),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:40:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'budge', 131602),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 126395),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:43:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'budge', 131602),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120395),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:44:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 284249),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 265812),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T06:36:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 155096),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:36:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 151153),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 144222),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:21:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 111031),
      new Player(Guild.ASSASSINS_ID, 'KP', 98156),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:21:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 151153),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 125077),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:22:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 111031),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:23:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 89081),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83348),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T07:49:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 85458),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87459),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T07:54:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 215429),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 175099),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:54:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 92138),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:55:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 92138),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T07:56:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy :)', 62518),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87459),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T08:08:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy :)', 62518),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83348),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T08:09:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 81398),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:16:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Mincer2412', 45302),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T08:44:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 102091),
      new Player(Guild.ASSASSINS_ID, 'wookie', 86374),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:16:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 102091),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:17:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 218693),
      new Player(Guild.ASSASSINS_ID, 'Don', 188902),
      Fortification.FOUNDRY_ID,
      4,
      false,
      `${warDateString}T09:23:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Mincer2412', 151180),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 152474),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:45:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 185357),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 172538),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:59:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 164975),
      new Player(Guild.ASSASSINS_ID, 'Don', 188902),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T11:30:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 168380),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 156633),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:29:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 168380),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155884),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:33:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 157196),
      new Player(Guild.ASSASSINS_ID, 'elo', 180700),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T12:42:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 178103),
      new Player(Guild.ASSASSINS_ID, 'elo', 180700),
      Fortification.CITADEL_ID,
      16,
      true,
      `${warDateString}T12:45:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 178103),
      new Player(Guild.ASSASSINS_ID, 'Don', 188902),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T12:47:06`
    ),
  ],
  Guild.MRCO_ID,
  904,
  warDateString,
  'Tuesday',
  GuildWar.WAR_WEEK_18_2020,
  Guild.ASSASSINS_ID,
  1056
);
