import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GameState} from './GameState';

export const gameFeatureSelector = createFeatureSelector<GameState>('game');

export const selectGameId = createSelector(
  gameFeatureSelector,
  state => state.gameId
);

export const selectUserId = createSelector(
  gameFeatureSelector,
  state => state.userId
);

export const selectGameStatus = createSelector(
  gameFeatureSelector,
  state => state.gameStatus
);

export const selectGameError = createSelector(
  gameFeatureSelector,
  state => state.error
)
