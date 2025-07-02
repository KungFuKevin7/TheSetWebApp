import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import { Card } from '../../../models/Card';
import {DeckCardDto} from '../../dto/DeckCardDto';

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
export class PlayingCardComponent {

  //Card that component is representing
  @Input() playingCard! : DeckCardDto;

}
