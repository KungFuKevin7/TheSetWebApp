import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {DeckCardDto} from '../../dto/DeckCardDto';

export const loadDeck
  = createAction('[Cards] Load Deck');

export const loadDeckSuccess = createAction(
  '[Cards] Load Deck Success',
  props<{cards: DeckCardDto[]}>()
);

export const loadDeckFailure = createAction(
  '[Cards] Load Deck Failure',
  props<{error : string}>()
);

export const setDeck = createAction(
  '[Cards] Set Deck',
  props<{deck: DeckCardDto[]}>()
);


/*
export const selectCard = createAction(
  '[Cards] Select Card',
  props<{Card : Card}>()
)

export const deselectCard = createAction(
  '[Cards] Deselect Card',
  props<{Card : Card}>()
)
*/
