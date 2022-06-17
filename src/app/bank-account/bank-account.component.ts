import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-bank-account',
  template: `
  <ng-container *ngIf="(balance$ | async) as balance">
      Balance: {{ balance }}
  </ng-container>

  <button (click)="deposit()">DEPOSIT</button>
  `,
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  balance$ = this._bank.balance$;

  constructor(private _bank: BankAccountService) { }

  ngOnInit() {
  }

  deposit() {
    this._bank.deposit(30).subscribe();
  }
}
