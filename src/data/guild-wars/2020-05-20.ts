import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-20';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Song', 243254),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:25:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MERICA_ID, 'Jokill31', 253254),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:26:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 244452),
      new Player(Guild.MERICA_ID, 'Babababababab', 235057),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:48:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 244452),
      new Player(Guild.MERICA_ID, 'discuas', 215104),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:49:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 283476),
      new Player(Guild.MERICA_ID, 'DerVehuel', 232260),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T00:59:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 283476),
      new Player(Guild.MERICA_ID, 'Jokill31', 236268),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T01:00:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 223071),
      new Player(Guild.MERICA_ID, 'Juramar', 143100),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:41:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 223071),
      new Player(Guild.MERICA_ID, 'Drenz', 169045),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:43:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 137531),
      new Player(Guild.MERICA_ID, 'Dol', 73563),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:47:33`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 137531),
      new Player(Guild.MERICA_ID, 'TanoOo', 89286),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:48:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 302751),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 187812),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T03:52:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 302751),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 187678),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:53:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 140731),
      new Player(Guild.MERICA_ID, 'Julian', 126379),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:58:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 140731),
      new Player(Guild.MERICA_ID, 'Fenrigul', 134166),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:59:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MERICA_ID, '_sad1_', 90528),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:38:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MERICA_ID, 'Juramar', 83471),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:38:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160658),
      new Player(Guild.MERICA_ID, 'Bilbo', 134358),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:20:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160658),
      new Player(Guild.MERICA_ID, 'Mac', 140856),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:21:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289782),
      new Player(Guild.MERICA_ID, 'Bilbo', 184475),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:48:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289782),
      new Player(Guild.MERICA_ID, 'Tioaco', 191404),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:48:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 123414),
      new Player(Guild.MERICA_ID, 'Tioaco', 101390),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:48:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 123414),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 99932),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:48:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      new Player(Guild.MERICA_ID, 'DerVehuel', 180589),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:16:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 217090),
      new Player(Guild.MERICA_ID, '_sad1_', 181719),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:17:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112171),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:32:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.MERICA_ID, 'Drenz', 104591),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:33:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 294885),
      new Player(Guild.MERICA_ID, 'Dol', 170654),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:40:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 294885),
      new Player(Guild.MERICA_ID, 'Mac', 231410),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:41:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 305808),
      new Player(Guild.MERICA_ID, 'Fenrigul', 186440),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:54:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 321103),
      new Player(Guild.MERICA_ID, 'Song', 237050),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:58:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 239173),
      new Player(Guild.MERICA_ID, 'WildWind', 171818),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:01:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 239173),
      new Player(Guild.MERICA_ID, 'TanoOo', 160368),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:02:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340364),
      new Player(Guild.MERICA_ID, 'Babababababab', 264272),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340364),
      new Player(Guild.MERICA_ID, 'Dinobunny', 246511),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:12:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 369801),
      new Player(Guild.MERICA_ID, 'discuas', 270702),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:16:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 369801),
      new Player(Guild.MERICA_ID, 'Gi', 279622),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:16:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 216144),
      new Player(Guild.MERICA_ID, 'Julian', 160341),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:16:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      new Player(Guild.MERICA_ID, 'WildWind', 98456),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:18:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Gi', 158147),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:32:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MERICA_ID, 'Dinobunny', 160868),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:32:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 243600),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:27:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 243600),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      16,
      false,
      `${warDateString}T00:28:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 253857),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:36:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 253857),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:37:57`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 89286),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T00:42:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 89286),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T00:43:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 104591),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T01:49:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 104591),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T01:50:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 83471),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T02:00:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 101390),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T05:11:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 101390),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T05:22:20`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 180589),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      17,
      false,
      `${warDateString}T05:28:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 180589),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 193374),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T05:30:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 134841),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 144103),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:30:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 134841),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 137531),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:32:00`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 126754),
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:05:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112681),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      3,
      true,
      `${warDateString}T06:06:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 126754),
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:07:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 235586),
      new Player(Guild.ASSASSINS_ID, 'Regal', 244452),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T07:29:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 235586),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:29:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 99932),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 193374),
      Fortification.GATES_OF_NATURE_ID,
      3,
      true,
      `${warDateString}T07:34:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 112681),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:49:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 99932),
      new Player(Guild.ASSASSINS_ID, 'Regal', 244452),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T09:52:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 135275),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 132147),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:35:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 135275),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 124988),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:35:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 246566),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 208357),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:40:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 215104),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217081),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:42:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 215104),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 235459),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:42:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 161357),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 180622),
      Fortification.BASTION_OF_FIRE_ID,
      19,
      false,
      `${warDateString}T10:50:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 85903),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 180622),
      Fortification.BASTION_OF_FIRE_ID,
      1,
      true,
      `${warDateString}T11:09:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 140856),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 140731),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:11:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 171428),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177801),
      Fortification.CITADEL_ID,
      17,
      false,
      `${warDateString}T11:21:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 175421),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 177801),
      Fortification.CITADEL_ID,
      3,
      true,
      `${warDateString}T12:04:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 157809),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 181719),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:06:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 158147),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 160658),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T12:12:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 161604),
      new Player(Guild.ASSASSINS_ID, 'elo', 201817),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:13:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 275840),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 317183),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:17:25`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 171672),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 199277),
      Fortification.CITADEL_ID,
      8,
      false,
      `${warDateString}T12:19:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 231517),
      new Player(Guild.ASSASSINS_ID, 'HERO', 199848),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:26:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 154241),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 199277),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:46:57`
    ),
  ],
  Guild.MERICA_ID,
  828,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_21_2020,
  Guild.ASSASSINS_ID,
  1400
);
