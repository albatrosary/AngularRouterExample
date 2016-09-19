import { Component } from '@angular/core';

@Component({
  selector: 'my-page-not-found',
  template: `
    <h1>Page Not Found</h1>
    `,
})
export class PageNotFoundComponent {
  constructor () {
    console.log('PageNotFoundComponent');
  }
}
