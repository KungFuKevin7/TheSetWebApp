import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {UserState} from './UserState';

//Select User
export const selectorUserState = (state: AppState) => state.currentUser;

export const selectUser = createSelector(
  selectorUserState,
  (state : UserState) => state.users
);
