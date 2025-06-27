import {BoardState} from './BoardState';
import {createReducer, on} from '@ngrx/store';
import {
  deselectCard,
  selectCard,
  getFoundSets,
  validateSetFailed,
  getPossibleSets,
  getPossibleSetsFailure,
  removeCardsFromBoard,
  drawInitialCardsFromDeck,
} from './board.actions';

const initialState : BoardState = {
  cardsOnBoard : [],
  //foundSets : [],
  selectedCards : [],
  possibleSets : []
}

export const boardReducer = createReducer(
  initialState,
  on(drawInitialCardsFromDeck, (state, {boardCards}) => ({
    ...state,
    cardsOnBoard: [...boardCards],
  })),

/*  on (drawInitialCardsFromDeckSuccess, (state, {cards}) => ({
    ...state,
    cardsOnBoard: cards
  })),
  on (drawInitialCardsFromDeckFailure, (state, {error}) => ({
    ...state,
    error: error
  })),*/

  on(selectCard, (state, {card}) => ({
    ...state,
    selectedCards: [...state.selectedCards, card]
  })),
  on(deselectCard, (state, {Card}) => ({
    ...state,
    selectedCards: state.selectedCards.filter((card) => card.cardId !== Card.cardId)

  })),
  on(getFoundSets, (state, {sets}) => ({
    ...state,
    foundSets: sets
  })),

  on(validateSetFailed, (state, {error}) => ({
    ...state,
    selectedCards: [],
    error: error
  })),

  on(getPossibleSets, (state, {sets}) =>({
    ...state,
    possibleSets: sets
  })),
  on(getPossibleSetsFailure, (state, {error}) => ({
    ...state,
    error: error
  })),

  on(removeCardsFromBoard, (state, {cards}) => ({
    ...state,
    cardsOnBoard: state.cardsOnBoard.filter(card => !cards.includes(card))
  }))


)
