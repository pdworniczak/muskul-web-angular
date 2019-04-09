import { Injectable } from '@angular/core';
import pushups from '../pushups.json';

@Injectable({
  providedIn: 'root'
})
export class PushupsService {

  constructor() { }

  getPushups() {
    return JSON.stringify(pushups);
  }
}
