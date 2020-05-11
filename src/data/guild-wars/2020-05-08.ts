import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-08';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      new Player(Guild.ANARCHY_ID, 'Regal', 200124),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      new Player(Guild.ANARCHY_ID, 'tntodor', 169880),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 180396),
      new Player(Guild.ANARCHY_ID, 'Bernde', 162728),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:25:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 180396),
      new Player(Guild.ANARCHY_ID, 'Mogor', 168454),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:25:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 273212),
      new Player(Guild.ANARCHY_ID, 'Easton', 211018),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:28:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 273212),
      new Player(Guild.ANARCHY_ID, 'tntodor', 219479),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:29:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 172519),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:09:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      new Player(Guild.ANARCHY_ID, 'Kai', 165691),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:10:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      new Player(Guild.ANARCHY_ID, 'En4', 254387),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:25:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123808),
      new Player(Guild.ANARCHY_ID, 'HERO', 132820),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T07:10:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 91628),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 73630),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:14:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 91628),
      new Player(Guild.ANARCHY_ID, 'Kai', 84319),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:15:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86609),
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 75657),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:15:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86609),
      new Player(Guild.ANARCHY_ID, 'Mogor', 78126),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:17:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.ANARCHY_ID, 'Galy', 70138),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:28:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.ANARCHY_ID, 'BadAss', 70918),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:29:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 95354),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:40:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91721),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 92405),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:57:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91721),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 87764),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:10:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118775),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 100529),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:22:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118775),
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 101978),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:22:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ANARCHY_ID, 'Marcus', 123941),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:42:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 142408),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:43:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 83243),
      new Player(Guild.ANARCHY_ID, 'Easton', 72629),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:26:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 83243),
      new Player(Guild.ANARCHY_ID, 'Bernde', 73633),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:27:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349737),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 313118),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:27:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349737),
      new Player(Guild.ANARCHY_ID, 'En4', 273051),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:35:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123808),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 108743),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:39:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276843),
      new Player(Guild.ANARCHY_ID, 'Regal', 213745),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:45:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 201819),
      new Player(Guild.ANARCHY_ID, 'Galy', 151264),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:49:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 203305),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 174301),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:49:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276843),
      new Player(Guild.ANARCHY_ID, 'BadAss', 200947),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:50:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 199347),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 157093),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:57:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 199347),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 144486),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:58:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 222735),
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 177620),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:02:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 195146),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 143858),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:02:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 222735),
      new Player(Guild.ANARCHY_ID, 'HERO', 188644),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:03:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 195146),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 170530),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:03:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 196172),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 198429),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:29:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 276855),
      new Player(Guild.ANARCHY_ID, 'Marcus', 307258),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T12:36:06`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 200124),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 212330),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:34:37`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 200124),
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:35:26`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 73630),
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T00:50:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 73630),
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T00:51:43`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 70138),
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T00:54:19`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 254387),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T01:15:10`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 254387),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 226537),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:27:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 169880),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T02:50:59`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 169880),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T02:53:17`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 101978),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 98546),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:59:07`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 101978),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123808),
      Fortification.BASTION_OF_FIRE_ID,
      12,
      false,
      `${warDateString}T02:59:51`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 100529),
      new Player(Guild.ASSASSINS_ID, 'KP', 102422),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T03:12:09`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 100529),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T03:12:42`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 92836),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 89615),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T03:13:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 90789),
      new Player(Guild.ASSASSINS_ID, 'wookie', 89673),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:14:53`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 132820),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 1315886),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:32:40`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 132820),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 149199),
      Fortification.BASTION_OF_ICE_ID,
      17,
      false,
      `${warDateString}T03:36:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 75657),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:55:22`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop@5280', 75657),
      new Player(Guild.ASSASSINS_ID, 'Don', 70211),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:55:49`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 87764),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86609),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:05:39`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 87764),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 83243),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:06:05`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 70138),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 89615),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T08:43:39`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 73633),
      new Player(Guild.ASSASSINS_ID, 'KP', 102422),
      Fortification.BASTION_OF_FIRE_ID,
      5,
      true,
      `${warDateString}T09:53:21`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 73633),
      new Player(Guild.ASSASSINS_ID, 'hotau086', 107877),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      true,
      `${warDateString}T09:53:53`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 109175),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123808),
      Fortification.BASTION_OF_FIRE_ID,
      8,
      true,
      `${warDateString}T09:56:05`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 109175),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 128792),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:57:04`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 201173),
      new Player(Guild.ASSASSINS_ID, 'Dan', 194788),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:57:57`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 217218),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 199347),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:00:07`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 307321),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349658),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T10:24:33`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 307412),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349658),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T10:30:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 316515),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349658),
      Fortification.CITADEL_ID,
      14,
      true,
      `${warDateString}T10:36:54`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 211111),
      new Player(Guild.ASSASSINS_ID, 'elo', 183135),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:06:28`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 179437),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 168797),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:24:35`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 313118),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 220637),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:31:01`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 78126),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 149199),
      Fortification.BASTION_OF_ICE_ID,
      3,
      true,
      `${warDateString}T11:34:49`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 211111),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 175229),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:43:23`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 171985),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 156347),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:02:02`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 171985),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 156238),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:03:15`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 95354),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92885),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:05:27`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 168454),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 162525),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:11:02`
    ),
  ],
  Guild.ANARCHY_ID,
  920,
  warDateString,
  'Friday',
  GuildWar.WAR_WEEK_19_2020,
  Guild.ASSASSINS_ID,
  1242
);
