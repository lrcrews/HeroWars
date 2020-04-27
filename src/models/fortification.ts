export class Fortification {
  static BARRACKS(): Fortification {
    return new Fortification(1, 'Barracks', 3, 'Hero');
  }

  static BASTION_OF_FIRE(): Fortification {
    return new Fortification(2, 'Bastion of Fire', 4, 'Titan');
  }

  static BASTION_OF_ICE(): Fortification {
    return new Fortification(3, 'Bastion of Ice', 4, 'Titan');
  }

  static BRIDGE(): Fortification {
    return new Fortification(4, 'Bridge', 4, 'Titan');
  }

  static CITADEL(): Fortification {
    return new Fortification(5, 'Citadel', 7, 'Hero');
  }

  static FOUNDRY(): Fortification {
    return new Fortification(6, 'Foundry', 4, 'Hero');
  }

  static GATES_OF_NATURE(): Fortification {
    return new Fortification(7, 'Gates of Nature', 4, 'Titan');
  }

  static LIGHTHOUSE(): Fortification {
    return new Fortification(8, 'Lighthouse', 3, 'Hero');
  }

  static MAGE_ACADEMY(): Fortification {
    return new Fortification(9, 'Mage Academy', 3, 'Hero');
  }

  static SPRING_OF_ELEMENTS(): Fortification {
    return new Fortification(10, 'Spring of Elements', 4, 'Titan');
  }

  static fromId(id: number): Fortification | undefined {
    switch (id) {
      case 1:
        return Fortification.BARRACKS();
      case 2:
        return Fortification.BASTION_OF_FIRE();
      case 3:
        return Fortification.BASTION_OF_ICE();
      case 4:
        return Fortification.BRIDGE();
      case 5:
        return Fortification.CITADEL();
      case 6:
        return Fortification.FOUNDRY();
      case 7:
        return Fortification.GATES_OF_NATURE();
      case 8:
        return Fortification.LIGHTHOUSE();
      case 9:
        return Fortification.MAGE_ACADEMY();
      case 10:
        return Fortification.SPRING_OF_ELEMENTS();
      default:
        return undefined;
    }
  }

  constructor(public id: number, public name: string, public positions: number, public type: string) {}

  isHero(): boolean {
    return this.type === 'Hero';
  }

  isTitan(): boolean {
    return this.type === 'Titan';
  }
}
