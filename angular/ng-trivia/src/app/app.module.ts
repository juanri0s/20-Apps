import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodePipe } from './decode.pipe';
import { Option } from './option/option.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    Option,
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
