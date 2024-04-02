import {Character} from "./character.ts";

class Monstre extends Character {
    constructor(name: string) {
        super(name, 10, 10, 10, 100, 100);
    }
    // methode pour que le monstre ait 20 pourcent de chance d'attaquer simplement un personnage avec un maxHP inférieur à 50 pourcent
    attackTarget(name: Character) {
        const rand = Math.random();
        // 20% de chance de lancer une attaque normale contre un personnage avec un maxHP plus bàs que 50%
        if (rand === 0.2) {
            console.log(`${this.name} lance une attaque normale sur ${name}`);
            const damage = Math.max(0, (this.attack - this.defense) * 0.2);
            name.takeDamage(damage);
        }    
    }
    
    // 80% de chance de lancer une attaque hasardeuse parmi les aventuriers vivants
    groupAttack(name: Character) {
        const rand = Math.random();
        if (rand === 0.8) {
            console.log(`${this.name} lance une attaque hasardeuse sur ${name}`);
            const damage = Math.max(0, (this.attack - this.defense) * 0.8);
            name.takeDamage(damage);
        }
    }
}

export {Monstre};