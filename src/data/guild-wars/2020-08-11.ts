import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-11';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:58:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:59:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 260216),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:18:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:37:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:38:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'JustMe', 238901),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:39:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 232915),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:40:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 334270),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 308277),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:14:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 334270),
      new Player(Guild.ROMANIA_ID, 'Bishop', 260272),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:14:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 391733),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 355970),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:16:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 179007),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 155888),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:29:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 179007),
      new Player(Guild.ROMANIA_ID, 'Kai', 145706),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:30:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.ROMANIA_ID, 'Adrian', 204164),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:30:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203882),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:31:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197221),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:41:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197221),
      new Player(Guild.ROMANIA_ID, 'Thyned', 138600),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:42:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 236103),
      new Player(Guild.ROMANIA_ID, 'Bishop', 115045),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:54:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 285694),
      new Player(Guild.ROMANIA_ID, 'tokyo', 237664),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:05:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 314458),
      new Player(Guild.ROMANIA_ID, 'Kai', 278752),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:06:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      new Player(Guild.ROMANIA_ID, 'Specter', 200309),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:28:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 196368),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:29:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 383659),
      new Player(Guild.ROMANIA_ID, 'Blondu', 389898),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:38:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.ROMANIA_ID, 'Antonio', 311505),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:57:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 339469),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:58:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 245145),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 114022),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:07:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 306115),
      new Player(Guild.ROMANIA_ID, 'Specter', 264507),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:08:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.ROMANIA_ID, 'Galy', 137971),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:12:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      new Player(Guild.ROMANIA_ID, 'Gaby', 120819),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:12:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291223),
      new Player(Guild.ROMANIA_ID, 'Gaby', 215186),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:13:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 391899),
      new Player(Guild.ROMANIA_ID, 'hama52', 332293),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:15:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 311939),
      new Player(Guild.ROMANIA_ID, 'Galy', 242059),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:25:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 361113),
      new Player(Guild.ROMANIA_ID, 'Thyned', 281367),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:57:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 361113),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 256123),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:58:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309546),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 283888),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:09:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 309546),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 227165),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:10:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422879),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 293939),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:14:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 199411),
      new Player(Guild.ROMANIA_ID, 'tokyo', 129550),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:47:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 281534),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 230366),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:48:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 422879),
      new Player(Guild.ROMANIA_ID, 'JustMe', 344761),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:25:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291704),
      new Player(Guild.ROMANIA_ID, 'Adrian', 260850),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:26:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:16:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 265596),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:17:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 260216),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:01:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 260216),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:02:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 347093),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 306992),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:45:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 268913),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:47:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Specter', 201539),
      new Player(Guild.ASSASSINS_ID, 'HERO', 199411),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:50:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 245145),
      Fortification.GATES_OF_NATURE_ID,
      11,
      false,
      `${warDateString}T04:54:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 278790),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 294036),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:48:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 332293),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 330567),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:01:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 332293),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 366017),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:02:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 297114),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 290790),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:02:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 312223),
      new Player(Guild.ASSASSINS_ID, 'HERO', 290944),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:03:11`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 244599),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T06:10:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Specter', 223113),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281167),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T06:29:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 238901),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 227763),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:52:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 238901),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 236103),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:54:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 389898),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 384395),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:20:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 268913),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:21:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Kai', 143489),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 245145),
      Fortification.GATES_OF_NATURE_ID,
      8,
      false,
      `${warDateString}T07:22:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 115045),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 245145),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T07:41:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 137971),
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      Fortification.BASTION_OF_FIRE_ID,
      6,
      true,
      `${warDateString}T08:02:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 196368),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 197221),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:29:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 196368),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197470),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:30:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 242059),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 281167),
      Fortification.MAGE_ACADEMY_ID,
      14,
      true,
      `${warDateString}T08:33:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 281367),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 256998),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:43:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 281367),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291223),
      Fortification.BARRACKS_ID,
      12,
      false,
      `${warDateString}T08:44:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 204164),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 182733),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:31:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 260763),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291223),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T11:13:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203882),
      new Player(Guild.ASSASSINS_ID, 'KP', 178906),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:30:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 203882),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 179007),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:30:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 257646),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291223),
      Fortification.BARRACKS_ID,
      7,
      true,
      `${warDateString}T12:10:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 155888),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      Fortification.BASTION_OF_ICE_ID,
      11,
      false,
      `${warDateString}T12:12:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 121924),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      Fortification.BASTION_OF_ICE_ID,
      3,
      false,
      `${warDateString}T12:14:11`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 114022),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210022),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T12:15:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 121924),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 215367),
      Fortification.BASTION_OF_ICE_ID,
      7,
      false,
      `${warDateString}T12:16:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 222949),
      new Player(Guild.ASSASSINS_ID, 'Gom', 383659),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:16:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 259252),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 276293),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:26:42`
    ),
  ],
  Guild.ROMANIA_ID,
  947,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_33_2020,
  Guild.ASSASSINS_ID,
  1400
);
