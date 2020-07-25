import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-01';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 249777),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243818),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:12:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 265537),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T03:43:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      new Player(Guild.ROMANIA_ID, 'Thyned', 101341),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:44:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:00:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      new Player(Guild.ROMANIA_ID, 'Antonio', 211543),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:01:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 154419),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 134975),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:11:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 154419),
      new Player(Guild.ROMANIA_ID, 'Medo', 126134),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:12:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163667),
      new Player(Guild.ROMANIA_ID, 'Adrian', 165928),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:37:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163667),
      new Player(Guild.ROMANIA_ID, 'hama52', 163125),
      Fortification.BASTION_OF_ICE_ID,
      19,
      false,
      `${warDateString}T04:39:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 118203),
      new Player(Guild.ROMANIA_ID, 'tokyo', 97436),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:02:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 118203),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 79683),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:02:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 203911),
      new Player(Guild.ROMANIA_ID, 'JustMe', 203911),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:32:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      new Player(Guild.ROMANIA_ID, 'Bernde', 112880),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:40:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 122635),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:40:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.ROMANIA_ID, 'Galy', 101268),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:29:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      new Player(Guild.ROMANIA_ID, 'Bishop', 78492),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:30:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 364359),
      new Player(Guild.ROMANIA_ID, 'Blondu', 333939),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:37:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318897),
      new Player(Guild.ROMANIA_ID, 'Thyned', 218807),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:37:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 315895),
      new Player(Guild.ROMANIA_ID, 'JustMe', 253748),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:40:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 251585),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 183353),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:43:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 324393),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 296510),
      Fortification.FOUNDRY_ID,
      6,
      false,
      `${warDateString}T07:59:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:01:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:02:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 251467),
      new Player(Guild.ROMANIA_ID, 'Galy', 165967),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:19:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 312120),
      new Player(Guild.ROMANIA_ID, 'Antonio', 260093),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:20:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 251467),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 187453),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:21:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 261117),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 296510),
      Fortification.FOUNDRY_ID,
      14,
      true,
      `${warDateString}T09:24:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255247),
      new Player(Guild.ROMANIA_ID, 'Medo', 184210),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:39:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255247),
      new Player(Guild.ROMANIA_ID, 'tokyo', 167676),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:39:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298259),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 203055),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:53:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 298259),
      new Player(Guild.ROMANIA_ID, 'Bernde', 194728),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:53:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 155523),
      new Player(Guild.ROMANIA_ID, 'hama52', 163125),
      Fortification.BASTION_OF_ICE_ID,
      1,
      true,
      `${warDateString}T09:58:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 346998),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 224480),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:19:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 346998),
      new Player(Guild.ROMANIA_ID, 'Adrian', 222256),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:20:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 318955),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 197594),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:25:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 365182),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 279476),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:33:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 306641),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 257095),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:46:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 333939),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:29:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 333939),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 354745),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:30:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 259375),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 251926),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:52:36`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 260662),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 297029),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:54:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 249777),
      new Player(Guild.ASSASSINS_ID, 'Gom', 257027),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:59:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 279702),
      new Player(Guild.ASSASSINS_ID, 'Regal', 270489),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:00:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 263461),
      new Player(Guild.ASSASSINS_ID, 'En4', 245430),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:16:37`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 260093),
      new Player(Guild.ASSASSINS_ID, 'HERO', 220559),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:07:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 260093),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 247590),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T02:08:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 265537),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T03:11:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 265537),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:12:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 101268),
      new Player(Guild.ASSASSINS_ID, 'En4', 260304),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T04:37:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243818),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 241901),
      Fortification.GATES_OF_NATURE_ID,
      16,
      false,
      `${warDateString}T04:40:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 243818),
      new Player(Guild.ASSASSINS_ID, 'Regal', 248355),
      Fortification.BASTION_OF_FIRE_ID,
      18,
      false,
      `${warDateString}T04:40:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 126134),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 138033),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:43:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 126134),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 136745),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:45:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 112880),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:50:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 112880),
      new Player(Guild.ASSASSINS_ID, 'elo', 131526),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 163667),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:58:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 167822),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      15,
      false,
      `${warDateString}T05:00:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 135435),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 154419),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:05:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 135435),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 155523),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:06:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 220210),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:49:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 226518),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 240609),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:50:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 222256),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 222275),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:03:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 222256),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 247590),
      Fortification.BARRACKS_ID,
      11,
      true,
      `${warDateString}T06:07:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 101268),
      new Player(Guild.ASSASSINS_ID, 'Regal', 248355),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      true,
      `${warDateString}T06:15:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 122635),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T06:36:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 122635),
      new Player(Guild.ASSASSINS_ID, 'KP', 132031),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:37:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 270169),
      new Player(Guild.ASSASSINS_ID, 'KP', 249456),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:56:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 78492),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 132416),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T07:00:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 78492),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      false,
      `${warDateString}T07:05:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 97436),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 241901),
      Fortification.GATES_OF_NATURE_ID,
      1,
      false,
      `${warDateString}T07:37:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 97436),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 241901),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T07:38:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 197102),
      Fortification.GATES_OF_NATURE_ID,
      16,
      false,
      `${warDateString}T08:10:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 180648),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 183773),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:11:38`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 79683),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 197102),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T08:55:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 79683),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T09:52:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 101341),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 197102),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T11:44:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 218807),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 197438),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:45:45`
    ),
  ],
  Guild.ROMANIA_ID,
  1020,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_23_2020,
  Guild.ASSASSINS_ID,
  1300
);
