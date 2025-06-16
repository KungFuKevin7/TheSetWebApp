import {Card} from '../../../models/Card';

export interface CardsState {
  cardDeck: Card[];
  loaded: boolean;
}
