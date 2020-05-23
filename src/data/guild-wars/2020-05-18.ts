import { Guild } from '../../models/guild';
import { GuildWar } from '../../models/guild-war';

const warDateString = '2020-05-18';

export const war = new GuildWar(
  [],
  Guild.NO_GUILD_ID,
  0,
  warDateString,
  GuildWar.WAR_DAY_MONDAY,
  GuildWar.WAR_WEEK_21_2020,
  Guild.ASSASSINS_ID,
  1400
);
