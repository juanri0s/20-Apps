import { Component, OnInit } from '@angular/core';
import { Trivia, TriviaResponse } from './trivia.model';
import { TriviaService } from './trivia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-trivia';
  questions: Trivia[];

  constructor(private trivia: TriviaService) {
  }

  ngOnInit(): void {
    this.trivia.getQuestions().subscribe(
      (res: TriviaResponse) => {
        this.questions = res.results;
        console.log(this.questions)
      }
    );
  }
}
