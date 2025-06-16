import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';

export interface BoardState {
  cardsOnBoard: Card[];
  selectedCards: Card[];
  //foundSets : Set[];
  possibleSets: Set[];
}
