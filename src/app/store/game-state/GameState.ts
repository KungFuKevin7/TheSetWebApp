import {Game} from '../../../models/Game';

export interface GameState {
  gameId: number;
  //userId: number;
  isLoading: boolean;
  gameStatus : string
  games : Game[]
  error : string | undefined;
}
