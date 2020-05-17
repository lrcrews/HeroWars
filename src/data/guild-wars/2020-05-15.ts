import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-15';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 309003),
      new Player(Guild.ANARCHY_ID, 'DoyleB', 192022),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:53:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 309003),
      new Player(Guild.ANARCHY_ID, 'ecka', 193511),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:54:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 239798),
      new Player(Guild.ANARCHY_ID, 'Bernde', 170045),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:10:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 239798),
      new Player(Guild.ANARCHY_ID, 'Lorengaard', 159409),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:11:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 171246),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:18:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 182276),
      new Player(Guild.ANARCHY_ID, 'BadAss', 128175),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:19:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 137203),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 115581),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:28:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 137203),
      new Player(Guild.ANARCHY_ID, 'DoyleB', 115589),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:28:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277813),
      new Player(Guild.ANARCHY_ID, 'BadAss', 217621),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:32:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277813),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 172752),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:33:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 255820),
      new Player(Guild.ANARCHY_ID, 'Kai', 173098),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:54:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 239734),
      new Player(Guild.ANARCHY_ID, 'GHOR', 165813),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:57:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 115397),
      new Player(Guild.ANARCHY_ID, 'Bernde', 104119),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:03:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 115397),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 105065),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:03:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 139059),
      new Player(Guild.ANARCHY_ID, 'PomadeFreak.com', 57080),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:24:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 139059),
      new Player(Guild.ANARCHY_ID, 'Warbrain', 51324),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:26:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 287928),
      new Player(Guild.ANARCHY_ID, 'Uderzo', 154150),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:12:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 287928),
      new Player(Guild.ANARCHY_ID, 'bob88', 149592),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:13:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 121851),
      new Player(Guild.ANARCHY_ID, 'bob88', 84900),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:15:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 121851),
      new Player(Guild.ANARCHY_ID, 'Uderzo', 52476),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:15:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 159142),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 114335),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:18:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 159142),
      new Player(Guild.ANARCHY_ID, 'Kai', 110720),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:20:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365983),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 193371),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:26:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365983),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 179330),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:26:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 287524),
      new Player(Guild.ANARCHY_ID, "Booz'r", 135558),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:20:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 287524),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 165735),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:21:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 164512),
      new Player(Guild.ANARCHY_ID, 'Rikune', 132523),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:09:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 164512),
      new Player(Guild.ANARCHY_ID, 'JustFinest', 130514),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:10:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 127448),
      new Player(Guild.ANARCHY_ID, 'Galy', 90783),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:36:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 127448),
      new Player(Guild.ANARCHY_ID, "Booz'r", 81362),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:36:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 126172),
      new Player(Guild.ANARCHY_ID, 'Lorengaard', 80996),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:09:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 126172),
      new Player(Guild.ANARCHY_ID, 'ecka', 72733),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:10:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 333859),
      new Player(Guild.ANARCHY_ID, 'PomadeFreak.com', 157988),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:20:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 333859),
      new Player(Guild.ANARCHY_ID, 'Warbrain', 151111),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:20:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 129692),
      new Player(Guild.ANARCHY_ID, 'JustFinest', 75535),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:36:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 129676),
      new Player(Guild.ANARCHY_ID, 'GHOR', 64339),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:37:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 128356),
      new Player(Guild.ANARCHY_ID, 'Mogor', 79459),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:44:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 128356),
      new Player(Guild.ANARCHY_ID, 'Rikune', 73610),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:45:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 181381),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 183990),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:17:25`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 181381),
      new Player(Guild.ASSASSINS_ID, 'elo', 200021),
      Fortification.BARRACKS_ID,
      10,
      false,
      `${warDateString}T00:19:51`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 125326),
      new Player(Guild.ASSASSINS_ID, 'KP', 213527),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T00:25:09`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 136729),
      new Player(Guild.ASSASSINS_ID, 'KP', 213527),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T00:25:54`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 217621),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 228330),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:35:30`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 217621),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 197063),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:43:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 189187),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T02:10:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 193371),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T02:11:34`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'DoyleB', 192022),
      new Player(Guild.ASSASSINS_ID, 'KP', 213527),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T02:21:12`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'DoyleB', 192022),
      new Player(Guild.ASSASSINS_ID, 'KP', 213527),
      Fortification.BARRACKS_ID,
      4,
      true,
      `${warDateString}T02:23:02`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 171246),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      8,
      false,
      `${warDateString}T03:44:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 171246),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T03:44:39`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'ecka', 197273),
      new Player(Guild.ASSASSINS_ID, 'elo', 200021),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T03:58:42`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'ecka', 197273),
      new Player(Guild.ASSASSINS_ID, 'elo', 200021),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T03:59:29`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Warbrain', 151111),
      new Player(Guild.ASSASSINS_ID, 'elo', 200021),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T04:33:56`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 105065),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T04:45:44`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 105065),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T04:46:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Uderzo', 162282),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T06:56:28`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Uderzo', 162189),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 216558),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:57:32`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'GHOR', 166213),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T07:16:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'GHOR', 166213),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T07:17:57`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'JustFinest', 131277),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:35:48`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'JustFinest', 131277),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:39:12`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 177861),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:48:13`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 177861),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:50:03`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Rikune', 132523),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T07:53:49`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Rikune', 132523),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T07:54:06`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Warbrain', 151268),
      new Player(Guild.ASSASSINS_ID, 'HERO', 193323),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T08:19:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 104119),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:47:25`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 104119),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:47:56`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 115581),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      5,
      false,
      `${warDateString}T10:41:08`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 115581),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T10:41:28`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, "Booz'r", 81362),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T11:01:52`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Lorengaard', 159409),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 216558),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T11:05:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Lorengaard', 159409),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 216558),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T11:06:44`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'bob88', 150433),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 216558),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T12:00:03`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'bob88', 150433),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 216558),
      Fortification.LIGHTHOUSE_ID,
      8,
      true,
      `${warDateString}T12:00:23`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, "Booz'r", 81362),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T12:09:06`
    ),
  ],
  Guild.ANARCHY_ID,
  251,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_20_2020,
  Guild.ASSASSINS_ID,
  1240
);
