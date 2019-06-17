import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User, Post, Friend } from './models';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  getFriends(userID: number): Observable<Friend[]> {
    return this.doRequest<Friend[]>(`${this.api}/users/${userID}/friendships`);
  }

  getPendent(userID: number): Observable<Friend[]> {
    return this.doRequest<Friend[]>(`${this.api}/recipient/${userID}/friendships`)
      .pipe(map(friends => friends.map((f: Friend) => ({ accepted: f.accepted, ...f.id.sender, state: 0 }))));
  }

  getSent(userID: number): Observable<Friend[]> {
    return this.doRequest<Friend[]>(`${this.api}/sender/${userID}/friendships`)
      .pipe(map(friends => friends.map((f: Friend) => ({ accepted: f.accepted, ...f.id.recipient, state: 1 }))));
  }

  delete(fID: number, sID: number): Observable<Friend> {
    return this.http.delete<Friend>(`${this.api}/users/${fID}/users/${sID}/friendships`)
      .pipe(catchError(this.handleError<Friend>(`deleteFriendship`, undefined)));
  }

  create(senderID: number, recipientID: number): Observable<Friend> {
    return this.http.post<Friend>(`/sender/${senderID}/recipient/${recipientID}/friendship`, {}, httpOptions)
      .pipe(catchError(this.handleError<Friend>(`createFriendship`, undefined)));
  }

  acceptRequest(senderID: number, recipientID: number): Observable<Friend> {
    return this.http.put<Friend>(`${this.api}/sender/${senderID}/recipient/${recipientID}/friendship`, {}, httpOptions)
      .pipe(catchError(this.handleError<Friend>(`acceptFriendship`, undefined)));
  }

  private doRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(catchError(this.handleError<T>(`doRequest - ${url}`, undefined)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
