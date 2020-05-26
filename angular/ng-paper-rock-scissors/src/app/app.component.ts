import { Component } from '@angular/core';
import { GameOption, Status, WinnerMap, GameTracker } from './game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-paper-rock-scissors';
  status: Status;
  selection: GameOption;

  winLossTracker: GameTracker;

  ngOnInit(): void {
    this.winLossTracker = this.getTrackerFromStorage();
  }

  setSelection(selection: GameOption) {
    this.selection = selection;
    this.chooseWinner();
  }

  chooseWinner() {
    const computerSelection = this.randomPick();
    if (computerSelection !== this.selection) {
      if (WinnerMap[computerSelection] === this.selection) {
        this.status = Status.WIN;
        this.winLossTracker.wins++;
      } else {
        this.status = Status.LOSE;
        this.winLossTracker.losses++;
      }
    } else {
      this.status = Status.TIE;
      return;
    }

    this.updateTrackerInStorage(this.winLossTracker);
  }

  randomPick(): GameOption {
    const randomItem = (a: any) => a[random() * a.length | 0];
    const random = () => crypto.getRandomValues(new Uint32Array(1)) [0] / 2**32;
    return randomItem(Object.keys(GameOption));
  }

  updateTrackerInStorage(tracker: GameTracker) {
    localStorage.setItem('tracker', JSON.stringify(tracker));
  }

  getTrackerFromStorage() {
    const item = JSON.parse(localStorage.getItem('tracker'));
    let tracker: GameTracker;
    if (item) {
      tracker = {
        wins: item.wins,
        losses: item.losses
      }
    } else {
      tracker = {
        wins: 0,
        losses: 0
      }
    }

    return tracker ? tracker : new GameTracker();
  }
}
