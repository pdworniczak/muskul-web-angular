import { Component, OnInit } from '@angular/core';
import { PushupsService } from '../../services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
  selector: 'muskul-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  trainingPlan = null;
  token = this.storageService.getUserToken();

  constructor(
    private pushupsService: PushupsService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.pushupsService
      .getPushupsTrainingPlan(this.token)
      .subscribe(plan => (this.trainingPlan = plan));
  }
}
