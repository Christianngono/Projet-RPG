import {Character} from './character.ts';

class Fight {
    constructor(public team1: Character[], public team2: Character[]) {
        this.team1 = team1;
        this.team2 = team2;
    }

    
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

        // Vérifier si le personnage n'est pas mort afficher un message
        if (character.currentHP > 0) {
            console.log("est vivant !");
            console.log(character);
            console.log(character.currentHP);
        } else {
            console.log("est mort !");
            console.log(character);
            console.log(character.currentHP);
            return;
        }
        
        // Sélectionner l'équipe cibl
        const targetTeam = character === this.team1[0] ? this.team2 : this.team1;

        // Pour chaque personnage de l'équipe cible, subir l'attaque de l'attaquant
        targetTeam.forEach((character) => {
            // Vérifier si la cible est vivante
            if (character.currentHP > 0) {
                character.attackTarget(character);
                console.log(`${character} est vivante !`);
                console.log(character.currentHP);
                console.log(character.attack);
                console.log(character.defense);
                console.log(character.speed);

            } else {
                console.log(`${character} est déjà mort !`);
                console.log(character);
                console.log(character.currentHP);
                console.log(character.attack);
                console.log(character.defense);
                console.log(character.speed);
            }
        });
    }

    // Methode pour commencer un combat
    start() {
        console.log("debut de combat !");
        const characters: Character[] = this.determineTurnOrder();
        let index = 0;
        // Ajout d'un compteur de tours
        let rounds = 0;

        while (!this.isTeamDead(this.team1) && !this.isTeamDead(this.team2) && rounds < 32) {
            this.stimulateTurn(characters[index]);
            index =(index + 1) % characters.length;
            rounds++;
        }

        if (this.isTeamDead(this.team1)) {
            console.log("la team1 perdu, la team2 gagné !");
        } else if (!this.isTeamDead(this.team2)) {
            console.log("la team2 perdu, la team1 gagné !");
        }
        console.log("fin de combat");
        return this.isTeamDead(this.team1) || this.isTeamDead(this.team2);
    }   
}

export {Fight};
