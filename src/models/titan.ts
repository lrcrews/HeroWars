import { TitanAvatarUtil } from '../utils/titan-avatar-util';

export class Titan {
  static MOLOCH(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Moloch');
    return new Titan('0000', img, 'Moloch');
  }

  static VULCAN(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Vulcan');
    return new Titan('0001', img, 'Vulcan');
  }

  static IGNIS(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Ignis');
    return new Titan('0002', img, 'Ignis');
  }

  static ARAJI(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Araji');
    return new Titan('0003', img, 'Araji');
  }

  static SIGURD(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Sigurd');
    return new Titan('0004', img, 'Sigurd');
  }

  static NOVA(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Nova');
    return new Titan('0005', img, 'Nova');
  }

  static MAIRI(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Mairi');
    return new Titan('0006', img, 'Mairi');
  }

  static HYPERION(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Hyperion');
    return new Titan('0007', img, 'Hyperion');
  }

  static ANGUS(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Angus');
    return new Titan('0008', img, 'Angus');
  }

  static SYLVA(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Sylva');
    return new Titan('0009', img, 'Sylva');
  }

  static AVALON(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Avalon');
    return new Titan('0010', img, 'Avalon');
  }

  static EDEN(): Titan {
    const img = TitanAvatarUtil.resourceFromImageName('Eden');
    return new Titan('0011', img, 'Eden');
  }

  static ALL(): Array<Titan> {
    return [
      Titan.MOLOCH(),
      Titan.VULCAN(),
      Titan.IGNIS(),
      Titan.ARAJI(),
      Titan.SIGURD(),
      Titan.NOVA(),
      Titan.MAIRI(),
      Titan.HYPERION(),
      Titan.ANGUS(),
      Titan.SYLVA(),
      Titan.AVALON(),
      Titan.EDEN(),
    ];
  }

  constructor(public id: string, public imagePath: string, public name: string) {}
}
