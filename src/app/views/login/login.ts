import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl('')
  });

  isNewUser = false;

  constructor(private router: Router) {}

  toggleMode() {
    this.isNewUser = !this.isNewUser;
  }

  submit() {
    const username = this.loginForm.value.username?.trim();
    if (!username) return;

    // Guardar el usuario en localStorage (simple)
    localStorage.setItem('currentUser', username);

    // Ir a la página de chats
    this.router.navigate(['/chats']);
  }
}
