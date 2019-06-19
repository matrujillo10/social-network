import { Component, OnInit } from '@angular/core';
import { User, Friendship } from '../models';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FriendsService } from '../friends.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: User;
  isMe = false;
  friends = 0;

  constructor(
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private friendship: FriendsService,
    private location: Location) { }

  ngOnInit() {

    const init = (id) => {
      if (id === 'me') {
        this.session.getSession().subscribe(u => this.profile = u);
        this.session.me();
        this.isMe = true;
      }
      else {
        this.session.getProfile(+id).subscribe(u => this.profile = u);
        this.isMe = false;
      }
      const reg = new RegExp('^/profile/(me|[0-9]+)(/wall|)$', 'g');
      const res = this.location.path().match(reg);

      if (res && res.length !== 0) {
        this.router.navigateByUrl(`/profile/${id}/wall`);
      }
      else {
        this.router.navigateByUrl(`/profile/${id}/friends`);
      }
    };

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const id = this.route.snapshot.paramMap.get('id');
        init(id);
      }
    });
    init(this.route.snapshot.paramMap.get('id'));
  }

  sendRequest(): void {
    this.session.getSession()
      .subscribe(me => {
        this.friendship.create(me.id, this.profile.id)
          .subscribe(f => this.friends = 1);
      });
  }
}
