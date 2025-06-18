import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Game} from '../../../models/Game';
import {Users} from '../../../models/Users';
import {Router, RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {loadUserGames} from '../../store/game-state/game.actions';
import {selectGamesOfUser} from '../../store/game-state/game.selectors';

@Component({
  selector: 'app-select-game',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css'
})
export class SelectGameComponent implements OnInit {
  games$? : Observable<Game[]>;

  user: Users = new Users();
  game : Game = {user:this.user, gameId: 1, elapsedTime: 3, setsFound:44};
  games: Game[] = [this.game, this.game, this.game];

  constructor(private router : Router, private store : Store)
  {

  }

  ngOnInit()
  {
    const userId = Number(localStorage.getItem('userid'));
    if (userId){
      this.store.dispatch(loadUserGames({userId}));
    }
    this.games$ = this.store.select(selectGamesOfUser);
  }

  startNewGame() {
    this.router.navigate(['/play-game']);
  }
}
