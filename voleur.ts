import {Character} from "./character.ts";
import {Objects} from "./objects.ts";

class Voleur extends Character {
    constructor(name: string) {
        super([name], 50, 50, 30, 90, 90);
    }
    // methode pour ne rien voler comme objet avec 40% de chance
    Steal(): string {
        const rand = Math.random();
        if (rand < 0.4) {
            return "rien";
        }
        // Le voleur vole quelque chose en utilisant la classe Outil
        return Objects.Steal(this);   
    }

    // methode pour obtenir une potion avec 30% de chance
    getPotion(): string {
        const rand = Math.random();
        if (rand < 0.3) {
            return "Potion";
        }
        
        return "Potion";
    }
    // methode pour obtenir un fragment d'étoile avec 15% de chance
    getFragment(): string{
        const rand = Math.random();
        if (rand < 0.15) {
            return "Fragment d'étoile";
        }
        return "Fragment";
    }

    // methode pour obtenir un éther avec 10% de chance
    getEther(): string {
        const rand = Math.random();
        if (rand < 0.1) {
            return "Ether";
        }
        return "Ether";
    }

    // methode pour obtenir une demi-étoile  avec 5% de chance
    getHalfStar(): string {
        const rand = Math.random();
        if (rand < 0.05) {
            return "Demi-étoile";
        }
        return "Demi-étoile";
    }   
}

export {Voleur};
    
    