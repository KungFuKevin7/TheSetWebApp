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
export class PlayingTableComponent implements OnInit, OnChanges, AfterViewInit {

  //All cards on the table
  @Input() playingCards: any = [];

  //public playingCards$ = this.store.select(selectCards);

  //Cards that are selected for review
  @Input() selectedCards : Card[] = [];

  currentGame$?: Observable<number | undefined>;
  currentDeck$?: Observable<Card[]>;
  currentCardsOnBoard$?: Observable<DeckCardDto[]>;
  triggerDeselect : boolean = false;
  selectedCards$?: Observable<Card[]>; //this.store.select(selectSelectedCards);
  hintedCards$?: Observable<Card[]>;

  constructor(private store : Store<{game : GameState}>)
  {}

  ngOnInit(): void {

    this.currentGame$ = this.store.select(GameSelectors.selectCurrentGameId);
    this.currentDeck$ = this.store.select(CardSelectors.selectDeck);
    this.currentCardsOnBoard$ = this.store.select(BoardSelectors.selectCardsOnBoard);
    this.selectedCards$ = this.store.select(BoardSelectors.selectSelectedCards);

/*
    this.currentCardsOnBoard$.subscribe(
      p => console.log(p)
    );
*/

    this.selectedCards$.subscribe(
      p => console.log(p)
    );
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

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit() {

  }


  /*clickCard(card: Card){
    //If already in selected list, remove from selected list (Deselect)
    //this.playingTableSharedService.changeSelectedCards(card);
    if (this.selectedCards.includes(card))
    {
      this.removePlayingCard(card);
    }
    //Otherwise add card
    else{
      this.selectedCards.push(card);
    }
    //If 3 cards are selected, check set validity
    if (this.selectedCards.length == 3){
      this.checkSet();
    }
  }
*/
  checkSet(){
    //send to api for review
 /*   this.playingTableService.checkIfSet(this.selectedCards).subscribe(
      response => {
        if (response){
          this.handleTriggerDeselect();
          console.log("is set!");
        }if (!response){
          this.handleTriggerDeselect();
          console.log("is no set");
        }
        this.selectedCards = [];
      }
    );*/
  }

  handleTriggerDeselect(){
    this.triggerDeselect = !this.triggerDeselect;
  }

}
