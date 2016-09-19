import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent, DefaultComponent } from './app.component'
import { PageNotFoundComponent } from './pagenotfound.component';

import { AppService } from './app.service'

/* Invalid configuration of route 'a': redirectTo and children cannot be used together */
const appRoutes: Routes = [
  { path: '', redirectTo: '/c/c', pathMatch: 'full'},
  {
    path: 'app',
    component: DefaultComponent,
    canActivate: [AppService],
    canActivateChild: [AppService],
    canLoad: [AppService],
    canDeactivate: [AppService]
  },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
