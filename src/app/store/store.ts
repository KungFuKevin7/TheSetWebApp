import {BehaviorSubject, Observable} from 'rxjs';


export class Store<T> {
  state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  getState() : Observable<T> {
    return this.state$.asObservable();
  }

  getStateSnapshot() : T {
    return this.state$.getValue();
  }

  updateState(newState: Partial<T>) : void {
    const currentState = this.getStateSnapshot();
    const updatedState = {...currentState, ...newState};
    this.state$.next(updatedState);
  }

  setState(newState : T) : void {
    this.state$.next(newState);
  }
}
