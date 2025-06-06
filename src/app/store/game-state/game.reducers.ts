//import {GameState} from './GameState';
import {createReducer, on} from '@ngrx/store';
import {
  setGame,
  loadGames,
  loadGamesFailure,
  loadGamesSuccess,
  removeCardsFromTable, getCardsForTable
} from './game.actions';
import {Card} from '../../../models/Card';

export interface GameState {
  GameId: number;
  PlayingCards : Card[];
  SelectedCards : Card[];
  FoundSets : any; //List<List<Card>>
  GameStatus : string
  Error : string | undefined;
}

export const initialState: GameState = {
  GameId : 0,
  PlayingCards : [],
  SelectedCards : [],
  FoundSets : [],
  GameStatus : 'progress',
  Error : ''
}

export const gameReducer = createReducer(
  initialState,
  //Set the game in the store object
  on(setGame, (state, { content }) =>({
    ...state,
    PlayingCards: [...state.PlayingCards]
  })),



  on(getCardsForTable, (state) => ({
    ...state,
    PlayingCards : state.PlayingCards
  })),


  //Remove cards from table
  on(removeCardsFromTable, (state, { cards }) => ({
  ...state,
    state : state.SelectedCards.filter((cards) => cards.cardId !== cards),
  })),

  //Load cards from table
  on(loadGames, (state)=> ({...state, GameStatus : 'progress'})),

  on(loadGamesSuccess, (state, { games }) => ({
      ...state,
      PlayingCards : state.PlayingCards,
      SelectedCards : state.SelectedCards,
      Error: '',
      GameStatus : 'progress',
    })),

  on(loadGamesFailure, (state, {error})=> ({
    ...state,
    error : error,
    GameStatus : 'error',
  }))
)
