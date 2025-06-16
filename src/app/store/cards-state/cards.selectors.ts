import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {CardsState} from './CardsState';

export const cardsStateSelector = createFeatureSelector<CardsState>('cards');

export const selectDeck = createSelector(
  cardsStateSelector,
  (state) => state.cardDeck
);

export const selectLoaded = createSelector(
  cardsStateSelector,
  (state) => state.loaded
);
