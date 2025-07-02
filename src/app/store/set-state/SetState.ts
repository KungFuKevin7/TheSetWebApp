import {Set} from "../../../models/Set"
import {Card} from '../../../models/Card';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {SetDto} from '../../dto/SetDto';

export interface SetState {
  foundSets : SetDto[];
  cardsToCheck: DeckCardDto[];
  loading: boolean;
  error: string | undefined;
}
