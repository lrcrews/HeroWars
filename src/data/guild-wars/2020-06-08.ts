import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-08';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259003),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 253097),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259003),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 245770),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:17:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:18:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 170933),
      new Player(Guild.ROMANIA_ID, 'Bernde', 137569),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:13:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.ROMANIA_ID, 'hama52', 177838),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:24:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 185025),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:25:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184366),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 174427),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:52:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184366),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 131924),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:53:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 163523),
      new Player(Guild.ROMANIA_ID, 'Medo', 145111),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:35:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 163523),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 140413),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:36:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149365),
      new Player(Guild.ROMANIA_ID, 'Gaby', 92252),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:51:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149365),
      new Player(Guild.ROMANIA_ID, 'Bishop', 88498),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:52:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.ROMANIA_ID, 'tokyo', 108314),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:35:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      new Player(Guild.ROMANIA_ID, 'Galy', 110766),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:36:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 289069),
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 305275),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:12:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      new Player(Guild.ROMANIA_ID, 'Antonio', 215270),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:18:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 231629),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:18:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 368795),
      new Player(Guild.ROMANIA_ID, 'Blondu', 339531),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:21:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 333659),
      new Player(Guild.ROMANIA_ID, 'JustMe', 258238),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:33:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 254621),
      new Player(Guild.ROMANIA_ID, 'Medo', 188837),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:01:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 258557),
      new Player(Guild.ROMANIA_ID, 'tokyo', 178488),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:01:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 259543),
      new Player(Guild.ROMANIA_ID, 'Gaby', 181606),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:22:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 259543),
      new Player(Guild.ROMANIA_ID, 'Bernde', 202476),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:23:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 251548),
      new Player(Guild.ROMANIA_ID, 'Panzie81', 185555),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:38:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 309451),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 257311),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:11:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 314592),
      new Player(Guild.ROMANIA_ID, 'Antonio', 266896),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:17:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      new Player(Guild.ROMANIA_ID, 'JustMe', 209253),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:21:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301177),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 209929),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:22:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 101091),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:52:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 145962),
      new Player(Guild.ROMANIA_ID, 'Thyned', 110324),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:54:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 280257),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 189667),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:02:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 242036),
      new Player(Guild.ROMANIA_ID, 'Galy', 176208),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:03:00`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 304613),
      new Player(Guild.ROMANIA_ID, 'satoshi93', 201896),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:04:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 242036),
      new Player(Guild.ROMANIA_ID, 'Bishop', 191850),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:05:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 316744),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 230514),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:05:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348997),
      new Player(Guild.ROMANIA_ID, 'Thyned', 226807),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:28:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 348997),
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 282880),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:29:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 389100),
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 259360),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:42:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 318500),
      new Player(Guild.ROMANIA_ID, 'hama52', 273029),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:46:49`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265596),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 339531),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 355070),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:04:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T00:30:22`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Team RamRod', 266875),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:31:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 253097),
      new Player(Guild.ASSASSINS_ID, 'En4', 262963),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'FLUFFY BEAR', 282880),
      new Player(Guild.ASSASSINS_ID, 'Regal', 280171),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:37:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 274267),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 301033),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:43:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 110766),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T01:30:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Galy', 110766),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T01:31:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 88825),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T01:35:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bishop', 88825),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T01:36:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 145111),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 163523),
      Fortification.GATES_OF_NATURE_ID,
      12,
      false,
      `${warDateString}T01:40:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 245770),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 249713),
      Fortification.BASTION_OF_ICE_ID,
      11,
      false,
      `${warDateString}T01:40:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 137569),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 149365),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T01:44:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Bernde', 137569),
      new Player(Guild.ASSASSINS_ID, 'KP', 144658),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T01:45:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 231629),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 229049),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:47:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 284696),
      new Player(Guild.ASSASSINS_ID, 'En4', 247907),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:47:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheUnknown', 231629),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 247761),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T01:48:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 284696),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 241601),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:50:42`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 245770),
      new Player(Guild.ASSASSINS_ID, 'Gom', 259003),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:16:06`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 92759),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 247761),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T02:54:53`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 185025),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 203825),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:55:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 185025),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 192373),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:56:34`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 174427),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184390),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T06:14:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Panzie81', 174427),
      new Player(Guild.ASSASSINS_ID, 'HERO', 191888),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:15:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 215270),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 249713),
      Fortification.BASTION_OF_ICE_ID,
      9,
      true,
      `${warDateString}T06:48:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 131924),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144096),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T06:50:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 215270),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 170933),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:50:02`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'satoshi93', 131924),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 130575),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:50:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 140413),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 148222),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:59:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 140413),
      new Player(Guild.ASSASSINS_ID, 'elo', 145396),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:01:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 108314),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 163523),
      Fortification.GATES_OF_NATURE_ID,
      8,
      true,
      `${warDateString}T07:44:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 108314),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 144096),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T07:45:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 145111),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184390),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T08:31:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 274268),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 251548),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:44:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 226807),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 237971),
      Fortification.MAGE_ACADEMY_ID,
      8,
      false,
      `${warDateString}T09:07:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 226807),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 237971),
      Fortification.MAGE_ACADEMY_ID,
      6,
      false,
      `${warDateString}T09:07:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 190082),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 237971),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T09:43:00`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 190082),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 237971),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T09:43:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 181966),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 237971),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T11:08:44`
    ),
  ],
  Guild.ROMANIA_ID,
  920,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_24_2020,
  Guild.ASSASSINS_ID,
  1400
);
