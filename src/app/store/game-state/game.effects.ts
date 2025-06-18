import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {PlayingTableService} from '../../services/playing-table.service';
import {GameService} from '../../services/game.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess,
  startGame,
  startGameFailure,
  startGameSuccess
} from './game.actions';
import {catchError, map, of, switchMap} from 'rxjs';

@Injectable()
export class GameStateEffects {
  constructor(private gameService: GameService, private actions$ : Actions){}

  startGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startGame),
        switchMap(({user}) =>
          this.gameService.startGame(user).pipe(
            map(game => startGameSuccess({game: game})),
            catchError(error =>
              of(startGameFailure({error: error}))),
          )
        )
    )
  );

  loadUserGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserGames),
      switchMap(({ userId }) =>
        this.gameService.getGamesFromUser(userId).pipe(
          map(games => loadUserGamesSuccess({ games })),
          catchError(error =>
            of(loadUserGamesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
