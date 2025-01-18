import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {withInterceptors} from '@angular/common/http';
import {HintComponent} from '../hint/hint.component';
import {PlayingTableSharedService} from '../../shared-services/playing-table-shared.service';
import {resolve} from '@angular/compiler-cli';

@Component({
  selector: 'app-playing-table',
  standalone: true,
  imports: [
    PlayingCardComponent,
    HintComponent
  ],
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.css'
})
export class PlayingTableComponent implements OnInit, OnChanges, AfterViewInit {

  //All cards on the table
  @Input() playingCards: any = [];

  //Cards that are selected for review
  @Input() selectedCards : Card[] = [];

  triggerDeselect : boolean = false;

  constructor(private playingTableService: PlayingTableService,
              private playingTableSharedService: PlayingTableSharedService) {
  }

  ngOnInit(): void {
    this.playingTableService.getTablePlayingCards().subscribe(
      response => {
        this.playingTableSharedService.changePlayingCardsOnTable(response);
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.playingTableSharedService.playingCardsOnTable$.subscribe(
        response => {
          console.log(response);
        }
      )
  }

  ngAfterViewInit() {
    this.playingTableSharedService.playingCardsOnTable$.subscribe(
      cards => {
        this.playingCards = cards;
      }
    )
  }


  clickCard(card: Card){
    //If already in selected list, remove from selected list (Deselect)
    this.playingTableSharedService.changeSelectedCards(card);
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
