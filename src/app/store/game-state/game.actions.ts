import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {Game} from '../../../models/Game';
import {Users} from '../../../models/Users';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {GameStatsDto} from '../../dto/GameStatsDto';

export const testAction = createAction(
  '[Game Page] Test Action'
);

//Add Game
export const startGame = createAction(
  '[Game Page] Start Game'
);
export const startGameSuccess = createAction(
  '[Game Page] Start Game Success',
  props<{ gameId : number }>()
);
export const startGameFailure = createAction(
  '[Game Page] Start Game Failure',
  props<{ error : string}>()
);

export const endGame = createAction('[Game] End Game');

export const resetGame = createAction('[Game] Reset Game');

export const setGameStatus = createAction(
  '[Game] Set Game Status',
  props<{status: 'in progress' | 'finished'}>()
);

export const gameError = createAction(
  '[Game] Error',
  props<{errorMessage : string}>)();

export const loadUserGames = createAction(
  '[Game] Load Games of User'
);
export const loadUserGamesSuccess = createAction(
  '[Game] Load Games of User Success',
  props<{games: Game[]}>()
);
export const loadUserGamesFailure = createAction(
  '[Game] Load Games of User Failure',
  props<{error : string}>()
)

export const selectGame = createAction(
  '[Game] Select Current Game',
  props<{game : Game}>()
);

export const startExistingGame = createAction(
  '[Game Page] Start Existing Game',
  props<{gameId: number}>()
);

export const startExistingGameFailure = createAction(
  '[Game Page] Start Existing Game Failure',
  props<{error: string}>()
);

export const startExistingGameSuccess = createAction(
  '[Game] Select Existing Game',
  props<{
    gameId: number,
    deck : DeckCardDto[],
    cardsOnBoard : DeckCardDto[],
    gameStats : GameStatsDto}>()
);

export const setGameStats = createAction(
  '[Game] Select Game Stats',
  props<{gameStats : GameStatsDto}>()
)
