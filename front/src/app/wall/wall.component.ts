import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { User, Post } from '../models';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  currentUser: User;
  posts: Post[];

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session
      .getSession()
      .subscribe(user => {
        this.currentUser = user;
        this.seePosts(this.currentUser);
      });
  }

  seePosts(user) {
    this.posts = [...user.postsCreated, ...user.postsRecieved];
  }
}
