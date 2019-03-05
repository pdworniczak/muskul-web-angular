import { TestBed } from '@angular/core/testing';

import { PushupsService } from './pushups.service';

describe('PushupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushupsService = TestBed.get(PushupsService);
    expect(service).toBeTruthy();
  });
});
