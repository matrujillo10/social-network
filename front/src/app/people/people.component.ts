import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

  }
}
