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
import {provideState, provideStore, StoreModule} from '@ngrx/store';
import {userReducer} from './store/user-state/user.reducer';
import {gameReducer} from './store/game-state/game.reducers';
import {provideEffects} from '@ngrx/effects';
import {UserEffects} from './store/user-state/user.effects';
import {GameStateEffects} from './store/game-state/game.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideStore(userReducer),
    provideStore(gameReducer),
    provideState({name: 'user', reducer: userReducer}),
    provideState({name: 'game', reducer: gameReducer}),
    provideEffects(GameStateEffects),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
  ]
};
