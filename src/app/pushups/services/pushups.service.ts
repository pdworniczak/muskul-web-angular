import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'src/firebase';

import { Training, Scope, Test, Plan, TestPlan, Serie3Day, Serie5Day } from '../training';
import pushupsPlan from '../pushups.json';

@Injectable({
  providedIn: 'root'
})
export class PushupsService {
  private data: Array<Training | Test> = [];

  constructor() {}

  getPushupsPlan() {
    return pushupsPlan;
  }

  getAllPushupsTrainings(): Observable<Array<Training | Test>> {
    return from(
      firebase
        .firestore()
        .collection('pushups')
        .where('uid', '==', firebase.auth().currentUser.uid)
        .get()
        .then(training => {
          const trainings: Array<Training | Test> = [];

          training.forEach(doc => {
            const { date, day, scope, serie } = doc.data();
            trainings.push({ date: date.seconds, day, scope, serie });
          });

          return trainings;
        })
    );
  }

  getPreviousPushupsTraining(): Observable<Training | Test> {
    // const t = from(
    return from(
      firebase
        .firestore()
        .collection('pushups')
        .where('uid', '==', firebase.auth().currentUser.uid)
        // .orderBy('date')
        .limit(1)
        .get()
        .then(training => {
          const trainings: Array<Training | Test> = [];

          training.forEach(doc => {
            const { date, day, scope, serie } = doc.data();
            trainings.push({ date: date.seconds, day, scope, serie });
          });

          return trainings[0];
        })
    );

    // t.subscribe(z => console.log('#', z));

    // const previouseTraining = this.data
    //   ? this.data.reduce((latestTraining, training) => {
    //       if (latestTraining) {
    //         return training.date > latestTraining.date ? training : latestTraining;
    //       }

    //       return training;
    //     }, null)
    //   : null;

    // return of(previouseTraining);
  }

  getPushupsTrainingPlan(): Observable<Plan | TestPlan> {
    return this.getPreviousPushupsTraining().pipe(
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

  saveTraining(training: Training | Test): void {
    if (training) {
      this.data.push(training);
      firebase
        .firestore()
        .collection('pushups')
        .add({ ...training, uid: firebase.auth().currentUser.uid });
    }
  }

  removeTraining(training: Training | Test): void {
    const trainingToRemove = this.data.find(data => training.date === data.date);
    const index = this.data.indexOf(trainingToRemove);
    this.data.splice(index, 1);
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
      };
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

    return Object.entries(training.serie).every(([no, score]) => score >= plan[no]);
  }

  private findScopePlan(score: number): [Scope, { [day: number]: Serie3Day | Serie5Day }] {
    const [scopeValue, trainingWeek] = Object.entries(pushupsPlan).find(([scopeValue]) => {
      const [low, high] = scopeValue.split('-');

      return score <= +high && score >= +low;
    });

    return [Scope[Object.entries(Scope).find(([key, value]) => value === scopeValue)[0]], trainingWeek];
  }
}
