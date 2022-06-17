import { Action } from "@ngrx/store";

export function nameReducer(state = '', action: Action): string {
  switch (action.type) {

    case 'Clear Name':
    case 'Logout':
      return '';

    default:
      return state;
  }
}

// TODO: set name
// TODO: clear name

export class ClearNameAction implements Action {
  readonly type = 'Clear Name'
}
