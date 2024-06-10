import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
