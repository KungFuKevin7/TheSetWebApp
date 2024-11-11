import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {GamePageComponent} from './pages/game-page/game-page.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'play-game', component: GamePageComponent}
];
