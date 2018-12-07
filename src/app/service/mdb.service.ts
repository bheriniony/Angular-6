import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { mdbResponseToMovies, mdbMovieToMovie } from '../model/mdb-mapping';
import { MdbResponse } from '../model/mdb-response';
import { Movie } from '../model/movie';
import { apiKey } from '../secrets/mdb-api-key';
import { MdbMovie } from '../model/mdb-movie';

@Injectable()
export class MdbService {
  constructor(private http: HttpClient) {}

  private searchUrl(search: string): string {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;
  }

  private getUrl(id: number): string{
    return `https://api.themoviedb.org/3/movie/${id}/?api_key=${apiKey}&append_to_response=credits`;
  }

  searchMovies(search: string): Observable<Movie[]> {
    return search && search.length > 1
      ? this.http.get<MdbResponse>(this.searchUrl(search)).pipe(map(mdbResponseToMovies))
      : EMPTY;
  }

  getMovie(id: number): Observable<Movie> {
    return id ? this.http.get<MdbMovie>(this.getUrl(id)).pipe(map(mdbMovieToMovie)) : EMPTY;
  }
}
