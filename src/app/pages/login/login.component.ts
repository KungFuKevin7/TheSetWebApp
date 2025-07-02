import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Users} from '../../../models/Users';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {resetUserGames} from '../../store/game-state/game.actions';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user : Users = new Users();

  constructor(private authService: AuthService,
              private router: Router,
              private store : Store) {
    store.dispatch(resetUserGames());
  }

  ngOnInit(): void {
    this.authService.removeAuthToken()
    if (this.authService.getAuthToken() != null) {
      console.log(this.authService.getAuthToken());
      this.router.navigate(['/select-game']);
    }
  }

  login(){
    console.log(this.user.getUsername() + " " + this.user.getPassword());
    this.authService.login(
      new Users(this.user.getUsername(), this.user.getPassword()))
      .subscribe({ next: (result) => {
      },
      error: (err: HttpErrorResponse)=> {
        if (err.status === 400) {
          alert('Invalid username or password');
        }
        if (err.status === 500) {
          alert('Error on the server. Apollos');
        }
        else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    });
  }
}
