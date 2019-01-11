import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id;
  constructor(private router_active: ActivatedRoute) { 
    this.router_active.params.map(p => p.id);
    console.log(this.router_active.params);
  }

  ngOnInit() {
  }

}
