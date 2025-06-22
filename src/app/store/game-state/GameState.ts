import {Game} from '../../../models/Game';

export interface GameState {
  currentGameId: number;
  isLoading: boolean;
  gameStatus : string
  userGames : Game[]
  error : string | undefined;
}
