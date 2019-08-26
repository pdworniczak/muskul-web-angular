import { Component, Input } from '@angular/core';
import { Training, Serie3Day, Serie5Day } from '../../training';
import { PushupsService } from '../../services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/routes/routes.enum';

enum State {
  IN_PROGRES,
  SUCCESS,
  FAILED
}

@Component({
  selector: 'muskul-add-training',
  templateUrl: './addTraining.component.html'
})
export class AddTrainingComponent {
  @Input('trainingPlan')
  trainingPlan: Training;
  currentSerie = 1;
  state = State.IN_PROGRES;

  value: Serie3Day | Serie5Day;
  lastSerie: number;

  constructor(private pushupsService: PushupsService, private storegeService: StorageService, private router: Router) {}

  ngOnInit() {
    this.value =
      Object.keys(this.trainingPlan.serie).length === 3
        ? { 1: this.trainingPlan.serie[1], 2: 0, 3: 0 }
        : { 1: this.trainingPlan.serie[1], 2: 0, 3: 0, 4: 0, 5: 0 };
    this.lastSerie = Object.keys(this.trainingPlan.serie).length;
  }

  nextSerie() {
    if (
      this.value[this.currentSerie] >=
        this.trainingPlan.serie[this.currentSerie] &&
      this.state != State.FAILED
    ) {
      this.value[++this.currentSerie] = this.trainingPlan.serie[
        this.currentSerie
      ];
    } else {
      if (this.state === State.IN_PROGRES) {
        this.save();
        this.state = State.FAILED;
      }
    }
  }

  save() {
    if (this.state == State.IN_PROGRES) {
      this.pushupsService.saveTraining(this.storegeService.getUserToken(), {
        date: new Date(),
        day: this.trainingPlan.day,
        scope: this.trainingPlan.scope,
        serie: this.value
      });
      this.state = State.SUCCESS;
      this.router.navigate([ROUTES.APP]);
    }
  }

  inc(serieNo: number) {
    this.value[serieNo]++;
  }

  dec(serieNo: number) {
    this.value[serieNo]--;
  }

  isSaved() {
    return this.state !== State.IN_PROGRES;
  }

  getResult() {
    return `Training ${State[
      this.state
    ].toLocaleLowerCase()} Result: ${JSON.stringify(this.value)}`;
  }
}
