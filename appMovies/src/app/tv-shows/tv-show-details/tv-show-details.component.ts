import { Component, OnInit } from '@angular/core';
import { ITvshows } from '../../interfaces/tvShow';
import { TvShowDetailsService } from '../../services/tv-show-details.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'] 
})
export class TvShowDetailsComponent implements OnInit {
  show!: ITvshows;
  id!: number;
  name_show!: string;
  
  constructor(
    private tvShowDetailsServices: TvShowDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show = this.tvShowDetailsServices.getSelectedShow();

    console.log(this.activatedRoute.snapshot.params);

    this.id = +this.activatedRoute.snapshot.params['id'];
    this.name_show = this.activatedRoute.snapshot.params['name'];

    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      this.id = +params['id'];
      this.name_show = params['name'];
    });
  }
}
