import { Injectable } from '@angular/core';
import {GameActions} from '../store/game.actions';
import {BehaviorSubject} from 'rxjs';
import {GameState} from '../store/game.state';
import {Store} from '../store/store';
import {Card} from '../../models/Card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private actions : GameActions;

  private gameStateSubject : BehaviorSubject<GameState>;
  public gameState$;

  constructor(private store : Store<GameState>) {
    this.actions = new GameActions(store);

    this.gameStateSubject = new BehaviorSubject<GameState>(this.store.getStateSnapshot());
    this.gameState$ = this.gameStateSubject.asObservable();

    this.store.state$.subscribe((state) => {
      this.gameStateSubject.next(state);
    });
  }

  initializeGame(deck : Card[]) : void {
    this.actions.initialize(deck);
  }

  selectCard(selectedCard : Card) : void {
    this.actions.selectCard(selectedCard);
  }

  finalizeGame(): void {
    this.actions.finalizeGame();
  }
}
