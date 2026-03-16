import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Login } from './views/login/login';
import { Chats } from './views/chats/chats';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    { path: "chats", component: Chats }
];
