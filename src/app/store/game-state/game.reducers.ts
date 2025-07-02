import {createReducer, on} from '@ngrx/store';
import {GameState} from './GameState';
import {
  endGame,
  loadUserGames,
  loadUserGamesFailure,
  loadUserGamesSuccess, resetUserGames, selectGame, setGameStats, startExistingGame, startExistingGameSuccess,
  startGame, startGameFailure, startGameSuccess,
  testAction
} from './game.actions';

const initialState: GameState = {
  currentGameId : 0,
  isLoading : false,
  userGames : [],
  error : '',
  gameStats: undefined
}

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state) => ({
    ...state,
  })),
  on(startGameSuccess,(state, {gameId})=>({
      ...state,
    currentGameId : gameId,
    isLoading : false
  })),
  on(startGameFailure, (state, {error}) => ({
    ...state,
    error: error
  })),
  on(startExistingGame, (state, {gameId})=>({
    ...state,
  })),
  on(startExistingGameSuccess, (state, {gameId, gameStats})=>({
    ...state,
    currentGameId : gameId,
    gameStats : gameStats
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
    isLoading : false
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
  on(setGameStats, (state, {gameStats})=>({
    ...state,
    gameStats : gameStats
  })),
  on(resetUserGames, (state) =>({
    ...state,
    userGames: []
  })),

  //TEST
  on(testAction, (state) =>({
    ...state,
    error: 'Fitter Happier, more productive'
  }))
)
