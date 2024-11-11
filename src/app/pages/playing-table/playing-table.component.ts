import { Component } from '@angular/core';
import {GameHistoryComponent} from "../game-history/game-history.component";
import {GamePageComponent} from '../game-page/game-page.component';

@Component({
  selector: 'app-playing-table',
  standalone: true,
  imports: [
    GameHistoryComponent,
    GamePageComponent
  ],
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.css'
})
export class PlayingTableComponent {

}
