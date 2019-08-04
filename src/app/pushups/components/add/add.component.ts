import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PushupsService } from '../../services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';
import { Scope } from '../../training';
import { ROUTES } from '../../../routes/routes.enum';

@Component({
  selector: 'muskul-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  scope = Scope;
  token = this.storageService.getUserToken();
  loading = true;
  trainingPlan = null;
  training = {};
  value = 12;

  constructor(
    private pushupsService: PushupsService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pushupsService.getPushupsTrainingPlan(this.token).subscribe(plan => {
      this.trainingPlan = plan;
      this.loading = false;
    });
  }

  save() {
    const day = this.trainingPlan.day;
    const serie = { count: this.value };

    this.pushupsService.saveTraining(this.token, {
      date: new Date(),
      scope: this.trainingPlan.scope,
      day,
      serie
    });

    this.router.navigate([ROUTES.APP]);
  }
}
