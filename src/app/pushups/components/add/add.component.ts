import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PushupsService } from 'src/app/pushups/services/pushups.service';
import { UserService } from 'src/app/users/services/user.firebase.service';
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
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pushupsService.getPushupsTrainingPlan().subscribe(plan => {
      this.trainingPlan = plan;
      this.loading = false;
    });
  }
}
