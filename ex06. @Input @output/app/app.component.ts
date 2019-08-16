// @Input 데코레이터 사용법
// form 요소를 가지고 있는 부모 컴포넌트의 경우, 사용자에 의해 상태(state)가 변경되면 이를 자식 컴포넌트와 공유할 필요가 있다.
// 이러한 경우 부모 컴포넌트는 프로퍼티 바인딩을 통해 자식 컴포넌트에게 상태 정보를 전달한다.
// 자식 컴포넌트는 부모 컴포넌트가 전달한 상태 정보를 @Input 데코레이터를 통해 컴포넌트 프로퍼티(입력 프로퍼티)에 바인딩한다.
import { Component } from '@angular/core';
import { User } from './model/user.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];

  constructor() {
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer')
    ];
  }

  addUser(name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }

  removeUser(user: User) {
    this.users = this.users.filter(({ id }) => id !== user.id);
  }
}
