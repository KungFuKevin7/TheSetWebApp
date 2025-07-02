import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {BoardState} from './BoardState';

export const cardsStateSelector = createFeatureSelector<BoardState>('board');

export const selectCardsOnBoard = createSelector(
  cardsStateSelector,
  (state) => state.cardsOnBoard
);

export const selectSelectedCards = createSelector(
  cardsStateSelector,
  (state) => state.selectedCards
);

export const selectHintedCards = createSelector(
  cardsStateSelector,
  (state) => state.hintedCards
)

