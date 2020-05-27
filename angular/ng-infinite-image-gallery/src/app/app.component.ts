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
  page: number = 1;
  images: any = [];

  constructor(private unsplash: UnsplashService) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.unsplash.getImages(this.page).subscribe((res: any) => {
      if (this.images.length === 0) {
        this.images = res;
      } else {
        this.images.push(...res);
      }
    });
  }

  onScroll() {
    this.page++;
    this.getImages()
  }

  trackByFn(index: number, _item: any) {
    return index;
  }
}
