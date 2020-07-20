import molochAvatarImg from '../data/titan-images/_0000_Moloch.png';
import vulcanAvatarImg from '../data/titan-images/_0001_Vulcan.png';
import ignisAvatarImg from '../data/titan-images/_0002_Ignis.png';
import arajiAvatarImg from '../data/titan-images/_0003_Araji.png';
import sigurdAvatarImg from '../data/titan-images/_0004_Sigurd.png';
import novaAvatarImg from '../data/titan-images/_0005_Nova.png';
import mairiAvatarImg from '../data/titan-images/_0006_Mairi.png';
import hyperionAvatarImg from '../data/titan-images/_0007_Hyperion.png';
import angusAvatarImg from '../data/titan-images/_0008_Angus.png';
import sylvaAvatarImg from '../data/titan-images/_0009_Sylva.png';
import avalonAvatarImg from '../data/titan-images/_0010_Avalon.png';
import edenAvatarImg from '../data/titan-images/_0011_Eden.png';

export class TitanAvatarUtil {
  static resourceFromImageName(name: string): string {
    switch (name) {
      case 'Moloch':
        return molochAvatarImg;
      case 'Vulcan':
        return vulcanAvatarImg;
      case 'Ignis':
        return ignisAvatarImg;
      case 'Araji':
        return arajiAvatarImg;
      case 'Sigurd':
        return sigurdAvatarImg;
      case 'Nova':
        return novaAvatarImg;
      case 'Mairi':
        return mairiAvatarImg;
      case 'Hyperion':
        return hyperionAvatarImg;
      case 'Angus':
        return angusAvatarImg;
      case 'Sylva':
        return sylvaAvatarImg;
      case 'Avalon':
        return avalonAvatarImg;
      case 'Eden':
        return edenAvatarImg;
      default:
        return '';
    }
  }
}
