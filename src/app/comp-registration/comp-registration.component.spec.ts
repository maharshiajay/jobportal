import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRegistrationComponent } from './comp-registration.component';

describe('CompRegistrationComponent', () => {
  let component: CompRegistrationComponent;
  let fixture: ComponentFixture<CompRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
