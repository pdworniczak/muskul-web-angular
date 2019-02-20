import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  login() {
    console.log('login');

    return true;
  }

  logout() {
    console.log('logout');
  }
}
