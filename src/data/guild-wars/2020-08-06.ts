import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-06';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 191419),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:33:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 154937),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:34:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 168420),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 207825),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 153656),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 142931),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:58:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 155233),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:59:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 333884),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 261809),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:43:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 137986),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:07:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:07:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 387248),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 275568),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:07:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 387248),
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 245080),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:08:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 123093),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:44:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 96164),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:44:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 194851),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 89137),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:46:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 194851),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 120085),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:47:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420721),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 262271),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:00:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 353249),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 251902),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:13:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 349062),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 256421),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:14:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 327705),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 207624),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:16:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 327705),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 183765),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:16:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 333884),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 231661),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:20:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 307674),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 190437),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:03:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 307674),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 214640),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:03:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 109154),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:15:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177258),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 104695),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:15:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 117855),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:15:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 103646),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:16:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 305690),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 212164),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:19:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 308239),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 247192),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:23:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 401191),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 207913),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:09:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 401191),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 202201),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:09:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 73991),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:16:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 179485),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 93887),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:17:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 294009),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 190258),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:18:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 294009),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 195688),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:20:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 420721),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 237598),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:23:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 103559),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:04:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 171573),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 94803),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:05:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299898),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 206108),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:21:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 299898),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 190407),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:22:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 240805),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 280880),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:30:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 240805),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 326047),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:31:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 168420),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      9,
      false,
      `${warDateString}T03:41:04`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 168420),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T03:41:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 191419),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T03:50:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 191419),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      10,
      false,
      `${warDateString}T03:51:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 262719),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 254236),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:20:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 262719),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T04:22:53`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 154937),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T04:40:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 154937),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T04:40:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 252474),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T04:50:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 155233),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T05:24:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 155233),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T05:25:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 247282),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 289529),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:46:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 74378),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T05:46:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 74378),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T05:47:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 153656),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T05:49:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 247282),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      6,
      false,
      `${warDateString}T05:50:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 153656),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T05:58:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'warbrain', 94803),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T08:33:30`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'warbrain', 94803),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T08:34:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 117855),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      Fortification.GATES_OF_NATURE_ID,
      8,
      false,
      `${warDateString}T08:54:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 206108),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:55:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 117855),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      Fortification.GATES_OF_NATURE_ID,
      8,
      false,
      `${warDateString}T08:55:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 206108),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:55:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T08:56:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 251085),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T08:57:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 104077),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      Fortification.GATES_OF_NATURE_ID,
      5,
      false,
      `${warDateString}T09:10:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 104077),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 190128),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T09:10:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 245080),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T09:52:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 209068),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:31:53`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 209068),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T10:32:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 207708),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T10:34:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 207708),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T10:34:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 207913),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 288339),
      Fortification.BARRACKS_ID,
      11,
      true,
      `${warDateString}T11:22:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 207913),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T11:23:41`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 185731),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T11:25:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 103989),
      new Player(Guild.ASSASSINS_ID, 'HERO', 197877),
      Fortification.GATES_OF_NATURE_ID,
      4,
      true,
      `${warDateString}T11:25:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 245080),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T11:30:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 252474),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 303284),
      Fortification.BARRACKS_ID,
      8,
      true,
      `${warDateString}T11:31:50`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  371,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_32_2020,
  Guild.ASSASSINS_ID,
  1400
);
