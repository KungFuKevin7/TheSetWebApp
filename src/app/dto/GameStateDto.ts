import {DeckCardDto} from './DeckCardDto';
import {GameStatsDto} from './GameStatsDto';

export interface GameStateDto {
  gameId: number;
  deckCards : DeckCardDto[];
  cardsOnBoard : DeckCardDto[];
  foundSets : DeckCardDto[];
  gameStats : GameStatsDto;
}
