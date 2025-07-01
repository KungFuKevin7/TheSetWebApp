import {createAction, props} from '@ngrx/store';
import {Card} from '../../../models/Card';
import {Set} from '../../../models/Set';
import {DeckCardDto} from '../../dto/DeckCardDto';

export const selectCard = createAction(
  '[Board] Select Card',
  props<{card : DeckCardDto}>()
);

export const deselectCard = createAction(
  '[Board] Deselect Card',
  props<{selectedCard : Card}>()
);

export const resetSelection = createAction(
  '[Cards] Reset Selected Cards'
);

export const requestHint = createAction(
  '[Board] Give Hint'
)
export const requestHintSuccess = createAction(
  '[Board] Request Hint Success',
  props<{hintedCards : DeckCardDto[]}>()
)
export const requestHintFailure = createAction(
  '[Board] Request Hint Failure',
  props<{error: string}>()
)
export const clearHintedCards = createAction(
  '[Cards] Clear Cards'
)

export const drawInitialCardsFromDeck = createAction(
  '[Board] Draw Initial Cards From Deck',
  props<{boardCards : DeckCardDto[]}>()
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

export const addCardsToBoard = createAction(
  '[Board] Add Cards to Board',
  props<{cards: DeckCardDto[]}>()
)

export const removeCardsFromBoard = createAction(
  '[Board] Remove Cards From Board',
  props<{cards : DeckCardDto[]}>()
);

export const resetBoardState = createAction(
  '[Board] Reset Board State',
)
