import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-options',
  templateUrl: './question-options.component.html',
  styleUrls: ['./question-options.component.css']
})
export class QuestionOptionsComponent implements OnInit {
  @Input() correct: string;
  @Input() incorrect: string[];

  constructor() { }

  ngOnInit() {
  }

}
