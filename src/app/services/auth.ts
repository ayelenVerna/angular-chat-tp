import { Injectable } from '@angular/core';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User | null = null;
  users: User[] = [];

  constructor() {
    this.loadFromStorage();
  }

  // 🔐 cargar datos seguros
  private loadFromStorage() {
    try {
      const savedUser = localStorage.getItem('currentUser');
      const savedUsers = localStorage.getItem('users');

      this.currentUser = savedUser ? JSON.parse(savedUser) : null;
      this.users = savedUsers ? JSON.parse(savedUsers) : [];

    } catch (error) {
      console.error('Error leyendo localStorage, se limpia automáticamente');

      localStorage.removeItem('currentUser');
      localStorage.removeItem('users');

      this.currentUser = null;
      this.users = [];
    }
  }

  // 📝 registro
  register(user: User) {
    this.users.push(user);
    this.currentUser = user;

    this.saveToStorage();
  }

  // 🔑 login
  login(email: string, password: string): boolean {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (!user) return false;

    this.currentUser = user;
    this.saveToStorage();

    return true;
  }

  // 🚪 logout
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  // 💾 guardar seguro
  private saveToStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}