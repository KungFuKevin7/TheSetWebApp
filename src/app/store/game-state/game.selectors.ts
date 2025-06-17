import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GameState} from './GameState';

export const gameFeatureSelector = createFeatureSelector<GameState>('game');

export const selectGameId = createSelector(
  gameFeatureSelector,
  state => state.gameId
);

export const selectGameStatus = createSelector(
  gameFeatureSelector,
  state => state.gameStatus
);

export const selectGamesOfUser = createSelector(
  gameFeatureSelector,
  state => state.games
);
export const selectLoadingGamesOfUser = createSelector(
  gameFeatureSelector,
  state => state.isLoading
);

export const selectGameError = createSelector(
  gameFeatureSelector,
  state => state.error
);
