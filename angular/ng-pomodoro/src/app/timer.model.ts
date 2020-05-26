export class Timer {
  total: string;
  minutes: string;
  seconds: string;
}

export enum Status {
  IDLE = 'IDLE',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  RESET = 'RESET'
}
