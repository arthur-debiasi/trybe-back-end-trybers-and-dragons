import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public f1: Fighter;
  public f2: Fighter;
  constructor(f1: Fighter, f2: Fighter) {
    super(f1);
    this.f1 = f1;
    this.f2 = f2;
  }

  fight(): number {
    while (this.f1.lifePoints !== -1 && this.f2.lifePoints !== -1) {
      this.f1.attack(this.f2);
      this.f2.attack(this.f1);
    }
    return this.f1.lifePoints === -1 ? 1 : -1;
  }
}
