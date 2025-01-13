import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) { }

  //Intercept any HTTP Request
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = this.authService.getAuthToken();

      //Check if token is still valid before requesting resource
      if (!this.authService.tokenIsExpired()) {
        if (authToken != null) {
          const authReq =  req.clone(
            {
              setHeaders: {
                Authorization: `Bearer ${authToken}`,
              }
            });

          return next.handle(authReq);
        }
      }

      //Remove current session and lead to login page
      else{
        this.authService.logout();
        this.router.navigate(["/"]);
      }

      return next.handle(req);
    }
}
