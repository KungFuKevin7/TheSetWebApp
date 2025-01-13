import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private authService: AuthService,
              private router: Router) { }

  confirmLogOut() : void{
    if (this.authService.getAuthToken() != null) {
      if(confirm("This action will log you out, do you wish to continue mate?")){
        this.router.navigate(['/']);
      }
    }
  }
}
