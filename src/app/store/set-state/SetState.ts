import {Set} from "../../../models/Set"
import {Card} from '../../../models/Card';

export interface SetState {
  foundSets : Set[];
  cardsToCheck: Card[]
  loading: boolean;
  error: string | undefined;
}
