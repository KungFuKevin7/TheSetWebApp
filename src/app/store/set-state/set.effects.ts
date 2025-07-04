import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, exhaustMap, filter, map, mergeMap, of, tap, withLatestFrom} from 'rxjs';
import {
  addCardsToBoard,
  clearHintedCards,
  deselectCard,
  resetSelection,
  selectCard
} from '../board-state/board.actions';
import {selectCardsOnBoard, selectSelectedCards} from '../board-state/board.selector';
import {setFoundSets, validateSet, validateSetFailure, validateSetSuccess} from './set.actions';
import {SetService} from '../../services/set.service';
import {selectCurrentGameId} from '../game-state/game.selectors';
import {setDeck} from '../cards-state/cards.actions';
import {checkStatus, setGameStats} from '../game-state/game.actions';
import {Router} from '@angular/router';

@Injectable()
export class SetEffects {

  constructor(private actions$ : Actions,
              private store : Store,
              private setService : SetService,
              private router : Router,) {}

  validateSetWhenThreeSelected$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectCard, deselectCard),
      withLatestFrom(
        this.store.select(selectSelectedCards),
        this.store.select(selectCurrentGameId)
      ),
      filter(([action, selectedCards]) => selectedCards.length === 3),
      map(([action, selectedCards, gameId]) =>
        //const selectedCardsToValidate =
        //cardsOnBoard.filter(card => selectedCards.includes(card));
        validateSet({ cards: selectedCards,  gameId : gameId})
      )
    )
  );

  validateSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(validateSet),
        mergeMap(({cards, gameId})=>
          this.setService.validateSet(cards, gameId).pipe(
            mergeMap(({deckCards, cardsOnBoard, gameStats, foundSets, status}) => [
              addCardsToBoard({cards : cardsOnBoard}),
              setDeck({deck: deckCards}),
              setGameStats({gameStats: gameStats}),
              setFoundSets({foundSets: foundSets}),
              checkStatus({status: status}),
              resetSelection()
          ]),
          catchError(error =>
            of(validateSetFailure({error}))
          )
        )
      )
    )
  );

  clearSelection$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(validateSetSuccess, validateSetFailure),
        tap(() =>  {
          resetSelection()
        }
      )
    )
  )

  gameCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(checkStatus),
        tap(({ status }) => {
          if (status === 'Completed') {
            alert("Game Is finished!");
            this.router.navigate(['/select-game']);
          }
        })
      ),
    { functional: true, dispatch: false }
  );

}
