import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, takeWhile, repeatWhen } from 'rxjs/operators';
import { TimerControllerService } from '../timer-controller/timer-controller.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: []
})
export class TimerComponent implements OnInit {
  status: 'START' | 'PAUSE' | 'RESET';
  time: number;
  timer$: Observable<number>;

  constructor(private timeController: TimerControllerService) {
  }

  onTimerStatusChanged() {
    this.timeController.timerStatus$.subscribe((status: 'START' | 'PAUSE' | 'RESET') => {
      this.status = status;
      switch (status) {
        case 'START':
          // continue timer
          break;
        case 'PAUSE':
          // takeWhile() handles, or we can pause the subscription timer
          break;
        case 'RESET':
          break;
      }
    });
  }

  ngOnInit(): void {
    this.startTimer();
    this.onTimerStatusChanged();
  }

  startTimer() {
    console.log('starting')
    this.time = 60;
    this.timer$ = timer(0, 1000).pipe(
      map(_ => this.time--),
      takeWhile(tick => (tick >= 0 && this.status !== 'PAUSE')),
      // repeatWhen(() => this.status === 'RESET')
    );
  }

}
