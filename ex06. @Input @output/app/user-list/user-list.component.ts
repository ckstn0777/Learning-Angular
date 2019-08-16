import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  // @Input() users: User[];

  private _users: User[];

  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  // setter와 getter를 사용하여 부모 컴포넌트가 전달한 데이터가
  // 자식 컴포넌트의 입력 프로퍼티에 바인딩되는 시점에 필요한 로직을 동작시킬 수 있다.
  // set과 get함수의 이름은 부모 컴포넌트 클래스 프로퍼티 이름과 동일해야 한다.

  // 단순히 데이터를 전달받아서 입력 프로퍼티에 바인딩하는 것에 그치지 않고,
  // setter를 사용하여 부모 컴포넌트가 전달한 users에서 역할 별로 사용자를 카운트하여 컴포넌트 프로퍼티에 할당하였다.
  // 이와 같이 부모 컴포넌트가 전달한 데이터에서 필요한 값을 추출하거나 검사 또는 변형할 때 setter는 매우 유용하다.
  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin = users.filter((user) => user.role === 'Administrator').length;
    this.cntDeveloper = users.filter((user) => user.role === 'Developer').length;
    this.cntDesigner = users.filter((user) => user.role === 'Designer').length;

    this._users = users;
  }
  get users(): User[] {
    return this._users;
  }

  // 자식 컴포넌트는 @Output 데코레이터와 함께 선언된 컴포넌트 프로퍼티(출력 프로퍼티)를
  // EventEmitter 객체로 초기화한다. 그리고 부모 컴포넌트로 상태를 전달하기 위해 emit() 메소드를
  // 사용하여 이벤트를 발생시키면서 상태를 전달한다. 부모 컴포넌트는
  // 자식 컴포넌트가 전달한 상태를 이벤트 바인딩을 통해 접수한다.
  @Output() remove = new EventEmitter<User>();
}
