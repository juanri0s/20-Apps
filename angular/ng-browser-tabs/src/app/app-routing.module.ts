import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
