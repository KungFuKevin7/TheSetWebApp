import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {withInterceptors} from '@angular/common/http';
import {HintComponent} from '../hint/hint.component';

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
export class PlayingTableComponent implements OnInit {

  //All cards on the table
  @Input() playingCards: any = [];

  //Cards that are selected for review
  @Input() selectedCards : Card[] = [];

  triggerDeselect : boolean = false;

  constructor(private playingTableService: PlayingTableService) {
  }

  ngOnInit(): void {
    this.getRandomCards();
  }

  getRandomCards(){
    this.playingTableService.getTablePlayingCards()
      .subscribe( data => {
        this.playingCards = data;
        console.log(this.playingCards);
      });
  }

  clickCard(card: Card){
    //If already in selected list, remove from selected list (Deselect)
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
    this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
  }

}
