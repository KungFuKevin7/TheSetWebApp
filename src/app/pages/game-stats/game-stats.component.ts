import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../../models/Game';
import {GameStatsDto} from '../../dto/GameStatsDto';
import {Store} from '@ngrx/store';
import {requestHint} from '../../store/board-state/board.actions';
import {selectGameStats} from '../../store/game-state/game.selectors';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-game-stats',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './game-stats.component.html',
  styleUrl: './game-stats.component.css'
})
export class GameStatsComponent {


  gameStats$ : Observable<GameStatsDto | undefined>;

  constructor(private store : Store) {
    this.gameStats$ = this.store.select(selectGameStats);
  }

}
