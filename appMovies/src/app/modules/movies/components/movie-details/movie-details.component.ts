import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../../../interfaces/movie';
import { MovieDetailsService } from '../../../../services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  mov!:IMovie;
  constructor(
    private movieDetailsService: MovieDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}
ngOnInit(): void {
  this.mov = this.movieDetailsService.getSelectedMovie();
  console.log(this.mov);
  this.activatedRoute.queryParams.subscribe((queryParams:any)=>{
    console.log(queryParams);
  });
  this.activatedRoute.fragment.subscribe((f:any)=>{
    console.log(f);
  });
  this.activatedRoute.queryParams.subscribe((queryParams:any)=>{
    console.log(queryParams);
  });
}

}
