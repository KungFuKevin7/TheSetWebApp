import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../../models/Card';

@Injectable({
  providedIn: 'root'
})
export class PlayingTableService {

  constructor(private http: HttpClient) { }

  getTablePlayingCards() {
    return this.http.get("http://localhost:8080/api/cards/shuffled");
  }

  checkIfSet(cards: Card[]){
    return this.http.post("http://localhost:8080/api/check-set", cards);
  }
}
