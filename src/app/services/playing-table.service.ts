import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayingTableService {

  constructor(private http: HttpClient) { }

  getTablePlayingCards() {
    return this.http.get("http://localhost:8080/api/cards/shuffled-cards");
  }
}
