import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `
    <h1 class="title">Markdown Editor</h1>
    <section class="row">
    <textarea [(ngModel)]="inputHtml" name="inputHtml" class="editor"></textarea>
    <div class="display" [innerHTML]="inputHtml | markdown"></div>
    </section>
  `,
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  inputHtml: string;
  constructor() { }
}
