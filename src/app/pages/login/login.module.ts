import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login.page';
import { LoginPageService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginPageRoutingModule } from './login-routing.module';
import { ShUiModule } from '../../core/ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    LoginPageRoutingModule,
    ShUiModule,
    TranslateModule,
    PipesModule,
  ],
  providers: [LoginPageService],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
