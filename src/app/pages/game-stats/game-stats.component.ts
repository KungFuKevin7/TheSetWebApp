import { Component } from '@angular/core';

@Component({
  selector: 'app-game-stats',
  standalone: true,
  imports: [],
  templateUrl: './game-stats.component.html',
  styleUrl: './game-stats.component.css'
})
export class GameStatsComponent {
  timeElapsed : number = 0;
  setsFound : number = 40;
  availableSets : number = 42;
}
