import {BoardState} from './BoardState';
import {createReducer, on} from '@ngrx/store';
import {
  deselectCard,
  selectCard,
  validateSetFailed,
  getPossibleSets,
  getPossibleSetsFailure,
  removeCardsFromBoard,
  drawInitialCardsFromDeck,
  resetBoardState,
  requestHintSuccess,
  clearHintedCards,
  addCardsToBoard,
  resetSelection,
} from './board.actions';
import {startExistingGameSuccess} from '../game-state/game.actions';

const initialState : BoardState = {
  cardsOnBoard : [],
  //foundSets : [],
  hintedCards : [],
  selectedCards : [],
  possibleSets : []
}

export const boardReducer = createReducer(
  initialState,
  on(drawInitialCardsFromDeck, (state, {boardCards}) => ({
    ...state,
    cardsOnBoard: [...boardCards],
  })),

  on(selectCard, (state, {card}) => ({
    ...state,
    selectedCards: [...state.selectedCards, card]
  })),
  on(deselectCard, (state, {selectedCard}) => ({
    ...state,
    selectedCards: state.selectedCards.filter((card) => card.cardId !== selectedCard.cardId)
  })),

  on(requestHintSuccess, (state, {hintedCards}) =>({
    ...state,
    hintedCards : hintedCards
  })),
  on(clearHintedCards, (state) =>({
    ...state,
    hintedCards : []
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

  on(addCardsToBoard, (state, {cards}) => ({
    ...state,
    cardsOnBoard: cards
  })),
  on(removeCardsFromBoard, (state, {cards}) => ({
    ...state,
    cardsOnBoard: state.cardsOnBoard.filter
    (card => !cards.includes(card))
  })),

  on(startExistingGameSuccess, (state, {cardsOnBoard}) => ({
    ...state,
    cardsOnBoard: cardsOnBoard,
    selectedCards: []
  })),
  on(resetBoardState,() =>  initialState),

  on(resetSelection, (state) => ({
    ...state,
    selectedCards: []
  }))
);
