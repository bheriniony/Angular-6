import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieService } from './component/services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MovieComponent, MovieListComponent, MovieSearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
