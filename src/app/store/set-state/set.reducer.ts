import {BoardState} from '../board-state/BoardState';
import {createReducer, on} from '@ngrx/store';
import {SetState} from './SetState';
import {loadFoundSets, validateSet, validateSetFailure, validateSetSuccess} from './set.actions';

const initialState : SetState = {
  foundSets : [],
  cardsToCheck: [],
  loading: false,
  error: undefined
}

export const setReducer = createReducer(
  initialState,
  on(loadFoundSets, (state ) => ({
    ...state
  })),
  on(validateSet, (state, {cards}) => ({
    ...state,
    loading: true,
    cardsToCheck: cards
    //Cards will be used in the Effects not the Reducer
  })),
/*  on(validateSetSuccess, (state, {validSet}) => ({
    ...state,
    loading: true,
    foundSets: [...state.foundSets, validSet]
    //Cards will be used in the Effects not the Reducer
  })),*/
  on(validateSetFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error: error
  }))
)

