import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Game} from '../../../models/Game';
import {Users} from '../../../models/Users';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-select-game',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css'
})
export class SelectGameComponent {

  user: Users = new Users();
  game : Game = {user:this.user, gameId: 1, elapsedTime: 3, setsFound:44};
  games: Game[] = [this.game, this.game, this.game];

  constructor(private router : Router )
  {}

  startNewGame() {
    this.router.navigate(['/play-game']);
  }
}
