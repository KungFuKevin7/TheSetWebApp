import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {AuthService} from '../../services/auth.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { removeUser, setUser} from './user.actions';
import {from, switchMap, withLatestFrom} from 'rxjs';

export class UserEffects {
/*
  constructor(
    private actions$ : Actions,
    private store : Store<AppState>,
    private authService : AuthService
  ){}*/

/*  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUser),
      switchMap(()=> from(this.authService))
    ))*/
/*
  saveUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setUser, removeUser),
        withLatestFrom(this.store.select(selectAllUsers)),
        switchMap(([action, user]) => from(this.authService.login(user)))
      ),
    {dispatch: false}
  )*/
}
