import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'markdown',
  pure: true
})
export class MarkdownPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return marked(value);
    }
  }

}
