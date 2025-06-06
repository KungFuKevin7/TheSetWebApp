import {createAction, props} from '@ngrx/store';
import {Users} from '../../../models/Users';

//Set UserDetails like name and id in store, for easy fetching by components
export const setUser  = createAction(
  '[User Page] Set User',
  props<({jwt : string | null})>()
);

//Get UserDetails like Id and Name
/*export const getUser = createAction(
  '[User Page] Get User'
)*/

//Remove User from the store
export const removeUser = createAction(
  '[User Page] Remove User'
)
