import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {gameFeature, GameState} from './game.reducers';

export const {
    selectError,
} = gameFeature

export const selectorGameState = (state: AppState) => state.currentGame;

export const selectCards = (state : AppState) => state.currentGame.PlayingCards;

export const selectFeature =
  (state : AppState) => state.currentGame;

export const selectTest = createSelector(
  gameFeature.selectGameState,
  (state : GameState) => state.Error
);
