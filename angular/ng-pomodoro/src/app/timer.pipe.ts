import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  pure: true
})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    const hours   = Math.floor(value / 3600)
    const minutes = Math.floor(value / 60) % 60
    const seconds = value % 60

    return [hours, minutes, seconds]
      .map(v => v < 10 ? '0' + v : v)
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }

}
