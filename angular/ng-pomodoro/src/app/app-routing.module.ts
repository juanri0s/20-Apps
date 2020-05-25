import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerControllerService } from './timer-controller/timer-controller.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
