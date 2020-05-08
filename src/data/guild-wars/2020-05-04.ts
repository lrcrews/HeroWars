import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-04';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.MERICA_ID, 'Song x 2', 210865),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:05:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.MERICA_ID, 'discuas', 184290),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:06:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 178850),
      new Player(Guild.MERICA_ID, 'Julian', 151397),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T02:57:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 178850),
      new Player(Guild.MERICA_ID, 'WildWind', 152687),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T02:57:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 181672),
      new Player(Guild.MERICA_ID, '_sad1_', 174418),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:00:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.MERICA_ID, '--Babababababab', 161940),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:05:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.MERICA_ID, 'Jokill31', 150686),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:05:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      new Player(Guild.MERICA_ID, 'WildWind', 95338),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:16:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122527),
      new Player(Guild.MERICA_ID, 'Bilbo', 115086),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:16:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.MERICA_ID, 'Dol', 66512),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:17:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122527),
      new Player(Guild.MERICA_ID, 'Julian', 110559),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:17:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.MERICA_ID, 'Fenrigul', 67009),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:18:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 129126),
      new Player(Guild.MERICA_ID, 'Tioaco', 90120),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:04:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 182069),
      new Player(Guild.MERICA_ID, 'Drenz', 156560),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:06:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.MERICA_ID, 'Drenz', 88322),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:26:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.MERICA_ID, 'DerVehuel', 85000),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:27:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 115679),
      new Player(Guild.MERICA_ID, 'Mac 270072', 109841),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:53:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 115679),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 103955),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:54:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85790),
      new Player(Guild.MERICA_ID, 'TanoOo', 76821),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:35:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 347906),
      new Player(Guild.MERICA_ID, 'discuas', 254927),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 347906),
      new Player(Guild.MERICA_ID, 'Song x 2', 219468),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81394),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 80346),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:10:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 173803),
      new Player(Guild.MERICA_ID, 'TanoOo', 139419),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:10:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81394),
      new Player(Guild.MERICA_ID, 'Juramar', 75549),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:11:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 270137),
      new Player(Guild.MERICA_ID, 'Gi', 234639),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:36:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 217666),
      new Player(Guild.MERICA_ID, 'DerVehuel', 196149),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:48:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 212066),
      new Player(Guild.MERICA_ID, 'Bilbo', 171499),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:51:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 274896),
      new Player(Guild.MERICA_ID, 'Dinobunny', 220798),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:05:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 90408),
      new Player(Guild.MERICA_ID, '_sad1_', 82584),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:06:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202053),
      new Player(Guild.MERICA_ID, 'Tioaco', 173696),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:06:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 154976),
      new Player(Guild.MERICA_ID, 'Juramar', 136557),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:07:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202053),
      new Player(Guild.MERICA_ID, 'Waldo The Great', 178382),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:09:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 270137),
      new Player(Guild.MERICA_ID, 'Mac 270072', 223082),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:19:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192768),
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 181771),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:21:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192768),
      new Player(Guild.MERICA_ID, 'Dol', 164230),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:21:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.MERICA_ID, 'Gi', 128498),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T12:06:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.MERICA_ID, 'Dinobunny', 135352),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T12:07:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 191788),
      new Player(Guild.MERICA_ID, 'Fenrigul', 170501),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:27:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 274978),
      new Player(Guild.MERICA_ID, '--Babababababab', 243401),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:28:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 191788),
      new Player(Guild.MERICA_ID, 'Jokill31', 201316),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:28:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song x 2', 210865),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T00:57:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Song x 2', 210865),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 225906),
      Fortification.BRIDGE_ID,
      19,
      false,
      `${warDateString}T00:58:43`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 184290),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211078),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T01:07:19`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'discuas', 184290),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      14,
      false,
      `${warDateString}T01:08:10`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 76821),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 225906),
      Fortification.BRIDGE_ID,
      1,
      true,
      `${warDateString}T01:22:50`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 128498),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211078),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T03:28:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 104661),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      3,
      false,
      `${warDateString}T07:27:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Waldo The Great', 104661),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T07:27:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '--Babababababab', 161940),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T08:19:27`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '--Babababababab', 161940),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T08:20:59`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 110559),
      new Player(Guild.ASSASSINS_ID, 'elo', 115679),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T08:34:31`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 92282),
      new Player(Guild.ASSASSINS_ID, 'wookie', 89247),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:34:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Julian', 110559),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:35:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 151256),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 148239),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:36:01`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 66512),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:36:28`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 67009),
      new Player(Guild.ASSASSINS_ID, 'elo', 115679),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T08:40:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Jokill31', 151256),
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      Fortification.GATES_OF_NATURE_ID,
      17,
      false,
      `${warDateString}T08:41:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'TanoOo', 76821),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:42:16`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 135352),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 129126),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T08:42:33`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dol', 164771),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 154976),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:46:55`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 85000),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81394),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:53:12`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'DerVehuel', 85000),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85306),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T08:53:46`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Fenrigul', 67009),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85306),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T08:56:35`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 75549),
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      Fortification.GATES_OF_NATURE_ID,
      2,
      false,
      `${warDateString}T09:00:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Juramar', 75549),
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T09:00:52`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 115094),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 127808),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:06:22`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 116106),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 97708),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:11:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Bilbo', 115094),
      new Player(Guild.ASSASSINS_ID, 'KP', 100281),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:12:45`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Dinobunny', 135352),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122544),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:13:24`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Gi', 223396),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 273959),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:14:13`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'WildWind', 92282),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 89615),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T11:15:23`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Mac 270072', 223836),
      new Player(Guild.ASSASSINS_ID, 'KP', 201887),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:23:09`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 80346),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92383),
      Fortification.GATES_OF_NATURE_ID,
      6,
      false,
      `${warDateString}T11:35:02`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'EllipticalAid4', 80346),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92383),
      Fortification.GATES_OF_NATURE_ID,
      8,
      false,
      `${warDateString}T11:35:38`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 80417),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92383),
      Fortification.GATES_OF_NATURE_ID,
      6,
      true,
      `${warDateString}T11:51:05`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, '_sad1_', 144517),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 160196),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T11:54:40`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 178405),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 154641),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:11:39`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 149961),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 163177),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:14:51`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Tioaco', 178405),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 160196),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T12:19:07`
    ),
    new Battle(
      new Player(Guild.MERICA_ID, 'Drenz', 157280),
      new Player(Guild.ASSASSINS_ID, 'wookie', 178800),
      Fortification.FOUNDRY_ID,
      1,
      false,
      `${warDateString}T12:26:29`
    ),
  ],
  Guild.MERICA_ID,
  841,
  warDateString,
  'Monday',
  GuildWar.WAR_WEEK_19_2020,
  Guild.ASSASSINS_ID,
  1400
);
