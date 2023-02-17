import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Mage extends Archetypes {
  private static _instancesNumber = 0;
  private _type: EnergyType;
  constructor(name: string) {
    super(name);
    Mage._instancesNumber += 1;
    this._type = 'mana';
  }

  override get energyType(): EnergyType {
    return this._type;
  }

  static override createdArchetypeInstances(): number {
    return this._instancesNumber;
  }
}