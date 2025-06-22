import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {Store} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgFor} from '@angular/common';
import {AppState} from '../../store/app.state';
import * as GameSelectors from '../../store/game-state/game.selectors';
import * as CardSelectors from '../../store/cards-state/cards.selectors';
import {Observable} from 'rxjs';
import {Game} from '../../../models/Game';
import {GameState} from '../../store/game-state/GameState';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {cardsStateSelector} from '../../store/cards-state/cards.selectors';
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

  triggerDeselect : boolean = false;

  constructor(private store : Store<{game : GameState}>)
  {}

  ngOnInit(): void {

    this.currentGame$ = this.store.select(GameSelectors.selectCurrentGameId);
    this.currentDeck$ = this.store.select(CardSelectors.selectDeck);

    this.currentGame$.subscribe(
      p =>
        console.log(p)
    )
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit() {

  }


  clickCard(card: Card){
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

  removePlayingCard(card: Card){


    //this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
  }

}
