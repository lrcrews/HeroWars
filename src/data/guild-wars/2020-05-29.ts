import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-29';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243168),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:06:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 248455),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T01:07:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:52:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 262208),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:58:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152811),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 248455),
      Fortification.BRIDGE_ID,
      4,
      true,
      `${warDateString}T02:32:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 247697),
      new Player(Guild.ROMANIA_ID, 'JustMe', 203911),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:34:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152811),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 133793),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:11:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:15:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:16:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.ROMANIA_ID, 'Thyned', 97925),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:03:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.ROMANIA_ID, 'Galy', 99917),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:07:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 78044),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:25:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 309748),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 254961),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:45:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 309748),
      new Player(Guild.ROMANIA_ID, 'Antonio', 258260),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:46:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129802),
      new Player(Guild.ROMANIA_ID, 'Bernde', 112171),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:22:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:23:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129802),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 121268),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:23:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      new Player(Guild.ROMANIA_ID, 'Antonio', 210295),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:25:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295952),
      new Player(Guild.ROMANIA_ID, 'Bernde', 192233),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:16:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.ROMANIA_ID, 'Bishop', 77540),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:53:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.ROMANIA_ID, 'tokyo', 97436),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:54:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 154368),
      new Player(Guild.ROMANIA_ID, 'Medo', 125300),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:11:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 363965),
      new Player(Guild.ROMANIA_ID, 'Blondu', 332386),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:11:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 296225),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 182316),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354562),
      new Player(Guild.ROMANIA_ID, 'JustMe', 268370),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T09:13:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 245120),
      new Player(Guild.ROMANIA_ID, 'Galy', 164498),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:20:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 245120),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 185803),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:28:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 350173),
      new Player(Guild.ROMANIA_ID, 'JustMe', 268370),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:32:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 253251),
      new Player(Guild.ROMANIA_ID, 'tokyo', 165955),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:44:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318194),
      new Player(Guild.ROMANIA_ID, 'Thyned', 210593),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:51:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 248999),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 201569),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:52:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 268808),
      new Player(Guild.ROMANIA_ID, 'Adrian', 218717),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:03:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163163),
      new Player(Guild.ROMANIA_ID, 'Adrian', 160509),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:33:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163163),
      new Player(Guild.ROMANIA_ID, 'hama52', 163125),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:34:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354562),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 223468),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:53:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 253967),
      new Player(Guild.ROMANIA_ID, 'Medo', 182047),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:00:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 323814),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 284529),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:15:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 363013),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 277630),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:19:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318194),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 194312),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:20:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:15:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:16:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 77540),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T00:46:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 258260),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 241864),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:58:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 258260),
      new Player(Guild.ASSASSINS_ID, 'KP', 245838),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:58:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 262208),
      new Player(Guild.ASSASSINS_ID, 'En4', 258992),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:05:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 264206),
      new Player(Guild.ASSASSINS_ID, 'Gom', 256390),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:08:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:26:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 183366),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:27:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 112614),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:01:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243168),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 240609),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:19:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243168),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 239963),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:20:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 268370),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 249996),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:22:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 282844),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 255504),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:24:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 257169),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318014),
      Fortification.LIGHTHOUSE_ID,
      15,
      false,
      `${warDateString}T03:40:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 258439),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 295952),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:42:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 195544),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:11:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 219584),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T04:16:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163163),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:24:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 154368),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:25:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 133793),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152235),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T04:33:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 133793),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 137106),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:35:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 219357),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 227991),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:54:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 125300),
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:07:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 125300),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:08:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 248455),
      new Player(Guild.ASSASSINS_ID, 'Regal', 247697),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:16:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 277789),
      new Player(Guild.ASSASSINS_ID, 'Regal', 278724),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:20:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 99917),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 152235),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T05:34:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 99917),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 219584),
      Fortification.BASTION_OF_ICE_ID,
      2,
      true,
      `${warDateString}T05:34:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 219357),
      new Player(Guild.ASSASSINS_ID, 'En4', 242447),
      Fortification.LIGHTHOUSE_ID,
      9,
      false,
      `${warDateString}T05:43:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 121268),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T06:20:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 121268),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 129250),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:21:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 77540),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T08:22:51`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 176455),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318014),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T09:56:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 185845),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318014),
      Fortification.LIGHTHOUSE_ID,
      4,
      true,
      `${warDateString}T09:57:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 177981),
      new Player(Guild.ASSASSINS_ID, 'En4', 242477),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:32:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 175138),
      new Player(Guild.ASSASSINS_ID, 'En4', 242477),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:34:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 193075),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 191623),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T10:49:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 213835),
      new Player(Guild.ASSASSINS_ID, 'En4', 242477),
      Fortification.LIGHTHOUSE_ID,
      8,
      false,
      `${warDateString}T11:21:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 213835),
      new Player(Guild.ASSASSINS_ID, 'En4', 242477),
      Fortification.LIGHTHOUSE_ID,
      1,
      true,
      `${warDateString}T11:22:11`
    ),
  ],
  Guild.ROMANIA_ID,
  1006,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_22_2020,
  Guild.ASSASSINS_ID,
  1300
);
