import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameHistoryComponent} from "../game-history/game-history.component";
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {delay} from 'rxjs';

@Component({
  selector: 'app-playing-table',
  standalone: true,
  imports: [
    GameHistoryComponent,
    PlayingCardComponent
  ],
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.css'
})
export class PlayingTableComponent implements OnInit {

  //All cards on the table
  @Input() playingCards: any = [];

  //Cards that are selected for review
  @Input() selectedCards : Card[] = [];

  triggerDeselect : boolean | undefined = undefined;

  constructor(private playingTableService: PlayingTableService) {
  }

  ngOnInit(): void {
    this.getRandomCards();
  }

  getRandomCards(){
    this.playingTableService.getTablePlayingCards()
      .subscribe( data => {
        this.playingCards = data;
      });
  }

  addPlayingCard(card: Card){
    console.log(card);
    //If already in selected list, remove from selected list

    if (this.selectedCards.includes(card))
    {
      this.removePlayingCard(card);
    }
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
        if (response === true){
          this.selectedCards = [];
          this.handleTriggerDeselect();
          //console.log(response);
        }if (response === false){
          this.selectedCards = [];
          this.handleTriggerDeselect();
          //console.log(response);
        }
      }

    );

    //deselect all


    //change cards if set is true else continue/ throw false
    console.log("is set!");
  }

   handleTriggerDeselect(){
    if (this.triggerDeselect){
      this.triggerDeselect = false;
    }
    else {
      this.triggerDeselect = true;
    }
  }

  removePlayingCard(card: Card){
    this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
  }

}
