
import {UserState} from './UserState';
import {createReducer, on} from '@ngrx/store';
import { setUser} from './user.actions';
import {Users} from '../../../models/Users';

export const initialUserState : UserState = {
  users : new Users(),
  error : null,
  status : 'pending'
}
export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { jwt }) => ({
    ...state,
    user : {...state.users, jwt : jwt}
  })),
/*  on(getUser, (state) =>  ({
    ...state,
    error : null
  }))*/
)
