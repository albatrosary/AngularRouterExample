import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router</h1>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  constructor () {
    console.log('AppComponent');
  }
}

@Component({
  selector: 'my-default',
  template: `
    <h1>Default</h1>
    `,
})
export class DefaultComponent {
  constructor () {
    console.log('DefaultComponent');
  }
}
