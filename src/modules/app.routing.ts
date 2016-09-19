import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent, BComponent, CComponent, HomeComponent, AboutComponent } from '../components/home/home'

/* Invalid configuration of route 'a': redirectTo and children cannot be used together */
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'a', component: AComponent, children: [
    {path: 'b', component: BComponent },
    {path: 'c', component: CComponent }
  ]},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
