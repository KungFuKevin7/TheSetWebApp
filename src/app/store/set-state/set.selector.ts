import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SetState} from './SetState';

export const setFeatureSelector = createFeatureSelector<SetState>('sets');

export const selectFoundSets = createSelector(
  setFeatureSelector,
  state => state.foundSets
);

export const selectCardsToCheck = createSelector(
  setFeatureSelector,
  state => state.cardsToCheck
);

export const selectSetValidationLoading = createSelector(
  setFeatureSelector,
  (state) => state.loading
);

export const selectSetValidationError = createSelector(
  setFeatureSelector,
  (state) => state.error
);
