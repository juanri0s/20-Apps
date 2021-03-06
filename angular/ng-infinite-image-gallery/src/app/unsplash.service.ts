import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  UNSPLASH_API_URL: string = 'https://api.unsplash.com/';
  PHOTOS_PARM: string = 'photos/'
  CLIENT_ID_PARAM: string = 'client_id=';
  TOKEN: string = '';
  NUM_ON_PAGE_PARAM: string = 'per_page=50'
  PAGE_PARAM: string = 'page='
  SEARCH_PARAM: string = 'search/photos/?query='

  searchText: string = '';

  constructor(private http: HttpClient) { }

  getImages(page: number): Observable<any> {
    return !this.searchText ? this.getTopImages(page) : this.searchForImage(page);
  }

  getTopImages(page: number): Observable<any> {
    return this.http.get<any>(`${this.UNSPLASH_API_URL}${this.PHOTOS_PARM}?${this.NUM_ON_PAGE_PARAM}&${this.PAGE_PARAM}${page}&${this.CLIENT_ID_PARAM}${this.TOKEN}`);
  }

  searchForImage(page: number): Observable<any> {
    return this.http.get<any>(`${this.UNSPLASH_API_URL}${this.SEARCH_PARAM}${this.searchText}&${this.NUM_ON_PAGE_PARAM}&${this.PAGE_PARAM}${page}&${this.CLIENT_ID_PARAM}${this.TOKEN}`);
  }

}
