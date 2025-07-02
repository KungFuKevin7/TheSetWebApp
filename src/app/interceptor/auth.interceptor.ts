import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {catchError, Observable, throwError} from 'rxjs';
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
        if (authToken != null) {
          const authReq =  req.clone(
            {
              setHeaders: {
                Authorization: `Bearer ${authToken}`,
              }
            });

          return next.handle(authReq).pipe(
            catchError( err => {
              if (err instanceof HttpErrorResponse && err.status === 401) {
                alert("Session ended.");
                this.authService.logout();
              }
                return throwError(() => err);
            })
          )
        }
      return next.handle(req);
    }
}
