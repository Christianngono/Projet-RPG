class Character {
    constructor(
        public names: string[],
        public attack: number,
        public defense: number,
        public speed: number,
        public maxHP: number,
        public currentHP: number,
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(names: Character[]) {
        const damage = Math.max(0, (this.attack - this.defense) * 0.4);
        names.forEach((name) => {
            name.takeDamage(damage, 0);
            console.log(`${name} lance une attaque sur ${this.names}`);
        });
        

    }

    

    // methode pour prendre des dégats
    takeDamage(attack: number, defense: number) {
        this.currentHP -= attack - defense;
        if (this.currentHP < 0) {
            this.currentHP = 0;
        }
        console.log(`${this.names} prend ${attack - defense} de dégats`);
        console.log(`${this.names} reste ${this.currentHP} de vie`);  
    }


    // methode pour restaurer les points de vie
    restoreHp() {
        this.currentHP = this.maxHP;
        console.log(`${this.names} reste ${this.currentHP} points de vie`);
    }

    // methode pour ressuciter un personnage avec un pourcentage de vie
    resurrect() {
        // Réssuciter avec la moitié maxHP
        this.currentHP = Math.floor(this.maxHP / 2); 
        console.log(`${this.names} est ressuscité avec ${this.currentHP} points de vie`);
    }
}

export {Character};
