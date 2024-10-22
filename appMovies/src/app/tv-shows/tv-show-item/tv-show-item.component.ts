import { Component, Input } from '@angular/core';
import { ITvshows } from '../../interfaces/tvShow';
import { TvShowDetailsService } from '../../services/tv-show-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrl: './tv-show-item.component.scss'
})
export class TvShowItemComponent {
  @Input({ required: true }) show!: ITvshows;
constructor( private tvShowDetailsServices :TvShowDetailsService,
private router: Router,
){}
  getCardDetails():void{
    this.tvShowDetailsServices.setSelectedShow(this.show)
    // this.router.navigate(['/tv-show-details']);
  }
  truncateText(text: string, limit: number): string {
    if (text.length > limit) {
      return text.substring(0, limit) + '          ...more';
    }
    return text;
  }
}
