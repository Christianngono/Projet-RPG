import {Character} from "./character.ts";
import {DungeonRoom} from "./dungeons.ts";
import {Enemy} from "./enemies.ts";
class GameManager {
    constructor(public dungeonRooms: DungeonRoom[], public characters: Character[], public enemies: Enemy[]) {}
    startGame() {
        // Implement game start logic
        console.log("Combat game");

        this.exploreDungeon();
    

    }

    // Method to explore the dungeon
    exploreDungeon() {
        console.log("You are in a dungeon!");
        this.dungeonRooms.forEach((room) => {
            if (this.characters.length === 0) {
                console.log("You have lost. Game Over!");
                return;
            }
            if (this.enemies.length === 0) {
                console.log("You have won. Game Over!");
                return;
            }
            room.interact(this.characters);
        });
        console.log("You have explored all the dungeon rooms!");
        console.log("End of the game.");
    }       
}

export {GameManager};