import { TestBed } from '@angular/core/testing';

import { UnSavedChangesGuardService } from './un-saved-changes-guard.service';

describe('UnSavedChangesGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnSavedChangesGuardService = TestBed.get(UnSavedChangesGuardService);
    expect(service).toBeTruthy();
  });
});
