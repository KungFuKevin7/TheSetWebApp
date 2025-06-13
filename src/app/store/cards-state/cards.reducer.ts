import {CardsState} from './CardsState';
import {createReducer, on} from '@ngrx/store';
import * as CardsActions from './cards.actions';
import {state} from '@angular/animations';

const initialState: CardsState = {
  cardDeck : [],
  selectedCards: [],
  loaded : false
}

export const cardsReducer = createReducer(
  initialState,

  on(CardsActions.loadDeckSuccess, (state, { cards }) => ({
    ...state,
    cards,
    loaded : true
  })),
  on(CardsActions.selectCard, (state, { Card }) => ({
    ...state,
    selectedCards: [...state.selectedCards, Card]
  })),
  on(CardsActions.deselectCard, (state, { Card }) => ({
    ...state,
    selectedCards: state.selectedCards.filter((card) => card.cardId !== Card.cardId)
  }))

);
