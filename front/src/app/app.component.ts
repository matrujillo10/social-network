import { Component } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  birth: Date;
  friends: User[]
}

interface Friend extends User {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    firstName: 'David',
    lastName: 'Narvaez',
    birth: new Date(1996, 12, 27),
    friends: []
  };
}
