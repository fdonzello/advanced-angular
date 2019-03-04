import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageTokenKey = "token";

  isUserLoggedin = new BehaviorSubject<boolean>(
    localStorage.getItem(this.localStorageTokenKey) && localStorage.getItem(this.localStorageTokenKey).length > 0
  );

  constructor() { }

  login(email: string, password: string) {
    this.isUserLoggedin.next(true);
    return of(true);
  }

  logout() {
    localStorage.removeItem(this.localStorageTokenKey);
    this.isUserLoggedin.next(false);
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.isUserLoggedin.asObservable();
  }
}
