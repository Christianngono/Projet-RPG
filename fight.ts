import {Character} from './character.ts';


class Fight {
    constructor(public characters: Character[], public enemies: Character[]) {}
    
    // Méthode pour commencer le combat
    start() {
        console.log("Combat commencé !");
        while (this.characters.length > 0 && this.enemies.length > 0) {
            this.charactersAttack();
            if (this.enemies.length > 0) {
                this.enemiesAttack();
            }
            const characters: Character[] = this.determineOrder();
            let index = 0;
            // Ajout d'un compteur de tours
            let rounds = 0;
    
            while (!this.checkAllDead(this.characters) && !this.checkAllDead(this.enemies) && rounds < 4) {
                this.stimulateTurn(characters[index]);
                index =(index + 1) % characters.length;
                rounds++;
            }
    
            if (this.checkAllDead(this.characters)) {
                console.log("la team1  perdu, la team2 gagné !");
            } else if (!this.checkAllDead(this.enemies)) {
                console.log("la team2 perdu, la team1 gagné !");
            }
            console.log("fin de combat");
            return this.checkAllDead(this.characters) || this.checkAllDead(this.enemies);
        
        }
        console.log("Combat terminé !");
    }
    charactersAttack() {
        this.characters .forEach((character) => {
            if (this.enemies.length > 0) {
                character.attackTarget(this.enemies);
                this.enemies = this.enemies.filter((enemy) => enemy.currentHP > 0);
            }
        });
    }
    enemiesAttack() {
        this.enemies.forEach((enemy) => {
            if (this.characters.length > 0) {
                enemy.attackTarget(this.characters);
                this.characters = this.characters.filter((character) => character.currentHP > 0);
            }
        });
    }

    // Déterminer l'ordre des tours en fonction de la vitesse de chaque personnage
    determineOrder(): Character[] {
        const allCharacters: Character[] = this.characters.concat(this.enemies);
        return allCharacters.sort((a, b) => a.speed - b.speed).reverse();
    }
    // Vérifier si tous les personnages d'une equipe sont morts ou vivants
    checkAllDead(team: Character[]): boolean {
        return team.every((character) => character.currentHP <= 0);
    }
    // Stimuler un tour de combat
    stimulateTurn(character: Character) {
        // Sélectionner une équipe cible
        const target = this.determineTarget(character);
        // Attaquer la cible
        character.attackTarget(target);
    }
    // Sélectionner une équipe cible
    determineTarget(character: Character): Character[] {
        const targetTeam = character === this.characters[0] ? this.enemies : this.characters;
        const aliveTargets = targetTeam.filter(target => target.currentHP > 0);
        return aliveTargets.length > 0 ? [aliveTargets[0]] : [];
    }
}

export {Fight};

