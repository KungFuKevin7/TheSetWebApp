import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {Observable} from 'rxjs';

export const testAction = createAction(
  '[Game Page] Test Action'
);

//Add Game
export const setGame = createAction(
  '[Game Page] Set The Game',
  props<{content : string}>()
);

//Get Random Cards
export const getCardsForTable = createAction(
  '[Game Page] Get Random Cards'
)

export const loadCardsSuccess = createAction(
  '[Game API] Load Cards Success',
  props< { PlayingCards: Card[] }>()
);


export const loadCardsFailure = createAction(
  '[Game API] Load Cards Failure',
  props< {error: string }>()
);

//Remove Cards From Table
export const removeCardsFromTable = createAction(
  '[Game Page] Remove Cards From Table',
  props<{cards : Card[]}>()
);

//Load Games
export const loadGames= createAction(
  '[Game Page] Load Games'
);

//Load Games Succeeds
export const loadGamesSuccess = createAction(
  '[Game API] Load Games Success',
  props<{games : any}>()
);

//Load Games failed
export const loadGamesFailure = createAction(
  '[Game API] Load Games Success',
  props<{error : string}>()
);

//Load My Games
export const loadMyGames = createAction(
  '[Game Page] Load My Games]'
)
