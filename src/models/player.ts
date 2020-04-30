export class Player {
  static fromJson(json: { [key: string]: any }): Player | undefined {
    if (json) {
      return new Player(json['guild_id'], json['name'], json['power']);
    } else {
      return undefined;
    }
  }

  constructor(public guildId: number, public name: string, public power: number) {}
}
