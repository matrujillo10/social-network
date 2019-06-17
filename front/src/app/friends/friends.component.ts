import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { User, Friendship, Friend } from '../models';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private session: SessionService) { }
  currentUser: User;
  showingFriends: Friendship[];

  ngOnInit() {
    this.session
      .getSession()
      .subscribe(user => {
        this.currentUser = user;
        this.seeAllFriends();
      });
  }

  seeAllFriends(): void {
    this.showingFriends = [...this.currentUser.friendshipsRecieved, ...this.currentUser.friendshipsSent].filter(f => f.accepted === 0);
  }

  seeSentRequests(): void {
    this.showingFriends = this.currentUser.friendshipsSent;
  }

  seeReceivedRequests(): void {
    this.showingFriends = this.currentUser.friendshipsRecieved;
  }
}
