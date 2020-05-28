import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { QuestionComponent } from './question/question.component';
import { ScoreTrackerComponent } from './score-tracker/score-tracker.component';
import { QuestionOptionsComponent } from './question-options/question-options.component';
import { DecodePipe } from './decode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectComponent,
    ScoreTrackerComponent,
    QuestionComponent,
    QuestionOptionsComponent,
    DecodePipe
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
