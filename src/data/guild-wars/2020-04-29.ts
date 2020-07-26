import { Battle } from '../../models/battle';
import { Fortification } from '../../models/fortification';
import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';
import { Player } from '../../models/player';

const warDateString = '2020-04-29';

export const war = new GuildWar(
  [
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      new Player(Guild.ANARCHY_ID, 'En4', 253729),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:42:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176294),
      new Player(Guild.ANARCHY_ID, 'Bernde', 144755),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:30:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'wookie', 176294),
      new Player(Guild.ANARCHY_ID, 'Mogor', 160496),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T03:31:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120915),
      new Player(Guild.ANARCHY_ID, 'HERO', 124910),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T04:45:34`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.ANARCHY_ID, 'Regal', 199169),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:46:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      new Player(Guild.ANARCHY_ID, 'tntodor', 166378),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T05:46:52`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83828),
      new Player(Guild.ANARCHY_ID, 'Coop5280', 72888),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:52:12`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 109727),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 93898),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:53:15`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'elo', 109727),
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 95900),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T05:54:25`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.ANARCHY_ID, 'Easton', 65906),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:29:43`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 72077),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T06:29:46`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      new Player(Guild.ANARCHY_ID, 'BadAss', 63947),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:29:57`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      new Player(Guild.ANARCHY_ID, 'Galy', 66953),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T06:30:29`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 180914),
      new Player(Guild.ANARCHY_ID, 'Coop5280', 170525),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:31:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dikree', 180914),
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 163655),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T06:32:01`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dagul', 120915),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 97818),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T06:55:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 86916),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:56:53`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 83952),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T06:57:32`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 343761),
      new Player(Guild.ANARCHY_ID, 'Marcus', 304130),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T06:58:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.ANARCHY_ID, 'Mogor', 74907),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:02:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      new Player(Guild.ANARCHY_ID, 'Kai', 78971),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T07:03:22`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 267036),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 281731),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T07:14:31`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 343761),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 281731),
      Fortification.CITADEL_ID,
      0,
      false,
      `${warDateString}T07:17:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 267036),
      new Player(Guild.ANARCHY_ID, 'En4', 254826),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:23:50`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266895),
      new Player(Guild.ANARCHY_ID, 'BadAss', 211140),
      Fortification.FOUNDRY_ID,
      20,
      true,
      `${warDateString}T07:23:51`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Disciple', 172682),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 146937),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T07:33:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 208732),
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 194637),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T09:09:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.ANARCHY_ID, 'Marcus', 122622),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T10:19:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      new Player(Guild.ANARCHY_ID, 'Father Zara', 137806),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T10:20:54`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87866),
      new Player(Guild.ANARCHY_ID, 'Panzie81', 76351),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:49:19`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87866),
      new Player(Guild.ANARCHY_ID, 'Bernde', 70929),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T10:49:45`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      new Player(Guild.ANARCHY_ID, 'satoshi93', 161187),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:02:27`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 192279),
      new Player(Guild.ANARCHY_ID, 'Kai', 155051),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:02:59`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Gom', 281354),
      new Player(Guild.ANARCHY_ID, 'tntodor', 215607),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T11:16:37`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 269511),
      new Player(Guild.ANARCHY_ID, 'Easton', 207972),
      Fortification.LIGHTHOUSE_ID,
      20,
      true,
      `${warDateString}T11:42:04`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199871),
      new Player(Guild.ANARCHY_ID, 'AlexLee', 137655),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:48:55`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'KP', 199871),
      new Player(Guild.ANARCHY_ID, 'Galy', 139613),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:50:14`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 212425),
      new Player(Guild.ANARCHY_ID, 'Murdox06', 167614),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T11:50:20`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 189592),
      new Player(Guild.ANARCHY_ID, 'HERO', 173410),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:29:58`
    ),
    new Battle(
      new Player(Guild.ASSASSINS_ID, 'Don', 189592),
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 141730),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T12:32:48`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 199169),
      new Player(Guild.ASSASSINS_ID, 'Gom', 228443),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:29:59`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Regal', 199169),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 206303),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T00:32:12`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 253729),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 224012),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:11:27`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'En4', 253729),
      new Player(Guild.ASSASSINS_ID, 'gertyman', 253241),
      Fortification.BRIDGE_ID,
      20,
      true,
      `${warDateString}T02:12:16`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 97818),
      new Player(Guild.ASSASSINS_ID, 'elo', 109727),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:17:18`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 94398),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 90893),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:18:30`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'satoshi93', 97818),
      new Player(Guild.ASSASSINS_ID, 'Forblitz', 126395),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:18:41`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'NinjaTazzy', 94398),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 91388),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T02:20:11`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 124910),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 121467),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T02:21:18`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'HERO', 124910),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 126057),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T02:22:57`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 66953),
      new Player(Guild.ASSASSINS_ID, 'Don', 66898),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T02:34:40`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 166378),
      new Player(Guild.ASSASSINS_ID, 'Dan', 167028),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T03:08:31`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'tntodor', 166378),
      new Player(Guild.ASSASSINS_ID, 'GurraBurra', 144795),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T03:09:17`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 145262),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 145884),
      Fortification.BARRACKS_ID,
      20,
      true,
      `${warDateString}T03:26:55`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 95900),
      new Player(Guild.ASSASSINS_ID, 'KP', 98156),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:37:45`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Knight_rider', 95900),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 98042),
      Fortification.BASTION_OF_FIRE_ID,
      20,
      true,
      `${warDateString}T04:38:10`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop5280', 72888),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 80295),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:48:55`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Coop5280', 72888),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 78729),
      Fortification.SPRING_OF_ELEMENTS_ID,
      20,
      true,
      `${warDateString}T04:49:48`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 298551),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 343655),
      Fortification.CITADEL_ID,
      13,
      false,
      `${warDateString}T07:45:15`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Marcus', 298551),
      new Player(Guild.ASSASSINS_ID, 'Post Goats', 343655),
      Fortification.CITADEL_ID,
      7,
      true,
      `${warDateString}T07:47:57`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 72767),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83828),
      Fortification.SPRING_OF_ELEMENTS_ID,
      14,
      false,
      `${warDateString}T08:05:31`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'AlexLee', 72767),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 83828),
      Fortification.SPRING_OF_ELEMENTS_ID,
      6,
      true,
      `${warDateString}T08:05:50`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 86916),
      new Player(Guild.ASSASSINS_ID, 'Buffy', 87869),
      Fortification.BASTION_OF_ICE_ID,
      20,
      true,
      `${warDateString}T08:25:50`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'xxAlphaDrunkxx', 86916),
      new Player(Guild.ASSASSINS_ID, 'wookie', 86374),
      Fortification.GATES_OF_NATURE_ID,
      20,
      true,
      `${warDateString}T08:26:40`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Galy', 120130),
      new Player(Guild.ASSASSINS_ID, 'Fuzzy', 156780),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:35:53`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 211395),
      new Player(Guild.ASSASSINS_ID, 'Disciple', 172682),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:45:50`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'BadAss', 211395),
      new Player(Guild.ASSASSINS_ID, 'elo', 180736),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T09:46:20`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 172847),
      new Player(Guild.ASSASSINS_ID, 'BOTI', 153572),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:02:42`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Murdox06', 172847),
      new Player(Guild.ASSASSINS_ID, 'Sheevara', 162596),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:04:47`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 281901),
      new Player(Guild.ASSASSINS_ID, 'agent_chu', 214261),
      Fortification.CITADEL_ID,
      20,
      true,
      `${warDateString}T10:07:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Father Zara', 281901),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266895),
      Fortification.MAGE_ACADEMY_ID,
      14,
      false,
      `${warDateString}T10:18:06`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 145055),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266895),
      Fortification.MAGE_ACADEMY_ID,
      2,
      false,
      `${warDateString}T10:33:55`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Bernde', 137304),
      new Player(Guild.ASSASSINS_ID, 'LOD 2020', 266895),
      Fortification.MAGE_ACADEMY_ID,
      4,
      true,
      `${warDateString}T10:41:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 210403),
      new Player(Guild.ASSASSINS_ID, 'Dan', 191945),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T11:02:51`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 155930),
      new Player(Guild.ASSASSINS_ID, 'Dagul', 155719),
      Fortification.MAGE_ACADEMY_ID,
      20,
      true,
      `${warDateString}T12:25:32`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Kai', 155930),
      new Player(Guild.ASSASSINS_ID, 'Dikree', 175099),
      Fortification.FOUNDRY_ID,
      8,
      false,
      `${warDateString}T12:29:14`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 162814),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 172921),
      Fortification.BARRACKS_ID,
      4,
      false,
      `${warDateString}T12:40:01`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Panzie81', 146180),
      new Player(Guild.ASSASSINS_ID, 'wookie', 176248),
      Fortification.FOUNDRY_ID,
      11,
      false,
      `${warDateString}T12:40:57`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Mogor', 162814),
      new Player(Guild.ASSASSINS_ID, 'wookie', 176248),
      Fortification.FOUNDRY_ID,
      9,
      true,
      `${warDateString}T12:44:04`
    ),
    new Battle(
      new Player(Guild.ANARCHY_ID, 'Easton', 210463),
      new Player(Guild.ASSASSINS_ID, 'hotaru086', 172921),
      Fortification.BARRACKS_ID,
      16,
      true,
      `${warDateString}T12:56:16`
    ),
  ],
  Guild.ANARCHY_ID,
  1128,
  warDateString,
  GuildWar.WAR_DAY_WEDNESDAY,
  GuildWar.WAR_WEEK_18_2020,
  Guild.ASSASSINS_ID,
  1200
);
