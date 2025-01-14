import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayingTableService} from '../../../services/playing-table.service';
import {Card} from '../../../../models/Card';

@Component({
  selector: 'app-hint-overview',
  standalone: true,
  imports: [],
  templateUrl: './hint-overview.component.html',
  styleUrl: './hint-overview.component.css'
})
export class HintOverviewComponent implements OnInit{

  @Input() playingCards : any = [];
  @Input() hintedCards : any = [];
  @Input() showHint : boolean = false;

/*
  constructor(private playingTableService : PlayingTableService ) {
  }
*/

  ngOnInit() {

  }


}
