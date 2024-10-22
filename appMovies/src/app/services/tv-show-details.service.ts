import { Injectable } from '@angular/core';
import { ITvshows } from '../interfaces/tvShow';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {
  private selectedShow!: ITvshows;

  setSelectedShow(show: ITvshows) {
    this.selectedShow = show;
  }

  getSelectedShow(): ITvshows {
    return this.selectedShow;
  }
  constructor() { }
}
