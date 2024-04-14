import {Character} from "./character.ts";

class Priest extends Character {
    constructor(name: string) {
        super([name], 71, 30, 10, 80, 80);
    }
    // methode pour restaurer 25 pourcent de sa vie ou celle de son allié
    heal(names: Character[]) {
        const heal = Math.max(0, this.currentHP * 0.25);
        names.forEach((name) => {
            name.takeDamage(heal);
            console.log(`${this.names} restaure ${heal} de sa vie`);
            console.log(`${name.names} restaure ${heal} de sa vie`);
        });
        this.takeDamage(heal);
        console.log(`${this.names} restaure ${heal} de sa vie`);    
    }      
}

export {Priest};