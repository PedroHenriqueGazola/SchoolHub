import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
