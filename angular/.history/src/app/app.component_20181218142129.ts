import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruit : string = 'apple';
  one : number = 100;
  two : number = 50
  addnumber(){
      return this.two + this.two;
  }
}
