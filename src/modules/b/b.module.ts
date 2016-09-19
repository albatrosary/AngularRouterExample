import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './b.routing';

import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component'

import { AppService } from '../../scripts/app.service'

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
  declarations: [BComponent, BaComponent, BbComponent, BcComponent],
  bootstrap: [BComponent],
  providers: [
    appRoutingProviders,
    AppService
  ],
})
export class BModule {
  constructor() {
    console.log('BModule');
  }
}
