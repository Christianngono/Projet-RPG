import {Character} from "./character.ts";
class Mage extends Character {
    constructor(name: string) {
        super(name, 67, 8, 15, 80, 80);
    }

    // methode pour l'atteque magique
    magicAttack(name: Character) {
        // effectuer les domages magiques sans tenir compte de la défense de l'ennemi
        const magicDamage = Math.max(0, this.attack - this.defense);
        name.takeDamage(magicDamage);
    }
}

export {Mage};
