class character {
    constructor(
        protected name: string,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected maxHP: number,
        protected currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(target: character) {
        const damage = this.attack - target.defense;
        target.takeDamage(damage);
    }

    // methode pour prendre des dégats
    takeDamage(damage: number) {
        this.currentHP -= damage;
        if (this.currentHP <= 0) {
            this.currentHP = 0;
            this.die();
            return;
        }
    }
    


}