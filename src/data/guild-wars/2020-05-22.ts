import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-22';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 245095),
      new Player(Guild.MRCO_ID, 'Budge', 218987),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:03:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Regal', 245095),
      new Player(Guild.MRCO_ID, 'Saucy', 239317),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:55:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'badianchick', 159500),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:08:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 162921),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:09:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MRCO_ID, 'Wallario', 92976),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:15:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 90137),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:16:17`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303441),
      new Player(Guild.MRCO_ID, 'Amothep', 198718),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:53:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 303441),
      new Player(Guild.MRCO_ID, 'Revan', 214471),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:53:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138550),
      new Player(Guild.MRCO_ID, 'Tfy', 62513),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:59:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138550),
      new Player(Guild.MRCO_ID, 'Revan', 82194),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:00:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 161159),
      new Player(Guild.MRCO_ID, 'Amothep', 145733),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:12:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 147435),
      new Player(Guild.MRCO_ID, 'Kifyu', 120024),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:12:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 161159),
      new Player(Guild.MRCO_ID, 'MrTom', 96301),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:12:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 147435),
      new Player(Guild.MRCO_ID, 'BIG D', 119408),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:13:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      new Player(Guild.MRCO_ID, 'Angelina', 202091),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:27:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'En4', 220720),
      new Player(Guild.MRCO_ID, '_DAZ_', 190861),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:29:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 285288),
      new Player(Guild.MRCO_ID, 'Gardakus', 212634),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T07:22:36`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 126337),
      new Player(Guild.MRCO_ID, 'Coop5280', 107513),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T07:28:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 126337),
      new Player(Guild.MRCO_ID, 'Bernde', 109963),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:29:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 282704),
      new Player(Guild.MRCO_ID, 'badianchick', 226858),
      Fortification.FOUNDRY_ID,
      18,
      false,
      `${warDateString}T07:34:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 303137),
      new Player(Guild.MRCO_ID, 'NinjaTazzy', 198308),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:35:26`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 326573),
      new Player(Guild.MRCO_ID, 'Sardine', 386396),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T07:49:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 374346),
      new Player(Guild.MRCO_ID, 'Angelina', 298425),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:50:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289973),
      new Player(Guild.MRCO_ID, 'Saucy', 210224),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T08:44:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 289973),
      new Player(Guild.MRCO_ID, 'Kifyu', 205161),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T08:45:02`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      new Player(Guild.MRCO_ID, '_DAZ_', 70955),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:54:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 218706),
      new Player(Guild.MRCO_ID, 'Wallario', 176099),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T08:55:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 240151),
      new Player(Guild.MRCO_ID, 'Kai', 191884),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:21:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 240151),
      new Player(Guild.MRCO_ID, 'BIG D', 180895),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:22:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 228596),
      new Player(Guild.MRCO_ID, 'Tfy', 179352),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:29:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Kairen', 228596),
      new Player(Guild.MRCO_ID, 'Bernde', 181012),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:30:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340833),
      new Player(Guild.MRCO_ID, 'Budge', 240972),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T09:45:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Marcus', 340833),
      new Player(Guild.MRCO_ID, 'MrTom', 231010),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.MRCO_ID, 'Kai', 114035),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:56:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      new Player(Guild.MRCO_ID, 'NinjaTazzy', 117320),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:58:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 310981),
      new Player(Guild.MRCO_ID, 'badianchick', 226858),
      Fortification.FOUNDRY_ID,
      2,
      true,
      `${warDateString}T10:05:18`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 285288),
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 245371),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:08:10`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 313569),
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 248670),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T10:16:50`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268882),
      new Player(Guild.ASSASSINS_ID, 'En4', 257662),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:10:10`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Sardine', 268913),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 268882),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:12:31`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'Gom', 255755),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T01:13:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Gardakus', 268882),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      17,
      false,
      `${warDateString}T01:13:42`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 114035),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 268913),
      Fortification.BRIDGE_ID,
      3,
      true,
      `${warDateString}T01:54:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 162921),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 161159),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:38:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'NinjaTazzy', 117320),
      new Player(Guild.ASSASSINS_ID, 'KP', 127257),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:30:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'NinjaTazzy', 117320),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 117291),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T03:31:28`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 159500),
      new Player(Guild.ASSASSINS_ID, 'Kairen', 146647),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T04:02:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'badianchick', 159500),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 147435),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T04:02:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 107513),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 132147),
      Fortification.BASTION_OF_FIRE_ID,
      10,
      false,
      `${warDateString}T04:50:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Coop5280', 107513),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 132147),
      Fortification.BASTION_OF_FIRE_ID,
      10,
      true,
      `${warDateString}T04:50:33`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'PetrifiedBear', 162921),
      new Player(Guild.ASSASSINS_ID, 'HERO', 183700),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:58:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 145733),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 127921),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:31:13`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Amothep', 145733),
      new Player(Guild.ASSASSINS_ID, 'elo', 130215),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T05:31:48`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 202091),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 181027),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T05:32:23`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Angelina', 202091),
      new Player(Guild.ASSASSINS_ID, 'Marcus', 193374),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:32:52`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 231133),
      new Player(Guild.ASSASSINS_ID, 'en4', 235430),
      Fortification.BARRACKS_ID,
      16,
      false,
      `${warDateString}T06:55:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'MrTom', 231133),
      new Player(Guild.ASSASSINS_ID, 'tntodor', 243736),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T06:56:17`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 179538),
      new Player(Guild.ASSASSINS_ID, 'en4', 235430),
      Fortification.BARRACKS_ID,
      0,
      false,
      `${warDateString}T07:43:01`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 120467),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 138550),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:20:04`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 225789),
      new Player(Guild.ASSASSINS_ID, 'Knight_rider', 216527),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:28:29`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Budge', 218987),
      new Player(Guild.ASSASSINS_ID, 'Father Zara', 217706),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:33:16`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Budge', 218987),
      new Player(Guild.ASSASSINS_ID, 'Regal', 245095),
      Fortification.BASTION_OF_FIRE_ID,
      14,
      false,
      `${warDateString}T09:38:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 239963),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 239317),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T09:45:54`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Saucy', 239963),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 236743),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T09:47:06`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 191361),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 180279),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:09:36`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, '_DAZ_', 171054),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200517),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T10:13:46`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Tfy', 179538),
      new Player(Guild.ASSASSINS_ID, 'Murdox06', 185083),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:17:56`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Bernde', 109963),
      new Player(Guild.ASSASSINS_ID, 'Regal', 245095),
      Fortification.BASTION_OF_FIRE_ID,
      2,
      false,
      `${warDateString}T10:17:59`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Bernde', 109963),
      new Player(Guild.ASSASSINS_ID, 'Regal', 245095),
      Fortification.BASTION_OF_FIRE_ID,
      4,
      true,
      `${warDateString}T10:18:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 176405),
      new Player(Guild.ASSASSINS_ID, 'En4', 235430),
      Fortification.BARRACKS_ID,
      4,
      true,
      `${warDateString}T10:30:30`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kifyu', 206624),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200517),
      Fortification.CITADEL_ID,
      2,
      false,
      `${warDateString}T10:37:20`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Jeep Jerry', 227591),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200517),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T10:45:39`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Wallario', 176405),
      new Player(Guild.ASSASSINS_ID, 'elo', 206689),
      Fortification.FOUNDRY_ID,
      4,
      false,
      `${warDateString}T11:21:26`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Kai', 178021),
      new Player(Guild.ASSASSINS_ID, 'KP', 221474),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:53:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 180895),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 200517),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T12:02:41`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'BIG D', 180895),
      new Player(Guild.ASSASSINS_ID, 'elo', 206689),
      Fortification.FOUNDRY_ID,
      3,
      false,
      `${warDateString}T12:03:57`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 214594),
      new Player(Guild.ASSASSINS_ID, 'HERO', 202370),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:48:58`
    ),
    new Battle(
      new Player(Guild.MRCO_ID, 'Revan', 214594),
      new Player(Guild.ASSASSINS_ID, 'elo', 206689),
      Fortification.FOUNDRY_ID,
      13,
      true,
      `${warDateString}T12:49:31`
    ),
  ],
  Guild.MRCO_ID,
  903,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_21_2020,
  Guild.ASSASSINS_ID,
  1340
);
