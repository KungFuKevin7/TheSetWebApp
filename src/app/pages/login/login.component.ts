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
    this.authService.removeAuthToken()
    if (this.authService.getAuthToken() != null) {
      console.log("Hi")
      console.log(this.authService.getAuthToken());
      this.router.navigate(['/select-game']);
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
