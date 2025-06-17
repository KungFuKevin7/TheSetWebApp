import {createFeature, createReducer, on} from '@ngrx/store';
import {GameState} from './GameState';
import {
  endGame,
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess,
  startGame,
  testAction
} from './game.actions';
import {state} from '@angular/animations';
import {loadDeckFailure} from '../cards-state/cards.actions';

const initialState: GameState = {
  gameId : 0,
  gameStatus : 'progress',
  isLoading : false,
  games : [],
  error : ''
}

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state, {gameId}) => ({
    ...state,
    gameId: gameId
  })),
  on(endGame, (state)=>({
    ...state,
  })),
  on(loadUserGames, (state)=>({
    ...state,
    isLoading: true
  })),
  on(loadUserGamesSuccess, (state, {games})=>({
    ...state,
    isLoading: false,
    games: games
  })),
  on(loadUserGamesFailure, (state, {error})=>({
    ...state,
    isLoading: false,
    error: error
  })),

  //TEST
  on(testAction, (state) =>({
    ...state,
    Error: 'Fitter Happier, more productive'
  }))
)
