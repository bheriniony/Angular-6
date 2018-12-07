import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html'
})
export class MovieSearchComponent {
  @Output()
  searchChange = new EventEmitter<string>();
}
