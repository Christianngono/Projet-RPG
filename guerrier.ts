import {Character} from "./character.ts";

class Guerrier extends Character {
    constructor(name: string) {
        super(name, 60, 60, 35, 100, 100);
    }

    // Methode pour effectuer une attaque sur un autre personnage
    attackTarget( name: Character) {
        console.log(`${this.name} lance une attaque sur ${name}`);
        const damage = Math.max(0, (this.attack - this.defense) * 0.4);
        name.takeDamage(damage);
    }       
}