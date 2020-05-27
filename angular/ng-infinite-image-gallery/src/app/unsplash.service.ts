import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  UNSPLASH_URL: string = 'https://api.unsplash.com/photos/';
  CLIENT_ID_PARAM: string = '&client_id=';
  TOKEN: string = '';
  NUM_ON_PAGE_PARAM: string = '?per_page=50'

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    // return this.http.get<any>(this.UNSPLASH_URL + this.CLIENT_ID_PARAM);
    return this.http.get<any>(this.UNSPLASH_URL + this.NUM_ON_PAGE_PARAM +  this.CLIENT_ID_PARAM + this.TOKEN);
  }

  searchForImage(search: string) {

  }
}
