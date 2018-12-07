import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
  @Input()
  movies: Movie[];
}
