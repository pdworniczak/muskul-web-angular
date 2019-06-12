import { TestBed } from '@angular/core/testing';

import { PushupsService } from './pushups.service';
import { Scope } from '../training';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('PushupsService', () => {
  let service: PushupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(PushupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get pushups plan', () => {
    expect(service.getPushupsPlan()['31-35'][2][4]).toBe(13);
  });

  it('get previous training', done => {
    service.getPreviousPushupsTraining('token1').subscribe(pushupsTraining => {
      expect(pushupsTraining).toEqual({
        date: new Date('2019-05-01'),
        scope: Scope.TEST,
        day: null,
        serie: {
          count: 12
        }
      });
      done();
    });
  });

  it('get pushup plan training after test', done => {
    service.getCurrentPushupTrainingPlan('token1').subscribe(pushupsPlan => {
      expect(pushupsPlan).toEqual({
        scope: Scope.SCOPE_11_TO_20,
        day: 1,
        serie: {
          '1': 8,
          '2': 9,
          '3': 7,
          '4': 7,
          '5': 8
        }
      });
      done();
    });
  });

  it('get pushup plan training after success', done => {
    service.getCurrentPushupTrainingPlan('token2').subscribe(pushupsPlan => {
      expect(pushupsPlan).toEqual({
        scope: Scope.SCOPE_21_TO_25,
        day: 3,
        serie: {
          '1': 16,
          '2': 21,
          '3': 15,
          '4': 15,
          '5': 21
        }
      });
      done();
    });
  });

  it('get pushup plan failed training', done => {
    service.getCurrentPushupTrainingPlan('token3').subscribe(pushupsPlan => {
      expect(pushupsPlan).toEqual({
        scope: Scope.SCOPE_21_TO_25,
        day: 1,
        serie: {
          '1': 12,
          '2': 17,
          '3': 13,
          '4': 13,
          '5': 17
        }
      });
      done();
    });
  });

  it('get pushup plan no trainings', done => {
    service.getCurrentPushupTrainingPlan('token4').subscribe(pushupsPlan => {
      expect(pushupsPlan).toEqual({
        scope: Scope.TEST
      });
      done();
    });
  });
});
