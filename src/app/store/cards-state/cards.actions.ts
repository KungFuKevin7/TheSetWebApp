import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';

export const loadDeckSuccess = createAction(
  '[Cards] Load Deck Success',
  props<{cards: Card[]}>()
);

export const selectCard = createAction(
  '[Cards] Select Card',
  props<{Card : Card}>()
)

export const deselectCard = createAction(
  '[Cards] Deselect Card',
  props<{Card : Card}>()
)
