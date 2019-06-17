import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { User } from './models';
import { log } from 'util';

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

  form: { login: { email: string; password: string; }, signup: User } = {
    login: { email: '', password: '' },
    signup: { name: '', lastname: '', email: '', birthday: new Date(), aboutMe: '', password: '', phone: '' }
  };


  constructor(private session: SessionService) {
    this.form.login.email = 'dn@mail.com';
    this.form.login.password = '1234';
    this.login();
  }

  login() {
    this.session.login(this.form.login.email, this.form.login.password)
      .subscribe(rta => this.user = rta);
  }

  signup() {
    this.session.signup(this.form.signup)
      .subscribe(rta => {
        if (rta) {
          this.user = rta;
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
  }
}
