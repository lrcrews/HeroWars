import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-06-19';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 195321),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 259661),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 42358),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:09:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'agecanonix', 195756),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 200590),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 148819),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 80903),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:06:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 148819),
      new Player(Guild.LES_FRANCS_ID, 'Asterix', 79862),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:07:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 192526),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 123244),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:02:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 192526),
      new Player(Guild.LES_FRANCS_ID, 'goudurix', 121269),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:03:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 327284),
      new Player(Guild.LES_FRANCS_ID, 'agecanonix', 188213),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:42:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 327284),
      new Player(Guild.LES_FRANCS_ID, 'genorho', 206216),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:43:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395666),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 248888),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:09:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 172107),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 51725),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:40:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 172107),
      new Player(Guild.LES_FRANCS_ID, 'nik96', 46757),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:41:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.LES_FRANCS_ID, 'Obelix', 71867),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:23:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 159827),
      new Player(Guild.LES_FRANCS_ID, 'Tojat', 69617),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:24:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194248),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 63394),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:04:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 194248),
      new Player(Guild.LES_FRANCS_ID, 'Falbala', 94515),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:04:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 143363),
      new Player(Guild.LES_FRANCS_ID, 'lolodo', 83670),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:06:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 143363),
      new Player(Guild.LES_FRANCS_ID, 'Panoramix', 72120),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:07:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154189),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 53604),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:08:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154189),
      new Player(Guild.LES_FRANCS_ID, 'idefix', 75239),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:08:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 392169),
      new Player(Guild.LES_FRANCS_ID, 'Akigis', 243466),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:58:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 387852),
      new Player(Guild.LES_FRANCS_ID, 'Falbala', 201616),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:01:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 291877),
      new Player(Guild.LES_FRANCS_ID, 'Panoramix', 166794),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:09:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 291877),
      new Player(Guild.LES_FRANCS_ID, 'Scof14', 168054),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:09:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327515),
      new Player(Guild.LES_FRANCS_ID, 'Tojat', 166842),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:40:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327515),
      new Player(Guild.LES_FRANCS_ID, 'Abraracourcix', 169655),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:40:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 260390),
      new Player(Guild.LES_FRANCS_ID, 'Moogutaxe', 140977),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:28:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 260390),
      new Player(Guild.LES_FRANCS_ID, 'Obelix', 121258),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:29:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317495),
      new Player(Guild.LES_FRANCS_ID, 'Netle', 183367),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:14:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 317495),
      new Player(Guild.LES_FRANCS_ID, 'Asterix', 201315),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:15:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.LES_FRANCS_ID, 'Abraracourcix', 71745),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:36:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 147000),
      new Player(Guild.LES_FRANCS_ID, 'Ruthergnol', 47579),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:40:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255533),
      new Player(Guild.LES_FRANCS_ID, 'idefix', 167280),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:16:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 255533),
      new Player(Guild.LES_FRANCS_ID, 'nik96', 157903),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:16:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 303383),
      new Player(Guild.LES_FRANCS_ID, 'DMostafa', 146531),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:23:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 303383),
      new Player(Guild.LES_FRANCS_ID, 'Ruthergnol', 150600),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:23:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 395666),
      new Player(Guild.LES_FRANCS_ID, 'ATILLA', 187913),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:24:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 363198),
      new Player(Guild.LES_FRANCS_ID, 'goudurix', 174171),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:52:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 363198),
      new Player(Guild.LES_FRANCS_ID, 'Coquette', 128390),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:53:13`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'agecanonix', 192198),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T00:21:55`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'agecanonix', 192198),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T00:23:37`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Panoramix', 72120),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T01:31:32`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Panoramix', 72120),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:31:55`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 202490),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 259634),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T06:18:54`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Netle', 202490),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 251714),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T06:19:50`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Obelix', 71867),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:32:55`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Obelix', 71867),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:33:17`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Tojat', 69617),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T10:04:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Tojat', 166842),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 303163),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:05:44`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'Falbala', 95307),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T11:01:27`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'idefix', 71486),
      new Player(Guild.ASSASSINS_ID, 'Regal', 266223),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:09:11`
    ),
    new Battle(
      new Player(Guild.LES_FRANCS_ID, 'idefix', 71486),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T11:09:35`
    ),
  ],
  Guild.LES_FRANCS_ID,
  28,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_25_2020,
  Guild.ASSASSINS_ID,
  1400
);
