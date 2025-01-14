import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayingTableService} from '../../services/playing-table.service';
import {Card} from '../../../models/Card';
import {HintOverviewComponent} from './hint-overview/hint-overview.component';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [
    HintOverviewComponent
  ],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.css'
})
export class HintComponent {

  @Input() playingCardsOnTable : Card[] = [];

  @Input() hintRequest : boolean = false;

  constructor() { }

  requestHint(){
    this.hintRequest = !this.hintRequest;
    console.log(this.hintRequest)
  }
}
