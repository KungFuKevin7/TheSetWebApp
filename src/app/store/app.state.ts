import {Card} from '../../models/Card';
import {UserState} from './user-state/UserState';
import {GameState} from './game-state/game.reducers';

//The State
export interface AppState {
  currentGame: GameState;
  currentUser: UserState;
}
