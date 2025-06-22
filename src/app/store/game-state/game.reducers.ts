import {createFeature, createReducer, on} from '@ngrx/store';
import {GameState} from './GameState';
import {
  endGame,
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess, selectGame,
  startGame, startGameFailure, startGameSuccess,
  testAction
} from './game.actions';
import {state} from '@angular/animations';
import {loadDeckFailure} from '../cards-state/cards.actions';

const initialState: GameState = {
  currentGameId : 0,
  gameStatus : 'progress',
  isLoading : false,
  userGames : [],
  error : ''
}

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state) => ({
    ...state,
  })),
  on(startGameSuccess,(state, {gameId})=>({
      ...state,
    currentGameId : gameId,
    isLoading : false,
    gameStatus : 'progress'
  })),
  on(startGameFailure, (state, {error}) => ({
    ...state,
    error: error
  })),
  on(endGame, (state)=>({
    ...state,
  })),
  on(loadUserGames, (state)=>({
    ...state,
    isLoading: true
  })),
  on(selectGame,(state, {game})=>({
    ...state,
    currentGame : game,
    isLoading : false,
  })),
  on(loadUserGamesSuccess, (state, {games})=>({
    ...state,
    isLoading: false,
    userGames: games
  })),
  on(loadUserGamesFailure, (state, {error})=>({
    ...state,
    isLoading: false,
    error: error
  })),

  //TEST
  on(testAction, (state) =>({
    ...state,
    error: 'Fitter Happier, more productive'
  }))
)
