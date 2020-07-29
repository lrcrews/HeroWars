import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-13';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 264941),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:27:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 259556),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:27:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 238663),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:27:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      new Player(Guild.ROMANIA_ID, 'Marius', 245194),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:36:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      new Player(Guild.ROMANIA_ID, 'JustMe', 199340),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:46:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 135172),
      new Player(Guild.ROMANIA_ID, 'Medo', 115589),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:48:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 135172),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 123916),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:48:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 217081),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:50:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 137110),
      new Player(Guild.ROMANIA_ID, 'VsEye', 72790),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:11:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 137110),
      new Player(Guild.ROMANIA_ID, 'Gaby', 62443),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:12:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 181675),
      new Player(Guild.ROMANIA_ID, 'Adrian', 147778),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:28:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 181675),
      new Player(Guild.ROMANIA_ID, 'hama52', 160489),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:29:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 73195),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:10:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      new Player(Guild.ROMANIA_ID, 'ALAN', 61600),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:10:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 341292),
      new Player(Guild.ROMANIA_ID, 'Blondu', 298001),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:28:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365299),
      new Player(Guild.ROMANIA_ID, 'JustMe', 259257),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:30:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 290047),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 181798),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:01:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Antonio', 198655),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:08:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 177966),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:10:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126990),
      new Player(Guild.ROMANIA_ID, 'Thyned', 84814),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:45:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126990),
      new Player(Guild.ROMANIA_ID, 'Phantom', 59474),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:45:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277017),
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 226406),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:03:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 277017),
      new Player(Guild.ROMANIA_ID, 'hama52', 224789),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:04:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 329834),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 231372),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:21:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 329834),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 220100),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:22:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 285890),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 209647),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:40:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120834),
      new Player(Guild.ROMANIA_ID, 'tokyo', 95152),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:55:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 120834),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 57405),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:55:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 285890),
      new Player(Guild.ROMANIA_ID, 'Thyned', 192103),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:29:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 208397),
      new Player(Guild.ROMANIA_ID, 'Medo', 166309),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:13:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 208397),
      new Player(Guild.ROMANIA_ID, 'VsEye', 153268),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:14:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 190079),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 143075),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:23:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 190079),
      new Player(Guild.ROMANIA_ID, 'Gaby', 150542),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:24:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 328817),
      new Player(Guild.ROMANIA_ID, 'Antonio', 239917),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:33:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 290327),
      new Player(Guild.ROMANIA_ID, 'Adrian', 204810),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:42:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 208341),
      new Player(Guild.ROMANIA_ID, 'Phantom', 168535),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:19:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193513),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 162837),
      Fortification.LIGHTHOUSE_ID,
      5,
      false,
      `${warDateString}T09:20:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230884),
      new Player(Guild.ROMANIA_ID, 'tokyo', 172045),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:57:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 230884),
      new Player(Guild.ROMANIA_ID, 'ALAN', 172936),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:59:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 331410),
      new Player(Guild.ROMANIA_ID, 'Marius', 244104),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:04:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 264941),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 264941),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 259556),
      new Player(Guild.ASSASSINS_ID, 'En4', 257001),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:50:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Car RamRod', 259556),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:52:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 177966),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 158165),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:09:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 177966),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 177699),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:10:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 115589),
      new Player(Guild.ASSASSINS_ID, 'elo', 127429),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:51:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 115589),
      new Player(Guild.ASSASSINS_ID, 'KP', 124555),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:53:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 240157),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 193476),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:19:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 238663),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 232897),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:22:04`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 238663),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 216459),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:22:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 217081),
      new Player(Guild.ASSASSINS_ID, 'HERO', 181675),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:33:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 95152),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T04:34:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 217081),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 190008),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:34:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 95152),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124456),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T04:35:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 225091),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 238851),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:27:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 123916),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 128607),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:29:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 123916),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 126532),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:31:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 250407),
      new Player(Guild.ASSASSINS_ID, 'En4', 273529),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T06:35:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 224268),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 289844),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T06:36:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 250407),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 282032),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:44:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 57706),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 113442),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T06:49:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 57706),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124456),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      false,
      `${warDateString}T06:50:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 147778),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 135172),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:58:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 147778),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 137110),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:59:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 240157),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 208932),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:13:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 245194),
      new Player(Guild.ASSASSINS_ID, 'Regal', 242559),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:49:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 245194),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:50:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 173404),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 178938),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:38:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 173404),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 186837),
      Fortification.CITADEL_ID,
      12,
      false,
      `${warDateString}T08:39:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 62823),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124456),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T08:42:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 192912),
      new Player(Guild.ASSASSINS_ID, 'elo', 189987),
      Fortification.BARRACKS_ID,
      15,
      false,
      `${warDateString}T09:09:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 186600),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191414),
      Fortification.MAGE_ACADEMY_ID,
      10,
      false,
      `${warDateString}T09:11:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 153268),
      new Player(Guild.ASSASSINS_ID, 'elo', 189987),
      Fortification.BARRACKS_ID,
      5,
      true,
      `${warDateString}T09:38:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 153268),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 186837),
      Fortification.CITADEL_ID,
      8,
      true,
      `${warDateString}T09:39:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 168535),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 165987),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:49:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 168535),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 166436),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:50:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 167759),
      new Player(Guild.ASSASSINS_ID, 'KP', 207769),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T09:56:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 167759),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191414),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T09:57:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 150701),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191414),
      Fortification.MAGE_ACADEMY_ID,
      5,
      true,
      `${warDateString}T12:50:25`
    ),
  ],
  Guild.ROMANIA_ID,
  968,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_20_2020,
  Guild.ASSASSINS_ID,
  1345
);
