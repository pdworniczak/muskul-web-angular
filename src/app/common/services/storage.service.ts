import { Injectable } from '@angular/core';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  login(token) {
    sessionStorage.setItem(TOKEN, token);
  }

  logout() {
    sessionStorage.removeItem(TOKEN);
  }

  getUserToken(): string {
    return sessionStorage.getItem(TOKEN);
  }
}
