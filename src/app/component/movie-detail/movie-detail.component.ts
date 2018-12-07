import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component ({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent {
  @Input() movie: Movie ;
}

