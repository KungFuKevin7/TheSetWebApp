import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAuthToken();

      if (authToken != null) {
        const authReq =  req.clone(
          {
            setHeaders: {
              Authorization: `Bearer ${authToken}`,
            }
          });

        return next.handle(authReq);
      }

      return next.handle(req);
    }
}
