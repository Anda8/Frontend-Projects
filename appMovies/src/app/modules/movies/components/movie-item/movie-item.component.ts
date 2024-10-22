import { Component, Input } from '@angular/core';
import { IMovie } from '../../../../interfaces/movie';
import { MovieDetailsService } from '../../../../services/movie-details.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  @Input({ required: true }) mov!: IMovie;

  constructor(
    private movieDetailsService: MovieDetailsService,
  ) {}

  getDetails(): void {
    this.movieDetailsService.setSelectedMovie(this.mov); 
  }
}
