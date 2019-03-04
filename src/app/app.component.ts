import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.isLoggedIn$ = this.auth.getLoggedInStatus();
  }

  goHome() {
    this.router.navigate(['/'])
  }

  logout() {
    this.auth.logout();
  }
}
