import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttPlatformComponent } from './ott-platform.component';

describe('OttPlatformComponent', () => {
  let component: OttPlatformComponent;
  let fixture: ComponentFixture<OttPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OttPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
