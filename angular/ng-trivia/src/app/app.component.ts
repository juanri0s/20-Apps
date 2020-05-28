import { Component, OnInit } from '@angular/core';
import { Score, Trivia, TriviaResponse } from './trivia.model';
import { TriviaService } from './trivia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-trivia';
  questions: Trivia[];
  currentQuestionIndex = 0;
  message: string = '';
  score: Score;

  constructor(private trivia: TriviaService) {
  }

  ngOnInit(): void {
    this.score = {
      correct: 0,
      incorrect: 0
    }

    this.getQuestions();
  }

  getQuestions() {
    this.trivia.getQuestions().subscribe(
      (res: TriviaResponse) => {
        this.questions = res.results;
      }
    );
  }

  onAnswered(isCorrect: boolean): void  {
    isCorrect ? this.updateCorrect() : this.updateIncorrect();
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.message = 'No more questions';
    }
  }

  updateCorrect(): void  {
    this.score.correct++;
  }

  updateIncorrect(): void {
    this.score.incorrect++;
  }

  reset() {
    this.message = '';
    this.currentQuestionIndex = 0;
    this.getQuestions();
  }
}
