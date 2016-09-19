import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router</h1>
    <ul>
      <li><a routerLink="app" routerLinkActive="active">App Component</a></li>
      <li><a routerLink="a/a" routerLinkActive="active">A Component</a></li>
      <li><a routerLink="b/a" routerLinkActive="active">B Component</a></li>
      <li><a routerLink="xxx" routerLinkActive="active">Non Component</a></li>
    </ul>
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
