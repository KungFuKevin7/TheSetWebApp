import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeckCardDto} from '../../dto/DeckCardDto';
import {Store} from '@ngrx/store';
import {selectFoundSets} from '../../store/set-state/set.selector';
import {SetDto} from '../../dto/SetDto';
import {AsyncPipe, CommonModule, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FoundSetItemComponent} from './found-set-item/found-set-item.component';

@Component({
  imports: [
    AsyncPipe,
    FormsModule,
    CommonModule,
    NgFor,
    FoundSetItemComponent
  ],
  selector: 'app-found-sets',
  standalone: true,
  styleUrl: './found-sets.component.css',
  templateUrl: './found-sets.component.html'
})
export class FoundSetsComponent implements OnInit {

  foundSets$?: Observable<SetDto[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.foundSets$ = this.store.select(selectFoundSets);
  }
}
