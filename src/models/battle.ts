import { Player } from './player';

export class Battle {
  static arrayFromJson(battlesJson: Array<{}>, warDateString: string): Array<Battle> {
    const battles: Array<Battle> = [];
    if (battlesJson) {
      battlesJson.forEach((json) => {
        const battle = Battle.fromJson(json, warDateString);
        if (battle) {
          battles.push(battle);
        }
      });
    }
    return battles;
  }

  static fromJson(json: { [key: string]: any }, warDateString: string): Battle | undefined {
    if (json) {
      const attacker = Player.fromJson(json['attacker']);
      const defender = Player.fromJson(json['defender']);
      if (attacker === undefined) {
        console.log('"attacker" not provided.');
        return undefined;
      }
      if (defender === undefined) {
        console.log('"defender" not provided.');
        return undefined;
      }
      const time = new Date(`${warDateString}${json['time']}`);
      if (time === undefined) {
        console.log(`"time" creation failed, warDateString: ${warDateString}, json['time']: ${json['time']}`);
        return undefined;
      }
      return new Battle(
        attacker,
        defender,
        json['fotification'],
        json['points_earned'],
        json['position'],
        json['position_captured'],
        time,
        json['type']
      );
    } else {
      return undefined;
    }
  }

  constructor(
    public attacker: Player,
    public defender: Player,
    public fotification: string,
    public pointsEarned: number,
    public position: number,
    public positionCaptured: boolean,
    public time: Date,
    public type: string
  ) {}
}
