export class TriviaResponse {
  response_code: number;
  results: Trivia[]
}

export class Trivia {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
