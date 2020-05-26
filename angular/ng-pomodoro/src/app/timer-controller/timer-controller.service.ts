import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from '../timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerControllerService {

  private timerStatus = new BehaviorSubject('');
  timerStatus$ = this.timerStatus.asObservable();

  updateStatus(status: Status) {
    this.timerStatus.next(status);
  }
}
