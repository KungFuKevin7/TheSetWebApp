import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {exhaustMap, filter, map, withLatestFrom} from 'rxjs';
import {deselectCard, selectCard} from '../board-state/board.actions';
import {selectCardsOnBoard, selectSelectedCards} from '../board-state/board.selector';
import {validateSet, validateSetSuccess} from './set.actions';
import {SetService} from '../../services/set.service';
import {selectCurrentGameId} from '../game-state/game.selectors';

@Injectable()
export class SetEffects {

  constructor(private actions$ : Actions,
              private store : Store,
              private setService : SetService) {}

  validateSetWhenThreeSelected$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectCard, deselectCard),
      withLatestFrom(
        this.store.select(selectSelectedCards),
        this.store.select(selectCurrentGameId)
        //this.store.select(selectCardsOnBoard)
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
      exhaustMap(({cards, gameId})=>
        this.setService.validateSet(cards, gameId).pipe(
          map((validatedSet) =>
            validateSetSuccess({ validSet : validatedSet})),
        )

      )
    )
  )


}
