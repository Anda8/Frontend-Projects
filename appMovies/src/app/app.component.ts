import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  title = 'appMovies';
  shouldRender:boolean=false;
  constructor(
    private router :Router
  ){  }
  ngDoCheck(): void {
    console.log(this.router.url);
    if(this.router.url.includes('auth')){
      this.shouldRender=false;
    }else{
      this.shouldRender=true;
    }
  }
}
