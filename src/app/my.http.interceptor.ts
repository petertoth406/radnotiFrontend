import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('http')) {
      console.log('Tartalmazza');
    }
    console.log(request);
    console.log(next);

    let copyRequest = request.clone({
      headers: new HttpHeaders({}),
    });

    next.handle(copyRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 200 || err.statusText == 'NotFound') {
          console.log('4043z87237732');
        }
        return err.error;
      })
    );

    return next.handle(copyRequest);
  }
}
