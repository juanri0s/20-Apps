import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { map, takeWhile, takeUntil } from 'rxjs/operators';
import { TimerControllerService } from '../timer-controller/timer-controller.service';
import { Status } from '../timer.model';

export const DEFAULT_TIME = 1800;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  status: Status;
  timer$: Observable<number>;
  time: number;

  constructor(private timeController: TimerControllerService) {
  }

  ngOnInit(): void {
    this.time = DEFAULT_TIME;
    this.timer$ = of(DEFAULT_TIME);

    this.timeController.start$.subscribe(() => {
      this.startTimer();
    });

    this.timeController.reset$.subscribe(() => {
      this.resetTimer();
    });
  }

  resetTimer() {
    this.time = DEFAULT_TIME;
    this.timer$ = of(DEFAULT_TIME);
  }

  startTimer() {
    this.timer$ = timer(0, 1000).pipe(
      map(_ => this.time--),
      takeUntil(this.timeController.pause$),
      takeWhile((t) => t >= 0)
    );
  }
}
