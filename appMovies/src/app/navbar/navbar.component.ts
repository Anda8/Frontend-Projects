import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  movieId!: number;
  loggedIn: boolean;

  constructor(
    private movieService: MoviesService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loggedIn = this.authService.isLoggedIn;
  }

  viewMovieDetails(movieId: number) {
    this.movieService.setSelectedMovieId(movieId);
  }
  logout(){
    this.authService.isLoggedIn = false;
    localStorage.removeItem('LoggedIn');
    this.router.navigate(['/auth/login']);
    this.loggedIn = false;
  }
}
