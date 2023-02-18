import { Mage, Warrior } from './Archetypes';
import { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

const orc = new Warrior('joes');
const mage = new Mage('bruxo');
const char = new Character('eu');
const char2 = new Character('ele');
const monster = new Monster();
const monster2 = new Monster();
const monster3 = new Monster();

const pvp = new PVP(char, char2);
const pve = new PVE(char2, [monster, monster2, monster3]);

char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();
char2.levelUp();

console.log(pvp.fight());
// console.log(pve.fight());

// console.log(char);
// console.log(char2);
// console.log(monster);
