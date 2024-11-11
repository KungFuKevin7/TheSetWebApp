import { Component } from '@angular/core';
import {HintComponent} from '../hint/hint.component';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [
    HintComponent
  ],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {
  loggedInName : string = 'Player One';
}
