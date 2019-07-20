import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SessionService } from '../session.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    var headers = new HttpHeaders({
      "Access-Control-Allow-Credentials": "true"
    });
    request = request.clone({
      headers: headers,
      withCredentials: true
    });


    return next.handle(request);
  }
}
