import {Character} from "./character.ts";
class Barbare extends Character {
    constructor(name: string) {
        super(name, 70, 15, 10, 100, 100);
    }
    // methode pour effectuer une attaque berserk sur un autre personnage
    berserkAttack(name: Character) {
        console.log(`${this.name} lance une attaque berserk sur ${name}`);
        const damge = Math.max(0, (this.attack - this.defense) * 1.3);
        name.takeDamage(damge);
        const selfDamage = Math.floor(this.currentHP * 0.2);
        this.takeDamage(selfDamage);
    }
}

export {Barbare};