import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { MoviesComponent } from './movies/movies.component';
import { Error404Component } from './error404/error404.component';
// import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvShowDetailsComponent } from './tv-shows/tv-show-details/tv-show-details.component';
import { authGuard } from './Guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent,canActivate:[authGuard] },
  // { path: 'movies', component: MoviesComponent },
  // { path: 'movie-details/:id', component: MovieDetailsComponent },
  // { path: 'movies', component: MoviesComponent,children:[
  //  { path: '/:id', component: MovieDetailsComponent}
  // ] },
  { path: 'tv-shows', component:TvShowsComponent ,canActivate:[authGuard] },
  { path: 'tv-show-details/:id/:name', component:TvShowDetailsComponent ,canActivate:[authGuard] },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule) },
  // { path: 'tv-shows', component:TvShowsComponent ,children:[
  //   { path: '/:id/:name', component: TvShowDetailsComponent}
  //  ] },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
