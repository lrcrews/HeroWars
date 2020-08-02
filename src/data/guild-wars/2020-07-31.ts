import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

const warDateString = '2020-07-31';

export const war = new GuildWar(
  [],
  Guild.NO_GUILD_ID,
  0,
  warDateString,
  GuildWar.WAR_DAY_FRIDAY,
  GuildWar.WAR_WEEK_31_2020,
  Guild.ASSASSINS_ID,
  1400
);
