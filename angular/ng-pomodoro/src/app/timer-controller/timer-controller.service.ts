import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerControllerService {

  private timerStatus = new BehaviorSubject('');
  timerStatus$ = this.timerStatus.asObservable();

  updateStatus(status: 'PAUSE' | 'START' | 'RESET'){
    this.timerStatus.next(status);
  }
}
