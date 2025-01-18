import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {

  //Card that component is representing
  @Input() playingCard! : Card;
  //Share card with parent
  @Output() playingCardToShare  = new EventEmitter<Card>();
  //Card is Selected
  @Input() cardIsSelected : boolean = false;
  //Card is hinted
  @Input() cardIsHinted : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardIsSelected'].currentValue == true) {
      this.cardIsSelected = false;
    }
   }

  select() {

    //Check if already selected
    if (this.cardIsSelected) {
      this.deselect();
    }
    else {
      //Select card (background)
      this.cardIsSelected  = true;
    }

    //Share the playing card with parent
    this.playingCardToShare.emit(this.playingCard);
  }

  //Set selected card as false
  deselect() {
    this.cardIsSelected = false;
  }
}
