import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../../../interfaces/movie';
import { MoviesService } from '../../../../services/movies.service';
import { MovieDetailsService } from '../../../../services/movie-details.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {

movies:IMovie[]=[];
isLoading:boolean=false;
constructor(
  private __moviesServices: MoviesService,
  private movieDetailsService: MovieDetailsService
){}
ngOnInit(): void {
  this.getMovies();
}
onMovieSelect(movie: IMovie): void {
  this.movieDetailsService.setSelectedMovie(movie);
}
getMovies(){
  this.isLoading=true;
  setTimeout(() => {
    this.isLoading=false;
    this.movies = this.__moviesServices.getMovies();
  }, 3000);
}
}
