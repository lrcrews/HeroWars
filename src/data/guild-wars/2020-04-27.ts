import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-27';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.MERICA_ID, 'Song', 206834),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.MERICA_ID, 'discuas', 181621),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:36:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176041),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 177814),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:52:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176041),
      new Player(Guild.MERICA_ID, 'Bilbo', 165753),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T05:13:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.MERICA_ID, 'Babababababab', 161531),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:46:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.MERICA_ID, 'Dinobunny', 128732),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T08:11:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120379),
      new Player(Guild.MERICA_ID, 'Julian', 109846),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:15:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.MERICA_ID, 'WildWind', 88606),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:15:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120379),
      new Player(Guild.MERICA_ID, 'Mac', 108959),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:15:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.MERICA_ID, 'Tioaco', 88652),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:16:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74707),
      new Player(Guild.MERICA_ID, 'Dol', 65371),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:31:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74707),
      new Player(Guild.MERICA_ID, 'Fenrigul', 50841),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:32:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78409),
      new Player(Guild.MERICA_ID, 'Juramar', 75229),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:37:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78409),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 68733),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:37:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      new Player(Guild.MERICA_ID, 'Drenz', 82574),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:53:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      new Player(Guild.MERICA_ID, 'DerVehuel', 84584),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:54:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 266085),
      new Player(Guild.MERICA_ID, 'Gi', 224230),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:04:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 266085),
      new Player(Guild.MERICA_ID, 'Jokill31', 202432),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:05:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199091),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 176115),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:25:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199091),
      new Player(Guild.MERICA_ID, 'Tioaco', 168163),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T09:27:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 107535),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:48:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 125077),
      new Player(Guild.MERICA_ID, 'Bilbo', 116194),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:14:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 180641),
      new Player(Guild.MERICA_ID, 'WildWind', 142813),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:15:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87456),
      new Player(Guild.MERICA_ID, '_sad1_', 76255),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:24:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87456),
      new Player(Guild.MERICA_ID, 'TanoOo', 76152),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:25:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 190269),
      new Player(Guild.MERICA_ID, 'Fenrigul', 163134),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:27:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 190269),
      new Player(Guild.MERICA_ID, 'Dol', 159591),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:30:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 171799),
      new Player(Guild.MERICA_ID, 'Julian', 141082),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:32:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 171799),
      new Player(Guild.MERICA_ID, 'Juramar', 131831),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:33:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 210700),
      new Player(Guild.MERICA_ID, 'Mac', 228689),
      Fortification.LIGHTHOUSE_ID,
      9,
      false,
      `${warDateString}T11:39:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 180235),
      new Player(Guild.MERICA_ID, 'TanoOo', 135575),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:03:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 342940),
      new Player(Guild.MERICA_ID, 'discuas', 248534),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:10:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 342940),
      new Player(Guild.MERICA_ID, 'Song', 210329),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:10:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 188417),
      new Player(Guild.MERICA_ID, 'Drenz', 152064),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:16:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 188417),
      new Player(Guild.MERICA_ID, '_sad1_', 171813),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T12:24:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 204428),
      new Player(Guild.MERICA_ID, 'Jokill31', 123274),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:53:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 204428),
      new Player(Guild.MERICA_ID, 'Gi', 127729),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T12:54:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 213966),
      new Player(Guild.MERICA_ID, 'Babababababab', 233918),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T12:56:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 182106),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 205683),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:07:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 182106),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 223380),
      Fortification.BRIDGE_ID,
      13,
      false,
      `${warDateString}T00:07:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 162646),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 144885),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:10:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 206834),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T00:29:17`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song', 206834),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T00:29:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 108959),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T00:51:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac', 108959),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 205683),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T00:53:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 161531),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 223380),
      Fortification.BRIDGE_ID,
      7,
      true,
      `${warDateString}T07:17:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Babababababab', 161531),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T07:18:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 76152),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74707),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:37:21`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 111040),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 125825),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:38:04`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 76152),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78409),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T07:43:06`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 123737),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120395),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:50:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 123737),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 125077),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:52:14`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 84584),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83348),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:58:47`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 84584),
      new Player(Guild.ASSASSINS_ID, 'wookie', 85546),
      Fortification.GATES_OF_NATURE_ID,
      15,
      false,
      `${warDateString}T08:01:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 134807),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      10,
      false,
      `${warDateString}T08:05:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 127729),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 144222),
      Fortification.BASTION_OF_ICE_ID,
      14,
      false,
      `${warDateString}T08:13:58`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 134807),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      10,
      true,
      `${warDateString}T08:21:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 94069),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:21:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 127729),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 144222),
      Fortification.BASTION_OF_ICE_ID,
      6,
      true,
      `${warDateString}T08:23:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 94069),
      new Player(Guild.ASSASSINS_ID, 'wookie', 85546),
      Fortification.GATES_OF_NATURE_ID,
      5,
      true,
      `${warDateString}T08:24:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 75229),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78409),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T08:32:37`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 76255),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      Fortification.BASTION_OF_ICE_ID,
      12,
      false,
      `${warDateString}T08:32:54`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 76255),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      Fortification.BASTION_OF_ICE_ID,
      8,
      true,
      `${warDateString}T08:33:32`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 111040),
      new Player(Guild.ASSASSINS_ID, 'elo', 107535),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:42:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87459),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:27:11`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 90893),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:27:42`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 178306),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155619),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T10:45:26`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 178306),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 156182),
      Fortification.CITADEL_ID,
      16,
      false,
      `${warDateString}T10:46:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 109846),
      new Player(Guild.ASSASSINS_ID, 'KP', 98156),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:04:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 109846),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:05:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 131934),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155619),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:10:18`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 160208),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 151360),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:12:15`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 151737),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 165779),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:13:48`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 160208),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 155619),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:15:53`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 152781),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 171517),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T11:24:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 163622),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 156182),
      Fortification.CITADEL_ID,
      4,
      true,
      `${warDateString}T11:50:56`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 168163),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 154758),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:51:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 168163),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 171517),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T11:54:10`
    ),
  ],
  Guild.MERICA_ID,
  816,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_18_2020,
  Guild.ASSASSINS_ID,
  1209
);
