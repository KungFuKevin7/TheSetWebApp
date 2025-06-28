import {Set} from "../../../models/Set"
import {Card} from '../../../models/Card';
import {DeckCardDto} from '../../dto/DeckCardDto';

export interface SetState {
  foundSets : Set[];
  cardsToCheck: DeckCardDto[]
  loading: boolean;
  error: string | undefined;
}
