import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component'

const aRoutes: Routes = [
  { path: 'b', component: BComponent, children: [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: BaComponent },
    { path: 'b', component: BbComponent },
    { path: 'c', component: BcComponent }
  ]}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(aRoutes);
