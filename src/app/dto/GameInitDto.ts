import {DeckCardDto} from './DeckCardDto';

export interface GameInitDto {
  gameId: number;
  deckCards : DeckCardDto[]
}
