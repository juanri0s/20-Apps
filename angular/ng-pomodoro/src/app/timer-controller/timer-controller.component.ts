import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { BehaviorSubject } from 'rxjs';
import { TimerControllerService } from './timer-controller.service';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css'],
  providers: []
})
export class TimerControllerComponent {
  constructor(private timeController: TimerControllerService) { }

  updateStatus(status: 'PAUSE' | 'START' | 'RESET'){
    console.log()
    this.timeController.updateStatus(status)
  }
}
