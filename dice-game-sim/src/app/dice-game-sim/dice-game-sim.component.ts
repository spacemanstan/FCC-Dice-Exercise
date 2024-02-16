import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dice-game-sim',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dice-game-sim.component.html',
  styleUrl: './dice-game-sim.component.scss'
})
export class DiceGameSimComponent {
  diceToRoll: number = 1;
  numSimulations: number = 10000; // Default number of simulations
  rollResult: number[] = Array(6).fill(0); // Array to store dice roll results
  gameScores: { [key: number]: number } = {}; // Object to store game scores

  simulateGame(): void {
    // Reset game scores
    this.gameScores = {};

    // Run simulations
    for (let i = 0; i < this.numSimulations; i++) {
      let score = this.playGame();
      if (score in this.gameScores) {
        this.gameScores[score]++;
      } else {
        this.gameScores[score] = 1;
      }
    }
  }

  playGame(): number {
    let dice = [1, 2, 3, 4, 5, 6];
    let totalScore = 0;
    
    while (dice.length > 0) {
      let roll = this.rollDice(dice.length); // Roll remaining dice
      if (roll.includes(3)) {
        totalScore += 0; // Score 0 if there are any 3's
        dice = dice.filter(die => die !== 3); // Remove 3's from dice
      } else {
        let minDie = Math.min(...roll.filter(die => die !== 0)); // Find lowest non-zero die
        totalScore += minDie; // Add lowest die to score
        dice = dice.filter(die => die !== minDie); // Remove lowest die from dice
      }
    }
    
    return totalScore;
  }

  rollDice(numDice: number): number[] {
    let rolls = [];
    for (let i = 0; i < numDice; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1); // Roll a single die
    }
    return rolls;
  }

  getRollSum(): number {
    return this.rollResult.reduce((acc, curr) => acc + curr, 0); // Calculate total score
  }

  validateDiceToRoll(): void {
    if (this.diceToRoll < 1) {
      this.diceToRoll = 1;
    }
  }

  // Helper function for font awesome dice icons
  getDiceIcon(index: number): string {
    switch (index) {
      case 0:
        return 'one';
      case 1:
        return 'two';
      case 2:
        return 'three';
      case 3:
        return 'four';
      case 4:
        return 'five';
      default:
        return 'six';
    }
  }
}
