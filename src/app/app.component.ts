import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CommonModule} from '@angular/common';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SetGame';

  constructor(private authService : AuthService) {
  }

  ngOnInit(): void {

    console.log('Hello World!');
  }

}
