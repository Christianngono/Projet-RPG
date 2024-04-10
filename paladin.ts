import {Character} from "./character.ts";
class Paladin extends Character {
    constructor(name: string) {
        super([name], 55, 65, 12, 90, 90);
    }
    // methode pour effectuer une attaque sainte sur un autre personnage
    holyAttack(names: Character[]) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.4);
        names.forEach((name) => {
            name.takeDamage(damage, 0);
            console.log(`${this.names} lance une attaque sainte sur ${names}`);
        });
    }
    // methode pour effectuer une attaque de groupe 
    groupAttack(names: Character[]) { 
        console.log("attaque de groupe");
        const damage = Math.max(0, (this.attack - this.defense) * 0.3);
        names.forEach((name) => {
            name.takeDamage(damage, 0);
            console.log(`${this.names} lance une attaque de groupe sur ${names}`);
        });
    }
}

export {Paladin};