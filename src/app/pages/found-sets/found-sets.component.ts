import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FoundSetItemComponent} from './found-set-item/found-set-item.component';
import {selectFoundSets} from '../../store/set-state/set.selector';
import {Store} from '@ngrx/store';
import {SetDto} from '../../dto/SetDto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-found-sets',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    CommonModule,
    NgFor,
    FoundSetItemComponent
  ],
  templateUrl: './found-sets.component.html',
  styleUrl: './found-sets.component.css'
})
export class FoundSetsComponent implements OnInit {

  foundSets$?: Observable<SetDto[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.foundSets$ = this.store.select(selectFoundSets);
  }
}
