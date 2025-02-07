import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Users} from '../../../models/Users';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user : Users = new Users();
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.getAuthToken() != null) {
      this.router.navigate(['/play-game']);
    }
  }


  login(){

    console.log(this.user.getUsername() + " " + this.user.getPassword());

    this.authService.login(
      new Users(this.user.getUsername(), this.user.getPassword()))
      .subscribe(
        //Redirect
      );
  }
}
