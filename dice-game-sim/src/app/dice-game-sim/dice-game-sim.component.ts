import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // many basic functions
import { FormsModule } from '@angular/forms'; // two way communication


@Component({
  selector: 'app-dice-game-sim',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dice-game-sim.component.html',
  styleUrl: './dice-game-sim.component.scss'
})
export class DiceGameSimComponent {
  diceToRoll: number = 1;
  rollResult: number[] = Array(6).fill(0);
  
  rollDice() {
    this.rollResult = Array(6).fill(0); // Reset the roll results
    for (let i = 0; i < this.diceToRoll; i++) {
      const roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
      this.rollResult[roll - 1]++; // Increment the corresponding index in the roll result array
    }
  }

  getRollSum(): number {
    let sum = 0;
  
    this.rollResult.forEach((count, index) => {
      sum += (index + 1) * count;
    });
  
    return sum;
  }

  validateDiceToRoll() {
    if (this.diceToRoll < 1) {
      this.diceToRoll = 1;
    }
  }
}
