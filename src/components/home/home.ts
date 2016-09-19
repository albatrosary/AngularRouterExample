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
  selector: 'my-home',
  template: `
    <h1>{{name}} {{1+1}}</h1>
    `,
})
export class HomeComponent {
  public name: string = 'Angular';
  constructor () {
    console.log('HomeComponent');
  }
}

@Component({
  selector: 'my-about',
  template: `
    <h1>About</h1>
    `,
})
export class AboutComponent {
  constructor () {
    console.log('AboutComponent');
  }
}
@Component({
  selector: 'my-a',
  template: `
    <h1>A Component</h1>
    <router-outlet></router-outlet>
    `,
})
export class AComponent {
  constructor () {
    console.log('AComponent');
  }
}
@Component({
  selector: 'my-b',
  template: `
    <h1>B Component</h1>
    `,
})
export class BComponent {
  constructor () {
    console.log('BComponent');
  }
}
@Component({
  selector: 'my-c',
  template: `
    <h1>C Component</h1>
    `,
})
export class CComponent {
  constructor () {
    console.log('CComponent');
  }
}