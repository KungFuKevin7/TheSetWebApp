import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
    NgClass
  ],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges{

  @Input() playingCard : Card = new Card();
  //@Input() selectedAmount : number = 0;
  @Input() selected : boolean = false;
  @Output() selectedEvent = new EventEmitter<Card>();
  @Output() deselectedEvent = new EventEmitter<Card>();
  @Output() triggerDeselctor = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    //console.log(this.selected);
  }

  select() {
    if (!this.selected) {
      this.selected = true;
      this.selectedEvent.emit(this.playingCard);

    }
    else{
      this.selected = false;
      this.deselectedEvent.emit(this.playingCard);
    }
  }
}
