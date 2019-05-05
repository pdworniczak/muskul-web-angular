import { TestBed } from '@angular/core/testing';

import { PushupsService } from './pushups.service';

describe('PushupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: PushupsService = TestBed.get(PushupsService);
    expect(service).toBeTruthy();
  });

  it('get pushups', () => {
    const service: PushupsService = TestBed.get(PushupsService);

    expect(service.getPushups()['31-35'][2][4]).toBe(13);
  })

  it('get last training', () => {
    const service: PushupsService = TestBed.get(PushupsService);

    expect(service.getPushups()['31-35'][2][4]).toBe(13);
  })
});
