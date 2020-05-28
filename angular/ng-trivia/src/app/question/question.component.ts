import { Component, Input } from '@angular/core';
import { Trivia } from '../trivia.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: Trivia
  constructor() { }

}
