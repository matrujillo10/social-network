import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { User, Friendship, Friend } from '../models';
import { FriendsService } from '../friends.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private session: SessionService, private friendsService: FriendsService, private route: ActivatedRoute) { }
  currentUser: User;
  showingFriends: Friend[];
  myProfile = true;

  currState: number;

  ngOnInit() {
    this.route.parent.url.subscribe((urlPath) => {
      const id = urlPath[urlPath.length - 1].path;
      if (id !== 'me') {
        this.myProfile = false;
        this.currentUser = this.session.seeingUser;
        this.seeAllFriends(this.currentUser);
      }
      else {
        this.session
          .getSession()
          .subscribe(user => {
            this.currentUser = user;
            this.seeAllFriends(this.currentUser);
          });
      }
    });
  }

  seeAllFriends(user: User): void {
    if (this.currState !== 0) {
      this.friendsService.getFriends(user.id)
        .subscribe(friends => {
          this.showingFriends = friends.map(f => ({ ...f, accepted: 1 }));
          this.currState = 0;
        });
    }
  }

  seeSentRequests(): void {
    if (this.currState !== 1) {
      this.friendsService.getSent(this.currentUser.id)
        .subscribe(friends => {
          this.showingFriends = friends;
          this.currState = 1;
        });
    }
  }

  seeReceivedRequests(): void {
    if (this.currState !== 2) {
      this.friendsService.getPendent(this.currentUser.id)
        .subscribe(friends => {
          this.showingFriends = friends;
          this.currState = 2;
        });
    }
  }

  deleteRequest(friendID: number): void {
    this.friendsService.delete(this.currentUser.id, friendID)
      .subscribe(f => this.refreshState());
  }

  acceptRequest(friendID: number): void {
    this.friendsService.acceptRequest(this.currentUser.id, friendID)
      .subscribe(_ => this.refreshState());
  }

  private refreshState(): void {
    const toRefresh = [
      () => this.seeAllFriends(this.currentUser),
      () => this.seeSentRequests(),
      () => this.seeReceivedRequests()
    ][this.currState];
    this.currState = -1;
    toRefresh();
  }
}
