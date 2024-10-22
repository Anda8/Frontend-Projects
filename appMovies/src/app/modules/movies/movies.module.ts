import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
