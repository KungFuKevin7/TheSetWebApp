import {DeckCardDto} from './DeckCardDto';
import {GameStatsDto} from './GameStatsDto';
import {SetDto} from './SetDto';

export interface GameStateDto {
  gameId: number;
  deckCards : DeckCardDto[];
  status : string;
  cardsOnBoard : DeckCardDto[];
  foundSets : SetDto[];
  gameStats : GameStatsDto;
}
