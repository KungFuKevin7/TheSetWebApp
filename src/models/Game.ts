import {Users} from './Users';

export interface Game {
  gameId: number;
  setsFound: number;
  elapsedTime: number;
  user: Users;
}
