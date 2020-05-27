import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  UNSPLASH_URL: string = 'https://api.unsplash.com/photos/';
  CLIENT_ID_PARAM: string = '&client_id=';
  TOKEN: string = 'yr0C-bo7v0bZCOsG7Zji1DrEylC6iGhxzX4nrKMFRTs';
  NUM_ON_PAGE_PARAM: string = '?per_page=50'
  PAGE_PARAM: string = '&page='

  constructor(private http: HttpClient) { }

  getImages(page: number): Observable<any> {
    // return this.http.get<any>(this.UNSPLASH_URL + this.CLIENT_ID_PARAM);
    return this.http.get<any>(`${this.UNSPLASH_URL}${this.NUM_ON_PAGE_PARAM}${this.PAGE_PARAM}${page}${this.CLIENT_ID_PARAM}${this.TOKEN}`);
  }

  searchForImage(search: string) {

  }
}
