import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  signal,
} from '@angular/core';
import { type SidebarItem, SidebarItems } from './sidebar.type';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public items = SidebarItems;
  public selectedItem = signal<SidebarItem | null>(null);

  public constructor(
    @Inject(DOCUMENT) private _doc: Document,
    private readonly router: Router,
  ) {}

  public ngOnInit() {
    this.setSelectedItem();

    this.router.events.subscribe(() => {
      this.setSelectedItem();
    });
  }

  public goTo(item: SidebarItem): void {
    this.selectedItem.set(item);

    this.router.navigate([item.route]);
  }

  private setSelectedItem(): void {
    const route = this._doc.location.hash;

    if (!route) {
      this.selectedItem.set(null);

      return;
    }

    const item = this.items.find(item => item.route === route.replace('#', ''));

    this.selectedItem.set(item || null);
  }
}
