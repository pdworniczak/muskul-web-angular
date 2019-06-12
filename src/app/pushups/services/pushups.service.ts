import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
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

  getAllPushupsTrainings(token: string): Observable<Array<Training | Test>> {
    return of(mockData[token].trainings).pipe(delay(1000));
  }

  getPreviousPushupsTraining(token: string): Observable<Training | Test> {
    const previouseTraining = mockData[token]
      ? mockData[token].trainings.reduce((latestTraining, training) => {
          if (latestTraining) {
            return training.date > latestTraining.date
              ? training
              : latestTraining;
          }

          return training;
        }, null)
      : null;

    return of(previouseTraining).pipe(delay(1000));
  }

  getPushupsTrainingPlan(token: string): Observable<Plan | TestPlan> {
    return this.getPreviousPushupsTraining(token).pipe(
      map(training => {
        if (!training) {
          return { scope: Scope.TEST };
        } else if (training.scope === Scope.TEST) {
          return this.getTrainingAfterTest(<Test>training);
        } else {
          return this.getTraining(training);
        }
      })
    );
  }

  private getTrainingAfterTest(training: Test): Plan {
    const [scope, trainingWeek] = this.findScopePlan(training.serie.count);

    return {
      scope,
      day: 1,
      serie: trainingWeek[1]
    };
  }

  private getTraining(training: Training): Plan | TestPlan {
    if (this.isTrainingSucced(training)) {
      if (pushupsPlan[training.scope][training.day + 1]) {
        return {
          scope: training.scope,
          day: training.day + 1,
          serie: pushupsPlan[training.scope][training.day + 1]
        };
      }
      return {
        scope: Scope.TEST
      }
    } else {
      return {
        scope: training.scope,
        day: 1,
        serie: pushupsPlan[training.scope][1]
      };
    }
  }

  private isTrainingSucced(training: Training | Test): boolean {
    if (training.scope === Scope.TEST) {
      return true;
    }

    const plan = pushupsPlan[training.scope][training.day];

    return Object.entries(training.serie).every(
      ([no, score]) => score >= plan[no]
    );
  }

  private findScopePlan(
    score: number
  ): [Scope, { [day: number]: Serie3Day | Serie5Day }] {
    const [scopeValue, trainingWeek] = Object.entries(pushupsPlan).find(
      ([scopeValue, trainingWeek]) => {
        const [low, high] = scopeValue.split('-');

        return score < +high && score > +low;
      }
    );

    const scope = Object.entries(Scope).find(([key, val]) => scopeValue === val)[0];

    return [Scope[scope], trainingWeek];
  }
}
