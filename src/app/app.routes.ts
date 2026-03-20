import { Routes } from '@angular/router';

import { LoginComponent } from './views/login/login';
import { ChatsComponent } from './views/chats/chats';
import { HomeComponent } from './views/home/home';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [


  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'chats',
    component: ChatsComponent,
    canActivate: [authGuard]
  },

  {
    path: 'chats/:id',
    component: ChatsComponent,
    canActivate: [authGuard]
  },

  
  { path: '**', redirectTo: 'home' }
];