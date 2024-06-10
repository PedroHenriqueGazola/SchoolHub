import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import type { PageLayout } from './layout.interface';

@Injectable({
  providedIn: 'root',
})
export class PageLayoutService {
  public layout$ = new Subject<PageLayout>();

  setLayout(value: PageLayout) {
    this.layout$.next(value);
  }
}
