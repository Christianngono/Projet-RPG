import {Character} from "./character.ts";
class Barbare extends Character {
    constructor(name: string) {
        super([name], 70, 15, 10, 100, 100);
    }
    // methode pour effectuer une attaque berserk sur un autre personnage
    berserkAttack(names: Character[]) {
        const damage = Math.max(0, (this.attack - this.defense) * 1.3);
        names.forEach((name) => {
            name.takeDamage(damage);
            console.log(`${this.names} lance une attaque berserk sur ${name.names}`);

        });  
    }
    // methode pour perdre 20 pourcent de sa vie en effectuant une attaque Berserk
    HurtSelf() {
        const damage = Math.max(0, this.currentHP * 0.2);
        this.takeDamage(damage);
        console.log(`${this.names} se blesse lors d'une attaque berserk sur ${name}`);
    }

}

export {Barbare};