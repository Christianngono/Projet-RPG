import {Character} from './character.ts';

class Fight {
    constructor(private team1: Character[], private team2: Character[]) {}
    
    // Metode pour determiner l'ordre des tours en fonction de la vitesse de chaque personnage
    determineTurnOrder(): Character[] {
        const allCharacters: Character[] = this.team1.concat(this.team2);
        return allCharacters.sort((a, b) => a.speed - b.speed);
    }

    // Methode pour verifier si tous les personnages d'une equipe sont morts ou vivants
    isTeamDead(team: Character[]): boolean {
        return team.every(character => character.currentHP <= 0);    
    }

    // Methode pour stimuler un tour de combat
    stimulateTurn(character: Character) {

        // Si le personnage n'est pas mort afficher un message
        if (character.currentHP > 0) {
            console.log("est vivant");
        } else if (character.currentHP <= 0) {
            console.log("est mort");
        }
    }

    // Methode pour commencer un combat 
    start() {
        console.log("debut de combat");
        let character: Character[] = this.determineTurnOrder();
        let index = 0;
        while (!this.isTeamDead(character)) {
            this.stimulateTurn(character[index]);
            index++;
            if (index >= character.length) {
                index = 0;
                character = this.determineTurnOrder();
            }
        }

        while (!this.isTeamDead(this.team1) && !this.isTeamDead(this.team2)) {
            const characters = character[index % character.length];
            this.stimulateTurn(characters);
            index++;
        }

        if (this.isTeamDead(this.team1)) {
            console.log("la team1 perdu, le joueur 2 gagne");
        } else if (!this.isTeamDead(this.team2)) {
            console.log("la team2 perdu, le joueur 1 gagne");
        }
        console.log("fin de combat");
        return this.isTeamDead(this.team1) || this.isTeamDead(this.team2);
    }   
}

export {Fight}
