import {Character} from "./character.ts";

class Boss extends Character {
    constructor(name: string) {
        super(name, 80, 60, 35, 100, 100);

    }
    // methode pour attaquer une attaque simple comme le paladin avec 40% de chance
    attackTarget(name: Character) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.4);
        name.takeDamage(damage);
        console.log(`${this.name} attaque ${name}`);
    }
    // methode pour effectuer une attaque de groupe comme le monstre normal avec 70% de chance
    groupAttack(name: Character) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.7);
        name.takeDamage(damage);
        console.log(`${this.name} lance une attaque de groupe sur ${name}`);
    }
    // methode pour effectuer une attaque de zone avec 30% de chance
    zoneAttack(name: Character) {
        console.log(`${this.name} lance une attaque de zone sur ${name}`);
        const damage = Math.max(0,(this.attack - this.defense) * 0.3);
        name.takeDamage(damage);
    }
}

export {Boss};