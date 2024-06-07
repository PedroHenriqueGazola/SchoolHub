import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public loginForm: FormGroup;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  public async signIn(): Promise<void> {
    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.authenticate({ email, password, rememberMe });
  }

  public toggleRememberMe(event: Event): void {
    const { checked } = event.target as HTMLInputElement;

    this.loginForm.patchValue({ rememberMe: checked });
  }
}
