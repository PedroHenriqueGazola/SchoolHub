import { Injectable } from '@angular/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { AUTHENTICATED_USER_KEY } from './auth.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  public getAuthenticatedUser() {
    return this.localStorageService.get(AUTHENTICATED_USER_KEY);
  }

  public authenticate(user: any): void {
    this.localStorageService.set(AUTHENTICATED_USER_KEY, user);
    this.router.navigate(['/dashboard']);
  }

  public unauthenticate(): void {
    this.localStorageService.remove(AUTHENTICATED_USER_KEY);
    this.router.navigate(['/login']);
  }
}
