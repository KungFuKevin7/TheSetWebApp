import {Users} from '../../../models/Users';

export interface UserState {
  users : Users;
  error: string | null | undefined;
  status : string;
}
