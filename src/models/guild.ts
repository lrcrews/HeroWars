import { GuildBannerUtil } from '../utils/guild-banner-util';

export class Guild {
  static NO_GUILD_ID = 0;

  static ASSASSINS_ID = 1;
  static ANARCHY_ID = 2;
  static COFFEE_TIME_ID = 3;
  static LES_FRANCS_ID = 4;
  static MERICA_ID = 5;
  static MRCO_ID = 6;
  static ROMANIA_ID = 7;
  static THE_ACADEMY_ID = 8;
  static USA_ID = 9;

  static ASSASSINS(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('assassinsBannerImg');
    return new Guild(img, Guild.ASSASSINS_ID, 'Assassins', 184);
  }

  static ANARCHY(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('anarchyBannerImg');
    return new Guild(img, Guild.ANARCHY_ID, 'Anarchy', 184);
  }

  static COFFEE_TIME(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('coffeeTimeBannerImg');
    return new Guild(img, Guild.COFFEE_TIME_ID, 'Coffee time', 184);
  }

  static LES_FRANCS(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('lesFrancsBannerImg');
    return new Guild(img, Guild.LES_FRANCS_ID, 'les francs', 184);
  }

  static MERICA(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('mericaBannerImg');
    return new Guild(img, Guild.MERICA_ID, 'Merica', 184);
  }

  static MRCO(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('mrcoBannerImg');
    return new Guild(img, Guild.MRCO_ID, 'Mяco', 184);
  }

  static NO_GUILD(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('noGuildBannerImg');
    return new Guild(img, Guild.NO_GUILD_ID, '<No Guild>', 184);
  }

  static ROMANIA(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('romaniaBannerImg');
    return new Guild(img, Guild.ROMANIA_ID, 'Romania', 184);
  }

  static THE_ACADEMY(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('theAcademyBannerImg');
    return new Guild(img, Guild.THE_ACADEMY_ID, 'The Academy', 184);
  }

  static USA(): Guild {
    const img = GuildBannerUtil.bannerResourceFromImageName('usaBannerImg');
    return new Guild(img, Guild.USA_ID, 'USA', 184);
  }

  static ALL(): Array<Guild> {
    return [
      Guild.ASSASSINS(),
      Guild.ANARCHY(),
      Guild.COFFEE_TIME(),
      Guild.LES_FRANCS(),
      Guild.MERICA(),
      Guild.MRCO(),
      Guild.NO_GUILD(),
      Guild.ROMANIA(),
      Guild.THE_ACADEMY(),
      Guild.USA(),
    ];
  }

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
