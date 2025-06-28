import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../.constants';
import {DeckCardDto} from '../dto/DeckCardDto';
import {SetResponseDto} from '../dto/SetResponseDto';

@Injectable({
  providedIn: 'root'
})
export class SetService {


  setAPIURL = `${API_URL}/set`;

  constructor(private http : HttpClient) { }

  validateSet(cards : DeckCardDto[], gameId : number) {
    return this.http.post<SetResponseDto>(`${this.setAPIURL}/validate-for-game/${gameId}`, cards);
  }
}
