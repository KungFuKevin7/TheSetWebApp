import {CardsState} from './CardsState';
import {createReducer, on} from '@ngrx/store';
import {state} from '@angular/animations';
import {loadDeckFailure, loadDeckSuccess, setDeck} from './cards.actions';
const initialState: CardsState = {
  cardDeck : [],
  loaded : false
}

export const cardsReducer = createReducer(
  initialState,
  on(loadDeckSuccess, (state, { cards }) => ({
    ...state,
    cardDeck : cards,
    loaded : true
  })),
  on(loadDeckFailure, (state, {error}) =>({
    ...state,
    error: error
  })),
  on(setDeck, (state, {deck}) =>({
    ...state,
    cardDeck : deck,
    loaded: true
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
