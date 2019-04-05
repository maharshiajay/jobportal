import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisPostedJobsComponent } from './dis-posted-jobs.component';

describe('DisPostedJobsComponent', () => {
  let component: DisPostedJobsComponent;
  let fixture: ComponentFixture<DisPostedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisPostedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisPostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
