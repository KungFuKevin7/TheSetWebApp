import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {Users} from '../../models/Users';
import {API_URL} from '../.constants';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {setUser} from '../store/user-state/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //isLoggedIn : boolean = false;
  UserAPIURL = `${API_URL}/user`;

  constructor(private http: HttpClient, private router: Router, private store : Store) { }

  login(userDetails : Users): Observable<boolean> {
    return this.http.post<any>(`${this.UserAPIURL}/login`, userDetails)
      .pipe(
        map(response =>{
          //Store the generated token in the client (localstorage)
          console.log(response);
          localStorage.setItem('username', response.username);
          localStorage.setItem('userid', response.userid);
          localStorage.setItem('expiresInMillis', response.expiresInMillis);
          localStorage.setItem('jwt_token', response.token);
          //this.isLoggedIn = true;

          let user = new Users(response.userid, response.username)

          this.store.dispatch(setUser(
            { jwt: localStorage.getItem('jwt_token')}
          ));

          this.router.navigate(['/play-game']);
          return true;
        }),catchError(err => {
          console.log(err);
          //this.isLoggedIn = false;
          return of(false);
        })
      );
  }

  register(UserDetails : Users) {
    return this.http.post<any>(`${this.UserAPIURL}/register`, UserDetails).pipe(
    );
  }

  logout() : void{
    localStorage.clear();
    //this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
/*

  isAuthenticated() : boolean{
    return this.isLoggedIn;
  }
*/

  getAuthToken(){
    return localStorage.getItem('jwt_token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getExpirationDate(){
    return localStorage.getItem('expiresInMillis');
  }

  tokenIsExpired() : boolean {

    //If expiration is 0, then expiration is not set yet
    if (Number(this.getExpirationDate()) === 0){
      return true;
    }

    //return validity
    return Number(this.getExpirationDate()) > Date.now();
  }

  getUserId(){
    return localStorage.getItem('userid');
  }
}
