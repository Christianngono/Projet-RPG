import {Character} from "./character.ts";
class Paladin extends Character {
    constructor(name: string) {
        super(name, 55, 65, 12, 90, 90);
    }
    // methode pour effectuer une attaque sainte sur un autre personnage
    holyAttack(name: Character) {
        console.log(`${this.name} lance une attaque sainte sur ${name}`);
            const damage = Math.max(0, (this.attack - this.defense) * 0.4);
            name.takeDamage(damage);    
    }
    // methode pour effectuer une attaque de groupe 
    groupAttack(name: Character) {
        console.log("attaque de groupe");
        const damage = Math.max(0, (this.attack - this.defense) * 0.3);
        name.takeDamage(damage);   
    }
}

export {Paladin};