import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-10';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 149909),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161279),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 148628),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:07:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 302320),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 201282),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:17:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 153589),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 144229),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 153589),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 71859),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:20:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 297783),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 193809),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:20:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327134),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 249261),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T00:25:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 327134),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 193920),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T00:25:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 214627),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 146639),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:33:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 214627),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 132147),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:33:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 191430),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 96281),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:21:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 191430),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 78970),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:22:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161918),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 120123),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:55:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 161918),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 108830),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:02:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401684),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 245611),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:24:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 401684),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 222648),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:25:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 195558),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 97546),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:38:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 195558),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 92528),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:39:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327636),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 183329),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:39:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 327636),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 173171),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:39:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185471),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 122576),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:32:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185471),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 139559),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:32:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 279725),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 163538),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:51:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 279725),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 192971),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:52:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311687),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 176428),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:17:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311687),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 188672),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:17:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 269572),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 150048),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:38:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 269572),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 167330),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T05:38:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 379186),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 182916),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:59:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 405329),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 220460),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:13:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 168822),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 86881),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:13:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 168822),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 82854),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:14:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 370940),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 207625),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:14:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 358492),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 182677),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:02:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 328797),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 231668),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T08:03:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 268302),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 231668),
      Fortification.CITADEL_ID,
      18,
      true,
      `${warDateString}T09:16:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 379186),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 173647),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:46:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 92633),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:51:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 153155),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 92574),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:52:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 161914),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 61897),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:13:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 222882),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 274619),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:00:12`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 222882),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T01:01:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 249344),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 311624),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T01:26:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 249344),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      8,
      false,
      `${warDateString}T01:28:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 183329),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      4,
      false,
      `${warDateString}T01:29:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 231668),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 220135),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:29:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 183329),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267661),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T01:30:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 231668),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      3,
      false,
      `${warDateString}T01:31:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 173171),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T01:40:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 245611),
      new Player(Guild.ASSASSINS_ID, 'Regal', 350713),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T03:19:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 245611),
      new Player(Guild.ASSASSINS_ID, 'Regal', 350713),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T03:20:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 182916),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T04:04:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 182916),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T04:07:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 194526),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      5,
      false,
      `${warDateString}T05:03:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 194526),
      new Player(Guild.ASSASSINS_ID, 'wookie', 245622),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T05:17:54`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 167226),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T06:46:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 170523),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T06:47:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 149785),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T08:13:04`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 150156),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T08:14:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 188720),
      new Player(Guild.ASSASSINS_ID, 'Regal', 350713),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T08:30:51`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 188720),
      new Player(Guild.ASSASSINS_ID, 'En4', 301164),
      Fortification.LIGHTHOUSE_ID,
      5,
      true,
      `${warDateString}T08:31:15`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 220659),
      new Player(Guild.ASSASSINS_ID, 'Regal', 350713),
      Fortification.BARRACKS_ID,
      10,
      true,
      `${warDateString}T08:38:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 220659),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267661),
      Fortification.BARRACKS_ID,
      11,
      false,
      `${warDateString}T08:40:13`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 193809),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267661),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:50:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 193809),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T08:51:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 208769),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267661),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T09:05:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 208769),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 267661),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T09:06:13`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 89049),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:48:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 89049),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:49:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 167330),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T10:03:26`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 167330),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T10:03:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 207823),
      new Player(Guild.ASSASSINS_ID, 'KP', 284014),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T10:05:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 207823),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T10:05:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 173211),
      new Player(Guild.ASSASSINS_ID, 'KP', 284014),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T10:42:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 165713),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:32:18`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 168250),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T12:33:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 182869),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T12:36:23`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 182869),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 272778),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T12:36:41`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  178,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_28_2020,
  Guild.ASSASSINS_ID,
  1320
);
