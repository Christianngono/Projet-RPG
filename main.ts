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
    // methode pour mourir
    die() {
        console.log(`${this.name} est mort`);
    }
    // methode pour avoir une vie
    getHealth(): number {
        return this.currentHP;
    }
    
    // methode pour restaurer les points de vie
    restoreHp(percentage: number) {
        const restoredHP = Math.floor(this.maxHP * percentage);
        this.currentHP += restoredHP;
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
    }

    // methode pour ressuciter un personnage avec un pourcentage de sa vie
    resurrect (percentage: number) {
        this.currentHP = Math.floor(this.maxHP * percentage);
    }
}