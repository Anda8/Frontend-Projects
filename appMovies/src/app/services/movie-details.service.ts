import { EventEmitter, Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private selectedMovie!: IMovie;

  setSelectedMovie(movie: IMovie) {
    this.selectedMovie = movie;
  }

  getSelectedMovie(): IMovie {
    return this.selectedMovie;
  }
  constructor() { }
}
