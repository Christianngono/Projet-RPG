import { Menu } from "./menu.ts";
const menu = new Menu("Selectionnez une option :", ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]);
menu.display();

import {Fight} from "./fight.ts";

// Selection d'une option
const optionSelected = menu.ask();
console.log("Option selectionnee :", optionSelected);


class Character {
    constructor(
        protected name: string,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected maxHP: number,
        protected currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(name: Character) {
        const damage = this.attack - name.defense;
        name.takeDamage(damage);
        console.log(`${this.name} attaque ${name}`);
    }

    

    // methode pour prendre des dégats
    takeDamage(attack: number) {
        const damage = Math.max(this.attack - this.defense);
        attack += damage;
        this.takeDamage(damage);

    }

    // methode pour restaurer les points de vie
    restoreHp(currentHP: number) {
        const restoredHP = Math.floor(100 * currentHP / this.maxHP);
        this.currentHP = restoredHP;
        console.log(`${this.name} reste ${this.currentHP} points de vie`);
    }

    // methode pour ressuciter un personnage avec un pourcentage de vie
    resurrect (name: Character) {
        const restoredHP = Math.floor(100 * name.currentHP / name.maxHP);
        name.currentHP = restoredHP;
        console.log(`${name} est ressuscité`);
    }
}



class Mage extends Character {
    constructor(name: string) {
        super(name, 67, 8, 15, 80, 80);
    }

    // methode pour l'atteque magique
    magicAttack(name: Character) {
        // effectuer les domages magiques sans tenir compte de la défense de l'ennemi
        const magicDamage = Math.max(0, this.attack - this.defense);
        name.takeDamage(magicDamage);
    }
}


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

class Priest extends Character {
    constructor(name: string) {
        super(name, 71, 30, 10, 80, 80);
    }
    // methode pour prendre soin d'un allié ou de soit même en restaurant 20 pourcent de sa vie
    heal(name: Character) {
        console.log(`${this.name} lance un soin sur ${name}`);
        const healedAmount = Math.floor(this.currentHP * 0.25);
        name.restoreHp(healedAmount);
    }   
}    
// Création des équipes
const team1: Character[] = [
    new Paladin("Arthur"),
    new Barbare("Kratos"),
    new Priest("Merlin"),
];

const team2: Character[] = [
    new Mage("Gandalf"),
];

const fight = new Fight(team1, team2);

fight.start();

export {Character};
