import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  imports: [FontAwesomeModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  public diceIcon: IconDefinition = faDice;

  public diceValue: WritableSignal<number> = signal(0);

  ngOnInit(): void {

  }

  public rollDice(): void {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    this.diceValue.set(diceValue);
  }
}
