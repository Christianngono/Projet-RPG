import {Character} from "./character.ts";
class Mage extends Character {
    constructor(name: string) {
        super([name], 67, 8, 15, 80, 80);
    }

    // methode pour l'atteque magique
    magicAttack(names: Character[]){ 
        // effectuer les domages magiques sans tenir compte de la défense de l'ennemi
        const Damage = Math.max(0, this.attack - this.defense);
        this.takeDamage(Damage, 0);
        console.log(`${this.names} lance une attaque magique sur ${names}`);
    }
}

export {Mage};
