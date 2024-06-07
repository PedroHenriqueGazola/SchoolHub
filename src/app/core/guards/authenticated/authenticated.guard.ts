import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

export const authenticatedGuard: CanActivateFn = () => {
  const authenticatedUser = inject(AuthService).getAuthenticatedUser() as any;

  if (!authenticatedUser) {
    inject(AuthService).unauthenticate();
  }

  return true;
};

export const unauthenticatedGuard: CanActivateFn = () => {
  const authenticatedUser = inject(AuthService).getAuthenticatedUser();
  const router = inject(Router);

  if (authenticatedUser) {
    router.navigate(['/dashboard']);
  }

  return true;
};
