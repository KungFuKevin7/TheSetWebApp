import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {Card} from '../../../models/Card';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { Observable} from 'rxjs';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {Store} from '@ngrx/store';
import {GameState} from '../../store/game-state/GameState';
import {selectHintedCards} from '../../store/board-state/board.selector';
import {requestHint} from '../../store/board-state/board.actions';
import {selectCurrentGameId} from '../../store/game-state/game.selectors';
import {BoardState} from '../../store/board-state/BoardState';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [
  ],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.css'
})
export class HintComponent implements OnInit{/*
  @Input() playingCards! : Card[];
  @Input() hintedCards! : Card[];
  @Input() hintRequest : boolean = false;*/

  constructor(private store : Store) { }


  ngOnInit(): void {
  /*  this.playingTableSharedService.playingCardsOnTable$.subscribe(
      response => {
        this.playingCards = response;
      }
    )*/
  }

  requestHint(){
    this.store.dispatch(requestHint());

  }

}
