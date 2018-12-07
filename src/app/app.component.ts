import { Component, OnInit } from '@angular/core';
import { movies } from './data-example/movie-data-example';
import { MovieService } from './component/services/movie.service';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie [] = [];

  observableMovies$: Observable<Movie>;

  ngOnInit(): void {
    this.observableMovies$ = this.movieService.get('star+wars');
  }

  update(search) {
    if (search && search.trim()) {
      this.observableMovies$ = this.movieService.get(search.trim().toLowerCase()).pipe(debounceTime(100));
    } else {
      this.movies = movies;
    }
  }
}
