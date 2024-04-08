class Character {
    constructor(
        protected name: string,
        protected attack: number,
        protected defense: number,
        public speed: number,
        protected maxHP: number,
        public currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(name: Character) {
        const damage = this.attack - name.defense;
        name.takeDamage(damage);
        console.log(`${this.name} attaque ${name}`);
    }

    

    // methode pour prendre des dégats
    takeDamage(attack: number) {
        this.currentHP -= attack;
        if (this.currentHP < 0) {
            this.currentHP = 0;
        }
        console.log(`${this.name} prend ${this.attack} de dégats`);
        console.log(`${this.name} reste ${this.currentHP} de vie`);
    }


    // methode pour restaurer les points de vie
    restoreHp(currentHP: number) {
        const restoredHP = Math.floor(100 * currentHP / this.maxHP);
        this.currentHP = restoredHP;
        console.log(`${this.name} reste ${this.currentHP} points de vie`);
    }

    // methode pour ressuciter un personnage avec un pourcentage de vie
    resurrect (name: Character) {
        const restoredHP = Math.floor(100 * name.currentHP / name.maxHP);
        name.currentHP = restoredHP;
        console.log(`${name} est ressuscité`);
    }
}


export {Character};
