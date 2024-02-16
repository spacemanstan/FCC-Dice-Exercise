import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGameSimComponent } from './dice-game-sim.component';

describe('DiceGameSimComponent', () => {
  let component: DiceGameSimComponent;
  let fixture: ComponentFixture<DiceGameSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceGameSimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiceGameSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
