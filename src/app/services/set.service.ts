import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../.constants';
import {DeckCardDto} from '../dto/DeckCardDto';
import {SetResponseDto} from '../dto/SetResponseDto';
import {GameStateDto} from '../dto/GameStateDto';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  setAPIURL = `${API_URL}/set`;

  constructor(private http : HttpClient) { }

  validateSet(cards : DeckCardDto[], gameId : number) {
    return this.http.post<GameStateDto>(`${this.setAPIURL}/handle-validation-with-new-board/${gameId}`, cards);
  }
}
