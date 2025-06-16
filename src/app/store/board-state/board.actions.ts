import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';

export const selectCard = createAction(
  '[Board] Select Card',
  props<{card : Card}>()
)

export const deselectCard = createAction(
  '[Board] Deselect Card',
  props<{Card : Card}>()
)

export const loadCardsOnBoard = createAction(
  '[Board] Load Cards OnBoard'
);
export const loadCardsOnBoardSuccess = createAction(
  '[Board] Load Cards On Board Success',
  props<{cards: Card[]}>()
);
export const loadCardsOnBoardFailure = createAction(
  '[Board] Load Cards On Board Failure',
  props<{error : string}>()
);

export const getFoundSets = createAction(
  '[Board] Get Found Sets',
  props<{sets: Set[]}>()
);

export const validateSetFailed = createAction(
  '[Board] Validate Set Failed',
  props<{error : string}>()
);

export const getPossibleSets = createAction(
  '[Board] Load Possible Sets',
    props<{sets : Set[]}>()
);

export const getPossibleSetsFailure = createAction(
  '[Board] Get Possible Sets Failure',
  props<{error : string}>()
);

export const removeCardsFromBoard = createAction(
  '[Board] Remove Cards From Board',
  props<{cards : Card[]}>()
);
