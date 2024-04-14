import {Character} from "./character.ts";

class Enemy extends Character {
    constructor(name: string,
        public attack: number,
        public defense: number,
        public speed: number,
        public currentHP: number,
        public maxHP: number,
        public type: string,
        public attackType: string,
    ) {
        super([name], 20, 10, 15, 50, 50);
    }

    // Méthode por que l'ennemi attaque un personnge
    attackTarget(names: Character[]) {
        // Vérifier si l'ennemi peut attaquer
        if (this.currentHP <= 0) {
            console.log(`${this.names} est mort et ne peut lancer une attaque contre ${name}!`);
            return;
        }
        // Calculer les dégats de l'attaque
        let damage = 0;
        if (this.attackType === "physic") {
        // Attaque physique: infliger des dégâts basés sur la défense et l'attaque du personnage cible
        damage = Math.max(this.attack - names[0].defense) * 0.4;

        } else if (this.attackType === "magic"){
        // Attaque magique : infliger des dégâts basés sur l'attaque du personnage cible
        damage = Math.max(0, this.attack  * 0.4);
        }  
        // Vérifier si l'ennemi cible le personnage aux PV les plus bas ou un aventurier au hasard
        const targetCharacter = this.chooseTarget(names);

        targetCharacter.takeDamage(damage, 0);
        console.log(`${this.names} lance une ${this.attackType} sur ${targetCharacter.names} et inflige ${damage} de dégats`);   
    }
    
    // Méthode pour choisir la cible pour l'attaque de l'ennemi
    chooseTarget(names: Character[]): Character {
        // calculer les chances de viser le personnage aux PV les plus bas
        const rand = Math.random();
        if (rand < 0.2) {
            // 20% de chances de viser le personnage aux PV les plus bas
            return this.characterWithLowestHP(names);
        } else {
            // 80% de chances de viser un aventurier au hasard
            const randomIndex = Math.floor(Math.random() * names.length);
            return names[randomIndex];
        }   
    }

    // Méthode pour trouver le personnage aux PV les plus bas
    characterWithLowestHP(names: Character[]): Character {
        let lowesHPCharacter = names[0];
        for (let i = 1; i < names.length; i++) {
            if (names[i].currentHP < lowesHPCharacter.currentHP) {
                lowesHPCharacter = names[i];
            }
        }
        return lowesHPCharacter;
    }
}

export {Enemy};