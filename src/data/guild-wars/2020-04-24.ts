import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-24';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 119315),
      new Player(Guild.ROMANIA_ID, 'tokyo', 89446),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:04:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 171767),
      new Player(Guild.ROMANIA_ID, 'ALAN', 152403),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:29:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 171767),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 130495),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:29:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.ROMANIA_ID, 'Blondu', 232269),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:47:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 214294),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:47:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203189),
      new Player(Guild.ROMANIA_ID, 'Marius', 192892),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T06:14:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 264055),
      new Player(Guild.ROMANIA_ID, 'hama52', 192661),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:15:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 119315),
      new Player(Guild.ROMANIA_ID, 'hama52', 104566),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:32:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 151399),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:50:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.ROMANIA_ID, 'JustMe', 148506),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:51:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83018),
      new Player(Guild.ROMANIA_ID, 'CoskunBayraktar', 61441),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:57:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83018),
      new Player(Guild.ROMANIA_ID, 'Medo', 64803),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:58:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 53549),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:12:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 49127),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:13:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 89501),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 79122),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:41:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 89501),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66002),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:42:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 340150),
      new Player(Guild.ROMANIA_ID, 'Blondu', 256045),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:45:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 340150),
      new Player(Guild.ROMANIA_ID, 'JustMe', 236835),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:45:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 279584),
      new Player(Guild.ROMANIA_ID, 'Adrian', 187011),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:49:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 279584),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 193991),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:50:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77418),
      new Player(Guild.ROMANIA_ID, 'Gaby', 53065),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:55:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77418),
      new Player(Guild.ROMANIA_ID, 'VsEye', 62348),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T07:56:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 106833),
      new Player(Guild.ROMANIA_ID, 'Adrian', 104610),
      Fortification.GATES_OF_NATURE_ID,
      18,
      false,
      `${warDateString}T08:46:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 106833),
      new Player(Guild.ROMANIA_ID, 'Phantom', 54596),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:01:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 232178),
      new Player(Guild.ROMANIA_ID, 'CoskunBayraktar', 111741),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:15:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 197074),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 152872),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:39:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      new Player(Guild.ROMANIA_ID, 'Adrian', 104610),
      Fortification.GATES_OF_NATURE_ID,
      2,
      true,
      `${warDateString}T09:57:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 211871),
      new Player(Guild.ROMANIA_ID, 'Thyned', 170180),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:14:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 261066),
      new Player(Guild.ROMANIA_ID, 'Marius', 209836),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:15:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 208517),
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 163859),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:16:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 261066),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 207921),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:16:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 189848),
      new Player(Guild.ROMANIA_ID, 'Medo', 144860),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:48:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 189848),
      new Player(Guild.ROMANIA_ID, 'd1n06586', 136491),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:48:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84991),
      new Player(Guild.ROMANIA_ID, 'Thyned', 65169),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:54:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84991),
      new Player(Guild.ROMANIA_ID, 'ALAN', 50550),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:55:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 137417),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:02:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 176741),
      new Player(Guild.ROMANIA_ID, 'Gaby', 135873),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:30:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 176741),
      new Player(Guild.ROMANIA_ID, 'VsEye', 135409),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T11:31:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 186270),
      new Player(Guild.ROMANIA_ID, 'tokyo', 164336),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:37:05`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 186270),
      new Player(Guild.ROMANIA_ID, 'Phantom', 156657),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:37:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 227250),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      15,
      false,
      `${warDateString}T00:01:18`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 232269),
      new Player(Guild.ASSASSINS_ID, 'Gom', 227817),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 137417),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 248819),
      Fortification.BRIDGE_ID,
      5,
      true,
      `${warDateString}T02:16:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 214294),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 203927),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:44:11`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 214294),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 222751),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T02:45:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 148506),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 222751),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T03:14:10`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 192892),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:16:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 192892),
      new Player(Guild.ASSASSINS_ID, 'doublejam', 143526),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:17:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 64803),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T03:18:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66327),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77418),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T03:18:47`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66327),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83018),
      Fortification.BASTION_OF_FIRE_ID,
      10,
      false,
      `${warDateString}T03:19:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 151971),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 119863),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:22:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 151971),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 142325),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T03:23:16`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 104566),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 125825),
      Fortification.BASTION_OF_FIRE_ID,
      16,
      false,
      `${warDateString}T03:45:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 49127),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 77418),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T04:04:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 53065),
      new Player(Guild.ASSASSINS_ID, 'Don', 65099),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T04:05:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 89446),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90480),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:09:25`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 89446),
      new Player(Guild.ASSASSINS_ID, 'KP', 96045),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:10:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 79122),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84994),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T04:25:59`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 64803),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      Fortification.GATES_OF_NATURE_ID,
      13,
      false,
      `${warDateString}T04:26:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Strange Tamer', 79122),
      new Player(Guild.ASSASSINS_ID, 'wookie', 85027),
      Fortification.SPRING_OF_ELEMENTS_ID,
      17,
      false,
      `${warDateString}T04:29:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 62348),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 74458),
      Fortification.GATES_OF_NATURE_ID,
      7,
      true,
      `${warDateString}T05:13:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 62348),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83018),
      Fortification.BASTION_OF_FIRE_ID,
      10,
      true,
      `${warDateString}T05:14:39`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 137417),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 124541),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:19:23`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'CoskunBayraktar', 63919),
      new Player(Guild.ASSASSINS_ID, 'wookie', 85027),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T05:44:20`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'CoskunBayraktar', 63919),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 125825),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T05:45:05`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 53549),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 84994),
      Fortification.SPRING_OF_ELEMENTS_ID,
      3,
      true,
      `${warDateString}T06:07:41`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 153422),
      new Player(Guild.ASSASSINS_ID, 'elo', 177081),
      Fortification.CITADEL_ID,
      4,
      false,
      `${warDateString}T06:33:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 194049),
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:57:32`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 104610),
      new Player(Guild.ASSASSINS_ID, 'elo', 106833),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:50:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 104610),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 89329),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:54:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 174788),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 154022),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:44:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 177903),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 170475),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:51:28`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 156825),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 153031),
      Fortification.CITADEL_ID,
      11,
      false,
      `${warDateString}T08:59:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 156825),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 149534),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:03:15`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 136064),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 142358),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:13:09`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 153422),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 154079),
      Fortification.MAGE_ACADEMY_ID,
      0,
      false,
      `${warDateString}T09:18:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'd1n06586', 136537),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 153031),
      Fortification.CITADEL_ID,
      9,
      true,
      `${warDateString}T09:18:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 133225),
      new Player(Guild.ASSASSINS_ID, 'elo', 177081),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T09:41:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 236835),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 176741),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T09:56:11`
    ),
  ],
  Guild.ROMANIA_ID,
  850,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_17_2020,
  Guild.ASSASSINS_ID,
  1340
);
