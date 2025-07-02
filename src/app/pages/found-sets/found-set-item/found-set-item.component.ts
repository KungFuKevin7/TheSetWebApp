import {Component, Input} from '@angular/core';
import {SetDto} from '../../../dto/SetDto';
import {PlayingCardComponent} from '../../playing-card/playing-card.component';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-found-set-item',
  standalone: true,
  imports: [
    PlayingCardComponent,
    FormsModule,
    CommonModule,
    NgFor
  ],
  templateUrl: './found-set-item.component.html',
  styleUrl: './found-set-item.component.css'
})
export class FoundSetItemComponent {
  @Input() set? : SetDto;

  convertToCard(setDto:SetDto):void {

  }
}
