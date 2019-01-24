import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router_active: ActivatedRoute) { 
    console.log(this.router_active.params);
  }

  ngOnInit() {
  }

}
