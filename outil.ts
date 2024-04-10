class Outil {
    static Steal(voleur: {getPotion(): string; getFragment(): string; getEther(): string; getHalfStar(): string}): string {
        const rand = Math.random() * 100;
        if (rand < 40) {
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