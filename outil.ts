import {Voleur} from "./voleur.ts";

class Outil {
    static Steal(voleur: Voleur): string {
        const rand = Math.random() * 100;
        if (rand < 0.4) {
            return "rien";
        } else if (rand  < 70) {
            return voleur.getPotion();;
        } else if (rand < 85) {
            return voleur.getFragment() ;
        } else if (rand < 95) {
            return voleur.getEther();
        } else {
            return voleur.getHalfStar();
        }
    }
}

export {Outil};