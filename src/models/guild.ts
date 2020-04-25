import { GuildBannerUtil } from '../utils/guild-banner-util';

export class Guild {
  static arrayFromJson(guildsJson: Array<{}>): Array<Guild> {
    const guilds: Array<Guild> = [];
    if (guildsJson) {
      guildsJson.forEach((json) => {
        const guild = Guild.fromJson(json);
        if (guild) {
          guilds.push(guild);
        }
      });
    }
    return guilds;
  }

  static fromJson(json: { [key: string]: any }): Guild | undefined {
    if (json) {
      return new Guild(
        GuildBannerUtil.bannerResourceFromImageName(json['banner_image_name']),
        json['id'],
        json['name'],
        json['server']
      );
    } else {
      return undefined;
    }
  }

  constructor(public bannerImagePath: string, public id: number, public name: string, public server: number) {}
}
