import { Component } from '@angular/core';

@Component({
  selector: 'app-task-name',
  template: `
    <label for="task-name">Task Name:</label>
    <input id="task-name" type="text" autocomplete="none">
  `,
  styleUrls: ['./task-name.component.css']
})
export class TaskNameComponent {

  taskName: string = '';

  constructor() { }
}
