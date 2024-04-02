class Menu {
    constructor(private question: string, private options: string[]) {}

    // methode pour afficher le menu
    display() {
        console.log(this.question);
        this.options.forEach((option, index)=> {
            console.log(`${index + 1}. ${option}`);
        });    
    }
    // methode pour selectionner une option
    selectOption(option: number): string {
        if(this.isOptionSelected(option)) {
            return this.options[option - 1];
        }
        return "";
    }
    // methode pour savoir si l'utilisateur a sélectionné une option
    isOptionSelected(option: number): boolean {
        return option > 0 && option <= this.options.length;
    }

    ask(): string {
        this.display();
        const choice = prompt("Choisissez une option: ");

        if (!choice || isNaN(parseInt(choice)) || parseInt(choice) < 1 || parseInt(choice) > this.options.length) {
            console.log("Choix invalide ! Veuillez sélectionner à nouveau.");
            return this.ask();
        }
        return this.options[parseInt(choice) - 1];
    }    
}

export {Menu};