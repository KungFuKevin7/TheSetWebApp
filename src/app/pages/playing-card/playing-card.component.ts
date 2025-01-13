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
export class PlayingCardComponent implements OnInit, OnChanges{

  @Input() cardIsSelected : boolean | undefined;
  @Input() playingCard : Card = new Card();
  @Output() playingCardToShare  = new EventEmitter<Card>();

  ngOnInit(): void {
    //console.log(this.playingCard);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardIsSelected']) {
      const previousValue = changes['cardIsSelected'].previousValue;
      const currentValue = changes['cardIsSelected'].currentValue;
      console.log("previousValue: " + previousValue);
      console.log("currentValue: " + currentValue);
    }
  }

  select() {

    //Check if already selected
    if (this.cardIsSelected) {
      //Set selected card as false
      this.deselect();

      //Share status with parent
      this.playingCardToShare.emit(this.playingCard);
    }
    else {

      //Select card (background)
      this.cardIsSelected = true;

      //Share status with parent
      this.playingCardToShare.emit(this.playingCard);
    }
  }

  deselect() {
    this.cardIsSelected = undefined;
  }
}
