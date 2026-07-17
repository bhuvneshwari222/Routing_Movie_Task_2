import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovie } from 'src/app/shared/models/movie';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId !: string;
  movieObj !: Imovie;

  constructor(
    private _movieService: MoviesService,
    private _routes: ActivatedRoute,
    private _snackBar: SnackbarService,
    private _matDialog: MatDialog,
    private _router: Router
  ) { 
    this._routes.data.subscribe(resp =>{
      this.movieObj = resp['movie']
    })
  }

  ngOnInit(): void {
    // this.getMovieObj()
  }

  getMovieObj() {
    this._routes.params.subscribe(param => {
      this.movieId = param['movieID']
      this._movieService.getMovieById(param['movieID'])
        .subscribe({
          next: resp => {
            this.movieObj = resp
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg);
          }
        })

    })
  }

  onRemoveMovie() {
    let config = new MatDialogConfig();
    config.data = `Are you sure you want to remove this movie with id ${this.movieId}`;
    config.disableClose = true;
    config.width = '400px';
    let matDialogRef = this._matDialog.open(GetConfirmComponent, config);
    matDialogRef.afterClosed()
      .subscribe({
        next: resp => {
          if (resp) {
            this._movieService.removeMovie(this.movieId)
              .subscribe({
                next: resp => {
                  this._snackBar.openSnackBar(resp.msg);
                  this._router.navigate(['movies'])
                  this._movieService.setFirstElemntSub$.next(true);
                },
                error: err => {
                  this._snackBar.openSnackBar(err)
                }
              })
          }
        },
        error: err => {
          this._snackBar.openSnackBar(err)
        }
      })
  }

  redirectToEdit(){
    this._router.navigate(['edit'],{
      queryParamsHandling: 'preserve',
      relativeTo: this._routes
    })
  }

}
