import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import firebase from '../../../firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router) { }

  login(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password))
  }

  logout() {
    // this.storageService.logout();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return firebase.auth().currentUser !== null;
  }
}
