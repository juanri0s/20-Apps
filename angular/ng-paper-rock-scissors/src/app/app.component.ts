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
    if (WinnerMap[this.selection] === computerSelection) {
      this.status = Status.WIN;
      this.winLossTracker.winsX++;
    } else {
      this.status = Status.LOSE;
      this.winLossTracker.winsY++;
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
    console.log('got', item)
    let tracker: GameTracker;
    if (item) {
      tracker = {
        winsX: item.winsX,
        winsY: item.winsY
      }
    } else {
      tracker = {
        winsX: 0,
        winsY: 0
      }
    }

    return tracker ? tracker : new GameTracker();
  }
}
