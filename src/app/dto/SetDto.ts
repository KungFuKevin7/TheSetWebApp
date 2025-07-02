import {DeckCardDto} from './DeckCardDto';

export interface SetDto {
  setId : number;
  setNumber : number;
  cards : DeckCardDto[];
}
