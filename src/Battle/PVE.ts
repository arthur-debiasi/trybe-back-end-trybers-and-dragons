import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public character: Fighter;
  public environment: SimpleFighter[];
  constructor(character: Fighter, environment: SimpleFighter []) {
    super(character);
    this.character = character;
    this.environment = environment;
  }

  fight(): number {
    let enemyIndex = 0;
    while (
      this.character.lifePoints !== -1
        && this.environment.every((e) => e.lifePoints !== -1)
    ) {
      const enemy = this.environment[enemyIndex];
      this.character.attack(enemy);
      enemy.attack(this.character);
      enemyIndex = enemyIndex === this.environment.length ? 0 : enemyIndex + 1;
    }
    return this.character.lifePoints === -1 ? 1 : -1;
  }
}