import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent, AComponent, BComponent, CComponent, HomeComponent, AboutComponent } from '../components/home/home'

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, AComponent, BComponent, CComponent, HomeComponent, AboutComponent],
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
