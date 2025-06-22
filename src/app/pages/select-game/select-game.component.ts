import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Game} from '../../../models/Game';
import {Users} from '../../../models/Users';
import {Router, RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {loadUserGames, selectGame, startGame} from '../../store/game-state/game.actions';
import {selectGamesOfUser} from '../../store/game-state/game.selectors';

@Component({
  selector: 'app-select-game',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css'
})
export class SelectGameComponent implements OnInit {
  games$? : Observable<Game[]>;
  user: Users = new Users();
  constructor(private router : Router, private store : Store)
  {

  }

  ngOnInit()
  {
    this.store.dispatch(loadUserGames());

    this.games$ = this.store.select(selectGamesOfUser);
  }

  startNewGame() {
    this.store.dispatch(startGame());
  }

  onExistingGameClick(game: Game) {
    this.store.dispatch(selectGame({game}));
  }
}
