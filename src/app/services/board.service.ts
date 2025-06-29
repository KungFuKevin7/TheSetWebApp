import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../../models/Card';
import {map, Observable} from 'rxjs';
import {DeckCardDto} from '../dto/DeckCardDto';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }
/*

  getTablePlayingCards() : Observable<Card[]> {

    return this.http.get<Card[]>("http://localhost:8080/api/cards/shuffled")
  }

  checkIfSet(possibleSetCards: Card[]){
    return this.http.post<boolean>("http://localhost:8080/api/check-set", possibleSetCards);
  }
*/

  getSetHint(gameId : number){
    return this.http.post<DeckCardDto[]>(`http://localhost:8080/api/hint/${gameId}`, "");
  }

}
