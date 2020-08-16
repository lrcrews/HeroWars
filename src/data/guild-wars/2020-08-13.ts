import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-08-13';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 196255),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      new Player(Guild.THE_ACADEMY_ID, 'Mercion', 227216),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 210578),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 173813),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:19:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 261651),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 155215),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:21:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 157840),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:40:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      new Player(Guild.THE_ACADEMY_ID, 'Bid-D', 155417),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T00:40:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 137106),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:09:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Taylord', 233171),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 105702),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:09:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 199928),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 92409),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:35:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 199928),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 122356),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:36:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 392468),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 267427),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:14:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 392468),
      new Player(Guild.THE_ACADEMY_ID, 'Mercion', 252176),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:16:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 75820),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:30:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 109514),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:30:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 366629),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 256446),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:46:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 312841),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 235705),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:48:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310059),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 211283),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:00:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 310059),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 203009),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:00:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 286280),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 192342),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:19:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 309718),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 250467),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:00:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 309718),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 278959),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:01:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 96883),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:07:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 335913),
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 272313),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:08:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 335913),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 217558),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:08:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 308301),
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 248532),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:26:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 423277),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 255049),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:26:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 332695),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 215694),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:43:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 332695),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 202995),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:43:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 119323),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:43:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 253689),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 108811),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:44:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 295360),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 192145),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:59:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      new Player(Guild.THE_ACADEMY_ID, 'Feramar', 109219),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:30:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198361),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 140608),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:56:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 198361),
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:56:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 223842),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:09:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 407391),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 208410),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:09:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 313335),
      new Player(Guild.THE_ACADEMY_ID, 'Feramar', 225815),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:01:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 313335),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 212437),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:02:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 185108),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 107553),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:21:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 185108),
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 96988),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:22:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mercion', 230178),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:52:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mercion', 230178),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:53:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 173813),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      9,
      false,
      `${warDateString}T01:03:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 173813),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      6,
      false,
      `${warDateString}T01:03:29`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 196255),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      12,
      false,
      `${warDateString}T01:04:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 196255),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268913),
      Fortification.BRIDGE_ID,
      8,
      true,
      `${warDateString}T01:05:54`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 255709),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 332695),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T01:11:33`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 255709),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 294728),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:12:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 140608),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T01:50:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 140608),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T01:51:42`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 75820),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T02:02:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 224733),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 258709),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:28:13`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 272313),
      new Player(Guild.ASSASSINS_ID, 'En4', 333836),
      Fortification.LIGHTHOUSE_ID,
      9,
      false,
      `${warDateString}T04:12:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'VonBagher', 267942),
      new Player(Guild.ASSASSINS_ID, 'Gom', 384028),
      Fortification.LIGHTHOUSE_ID,
      10,
      false,
      `${warDateString}T04:14:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 250516),
      new Player(Guild.ASSASSINS_ID, 'KP', 312945),
      Fortification.LIGHTHOUSE_ID,
      11,
      false,
      `${warDateString}T04:16:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 250516),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 307896),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:19:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 202995),
      new Player(Guild.ASSASSINS_ID, 'KP', 312945),
      Fortification.LIGHTHOUSE_ID,
      1,
      false,
      `${warDateString}T04:25:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 279130),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      9,
      false,
      `${warDateString}T05:01:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 279130),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291919),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T05:02:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 157840),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T05:29:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 157840),
      new Player(Guild.ASSASSINS_ID, 'KP', 186265),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T05:30:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 203009),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T06:53:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 224901),
      new Player(Guild.ASSASSINS_ID, 'KP', 312945),
      Fortification.LIGHTHOUSE_ID,
      8,
      true,
      `${warDateString}T07:20:11`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200440),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T08:18:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Wallario', 130418),
      new Player(Guild.ASSASSINS_ID, 'KP', 186265),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T08:19:24`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 256446),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T08:37:27`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 235988),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291919),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T08:47:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 235988),
      new Player(Guild.ASSASSINS_ID, 'En4', 333836),
      Fortification.LIGHTHOUSE_ID,
      11,
      true,
      `${warDateString}T08:48:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 256446),
      new Player(Guild.ASSASSINS_ID, 'Gom', 384028),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T08:50:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 157167),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 184513),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T09:40:14`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Big-D', 157167),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T09:41:32`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Feramar', 109219),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 184513),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      false,
      `${warDateString}T10:08:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Feramar', 109219),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180184),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T10:09:48`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 211283),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:19:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 211283),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291919),
      Fortification.BARRACKS_ID,
      1,
      false,
      `${warDateString}T10:19:56`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 187786),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 291919),
      Fortification.BARRACKS_ID,
      10,
      true,
      `${warDateString}T10:38:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Warbrain', 191427),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T10:44:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 213046),
      new Player(Guild.ASSASSINS_ID, 'Saucy', 278277),
      Fortification.MAGE_ACADEMY_ID,
      11,
      true,
      `${warDateString}T11:02:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 96883),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 184513),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T11:02:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 203086),
      new Player(Guild.ASSASSINS_ID, 'Gom', 384028),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T11:06:27`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  530,
  warDateString,
  GuildWar.WAR_DAY_THURSDAY,
  GuildWar.WAR_WEEK_33_2020,
  Guild.ASSASSINS_ID,
  1400
);
