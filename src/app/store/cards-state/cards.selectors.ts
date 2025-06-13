import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {CardsState} from './CardsState';

export const cardsStateSelector = createFeatureSelector<CardsState>('cards');

export const selectAllCards = createSelector(
  cardsStateSelector,
  (state) => state.cardDeck
);

export const selectSelectedCards = createSelector(
  cardsStateSelector,
  (state) => state.selectedCards
);

export const selectLoaded = createSelector(
  cardsStateSelector,
  (state) => state.loaded
);
