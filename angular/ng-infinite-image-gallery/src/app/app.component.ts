import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';
import { Status } from './load.model';
import { HttpErrorResponse } from '@angular/common/http';

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
  isSearch = true;

  constructor(private unsplash: UnsplashService) {
  }

  ngOnInit(): void {
    this.getTopImages();
  }

  onScroll(): void {
    this.page++;
    !this.isSearch ? this.getTopImages() : this.getImagesBySearch();
  }

  getTopImages(): void {
    this.isSearch = false;
    this.status = Status.LOADING;

    this.unsplash.getImages(this.page).subscribe(
      (res: any) => {
        this.status = Status.FINISHED;
        if (this.images.length === 0) {
          this.images = res;
        } else {
          this.images.push(...res);
        }
      },
      (_err: HttpErrorResponse) => {
        this.status = Status.ERROR;
      }
    );
  }

  onSearch(searchText: string): void {
    this.page = 1;
    this.isSearch = true;
    this.images = [];
    this.unsplash.searchText = searchText;
    this.getImagesBySearch();
  }

  getImagesBySearch(): void {
    this.status = Status.LOADING;

    this.unsplash.getImages(this.page).subscribe(
      (res: any) => {
        this.status = Status.FINISHED;

        if (!res) {
          return;
        }

        console.log(this.images.length)
        if (this.images.length === 0) {
          this.images = res.results;
        } else {
          this.images.push(...res.results);
        }
      },
      (_err: HttpErrorResponse) => {
        this.status = Status.ERROR;
      }
    );
  }

  trackByFn(index: number, _item: any): number {
    return index;
  }
}
