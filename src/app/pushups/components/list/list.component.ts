import { Component, OnInit } from '@angular/core';

import { PushupsService } from '../../services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';
import { Scope, Test, Training } from '../../training';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pushups = [];
  Scope = Scope;

  constructor(
    private pushupsService: PushupsService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.pushupsService
      .getAllPushupsTrainings()
      .subscribe(pushups => (this.pushups = pushups));
  }

  remove(training: Training | Test) {
    this.pushupsService.removeTraining(training);
  }
}
