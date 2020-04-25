import { Battle } from './battle';

export class GuildWar {
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
        json['id'],
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
    public id: number,
    public losingGuildId: number,
    public losingPointTotal: number,
    public warDateString: string,
    public warDay: string,
    public warWeek: number,
    public winningGuildId: number,
    public winningPointTotal: number
  ) {}
}
