
import {Enemy} from "./enemies.ts";
import {Character} from "./character.ts";
import {Boss} from "./boss.ts"
import { Fight } from "./fight.ts";


class DungeonRoom {
    constructor(public encounter: string, public loot: string[] | Enemy | Boss) {}

    // Gérer l'interaction avec la salle
    interact(characters: Character[]) {
        console.log(`Vous entrez dans une salle avec ${this.encounter}`);
        console.log("================================================");
        console.log("Vos options :");
        if (this.encounter === "combat aléatoire") {
            // Gérer un combat aléatoire
            console.log("1. Combat aléatoire contre les enemis suivants:");
            this.startRandomCombat(characters);

        } else if (this.encounter === "coffre") {
            // Gérer un coffre 
            console.log("Ouvrez un coffre");

            if (this.loot instanceof Object) {
                console.log(`Vous avez obtenu : ${this.loot}`);
                // Ajouter l'objet à l'inventaire des personnages
                characters.forEach(character => character.objects.push());
            } else {
                // Gérer les pièges
                console.log("Oh non ! C'était un piège !");
                console.log("Vous subissez des dégâts...");

                // Réduire les points de vie des personnages
                characters.forEach((character) => character.takeDamage(20));

            }
        } else if (this.encounter === "boss") {
            // Gérer le combat contre le boss
            console.log("Un puissant Boss apparaît !");
            if(this.loot instanceof Boss) {
                this.startBossFight(characters, this.loot);
            } else {
                console.log("Erreur : le boss de cette salle est invalide.");
            }
        } else {
            console.log("Erreur : rencontre inconnue dans cette salle.");
        }
    }
    
    // Méthode pour commencer un combat aléatoire avec des monstres
    startRandomCombat(characters: Character[]) {
        // Générer des ennemis aléatoires
        const enemies: Enemy[] = this.generateRandomEnemies(3);
        // Commencer le combat
        const fight = new Fight(characters, enemies);
        fight.start();
    }

    // Méthode pour générer des ennemis aléatoires
    generateRandomEnemies(count: number): Enemy[] {
        const enemies: Enemy[] = [];
        for (let i = 0; i < count; i++) {
            // Générer un enenemi aléatoire
            const randomEnemy = this.getRandomEnemy();

            // Vérifier si l'enemi est déjà dans la liste des ennemis
            if (!enemies.some(enemy => enemy === randomEnemy)) {
                enemies.push();
            }
        }
        return enemies;
    }

    // Méthode pour obtenir un enemi aléatoire
    getRandomEnemy(): Enemy {
        // Générer un nombre aléatoire pour choisir un ennemi
        const randomNumber = Math.random();
        // Générer une logique d'ennemis aléatoires basée sur la probabilité
        if (randomNumber < 0.33) {
            // Retourner un ennemi de type monstre1
            return new Enemy("Gobelin", 20, 10, 15, 50, 50, "Normal", "Attaque simple" );
        } else if (randomNumber < 0.66) {
            // Retourner un ennemi de type monstre2 
            return new Enemy("Squelette", 25, 15, 12, 60, 60, "Normal", "Attaque simple");   
        } else {
            // Retourner un ennemi de type monstre3
            return new Enemy("Orc", 30, 20, 18, 70, 70, "Normal", "Attaque simple");
        }
    }

    // Méthode pour commencer un combat contre le boss
    startBossFight(characters: Character[], boss: Boss) {
        // Démarrer le combat avec le boss
        const fight = new Fight(characters, [boss]);
        fight.start();
    }
}
export {DungeonRoom};