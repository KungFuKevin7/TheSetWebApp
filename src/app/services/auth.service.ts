import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn : boolean = false;

  login(userDetails: {username :string, password:string}): Observable<boolean> {
    return this.http.post<any>('http://localhost:8080/api/user/login', userDetails)
      .pipe(
        map(response =>{
          //Store the generated token in the client (localstorage)
          localStorage.setItem('jwt_token', response.token);
          this.isLoggedIn = true;
          return true;
        }),catchError(err => {
          console.log(err);
          this.isLoggedIn = false;
          return of(false);
        })
      );
  }

  logout() : void{
    localStorage.removeItem('jwt_token');
    this.isLoggedIn = false;
  }

  isAuthenticated() : boolean{
    return this.isLoggedIn;
  }
}
