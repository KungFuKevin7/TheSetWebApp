import {createAction, props} from '@ngrx/store';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {SetResponseDto} from '../../dto/SetResponseDto';
import {SetDto} from '../../dto/SetDto';

export const setFoundSets = createAction(
  '[Set] Load Found Sets',
  props<{foundSets : SetDto[]}>()
);

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
