import { Injectable } from '@angular/core';
import {Card} from '../../models/Card';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../.constants';
import {Users} from '../../models/Users';
import {Game} from '../../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameAPIURL = `${API_URL}/game`;

  constructor(private http : HttpClient) {
  }

  startGame(user : Users)
  {
    return this.http.post<Game>(`${this.gameAPIURL}/start-new`, user);
  }

  getGamesFromUser(userId : number)
  {
    return this.http.get<Game[]>(`${this.gameAPIURL}/by-user/${userId}`);
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
