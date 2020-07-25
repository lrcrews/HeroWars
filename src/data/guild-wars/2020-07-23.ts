import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-23';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:14:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:14:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256250),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:37:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:41:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 196698),
      new Player(Guild.ROMANIA_ID, 'Medo', 156759),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:46:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 196698),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153017),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:47:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:50:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      new Player(Guild.ROMANIA_ID, 'Antonio', 228476),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:51:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:16:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 193164),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:17:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.ROMANIA_ID, 'Bernde', 150340),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:50:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.ROMANIA_ID, 'tokyo', 124122),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:50:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 366097),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 335180),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:06:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'JustMe', 234454),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:08:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 241362),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:09:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.ROMANIA_ID, 'Galy', 134160),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:08:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110559),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:09:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316359),
      new Player(Guild.ROMANIA_ID, 'Bernde', 234846),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:09:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316359),
      new Player(Guild.ROMANIA_ID, 'Gaby', 209811),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:09:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173768),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:23:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173768),
      new Player(Guild.ROMANIA_ID, 'Gaby', 115064),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:24:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.ROMANIA_ID, 'Antonio', 302899),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:29:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384182),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 327979),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:29:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 373376),
      new Player(Guild.ROMANIA_ID, 'Blondu', 379758),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:08:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 366198),
      new Player(Guild.ROMANIA_ID, 'hama52', 318385),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:19:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 294922),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 224465),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:21:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 294922),
      new Player(Guild.ROMANIA_ID, 'tokyo', 228286),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:25:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340131),
      new Player(Guild.ROMANIA_ID, 'Thyned', 271562),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:28:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340131),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 245716),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:28:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 270686),
      new Player(Guild.ROMANIA_ID, 'Medo', 201258),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:09:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 270686),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 223078),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:10:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290891),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 214102),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:35:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 290891),
      new Player(Guild.ROMANIA_ID, 'Bishop', 242304),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:36:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 302045),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 274447),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:31:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417663),
      new Player(Guild.ROMANIA_ID, 'JustMe', 330525),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:36:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 417663),
      new Player(Guild.ROMANIA_ID, 'Galy', 227688),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:37:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 325363),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 299097),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:57:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 325363),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 284731),
      Fortification.LIGHTHOUSE_ID,
      9,
      false,
      `${warDateString}T10:58:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.ROMANIA_ID, 'Thyned', 135512),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:00:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      new Player(Guild.ROMANIA_ID, 'Bishop', 109902),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:00:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 318385),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 316359),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:14:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:54:11`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:55:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256250),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      10,
      false,
      `${warDateString}T04:14:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 256250),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 262971),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T04:15:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 134160),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      false,
      `${warDateString}T05:11:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 234454),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 238674),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:22:51`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 234454),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227125),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:24:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 124122),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T05:24:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 134160),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266909),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T06:07:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 146955),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 168064),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T06:20:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 150340),
      new Player(Guild.ASSASSINS_ID, 'elo', 164174),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:21:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153017),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 185322),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:29:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 153017),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T06:30:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 115064),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 168064),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T06:56:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 115064),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T06:57:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 303318),
      new Player(Guild.ASSASSINS_ID, 'HERO', 276338),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:08:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 124122),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 262971),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T07:22:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 193164),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:57:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 193164),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 196698),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:58:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      new Player(Guild.ASSASSINS_ID, 'KP', 175920),
      Fortification.SPRING_OF_ELEMENTS_ID,
      9,
      false,
      `${warDateString}T08:16:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 142031),
      new Player(Guild.ASSASSINS_ID, 'KP', 175920),
      Fortification.SPRING_OF_ELEMENTS_ID,
      11,
      true,
      `${warDateString}T08:17:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 242008),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      13,
      false,
      `${warDateString}T08:30:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 242008),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:33:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 272293),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 245428),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:59:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 272293),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 271506),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:00:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 318385),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 270712),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:05:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212956),
      Fortification.BASTION_OF_ICE_ID,
      16,
      false,
      `${warDateString}T11:07:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 201586),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 223383),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T11:08:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 229113),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 248440),
      Fortification.GATES_OF_NATURE_ID,
      7,
      true,
      `${warDateString}T11:35:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 110254),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 223383),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T11:46:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 110254),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 212956),
      Fortification.BASTION_OF_ICE_ID,
      4,
      true,
      `${warDateString}T11:46:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 379758),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 374318),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:03:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 379758),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 340080),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:04:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110559),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      7,
      false,
      `${warDateString}T12:10:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 110559),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173768),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      false,
      `${warDateString}T12:14:07`
    ),
  ],
  Guild.ROMANIA_ID,
  871,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_30_2020,
  Guild.ASSASSINS_ID,
  1349
);
