import { Component } from '@angular/core';
import {CommonModule, NgFor, NgForOf} from '@angular/common';

@Component({
  selector: 'app-game-history',
  standalone: true,
  imports: [],
  templateUrl: './game-history.component.html',
  styleUrl: './game-history.component.css'
})
export class GameHistoryComponent {
  openGames : any= [
    {
      gameId: 1,
      gameSets: 3
    },
    {
      gameId: 2,
      gameSets: 6
    },
    {
      gameId: 3,
      gameSets: 9
    }];

  startNewGame() {
    console.log("Loading New game...")
  }
}
