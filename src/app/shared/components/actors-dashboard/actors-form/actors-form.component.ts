import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { IActor } from 'src/app/shared/models/actor';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { FormUtilityService } from 'src/app/shared/services/form-utility.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.scss']
})
export class ActorsFormComponent implements OnInit {
  isInEditMode: boolean = false;
  actorForm !: FormGroup
  countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Japan",
    "Kenya",
    "Mexico",
    "Russia",
    "South Africa",
    "United Kingdom",
    "United States",
    "South Korea",
  ];
  actorId !: string;
  actorObj !: IActor;

  constructor(
    private _ActorService: ActorsService,
    private _snackBar: SnackbarService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _formUtilityService: FormUtilityService
  ) { }

  ngOnInit(): void {
    this.createActorForm()
    this.addMovieControls()
    this.isAddressSameHandler()
    this.currentAddressHandler()
    this.patchActor()
  }

  createActorForm() {
    this.actorForm = new FormGroup({
      actorName: new FormControl(null, Validators.required),
      profession: new FormControl(null, Validators.required),
      biography: new FormControl(null, Validators.required),
      profileImage: new FormControl(null, Validators.required),
      experienceYears: new FormControl(null, Validators.required),
      isActive: new FormControl(true),
      movies: new FormArray([]),
      address: new FormGroup({
        current: new FormGroup({
          country: new FormControl('India'),
          state: new FormControl(null, Validators.required),
          city: new FormControl(null, Validators.required),
          zipcode: new FormControl(null, Validators.required)
        }),
        permanent: new FormGroup({
          country: new FormControl(null, Validators.required),
          state: new FormControl(null, Validators.required),
          city: new FormControl(null, Validators.required),
          zipcode: new FormControl(null, Validators.required)
        })
      }),
      isAddressSame: new FormControl({ value: null, disabled: true }, Validators.required),
    })
  }

  get f() {
    return this.actorForm.controls;
  }

  get currentAddControls() {
    return (this.f['address'].get('current') as FormGroup).controls
  }

  get moviesArr() {
    return this.f['movies'] as FormArray
  }

  addMovieControls() {
    if (this.f['movies'].valid) {
      let controls = new FormControl(null, Validators.required)
      this.moviesArr.push(controls);
    }
  }

  onRemoveMoviesControls(i: number){
    this.moviesArr.removeAt(i);
  }

  isAddressSameHandler() {
    this.f['address'].get('current')?.valueChanges
      .subscribe(val => {
        if (this.f['address'].get('current')?.valid) {
          this.f['isAddressSame'].enable();
        } else {
          this.f['isAddressSame'].reset();
          this.f['isAddressSame'].disable();
        }
      })
  }

  currentAddressHandler() {
    this.f['isAddressSame'].valueChanges
      .subscribe(val => {
        if (val) {
          let currentAddress = this.f['address'].get('current')?.value
          this.f['address'].get('permanent')?.patchValue(currentAddress);
          this.f['address'].get('permanent')?.disable()
        } else if (this.isInEditMode && !val) {
          this.f['address'].get('permanent')?.enable();
          this.f['address'].get('permanent')?.patchValue(this.actorObj.address.permanent);
        }
        else {
          this.f['address'].get('permanent')?.reset()
          this.f['address'].get('permanent')?.enable();
        }
      })
  }

  onAddActor() {
    if (this.actorForm.invalid) {
      this.actorForm.markAllAsTouched()
    } else {
      let newActor: IActor = { ...this.actorForm.getRawValue(), actorId: Date.now().toString() }
      this._ActorService.addActor(newActor)
        .subscribe({
          next: resp => {
            this._snackBar.openSnackBar(resp.msg);
            this.actorForm.reset();
            this._router.navigate(['actors']);
            this._ActorService.setFirstActorSub$.next(true);
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg)
          }
        })
    }
  }

  patchActor() {
    this.actorId = this._routes.snapshot.paramMap.get('actorID')!
    if (this.actorId) {
      this.isInEditMode = true;
      this._ActorService.getActorById(this.actorId)
        .subscribe({
          next: resp => {
            this.actorObj = resp;
            this.actorForm.patchValue(resp);
            this._formUtilityService.patchFormArray(resp.movies, this.moviesArr)
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg);
          }
        })
    }
  }

  onUpdateActor() {
    if (this.actorForm.invalid) {
      this.actorForm.markAllAsTouched()
    } else {
      let updatedActor: IActor = { ...this.actorForm.getRawValue(), actorId: this.actorId}
      this._ActorService.updateActor(updatedActor)
        .subscribe({
          next: resp => {
            this._snackBar.openSnackBar(resp.msg);
            this.actorForm.reset();
            this._router.navigate(['actors']);
            this._ActorService.setFirstActorSub$.next(true);
          },
          error: err => {
            this._snackBar.openSnackBar(err.msg)
          }
        })
    }
  }

}