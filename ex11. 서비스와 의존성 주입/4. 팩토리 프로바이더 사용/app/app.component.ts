import { Component } from '@angular/core';
import { IsDevProvider, UserServiceProvider } from './service/user.service.provider';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    IsDevProvider, // 팩토리 함수에 주입할 값의 프로바이더
    UserServiceProvider // 팩토리 프로바이더
  ]
})
export class AppComponent {
  constructor(public userService: UserService) {
    console.log(userService.getUser());
  }
}
