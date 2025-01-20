import {Store} from './store';
import {CardState, GameState} from './game.state';
import {Card} from '../../models/Card';
import {PlayingTableService} from '../services/playing-table.service';

export class GameActions {
  constructor( private store: Store<GameState>) { }

  //Initialize the game state
  initialize(deck: Card[]): void {
    const initialCardsOnTable = deck.slice(0,12);
    const remainingDeck = deck.slice(12);

    this.store.setState({
        cardsOnTable: initialCardsOnTable,
        selectedCardsOnTable: [],
        cardDeck: remainingDeck,
        gameFinished: false
      });
  }

  selectCard(card: Card): void {
    const state = this.store.getStateSnapshot();
    const {selectedCardsOnTable} = state;

    if (selectedCardsOnTable.length < 3){
     const newSelectedCardsOnTable = [...selectedCardsOnTable, card];
     this.store.updateState({selectedCardsOnTable: newSelectedCardsOnTable});

     if (newSelectedCardsOnTable.length === 3){
       //send for review
     }
    }
  }

  private validateSet(selectedCards: Card[]) : void {
    let isValid = false;

    //If Set is deemed valid
    if (isValid){
      this.replaceCards(selectedCards);
      this.store.updateState({
        selectedCardsOnTable: [],
      });
    }
    //If Set is deemed invalid, deselect all cards
    else {
      this.store.updateState({ selectedCardsOnTable: [] });
    }
  }

  //When selected cards form a valid set,
  //Replace the selected cards with new cards from deck
  private replaceCards(selectedCards: Card[]) : void {
    const currentState = this.store.getStateSnapshot();
    const newDeck = [...currentState.cardDeck];
    const newCardsOnTable = [...currentState.cardsOnTable];

    //Pick three cards from the Stack
  }

  //Updates game status, to finalize the game
  finalizeGame(): void {
    this.store.updateState({gameFinished: true});
  }
}
