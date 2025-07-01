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

  startGame()
  {
    return this.http.post<Game>(`${this.gameAPIURL}/start-new`, "");
  }

  startGameWithDeck(): Observable<GameStateDto>
  {
    return this.http.post<GameStateDto>(`${this.gameAPIURL}/start-new-with-deck`, "");
  }


  getGamesFromUser()
  {
    return this.http.get<Game[]>(`${this.gameAPIURL}/by-user`);
  }

  updateCardsOnBoard(cards : any, gameId : number) : Observable<void> {
    return this.http.post<void>(`http://localhost:8080/api/cards-on-board/add-to/${gameId}`, cards);
  }

  getExistingGameState(gameId : number): Observable<GameStateDto> {
    return this.http.get<GameStateDto>(`http://localhost:8080/api/game/start/${gameId}`);
  }

  initializeGame(deck : Card[]) : void {
    //this.actions.initialize(deck);
  }

  selectCard(selectedCard : Card) : void {
    //this.actions.selectCard(selectedCard);
  }

  finalizeGame(): void {
    //this.actions.finalizeGame();
  }
}
