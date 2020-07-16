import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-12';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:46:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:46:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126532),
      new Player(Guild.MRCO_ID, 'MrTom', 95875),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:27:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126532),
      new Player(Guild.MRCO_ID, 'Kifyu', 104229),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:27:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      new Player(Guild.MRCO_ID, 'Saucy', 236744),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:39:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      new Player(Guild.MRCO_ID, 'MEATeor', 208432),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:41:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 230330),
      new Player(Guild.MRCO_ID, 'Angelina', 197329),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:52:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 134162),
      new Player(Guild.MRCO_ID, 'Big-D', 115625),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:12:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 134162),
      new Player(Guild.MRCO_ID, 'Wallario', 89639),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:13:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      new Player(Guild.MRCO_ID, '_DAZ_', 65249),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:22:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      new Player(Guild.MRCO_ID, 'RadRob', 47192),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:22:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158145),
      new Player(Guild.MRCO_ID, 'Amothep', 137430),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:15:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158145),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 145044),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:16:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120332),
      new Player(Guild.MRCO_ID, 'wapdap', 61896),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:21:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120332),
      new Player(Guild.MRCO_ID, 'Grok', 55948),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:21:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 284354),
      new Player(Guild.MRCO_ID, 'Sardine', 378766),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T06:54:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 288649),
      new Player(Guild.MRCO_ID, 'Saucy', 208686),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:41:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 281848),
      new Player(Guild.MRCO_ID, 'MrTom', 216413),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:42:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 281848),
      new Player(Guild.MRCO_ID, '_DAZ_', 182542),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:42:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 293981),
      new Player(Guild.MRCO_ID, 'Wallario', 168937),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:45:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 118783),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 90166),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:53:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 118783),
      new Player(Guild.MRCO_ID, 'Revan', 75217),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:53:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 127429),
      new Player(Guild.MRCO_ID, 'perMEATerik', 65516),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:24:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 127429),
      new Player(Guild.MRCO_ID, 'Tfy', 62705),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:24:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 321832),
      new Player(Guild.MRCO_ID, 'Sardine', 378766),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:35:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 181049),
      new Player(Guild.MRCO_ID, 'badianchick', 152555),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:38:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 190949),
      new Player(Guild.MRCO_ID, 'perMEATerik', 138555),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:39:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 368506),
      new Player(Guild.MRCO_ID, 'Angelina', 293190),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:42:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 237820),
      new Player(Guild.MRCO_ID, 'Amothep', 199228),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:45:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 237820),
      new Player(Guild.MRCO_ID, 'RadRob', 177241),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:46:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 329517),
      new Player(Guild.MRCO_ID, 'Gardakus', 212634),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:58:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 329517),
      new Player(Guild.MRCO_ID, 'badianchick', 222916),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:58:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 330436),
      new Player(Guild.MRCO_ID, 'MEATeor', 257210),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:00:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 330436),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 229386),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:01:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 284874),
      new Player(Guild.MRCO_ID, 'Revan', 204869),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:32:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230724),
      new Player(Guild.MRCO_ID, 'Kifyu', 197816),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:35:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 208376),
      new Player(Guild.MRCO_ID, 'wapdap', 144588),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:56:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 208376),
      new Player(Guild.MRCO_ID, 'Tfy', 165560),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:57:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 275874),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 205186),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:13:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230724),
      new Player(Guild.MRCO_ID, 'Grok', 160354),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:38:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:49:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:49:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 293442),
      new Player(Guild.ASSASSINS_ID, 'En4', 273455),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:01:43`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 293442),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 288649),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:08:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:27:07`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255124),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:28:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 137430),
      new Player(Guild.ASSASSINS_ID, 'KP', 118783),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T03:04:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 216494),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 227744),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:05:38`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 216494),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 222115),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:06:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 181348),
      new Player(Guild.ASSASSINS_ID, 'HERO', 190949),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:05:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 182542),
      new Player(Guild.ASSASSINS_ID, 'KP', 206584),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:07:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 165841),
      new Player(Guild.ASSASSINS_ID, 'elo', 186123),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T04:16:08`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 165841),
      new Player(Guild.ASSASSINS_ID, 'elo', 186123),
      Fortification.BARRACKS_ID,
      15,
      true,
      `${warDateString}T04:19:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 137430),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:43:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 204869),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193476),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:08:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 204869),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 207143),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:08:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 145044),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 127703),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:20:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 145044),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124456),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:21:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 236744),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 232260),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:47:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 236744),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      14,
      false,
      `${warDateString}T09:59:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 209048),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 215837),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T10:35:45`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'wapdap', 61910),
      new Player(Guild.ASSASSINS_ID, 'KP', 118783),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      false,
      `${warDateString}T10:41:49`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'wapdap', 61896),
      new Player(Guild.ASSASSINS_ID, 'KP', 118783),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T10:42:47`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 115625),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126532),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:54:09`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 89639),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 215837),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T11:05:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 153035),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 134162),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:08:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 212757),
      new Player(Guild.ASSASSINS_ID, 'HERO', 181049),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:13:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 182521),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 166097),
      Fortification.CITADEL_ID,
      5,
      false,
      `${warDateString}T11:13:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'RadRob', 182521),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 166097),
      Fortification.CITADEL_ID,
      15,
      true,
      `${warDateString}T11:15:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 153035),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158165),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:01:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 115625),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 136001),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T12:03:22`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 65901),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 136001),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T12:08:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Grok', 161065),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 165332),
      Fortification.CITADEL_ID,
      9,
      false,
      `${warDateString}T12:13:03`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Grok', 161065),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 165332),
      Fortification.CITADEL_ID,
      11,
      true,
      `${warDateString}T12:21:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 106189),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T12:27:11`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 106189),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T12:29:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 91113),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T12:33:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 206882),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 186460),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:35:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'perMEATerik', 139067),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178670),
      Fortification.CITADEL_ID,
      3,
      false,
      `${warDateString}T12:45:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 169077),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178670),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:59:00`
    ),
  ],
  Guild.MRCO_ID,
  883,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_20_2020,
  Guild.ASSASSINS_ID,
  1240
);
