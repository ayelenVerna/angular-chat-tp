import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const user = localStorage.getItem('currentUser');

  // 🔥 SI HAY USUARIO → DEJA PASAR
  if (user && user !== 'null' && user !== 'undefined') {
    return true;
  }

  // 🔥 SI NO → LOGIN
  return router.createUrlTree(['/login']);
};