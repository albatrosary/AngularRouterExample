import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad } from '@angular/router';

import { Observable }    from 'rxjs/Observable';

export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AppService implements CanActivate, CanActivateChild, CanLoad ,CanDeactivate<CanComponentDeactivate>  {
  // CanActivate to prevent navigation to a route
  canActivate() {
    console.log('AppService#canActivate called');
    return true;
  }

  // CanActivateChild to prevent navigation to a child route
  canActivateChild() {
    console.log('AppService#canActivateChild called');
    return true;
  }

  // CanLoad to prevent asynchronous routing
  canLoad() {
    console.log('AppService#canLoad called');
    return true;
  }

  // CanDeactivate to prevent navigation away from the current route
  canDeactivate(component: CanComponentDeactivate) {
    console.log('AppService#canDeactivate called');
    return true;
  }
}

// @Injectable()
// export class AppResolve implements Resolve {
//   // Resolve to pre-fetch data before activating a route
//   resolve() {
//     console.log('AppCanActivate#canActivate called');
//     return true;
//   }
// }
