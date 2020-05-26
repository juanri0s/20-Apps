export enum GameOption {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSOR = 'SCISSOR'
}

export enum Status {
  WIN = 'WIN',
  LOSE = 'LOSE',
  TIE = 'TIE'
}

export class GameTracker {
  wins: number;
  losses: number;
}

export const WinnerMap = {
  'ROCK' : GameOption.PAPER,
  'PAPER' : GameOption.SCISSOR,
  'SCISSOR': GameOption.ROCK
}
