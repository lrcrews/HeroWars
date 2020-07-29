import { Battle } from './battle';

export class GuildWar {
  static WAR_DAY_MONDAY = 'Monday';
  static WAR_DAY_TUESDAY = 'Tuesday';
  static WAR_DAY_WEDNESDAY = 'Wednesday';
  static WAR_DAY_THURSDAY = 'Thursday';
  static WAR_DAY_FRIDAY = 'Friday';

  static WAR_WEEK_17_2020 = 17;
  static WAR_WEEK_18_2020 = 18;
  static WAR_WEEK_19_2020 = 19;
  static WAR_WEEK_20_2020 = 20;
  static WAR_WEEK_21_2020 = 21;
  static WAR_WEEK_22_2020 = 22;
  static WAR_WEEK_23_2020 = 23;
  static WAR_WEEK_24_2020 = 24;
  static WAR_WEEK_25_2020 = 25;
  static WAR_WEEK_26_2020 = 26;
  static WAR_WEEK_27_2020 = 27;
  static WAR_WEEK_28_2020 = 28;
  static WAR_WEEK_29_2020 = 29;
  static WAR_WEEK_30_2020 = 30;
  static WAR_WEEK_31_2020 = 31;
  static WAR_WEEK_32_2020 = 32;
  static WAR_WEEK_33_2020 = 33;
  static WAR_WEEK_34_2020 = 34;
  static WAR_WEEK_35_2020 = 35;
  static WAR_WEEK_36_2020 = 36;
  static WAR_WEEK_37_2020 = 37;
  static WAR_WEEK_38_2020 = 38;
  static WAR_WEEK_39_2020 = 39;

  static arrayFromJson(guildWarsJson: Array<{}>): Array<GuildWar> {
    const guildWars: Array<GuildWar> = [];
    if (guildWarsJson) {
      guildWarsJson.forEach((json) => {
        const war = GuildWar.fromJson(json);
        if (war) {
          guildWars.push(war);
        }
      });
    }
    return guildWars;
  }

  static fromJson(json: { [key: string]: any }): GuildWar | undefined {
    if (json) {
      const warDateString = json['war_date'];
      return new GuildWar(
        Battle.arrayFromJson(json['battles'], warDateString),
        json['losing_guild_id'],
        json['losing_point_total'],
        warDateString,
        json['war_day'],
        json['war_week'],
        json['winning_guild_id'],
        json['winning_point_total']
      );
    } else {
      return undefined;
    }
  }

  constructor(
    public battles: Array<Battle>,
    public losingGuildId: number,
    public losingPointTotal: number,
    public warDateString: string,
    public warDay: string,
    public warWeek: number,
    public winningGuildId: number,
    public winningPointTotal: number
  ) {}
}
