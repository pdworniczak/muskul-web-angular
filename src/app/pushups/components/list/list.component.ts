import { Component, OnInit } from '@angular/core';

import { PushupsService } from '../../services/pushups.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pushups = null;
  test = 'TEST';

  constructor(private pushupsService: PushupsService) { }

  ngOnInit() {
    this.pushups = this.pushupsService.getPushups();
  }
}
