import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {GameService} from '../../services/game.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess, setGameStats, startExistingGame, startExistingGameSuccess,
  startGame,
  startGameFailure,
  startGameSuccess
} from './game.actions';
import {catchError, exhaust, exhaustMap, map, mergeMap, of, switchMap, take, tap, withLatestFrom} from 'rxjs';
import {Router} from '@angular/router';
import {removeCardsFromDeck, setDeck} from '../cards-state/cards.actions';
import {drawInitialCardsFromDeck} from '../board-state/board.actions';
import {selectCurrentGameId} from './game.selectors';
import {selectCardsOnBoard} from '../board-state/board.selector';

@Injectable()
export class GameStateEffects {
  constructor(private gameService: GameService,
              private actions$ : Actions,
              private router : Router,
              private store : Store){}


  //Start Game
  startGame$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(startGame),
        exhaustMap(() =>
          this.gameService.startGameWithDeck().pipe(
            mergeMap(gameStateDto => [
                startGameSuccess({ gameId : gameStateDto.gameId }),
                setDeck({deck: gameStateDto.deckCards}),
                drawInitialCardsFromDeck({boardCards: gameStateDto.cardsOnBoard}),
                setGameStats({gameStats: gameStateDto.gameStats}),
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
        tap(({ gameId }) => {
          this.router.navigate(['/play-game']);
        })
      ),
    { functional: true, dispatch: false }
  );

/*  drawInitialCardsFromDeck$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setDeck),
        map(({ deck }) => {
            const firstDraw = deck.slice(0,12);
            this.store.dispatch(drawInitialCardsFromDeck(
              {boardCards : firstDraw})
            );
        })
      ),
      {functional:true, dispatch:false}
    );*/
/*
  addCardsOnBoard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(drawInitialCardsFromDeck),
        withLatestFrom(this.store.select(selectCardsOnBoard), this.store.select(selectCurrentGameId)),
        map(([action, boardCards, gameId]) => {
          console.log("Hi Hi")
          this.gameService.updateCardsOnBoard(boardCards, gameId).subscribe()
        })
      ),{functional: true, dispatch: false}
  );*/

  //ExistingGame
  startExistingGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startExistingGame),
        exhaustMap(({gameId}) =>
          this.gameService.getExistingGameState(gameId).pipe(
            mergeMap(gameData => [
              startExistingGameSuccess({
                gameId : gameData.gameId,
                deck : gameData.deckCards,
                cardsOnBoard: gameData.cardsOnBoard,
                gameStats: gameData.gameStats
              }),
            ]),
            catchError(error => of(loadUserGamesFailure({error: error}))),
          )
        )
      )
  );

  navigateAfterLoad$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startExistingGameSuccess),
        tap(
          () => {
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
