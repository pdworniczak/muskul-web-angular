import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'muskul-loading',
  template: `
    <div class="screen-container">
      <mat-spinner></mat-spinner>
    </div>
    <div class="screen-container" style="opacity: .4; background: grey"></div>
  `,
  styles: [
    `
      .screen-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: grid;
        justify-content: center;
        align-content: center;
      }
    `
  ]
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
