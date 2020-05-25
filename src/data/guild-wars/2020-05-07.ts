import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-07';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:56:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:56:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      new Player(Guild.MRCO_ID, 'Saucy', 167260),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:41:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      new Player(Guild.MRCO_ID, 'Angelina', 164559),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:41:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123357),
      new Player(Guild.MRCO_ID, 'BIG D', 109132),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:04:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123357),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 123740),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:04:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      new Player(Guild.MRCO_ID, 'pertrainerik', 135379),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:15:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      new Player(Guild.MRCO_ID, 'RadRob', 169920),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:16:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.MRCO_ID, 'Wallario', 84238),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:19:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.MRCO_ID, 'Revan', 71231),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:20:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86274),
      new Player(Guild.MRCO_ID, 'pertrainerik', 61092),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:24:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86274),
      new Player(Guild.MRCO_ID, 'RadRob', 45515),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:25:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.MRCO_ID, 'Anhvilla', 68130),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:38:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.MRCO_ID, 'Tfy', 61551),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:39:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 273112),
      new Player(Guild.MRCO_ID, 'Sardine', 372432),
      Fortification.CITADEL_ID,
      15,
      false,
      `${warDateString}T06:47:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 181390),
      new Player(Guild.MRCO_ID, 'Sardine', 372432),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T07:25:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 158191),
      new Player(Guild.MRCO_ID, 'Sardine', 372432),
      Fortification.CITADEL_ID,
      5,
      true,
      `${warDateString}T07:29:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 273112),
      new Player(Guild.MRCO_ID, 'MrTom', 209724),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:31:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276749),
      new Player(Guild.MRCO_ID, 'budge', 235311),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:04:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276749),
      new Player(Guild.MRCO_ID, 'Saucy', 205818),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:05:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 179573),
      new Player(Guild.MRCO_ID, 'Wallario', 161780),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:34:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 179573),
      new Player(Guild.MRCO_ID, 'Grok', 157553),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:34:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118775),
      new Player(Guild.MRCO_ID, 'Amothep', 99853),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:49:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118775),
      new Player(Guild.MRCO_ID, 'MrTom', 88227),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:49:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202878),
      new Player(Guild.MRCO_ID, 'Tfy', 159075),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 196434),
      new Player(Guild.MRCO_ID, '_DAZ_', 169477),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:40:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82775),
      new Player(Guild.MRCO_ID, '_DAZ_', 62598),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:35:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82775),
      new Player(Guild.MRCO_ID, 'Grok', 48471),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:36:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.MRCO_ID, 'budge', 135386),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:09:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.MRCO_ID, 'badianchick', 119241),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:10:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 91628),
      new Player(Guild.MRCO_ID, 'Kifyu', 66793),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:23:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 91628),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 64622),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:23:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 220637),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 219982),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:30:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 199347),
      new Player(Guild.MRCO_ID, 'BIG D', 154790),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:11:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 199347),
      new Player(Guild.MRCO_ID, 'Anhvilla', 152624),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:12:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 196434),
      new Player(Guild.MRCO_ID, 'Amothep', 181482),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:12:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 352332),
      new Player(Guild.MRCO_ID, 'Angelina', 289075),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:12:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 222473),
      new Player(Guild.MRCO_ID, 'Revan', 198626),
      Fortification.MAGE_ACADEMY_ID,
      15,
      false,
      `${warDateString}T12:16:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202995),
      new Player(Guild.MRCO_ID, 'Revan', 198626),
      Fortification.MAGE_ACADEMY_ID,
      5,
      true,
      `${warDateString}T12:16:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349658),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 192936),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:17:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 256429),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:23:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 229072),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:24:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 289075),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276430),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:44:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 289075),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 276468),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:45:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 171463),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 156060),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:50:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 171463),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 155901),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:51:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266883),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211704),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:54:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266883),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 226537),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:54:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 178793),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      Fortification.MAGE_ACADEMY_ID,
      17,
      false,
      `${warDateString}T03:33:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 178793),
      new Player(Guild.ASSASSINS_ID, 'KP', 202878),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:37:38`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Grok', 157707),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187200),
      Fortification.MAGE_ACADEMY_ID,
      3,
      true,
      `${warDateString}T04:09:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'budge', 135386),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 131586),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:12:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'budge', 135386),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123357),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:13:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 119241),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 89615),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:35:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 119241),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 98127),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:36:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 210013),
      new Player(Guild.ASSASSINS_ID, 'Gom', 286102),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T05:12:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 210013),
      new Player(Guild.ASSASSINS_ID, 'Gom', 286102),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T05:13:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 99853),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86274),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:37:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 167260),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 149199),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:47:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 168434),
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:07:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 71231),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      false,
      `${warDateString}T07:27:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 71231),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      false,
      `${warDateString}T07:28:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 124254),
      new Player(Guild.ASSASSINS_ID, 'elo', 118409),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:37:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 124254),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 128792),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:39:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 100191),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92885),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:44:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 84238),
      new Player(Guild.ASSASSINS_ID, 'Don', 69825),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:10:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 199345),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 162970),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:24:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 109132),
      new Player(Guild.ASSASSINS_ID, 'KP', 101994),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:27:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 109132),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:28:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 196499),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184393),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:32:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 84238),
      new Player(Guild.ASSASSINS_ID, 'wookie', 89673),
      Fortification.GATES_OF_NATURE_ID,
      13,
      false,
      `${warDateString}T09:42:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 171349),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 167337),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:44:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 171349),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161749),
      Fortification.FOUNDRY_ID,
      2,
      false,
      `${warDateString}T09:45:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 61092),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      8,
      true,
      `${warDateString}T09:49:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 61551),
      new Player(Guild.ASSASSINS_ID, 'wookie', 89673),
      Fortification.GATES_OF_NATURE_ID,
      7,
      true,
      `${warDateString}T09:59:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 61551),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82775),
      Fortification.SPRING_OF_ELEMENTS_ID,
      12,
      false,
      `${warDateString}T10:03:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'pertrainerik', 61092),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82775),
      Fortification.SPRING_OF_ELEMENTS_ID,
      8,
      true,
      `${warDateString}T10:08:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 186694),
      new Player(Guild.ASSASSINS_ID, 'Gom', 286102),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:40:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 186694),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 167337),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T10:56:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Grok', 157707),
      new Player(Guild.ASSASSINS_ID, 'Gom', 286102),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T12:55:18`
    ),
  ],
  Guild.MRCO_ID,
  958,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_19_2020,
  Guild.ASSASSINS_ID,
  1300
);
