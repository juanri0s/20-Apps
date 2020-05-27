import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';
import { Status } from './load.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-infinite-image-gallery';
  page: number = 1;
  images: any = [];
  status: Status;

  constructor(private unsplash: UnsplashService) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.status = Status.LOADING;

    this.unsplash.getTopImages(this.page).subscribe(
      (res: any) => {
        this.status = Status.FINISHED;
        if (this.images.length === 0) {
          this.images = res;
        } else {
          this.images.push(...res);
        }
      },
      (_err: any) => {
        this.status = Status.ERROR;
      }
    );
  }

  onScroll(): void {
    this.page++;
    this.getImages()
  }

  onSearch(searchText: string): void {
    this.status = Status.LOADING;
    this.page = 1;
    this.images = [];

    this.unsplash.searchForImage(this.page, searchText).subscribe(
      (res: any) => {
        this.status = Status.FINISHED;

        if (!res) {
          console.log('no data')
          return;
        }

        if (this.images.length === 0) {
          this.images = res.results;
        } else {
          this.images.push(...res.results);
        }
      },
      (_err: any) => {
        this.status = Status.ERROR;
      }
    );
  }

  trackByFn(index: number, _item: any): number {
    return index;
  }
}
