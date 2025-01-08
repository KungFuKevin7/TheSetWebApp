import {inject, Injectable} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';
/*

export const AuthGuardService : CanActivateFn () => {

  let isAuthenticated: boolean = inject(AuthService).isAuthenticated();
  let router = inject(Router)

  if (isAuthenticated) {
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
}
*/
