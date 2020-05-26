import { Component } from '@angular/core';
import { GameOption, Status, WinnerMap } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-paper-rock-scissors';
  status: Status = Status.IDLE;
  selection: GameOption;

  ngOnInit(): void {
  }

  test() {
    this.selection = GameOption.ROCK;
    this.chooseWinner();
  }

  chooseWinner() {
    const computerSelection = this.randomPick();
    this.status = WinnerMap[this.selection] === computerSelection ? Status.WON : Status.LOSE;
  }

  randomPick(): GameOption {
    const randomItem = (a: any) => a[random() * a.length | 0];
    const random = () => crypto.getRandomValues(new Uint32Array(1)) [0] / 2**32;
    return randomItem(Object.keys(GameOption));
  }
}
