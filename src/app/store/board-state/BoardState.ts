import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';
import {DeckCardDto} from '../../dto/DeckCardDto';

export interface BoardState {
  cardsOnBoard: DeckCardDto[];
  selectedCards: Card[];
  //foundSets : Set[];
  possibleSets: Set[];
}
