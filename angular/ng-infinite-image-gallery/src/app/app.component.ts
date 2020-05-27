import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-infinite-image-gallery';
  images$: Observable<any>

  constructor(private unsplash: UnsplashService) {
  }

  ngOnInit(): void {
    this.unsplash.getImages().subscribe((images) => {
      this.images$ = images;
      console.log('images', this.images$)
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }}
