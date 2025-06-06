import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {GameState} from './game.reducers';

export const selectorGameState = (state: AppState) => state.currentGame;

export const selectCards = (state : AppState) => state.currentGame.PlayingCards;
