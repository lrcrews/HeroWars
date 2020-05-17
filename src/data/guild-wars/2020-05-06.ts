import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-06';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 179379),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 133842),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:16:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 179379),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 148247),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T02:17:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183723),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 134600),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:31:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183723),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 134600),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:31:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 156672),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:33:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 188295),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:34:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 147089),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:46:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 120771),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:47:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 194623),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 141150),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:54:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86274),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 66196),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:54:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 194623),
      new Player(Guild.LES_FRANCS_ID, 'JustCIO', 123785),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:54:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 86274),
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 58036),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:54:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 272367),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 180886),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:05:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 272367),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 185522),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:05:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123340),
      new Player(Guild.LES_FRANCS_ID, 'Jack', 86886),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:07:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.LES_FRANCS_ID, 'Daichi Truth', 81291),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:07:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 123340),
      new Player(Guild.LES_FRANCS_ID, 'snookerbibi', 82542),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:07:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 71662),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:07:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 34417),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:23:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 60035),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:24:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349529),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 226355),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:25:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349529),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 205998),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:25:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276430),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 192409),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:32:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118409),
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53789),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:47:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 118409),
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 80710),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:48:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 196014),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 139241),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:49:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 196014),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 120652),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:49:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202815),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 156084),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:51:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202815),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 137598),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:52:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 276430),
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 173547),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:12:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 221883),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 174098),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:30:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 221883),
      new Player(Guild.LES_FRANCS_ID, 'Daichi Truth', 180056),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:31:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 66584),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:46:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      new Player(Guild.LES_FRANCS_ID, 'ThanhDu', 44043),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:47:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82311),
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 58968),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:39:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 82311),
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:40:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 90812),
      new Player(Guild.LES_FRANCS_ID, 'Spymanu', 51101),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:12:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 90812),
      new Player(Guild.LES_FRANCS_ID, 'darweesh999', 48939),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:12:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 194082),
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 155456),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:23:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 194082),
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 123580),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:23:59`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 156194),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 155643),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T03:50:47`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Vorn', 156194),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 155643),
      Fortification.LIGHTHOUSE_ID,
      6,
      false,
      `${warDateString}T03:51:34`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 226355),
      new Player(Guild.ASSASSINS_ID, 'KP', 202700),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:42:50`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 226355),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 184256),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:46:08`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 173639),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 162545),
      Fortification.MAGE_ACADEMY_ID,
      16,
      false,
      `${warDateString}T05:04:10`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'sylvainwar', 173639),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 155348),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T05:06:56`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 166132),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 155643),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:25:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'King Oko', 161858),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183723),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T05:26:26`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 205998),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 183723),
      Fortification.MAGE_ACADEMY_ID,
      16,
      true,
      `${warDateString}T06:26:57`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 205998),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 155643),
      Fortification.LIGHTHOUSE_ID,
      14,
      true,
      `${warDateString}T06:27:27`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Nick56450', 109685),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 162545),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T07:52:18`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Ulol4free', 80710),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211704),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T09:48:21`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 181217),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 274228),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:33:49`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 181217),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 275597),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:34:22`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:42:33`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Spicitus', 40928),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:42:50`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Jack', 185522),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 275597),
      Fortification.MAGE_ACADEMY_ID,
      1,
      false,
      `${warDateString}T11:01:12`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 58036),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211704),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:51:31`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Touftouff', 121558),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 275597),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T11:52:34`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53789),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211704),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:41:12`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'jpMazura', 53789),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211704),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T12:42:00`
    ),
  ],
  Guild.LES_FRANCS_ID,
  127,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_19_2020,
  Guild.ASSASSINS_ID,
  1400
);
