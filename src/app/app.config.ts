import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import {provideRouter, ROUTES} from '@angular/router';
import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';
import {authInterceptor} from './interceptor/auth.interceptor';
import {provideState, provideStore} from '@ngrx/store';
import {gameReducer} from './store/game-state/game.reducers';
import {provideEffects} from '@ngrx/effects';
import {GameStateEffects} from './store/game-state/game.effects';
import {cardsReducer} from './store/cards-state/cards.reducer';
import {setReducer} from './store/set-state/set.reducer';
import {boardReducer} from './store/board-state/board.reducer';
import {SetEffects} from './store/set-state/set.effects';
import {BoardEffects} from './store/board-state/board-effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideStore(setReducer),
    provideStore(gameReducer),
    provideStore(cardsReducer),
    provideStore(boardReducer),
    provideState({name: 'sets', reducer: setReducer}),
    provideState({name: 'game', reducer: gameReducer}),
    provideState({name: 'cards', reducer: cardsReducer}),
    provideState({name: 'board', reducer: boardReducer}),
    provideEffects(GameStateEffects),
    provideEffects(SetEffects),
    provideEffects(BoardEffects),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
  ]
};
