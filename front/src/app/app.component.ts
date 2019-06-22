import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { User } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = 0;
  user: User;
  friendSearch: string;
  showModal = false;
  listPeople: User[] = [];

  isEditProfile = false;
  newPassword: string;

  form: { login: { email: string; password: string; }, signup: User } = {
    login: { email: '', password: '' },
    signup: { name: '', lastname: '', email: '', birthday: new Date(), aboutMe: '', password: '', phone: '' }
  };

  constructor(private session: SessionService, private router: Router) {
    // this.form.login.email = 'dn@mail.com';
    // this.form.login.password = '1234';
    // this.session.getSession().subscribe(u => this.user = JSON.parse(JSON.stringify(u)));
  }

  ngOnInit() {
    if (!this.user) {
      this.router.navigateByUrl(`/feed`);
    }
    else{
      this.router.navigateByUrl(`/profile/me`);
    }
  }

  login() {
    this.session.login(this.form.login.email, this.form.login.password)
      .subscribe(rta => this.user = JSON.parse(JSON.stringify(rta)));
  }

  signup() {
    this.session.signup(this.form.signup)
      .subscribe(rta => {
        if (rta) {
          this.user = JSON.parse(JSON.stringify(rta));
        }
      });
  }

  changeState(state: number) {
    this.state = state;
  }

  search() {
    this.session.getPeople().subscribe(people => {
      people.forEach(p => {
        if (p.name.toUpperCase().includes(this.friendSearch.toUpperCase())
          || p.lastname.toUpperCase().includes(this.friendSearch.toUpperCase())
          || `${p.name} ${p.lastname}`.toUpperCase().includes(this.friendSearch.toUpperCase())) {
          this.listPeople.push(p);
        }
      });
      this.showModal = true;
      this.friendSearch = '';
    });
  }

  closeModal() {
    this.showModal = false;
    this.listPeople = [];
    this.isEditProfile = false;
  }

  logOut() {
    this.session.logout();
    this.user = undefined;
  }

  doEditProfile() {
    this.isEditProfile = true;
  }

  editProfile() {
    if (this.user.password && this.newPassword) {
      this.session.changePassword(this.user.password, this.newPassword)
        .subscribe(u => {
          if (JSON.stringify(this.user) !== JSON.stringify(u)) {
            this.session.editProfile(this.user)
              .subscribe((u1: User) => {
                this.user = JSON.parse(JSON.stringify((u1)));
                this.isEditProfile = false;
                this.router.navigateByUrl('/profile/me');
              });
          }
        });
    }
    else {
      this.session.getSession()
        .subscribe(u => {
          if (JSON.stringify(this.user) !== JSON.stringify(u)) {
            this.session.editProfile(this.user)
              .subscribe((u1: User) => {
                this.user = JSON.parse(JSON.stringify((u1)));
                this.isEditProfile = false;
                this.router.navigateByUrl('/profile/me');
              });
          }
        });
    }
  }
}
