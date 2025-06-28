import {Injectable} from '@angular/core';
import {exhaustMap, map, mergeMap, Observable, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {giveHint} from './board.actions';
import {BoardService} from '../../services/board.service';
import {selectHintedCards} from './board.selector';

@Injectable()
export class BoardEffects {
  constructor(private actions$ : Actions,
              private router : Router,
              private store : Store,
              private boardService : BoardService) {}

  /*giveHint$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(giveHint),
        exhaustMap(({cards}) =>
          this.boardService.getSetHint(cards).pipe(
            result => {
            }
          )
        )
      )
    )*/
}
