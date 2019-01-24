import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router' 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logout()
  {
    var id = 1;
    this.route.navigate(['/users',id]);
  }
}
