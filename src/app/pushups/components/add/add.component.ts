import { Component, OnInit } from '@angular/core';

import { PushupsService } from 'src/app/pushups/services/pushups.service';
import { Scope } from '../../training';

@Component({
  selector: 'muskul-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  scope = Scope;
  loading = true;
  trainingPlan = null;
  training = {};

  constructor(
    private pushupsService: PushupsService,
  ) {}

  ngOnInit() {
    this.pushupsService.getPushupsTrainingPlan().subscribe(plan => {
      this.trainingPlan = plan;
      this.loading = false;
    });
  }
}
