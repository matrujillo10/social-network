import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  api = environment.API;
  sessionUser: User = JSON.parse(localStorage.getItem('currentUser'));
  seeingUser: User;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.api}/login`, { username, password }, httpOptions)
      .pipe(
        tap(profiles => {
          this.sessionUser = profiles;
          localStorage.setItem('currentUser', JSON.stringify(this.sessionUser));
        }),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.api}/users`, user, httpOptions)
      .pipe(
        tap(profiles => {
          this.sessionUser = profiles;
          localStorage.setItem('currentUser', JSON.stringify(this.sessionUser));
        }),
        catchError(this.handleError<User>('getProfile', undefined))
      );
  }

  logout() {
    this.sessionUser = undefined;
    this.seeingUser = undefined;
    localStorage.removeItem('currentUser');
  }

  getSession(): Observable<User> {
    return of(this.sessionUser)
      .pipe(tap(_ => this.seeingUser = null));
  }

  getSeeingProfile(): Observable<User> {
    return of(this.seeingUser);
  }

  getPeople(name): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users?name=${name}`)
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

  editProfile(nUser: User): Observable<User> {
    return this.http.put<User>(`${this.api}/users/${this.sessionUser.id}`, nUser, httpOptions)
      .pipe(
        tap(u => {
          this.sessionUser = u;
          localStorage.setItem('currentUser', JSON.stringify(this.sessionUser));
        })
      );
  }

  changePassword(oldPassword: string, newPassword: string): Observable<User> {
    return this.http.put<User>(`${this.api}/users/${this.sessionUser.id}/password`, { oldPassword, newPassword }, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
