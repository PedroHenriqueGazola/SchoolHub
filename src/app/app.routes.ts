import type {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { PageLayoutService } from './core/layout/layout.service';
import { inject } from '@angular/core';
import type { PageLayout } from './core/layout/layout.interface';
import {
  authenticatedGuard,
  unauthenticatedGuard,
} from '@guards/authenticated/authenticated.guard';

export const setLayout = (inputLayout: PageLayout): ResolveFn<void> => {
  return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    inject(PageLayoutService).setLayout(inputLayout);
  };
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    resolve: {
      layout: setLayout('blank'),
    },
    title: 'Login <> SchoolHub',
    canActivate: [unauthenticatedGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    resolve: {
      layout: setLayout('main'),
    },
    title: 'Dashboard <> SchoolHub',
    canActivate: [authenticatedGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        m => m.DashboardPageModule,
      ),
  },
  {
    path: 'alunos',
    resolve: {
      layout: setLayout('main'),
    },
    canActivate: [authenticatedGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        m => m.DashboardPageModule,
      ),
    title: 'Aluno <> SchoolHub',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
