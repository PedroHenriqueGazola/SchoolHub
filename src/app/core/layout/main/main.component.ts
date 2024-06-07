import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { InfobarComponent } from '../../components/infobar/infobar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ToolbarComponent,
    InfobarComponent,
    RouterOutlet,
  ],
})
export class MainLayoutComponent {}
