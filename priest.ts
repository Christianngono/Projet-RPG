import {Character} from "./character.ts";

class Priest extends Character {
    constructor(name: string) {
        super(name, 71, 30, 10, 80, 80);
    }
    // methode pour restaurer 25 pourcent de sa vie ou celle de son allié
    heal(name: Character) {
        console.log(`${this.name} lance un soin sur ${name}`);
        const healedAmount = Math.floor(this.currentHP * 0.25);
        name.restoreHp(healedAmount);
    }   
}

export {Priest};