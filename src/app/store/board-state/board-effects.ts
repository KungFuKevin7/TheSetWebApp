import {Injectable} from '@angular/core';
import {catchError, exhaustMap, map, mergeMap, Observable, of, tap, withLatestFrom} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {requestHint, requestHintFailure, requestHintSuccess} from './board.actions';
import {BoardService} from '../../services/board.service';
import {selectHintedCards} from './board.selector';
import {selectCurrentGameId} from '../game-state/game.selectors';

@Injectable()
export class BoardEffects {
  constructor(private actions$ : Actions,
              private store : Store,
              private boardService : BoardService) {}

  giveHint$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestHint),
        withLatestFrom(this.store.select(selectCurrentGameId)),
        exhaustMap(([action, gameId]) =>
          this.boardService.getSetHint(gameId).pipe(
            map(hint => requestHintSuccess({hintedCards : hint})),
            catchError(err => of(requestHintFailure({ error : err })))
          )
        )
    )
  );
}
