import { Component } from '@angular/core';

@Component({
  selector: 'app-found-sets',
  standalone: true,
  imports: [],
  templateUrl: './found-sets.component.html',
  styleUrl: './found-sets.component.css'
})
export class FoundSetsComponent {
  foundSets : any = [
    {
      card1: "A",
      card2: "A",
      card3: "A",
    },
    {
      card1: "B",
      card2: "B",
      card3: "B",
    },
    {
      card1: "C",
      card2: "C",
      card3: "C",
    },
    {
      card1: "D",
      card2: "D",
      card3: "D",
    },
    {
      card1: "E",
      card2: "E",
      card3: "E",
    },
    {
      card1: "F",
      card2: "F",
      card3: "F",
    },
  ];
}
