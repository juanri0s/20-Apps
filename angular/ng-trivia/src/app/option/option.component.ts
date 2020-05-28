import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Answer } from '../trivia.model';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class Option implements OnChanges {
  @Input() correct: string;
  @Input() incorrect: string[];
  @Output() answered = new EventEmitter<boolean>(false);
  answers: Answer[] = [];

  constructor() {
  }

  ngOnChanges(): void {
    this.incorrect.push(this.correct);

    this.incorrect.forEach((a: string) => {
      const answer: Answer = {
        answer: a,
        isCorrect: false
      }

      if (answer.answer === this.correct) {
        answer.isCorrect = true;
      }

      this.answers.push(answer)
      this.shuffle(this.answers)
    })

  }

  onAnswered(isCorrect: boolean): void {
    this.answered.emit(isCorrect);
  }

  shuffle(arr: Answer[]): void {
    arr.sort(() => Math.random() - 0.5);
  }

}
