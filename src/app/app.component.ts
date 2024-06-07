import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutService } from './core/layout/layout.service';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './core/layout/blank/blank.component';
import { MainLayoutComponent } from './core/layout/main/main.component';
import { PageLayout } from './core/layout/layout.interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
})
export class AppComponent {
  public pageLayout = signal<PageLayout | null>(null);

  public constructor(public readonly pageLayoutService: PageLayoutService) {}

  public ngOnInit(): void {
    this.pageLayoutService.layout$.subscribe(layout => {
      this.pageLayout.set(layout);
    });
  }
}
