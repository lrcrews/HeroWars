import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-07-14';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 164097),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:01:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 148628),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:02:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 192964),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 145566),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:33:08`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 192964),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 71859),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:33:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 215869),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 148628),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:34:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 215869),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 137106),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:34:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 162424),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 96281),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:05:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 162424),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 79409),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:06:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 343461),
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 246307),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:02:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 299018),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 227312),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:03:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329454),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 233899),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:07:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 329454),
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 183582),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T02:07:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 121886),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:32:41`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 196763),
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 141159),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:33:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 381066),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 211321),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:48:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 381066),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 183528),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:48:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 404227),
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 253383),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:49:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 328565),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 172997),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T03:49:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 330950),
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 195481),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T03:50:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 404227),
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 225653),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:51:11`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 171578),
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 108830),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:20:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 171578),
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 99565),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:22:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 284646),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 191689),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:33:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 284646),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 151594),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T04:33:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236100),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 94476),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:54:07`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 236100),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 122576),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:54:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 212132),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:38:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 194582),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T05:39:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314534),
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 168332),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T06:38:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314534),
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 175019),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:39:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 160999),
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 88162),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:22:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 160999),
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 86716),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:22:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 272784),
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 184239),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:14:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Saucy', 272784),
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 197694),
      Fortification.LIGHTHOUSE_ID,
      14,
      false,
      `${warDateString}T08:16:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 187298),
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 96060),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:34:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 187298),
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 92912),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:34:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 331422),
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 176152),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:26:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 320197),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 165554),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:27:38`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 164882),
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 86885),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:56:28`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 164882),
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 61897),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:56:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 233899),
      new Player(Guild.ASSASSINS_ID, 'xxAlphaDrunkxx', 229598),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:23:05`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 246307),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 314407),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:23:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Disciple', 246307),
      new Player(Guild.ASSASSINS_ID, 'Gom', 361677),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T00:24:34`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mogor', 233899),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 242533),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T00:28:03`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 227312),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 269113),
      Fortification.BARRACKS_ID,
      9,
      false,
      `${warDateString}T00:29:44`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Mio77', 227312),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 269113),
      Fortification.BARRACKS_ID,
      8,
      false,
      `${warDateString}T00:30:02`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 153012),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 269113),
      Fortification.BARRACKS_ID,
      3,
      true,
      `${warDateString}T00:43:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 253443),
      new Player(Guild.ASSASSINS_ID, 'Gom', 361677),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T00:43:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'DoyleB', 253443),
      new Player(Guild.ASSASSINS_ID, 'Gom', 361677),
      Fortification.LIGHTHOUSE_ID,
      18,
      true,
      `${warDateString}T00:44:25`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 226682),
      new Player(Guild.ASSASSINS_ID, 'En4', 308883),
      Fortification.LIGHTHOUSE_ID,
      9,
      false,
      `${warDateString}T03:17:38`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'GHOR', 226682),
      new Player(Guild.ASSASSINS_ID, 'En4', 308883),
      Fortification.LIGHTHOUSE_ID,
      11,
      true,
      `${warDateString}T03:19:22`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Krigaren', 153012),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T03:50:43`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 198041),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 278618),
      Fortification.BARRACKS_ID,
      14,
      false,
      `${warDateString}T04:32:37`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lorengaard', 198041),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 278618),
      Fortification.BARRACKS_ID,
      6,
      true,
      `${warDateString}T04:43:08`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 172997),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:07:10`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'RezaArinanda', 172997),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:07:52`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 184239),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:12:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Hiro Shumaru', 184239),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 281924),
      Fortification.BARRACKS_ID,
      2,
      false,
      `${warDateString}T05:13:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 183908),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 281924),
      Fortification.BARRACKS_ID,
      5,
      false,
      `${warDateString}T05:56:21`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Dagul', 183908),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T05:57:20`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 171629),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 281924),
      Fortification.BARRACKS_ID,
      3,
      false,
      `${warDateString}T06:02:06`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'JustFinest', 171629),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 281924),
      Fortification.BARRACKS_ID,
      10,
      true,
      `${warDateString}T06:02:43`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 168365),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:24:09`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'spartababy', 168365),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      2,
      false,
      `${warDateString}T06:24:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 211562),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      4,
      false,
      `${warDateString}T06:27:36`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Xaavik', 211562),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:27:55`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 193697),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      0,
      false,
      `${warDateString}T06:35:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'smigiel901', 193697),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      3,
      false,
      `${warDateString}T06:36:30`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 190653),
      new Player(Guild.ASSASSINS_ID, 'KP', 289187),
      Fortification.LIGHTHOUSE_ID,
      7,
      true,
      `${warDateString}T06:37:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 137106),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T08:35:00`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Boozr', 137106),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      7,
      false,
      `${warDateString}T08:35:59`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 96281),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T08:48:31`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'PlayerEvan', 96281),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T08:49:16`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 86730),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T09:40:19`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Lemegeton', 89313),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      0,
      false,
      `${warDateString}T09:40:39`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 93913),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T09:43:47`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'jarvud', 93913),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T09:45:07`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 99579),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      1,
      false,
      `${warDateString}T10:16:57`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'Rikune', 99579),
      new Player(Guild.ASSASSINS_ID, 'Regal', 268882),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T10:17:17`
    ),
    new Battle(
      new Player(Guild.THE_ACADEMY_ID, 'bob88', 121886),
      new Player(Guild.ASSASSINS_ID, 'En4', 268882),
      Fortification.BRIDGE_ID,
      2,
      false,
      `${warDateString}T11:02:24`
    ),
  ],
  Guild.THE_ACADEMY_ID,
  329,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_29_2020,
  Guild.ASSASSINS_ID,
  1354
);
