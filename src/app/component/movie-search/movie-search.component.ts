import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html'
})
export class MovieSearchComponent implements OnInit {
  @Output()
  private searchChange = new EventEmitter<string>();

  searchSubject = new Subject<string>();

  ngOnInit() {
    this.searchSubject
      .pipe(
        map(text => (text ? text.trim() : '')),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(text => this.searchChange.emit(text));
  }
}
