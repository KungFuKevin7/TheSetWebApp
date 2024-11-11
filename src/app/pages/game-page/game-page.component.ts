import { Component } from '@angular/core';
import {GameHistoryComponent} from "../game-history/game-history.component";
import {PlayingTableComponent} from '../playing-table/playing-table.component';
import {GameStatsComponent} from '../game-stats/game-stats.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {FoundSetsComponent} from '../found-sets/found-sets.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    GameHistoryComponent,
    PlayingTableComponent,
    GameStatsComponent,
    UserOptionsComponent,
    FoundSetsComponent,CommonModule
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent {

}
