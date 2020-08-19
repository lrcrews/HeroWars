import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-17';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 229338),
      new Player(Guild.RO_ACADEMY_ID, 'sandman', 178553),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 229338),
      new Player(Guild.RO_ACADEMY_ID, 'Dan1 0', 146812),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 262320),
      new Player(Guild.RO_ACADEMY_ID, 'ALAN', 121203),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 262320),
      new Player(Guild.RO_ACADEMY_ID, 'Ancaelena', 115258),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.RO_ACADEMY_ID, 'XGainaUcigasaX', 96320),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:49:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.RO_ACADEMY_ID, 'Nemuikage', 75057),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:49:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 210106),
      new Player(Guild.RO_ACADEMY_ID, 'mirkwood777', 70433),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:12:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 210106),
      new Player(Guild.RO_ACADEMY_ID, 'Grok', 101479),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:12:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 390732),
      new Player(Guild.RO_ACADEMY_ID, 'ALAN', 237222),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:00:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 390732),
      new Player(Guild.RO_ACADEMY_ID, 'Nemuikage', 182689),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:01:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.RO_ACADEMY_ID, 'Ancaelena', 251713),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:07:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407489),
      new Player(Guild.RO_ACADEMY_ID, 'Phantom', 224966),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:07:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310786),
      new Player(Guild.RO_ACADEMY_ID, 'mirkwood777', 207954),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:22:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310786),
      new Player(Guild.RO_ACADEMY_ID, 'sandman', 186878),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:22:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326843),
      new Player(Guild.RO_ACADEMY_ID, 'timokouts1988', 171887),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:18:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 326843),
      new Player(Guild.RO_ACADEMY_ID, 'Mickael', 224732),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:19:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 311268),
      new Player(Guild.RO_ACADEMY_ID, 'XGainaUcigasaX', 232700),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:39:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 311268),
      new Player(Guild.RO_ACADEMY_ID, '10PM', 151759),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:39:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 337136),
      new Player(Guild.RO_ACADEMY_ID, 'Mazudal', 132641),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:56:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 337136),
      new Player(Guild.RO_ACADEMY_ID, 'Zots', 203005),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:57:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186086),
      new Player(Guild.RO_ACADEMY_ID, 'Phantom', 99885),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 186086),
      new Player(Guild.RO_ACADEMY_ID, 'klav', 77810),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:29:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 335940),
      new Player(Guild.RO_ACADEMY_ID, 'klav', 147465),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:43:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 335940),
      new Player(Guild.RO_ACADEMY_ID, 'feliss', 184867),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:44:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 424269),
      new Player(Guild.RO_ACADEMY_ID, 'Grok', 252480),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:59:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 408462),
      new Player(Guild.RO_ACADEMY_ID, 'Dan1 0', 217529),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:01:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 259621),
      new Player(Guild.RO_ACADEMY_ID, 'feliss', 72923),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:02:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 259621),
      new Player(Guild.RO_ACADEMY_ID, 'Narawin', 67116),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:02:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 208841),
      new Player(Guild.RO_ACADEMY_ID, 'Salmac', 82847),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:16:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 208841),
      new Player(Guild.RO_ACADEMY_ID, 'Arnomarty', 83942),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:16:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      new Player(Guild.RO_ACADEMY_ID, 'timokouts1988', 69427),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:29:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 251045),
      new Player(Guild.RO_ACADEMY_ID, 'VENOM', 67933),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:29:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 317406),
      new Player(Guild.RO_ACADEMY_ID, 'Arnomarty', 204438),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:02:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 397053),
      new Player(Guild.RO_ACADEMY_ID, 'VENOM', 127517),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:03:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 293648),
      new Player(Guild.RO_ACADEMY_ID, 'Salmac', 205213),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:11:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 192091),
      new Player(Guild.RO_ACADEMY_ID, '10PM', 63715),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:15:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 192091),
      new Player(Guild.RO_ACADEMY_ID, 'Mazudal', 47690),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:16:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 293648),
      new Player(Guild.RO_ACADEMY_ID, 'Narawin', 164108),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:21:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 200543),
      new Player(Guild.RO_ACADEMY_ID, 'Zots', 48058),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:38:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 200543),
      new Player(Guild.RO_ACADEMY_ID, 'Mickael', 66797),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:38:39`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'sandman', 186878),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 263871),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:18:23`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'sandman', 186878),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279318),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T01:25:12`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Ancaelena', 251713),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279318),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T01:28:32`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Ancaelena', 251713),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 279318),
      Fortification.MAGE_ACADEMY_ID,
      12,
      true,
      `${warDateString}T02:59:28`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Grok', 252480),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 335802),
      Fortification.MAGE_ACADEMY_ID,
      10,
      false,
      `${warDateString}T03:41:20`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Grok', 252480),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 296580),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:42:26`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'ALAN', 237222),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T04:06:44`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'ALAN', 237222),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 296178),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T04:07:50`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Mickael', 238407),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 335802),
      Fortification.MAGE_ACADEMY_ID,
      10,
      true,
      `${warDateString}T04:37:26`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Mickael', 238407),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 296178),
      Fortification.BARRACKS_ID,
      13,
      true,
      `${warDateString}T04:46:00`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'XGainaUcigasaX', 232898),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T04:51:32`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'XGainaUcigasaX', 232898),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T04:52:02`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Salmac', 205213),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T05:12:12`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Salmac', 205213),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T05:13:14`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Arnomarty', 204438),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T05:24:59`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Arnomarty', 204438),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T05:25:29`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'mirkwood777', 208242),
      new Player(Guild.ASSASSINS_ID, 'En4', 334409),
      Fortification.LIGHTHOUSE_ID,
      7,
      false,
      `${warDateString}T05:56:21`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'mirkwood777', 208242),
      new Player(Guild.ASSASSINS_ID, 'En4', 334409),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T05:57:49`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Zots', 203120),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T07:12:46`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Zots', 203120),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T07:13:42`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Phantom', 225516),
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T08:13:04`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Phantom', 227993),
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T08:13:55`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Nemuikage', 182949),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:17:48`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Nemuikage', 182949),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:18:11`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Dan1 0', 217984),
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:01:51`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Dan1 0', 217984),
      new Player(Guild.ASSASSINS_ID, 'Gom', 386622),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:02:58`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'timokouts1988', 171985),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T09:45:17`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'timokouts1988', 171985),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T09:49:33`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'feliss', 185213),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T09:55:16`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'feliss', 185213),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:01:05`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'klav', 147465),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:11:03`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'klav', 143530),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:12:18`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'VENOM', 127737),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:19:38`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'VENOM', 127737),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:20:11`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, '10PM', 151759),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:33:58`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, '10PM', 151759),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:06:00`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Narawin', 167449),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:14:48`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Narawin', 167449),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290732),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:15:37`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Mazudal', 132641),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:32:40`
    ),
    new Battle(
      new Player(Guild.RO_ACADEMY_ID, 'Mazudal', 128170),
      new Player(Guild.ASSASSINS_ID, 'KP', 315664),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:33:34`
    ),
  ],
  Guild.RO_ACADEMY_ID,
  184,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_34_2020,
  Guild.ASSASSINS_ID,
  1400
);
