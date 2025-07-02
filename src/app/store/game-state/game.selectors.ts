import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GameState} from './GameState';

export const gameFeatureSelector = createFeatureSelector<GameState>('game');

export const selectCurrentGameId = createSelector(
  gameFeatureSelector,
  state => state.currentGameId
);

export const selectGamesOfUser = createSelector(
  gameFeatureSelector,
  state => state.userGames
);
export const selectLoadingGamesOfUser = createSelector(
  gameFeatureSelector,
  state => state.isLoading
);

export const selectGameError = createSelector(
  gameFeatureSelector,
  state => state.error
);

export const selectGameStats = createSelector(
  gameFeatureSelector,
  state => state.gameStats
)
