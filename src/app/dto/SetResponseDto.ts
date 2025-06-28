import {SetDto} from './SetDto';

export interface SetResponseDto {
  setValidity: boolean;
  validatedSet : SetDto[];
}
