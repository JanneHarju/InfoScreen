import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(password: string): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => 
    {
        if(password == "mellon")
        {
            this.isLoggedIn = true;
        }
        else
        {
            this.isLoggedIn = false;
        }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

