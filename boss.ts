import {Character} from "./character.ts";

class Boss extends Character {
    constructor(name: string) {
        super([name], 80, 30, 35, 100, 100);

    }
    // methode pour attaquer une attaque simple comme le paladin avec 40% de chance
    Target(names: Character[]) {
        const rand = Math.random();
        if (rand === 0.4) {
            const damage = Math.max(0, (this.attack - this.defense) * 0.4);
            names.forEach((name) => {
                name.takeDamage(damage, 0);
                console.log(`${this.names} lance une attaque simple sur ${names.map((name) => `${name.names}`).join(", ")}`);
            });  
        }
    }
    // methode pour effectuer une attaque de groupe comme le monstre normal avec 70% de chance
    groupAttack(names: Character[]) {
        const rand = Math.random();
        if (rand === 0.7) {
            const damage = Math.max(0, (this.attack - this.defense) * 0.7);
            names.forEach((name) => {
                name.takeDamage(damage, 0);
                console.log(`${this.names} lance une attaque simple sur ${names.map((name) => `${name.names}`).join(", ")}`);
            });
        }
    }
    // methode pour effectuer une attaque de zone avec 30% de chance
    zoneAttack(names: Character[]) {
        const rand = Math.random();
        if (rand === 0.3) {
            const damage = Math.max(0, (this.attack - this.defense) * 0.3);
            names.forEach((name) => {
                name.takeDamage(damage, 0);
                console.log(`${this.names} lance une attaque simple sur ${names.map((name) => `${name.names}`).join(", ")}`);
            });
        }
    }        
}

export {Boss};