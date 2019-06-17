import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  api = 'http://localhost:8080';
  sessionUser: User;
  seeingUser: User;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.api}/login`, { email, password }, httpOptions)
      .pipe(
        tap(profiles => this.sessionUser = profiles),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.api}/users`, user, httpOptions)
      .pipe(
        tap(profiles => this.sessionUser = profiles),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  getSession(): Observable<User> {
    return of(this.sessionUser)
      .pipe(tap(_ => this.seeingUser = null));
  }

  getSeeingProfile(): Observable<User> {
    return of(this.seeingUser);
  }

  getPeople(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`)
      .pipe(catchError(this.handleError<User[]>('getProfile', undefined)));
  }

  me() {
    this.seeingUser = undefined;
  }

  getProfile(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}`)
      .pipe(
        tap(u => this.seeingUser = u),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
