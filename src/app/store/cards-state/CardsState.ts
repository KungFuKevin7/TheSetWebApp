import {Card} from '../../../models/Card';
import {DeckCardDto} from '../../dto/DeckCardDto';

export interface CardsState {
  cardDeck: DeckCardDto[];
  loaded: boolean;
}
