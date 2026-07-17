import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDashboardComponent } from './shared/components/home-dashboard/home-dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { MoviesDashboardComponent } from './shared/components/movies-dashboard/movies-dashboard.component';
import { MovieFormComponent } from './shared/components/movies-dashboard/movie-form/movie-form.component';
import { MovieDetailsComponent } from './shared/components/movies-dashboard/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ActorsDashboardComponent } from './shared/components/actors-dashboard/actors-dashboard.component';
import { ActorsFormComponent } from './shared/components/actors-dashboard/actors-form/actors-form.component';
import { ActorsDetailsComponent } from './shared/components/actors-dashboard/actors-details/actors-details.component';
import { OttPlatformComponent } from './shared/components/ott-platform/ott-platform.component';
import { OttDetailsComponent } from './shared/components/ott-platform/ott-details/ott-details.component';
import { OttCardsComponent } from './shared/components/ott-platform/ott-cards/ott-cards.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDashboardComponent,
    PageNotFoundComponent,
    GetConfirmComponent,
    MoviesDashboardComponent,
    MovieFormComponent,
    MovieDetailsComponent,
    ActorsDashboardComponent,
    ActorsFormComponent,
    ActorsDetailsComponent,
    OttPlatformComponent,
    OttDetailsComponent,
    OttCardsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
