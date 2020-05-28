import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TriviaResponse } from './trivia.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  API_URL: string = 'https://opentdb.com/api.php?amount=10';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<TriviaResponse> {
    return this.http.get<TriviaResponse>(this.API_URL)
  }
}
