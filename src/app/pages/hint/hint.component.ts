import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {Router} from '@angular/router';
import {PlayingTableSharedService} from '../../shared-services/playing-table-shared.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.css'
})
export class HintComponent implements OnInit{
  @Input() playingCards! : Card[];
  @Input() hintedCards! : Card[];
  @Input() hintRequest : boolean = false;

  displayHint : boolean = false;

  constructor(private playingTableSharedService: PlayingTableSharedService, private playingTableService : PlayingTableService) { }


  ngOnInit(): void {

    this.playingTableSharedService.playingCardsOnTable$.subscribe(
      response => {
        this.playingCards = response;
      }
    )
  }

  requestHint(){
    if (this.displayHint){
      this.displayHint = false;
    }else{
      this.playingTableService.getSetHint(this.playingCards).subscribe(
        response => {
          console.log(response);
          this.hintedCards = response;
        }
      )

      this.displayHint = true;
    }



  }
}
