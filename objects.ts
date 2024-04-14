import { Outil } from "./outil.ts";

class Objects extends Outil {
    // Méthode pour utiliser l'objet
    use(target: string) {
        console.log("Vous pouvez utiliser l'objet");
        // Méthode pour utiliser un objet
        switch (name) {
            case "Potion":
                this.usePotion(target);
                break;

            case "StarFragment":
                this.useStarFragment(target);
                break;

            case "Demi-d'étoile":
                this.useHalfStar(target);
                break;

            case "Ether":
                this.useEther(target);
                break;

            default:
                console.log("Vous ne pouvez pas utiliser cet objet");
                break;    
        }

    }
    // Méthode pour utiliser une potion
    private usePotion(target: any){
        const restoredHP = Math.floor(target.maxHP * 0.5);
        target.restoreHP(restoredHP);
        console.log(`${target.names} utilise une potion et récupère ${restoredHP} points de vie.`);
    }

    // Méthode pour utiliser un morceau d'étoile
    private useStarFragment(target: any) {
        const restoredHP = Math.floor(target.maxHP * 0.2);
        target.restoreHP(restoredHP);
        console.log(`${target.names} utilise un morceau d'étoile et récupère ${restoredHP} points de vie.`);
    }

    // Méthode pour utiliser une demi-étoile
    private useHalfStar(target: any) {
        target.restoreHP(target.maxHP);
        console.log(`${target.names} utilise une demi-étoile et récupère tous ses points de vie.`);
    }

    // Méthode pour utiliser un éther
    private useEther(target: any) {
        const restoredMP = Math.floor(target.maxMP * 0.3);
        target.restoreMP(restoredMP);
        console.log(`${target.names} utilise un éther et récupère ${restoredMP} points de magie.`);
    }

}

export {Objects};