import {Character} from "./character.ts";

class Monstre extends Character {
    constructor(name: string) {
        super([name], 10, 10, 10, 100, 100);
    }
    // methode pour que le monstre ait 20 pourcent de chance d'attaquer simplement un personnage avec un maxHP inférieur à 50 pourcent
    attackTarget(names: Character[]) {
        const rand = Math.random();
        // 20% de chance de lancer une attaque normale contre un personnage avec un maxHP plus bàs que 50%
        if (rand === 0.2) {
            console.log(`${Monstre} lance une attaque normale sur ${names}`);
            const damage = Math.max(0, (this.attack - this.defense) * 0.2);
            names.forEach((name) => {
                name.takeDamage(damage, 0);
            });
        
        }    
    }
    
    // 80% de chance de lancer une attaque hasardeuse parmi les aventuriers vivants
    groupAttack(names: Character[]) {
        const rand = Math.random();
        if (rand === 0.8) {
            console.log(`${Monstre} lance une attaque hasardeuse sur ${names}`);
            const damage = Math.max(0, (this.attack - this.defense) * 0.8);
            names.forEach((name) => {
                name.takeDamage(damage, 0);
            });
        }
    }
}

export {Monstre};