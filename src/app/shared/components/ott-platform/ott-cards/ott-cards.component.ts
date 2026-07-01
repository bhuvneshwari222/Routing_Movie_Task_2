import { Component, Input, OnInit } from '@angular/core';
import { IottPlatform } from 'src/app/shared/models/ottPlatForms';

@Component({
  selector: 'app-ott-cards',
  templateUrl: './ott-cards.component.html',
  styleUrls: ['./ott-cards.component.scss']
})
export class OttCardsComponent implements OnInit {
  @Input() getOttObj !: IottPlatform;

  constructor() { }

  ngOnInit(): void {
  }

}
