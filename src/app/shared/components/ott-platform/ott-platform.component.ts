import { Component, OnInit } from '@angular/core';
import { IottPlatform } from '../../models/ottPlatForms';
import { OttPlatFormService } from '../../services/ott-plat-form.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ott-platform',
  templateUrl: './ott-platform.component.html',
  styleUrls: ['./ott-platform.component.scss']
})
export class OttPlatformComponent implements OnInit {
  ottPlatFormsArr: IottPlatform[] = []

  constructor(
    private _ottPlatFormService: OttPlatFormService,
    private _snackBar: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getOTTPlatFormArr();
  }

  getOTTPlatFormArr() {
    this._ottPlatFormService.fetchOttPlatFormArr()
      .subscribe({
        next: resp => {
          this.ottPlatFormsArr = resp;
          this._router.navigate(['ottPlatforms', this.ottPlatFormsArr[0].ottId])
        },
        error: err => {
          this._snackBar.openSnackBar(err.msg);
        }
      })
  }

}
