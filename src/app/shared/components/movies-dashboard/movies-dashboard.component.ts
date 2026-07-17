import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Imovie } from '../../models/movie';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit {
  moviesArr: Imovie[] = [];

  constructor(
    private _movieService: MoviesService,
    private _snackBar: SnackbarService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { 
    this.moviesArr = this._routes.snapshot.data['movies'];
    this.setFirstElemntSelected()
  }

  ngOnInit(): void {
    // this.getMoviesArr();
    this._movieService.setFirstElemntSub$
      .subscribe({
        next: resp => {
          if (resp)
            this.setFirstElemntSelected()
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg);
        }
      })
  }

  getMoviesArr() {
    this._movieService.fetchMoviesArr()
      .subscribe({
        next: resp => {
          this.moviesArr = resp;
          this.setFirstElemntSelected();
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg);
        }
      })
  }

  setFirstElemntSelected() {
    this._router.navigate(['/movies', this.moviesArr[0].movieId], {
      queryParams: {
        isDubbed: this.moviesArr[0].isDubbed
      }
    })
  }

  trackByMovieID(index: number, movie: Imovie) {
    return movie.movieId;
  }

}
