import {Users} from './Users';

export interface Game {
  game_id: number;
  sets_found: number;
  elapsed_time: number;
  user: Users;
  status : string;
  created_at : Date;
}
