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

  static ALL(): Array<Fortification> {
    return [
      Fortification.BARRACKS(),
      Fortification.BASTION_OF_FIRE(),
      Fortification.BASTION_OF_ICE(),
      Fortification.BRIDGE(),
      Fortification.CITADEL(),
      Fortification.FOUNDRY(),
      Fortification.GATES_OF_NATURE(),
      Fortification.LIGHTHOUSE(),
      Fortification.MAGE_ACADEMY(),
      Fortification.SPRING_OF_ELEMENTS(),
    ];
  }

  constructor(public id: number, public name: string, public positions: number, public type: string) {}

  isHero(): boolean {
    return this.type === 'Hero';
  }

  isTitan(): boolean {
    return this.type === 'Titan';
  }
}
