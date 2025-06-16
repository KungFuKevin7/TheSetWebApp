import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';

export const loadDeck
  = createAction('[Cards] Load Deck');

export const loadDeckSuccess = createAction(
  '[Cards] Load Deck Success',
  props<{cards: Card[]}>()
);

export const loadDeckFailure = createAction(
  '[Cards] Load Deck Failure',
  props<{error : string}>()
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
