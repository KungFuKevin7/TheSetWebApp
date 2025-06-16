import {createFeature, createReducer, on} from '@ngrx/store';
import {GameState} from './GameState';
import {endGame, startGame, testAction} from './game.actions';
import {state} from '@angular/animations';

const initialState: GameState = {
  gameId : 0,
  userId: 0,
  gameStatus : 'progress',
  error : ''
}

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state, {gameId, userId}) => ({
    ...state,
    gameId: gameId,
    userId : userId,
  })),
  on(endGame, (state)=>({
    ...state,
  })),
  on(testAction, (state) =>({
    ...state,
    Error: 'Fitter Happier, more productive'
  }))
)


export const gameFeature = createFeature({
  name: 'game',
  reducer: gameReducer
});

