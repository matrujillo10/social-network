import { Component, OnInit, ViewChild } from '@angular/core';
import { User, Friendship } from '../models';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor(private service: SessionService) { }

  ngOnInit() {
    this.doLogin('', '');
  }

  doLogin(login: string, password: string): void {
    this.service
      .login(login, password)
      .subscribe(profile => {
        this.profile = profile;
        this.profile.aboutMe = 'Hola soy yo y este es mi perfil #COl y blablabla';
        this.profile.friendshipsSent.push({ sender: { email: 'dn@mail.com' }, recipient: { name: 'Angela', lastname: 'Narvaez' }, accepted: 0 });
        this.profile.friendshipsRecieved.push({ recipient: { email: 'dn@mail.com' }, sender: { name: 'Adriana', lastname: 'Guerrero' }, accepted: 0 });
        this.profile.postsCreated.push( {content:'Mi primer post', creator: {name: 'David', lastname: 'Narvaez'}, comments: [{comment:'Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}, {comment:'Msao Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}]} );
        this.profile.postsCreated.push( {content:'Mi primer post', creator: {name: 'David', lastname: 'Narvaez'}, comments: [{comment:'Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}, {comment:'Msao Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}]} );
        this.profile.postsCreated.push( {content:'Mi primer post', creator: {name: 'David', lastname: 'Narvaez'}, comments: [{comment:'Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}, {comment:'Msao Excelente post', user: {name: 'Angela', lastname: 'Narvaez'}}]} );
      });
  }
}
