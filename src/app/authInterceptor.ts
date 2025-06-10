
import {HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { fetchAuthSession } from 'aws-amplify/auth';



@Injectable()
export class AuthInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(fetchAuthSession()).pipe(
      switchMap(session => {
        const idToken = session.tokens?.idToken?.toString();
        if (!idToken) return next.handle(req);

        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${idToken}`
          }
        });

        return next.handle(cloned);
      })
    );
  }
}
