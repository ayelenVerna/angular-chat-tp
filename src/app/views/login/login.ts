import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  isLogin: boolean = true;

  email: string = '';
  password: string = '';
  name: string = '';

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  submit() {
    if (this.isLogin) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (!user) {
      alert('Usuario o contraseña incorrectos');
      return;
    }

    // 🔥 guardar sesión
    this.auth.login(user);

    // 🔥 navegación limpia
    this.router.navigateByUrl('/chats');
  }

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Completar todos los campos');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const exists = users.find((u: any) => u.email === this.email);

    if (exists) {
      alert('El usuario ya existe');
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: this.name,
      email: this.email,
      password: this.password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuario creado');
    this.isLogin = true;
  }
}