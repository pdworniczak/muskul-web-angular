import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import {
  Training,
  Scope,
  Test,
  Plan,
  TestPlan,
  Serie3Day,
  Serie5Day
} from '../training';
import pushupsPlan from '../pushups.json';
import { mockData } from './mock.pushups';

@Injectable({
  providedIn: 'root'
})
export class PushupsService {
  constructor() {}

  getPushupsPlan() {
    return pushupsPlan;
  }

  getAllPushupsTraining(token: string): Observable<Array<Training | Test>> {
    return of(mockData[token].trainings).pipe(delay(1000));
  }

  getLatsPushupsTraining(token: string): Observable<Training | Test> {
    const latestTraing = mockData[token].trainings.reduce(
      (latestTraining, training) => {
        if (latestTraining) {
          return training.date < latestTraing.date ? training : latestTraing;
        }

        return training;
      },
      null
    );

    return of(latestTraing).pipe(delay(1000));
  }

  getCurrentPushupTrainingPlan(token: string): Observable<Plan> {
    return this.getLatsPushupsTraining(token).pipe(
      map(training => {
        if (training.scope === Scope.TEST) {
          return this._getTrainingAfterTest(<Test>training);
        } else {
          this._getTraining(training);
        }
      })
    );
  }

  getPushups(): any {
    return [];
  }

  _getTrainingAfterTest(training: Test): Plan {
    const [scope, trainingWeek] = this._findScopePlan(training.serie.count);

    return {
      scope: Scope[scope],
      day: 1,
      serie: trainingWeek[1]
    };
  }

  _getTraining(training: Training): Plan | TestPlan {
    if (this._isTrainingSucced(training)) {
      // TODO finish this
    } else {
      return {
        scope: training.scope,
        day: training.day,
        serie: pushupsPlan[training.scope][training.day]
      };
    }
  }

  _isTrainingSucced(training: Training | Test): boolean {
    if (training.scope === Scope.TEST) {
      return true;
    }

    const plan = pushupsPlan[training.scope][training.day];

    return Object.entries(training.serie).every(
      ([no, score]) => score >= plan[no]
    );
  }

  _findScopePlan(
    score: number
  ): [Scope, { [day: number]: Serie3Day | Serie5Day }] {
    const [scope, trainingWeek] = Object.entries(pushupsPlan).find(
      ([scope, trainingWeek]) => {
        const [low, high] = scope.split('-');

        return score < +high && score > +low;
      }
    );

    return [Scope[scope], trainingWeek];
  }
}
