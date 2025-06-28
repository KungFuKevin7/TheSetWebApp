import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';
import {DeckCardDto} from '../../dto/DeckCardDto';

export interface BoardState {
  cardsOnBoard: DeckCardDto[];
  selectedCards: DeckCardDto[];
  //foundSets : Set[];
  possibleSets: Set[];
}
