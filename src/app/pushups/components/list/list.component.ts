import { Component, OnInit } from '@angular/core';

import { PushupsService } from '../../services/pushups.service';
import { Scope, Test, Training } from '../../training';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pushups = [];
  Scope = Scope;
  loading = true;

  constructor(private pushupsService: PushupsService) {}

  ngOnInit() {
    this.pushupsService.getAllPushupsTrainings().subscribe(pushups => {
      this.pushups = pushups;
      this.loading = false;
    });
  }

  remove(training: Training | Test) {
    this.pushupsService.removeTraining(training);
  }
}
