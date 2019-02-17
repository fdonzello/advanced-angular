import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedin = false;

  constructor() { }

  login(email: string, password: string) {
    this.isUserLoggedin = true;
    return of(true);
  }
}
