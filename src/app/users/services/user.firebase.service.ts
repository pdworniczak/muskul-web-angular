import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import firebase from '../../../firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router) { }

  login(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password))
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }

  getUid(): string {
    return firebase.auth().currentUser.uid;
  }
}
