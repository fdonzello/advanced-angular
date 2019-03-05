import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageTokenKey = "token";
  // localStorage might not be available, e.g. on the server
  private localStorageAvailable = typeof (localStorage) !== 'undefined' && localStorage;

  isUserLoggedin = new BehaviorSubject<boolean>(
    this.localStorageAvailable ?
      localStorage.getItem(this.localStorageTokenKey) && localStorage.getItem(this.localStorageTokenKey).length > 0
      : false
  );

  constructor() { }

  login(email: string, password: string) {
    this.isUserLoggedin.next(true);
    return of(true);
  }

  logout() {
    if (this.localStorageAvailable) {
      localStorage.removeItem(this.localStorageTokenKey);
    }
    this.isUserLoggedin.next(false);
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.isUserLoggedin.asObservable();
  }
}
