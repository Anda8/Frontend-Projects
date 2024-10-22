import { Component, OnInit } from '@angular/core';
import { ITvshows } from '../interfaces/tvShow';
import { TvShowsService } from '../services/tv-shows.service';
import { Router } from '@angular/router';
import { TvShowDetailsService } from '../services/tv-show-details.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})
export class TvShowsComponent implements OnInit{
tvShow:ITvshows[]=[];
constructor(
  private __tvShowsServices: TvShowsService,
  // private router: Router,
  private ___tvShowDetailsServices:TvShowDetailsService
){}
ngOnInit(): void {
  this.tvShow=this.__tvShowsServices.getTVShows()
}
onShowSelect(show: ITvshows): void { 
  this.___tvShowDetailsServices.setSelectedShow(show);  

}

}
