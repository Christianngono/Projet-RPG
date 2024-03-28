import {Character} from "./character.ts";
class Voleur extends Character {
    constructor(name: string) {
        super(name, 50, 50, 30, 90, 90);
    }
    // methode pour ne rien voler comme objet avec 40% de chance
    Steal(voleur: Character, object: object) {
        const rand = Math.random();
        if (rand === 0.4) {
            console.log(`${voleur} ne rien voler sur ${object}`);
            return;
        }
    }

    // methode pour obtenir une potion avec 30% de chance
    getPotion(voleur: Character, potion: object) {
        const rand = Math.random();
        if (rand === 0.3) {
            console.log(`${voleur} obtient une ${potion}`);
            return;
        }
    }
    // methode pour obtenir un fragment d'étoile avec 15% de chance
    getFragment(voleur: Character, fragmentStar: object) {
        const rand = Math.random();
        if (rand === 0.15) {
            console.log(`${voleur} obtient un ${fragmentStar}`);
            return;
        }
    }

    // methode pour obtenir un éther avec 10% de chance
    getEther(voleur: Character, ether: object) {
        const rand = Math.random();
        if (rand === 0.1) {
            console.log(`${voleur} obtient un ${ether}`);
            return;
        }
    }

    // methode pour obtenir une demi-étoile  avec 5% de chance
    getHalfStar(voleur: Character, halfStar: object) {
        const rand = Math.random();
        if (rand === 0.05) {
            console.log(`${voleur} obtient un ${halfStar}`);
            return;
        }
    }
}

export {Voleur};
    