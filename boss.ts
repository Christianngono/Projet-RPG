import {Character} from "./character.ts";

class Boss extends Character {
    constructor(name: string) {
        super(name, 80, 60, 35, 100, 100);

    }
    // methode pour attaquer une attaque simple comme le paladin avec 40% de chance
    attackTarget(target: Character) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.4);
        target.takeDamage(damage);
        console.log(`${this.name} attaque ${target}`);
    }
    // methode pour effectuer une attaque de groupe comme le paladin avec 70% de chance
    groupAttack(target: Character) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.7);
        target.takeDamage(damage);
        console.log(`${this.name} lance une attaque de groupe sur ${target}`);
    }
    // methode pour effectuer une attaque de zone avec 30% de chance
    zoneAttack(target: Character) {
        console.log(`${this.name} lance une attaque de zone sur ${target}`);
        const damage = Math.max(0,(this.attack - this.defense) * 0.3);
        target.takeDamage(damage);
    }
}

export {Boss};