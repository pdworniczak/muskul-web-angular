import { Component, Input } from '@angular/core';
import { Scope } from '../../training';

@Component({
  selector: 'muskul-add-training',
  templateUrl: './addTraining.component.html'
})
export class AddTrainingComponent {
  @Input('scope') scope: Scope;

}