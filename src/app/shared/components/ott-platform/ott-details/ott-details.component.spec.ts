import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttDetailsComponent } from './ott-details.component';

describe('OttDetailsComponent', () => {
  let component: OttDetailsComponent;
  let fixture: ComponentFixture<OttDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OttDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
