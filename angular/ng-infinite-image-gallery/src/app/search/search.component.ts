import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();
  searchText = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.searchText.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(searchText => {
      this.searched.emit(searchText);
    });
  }

}
