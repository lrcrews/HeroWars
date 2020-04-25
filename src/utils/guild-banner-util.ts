import assassinsBannerImg from '../data/guild-banners/assassins-banner.png';
import mrcoBannerImg from '../data/guild-banners/mrco-banner.png';

export class GuildBannerUtil {
  static bannerResourceFromImageName(name: string): string {
    switch (name) {
      case 'assassinsBannerImg':
        return assassinsBannerImg;
      case 'mrcoBannerImg':
        return mrcoBannerImg;
      default:
        return '';
    }
  }
}
