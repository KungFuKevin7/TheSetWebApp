export interface CardState {
  cardId? : number;
  cardImg? : string;
  displayedAmount? : number;
  texture? : string;
  shape? : string;
  colour? : string;
  isSelected? : boolean;
}

//Game state definition
export interface GameState {
  cardsOnTable : CardState[];
  selectedCardsOnTable : CardState[];
  cardDeck : CardState[];
  gameFinished : boolean;
}

//Initial state
export const initialGameState: GameState = {
  cardsOnTable : [],
  selectedCardsOnTable : [],
  cardDeck: [],
  gameFinished : false
}
