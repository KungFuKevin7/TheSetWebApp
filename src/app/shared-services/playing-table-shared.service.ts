import { Injectable } from '@angular/core';
import {Card} from '../../models/Card';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingTableSharedService {

  private playingCardsOnTable = new BehaviorSubject<Card[]>([]);
  playingCardsOnTable$ = this.playingCardsOnTable.asObservable();

  private selectedCards = new BehaviorSubject<Card[]>([]);
  selectedCards$ = this.selectedCards.asObservable();

  private hintedCards = new BehaviorSubject<Card[]>([]);
  hintedCards$ = this.hintedCards.asObservable();


  constructor() { }

  changePlayingCardsOnTable(cards: any) {
    this.playingCardsOnTable.next(cards);
  }

  changeSelectedCards(cards: any) {

    this.selectedCards.next(cards);
    console.log(cards)

  }

  changeHintedCards(cards: Card[]) {
    this.hintedCards.next(cards);
  }

}
