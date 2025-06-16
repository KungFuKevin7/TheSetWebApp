import {Card} from '../../models/Card';
import {GameState} from './game-state/GameState';
import {SetState} from './set-state/SetState';
import {CardsState} from './cards-state/CardsState';
import {BoardState} from './board-state/BoardState';

//The State
export interface AppState {
  gameState: GameState;
  setState: SetState;
  cardsState: CardsState;
  boardState: BoardState;
}
