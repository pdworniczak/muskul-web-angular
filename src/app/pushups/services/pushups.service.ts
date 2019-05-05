import { Injectable } from '@angular/core';

import { PushupsRepo } from '../repo/pushups-repo.service'

import { Training, Scope, Test } from '../training';
import pushups from '../pushups.json';

@Injectable({
  providedIn: 'root'
})
export class PushupsService {

  constructor(repo: PushupsRepo) { }

  getPushups() {
    return pushups;
  }

  getLatsPushupsTraining(): Training | Test {
    return null;
  }

  getCurrentPushupTrainingPlan(): Training | Test {
    return null;
  }

  trainingSucced(): boolean {
    return true;
  }
}
