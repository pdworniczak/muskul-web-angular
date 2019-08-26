import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PushupsService } from 'src/app/pushups/services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';
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
  token = this.storageService.getUserToken();

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
}
