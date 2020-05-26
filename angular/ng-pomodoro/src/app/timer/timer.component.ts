import { Component, OnInit } from '@angular/core';
import { Observable, NEVER } from 'rxjs';
import { TimerControllerService } from '../timer-controller/timer-controller.service';
import { Status } from '../timer.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  status: Status;
  timer$: Observable<any>;

  INTERVAL: number = 1000;
  TIME: number = 1800;
  current: number;
  isPaused: boolean = false;

  minutes: string = '00';
  seconds: string = '05';

  constructor(private timeController: TimerControllerService) {
  }

  ngOnInit(): void {
    this.onTimerStatusChanged();
  }

  onTimerStatusChanged() {
    this.timeController.timerStatus$.subscribe((status: Status) => {
        status === Status.PLAY ? this.startTimer()
      : status === Status.PAUSE ? this.pauseTimer()
      : status === Status.RESET ? this.resetTimer()
      : NEVER
    });
  }

  pauseTimer() {
    this.isPaused = true;
  }

  resetTimer() {
    this.minutes = '00';
    this.seconds = '05'
  }

  startTimer() {
    this.isPaused = false;
    const x = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    if ((this.minutes === '00' && this.seconds === '00') || this.isPaused) {
      return;
    }

    console.log('here')
    let mins = parseInt(this.minutes);
    let sec = parseInt(this.seconds);
    if (this.seconds === '00') {
      mins--;
      sec = 59;
    } else {
      sec--;
    }

    this.reformatTime(mins, sec);
  }

  reformatTime(mins: number, sec: number) {
    this.minutes = mins.toString();
    this.seconds = sec.toString();

    if (this.seconds.length === 1) {
      this.seconds = 0 + this.seconds;
    }

    if (this.minutes.length === 1) {
      this.minutes = 0 + this.minutes;
    }
  }
}
