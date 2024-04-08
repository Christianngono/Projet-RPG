import {Menu} from "./menu.ts";
import {Fight} from "./fight.ts";
import {Character} from "./character.ts";
import {Paladin} from "./paladin.ts";
import {Boss} from "./boss.ts";
import {Guerrier} from "./guerrier.ts";
import {Voleur} from "./voleur.ts";
import {Priest} from "./priest.ts";
import {Mage} from "./mage.ts";
import {Barbare} from "./barbare.ts";
import {Monstre} from "./monstre.ts";

const menu = new Menu("Selectionnez 3 personnages par équipe :", [
    "Guerrier", 
    "Mage", 
    "Paladin", 
    "Barbare", 
    "Priest", 
    "Voleur",
    "Boss",
    "Monstre",
]);

const selectedCharacters: Character[] = [];
while (selectedCharacters.length < 6) {
    const optionSelected = menu.ask();
    const character = createCharacter(optionSelected);
    selectedCharacters.push(character);
}

const team1: Character[] = [];
const team2: Character[] = [];


for (let i = 0; i < 8; i++) {
    if (i < 3) {
        team1.push(selectedCharacters[i]);
    } else {
        team2.push(selectedCharacters[i]);
    }
}

const fight = new Fight(team1, team2);
fight.start();

function createCharacter(optionSelected: string): Character {
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
            console.log("Choix invalide ! Veuillez sélectionner à nouveau.");
            return createCharacter(optionSelected);
    }
}

