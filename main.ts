import { Menu } from "./menu";
const menu = new Menu("Selectionnez une option :", ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"]);
menu.display();

import {Fight} from "./Fight";

// Selection d'une option
const optionSelected = menu.ask();
console.log("Option selectionnee :", optionSelected);


class Character {
    constructor(
        protected name: string,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected maxHP: percentage,
        protected currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(target: Character) {
        const damage = this.attack - target.defense;
        target.takeDamage(damage);
    }

    // methode pour prendre des dégats
    takeDamage(damage: number) {
        this.currentHP -= damage;
        if (this.currentHP <= 0) {
            this.currentHP = 0;
            this.die();
            return;
        }
    }
    // methode pour mourir
    die() {
        console.log(`${this.name} est mort`);
    }
    // methode pour avoir une vie
    getHealth(): number {
        return this.currentHP;
    }
    
    // methode pour restaurer les points de vie
    restoreHp(percentage: number) {
        const restoredHP = Math.floor(this.maxHP * percentage);
        this.currentHP += restoredHP;
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
    }

    // methode pour ressuciter un personnage avec un pourcentage de sa vie
    resurrect (percentage: number) {
        this.currentHP = Math.floor(this.maxHP * percentage);
    }
}

class Guerrier extends Character {
    constructor(name: string) {
        super(name, 20, 15, 10, 100, 100);
    }
}

class Mage extends Character {
    constructor(name: string) {
        super(name, 10, 8, 15, 80, 80);
        this.mana = 50; // valeur initiale de mana
    }

    // methode pour l'atteque magique
    magicAttack(target: Character) {
        // verification si le mage a assez de mana
        if (this.mana >= 20) {
            console.log(`${this.name} lance une attaque magique sur ${target.name}`);
            // Dommages magiques, sans tenir compte de la défense de l'ennemi
            const damge = Math.max(0, this.attack * 1.5);
            target.takeDamage(damge);
            // Réduction de la quantité de mana utilisée
            this.mana -= 20;
        } else {
            console.log(`${this.name} n'a pas assez de mana pour lancer une attaque magique sur ${target.name}`);
        }
    }

    // methode pour restaurer le mana
    restoreMana(percentage: number) {
        const restoredMana = Math.floor(this.mana * percentage);
        this.mana += restoredMana;
        if (this.mana > 50) {
            this.mana = 50;
        }
    }

    // Methode act pour inclure l'attque magique
    act(targetTeam: Character) {
        console.log("C'est au tour de ${this.name} d'agier.");
        const target = targetTeam[Math.floor(Math.random() * targetTeam.length)];
        const rand = Math.random();
        // 50% de chance de lancer une attaque normale
        if (rand < 0.5) { 
            super.act(targetTeam);
        } else {
            // 50% de chance de lancer une attaque magique
            this.magicAttack(target);
        }
    }
}

class Paladin extends Character {
    constructor(name: string) {
        super(name, 18, 12, 12, 90, 90);
    }
    // methode pour effectuer une attaque de groupe
    groupAttack(target: Character) {
        console.log(`${this.name} lance une attaque de groupe sur ${target.name}`);
        const damage = Math.max(0, this.attack - target.defense);
        target.takeDamage(damage);
    }   
}

class Monster extends Character {
    constructor(name: string) {
        super(name, 10, 10, 10, 100, 100);
    }
    // methode pour que le monstre ait 20 pourcent de chance d'attaquer simplement un personnage avec un maxHP inférieur à 50 pourcent
    act(targetTeam: Character) {
        console.log("C'est au tour de ${this.name} d'attaquer.");
        const target = targetTeam[Math.floor(Math.random() * targetTeam.length)];
        const rand = Math.random();
        // 20% de chance de lancer une attaque normale
        if (rand < 0.2) { 
            super.act(targetTeam);
            return;
        } else {
            // 80% de chance de lancer une attaque hasardeuse parmi les aventuriers vivants
            if (Math.random < 0.8) {
                this.attackTarget(target);
                return;
            }    
        }
    }   
} 


class Boss extends Character {
    constructor(name: string) {
        super(name, 30, 20, 15, 100, 100);
    }

    groupAttack(targetTeam: Character[]) {
        console.log(`${this.name} lance une attaque de groupe !`);

    }
    // methode pour lancer une attaque de zone
    zoneAttack(target: Character) {
        console.log(`${this.name} lance une attaque de zone sur ${target.name}`);
        const damage = Math.max(0, this.attack - target.defense);
        target.takeDamage(damage);
    }
}



// Création des équipes
const team1: Character[] = [
    new Paladin("Arthur");
    new Barbare("Kratos");
    new Priest("Merlin");
];

const team2: Character[] = [
    new Guerrier("Conan");
    new Mage("Gandalf");
    new Voleur("Robin");
];

const monster = new Boss("Gollum");
const boss = new Boss("Dragon");



const fight = new Fight(team1, team2, monster, boss);
mage.magicAttack(team1[0], monster, boss);
mage.restoreMana();
mage.act(team1);
Guerrier.attackTarget(monster, boss, team1[0] + 1, team1[1] + 1, team1[2] + 1);
Paladin.attackTarget(monster, boss, team2[0] + 1, team2[1] + 1, team2[2] + 1);
Paladin.groupAttack(team2[0] + 1, monster, boss, team2[1] + 1, team2[2] + 1);

fight.start();
