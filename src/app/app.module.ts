import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieComponent } from './component/movie/movie.component';
import { MdbService } from './service/mdb.service';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detail/:id', component: MovieDetailComponent }
];

@NgModule({
  declarations: [AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieSearchComponent,
    MovieDetailComponent],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule],
  providers: [MdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
