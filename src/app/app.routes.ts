import { Routes } from '@angular/router';

import { LoginComponent } from './views/login/login';
import { ChatsComponent } from './views/chats/chats';

import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'chats',
    component: ChatsComponent,
    canActivate: [authGuard] // 🔥 PROTEGIDA
  },

  { path: '**', redirectTo: 'login' }
];