import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageTokenKey = "token";

  isUserLoggedin: BehaviorSubject<boolean>;

  constructor(@Inject(PLATFORM_ID) private platform: any) {
    if (isPlatformServer(this.platform)) {
      this.isUserLoggedin = new BehaviorSubject<boolean>(false);
      return;
    }

    this.isUserLoggedin = new BehaviorSubject<boolean>(
      localStorage.getItem(this.localStorageTokenKey) && localStorage.getItem(this.localStorageTokenKey).length > 0
    );
  }

  login(email: string, password: string) {
    this.isUserLoggedin.next(true);
    return of(true);
  }

  logout() {
    if (isPlatformServer(this.platform)) {
      return;
    }

    localStorage.removeItem(this.localStorageTokenKey);
    this.isUserLoggedin.next(false);
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.isUserLoggedin.asObservable();
  }
}
