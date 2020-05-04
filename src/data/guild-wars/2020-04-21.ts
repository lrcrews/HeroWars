import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-21';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 142585),
      new Player(Guild.ANARCHY_ID, 'HERO', 122235),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:54:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      new Player(Guild.ANARCHY_ID, 'Regal', 122235),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:30:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      new Player(Guild.ANARCHY_ID, 'En4', 251772),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:31:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 169075),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 137171),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:39:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 169075),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 127988),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:40:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 165870),
      new Player(Guild.ANARCHY_ID, 'tntodor', 163513),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:46:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 165870),
      new Player(Guild.ANARCHY_ID, 'Marcus', 119362),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:50:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 119569),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 73149),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:59:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 174949),
      new Player(Guild.ANARCHY_ID, 'Mogor', 148472),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:00:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 259166),
      new Player(Guild.ANARCHY_ID, 'Regal', 244457),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:17:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 259166),
      new Player(Guild.ANARCHY_ID, 'tntodor', 243421),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:18:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.ANARCHY_ID, 'BadAss', 63632),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:23:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81882),
      new Player(Guild.ANARCHY_ID, 'Easton', 65136),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:23:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.ANARCHY_ID, 'galy.yang', 64361),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      false,
      `${warDateString}T06:24:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81882),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 71702),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:24:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 76436),
      new Player(Guild.ANARCHY_ID, 'Bernde', 69352),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:26:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 76436),
      new Player(Guild.ANARCHY_ID, "Booz'r", 65164),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:27:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118274),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 111931),
      Fortification.BASTION_OF_ICE_ID,
      15,
      false,
      `${warDateString}T06:31:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118274),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 91240),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:32:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 277053),
      new Player(Guild.ANARCHY_ID, 'BadAss', 202358),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:29:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 187000),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 154678),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:40:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 124805),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 111931),
      Fortification.BASTION_OF_ICE_ID,
      5,
      true,
      `${warDateString}T07:41:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 262896),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 192386),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:05:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 262896),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 170371),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:07:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105447),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 90074),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:12:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105447),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 84583),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:13:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 338478),
      new Player(Guild.ANARCHY_ID, 'Marcus', 290434),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:21:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80136),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 70466),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:37:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80136),
      new Player(Guild.ANARCHY_ID, 'Mogor', 68755),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:38:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 88128),
      new Player(Guild.ANARCHY_ID, 'Kai', 74763),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:39:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 88128),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 78274),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:40:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 195103),
      new Player(Guild.ANARCHY_ID, 'galy.yang', 136920),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:17:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 195103),
      new Player(Guild.ANARCHY_ID, 'Bernde', 135628),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:18:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 184407),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 141278),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:44:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 207530),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 163421),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:48:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 210799),
      new Player(Guild.ANARCHY_ID, 'Kai', 148433),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:49:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231504),
      new Player(Guild.ANARCHY_ID, 'HERO', 164318),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:48:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 340649),
      new Player(Guild.ANARCHY_ID, 'En4', 256709),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:01:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      new Player(Guild.ANARCHY_ID, 'galy.yang', 64361),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      true,
      `${warDateString}T12:32:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 184407),
      new Player(Guild.ANARCHY_ID, "Booz'r", 127902),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:36:03`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 197901),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:19`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 197901),
      new Player(Guild.ASSASSINS_ID, 'Gom', 227185),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:07`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 282837),
      new Player(Guild.ASSASSINS_ID, 'Gom', 276951),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T01:03:48`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 282837),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231681),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:08:26`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 251772),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T01:36:38`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 251772),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 221494),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:37:18`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 68755),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T02:23:43`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 90074),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T03:32:33`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 70466),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 246321),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T04:11:31`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 163513),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 142585),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:12:19`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 70466),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:12:44`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 163513),
      new Player(Guild.ASSASSINS_ID, 'Dan', 165870),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:13:03`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 90074),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80139),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:18:38`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 71702),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81405),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T04:50:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 71702),
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T04:51:44`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 68755),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:52:51`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'galy.yang', 64361),
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T05:21:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'galy.yang', 64361),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 81405),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      true,
      `${warDateString}T05:22:35`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 69352),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 76436),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      false,
      `${warDateString}T05:27:04`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 69352),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 76436),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      true,
      `${warDateString}T05:27:41`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 111931),
      new Player(Guild.ASSASSINS_ID, 'elo', 105447),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:38:13`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 91240),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 124353),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T06:51:31`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 91240),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 119150),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T06:52:11`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 73479),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 119150),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T07:47:26`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 73479),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 124353),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T07:48:28`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 78559),
      new Player(Guild.ASSASSINS_ID, 'wookie', 84422),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T07:58:31`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 78559),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 84280),
      Fortification.GATES_OF_NATURE_ID,
      14,
      false,
      `${warDateString}T07:59:33`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 84583),
      new Player(Guild.ASSASSINS_ID, 'wookie', 84422),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T08:06:05`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 84583),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90071),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:17:03`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 122235),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118274),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:49:06`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 122235),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 141755),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T08:51:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, "Booz'r", 59325),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 84280),
      Fortification.GATES_OF_NATURE_ID,
      6,
      true,
      `${warDateString}T09:47:16`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, "Booz'r", 59325),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 141755),
      Fortification.BASTION_OF_FIRE_ID,
      0,
      false,
      `${warDateString}T09:50:49`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 237139),
      new Player(Guild.ASSASSINS_ID, 'Gom', 276951),
      Fortification.BARRACKS_ID,
      18,
      true,
      `${warDateString}T10:51:47`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 163421),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 140079),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:55:30`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 78274),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 141755),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T11:01:09`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 204426),
      new Player(Guild.ASSASSINS_ID, 'elo', 169627),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:16`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 204426),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 166000),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:49`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 205294),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 150877),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:48:07`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 205294),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 149200),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:48:35`
    ),
  ],
  Guild.ANARCHY_ID,
  880,
  warDateString,
  'Tuesday',
  GuildWar.WAR_WEEK_17_2020,
  Guild.ASSASSINS_ID,
  1320
);
