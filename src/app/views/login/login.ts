import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  username = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });

  password = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(4)]
  });

  register() {
    if (this.username.invalid || this.email.invalid || this.password.invalid) return;

    this.authService.register({
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    });

    this.router.navigate(['/chats']);
  }

  login() {
    if (this.email.invalid || this.password.invalid) return;

    const success = this.authService.login(
      this.email.value,
      this.password.value
    );

    if (success) {
      this.router.navigate(['/chats']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}