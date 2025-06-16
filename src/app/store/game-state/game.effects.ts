import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {catchError, exhaustMap, from, map, of, switchMap} from 'rxjs';
import {PlayingTableService} from '../../services/playing-table.service';

@Injectable()
export class GameStateEffects {
  constructor(
    private actions$: Actions,
    private playingTableService : PlayingTableService
  ){}
  /* loadCards$ = createEffect(() => {
     return this.actions$.pipe(
        ofType(getCardsForTable),
          exhaustMap(() => this.playingTableService.getTablePlayingCards()
            .pipe(
              map(cards => ( loadCardsSuccess({ PlayingCards : cards }))),
              catchError((error) => of(loadCardsFailure({error}))
            )
      ))
     )
  });*/



}
