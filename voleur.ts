import {Character} from "./character.ts";
class Voleur extends Character {
    constructor(name: string) {
        super(name, 50, 50, 30, 90, 90);
    }
    // methode pour ne rien voler comme objet avec 40% de chance
    Steal(): string {
        return "Rien";   
    }

    // methode pour obtenir une potion avec 30% de chance
    getPotion(): string {
        return "Potion";
    }
    // methode pour obtenir un fragment d'étoile avec 15% de chance
    getFragment(): string{
        return "Fragment d'étoile";
    }

    // methode pour obtenir un éther avec 10% de chance
    getEther(): string {
        return "Ether"
    }

    // methode pour obtenir une demi-étoile  avec 5% de chance
    getHalfStar(): string {
       return "Demi-étoile";
    }
}

export {Voleur};
    