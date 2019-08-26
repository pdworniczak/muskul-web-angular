import { Component, Input } from '@angular/core';
import { Training } from '../../training';

@Component({
  selector: 'muskul-add-training',
  templateUrl: './addTraining.component.html'
})
export class AddTrainingComponent {
  @Input('trainingPlan') trainingPlan: Training;

}