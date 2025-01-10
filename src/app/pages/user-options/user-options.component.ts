import {Component, Input} from '@angular/core';
import {HintComponent} from '../hint/hint.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [
    HintComponent
  ],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {

  constructor(private authService: AuthService) {
  }

  getUsername(): string | null{
    return this.authService.getUsername();
  }

  logOut(){
    this.authService.logout();
  }
}
