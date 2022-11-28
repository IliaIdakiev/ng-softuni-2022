import { Injectable, Provider } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError, EMPTY, Observable, of, tap, throwError } from "rxjs";

import { environment } from '../environments/environment';
const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', apiURL)
      });
    }
    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpResponse) { console.log(req.body); }
      }),
      catchError(err => {
        if (err.status === 0) {
          console.log('UNKNOWN ERROR')
          return EMPTY;
          // return Promise.resolve();
          // return [];
        }
        // return [err];
        // return Promise.reject(err);
        return throwError(() => err);
      })
    )
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};