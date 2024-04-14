class Character {
    constructor(
        public names: string[],
        public attack: number,
        public defense: number,
        public speed: number,
        public maxHP: number,
        public currentHP: number,
        public objects: string[] = [],
    ) {}

    // methode pour attacquer un autre personnage
    attackTarget(targets: Character[]) {
        const damage = Math.max(this.attack - this.defense) * 0.4;
        targets.forEach((target) => {
            target.takeDamage(damage);
            console.log(`${this.names} lance une attaque sur ${target.names}`);
        });
    }

    // methode pour prendre des dégats
    takeDamage(attack: number) {
        this.currentHP -= Math.max(attack, 0);
        if (this.currentHP < 0) {
            this.currentHP = 0;
        }
        console.log(`${this.names} prend ${attack} de dégats`);
        console.log(`${this.names} reste ${this.currentHP} de vie`);  
    }


    // methode pour restaurer les points de vie
    restoreHp() {
        this.currentHP = this.maxHP;
        console.log(`${this.names} restaure ${this.currentHP} de vie`);   
    }

    // methode pour ressuciter un personnage avec un pourcentage de vie
    resurrect() {
        // Réssuciter avec la moitié maxHP
        this.currentHP = Math.floor(this.maxHP / 2); 
        console.log(`${this.names} est ressuscité avec ${this.currentHP} points de vie`);
    }
    // Utiliser les Objets pour combattre
    useObjects(objects: string) {
        this.objects.push(objects);
        console.log(`${this.names} utilise ${objects}`);
    }
}

export {Character};

