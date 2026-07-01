import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IottPlatform } from 'src/app/shared/models/ottPlatForms';
import { OttPlatFormService } from 'src/app/shared/services/ott-plat-form.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-ott-details',
  templateUrl: './ott-details.component.html',
  styleUrls: ['./ott-details.component.scss']
})
export class OttDetailsComponent implements OnInit {
  ottPlatFormObj !: IottPlatform;
  ottId !: string;

  constructor(
    private _routes: ActivatedRoute,
    private _ottService: OttPlatFormService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getObj();
  }

  getObj() {
    this._routes.params.subscribe(params => {
      this.ottId = params['ottID'];
      if (this.ottId) {
        this._ottService.fetchOttPlatFormById(this.ottId)
          .subscribe({
            next: resp => {
              this.ottPlatFormObj = resp;
            },
            error: err => {
              this._snackbar.openSnackBar(err.msg);
            }
          })
      }
    })
  }

}
