import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';
import { MdbService } from './service/mdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  searching = false;
  movies$: Observable<Movie[]>;

  constructor(private mdbService: MdbService) {}

  update(search) {
    this.searching = search && search.length > 1;
    this.movies$ = this.mdbService.searchMovies(search);
  }
}
