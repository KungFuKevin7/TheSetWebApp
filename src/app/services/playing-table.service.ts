import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../../models/Card';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingTableService {

  constructor(private http: HttpClient) { }

  getTablePlayingCards() : Observable<Card[]> {

    return this.http.get<Card[]>("http://localhost:8080/api/cards/shuffled")
  }

  checkIfSet(possibleSetCards: Card[]){
    return this.http.post<boolean>("http://localhost:8080/api/check-set", possibleSetCards);
  }

  getSetHint(cardsOnTable: Card[]){
    return this.http.post<Card[]>(`http://localhost:8080/api/check-set/hint`, cardsOnTable);
  }
}
