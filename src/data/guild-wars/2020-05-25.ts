import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-25';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 194076),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:47:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 191217),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:48:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 150824),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:29:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 218332),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 174770),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:56:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 150824),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 99208),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:28:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 291612),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 189043),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:37:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 253712),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 150826),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:37:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 291612),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 146584),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T02:38:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 349848),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 187913),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:37:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 349848),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198241),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:38:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 67824),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:43:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 220880),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 111160),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:44:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 304133),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 184633),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:44:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 304133),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 170345),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:45:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 77261),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:03:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 74370),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:03:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 227018),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 138018),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:41:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 140038),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:44:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 140038),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 42575),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:45:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 380271),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 234694),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:18:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 380271),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 197574),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:19:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 253712),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 151351),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:41:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 227107),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 144374),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:52:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 127319),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 88046),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:53:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 127319),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 68256),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:54:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162060),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 66445),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:46:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 162060),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:47:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 150065),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 64661),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:48:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 150065),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 53453),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:48:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 317951),
      new Player(Guild.LES_FRANCS_ID, 'Mantis417', 142663),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:54:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 317951),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 165455),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:55:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 66135),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:20:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 131153),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 34417),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:21:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 130379),
      new Player(Guild.LES_FRANCS_ID, 'Mantis417', 37565),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:51:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 130379),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 54057),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:51:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 242377),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 135602),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:25:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 242377),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 126481),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:25:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 320403),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 220507),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:35:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 291124),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 152294),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:27:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 291124),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 159519),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:27:56`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 185667),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238050),
      Fortification.LIGHTHOUSE_ID,
      8,
      false,
      `${warDateString}T01:57:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 185667),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238050),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T01:58:40`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 220507),
      new Player(Guild.ASSASSINS_ID, 'KP', 224893),
      Fortification.MAGE_ACADEMY_ID,
      13,
      false,
      `${warDateString}T02:40:00`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 220507),
      new Player(Guild.ASSASSINS_ID, 'KP', 224893),
      Fortification.MAGE_ACADEMY_ID,
      7,
      true,
      `${warDateString}T02:40:28`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 234694),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 220880),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:31:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 234694),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 250347),
      Fortification.BARRACKS_ID,
      13,
      false,
      `${warDateString}T04:33:14`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 180291),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 250347),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T05:57:59`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 175100),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 250347),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T05:58:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 135792),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 250347),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:59:15`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'En4', 258326),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T06:59:45`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 152397),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 250347),
      Fortification.BARRACKS_ID,
      3,
      true,
      `${warDateString}T09:31:37`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 152397),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238050),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T09:32:30`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198241),
      new Player(Guild.ASSASSINS_ID, 'En4', 251573),
      Fortification.BARRACKS_ID,
      8,
      false,
      `${warDateString}T09:38:24`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 198241),
      new Player(Guild.ASSASSINS_ID, 'En4', 251573),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T09:38:58`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 184633),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 238050),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:15:04`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 174770),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T10:16:22`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 68224),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:25:04`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 68224),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:25:51`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 111640),
      new Player(Guild.ASSASSINS_ID, 'En4', 251573),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:39:51`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 111640),
      new Player(Guild.ASSASSINS_ID, 'En4', 251573),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:40:29`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 66135),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:02:06`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 66135),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:02:22`
    ),
  ],
  Guild.LES_FRANCS_ID,
  91,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_22_2020,
  Guild.ASSASSINS_ID,
  1400
);
