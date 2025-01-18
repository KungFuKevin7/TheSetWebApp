
export class Card {

  cardId? : number;
  cardImg? : string;
  displayedAmount? : number;
  texture? : string;
  shape? : string;
  colour? : string;


  constructor( cardId: number,
               cardImg: string ,
               displayedAmount : number,
               texture: string ,
               shape : string,
               colour : string )
  {
    this.cardId  = cardId;
    this.cardImg = cardImg;
    this.displayedAmount = displayedAmount;
    this.texture = texture;
    this.shape = shape;
    this.colour = colour;
  }

}
