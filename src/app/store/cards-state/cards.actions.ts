import {createAction, props} from '@ngrx/store';
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

export const removeCardsFromDeck = createAction(
  '[Cards] Remove Cards From Deck',
  props<{cards : DeckCardDto[]}>()
);
