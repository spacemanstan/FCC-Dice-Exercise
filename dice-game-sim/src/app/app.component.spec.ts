import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DiceGameSimComponent } from './dice-game-sim/dice-game-sim.component';

describe('DiceGameSimComponent', () => {
  let component: DiceGameSimComponent;
  let fixture: ComponentFixture<DiceGameSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DiceGameSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should simulate game and update gameScores', () => {
    component.simulateGame();
    expect(component.gameScores).toBeDefined();
  });

  it('should update total score correctly', () => {
    component.rollResult = [1, 2, 3, 4, 5, 6]; // Sample roll result
    const expectedTotal = component.rollResult.reduce((acc, curr) => acc + curr, 0);
    expect(component.getRollSum()).toEqual(expectedTotal);
  });

  it('should validate number of dice to roll', () => {
    component.diceToRoll = 0;
    component.validateDiceToRoll();
    expect(component.diceToRoll).toEqual(1); // Ensure it's set to minimum if below 1
  });
});
