import { TestBed } from '@angular/core/testing';

import { PushupsService } from './pushups.service';
import { Scope } from '../training';

describe('PushupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushupsService = TestBed.get(PushupsService);
    expect(service).toBeTruthy();
  });

  it('get pushups plan', () => {
    const service: PushupsService = TestBed.get(PushupsService);

    expect(service.getPushupsPlan()['31-35'][2][4]).toBe(13);
  });

  it('get last training', () => {
    const service: PushupsService = TestBed.get(PushupsService);

    service.getLatsPushupsTraining('token1').subscribe(pushupTraining => {
      expect(pushupTraining).toEqual({
        date: new Date('2019-05-01'),
        scope: Scope.TEST,
        day: null,
        serie: {
          count: 12
        }
      });
    });
  });

  it('get pushup plan', () => {
    const service: PushupsService = TestBed.get(PushupsService);

    expect(service.getCurrentPushupTrainingPlan('token1')).toBe();
  });
});
