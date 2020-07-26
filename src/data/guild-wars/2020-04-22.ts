import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-22';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 87997),
      new Player(Guild.MRCO_ID, 'Wallario', 79023),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:07:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 87997),
      new Player(Guild.MRCO_ID, 'Amothep', 80386),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T03:08:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:21:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:21:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.MRCO_ID, '_DAZ_', 58437),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T05:38:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      new Player(Guild.MRCO_ID, 'ecka', 61226),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:39:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 169828),
      new Player(Guild.MRCO_ID, 'Wallario', 153550),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T05:56:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      new Player(Guild.MRCO_ID, 'Anhvilla', 66983),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:07:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 62682),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:08:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 175204),
      new Player(Guild.MRCO_ID, 'Tfy', 147779),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:09:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 175204),
      new Player(Guild.MRCO_ID, 'Big-D', 138543),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:10:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 88128),
      new Player(Guild.MRCO_ID, 'Indred Cole', 74087),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:48:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 88128),
      new Player(Guild.MRCO_ID, 'Revan', 70280),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:48:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 263151),
      new Player(Guild.MRCO_ID, 'Saucy', 196529),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:58:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 259742),
      new Player(Guild.MRCO_ID, 'MrTom', 205486),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:21:47`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 259742),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 193864),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:22:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      new Player(Guild.MRCO_ID, 'MEATeor', 125917),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:45:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231947),
      new Player(Guild.MRCO_ID, 'Revan', 184528),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:46:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105969),
      new Player(Guild.MRCO_ID, 'MrTom', 92494),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:49:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 105969),
      new Player(Guild.MRCO_ID, 'Big-D', 102076),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:51:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 188127),
      new Player(Guild.MRCO_ID, 'Kifyu', 169982),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:17:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84132),
      new Player(Guild.MRCO_ID, 'Williepint1982', 72401),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:38:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84132),
      new Player(Guild.MRCO_ID, 'Kifyu', 70987),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:38:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118803),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 108973),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:14:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118803),
      new Player(Guild.MRCO_ID, 'badianchick', 110002),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:15:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 334810),
      new Player(Guild.MRCO_ID, 'Sardine', 362734),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:19:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 82688),
      new Player(Guild.MRCO_ID, 'Tfy', 58083),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:22:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 195236),
      new Player(Guild.MRCO_ID, 'Anhvilla', 142924),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:32:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 211119),
      new Player(Guild.MRCO_ID, 'ecka', 171082),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:33:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 195236),
      new Player(Guild.MRCO_ID, 'Amothep', 175808),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T10:34:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 207930),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 196939),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:35:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 263151),
      new Player(Guild.MRCO_ID, 'badianchick', 200193),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:36:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 277388),
      new Player(Guild.MRCO_ID, 'MEATeor', 220416),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:56:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 188555),
      new Player(Guild.MRCO_ID, 'Indred Cole', 144415),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:04:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MRCO_ID, 'Saucy', 147689),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:12:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.MRCO_ID, 'Angelina', 152305),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:13:09`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 277388),
      new Player(Guild.MRCO_ID, 'Gardakus', 211819),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:50:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 184936),
      new Player(Guild.MRCO_ID, 'Williepint1982', 130773),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:25:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 174587),
      new Player(Guild.MRCO_ID, '_DAZ_', 166305),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:26:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 341135),
      new Player(Guild.MRCO_ID, 'Angelina', 281024),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:41:25`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:03:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:04:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 161655),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 141019),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T00:49:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Anhvilla', 161655),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 152921),
      Fortification.MAGE_ACADEMY_ID,
      10,
      false,
      `${warDateString}T00:51:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 188343),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 187324),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:26:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 188343),
      new Player(Guild.ASSASSINS_ID, 'KP', 195145),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:26:40`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'ecka', 170946),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 152921),
      Fortification.MAGE_ACADEMY_ID,
      10,
      true,
      `${warDateString}T08:09:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 281024),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 265524),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:12:02`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 281024),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 231926),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:12:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266223),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 222122),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T09:22:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 266223),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203413),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T09:23:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 147689),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 141755),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:26:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 148832),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:45:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Williepint1982', 72401),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:52:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Williepint1982', 72401),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74209),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:54:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 126453),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 118803),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:21:05`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MEATeor', 126453),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 124805),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:22:27`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 108973),
      new Player(Guild.ASSASSINS_ID, 'elo', 105969),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:22:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 108973),
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:24:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'ecka', 170946),
      new Player(Guild.ASSASSINS_ID, 'wookie', 169176),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:32:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 102076),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90071),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:42:15`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 184528),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 175204),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:43:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Big-D', 102076),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 82358),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:43:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 80386),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77088),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:44:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 80386),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80139),
      Fortification.SPRING_OF_ELEMENTS_ID,
      19,
      false,
      `${warDateString}T10:47:21`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 184718),
      new Player(Guild.ASSASSINS_ID, 'Don', 184936),
      Fortification.FOUNDRY_ID,
      10,
      false,
      `${warDateString}T10:49:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 110002),
      new Player(Guild.ASSASSINS_ID, 'wookie', 84422),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T11:03:19`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 110002),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 88509),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:05:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 150007),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 149200),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:05:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 190049),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 210799),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:11:35`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 79023),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 80139),
      Fortification.SPRING_OF_ELEMENTS_ID,
      1,
      true,
      `${warDateString}T11:12:37`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 166465),
      new Player(Guild.ASSASSINS_ID, 'Don', 184936),
      Fortification.FOUNDRY_ID,
      10,
      true,
      `${warDateString}T11:14:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 150007),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153654),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T11:14:32`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 153613),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153654),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T11:30:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Fuzzy (meat)', 144731),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153654),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T11:34:38`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Fuzzy (meat)', 144731),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 153654),
      Fortification.CITADEL_ID,
      9,
      true,
      `${warDateString}T11:35:24`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 190049),
      new Player(Guild.ASSASSINS_ID, 'elo', 174539),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:39:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 170174),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 151972),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:52:18`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 170174),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 166968),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:54:51`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 163336),
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T11:59:54`
    ),
  ],
  Guild.MRCO_ID,
  944,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_17_2020,
  Guild.ASSASSINS_ID,
  1400
);
