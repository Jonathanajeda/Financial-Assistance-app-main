// auth/logout.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout() {
    // Implement your logout logic here
    // For example, clear user session, reset authentication state, etc.

    // After logout, navigate to the login page (replace 'login' with your actual login page route)
    this.router.navigate(['login']);
  }
}
