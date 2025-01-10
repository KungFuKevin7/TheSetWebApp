import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthService} from '../../services/auth.service';
import {Users} from '../../../models/Users';

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user : Users = new Users();
  confirmPassword : string = "";

  constructor(private authService: AuthService) {
  }

  register(){
    if (this.passwordAreEqual()){
      this.authService.register(this.user).subscribe(
        response => console.log(response)
      );
    }
    else{
      alert("Passwords do not match! Hope you still remember...")
    }
  }

  passwordAreEqual() : boolean{
    return this.user.getPassword() == this.confirmPassword;
  }
}
