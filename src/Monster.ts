import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {}
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}