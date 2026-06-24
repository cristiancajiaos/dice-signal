import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faDice, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  imports: [FontAwesomeModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  public diceIcon: IconDefinition = faDice;

  public diceOneIcon: IconDefinition = faDiceOne;
  public diceTwoIcon: IconDefinition = faDiceTwo;
  public diceThreeIcon: IconDefinition = faDiceThree;
  public diceFourIcon: IconDefinition = faDiceFour;
  public diceFiveIcon: IconDefinition = faDiceFive;
  public diceSixIcon: IconDefinition = faDiceSix;


  public diceValue: WritableSignal<number> = signal(0);

  public oneCount: WritableSignal<number> = signal(0);
  public twoCount: WritableSignal<number> = signal(0);
  public threeCount: WritableSignal<number> = signal(0);
  public fourCount: WritableSignal<number> = signal(0);
  public fiveCount: WritableSignal<number> = signal(0);
  public sixCount: WritableSignal<number> = signal(0);

  ngOnInit(): void {

  }

  public rollDice(): void {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    this.diceValue.set(diceValue);

    switch(diceValue) {
      case 1: {
        this.oneCount.update((value) => value + 1);
        break;
      }

      case 2: {
        this.twoCount.update((value) => value + 1);
        break;
      }

      case 3: {
        this.threeCount.update((value) => value + 1);
        break;
      }

      case 4: {
        this.fourCount.update((value) => value + 1);
        break;
      }

      case 5: {
        this.fiveCount.update(value => value + 1);
        break;
      }

      case 6: {
        this.sixCount.update(value => value + 1);
        break;
      }
    }
  }
}
