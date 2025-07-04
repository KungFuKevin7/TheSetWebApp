import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {PlayingTableComponent} from '../playing-table/playing-table.component';
import {GameStatsComponent} from '../game-stats/game-stats.component';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {FoundSetsComponent} from '../found-sets/found-sets.component';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {HintComponent} from '../hint/hint.component';
import {Card} from '../../../models/Card';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    PlayingTableComponent,
    GameStatsComponent,
    UserOptionsComponent,
    FoundSetsComponent, CommonModule, HintComponent
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit, OnChanges {

  @ViewChild('PlayingTable') playingTable! : PlayingTableComponent;

  @Input() playingCards: Card[] = [];

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['playingCards'].previousValue);
    console.log(changes['playingCards'].currentValue);
  }

  ngOnInit(): void {
    if (this.authService.getAuthToken() == null) {
      this.router.navigate(['/']);
    }
  }


}
