import {Game} from '../../../models/Game';
import {GameStatsDto} from '../../dto/GameStatsDto';

export interface GameState {
  currentGameId: number;
  isLoading: boolean;
  userGames : Game[]
  error : string | undefined;
  gameStats : GameStatsDto | undefined;
}
