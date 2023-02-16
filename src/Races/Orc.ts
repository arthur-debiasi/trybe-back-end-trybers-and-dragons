import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  private static _instancesNumber = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc._instancesNumber += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._instancesNumber;
  }
}