import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-19';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:13:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 262208),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:14:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 208826),
      new Player(Guild.ROMANIA_ID, 'Bishop', 159156),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:37:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 246493),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:38:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 241230),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:39:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 140175),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 127471),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:49:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 140175),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 116749),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:49:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160637),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 76415),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:57:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160658),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 179418),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:59:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136983),
      new Player(Guild.ROMANIA_ID, 'ALAN', 63562),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:59:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136983),
      new Player(Guild.ROMANIA_ID, 'Bishop', 75950),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:02:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 122897),
      new Player(Guild.ROMANIA_ID, 'Galy', 92620),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:04:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 122897),
      new Player(Guild.ROMANIA_ID, 'Thyned', 89369),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:04:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 222725),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:13:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 243783),
      new Player(Guild.ROMANIA_ID, 'Antonio', 204745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:42:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 243783),
      new Player(Guild.ROMANIA_ID, 'Adrian', 155152),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:43:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 345482),
      new Player(Guild.ROMANIA_ID, 'Blondu', 302528),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:44:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 369698),
      new Player(Guild.ROMANIA_ID, 'JustMe', 263815),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:44:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      new Player(Guild.ROMANIA_ID, 'JustMe', 201099),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:49:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 327732),
      new Player(Guild.ROMANIA_ID, 'Antonio', 243192),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:53:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.ROMANIA_ID, 'Medo', 117832),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:58:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.ROMANIA_ID, 'tokyo', 96644),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:59:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 302595),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 218988),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:07:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 286134),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 212475),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:10:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 227203),
      new Player(Guild.ROMANIA_ID, 'Medo', 170135),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:01:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 218523),
      new Player(Guild.ROMANIA_ID, 'Galy', 156670),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:11:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 218523),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 175595),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:13:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 229233),
      new Player(Guild.ROMANIA_ID, 'ALAN', 177666),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:14:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 236376),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 188544),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:15:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 302836),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 263833),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:43:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 305763),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 235922),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:45:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221716),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 171645),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:56:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 209288),
      new Player(Guild.ROMANIA_ID, 'tokyo', 169588),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:03:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 286271),
      new Player(Guild.ROMANIA_ID, 'Thyned', 196284),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:08:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183071),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 160865),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:11:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183071),
      new Player(Guild.ROMANIA_ID, 'hama52', 160489),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:12:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 282507),
      new Player(Guild.ROMANIA_ID, 'hama52', 235508),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:26:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 282507),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 180301),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:26:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 302648),
      new Player(Guild.ROMANIA_ID, 'Adrian', 209312),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:47:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340320),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 256550),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:23:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 262208),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:15:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 262208),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:16:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 93029),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T00:26:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 75950),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T00:33:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 246493),
      new Player(Guild.ASSASSINS_ID, 'Regal', 243783),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:47:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 246493),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T00:48:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 241230),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 235459),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:58:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 241230),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217081),
      Fortification.BASTION_OF_ICE_ID,
      18,
      false,
      `${warDateString}T00:59:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 160865),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 143634),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:27:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 160865),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 139612),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:29:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 127471),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136983),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:41:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 127471),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 132147),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:42:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 222725),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 193374),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:42:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 222725),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183071),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:43:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 179418),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160658),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:55:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 179418),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 180116),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:56:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 117832),
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:03:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 235508),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 242316),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:04:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 117832),
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:04:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 235508),
      new Player(Guild.ASSASSINS_ID, 'Regal', 254646),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:06:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 246306),
      new Player(Guild.ASSASSINS_ID, 'KP', 218048),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:45:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 242838),
      new Player(Guild.ASSASSINS_ID, 'En4', 269861),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:13:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 254842),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 286780),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:15:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 246306),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 208826),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:17:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 178495),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173595),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T05:43:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 178495),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181417),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T05:44:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 116749),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124988),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:46:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 116749),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:47:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 75950),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217081),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T05:59:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 177914),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181417),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T06:01:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 93029),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217081),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T06:02:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 177914),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181417),
      Fortification.CITADEL_ID,
      18,
      true,
      `${warDateString}T06:04:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 209312),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 207127),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:07:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 209312),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 221405),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:09:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 169800),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173595),
      Fortification.CITADEL_ID,
      14,
      false,
      `${warDateString}T10:15:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 169800),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 173595),
      Fortification.CITADEL_ID,
      6,
      true,
      `${warDateString}T10:18:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 196985),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 197371),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T10:30:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 196985),
      new Player(Guild.ASSASSINS_ID, 'elo', 201746),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:33:00`
    ),
  ],
  Guild.ROMANIA_ID,
  1002,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_21_2020,
  Guild.ASSASSINS_ID,
  1400
);
