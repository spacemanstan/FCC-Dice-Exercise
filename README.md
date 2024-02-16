# FCC-Dice-Exercise

## About
This is my submission for the FCC dice assignment.

## Instructions
The easiest way to view the project is to go to the live hosting of it [here](https://spacemanstan.github.io/FCC-Dice-Exercise/). However, if you wish to run the code yourself, the easiest way is to use the Angular dev environment.

After you clone the project, ensure you are in the base folder and run the command:
```bash
ng serve
```

This will build and run a local server. You can also run the command:
```bash
ng test
```
This will run a few basic tests I wrote.

## Problem Description
There is a game that is played with 5 dice. The objective of the game is to obtain the lowest possible score. To that end, the rules of the game are as follows:

## All dice are thrown on a board.
If there are any 3’s, all the 3’s are taken off the board and a score of 0 is awarded for this roll.
If there are not any 3’s, the lowest die is taken off the board, and the value of that lowest die is awarded for this roll.
The remaining dice are now re-thrown, and the same procedure as above is followed until there are no dice left on the board.
The total score for the game is the sum of all the rolls.
Implementation Details
The solution involves simulating this game over 10,000 iterations and keeping a count of all the possible game scores.

## How to Run
Clone the project.
Navigate to the project directory.
Run ng serve to start the development server.
Open your browser and go to http://localhost:4200/ to view the project.
Optionally, run ng test to execute the tests.

## Regarding the code:
1. The component simulates the described game by rolling dice according to the rules and keeping track of the scores.
2. The `simulateGame()` method runs the game simulations, while the `playGame()` method handles the logic for individual game plays.
3. The `rollDice()` method simulates rolling a certain number of dice.
4. The `validateDiceToRoll()` and `validateNumSims()` methods ensure that the number of dice to roll and the number of simulations are valid, respectively.
5. The `getDiceIcon()` method provides icons based on the index of the dice.

### Improvements
A few improvements I would have liked to have done with more time:
- [ ] SCSS: I didn't have time to add much or any styling to make the website presentation nicer.
- [ ] Error Handling: Implementing more robust error handling mechanisms, such as displaying error messages to users when they input invalid values or encounter unexpected errors.
- [ ] Unit Tests: Expanding the test coverage to include more edge cases and scenarios to ensure the reliability and stability of the application.
- [ ] User Input: I tried to add in a way to force a positive value for number of simulations to run but I am not confident it works or does anything lol.
