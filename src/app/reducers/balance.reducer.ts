import { Action } from "@ngrx/store";

export function balanceReducer(state = 0, action: Action): number {
  switch (action.type) {

    case 'Logout':
      return 0;

    case BalanceActionType.Deposit:
      return state + (action as DepositAction).amount;

    case BalanceActionType.Withdraw:
      return state - (action as WithdrawAction).amount;

    default:
      return state;
  }
}

export enum BalanceActionType {
  Deposit = '[Home Page] Deposit',
  Withdraw = '[Home Page] Withdraw',
}

export class DepositAction implements Action {
  readonly type = BalanceActionType.Deposit;

  constructor(public amount: number) { }
}

export class WithdrawAction implements Action {
  readonly type = BalanceActionType.Withdraw;

  constructor(public amount: number) { }
}
