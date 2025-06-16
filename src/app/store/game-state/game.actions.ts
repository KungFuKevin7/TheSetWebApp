import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';

export const testAction = createAction(
  '[Game Page] Test Action'
);

//Add Game
export const startGame = createAction(
  '[Game Page] Start Game',
  props<{ gameId : number, userId : number }>()
);

export const endGame = createAction('[Game] End Game');

export const resetGame = createAction('[Game] Reset Game');

export const setGameStatus = createAction(
  '[Game] Set Game Status',
  props<{status: 'in progress' | 'finished'}>
);

export const gameError = createAction('[Game] Error',
  props<{errorMessage : string}>)();

