import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from 'src/app/mdb-api-key';
import { Movie } from 'src/app/model/movie';
import {map} from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.themoviedb.org/3/search/movie';

  get(query: string): Observable<any> {
       let params = new HttpParams();
       params = params.append('api_key', apiKey);
       params = params.append('query', query);
       return this.http.get<any>(this.apiUrl, {params}).pipe(map(data => data.results.map(this.fillPosterPath)));
  }

  fillPosterPath(movie) {
    movie.poster_path = 'https://image.tmdb.org/t/p/w500' + (movie.poster_path)  ;
    return movie ;
  }

}
