import { Component } from '@angular/core';
import { TimerControllerService } from './timer-controller.service';
import { Status } from '../timer.model';

@Component({
  selector: 'app-timer-controller',
  template: `
    <div class="controller-container">
      <button id="pause" (click)="updateStatus(pause)">Pause</button>
      <button id="play" (click)="updateStatus(play)">Play</button>
      <button id="reset" (click)="updateStatus(reset)">Reset</button>
    </div>
  `,
  styleUrls: ['./timer-controller.component.css'],
})
export class TimerControllerComponent {
  constructor(private timeController: TimerControllerService) { }
  play = Status.PLAY;
  pause = Status.PAUSE;
  reset = Status.RESET;

  updateStatus(status: Status) {
    this.timeController.updateStatus(status)
  }
}
