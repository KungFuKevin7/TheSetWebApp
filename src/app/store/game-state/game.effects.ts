import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {PlayingTableService} from '../../services/playing-table.service';
import {GameService} from '../../services/game.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess, selectGame,
  startGame,
  startGameFailure,
  startGameSuccess
} from './game.actions';
import {catchError, exhaustMap, map, mergeMap, of, switchMap, tap} from 'rxjs';
import {Router} from '@angular/router';
import {setDeck} from '../cards-state/cards.actions';

@Injectable()
export class GameStateEffects {
  constructor(private gameService: GameService, private actions$ : Actions, private router : Router){}

  startGame$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(startGame),
        exhaustMap(() =>
          this.gameService.startGameWithDeck().pipe(
            mergeMap(gameInitDto => [
                startGameSuccess({ gameId : gameInitDto.gameId }),
                setDeck({deck: gameInitDto.deckCards})
              ]),
            catchError(error =>
              of(startGameFailure({error: error}))),
          )
        )
    )
  );

  startGameSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startGameSuccess),
        tap(({gameId}) => {
          this.router.navigate(['/play-game']);
        })
      ),
      {functional:true, dispatch:false}
    );

  selectGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(selectGame),tap(({game}) => {
          this.router.navigate(['/play-game']);
        })
      ),
    {functional:true, dispatch:false}
  )

  loadUserGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserGames),
      switchMap(() =>
        this.gameService.getGamesFromUser().pipe(
          map(games => loadUserGamesSuccess({ games })),
          catchError(error =>
            of(loadUserGamesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
