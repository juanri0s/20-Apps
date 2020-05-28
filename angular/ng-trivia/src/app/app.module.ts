import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { QuestionComponent } from './question/question.component';
import { ScoreTrackerComponent } from './score-tracker/score-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectComponent,
    ScoreTrackerComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
