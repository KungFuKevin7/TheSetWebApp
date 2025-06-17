import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
import {RegisterComponent} from './pages/register/register.component';
import {GameStatsComponent} from './pages/game-stats/game-stats.component';
import {provideEffects} from '@ngrx/effects';
import {GameStateEffects} from './store/game-state/game.effects';
import {SelectGameComponent} from './pages/select-game/select-game.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},//, providers: [provideEffects(UserEffects)]},
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'select-game', component: SelectGameComponent, pathMatch: 'full' },
  { path: 'play-game', component: GamePageComponent, providers: [provideEffects(GameStateEffects)]}
];
