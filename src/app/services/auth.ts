import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private STORAGE_KEY = 'currentUser';

  login(user: any) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getUser() {
    const user = localStorage.getItem(this.STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }
}