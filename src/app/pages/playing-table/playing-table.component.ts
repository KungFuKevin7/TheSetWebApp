import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {Store} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgFor} from '@angular/common';
import {AppState} from '../../store/app.state';
import * as GameSelectors from '../../store/game-state/game.selectors';
import {testAction} from '../../store/game-state/game.actions';
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

  a$ = this.store.select(GameSelectors.selectGameId);

  triggerDeselect : boolean = false;

  constructor(private store : Store,
              private playingTableService: PlayingTableService) {
  }

  ngOnInit(): void {
   /* this.playingTableService.getTablePlayingCards().subscribe(
      response => {
        //this.playingTableSharedService.changePlayingCardsOnTable(response);
      }
    )*/
    this.store.dispatch(testAction());
    //this.store.dispatch(getCardsForTable());

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
    this.playingTableService.checkIfSet(this.selectedCards).subscribe(
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
    );
  }

  handleTriggerDeselect(){
    this.triggerDeselect = !this.triggerDeselect;
  }

  removePlayingCard(card: Card){


    //this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
  }

}
