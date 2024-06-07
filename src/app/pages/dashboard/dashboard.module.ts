import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard.page';
import { DashboardPageService } from './dashboard.service';
import { DashboardPageRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [CommonModule, DashboardPageRoutingModule],
  providers: [DashboardPageService],
  declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
