import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
@Component({
    templateUrl: 'login.component.html',
    styles:[require('./login.component.css')],
})
export class LoginComponent {
  message: string;
  password: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
