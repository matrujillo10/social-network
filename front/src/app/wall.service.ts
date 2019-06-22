import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User, Post, Comment } from './models';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WallService {

  api = environment.API;

  constructor(private http: HttpClient) { }

  getWall(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/wall/${userId}`)
      .pipe(catchError(this.handleError<Post[]>('getProfile', [])));
  }

  createPost(userId: number, post: Post, image: File): Observable<Post> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    formData.append('images', image);

    return this.http.post<Post>(`${this.api}/users/${userId}/posts`, formData);
  }

  getImage(filename: string): string {
    return `${this.api}/downloadFile/${filename}`;
  }

  createComment(postID: number, from: User, comment: string): Observable<Comment> {
    console.log(comment);

    return this.http.post<Comment>(`${this.api}/posts/${postID}/comments`, { user: from, comment }, httpOptions);
  }

  deletePost(userID: number, id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.api}/users/${userID}/posts/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}`);
      console.error(error);
      return of(result as T);
    };
  }
}
