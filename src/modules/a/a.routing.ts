import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent, AaComponent, AbComponent, AcComponent } from './a.component'

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
  { path: 'a', component: AComponent, children: [
    { path: 'a', component: AaComponent },
    { path: 'b', component: AbComponent },
    { path: 'c', component: AcComponent }
  ]}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(aRoutes);
