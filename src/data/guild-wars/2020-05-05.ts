import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-05-05';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 235148),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.ROMANIA_ID, 'Marius', 195661),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:11:48`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 178989),
      new Player(Guild.ROMANIA_ID, 'Phantom', 164342),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:23:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 178989),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 145135),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:24:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.ROMANIA_ID, 'Blondu', 239472),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:12:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 171236),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:12:56`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.ROMANIA_ID, 'VsEye', 66103),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:33:21`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      new Player(Guild.ROMANIA_ID, 'Gaby', 57399),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T07:34:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 117949),
      new Player(Guild.ROMANIA_ID, 'Antonio', 103622),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:05:49`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122888),
      new Player(Guild.ROMANIA_ID, 'Adrian', 109550),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:16:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122888),
      new Player(Guild.ROMANIA_ID, 'hama52', 106562),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T08:17:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85790),
      new Player(Guild.ROMANIA_ID, 'ALAN', 54368),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T09:15:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 90408),
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66896),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:37:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 90408),
      new Player(Guild.ROMANIA_ID, 'Thyned', 69826),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T09:37:24`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.ROMANIA_ID, '--Strange Tamer--', 85275),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:03:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 91388),
      new Player(Guild.ROMANIA_ID, 'Medo', 73031),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:04:16`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      new Player(Guild.ROMANIA_ID, 'tokyo', 92453),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:12:44`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81850),
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 52637),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:26:03`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81850),
      new Player(Guild.ROMANIA_ID, 'Phantom', 59090),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T10:26:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 148080),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T11:03:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 155863),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T11:04:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 323849),
      new Player(Guild.ROMANIA_ID, 'Blondu', 273105),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:27:30`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 349276),
      new Player(Guild.ROMANIA_ID, 'JustMe', 252666),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:28:35`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 275420),
      new Player(Guild.ROMANIA_ID, 'Nightmare', 212652),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:29:13`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 279284),
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 220679),
      Fortification.FOUNDRY_ID,
      0,
      false,
      `${warDateString}T11:30:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 193141),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 193641),
      Fortification.CITADEL_ID,
      6,
      false,
      `${warDateString}T11:50:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 214636),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 195327),
      Fortification.CITADEL_ID,
      10,
      false,
      `${warDateString}T11:55:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 183986),
      new Player(Guild.ROMANIA_ID, 'TheWicked', 195327),
      Fortification.CITADEL_ID,
      10,
      true,
      `${warDateString}T12:19:39`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 270728),
      new Player(Guild.ROMANIA_ID, 'Marius', 218112),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T12:24:23`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192768),
      new Player(Guild.ROMANIA_ID, 'Medo', 150290),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:26:06`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192768),
      new Player(Guild.ROMANIA_ID, 'VsEye', 146309),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:26:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 270728),
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 193641),
      Fortification.CITADEL_ID,
      14,
      true,
      `${warDateString}T12:31:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202663),
      new Player(Guild.ROMANIA_ID, 'tokyo', 164848),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:38:42`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 117949),
      new Player(Guild.ROMANIA_ID, 'JustMe', 154432),
      Fortification.BASTION_OF_ICE_ID,
      12,
      false,
      `${warDateString}T12:38:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 218498),
      new Player(Guild.ROMANIA_ID, 'Adrian', 199395),
      Fortification.MAGE_ACADEMY_ID,
      12,
      false,
      `${warDateString}T12:40:40`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 181924),
      new Player(Guild.ROMANIA_ID, 'Thyned', 177966),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:44:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85790),
      new Player(Guild.ROMANIA_ID, 'JustMe', 154432),
      Fortification.BASTION_OF_ICE_ID,
      1,
      false,
      `${warDateString}T12:46:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 202663),
      new Player(Guild.ROMANIA_ID, 'Adrian', 199395),
      Fortification.MAGE_ACADEMY_ID,
      8,
      true,
      `${warDateString}T12:52:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 239472),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      18,
      false,
      `${warDateString}T00:01:24`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 195661),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211078),
      Fortification.BRIDGE_ID,
      4,
      false,
      `${warDateString}T00:06:13`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 235148),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:26`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Tonydarat', 235148),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 225906),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:35:01`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 171834),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 211078),
      Fortification.BRIDGE_ID,
      6,
      true,
      `${warDateString}T00:41:50`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 109550),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 255144),
      Fortification.BRIDGE_ID,
      2,
      true,
      `${warDateString}T00:52:46`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 103622),
      new Player(Guild.ASSASSINS_ID, 'KP', 100795),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T00:54:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 148080),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 122905),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:08:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'TheWicked', 148080),
      new Player(Guild.ASSASSINS_ID, 'elo', 116222),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T01:08:56`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Adrian', 109550),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 97708),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:09:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66896),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81850),
      Fortification.SPRING_OF_ELEMENTS_ID,
      16,
      false,
      `${warDateString}T01:23:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'AndreaAnfo1501', 66896),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      15,
      false,
      `${warDateString}T01:24:48`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 210247),
      new Player(Guild.ASSASSINS_ID, 'Gom', 285616),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T01:27:12`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 155863),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 129126),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T01:35:44`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Nightmare', 155863),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 127808),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T01:36:35`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Marius', 195661),
      new Player(Guild.ASSASSINS_ID, 'Dan', 169146),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:07:30`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 154432),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 107877),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:28:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 73642),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      18,
      false,
      `${warDateString}T02:32:29`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Aldwiin', 171834),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 148623),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:41:52`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 66103),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 81208),
      Fortification.SPRING_OF_ELEMENTS_ID,
      5,
      true,
      `${warDateString}T03:01:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 52637),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      2,
      true,
      `${warDateString}T03:03:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Medo', 70248),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 81850),
      Fortification.SPRING_OF_ELEMENTS_ID,
      4,
      true,
      `${warDateString}T03:16:17`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 92453),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 89615),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:37:58`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'tokyo', 92453),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92885),
      Fortification.GATES_OF_NATURE_ID,
      19,
      false,
      `${warDateString}T03:39:45`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'hama52', 210247),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 182424),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:04:54`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Gaby', 147908),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 155112),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T04:14:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Blondu', 265804),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 275032),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T04:17:31`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Antonio', 210772),
      new Player(Guild.ASSASSINS_ID, 'KP', 202623),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T04:44:57`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Ancaelena', 52637),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 92885),
      Fortification.GATES_OF_NATURE_ID,
      1,
      true,
      `${warDateString}T05:06:03`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, '--Strange Tamer--', 85602),
      new Player(Guild.ASSASSINS_ID, 'wookie', 89247),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:30:27`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, '--Strange Tamer--', 85602),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 85790),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:31:33`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 166028),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 155318),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T07:49:55`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'ALAN', 166028),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 161199),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T08:05:08`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'JustMe', 254738),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 274009),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T08:11:21`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 185188),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 183034),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T10:24:07`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Thyned', 185188),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 173909),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:29:14`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 164342),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 161375),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T10:33:43`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'Phantom', 164485),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 163795),
      Fortification.CITADEL_ID,
      1,
      false,
      `${warDateString}T10:43:40`
    ),
    new Battle(
      new Player(Guild.ROMANIA_ID, 'VsEye', 146689),
      new Player(Guild.ASSASSINS_ID, 'elo', 182316),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:55:56`
    ),
  ],
  Guild.ROMANIA_ID,
  1061,
  warDateString,
  GuildWar.WAR_DAY_TUESDAY,
  GuildWar.WAR_WEEK_19_2020,
  Guild.ASSASSINS_ID,
  1093
);
