export class Fortification {
  static BARRACKS_ID = 1;
  static BASTION_OF_FIRE_ID = 2;
  static BASTION_OF_ICE_ID = 3;
  static BRIDGE_ID = 4;
  static CITADEL_ID = 5;
  static FOUNDRY_ID = 6;
  static GATES_OF_NATURE_ID = 7;
  static LIGHTHOUSE_ID = 8;
  static MAGE_ACADEMY_ID = 9;
  static SPRING_OF_ELEMENTS_ID = 10;

  static HERO_FORT_IDS = [
    Fortification.BARRACKS_ID,
    Fortification.CITADEL_ID,
    Fortification.FOUNDRY_ID,
    Fortification.LIGHTHOUSE_ID,
    Fortification.MAGE_ACADEMY_ID,
  ];

  static TITAN_FORT_IDS = [
    Fortification.BASTION_OF_FIRE_ID,
    Fortification.BASTION_OF_ICE_ID,
    Fortification.BRIDGE_ID,
    Fortification.GATES_OF_NATURE_ID,
    Fortification.SPRING_OF_ELEMENTS_ID,
  ];

  static BARRACKS(): Fortification {
    return new Fortification(Fortification.BARRACKS_ID, 'Barracks', 3, 'Hero');
  }

  static BASTION_OF_FIRE(): Fortification {
    return new Fortification(Fortification.BASTION_OF_FIRE_ID, 'Bastion of Fire', 4, 'Titan');
  }

  static BASTION_OF_ICE(): Fortification {
    return new Fortification(Fortification.BASTION_OF_ICE_ID, 'Bastion of Ice', 4, 'Titan');
  }

  static BRIDGE(): Fortification {
    return new Fortification(Fortification.BRIDGE_ID, 'Bridge', 4, 'Titan');
  }

  static CITADEL(): Fortification {
    return new Fortification(Fortification.CITADEL_ID, 'Citadel', 7, 'Hero');
  }

  static FOUNDRY(): Fortification {
    return new Fortification(Fortification.FOUNDRY_ID, 'Foundry', 4, 'Hero');
  }

  static GATES_OF_NATURE(): Fortification {
    return new Fortification(Fortification.GATES_OF_NATURE_ID, 'Gates of Nature', 4, 'Titan');
  }

  static LIGHTHOUSE(): Fortification {
    return new Fortification(Fortification.LIGHTHOUSE_ID, 'Lighthouse', 3, 'Hero');
  }

  static MAGE_ACADEMY(): Fortification {
    return new Fortification(Fortification.MAGE_ACADEMY_ID, 'Mage Academy', 3, 'Hero');
  }

  static SPRING_OF_ELEMENTS(): Fortification {
    return new Fortification(Fortification.SPRING_OF_ELEMENTS_ID, 'Spring of Elements', 4, 'Titan');
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

  static IS_HERO_FORT_ID(id: number): boolean {
    return Fortification.HERO_FORT_IDS.includes(id);
  }

  static IS_TITAN_FORT_ID(id: number): boolean {
    return Fortification.TITAN_FORT_IDS.includes(id);
  }

  constructor(public id: number, public name: string, public positions: number, public type: string) {}

  isHero(): boolean {
    return this.type === 'Hero';
  }

  isTitan(): boolean {
    return this.type === 'Titan';
  }
}
