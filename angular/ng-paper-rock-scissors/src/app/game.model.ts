export enum GameOption {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSOR = 'SCISSOR'
}

export enum Status {
  IDLE = 'IDLE',
  WON = 'WON',
  LOSE = 'LOSE'
}

export class GameTracker {
  winsX: number;
  winsY: number;
}

export const WinnerMap = {
  'ROCK' : GameOption.PAPER,
  'PAPER' : GameOption.SCISSOR,
  'SCISSOR': GameOption.ROCK
}
