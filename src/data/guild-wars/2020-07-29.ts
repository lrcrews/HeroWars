import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-29';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 183938),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 154539),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 153785),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:22:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 151715),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:22:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 356972),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 270319),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:42:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 143533),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:57:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 197371),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 136474),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:57:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327802),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 246751),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:25:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327802),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 210430),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:26:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 117466),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:27:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 175514),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 105866),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:28:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 102833),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:53:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 191770),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 117098),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:53:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 339975),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 208211),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:01:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 341298),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 247778),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:02:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 273970),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 204574),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:06:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 296528),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 189749),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:09:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386625),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 197706),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:34:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 386625),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 225426),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:34:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 418853),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 256540),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:57:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 418853),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 248012),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T04:58:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 90651),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 187708),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 85883),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:28:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 206053),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 134903),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:52:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 206053),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 97578),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:53:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249104),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 91164),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:03:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 249104),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 72494),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:03:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 357155),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 243785),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:08:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320691),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 199762),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:23:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320691),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 176341),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:23:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297973),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 188196),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:48:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 297973),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 165858),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:48:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 300218),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 194145),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:19:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 300218),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 230602),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:25:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 178875),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 129882),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:22:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 178875),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 100297),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:23:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 166397),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 93133),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:25:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 166397),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 96304),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:26:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 292962),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 204712),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:41:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 278371),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 184938),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:42:45`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 248012),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248948),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T00:42:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 248012),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248948),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T00:52:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 204568),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248948),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T01:43:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 204568),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 248948),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T01:44:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 270361),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 320691),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:45:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 270361),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297844),
      Fortification.BARRACKS_ID,
      10,
      false,
      `${warDateString}T01:46:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 249010),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275403),
      Fortification.MAGE_ACADEMY_ID,
      7,
      false,
      `${warDateString}T01:47:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 249010),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275403),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T01:47:40`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 189662),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297844),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T03:11:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 189749),
      new Player(Guild.ASSASSINS_ID, 'KP', 299935),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T03:12:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 189749),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 283151),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T03:13:01`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 166072),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297844),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T03:26:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 166072),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297844),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T03:28:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 262780),
      new Player(Guild.ASSASSINS_ID, 'Gom', 376650),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T03:52:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 262780),
      new Player(Guild.ASSASSINS_ID, 'Gom', 376650),
      Fortification.LIGHTHOUSE_ID,
      8,
      false,
      `${warDateString}T03:52:40`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 190714),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 297844),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T03:58:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 189662),
      new Player(Guild.ASSASSINS_ID, 'Gom', 376650),
      Fortification.LIGHTHOUSE_ID,
      6,
      true,
      `${warDateString}T03:58:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 225722),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268495),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T05:59:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 225722),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268495),
      Fortification.BARRACKS_ID,
      13,
      true,
      `${warDateString}T05:59:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 248746),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275403),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T06:00:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 183353),
      new Player(Guild.ASSASSINS_ID, 'KP', 299935),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T07:08:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 183353),
      new Player(Guild.ASSASSINS_ID, 'KP', 299935),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T07:08:58`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 208211),
      new Player(Guild.ASSASSINS_ID, 'KP', 299935),
      Fortification.LIGHTHOUSE_ID,
      6,
      true,
      `${warDateString}T07:34:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 240713),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 275403),
      Fortification.MAGE_ACADEMY_ID,
      12,
      true,
      `${warDateString}T07:54:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 240713),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 283151),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:56:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 244161),
      new Player(Guild.ASSASSINS_ID, 'En4', 322005),
      Fortification.LIGHTHOUSE_ID,
      7,
      false,
      `${warDateString}T08:23:54`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 244161),
      new Player(Guild.ASSASSINS_ID, 'En4', 322005),
      Fortification.LIGHTHOUSE_ID,
      11,
      false,
      `${warDateString}T08:25:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 208651),
      new Player(Guild.ASSASSINS_ID, 'En4', 322005),
      Fortification.LIGHTHOUSE_ID,
      2,
      true,
      `${warDateString}T08:31:48`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 143533),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T09:29:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 143533),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T09:30:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 88341),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:32:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 90651),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T10:17:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 88341),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:49:50`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 97578),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T11:05:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 97578),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T11:05:49`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 105183),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:10:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 105183),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T11:10:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 102833),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T11:22:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 102833),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T11:22:40`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 93133),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T12:24:34`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  326,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_31_2020,
  Guild.ASSASSINS_ID,
  1400
);
