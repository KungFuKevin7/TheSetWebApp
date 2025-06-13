import {Card} from '../../../models/Card';

export interface CardsState {
  cardDeck: Card[];
  selectedCards: Card[];
  loaded: boolean;
}
