import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {Card} from '../../../models/Card';
import {Store} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgFor} from '@angular/common';
import {AppState} from '../../store/app.state';
import * as GameSelectors from '../../store/game-state/game.selectors';
import * as CardSelectors from '../../store/cards-state/cards.selectors';
import * as BoardSelectors from '../../store/board-state/board.selector';
import {Observable, take} from 'rxjs';
import {Game} from '../../../models/Game';
import {GameState} from '../../store/game-state/GameState';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {cardsStateSelector} from '../../store/cards-state/cards.selectors';
import {selectSelectedCards} from '../../store/board-state/board.selector';
import {deselectCard, selectCard} from '../../store/board-state/board.actions';
@Component({
  selector: 'app-playing-table',
  standalone: true,
  imports: [
    PlayingCardComponent,
    FormsModule,
    CommonModule,
    NgFor
  ],
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.css'
})
export class PlayingTableComponent implements OnInit {

  //Cards that are selected for review
  currentGame$?: Observable<number | undefined>;
  currentDeck$?: Observable<Card[]>;
  currentCardsOnBoard$?: Observable<DeckCardDto[]>;
  selectedCards$?: Observable<Card[]>; //this.store.select(selectSelectedCards);
  hintedCards$?: Observable<Card[]>;

  constructor(private store : Store<{game : GameState}>)
  {}

  ngOnInit(): void {

    this.currentGame$ = this.store.select(GameSelectors.selectCurrentGameId);
    this.currentDeck$ = this.store.select(CardSelectors.selectDeck);
    this.currentCardsOnBoard$ = this.store.select(BoardSelectors.selectCardsOnBoard);
    this.selectedCards$ = this.store.select(BoardSelectors.selectSelectedCards);
    this.hintedCards$ = this.store.select(BoardSelectors.selectHintedCards);

/*    this.currentCardsOnBoard$.subscribe(
      p => console.log(p)
    );

    this.selectedCards$.subscribe(
      p => console.log(p)
    )

    this.hintedCards$.subscribe(
      p => console.log(p)
    );*/
  }

  clickCard(card : DeckCardDto){
    this.selectedCards$?.pipe(take(1)).subscribe(selected => {
      if (selected.includes(card)) {
        this.store.dispatch(deselectCard({selectedCard : card}));
      }else {
        this.store.dispatch(selectCard({card : card}));
      }
    });
  }

  isHinted(cardId: number, hintedCards: Card[]): boolean {
    return hintedCards.some(h => h.cardId === cardId);
  }

}
