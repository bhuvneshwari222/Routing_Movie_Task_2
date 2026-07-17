import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IActor } from 'src/app/shared/models/actor';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-actors-details',
  templateUrl: './actors-details.component.html',
  styleUrls: ['./actors-details.component.scss']
})
export class ActorsDetailsComponent implements OnInit {
  actorDetails !: IActor;
  actorId !: string;

  constructor(
    private _routes: ActivatedRoute,
    private _actorService: ActorsService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _matdialog: MatDialog
  ) { 
    this._routes.data.subscribe(resp =>{
      this.actorDetails = resp['actor']
    })
  }

  ngOnInit(): void {
    // this.getActor();
  }

  getActor() {
    this._routes.params.subscribe(param => {
      this.actorId = param['actorID']
      if (this.actorId) {
        this._actorService.getActorById(this.actorId)
          .subscribe({
            next: resp => {
              this.actorDetails = resp;
            },
            error: err => {
              this._snackbar.openSnackBar(err.msg)
            }
          })
      }
    })
  }

  onRemoveActor() {
    let config = new MatDialogConfig();
    config.data = `Are you sure you want to remove this actor with id ${this.actorId}`;
    config.disableClose = true;
    config.width = '400px';
    let matDialogRef = this._matdialog.open(GetConfirmComponent, config)
    matDialogRef.afterClosed()
      .subscribe({
        next: resp => {
          if (resp) {
            this._actorService.removeActor(this.actorId)
              .subscribe({
                next: resp => {
                  this._snackbar.openSnackBar(resp.msg);
                  this._router.navigate(['actors']);
                  this._actorService.setFirstActorSub$.next(true);
                },
                error: err => {
                  this._snackbar.openSnackBar(err.msg);
                }
              })
          }
        },
        error: err => {
          this._snackbar.openSnackBar(err.msg);
        }
      })
  }

}
