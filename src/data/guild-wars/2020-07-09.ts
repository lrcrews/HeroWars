import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-09';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 268213),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 261658),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:14:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 253617),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:14:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:19:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:19:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 152706),
      new Player(Guild.ROMANIA_ID, 'Thyned', 130409),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:21:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 152706),
      new Player(Guild.ROMANIA_ID, 'tokyo', 118773),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:22:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 256865),
      new Player(Guild.ROMANIA_ID, 'Bernde', 226088),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:43:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 256865),
      new Player(Guild.ROMANIA_ID, 'Galy', 216515),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:44:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 238720),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:46:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'JustMe', 223517),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:48:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 213379),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 193706),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:54:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 213379),
      new Player(Guild.ROMANIA_ID, 'Adrian', 195665),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:55:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      new Player(Guild.ROMANIA_ID, 'Galy', 128321),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:36:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 109384),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:37:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 319573),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 303762),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:44:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327404),
      new Player(Guild.ROMANIA_ID, 'Antonio', 291824),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:45:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 358227),
      new Player(Guild.ROMANIA_ID, 'Blondu', 378883),
      Fortification.CITADEL_ID,
      18,
      false,
      `${warDateString}T07:39:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 350153),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 321390),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:35:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Antonio', 225305),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:03:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 299973),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 211539),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:12:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212660),
      new Player(Guild.ROMANIA_ID, 'hama52', 187981),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:39:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 269572),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 210813),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:40:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 194912),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 190917),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:40:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 138642),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:01:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.ROMANIA_ID, 'Gaby', 108248),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:02:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 283853),
      new Player(Guild.ROMANIA_ID, 'Gaby', 199616),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:11:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 283853),
      new Player(Guild.ROMANIA_ID, 'tokyo', 212024),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:12:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 239192),
      new Player(Guild.ROMANIA_ID, 'Blondu', 378883),
      Fortification.CITADEL_ID,
      2,
      true,
      `${warDateString}T10:17:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378926),
      new Player(Guild.ROMANIA_ID, 'Thyned', 255942),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:33:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 378926),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 238787),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:34:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263561),
      new Player(Guild.ROMANIA_ID, 'Adrian', 244199),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:55:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 263561),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 220261),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:56:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370720),
      new Player(Guild.ROMANIA_ID, 'hama52', 303099),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:05:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 405329),
      new Player(Guild.ROMANIA_ID, 'JustMe', 324859),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:07:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401590),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 260416),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:43:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185471),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 150945),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:39:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185471),
      new Player(Guild.ROMANIA_ID, 'Bernde', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:39:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 257637),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 91342),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T12:57:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 261658),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:26:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 261658),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268213),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:27:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:10:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T03:17:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 108248),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T03:58:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 195665),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212660),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T04:01:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 190917),
      new Player(Guild.ASSASSINS_ID, 'KP', 166090),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 238720),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 214430),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 195665),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 213379),
      Fortification.GATES_OF_NATURE_ID,
      16,
      false,
      `${warDateString}T04:02:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 190917),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185471),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:02:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 238720),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 249763),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:03:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 193706),
      new Player(Guild.ASSASSINS_ID, 'HERO', 194912),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:21:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 193706),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 202702),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T04:22:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 253617),
      new Player(Guild.ASSASSINS_ID, 'Gom', 260985),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:12:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 253617),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 257637),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:14:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 378883),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401440),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:19:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 150945),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161918),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:20:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 378883),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370595),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:20:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 150945),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 161934),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T05:21:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 303099),
      new Player(Guild.ASSASSINS_ID, 'Gom', 358227),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:38:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 256818),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 241837),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:10:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 256818),
      new Player(Guild.ASSASSINS_ID, 'elo', 247758),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:10:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 312390),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 279166),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:24:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 144658),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:42:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 144658),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T06:45:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 128321),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 213379),
      Fortification.GATES_OF_NATURE_ID,
      4,
      true,
      `${warDateString}T06:45:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 128321),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 212660),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T06:46:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 291929),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 242888),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:49:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 138642),
      new Player(Guild.ASSASSINS_ID, 'wookie', 152706),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:56:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 138642),
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T06:57:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 91844),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 159717),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T07:01:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 91844),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 202702),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T07:01:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 291929),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272415),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:30:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 303099),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311378),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:32:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 118773),
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T07:40:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 118773),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 161934),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T07:46:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 294825),
      new Player(Guild.ASSASSINS_ID, 'En4', 298039),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:17:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 211762),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 259671),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:42:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 211762),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 256794),
      Fortification.FOUNDRY_ID,
      4,
      false,
      `${warDateString}T10:46:19`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 199745),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245451),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:46:31`
    ),
  ],
  Guild.ROMANIA_ID,
  1104,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_28_2020,
  Guild.ASSASSINS_ID,
  1300
);
