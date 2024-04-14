import {Character} from "./character.ts";

class Guerrier extends Character {
    constructor(name: string) {
        super([name], 60, 60, 35, 100, 100);
    }

    // Methode pour effectuer une attaque sur un autre personnage
    attackTarget( names: Character[]) {

        const damage = Math.max(0, this.attack - this.defense);
        names.forEach((name) => {
            name.takeDamage(damage);
            console.log(`${name.names} lance une attaque sur ${this.names}`);
        });
    }       
}

export {Guerrier}; 