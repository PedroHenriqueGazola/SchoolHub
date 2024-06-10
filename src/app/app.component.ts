import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutService } from './core/layout/layout.service';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './core/layout/blank/blank.component';
import { MainLayoutComponent } from './core/layout/main/main.component';
import type { PageLayout } from './core/layout/layout.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BlankLayoutComponent,
    MainLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public pageLayout = signal<PageLayout | null>(null);

  public constructor(public readonly pageLayoutService: PageLayoutService) {}

  public ngOnInit(): void {
    this.pageLayoutService.layout$.subscribe(layout => {
      this.pageLayout.set(layout);
    });
  }
}
