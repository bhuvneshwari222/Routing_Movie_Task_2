import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Imovie } from 'src/app/shared/models/movie';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  isInEditMode: boolean = false;
  movieForm !: FormGroup;
  editMovieID !: string

  constructor(
    private _movieService: MoviesService,
    private _snackBar: SnackbarService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createMovieForm()
    this.patchEditMovieObj()
  }

  createMovieForm() {
    this.movieForm = new FormGroup({
      movieName: new FormControl(null, Validators.required),
      movieStatus: new FormControl('Released'),
      isDubbed: new FormControl(true),
      rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
      genre: new FormControl(null, Validators.required),
      releaseYear: new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      description: new FormControl(null, Validators.required),
      poster: new FormControl(null, Validators.required)
    })
  }

  get f() {
    return this.movieForm.controls
  }

  onAddMovie() {
    if (this.movieForm.invalid) {
      return this.movieForm.markAllAsTouched();
    } else {
      let newMovie: Imovie = { ...this.movieForm.value, movieId: Date.now.toString() }
      this._movieService.addMovie(newMovie)
        .subscribe({
          next: resp => {
            this._snackBar.openSnackBar(resp.msg)
            this.movieForm.reset();
            this._router.navigate(['movies'])
            this._movieService.setFirstElemntSub$.next(true);
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg)
          }
        })
    }
  }

  patchEditMovieObj() {
    this.editMovieID = this._routes.snapshot.paramMap.get('movieId')!;
    if (this.editMovieID) {
      this.isInEditMode = true;
      this._movieService.getMovieById(this.editMovieID)
        .subscribe({
          next: resp => {
            this.movieForm.patchValue(resp);
            if (!resp.isDubbed) {
              this.movieForm.disable()
            }
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg);
          }
        })
    }
  }

  onUpdateMovie() {
    let updatedMovie: Imovie = { ...this.movieForm.value, movieId: this.editMovieID }
    this._movieService.updateMovie(updatedMovie)
      .subscribe({
        next: resp => {
          this._snackBar.openSnackBar(resp.msg);
          this._router.navigate(['/movies', this.editMovieID], {
            queryParams: {
              isDubbed: resp.data.isDubbed
            }
          })
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg)
        }
      })
  }

  canDeactivate() : boolean{
    if(this.movieForm.dirty && this.isInEditMode){
      let confirmation = confirm(`Are you sure, you want to discard this changes?`);
      return confirmation;
    }else{
      return true;
    }
  }

}
