import { Fight } from "./fight.ts";
import { Character } from "./character.ts";
import { Paladin } from "./paladin.ts";
import { Boss } from "./boss.ts";
import { Guerrier } from "./guerrier.ts";
import { Voleur } from "./voleur.ts";
import { Priest } from "./priest.ts";
import { Mage } from "./mage.ts";
import { Barbare } from "./barbare.ts";
import { Monstre } from "./monstre.ts";

const args = Deno.args;

const selectedCharacters: Character[] = [];

// Vérifier si le nombre d'arguments est valide
if (args.length !== 8) {
  console.log("Veuillez sélectionner exactement 8 personnages.");
  Deno.exit(1);
}

// Sélectionner les personnages en fonction des arguments de ligne de commande
for (let i = 0; i < args.length; i++) {
  const optionSelected = args[i];
  const character = createCharacter(optionSelected);
  if (character) {
    selectedCharacters.push(character);
  } else {
    console.log(`Personnage invalide pour l'argument ${i + 1}`);
    Deno.exit(1);
  }
}

// Diviser les personnages en deux équipes
const team1: Character[] = selectedCharacters.slice(0, 4);
const team2: Character[] = selectedCharacters.slice(4, 8);

// Afficher les personnages sélectionnés pour la team1
console.log("Personnages sélectionnés pour la team1 :");
team1.forEach((character, index) => {
  console.log(`Personnage ${index + 1}: ${character.name}`);
});

// Afficher les personnages sélectionnés pour la team2
console.log("Personnages sélectionnés pour la team2 :");
team2.forEach((character, index) => {
  console.log(`Personnage ${index + 1}: ${character.name}`);
});

// Commencer le combat
const fight = new Fight(team1, team2);
fight.start();

// Fonction pour créer un personnage en fonction de l'option sélectionnée
function createCharacter(optionSelected: string): Character | null {
  switch (optionSelected) {
    case "Guerrier":
      return new Guerrier("Guerrier");
    case "Mage":
      return new Mage("Mage");
    case "Paladin":
      return new Paladin("Paladin");
    case "Barbare":
      return new Barbare("Barbare");
    case "Priest":
      return new Priest("Priest");
    case "Voleur":
      return new Voleur("Voleur");
    case "Boss":
      return new Boss("Boss");
    case "Monstre":
      return new Monstre("Monstre");
    default:
      console.log(`Choix invalide pour l'option "${optionSelected}"`);
      return null;
  }
}