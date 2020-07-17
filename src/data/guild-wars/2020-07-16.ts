import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-16';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 218998),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 204889),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:25:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.MRCO_ID, 'MEATeor', 241973),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:58:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165214),
      new Player(Guild.MRCO_ID, 'wapdap', 81402),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:25:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165214),
      new Player(Guild.MRCO_ID, 'Grok', 87222),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:25:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      new Player(Guild.MRCO_ID, 'Wallario', 127064),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:26:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      new Player(Guild.MRCO_ID, 'MrTom', 102424),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:26:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315107),
      new Player(Guild.MRCO_ID, 'Grok', 232199),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:41:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.MRCO_ID, 'badianchick', 183351),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:41:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 336219),
      new Player(Guild.MRCO_ID, 'MrTom', 281964),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:43:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 321279),
      new Player(Guild.MRCO_ID, 'MEATeor', 336774),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:52:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329504),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 306891),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:53:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 193481),
      new Player(Guild.MRCO_ID, 'Tfy', 98728),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:08:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 193481),
      new Player(Guild.MRCO_ID, 'RadRob', 86416),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:09:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      new Player(Guild.MRCO_ID, 'Amothep', 170143),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:25:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      new Player(Guild.MRCO_ID, 'Kifyu', 166778),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:26:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183499),
      new Player(Guild.MRCO_ID, 'perMEATerik', 111020),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:36:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183499),
      new Player(Guild.MRCO_ID, 'VonBagher', 85012),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:36:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 409390),
      new Player(Guild.MRCO_ID, 'Sardine', 409295),
      Fortification.CITADEL_ID,
      14,
      false,
      `${warDateString}T07:38:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 162154),
      new Player(Guild.MRCO_ID, 'philippe', 99035),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:01:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 162154),
      new Player(Guild.MRCO_ID, 'Warbrain', 87773),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:02:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 334457),
      new Player(Guild.MRCO_ID, 'VonBagher', 230725),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:39:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293190),
      new Player(Guild.MRCO_ID, 'perMEATerik', 213194),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:39:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 334457),
      new Player(Guild.MRCO_ID, 'Tfy', 239050),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:40:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 293190),
      new Player(Guild.MRCO_ID, 'wapdap', 200380),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:41:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 374061),
      new Player(Guild.MRCO_ID, 'German Wiener', 248569),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 374061),
      new Player(Guild.MRCO_ID, 'Amothep', 268606),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:56:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 282013),
      new Player(Guild.MRCO_ID, 'Coop5280', 226835),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:13:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 282013),
      new Player(Guild.MRCO_ID, 'philippe', 213149),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:13:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 134060),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:16:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.MRCO_ID, 'Coop5280', 126516),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:16:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 271736),
      new Player(Guild.MRCO_ID, 'Sardine', 409295),
      Fortification.CITADEL_ID,
      6,
      true,
      `${warDateString}T09:23:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 359881),
      new Player(Guild.MRCO_ID, 'Kifyu', 239871),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:25:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 273246),
      new Player(Guild.MRCO_ID, 'Gardakus', 213459),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:10:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271021),
      new Player(Guild.MRCO_ID, 'Wallario', 201085),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:11:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 260306),
      new Player(Guild.MRCO_ID, 'German Wiener', 137415),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:06:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 287352),
      new Player(Guild.MRCO_ID, 'Warbrain', 189190),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:40:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:52:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:52:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:54:44`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:55:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 113030),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T03:14:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 204889),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 226481),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:31:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 204889),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212330),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:36:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 241973),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 260306),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:51:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 241973),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:53:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 183351),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 189126),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 183351),
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:02:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 170143),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 165400),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:16:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 170143),
      new Player(Guild.ASSASSINS_ID, 'elo', 162154),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:17:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 239614),
      new Player(Guild.ASSASSINS_ID, 'elo', 250161),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:21:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 239614),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 234047),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:22:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 248654),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 243530),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:14:34`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 308811),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 282265),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:06:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 126516),
      new Player(Guild.ASSASSINS_ID, 'KP', 171970),
      Fortification.GATES_OF_NATURE_ID,
      13,
      false,
      `${warDateString}T09:24:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 166778),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 165214),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:26:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 282102),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 283701),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:26:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 166778),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183499),
      Fortification.SPRING_OF_ELEMENTS_ID,
      12,
      false,
      `${warDateString}T09:26:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 282102),
      new Player(Guild.ASSASSINS_ID, 'HERO', 271681),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:27:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 126516),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183499),
      Fortification.SPRING_OF_ELEMENTS_ID,
      8,
      true,
      `${warDateString}T09:28:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 309138),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 315058),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:35:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'wapdap', 82601),
      new Player(Guild.ASSASSINS_ID, 'KP', 171970),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T10:14:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'wapdap', 82601),
      new Player(Guild.ASSASSINS_ID, 'KP', 171970),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T10:14:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Warbrain', 173836),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271021),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T10:17:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Warbrain', 173836),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271021),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:18:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 246397),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 260168),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T10:55:12`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 215968),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271021),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:57:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'philippe', 215968),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 271021),
      Fortification.BARRACKS_ID,
      18,
      true,
      `${warDateString}T10:59:00`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 111020),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      Fortification.GATES_OF_NATURE_ID,
      6,
      false,
      `${warDateString}T11:03:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 246397),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 260168),
      Fortification.FOUNDRY_ID,
      2,
      false,
      `${warDateString}T11:18:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 232625),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 247674),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T11:25:53`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'VonBagher', 229351),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 247674),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:38:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 127064),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      Fortification.GATES_OF_NATURE_ID,
      0,
      false,
      `${warDateString}T12:10:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 127064),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 247780),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T12:10:55`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'German Wiener', 243885),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 280310),
      Fortification.CITADEL_ID,
      9,
      false,
      `${warDateString}T12:27:23`
    ),
  ],
  Guild.MRCO_ID,
  739,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_29_2020,
  Guild.ASSASSINS_ID,
  1300
);
