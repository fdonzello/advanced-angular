import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { balanceReducer } from './balance.reducer';
import { nameReducer } from './name.reducer';

export interface AppState {
  balance: number;
  name: string;
}

export const reducers: ActionReducerMap<AppState> = {
  balance: balanceReducer,
  name: nameReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
