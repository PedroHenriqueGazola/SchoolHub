import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PageLayout } from './layout.interface';

@Injectable({
  providedIn: 'root',
})
export class PageLayoutService {
  public layout$ = new Subject<PageLayout>();

  setLayout(value: PageLayout) {
    this.layout$.next(value);
  }
}
