import { Component, OnInit } from '@angular/core';
import { IActor } from '../../models/actor';
import { ActorsService } from '../../services/actors.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actors-dashboard',
  templateUrl: './actors-dashboard.component.html',
  styleUrls: ['./actors-dashboard.component.scss']
})
export class ActorsDashboardComponent implements OnInit {
  actorsArr: IActor[] = [];

  constructor(
    private _actorService: ActorsService,
    private _snackBar: SnackbarService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { 
    this.actorsArr = this._routes.snapshot.data['actors'];
    this.setFirstActorSelected();
  }

  ngOnInit(): void {
    // this.getActorsArr();
    this._actorService.setFirstActorSub$
      .subscribe({
        next: resp => {
          if (resp) {
            this.setFirstActorSelected()
          }
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg);
        }
      })
  }

  getActorsArr() {
    this._actorService.fetchActorsArr()
      .subscribe({
        next: resp => {
          this.actorsArr = resp;
          this.setFirstActorSelected();
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg);
        }
      })
  }

  setFirstActorSelected() {
    this._router.navigate(['/actors', this.actorsArr[0].actorId], {
      queryParams: {
        actorRole: this.actorsArr[0].profession
      }
    })
  }

}
