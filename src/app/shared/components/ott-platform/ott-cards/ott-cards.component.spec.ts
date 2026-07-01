import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttCardsComponent } from './ott-cards.component';

describe('OttCardsComponent', () => {
  let component: OttCardsComponent;
  let fixture: ComponentFixture<OttCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OttCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
