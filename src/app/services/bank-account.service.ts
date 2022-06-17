import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppState } from '../reducers';
import { DepositAction } from '../reducers/balance.reducer';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  constructor(private store: Store<AppState>) { }

  get balance$(): Observable<number> {
    return this.store.select('balance');
  }

  deposit(amount: number): Observable<number> {
    this.store.dispatch(new DepositAction(amount))
    return this.balance$.pipe(first());
  }
}
