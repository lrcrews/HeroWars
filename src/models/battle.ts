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
      const datetimeString = `${warDateString}${json['time']}`;
      return new Battle(
        attacker,
        defender,
        json['fortification_id'],
        json['points_earned'],
        json['position_captured'],
        datetimeString
      );
    } else {
      return undefined;
    }
  }

  constructor(
    public attacker: Player,
    public defender: Player,
    public fortificationId: number,
    public pointsEarned: number,
    public positionCaptured: boolean,
    public datetimeString: string
  ) {}
}
