import { TestBed, async, inject } from '@angular/core/testing';

import { MyAppAuthGuard } from './my-app-auth.guard';

describe('MyAppAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAppAuthGuard]
    });
  });

  it('should ...', inject([MyAppAuthGuard], (guard: MyAppAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
