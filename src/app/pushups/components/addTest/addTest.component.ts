import { Component, Input } from '@angular/core';
import { PushupsService } from 'src/app/pushups/services/pushups.service';
import { StorageService } from 'src/app/common/services/storage.service';
import { Scope } from '../../training';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/routes/routes.enum';

@Component({
  selector: 'muskul-add-test',
  templateUrl: './addTest.component.html'
})
export class AddTestComponent {

  private token = this.storageService.getUserToken();
  value = 0;

  constructor(private pushupsService: PushupsService, private storageService: StorageService, private router: Router) {}

  save() {
    this.pushupsService.saveTraining(this.token, {
      date: new Date(),
      scope: Scope.TEST,
      day: 0,
      serie: { count: this.value }
    });

    this.router.navigate([ROUTES.APP]);
  }
}