import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User, Post } from './models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WallService {

  api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getWall(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/wall/${userId}`)
      .pipe(catchError(this.handleError<Post[]>('getProfile', [])));
  }

  createPost(userId: number, post: Post, image: any): Observable<Post> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    formData.append('images', [image]);

    return this.http.post<Post>(`${this.api}/users/${userId}/posts`, formData);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
