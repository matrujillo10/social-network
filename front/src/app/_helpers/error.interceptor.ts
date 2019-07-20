import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../session.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    if (!request.url.includes("/login")) {
      return next.handle(request).pipe(catchError(err => {
        if (err.status === 403) {
          // auto logout if 403 response returned from api
          this.sessionService.logout();
          location.reload(true);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }))
    }
    return next.handle(request).pipe(catchError(err => {
      const error = err.error.message || err.statusText;
      alert(error);
      return throwError(error);
    }))
  }
}
