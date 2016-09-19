import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component'

/* Invalid configuration of route 'a': redirectTo and children cannot be used together */
// const appRoutes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full'},
//   { path: 'a', component: AaComponent, children: [
//     {path: 'b', component: BComponent },
//     {path: 'c', component: CComponent }
//   ]},
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent }
// ];
const aRoutes: Routes = [
  { path: 'b', component: BComponent, children: [
    { path: 'a', component: BaComponent },
    { path: 'b', component: BbComponent },
    { path: 'c', component: BcComponent }
  ]}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(aRoutes);
