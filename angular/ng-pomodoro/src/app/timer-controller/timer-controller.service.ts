import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Status } from '../timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerControllerService {

  private start = new Subject<void>();
  start$ = this.start.asObservable();

  private pause = new Subject<void>();
  pause$ = this.pause.asObservable();

  private reset = new Subject<void>();
  reset$ = this.reset.asObservable();

  updateStatus(status: Status) {
    switch(status) {
      case Status.PLAY:
        this.start.next();
        break;
      case Status.PAUSE:
        this.pause.next();
        break;
      case Status.RESET:
        this.reset.next();
        break;
      default:
        break;
    }
  }
}
