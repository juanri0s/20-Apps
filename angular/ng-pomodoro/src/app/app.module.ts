import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskNameComponent } from './task-name/task-name.component';
import { TimerComponent } from './timer/timer.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { TimerControllerService } from './timer-controller/timer-controller.service';
import { TimerPipe } from './timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskNameComponent,
    TimerComponent,
    TimerControllerComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TimerControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
