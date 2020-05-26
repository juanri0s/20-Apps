import { Component } from '@angular/core';
import { TimerControllerService } from './timer-controller.service';
import { Status } from '../timer.model';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css'],
  providers: []
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
