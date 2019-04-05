import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIndustryComponent } from './job-industry.component';

describe('JobIndustryComponent', () => {
  let component: JobIndustryComponent;
  let fixture: ComponentFixture<JobIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
