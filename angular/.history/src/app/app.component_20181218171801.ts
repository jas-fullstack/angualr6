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
  imgSrc : string = "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  addnumber(){
      return this.one + this.two;
  }

  onSave($event) {
    alert('yeaaaa!!');
  }
}
