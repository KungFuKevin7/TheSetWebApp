import { Injectable } from '@angular/core';
import {Card} from '../../models/Card';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../.constants';
import {Users} from '../../models/Users';
import {Game} from '../../models/Game';
import {DeckCardDto} from '../dto/DeckCardDto';
import {GameInitDto} from '../dto/GameInitDto';

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

  startGameWithDeck()
  {
    return this.http.post<GameInitDto>(`${this.gameAPIURL}/start-game-with-deck`, "");
  }


  getGamesFromUser()
  {
    return this.http.get<Game[]>(`${this.gameAPIURL}/by-user`);
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
