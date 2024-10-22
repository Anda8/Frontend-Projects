import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { Error404Component } from './error404/error404.component';
// import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvShowDetailsComponent } from './tv-shows/tv-show-details/tv-show-details.component';
import { TvShowItemComponent } from './tv-shows/tv-show-item/tv-show-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // MoviesComponent,
    FooterComponent,
    NavbarComponent,
    // MovieItemComponent,
    Error404Component,
    // MovieDetailsComponent,
    TvShowsComponent,
    TvShowDetailsComponent,
    TvShowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
