import {CardsState} from './CardsState';
import {createReducer, on} from '@ngrx/store';
import {state} from '@angular/animations';
import {loadDeckFailure, loadDeckSuccess, setDeck} from './cards.actions';
import {startExistingGameSuccess} from '../game-state/game.actions';
const initialState: CardsState = {
  cardDeck : [],
  loaded : false
}

export const cardsReducer = createReducer(
  initialState,
  on(setDeck, (state, {deck}) =>({
    ...state,
    cardDeck : deck,
    loaded: true
  })),
  on(loadDeckSuccess, (state, { cards }) => ({
    ...state,
    cardDeck : cards,
    loaded : true
  })),
  on(loadDeckFailure, (state, {error}) =>({
    ...state,
    error: error
  })),

/*  on(removeCardsFromBoard, (state, {cards}) => ({
    ...state,
    cardDeck : state.cardDeck.filter(card => !cards.includes(card))
  })),*/

  on(startExistingGameSuccess, (state, {deck}) => ({
    ...state,
    cardDeck: deck
  }))




/*  on(CardsActions.selectCard, (state, { Card }) => ({
    ...state,
    selectedCards: [...state.selectedCards, Card]
  })),
  on(CardsActions.deselectCard, (state, { Card }) => ({
    ...state,
    selectedCards: state.selectedCards.filter((card) => card.cardId !== Card.cardId)
  }))*/

);
