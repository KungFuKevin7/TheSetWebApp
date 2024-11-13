import { Component } from '@angular/core';
import {GameHistoryComponent} from "../game-history/game-history.component";
import {GamePageComponent} from '../game-page/game-page.component';
import {PlayingCardComponent} from '../playing-card/playing-card.component';

@Component({
  selector: 'app-playing-table',
  standalone: true,
  imports: [
    GameHistoryComponent,
    GamePageComponent,
    PlayingCardComponent
  ],
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.css'
})
export class PlayingTableComponent {
  playingCards : any = [1,2,3,4,5,6,7,8,9,10,11,12];

}
