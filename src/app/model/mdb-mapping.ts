import { MdbMovie } from './mdb-movie';
import { MdbResponse } from './mdb-response';
import { Movie } from './movie';

const imgUrl = 'https://image.tmdb.org/t/p/w500';
const imgPlaceholder = 'https://via.placeholder.com/500x750';

export function mdbMovieToMovie(mdbMovie: MdbMovie): Movie {
  return {
    id : mdbMovie.id,
    title: mdbMovie.title,
    poster: mdbMovie.poster_path ? imgUrl + mdbMovie.poster_path : imgPlaceholder,
    releaseDate: mdbMovie.release_date
  };
}

export function mdbResponseToMovies(mdbResponse: MdbResponse): Movie[] {
  return mdbResponse.results.map(mdbMovieToMovie);
}
