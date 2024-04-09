class Character {
    constructor(
        public name: string,
        public attack: number,
        public defense: number,
        public speed: number,
        public maxHP: number,
        public currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(character: Character) {
        const damage = this.attack - character.defense;
        character.takeDamage(damage);
        console.log(`${this.name} attaque ${character}`);
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
    restoreHp() {
        this.currentHP = this.maxHP;
        console.log(`${this.name} reste ${this.currentHP} points de vie`);
    }

    // methode pour ressuciter un personnage avec un pourcentage de vie
    resurrect() {
        // Réssuciter avec la moitié maxHP
        this.currentHP = Math.floor(this.maxHP / 2); 
        console.log(`${this.name} est ressuscité avec ${this.currentHP} points de vie`);
    }
}

export {Character};
