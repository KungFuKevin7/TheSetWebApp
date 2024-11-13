import { Component } from '@angular/core';

@Component({
  selector: 'app-found-set-item',
  standalone: true,
  imports: [],
  templateUrl: './found-set-item.component.html',
  styleUrl: './found-set-item.component.css'
})
export class FoundSetItemComponent {
    cards : any = ['A','B','C'];
}
