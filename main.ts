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
import {Menu} from "./menu.ts";

const selectedCharacters: Character[] = [];


// utiliser la classe Menu pour sélectionner les personnages
const characters = new Menu("Sélectionnez un personnage :", [
  "Guerrier",
  "Mage",
  "Paladin",
  "Barbare",
  "Priest",
  "Voleur",
  "Boss",
  "Monstre",
]);

// Sélectionner les personnages de la team1 en fonction des arguments
for (let i = 0; i < 3; i++) {
  const optionSelected = characters.ask();
  const character = createCharacter(optionSelected);
  if (character) {
    selectedCharacters.push(character);
  } else {
    console.log(`Personnage invalide pour l'argument ${i + 1}`);
    Deno.exit(i);
  }
}

// Demander à l'utilisateur de sélectionner les personnages de la team2
for (let i = 0; i < 3; i++) {
  const optionSelected = characters.ask();
  const character = createCharacter(optionSelected);
  if (character) {
    selectedCharacters.push(character);
  } else {
    console.log(`Personnage invalide pour l'argument ${i + 4}`);
    Deno.exit(i + 3);
  }
}

// Afficher les personnages de la team1
console.log("Team1 :");
selectedCharacters.slice(0, 3).forEach((character, index) => {
  console.log(`${index + 1}: ${character.names}`);
});

// Afficher les personnages de la team2
console.log("Team2 :");
selectedCharacters.slice(3, 6).forEach((character, index) => {
  console.log(`${index + 1}: ${character.names}`);
});

// Demander à l'utilisateur de lancer le combat
const launchMenu = new Menu("Voulez-vous lancer le combat maintenant?", ["Oui", "Non",]);
const choice = launchMenu.ask();

if(choice === "Non") {
  Deno.exit(0);
}

if (choice === "Oui") {
  // Diviser les personnages en deux équipes
const characters: Character[] = selectedCharacters.slice(0, 3);
const enemies: Character[] = selectedCharacters.slice(3, 6);

// Commencer le combat
const fight = new Fight(characters,  enemies);
fight.start();

} 

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