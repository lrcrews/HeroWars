import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-21';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 173688),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 194076),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 244452),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 191217),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:34:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 306040),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 213589),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T01:32:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 306040),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 182902),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:33:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:51:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 97095),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:52:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 144662),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 88046),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:57:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303186),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 187913),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:22:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 251445),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 195502),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:24:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 141664),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 66445),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:25:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 141664),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:25:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 284558),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 143686),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:27:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 284558),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 126481),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:27:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138550),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 67931),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:44:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138550),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 76857),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:46:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340441),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 143791),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:57:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 123857),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 63940),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:07:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 123857),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 50937),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:07:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 161159),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 34417),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:11:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 161159),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 74370),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:12:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 370149),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 232812),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:18:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 370149),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 197574),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:19:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289929),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 150141),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:22:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289929),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 159195),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:22:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 220103),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 142234),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:28:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 220103),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 134728),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:28:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340441),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 143426),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:29:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 225003),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 108791),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:30:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 253351),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 163088),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:45:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 294885),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 146933),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:35:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 294885),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 187703),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:35:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 66562),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:18:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:18:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 239941),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 134237),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:39:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 239941),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 146081),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:40:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 65399),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:02:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 54057),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:03:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 41321),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:29:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 34362),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:29:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 236049),
      new Player(Guild.ASSASSINS_ID, 'KP', 220465),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:07:10`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'genorho', 236049),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 212246),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T01:07:42`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 138560),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T03:29:05`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 127930),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T03:29:33`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 213589),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 212246),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T04:57:55`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 213589),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 212246),
      Fortification.BARRACKS_ID,
      18,
      true,
      `${warDateString}T04:58:40`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 232812),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 225003),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:40:42`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 232812),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 236243),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:41:20`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:30:03`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:30:35`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 151857),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:53:37`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 151857),
      new Player(Guild.ASSASSINS_ID, 'Regal', 234066),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T09:54:40`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 161475),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:14:16`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 161475),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T10:14:38`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 109099),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T10:59:52`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 109099),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:00:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 142234),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T11:11:02`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 184459),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      7,
      false,
      `${warDateString}T11:59:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 184459),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243497),
      Fortification.BARRACKS_ID,
      3,
      true,
      `${warDateString}T12:00:14`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 131087),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303186),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:16:22`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 66562),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:32:09`
    ),
  ],
  Guild.LES_FRANCS_ID,
  103,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_21_2020,
  Guild.ASSASSINS_ID,
  1400
);
