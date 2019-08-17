import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onNgSubmit(user) {
    /* {userid: "~", password:{password1:"~", password2:"~"}*/
    console.log(user);

    if (user.password.password1 !== user.password.password2) {
      console.log('패스워드가 일치하지 않습니다');
    }
  }
}
