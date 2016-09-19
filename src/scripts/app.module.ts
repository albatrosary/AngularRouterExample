import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent, DefaultComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { AModule } from '../modules/a/a.module';
import { BModule } from '../modules/b/b.module';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule, AModule, BModule, routing],
  declarations: [AppComponent, DefaultComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [
    appRoutingProviders
  ],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
