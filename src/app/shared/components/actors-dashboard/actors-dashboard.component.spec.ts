import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsDashboardComponent } from './actors-dashboard.component';

describe('ActorsDashboardComponent', () => {
  let component: ActorsDashboardComponent;
  let fixture: ComponentFixture<ActorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
