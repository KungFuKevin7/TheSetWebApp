import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameHistoryComponent} from "../game-history/game-history.component";
import {PlayingCardComponent} from '../playing-card/playing-card.component';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';

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

  triggerDeselect : boolean | undefined;

  constructor(private playingTableService: PlayingTableService) {
  }

  ngOnInit(): void {
    this.getRandomCards();
  }

  getRandomCards(){
    this.playingTableService.getTablePlayingCards()
      .subscribe( data => {
        //console.log(data);
        this.playingCards = data;
      });
  }

  addPlayingCard(card: Card){
    console.log(card);
    if (this.selectedCards.includes(card))
    {
      this.removePlayingCard(card);
    }
    else{
      this.selectedCards.push(card);
    }

    if (this.selectedCards.length >= 3){
      this.checkSet();
    }
  }

  checkSet(){
    console.log(this.selectedCards);
    //send to api for review

    //deselect all
    this.selectedCards = [];
    this.triggerDeselect = false;

    //change cards if set is true else continue/ throw false
    console.log("is set!");
  }

  removePlayingCard(card: Card){
    this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
  }

}
