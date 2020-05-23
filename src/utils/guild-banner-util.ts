import assassinsBannerImg from '../data/guild-banners/assassins-banner.png';

import noGuildBannerImg from '../data/guild-banners/no-guild-banner.png';

import anarchyBannerImg from '../data/guild-banners/anarchy-banner.png';
import lesFrancsBannerImg from '../data/guild-banners/les-francs-banner.png';
import mericaBannerImg from '../data/guild-banners/merica-banner.png';
import mrcoBannerImg from '../data/guild-banners/mrco-banner.png';
import romaniaBannerImg from '../data/guild-banners/romania-banner.png';

export class GuildBannerUtil {
  static bannerResourceFromImageName(name: string): string {
    switch (name) {
      case 'assassinsBannerImg':
        return assassinsBannerImg;
      case 'anarchyBannerImg':
        return anarchyBannerImg;
      case 'lesFrancsBannerImg':
        return lesFrancsBannerImg;
      case 'mericaBannerImg':
        return mericaBannerImg;
      case 'mrcoBannerImg':
        return mrcoBannerImg;
      case 'noGuildBannerImg':
        return noGuildBannerImg;
      case 'romaniaBannerImg':
        return romaniaBannerImg;
      default:
        return '';
    }
  }
}
