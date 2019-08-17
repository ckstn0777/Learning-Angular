import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onNgSubmit(userForm, userid, password) {
    console.log(userForm); // MgForm
    console.log(userid);   // NgModel
    console.log(password); // 네이티브 DOM
  }
}
