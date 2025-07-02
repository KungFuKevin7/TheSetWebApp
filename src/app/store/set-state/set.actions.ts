import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {SetDto} from '../../dto/SetDto';
import {SetResponseDto} from '../../dto/SetResponseDto';

export const loadFoundSets = createAction(
  '[Set] Load Found Sets');

/*export const loadFoundSetsSuccess = createAction(
  '[Set] Load Found Sets Success',
  props<{sets: Set[]}>
)
export const loadFoundSetsFailure = createAction(
  '[Set] Load Found Set Failure',
  props<{error : string}>()
)*/

export const validateSet = createAction(
  '[Set] Validate Set',
  props<{cards: DeckCardDto[], gameId : number}>()
);

export const validateSetSuccess = createAction(
  '[Set] Validate Set Success',
  props<{validSet: SetResponseDto}>()
)

export const validateSetFailure = createAction(
  '[Set] Validate Set Failure',
  props<{error: string}>()
)
export const setFoundSets = createAction(
  '[Set] Set Found Sets',
  props<{foundSets : SetDto[]}>()
)
