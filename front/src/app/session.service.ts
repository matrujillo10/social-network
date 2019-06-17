import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  api = 'http://localhost:8080/users';
  sessionUser: User;

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<User> {
    return this.http.get<User>(this.api)
      .pipe(
        map(profiles => profiles[0]),
        tap(profiles => this.sessionUser = profiles),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  getSession(): Observable<User> {
    return of(this.sessionUser);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
