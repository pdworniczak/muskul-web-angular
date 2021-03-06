import { Component, Input } from '@angular/core';
import { PushupsService } from 'src/app/pushups/services/pushups.service';
import { Scope } from '../../training';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/routes/routes.enum';

@Component({
  selector: 'muskul-add-test',
  templateUrl: './addTest.component.html'
})
export class AddTestComponent {
  value = 0;

  constructor(private pushupsService: PushupsService, private router: Router) {}

  save() {
    this.pushupsService.saveTraining({
      date: new Date(),
      scope: Scope.TEST,
      day: 0,
      serie: { count: this.value }
    });

    this.router.navigate([ROUTES.APP]);
  }
}