import { Injectable } from '@angular/core';
import {Card} from '../../models/Card';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../.constants';
import {Users} from '../../models/Users';
import {Game} from '../../models/Game';
import {DeckCardDto} from '../dto/DeckCardDto';
import {GameStateDto} from '../dto/GameStateDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  gameAPIURL = `${API_URL}/game`;

  constructor(private http : HttpClient) {
  }

  startGameWithDeck(): Observable<GameStateDto>
  {
    return this.http.post<GameStateDto>(`${this.gameAPIURL}/start-new-with-deck`, "");
  }

  getGamesFromUser()
  {
    return this.http.get<Game[]>(`${this.gameAPIURL}/by-user`);
  }

  getExistingGameState(gameId : number): Observable<GameStateDto> {
    return this.http.get<GameStateDto>(`http://localhost:8080/api/game/start/${gameId}`);
  }

}
